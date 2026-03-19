import { NextResponse } from "next/server";
import {
  createIntentLink,
  deactivateIntentLink,
  getIntentLinkByCode,
  isValidIntentCode,
  listIntentLinks,
  normalizeIntentCode,
  type IntentLinkRecord,
} from "@/lib/site/ukrLinks";

type CreateIntentLinkBody = {
  password?: string;
  org?: string;
  positionTitle?: string;
  positionUrl?: string;
  intentType?: string;
  notes?: string;
};

type DeactivateIntentLinkBody = {
  password?: string;
  code?: string;
};

function getAdminPasswordFromRequest(
  request: Request,
  bodyPassword?: string,
) {
  const headerPassword = request.headers.get("x-intent-admin-password")?.trim();
  if (headerPassword) {
    return headerPassword;
  }

  const authorization = request.headers.get("authorization")?.trim() ?? "";
  const bearerPrefix = "bearer ";
  if (authorization.toLowerCase().startsWith(bearerPrefix)) {
    const token = authorization.slice(bearerPrefix.length).trim();
    if (token) {
      return token;
    }
  }

  if (bodyPassword?.trim()) {
    return bodyPassword.trim();
  }

  return "";
}

function getConfiguredPassword() {
  return process.env.INTENT_LINK_ADMIN_PASSWORD?.trim() ?? "";
}

function toResponseLink(link: IntentLinkRecord, origin: string) {
  return {
    code: link.code,
    queryParam: "ukr" as const,
    url: `${origin}?ukr=${link.code}`,
    org: link.org,
    positionTitle: link.positionTitle,
    positionUrl: link.positionUrl,
    intentType: link.intentType,
    notes: link.notes,
    isActive: link.isActive,
    createdAt: link.createdAt.toISOString(),
    updatedAt: link.updatedAt.toISOString(),
  };
}

function verifyAdminPassword(request: Request, bodyPassword?: string) {
  const configuredPassword = getConfiguredPassword();
  if (!configuredPassword) {
    return {
      ok: false as const,
      response: NextResponse.json(
        {
          ok: false,
          code: "missing_admin_password",
          error:
            "Intent link management is not configured yet (INTENT_LINK_ADMIN_PASSWORD is missing).",
        },
        { status: 503 },
      ),
    };
  }

  const suppliedPassword = getAdminPasswordFromRequest(request, bodyPassword);
  if (!suppliedPassword || suppliedPassword !== configuredPassword) {
    return {
      ok: false as const,
      response: NextResponse.json(
        {
          ok: false,
          code: "unauthorized",
          error: "Invalid admin password for intent link management.",
        },
        { status: 401 },
      ),
    };
  }

  return { ok: true as const };
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const auth = verifyAdminPassword(request);
  if (!auth.ok) {
    return auth.response;
  }

  const url = new URL(request.url);
  const origin = url.origin;
  const codeQuery = url.searchParams.get("code");

  if (codeQuery) {
    const code = normalizeIntentCode(codeQuery);
    if (!isValidIntentCode(code)) {
      return NextResponse.json(
        {
          ok: false,
          code: "invalid_code",
          error: "code must be exactly three lowercase letters.",
        },
        { status: 400 },
      );
    }

    const link = await getIntentLinkByCode(code, { activeOnly: false });
    return NextResponse.json({
      ok: true,
      links: link ? [toResponseLink(link, origin)] : [],
    });
  }

  const links = await listIntentLinks(160);
  return NextResponse.json({
    ok: true,
    links: links.map((link) => toResponseLink(link, origin)),
  });
}

export async function POST(request: Request) {
  let body: CreateIntentLinkBody;
  try {
    body = (await request.json()) as CreateIntentLinkBody;
  } catch {
    return NextResponse.json(
      { ok: false, code: "invalid_json", error: "Invalid JSON request body." },
      { status: 400 },
    );
  }

  const auth = verifyAdminPassword(request, body.password);
  if (!auth.ok) {
    return auth.response;
  }

  const org = typeof body.org === "string" ? body.org.trim() : "";
  if (!org) {
    return NextResponse.json(
      {
        ok: false,
        code: "missing_org",
        error: "org is required.",
      },
      { status: 400 },
    );
  }

  const origin = new URL(request.url).origin;

  try {
    const created = await createIntentLink({
      org,
      positionTitle: body.positionTitle,
      positionUrl: body.positionUrl,
      intentType: body.intentType,
      notes: body.notes,
    });

    return NextResponse.json({
      ok: true,
      link: toResponseLink(created, origin),
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          ok: false,
          code: "invalid_request",
          error: error.message,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        code: "create_failed",
        error: "Unable to create an intent link right now.",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  let body: DeactivateIntentLinkBody;
  try {
    body = (await request.json()) as DeactivateIntentLinkBody;
  } catch {
    return NextResponse.json(
      { ok: false, code: "invalid_json", error: "Invalid JSON request body." },
      { status: 400 },
    );
  }

  const auth = verifyAdminPassword(request, body.password);
  if (!auth.ok) {
    return auth.response;
  }

  const code = typeof body.code === "string" ? body.code.trim() : "";
  if (!code) {
    return NextResponse.json(
      {
        ok: false,
        code: "missing_code",
        error: "code is required.",
      },
      { status: 400 },
    );
  }

  const origin = new URL(request.url).origin;

  try {
    const updated = await deactivateIntentLink(code);
    return NextResponse.json({
      ok: true,
      link: toResponseLink(updated, origin),
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          ok: false,
          code: "invalid_request",
          error: error.message,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        code: "deactivate_failed",
        error: "Unable to deactivate this intent link right now.",
      },
      { status: 500 },
    );
  }
}
