import { NextResponse } from "next/server";
import {
  buildShareProfileAiContext,
  getPortfolioShareLinkByCode,
  isValidPortfolioShareCode,
  normalizePortfolioShareCode,
} from "@/lib/site/portfolioShareLinks";

const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const REQUEST_TIMEOUT_MS = 25000;
const MAX_PROMPT_LENGTH = 2400;
const MAX_CONTEXT_LENGTH = 7000;
const BURST_WINDOW_MS = 60_000;
const BURST_REQUEST_LIMIT = 3;
const BURST_COOLDOWN_MS = 300_000;
const ROLLING_WINDOW_MS = 3_600_000;
const ROLLING_REQUEST_LIMIT = 12;
const STALE_REQUESTER_TTL_MS = 7_200_000;

const SYSTEM_INSTRUCTIONS =
  "You are an assistant for Udit Khandelwal's executive portfolio site. " +
  "Answer clearly for hiring managers, recruiters, and product leaders. " +
  "Use provided context first, avoid inventing facts, and say when context is limited. " +
  "Keep responses concise and practical.";

type RequesterRateState = {
  burstTimestamps: number[];
  rollingTimestamps: number[];
  cooldownUntil: number;
};

const requesterRateState = new Map<string, RequesterRateState>();

type AIRequestBody = {
  prompt?: string;
  context?: string;
  page?: string;
  shareCode?: string;
};

function toUnixSeconds(milliseconds: number) {
  return Math.max(1, Math.ceil(milliseconds / 1000));
}

function getRequesterKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const userAgent = request.headers.get("user-agent") ?? "unknown-agent";
  const ipCandidate = forwardedFor?.split(",")[0]?.trim() || realIp?.trim() || "unknown-ip";
  const normalizedAgent = userAgent.slice(0, 120).toLowerCase();
  return `${ipCandidate}|${normalizedAgent}`;
}

function pruneRequesterState(now: number) {
  for (const [key, state] of requesterRateState.entries()) {
    state.burstTimestamps = state.burstTimestamps.filter(
      (timestamp) => now - timestamp <= BURST_WINDOW_MS,
    );
    state.rollingTimestamps = state.rollingTimestamps.filter(
      (timestamp) => now - timestamp <= ROLLING_WINDOW_MS,
    );

    const newestBurst = state.burstTimestamps[state.burstTimestamps.length - 1] ?? 0;
    const newestRolling = state.rollingTimestamps[state.rollingTimestamps.length - 1] ?? 0;
    const newestActivity = Math.max(newestBurst, newestRolling, state.cooldownUntil);
    if (newestActivity > 0 && now - newestActivity <= STALE_REQUESTER_TTL_MS) {
      continue;
    }

    requesterRateState.delete(key);
  }
}

function evaluateRequesterRateLimit(request: Request, now: number) {
  pruneRequesterState(now);

  const requesterKey = getRequesterKey(request);
  const state =
    requesterRateState.get(requesterKey) ??
    {
      burstTimestamps: [],
      rollingTimestamps: [],
      cooldownUntil: 0,
    };

  state.burstTimestamps = state.burstTimestamps.filter(
    (timestamp) => now - timestamp <= BURST_WINDOW_MS,
  );
  state.rollingTimestamps = state.rollingTimestamps.filter(
    (timestamp) => now - timestamp <= ROLLING_WINDOW_MS,
  );

  if (state.cooldownUntil > now) {
    requesterRateState.set(requesterKey, state);
    const retryAfter = toUnixSeconds(state.cooldownUntil - now);
    return {
      allowed: false as const,
      retryAfter,
      code: "ai_guardrail_cooldown",
      error:
        "AI guardrail is active due to repeated rapid prompts. Please wait a few minutes before trying again.",
    };
  }

  if (state.burstTimestamps.length >= BURST_REQUEST_LIMIT) {
    state.cooldownUntil = now + BURST_COOLDOWN_MS;
    requesterRateState.set(requesterKey, state);
    const retryAfter = toUnixSeconds(BURST_COOLDOWN_MS);
    return {
      allowed: false as const,
      retryAfter,
      code: "ai_guardrail_burst",
      error:
        "Too many prompts submitted in quick succession. Please pause before sending another request.",
    };
  }

  if (state.rollingTimestamps.length >= ROLLING_REQUEST_LIMIT) {
    requesterRateState.set(requesterKey, state);
    const oldest = state.rollingTimestamps[0];
    const retryAfter = oldest
      ? toUnixSeconds(ROLLING_WINDOW_MS - (now - oldest))
      : toUnixSeconds(ROLLING_WINDOW_MS);
    return {
      allowed: false as const,
      retryAfter,
      code: "ai_guardrail_quota",
      error:
        "AI helper usage limit reached for now. Please try again later.",
    };
  }

  state.burstTimestamps.push(now);
  state.rollingTimestamps.push(now);
  state.cooldownUntil = 0;
  requesterRateState.set(requesterKey, state);

  return {
    allowed: true as const,
  };
}

