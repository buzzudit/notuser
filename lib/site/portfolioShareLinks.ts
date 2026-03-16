import { randomInt } from "crypto";
import prisma from "@/lib/prisma";

const SHARE_CODE_ALPHABET = "23456789abcdefghjkmnpqrstuvwxyz";
const SHARE_CODE_REGEX = /^[a-z0-9]{2}$/;
const MAX_GENERATION_ATTEMPTS = 80;

export type ShareLinkRecord = {
  code: string;
  company: string;
  position: string | null;
  notes: string | null;
  isActive: boolean;
  createdAt: Date;
};

type CreateShareLinkInput = {
  company: string;
  position?: string | null;
  notes?: string | null;
  requestedCode?: string | null;
};

function normalizeOptionalValue(value: string | null | undefined, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  return trimmed.slice(0, maxLength);
}

function toShareLinkRecord(record: {
  code: string;
  company: string;
  position: string | null;
  notes: string | null;
  isActive: boolean;
  createdAt: Date;
}): ShareLinkRecord {
  return {
    code: record.code,
    company: record.company,
    position: record.position,
    notes: record.notes,
    isActive: record.isActive,
    createdAt: record.createdAt,
  };
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

function randomShareCode() {
  let code = "";

  for (let index = 0; index < 2; index += 1) {
    code += SHARE_CODE_ALPHABET[randomInt(0, SHARE_CODE_ALPHABET.length)];
  }

  return code;
}

export function normalizePortfolioShareCode(rawCode: string) {
  return rawCode.trim().toLowerCase();
}

export function isValidPortfolioShareCode(rawCode: string) {
  return SHARE_CODE_REGEX.test(normalizePortfolioShareCode(rawCode));
}

export async function getPortfolioShareLinkByCode(
  rawCode: string,
  options?: { activeOnly?: boolean },
) {
  const code = normalizePortfolioShareCode(rawCode);
  if (!isValidPortfolioShareCode(code)) {
    return null;
  }

  const record = await prisma.portfolioShareLink.findUnique({
    where: { code },
  });

  if (!record) {
    return null;
  }

  if (options?.activeOnly !== false && !record.isActive) {
    return null;
  }

  return toShareLinkRecord(record);
}

export async function listPortfolioShareLinks(limit = 100) {
  const boundedLimit = Math.max(1, Math.min(limit, 200));
  const records = await prisma.portfolioShareLink.findMany({
    orderBy: { createdAt: "desc" },
    take: boundedLimit,
  });

  return records.map(toShareLinkRecord);
}

export async function createPortfolioShareLink(input: CreateShareLinkInput) {
  const company = input.company.trim();
  if (!company) {
    throw new Error("company is required");
  }

  const position = normalizeOptionalValue(input.position, 120);
  const notes = normalizeOptionalValue(input.notes, 500);
  const requestedCode = input.requestedCode
    ? normalizePortfolioShareCode(input.requestedCode)
    : null;

  if (requestedCode) {
    if (!isValidPortfolioShareCode(requestedCode)) {
      throw new Error("requestedCode must be exactly two alphanumeric characters.");
    }

    const created = await prisma.portfolioShareLink.create({
      data: {
        code: requestedCode,
        company,
        position,
        notes,
      },
    });

    return toShareLinkRecord(created);
  }

  for (let attempt = 0; attempt < MAX_GENERATION_ATTEMPTS; attempt += 1) {
    const code = randomShareCode();

    try {
      const created = await prisma.portfolioShareLink.create({
        data: {
          code,
          company,
          position,
          notes,
        },
      });

      return toShareLinkRecord(created);
    } catch (error) {
      if (isUniqueConstraintError(error)) {
        continue;
      }

      throw error;
    }
  }

  throw new Error("Unable to generate a unique share code. Code space may be saturated.");
}

export function buildShareProfileAiContext(profile: ShareLinkRecord) {
  return [
    `Share profile code: ${profile.code}`,
    `Target company: ${profile.company}`,
    profile.position ? `Target position: ${profile.position}` : "",
    profile.notes ? `Tailoring notes: ${profile.notes}` : "",
    "Prioritize examples and framing that are relevant to this target audience.",
  ]
    .filter(Boolean)
    .join("\n");
}
