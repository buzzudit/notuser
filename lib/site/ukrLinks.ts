import type { Metadata } from "next";
import { randomInt } from "crypto";
import prisma from "@/lib/prisma";

const UKR_CODE_ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const UKR_CODE_REGEX = /^[a-z]{3}$/;
const MAX_GENERATION_ATTEMPTS = 120;

export const UKR_QUERY_PARAM = "ukr";
export const UKR_COOKIE_NAME = "ukr";
export const UKR_COOKIE_MAX_AGE_SECONDS = 60 * 24 * 60 * 60;

type SearchParamsRecord = Record<string, string | string[] | undefined>;

export type IntentLinkRecord = {
  code: string;
  org: string;
  positionTitle: string | null;
  positionUrl: string | null;
  intentType: string | null;
  notes: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type CreateIntentLinkInput = {
  org: string;
  positionTitle?: string | null;
  positionUrl?: string | null;
  intentType?: string | null;
  notes?: string | null;
};

export type ResolvedUkrExperience = {
  activeIntent: IntentLinkRecord | null;
  hasUkrQuery: boolean;
  shouldPersistQueryCode: boolean;
  shouldClearCookie: boolean;
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

function toIntentLinkRecord(record: {
  code: string;
  org: string;
  positionTitle: string | null;
  positionUrl: string | null;
  intentType: string | null;
  notes: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}): IntentLinkRecord {
  return {
    code: record.code,
    org: record.org,
    positionTitle: record.positionTitle,
    positionUrl: record.positionUrl,
    intentType: record.intentType,
    notes: record.notes,
    isActive: record.isActive,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
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

function randomIntentCode() {
  let code = "";

  for (let index = 0; index < 3; index += 1) {
    code += UKR_CODE_ALPHABET[randomInt(0, UKR_CODE_ALPHABET.length)];
  }

  return code;
}

function getSearchParamValue(
  searchParams: SearchParamsRecord | undefined,
  key: string,
) {
  const rawValue = searchParams?.[key];
  if (Array.isArray(rawValue)) {
    return rawValue[0] ?? null;
  }

  return typeof rawValue === "string" ? rawValue : null;
}

export function normalizeIntentCode(rawCode: string) {
  return rawCode.trim().toLowerCase();
}

export function isValidIntentCode(rawCode: string) {
  return UKR_CODE_REGEX.test(normalizeIntentCode(rawCode));
}

export function getIntentRoleSummary(intentLink: Pick<IntentLinkRecord, "org" | "positionTitle">) {
  if (intentLink.positionTitle) {
    return `${intentLink.positionTitle} at ${intentLink.org}`;
  }

  return `a role at ${intentLink.org}`;
}

export function buildUkrIntentAiContext(intentLink: IntentLinkRecord) {
  return [
    `UKR code: ${intentLink.code}`,
    `Target organization: ${intentLink.org}`,
    intentLink.positionTitle ? `Target position: ${intentLink.positionTitle}` : "",
    intentLink.positionUrl ? `Source role URL: ${intentLink.positionUrl}` : "",
    intentLink.intentType ? `Intent type: ${intentLink.intentType}` : "",
    intentLink.notes ? `Tailoring notes: ${intentLink.notes}` : "",
    "Prioritize evidence, language, and examples that help this hiring conversation move toward interview fit.",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function buildUkrScopedMetadata(
  pathname: string,
  searchParamsInput?: SearchParamsRecord | Promise<SearchParamsRecord>,
): Promise<Metadata> {
  const searchParams = searchParamsInput ? await Promise.resolve(searchParamsInput) : {};
  const hasUkrQuery = Boolean(getSearchParamValue(searchParams, UKR_QUERY_PARAM));

  if (!hasUkrQuery) {
    return {
      alternates: {
        canonical: pathname,
      },
    };
  }

  return {
    alternates: {
      canonical: pathname,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export async function getIntentLinkByCode(
  rawCode: string,
  options?: { activeOnly?: boolean },
) {
  const code = normalizeIntentCode(rawCode);
  if (!isValidIntentCode(code)) {
    return null;
  }

  const record = await prisma.intentLink.findUnique({
    where: { code },
  });

  if (!record) {
    return null;
  }

  if (options?.activeOnly !== false && !record.isActive) {
    return null;
  }

  return toIntentLinkRecord(record);
}

export async function listIntentLinks(limit = 120) {
  const boundedLimit = Math.max(1, Math.min(limit, 200));
  const records = await prisma.intentLink.findMany({
    orderBy: { createdAt: "desc" },
    take: boundedLimit,
  });

  return records.map(toIntentLinkRecord);
}

export async function createIntentLink(input: CreateIntentLinkInput) {
  const org = input.org.trim();
  if (!org) {
    throw new Error("org is required");
  }

  const positionTitle = normalizeOptionalValue(input.positionTitle, 140);
  const positionUrl = normalizeOptionalValue(input.positionUrl, 500);
  const intentType = normalizeOptionalValue(input.intentType, 80);
  const notes = normalizeOptionalValue(input.notes, 600);

  for (let attempt = 0; attempt < MAX_GENERATION_ATTEMPTS; attempt += 1) {
    const code = randomIntentCode();

    try {
      const created = await prisma.intentLink.create({
        data: {
          code,
          org,
          positionTitle,
          positionUrl,
          intentType,
          notes,
        },
      });

      return toIntentLinkRecord(created);
    } catch (error) {
      if (isUniqueConstraintError(error)) {
        continue;
      }

      throw error;
    }
  }

  throw new Error("Unable to generate a unique ukr code right now.");
}

export async function deactivateIntentLink(rawCode: string) {
  const code = normalizeIntentCode(rawCode);
  if (!isValidIntentCode(code)) {
    throw new Error("code must be exactly three lowercase letters.");
  }

  const updated = await prisma.intentLink.update({
    where: { code },
    data: { isActive: false },
  });

  return toIntentLinkRecord(updated);
}

export async function resolveUkrExperience(options: {
  searchParams?: SearchParamsRecord | Promise<SearchParamsRecord>;
  cookieCode?: string | null;
}): Promise<ResolvedUkrExperience> {
  const searchParams = options.searchParams ? await Promise.resolve(options.searchParams) : {};
  const rawUkrCode = getSearchParamValue(searchParams, UKR_QUERY_PARAM);
  const hasUkrQuery = typeof rawUkrCode === "string" && rawUkrCode.trim().length > 0;

  if (hasUkrQuery) {
    const normalizedQueryCode = normalizeIntentCode(rawUkrCode ?? "");
    if (!isValidIntentCode(normalizedQueryCode)) {
      return {
        activeIntent: null,
        hasUkrQuery: true,
        shouldPersistQueryCode: false,
        shouldClearCookie: Boolean(options.cookieCode),
      };
    }

    const queryIntent = await getIntentLinkByCode(normalizedQueryCode, { activeOnly: true });
    if (!queryIntent) {
      return {
        activeIntent: null,
        hasUkrQuery: true,
        shouldPersistQueryCode: false,
        shouldClearCookie: Boolean(options.cookieCode),
      };
    }

    return {
      activeIntent: queryIntent,
      hasUkrQuery: true,
      shouldPersistQueryCode: true,
      shouldClearCookie: false,
    };
  }

  const cookieCode = normalizeOptionalValue(options.cookieCode, 12);
  if (!cookieCode || !isValidIntentCode(cookieCode)) {
    return {
      activeIntent: null,
      hasUkrQuery: false,
      shouldPersistQueryCode: false,
      shouldClearCookie: Boolean(options.cookieCode),
    };
  }

  const cookieIntent = await getIntentLinkByCode(cookieCode, { activeOnly: true });
  if (!cookieIntent) {
    return {
      activeIntent: null,
      hasUkrQuery: false,
      shouldPersistQueryCode: false,
      shouldClearCookie: true,
    };
  }

  return {
    activeIntent: cookieIntent,
    hasUkrQuery: false,
    shouldPersistQueryCode: false,
    shouldClearCookie: false,
  };
}
