import { NextResponse } from "next/server";
import {
  getIntentLinkByCode,
  UKR_COOKIE_MAX_AGE_SECONDS,
  UKR_COOKIE_NAME,
  normalizeIntentCode,
} from "@/lib/site/ukrLinks";

type SessionBody = {
  ukr?: string | null;
  clear?: boolean;
};

function buildSessionResponse(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function clearIntentCookie(response: NextResponse) {
  response.cookies.set({
    name: UKR_COOKIE_NAME,
    value: "",
    expires: new Date(0),
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

function setIntentCookie(response: NextResponse, code: string) {
  response.cookies.set({
    name: UKR_COOKIE_NAME,
    value: code,
    httpOnly: true,
    maxAge: UKR_COOKIE_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: SessionBody;
  try {
    body = (await request.json()) as SessionBody;
  } catch {
    const response = buildSessionResponse(
      { ok: false, code: "invalid_json", error: "Invalid JSON request body." },
      400,
    );
    clearIntentCookie(response);
    return response;
  }

  if (body.clear) {
    const response = buildSessionResponse({
      ok: true,
      activeCode: null,
    });
    clearIntentCookie(response);
    return response;
  }

  const ukr = typeof body.ukr === "string" ? normalizeIntentCode(body.ukr) : "";
  if (!ukr) {
    const response = buildSessionResponse(
      {
        ok: false,
        code: "missing_ukr",
        error: "ukr is required.",
      },
      400,
    );
    clearIntentCookie(response);
    return response;
  }

  const activeIntent = await getIntentLinkByCode(ukr, { activeOnly: true });
  if (!activeIntent) {
    const response = buildSessionResponse(
      {
        ok: false,
        code: "invalid_ukr",
        error: "The provided ukr code is invalid or inactive.",
      },
      404,
    );
    clearIntentCookie(response);
    return response;
  }

  const response = buildSessionResponse({
    ok: true,
    activeCode: activeIntent.code,
  });
  setIntentCookie(response, activeIntent.code);
  return response;
}