function parseErrorMessage(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const record = payload as Record<string, unknown>;
  const errorValue = record.error;
  if (!errorValue || typeof errorValue !== "object") {
    return null;
  }

  const errorRecord = errorValue as Record<string, unknown>;
  const message = errorRecord.message;
  return typeof message === "string" ? message : null;
}

function extractOutputText(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const record = payload as Record<string, unknown>;
  const directOutput = record.output_text;
  if (typeof directOutput === "string" && directOutput.trim().length > 0) {
    return directOutput.trim();
  }

  const output = Array.isArray(record.output) ? record.output : [];
  const chunks: string[] = [];

  for (const outputItem of output) {
    if (!outputItem || typeof outputItem !== "object") {
      continue;
    }

    const outputRecord = outputItem as Record<string, unknown>;
    const content = Array.isArray(outputRecord.content) ? outputRecord.content : [];

    for (const contentItem of content) {
      if (!contentItem || typeof contentItem !== "object") {
        continue;
      }

      const contentRecord = contentItem as Record<string, unknown>;
      const contentText = contentRecord.text;
      if (typeof contentText === "string" && contentText.trim().length > 0) {
        chunks.push(contentText.trim());
      }
    }
  }

  return chunks.length > 0 ? chunks.join("\n\n") : null;
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        code: "missing_api_key",
        error:
          "AI is not configured yet (OPENAI_API_KEY is missing). Add it in environment variables and retry.",
      },
      { status: 503 },
    );
  }

  let body: AIRequestBody;
  try {
    body = (await request.json()) as AIRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, code: "invalid_json", error: "Invalid JSON request body." },
      { status: 400 },
    );
  }

  const prompt = body.prompt?.trim();
  const context = body.context?.trim();
  const page = body.page?.trim();
  const shareCode = body.shareCode?.trim();

  if (!prompt) {
    return NextResponse.json(
      { ok: false, code: "missing_prompt", error: "prompt is required." },
      { status: 400 },
    );
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    return NextResponse.json(
      {
        ok: false,
        code: "prompt_too_long",
        error: `Prompt is too long. Please keep it under ${MAX_PROMPT_LENGTH} characters.`,
      },
      { status: 400 },
    );
  }

  const rateLimitDecision = evaluateRequesterRateLimit(request, Date.now());
  if (!rateLimitDecision.allowed) {
    return NextResponse.json(
      {
        ok: false,
        code: rateLimitDecision.code,
        error: rateLimitDecision.error,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimitDecision.retryAfter),
        },
      },
    );
  }

  const model = process.env.OPENAI_MODEL?.trim() || "gpt-5-mini";
  const normalizedShareCode = shareCode ? normalizePortfolioShareCode(shareCode) : "";
  const shareProfile =
    normalizedShareCode && isValidPortfolioShareCode(normalizedShareCode)
      ? await getPortfolioShareLinkByCode(normalizedShareCode, { activeOnly: true })
      : null;
  const shareProfileBlock = shareProfile
    ? `Share profile context:\n${buildShareProfileAiContext(shareProfile)}`
    : "Share profile context: not provided.";
  const contextBlock = context
    ? `Page context:\n${context.slice(0, MAX_CONTEXT_LENGTH)}`
    : "Page context: not provided.";
  const pageBlock = page ? `Page: ${page}` : "Page: unknown";

  const userInput = `${pageBlock}\n\n${shareProfileBlock}\n\n${contextBlock}\n\nVisitor request:\n${prompt}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const upstreamResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        model,
        max_output_tokens: 700,
        reasoning: { effort: "low" },
        text: { verbosity: "low" },
        input: [
          {
            role: "system",
            content: [{ type: "input_text", text: SYSTEM_INSTRUCTIONS }],
          },
          {
            role: "user",
            content: [{ type: "input_text", text: userInput }],
          },
        ],
      }),
    });

    clearTimeout(timeout);

    const payload = (await upstreamResponse.json().catch(() => null)) as unknown;

    if (!upstreamResponse.ok) {
      const upstreamMessage =
        parseErrorMessage(payload) || "AI service error. Please try again.";

      if (upstreamResponse.status === 429) {
        return NextResponse.json(
          {
            ok: false,
            code: "rate_limited",
            error:
              "AI is temporarily rate-limited. Please wait a moment and try again.",
          },
          { status: 429 },
        );
      }

      if (upstreamResponse.status >= 500) {
        return NextResponse.json(
          {
            ok: false,
            code: "upstream_failure",
            error:
              "AI service is temporarily unavailable. Please retry in a few moments.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json(
        { ok: false, code: "upstream_rejected", error: upstreamMessage },
        { status: 502 },
      );
    }

    const answer = extractOutputText(payload);
    if (!answer) {
      return NextResponse.json(
        {
          ok: false,
          code: "empty_response",
          error:
            "AI did not return usable text. Please refine your question and try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, model, answer });
  } catch (error) {
    clearTimeout(timeout);

    if (error instanceof DOMException && error.name === "AbortError") {
      return NextResponse.json(
        {
          ok: false,
          code: "timeout",
          error: "AI request timed out. Please try again with a shorter question.",
        },
        { status: 504 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        code: "request_failed",
        error: "Unable to reach AI service right now. Please retry shortly.",
      },
      { status: 502 },
    );
  }
}
