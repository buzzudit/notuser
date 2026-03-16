import { NextResponse } from "next/server";
import {
  createPortfolioShareLink,
  getPortfolioShareLinkByCode,
  isValidPortfolioShareCode,
  listPortfolioShareLinks,
  normalizePortfolioShareCode,
  type ShareLinkRecord,
} from "@/lib/site/portfolioShareLinks";

type CreateShareLinkBody = {
  password?: string;
  company?: string;
  position?: string;
  notes?: string;
  requestedCode?: string;
};

function getAdminPasswordFromRequest(request: Request, bodyPassword?: string) {
  const headerPassword = request.headers.get("x-portfolio-admin-password")?.trim();
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
  return process.env.PORTFOLIO_LINK_ADMIN_PASSWORD?.trim() ?? "";
}

function isUniqueConstraintError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  if (!("code" in error)) {
    return false;
  }

  return (error as { code?: string }).code === "P2002";
}

function toResponseLink(link: ShareLinkRecord, origin: string) {
  return {
    code: link.code,
    path: `/${link.code}`,
    url: `${origin}/${link.code}`,
    company: link.company,
    position: link.position,
    notes: link.notes,
    isActive: link.isActive,
    createdAt: link.createdAt.toISOString(),
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
            "Portfolio link management is not configured yet (PORTFOLIO_LINK_ADMIN_PASSWORD is missing).",
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
          error: "Invalid admin password for portfolio link management.",
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
    const code = normalizePortfolioShareCode(codeQuery);
    if (!isValidPortfolioShareCode(code)) {
      return NextResponse.json(
        {
          ok: false,
          code: "invalid_code",
          error: "code must be exactly two alphanumeric characters.",
        },
        { status: 400 },
      );
    }

    const link = await getPortfolioShareLinkByCode(code, { activeOnly: false });
    return NextResponse.json({
      ok: true,
      link: link ? toResponseLink(link, origin) : null,
    });
  }

  const links = await listPortfolioShareLinks(120);
  return NextResponse.json({
    ok: true,
    links: links.map((link) => toResponseLink(link, origin)),
  });
}

export async function POST(request: Request) {
  let body: CreateShareLinkBody;
  try {
    body = (await request.json()) as CreateShareLinkBody;
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

  const company = typeof body.company === "string" ? body.company.trim() : "";
  if (!company) {
    return NextResponse.json(
      {
        ok: false,
        code: "missing_company",
        error: "company is required.",
      },
      { status: 400 },
    );
  }

  const origin = new URL(request.url).origin;

  try {
    const created = await createPortfolioShareLink({
      company,
      position: body.position,
      notes: body.notes,
      requestedCode: body.requestedCode,
    });

    return NextResponse.json({
      ok: true,
      link: toResponseLink(created, origin),
    });
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      return NextResponse.json(
        {
          ok: false,
          code: "code_exists",
          error: "requestedCode is already in use. Choose another two-character code.",
        },
        { status: 409 },
      );
    }

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
        error: "Unable to create portfolio share link right now.",
      },
      { status: 500 },
    );
  }
}
