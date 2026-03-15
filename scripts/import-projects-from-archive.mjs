#!/usr/bin/env node

import fs from "node:fs/promises";

const INPUT_PATH = "archive/Portfolio.csv";
const OUTPUT_PATH = "data/projects.ts";

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = "";
  let index = 0;
  let inQuotes = false;

  while (index < input.length) {
    const ch = input[index];
    if (inQuotes) {
      if (ch === '"') {
        if (input[index + 1] === '"') {
          field += '"';
          index += 2;
          continue;
        }
        inQuotes = false;
        index += 1;
        continue;
      }
      field += ch;
      index += 1;
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      index += 1;
      continue;
    }

    if (ch === ",") {
      row.push(field);
      field = "";
      index += 1;
      continue;
    }

    if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      index += 1;
      continue;
    }

    if (ch === "\r") {
      index += 1;
      continue;
    }

    field += ch;
    index += 1;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function decodeHtml(input) {
  return input
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&nbsp;", " ");
}

function collapseWhitespace(input) {
  return input.replace(/\s+/g, " ").trim();
}

function cleanText(input) {
  if (!input) return "";
  return collapseWhitespace(decodeHtml(String(input)));
}

function stripHtml(input) {
  if (!input) return "";
  return cleanText(String(input).replace(/<[^>]+>/g, " "));
}

function parseStringArray(raw) {
  const value = cleanText(raw);
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => cleanText(String(item))).filter(Boolean);
    }
    return [];
  } catch {
    return [];
  }
}

function normalizeMediaUrl(rawUrl) {
  const input = cleanText(rawUrl);
  if (!input) return "";
  if (input.startsWith("wix:image://v1/")) {
    const token = input.slice("wix:image://v1/".length).split(/[\/#?]/)[0];
    if (!token) return "";
    return `https://static.wixstatic.com/media/${decodeURIComponent(token)}`;
  }
  if (input.startsWith("http://") || input.startsWith("https://")) {
    return input;
  }
  return "";
}

function splitParagraphs(input) {
  if (!input) return [];
  const normalized = String(input).replaceAll("\r\n", "\n");
  const paragraphs = normalized
    .split(/\n{2,}/)
    .map((entry) => stripHtml(entry))
    .filter(Boolean);
  if (paragraphs.length > 0) {
    return paragraphs;
  }
  const single = stripHtml(normalized);
  return single ? [single] : [];
}

function splitSentences(input) {
  const text = cleanText(input);
  if (!text) return [];
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function truncate(input, max = 180) {
  if (input.length <= max) return input;
  return `${input.slice(0, max - 3).trim()}...`;
}

function slugify(raw) {
  return decodeURIComponent(raw)
    .toLowerCase()
    .replaceAll("&apos;", "")
    .replaceAll("&amp;", " and ")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseGallery(rawGallery, title, mainImage) {
  const items = [];
  if (mainImage) {
    items.push({
      label: `${title} cover`,
      src: mainImage,
      alt: title,
    });
  }

  const raw = cleanText(rawGallery);
  if (raw.startsWith("[")) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        for (let i = 0; i < parsed.length; i += 1) {
          const entry = parsed[i] ?? {};
          const src = normalizeMediaUrl(entry.src ?? "");
          const label = cleanText(entry.title || entry.slug || `Gallery ${i + 1}`);
          const alt = cleanText(entry.alt || entry.title || title);
          if (!src) continue;
          items.push({
            label: label || `Gallery ${i + 1}`,
            src,
            alt: alt || title,
          });
        }
      }
    } catch {
      // Ignore malformed gallery payloads and continue.
    }
  }

  const deduped = [];
  const seen = new Set();
  for (const item of items) {
    const key = `${item.src}|${item.label}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }

  return deduped.slice(0, 10);
}

function extractContributionSteps(input) {
  const html = String(input ?? "");
  if (!html.trim()) return [];

  const listMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((match) =>
    stripHtml(match[1])
  );
  if (listMatches.length > 0) {
    return unique(listMatches);
  }

  const plain = stripHtml(html);
  if (!plain) return [];
  return unique(
    plain
      .split(/[;\n]/)
      .map((entry) => cleanText(entry))
      .filter(Boolean)
  );
}

function parseMetric(value, index) {
  const cleaned = cleanText(value);
  if (!cleaned) return null;

  const colonMatch = cleaned.match(/^([A-Za-z0-9\s\/%+.-]{2,30})\s*[:|-]\s*(.+)$/);
  if (colonMatch) {
    return {
      label: cleanText(colonMatch[1]),
      value: cleanText(colonMatch[2]),
    };
  }

  return {
    label: `Metric ${index}`,
    value: truncate(cleaned, 48),
  };
}

async function main() {
  const rawCsv = (await fs.readFile(INPUT_PATH, "utf8")).replace(/^\uFEFF/, "");
  const parsedRows = parseCsv(rawCsv);
  const headers = parsedRows[0] ?? [];
  const rows = parsedRows.slice(1).map((row) =>
    Object.fromEntries(headers.map((header, idx) => [header, row[idx] ?? ""]))
  );

  const legacyProjectSlugMap = {
    "revenue-intelligence-copilot": "insights-and-reporting",
    "clinical-triage-assistant": "payer-solutions",
    "knowledge-ops-command-center": "developer-portal",
    "personalization-engine-studio": "zivame-com-ecommerce-store",
    "executive-insight-briefing": "user-journey-framework",
  };

  const projects = [];

  for (const row of rows) {
    const projectPath = cleanText(row["Project"]);
    if (!projectPath.startsWith("/portfolio/") || projectPath === "/portfolio/") {
      continue;
    }

    const rawSlug = projectPath.replace(/^\/portfolio\//, "").replace(/\/$/, "");
    const slug = slugify(rawSlug);
    const title = cleanText(row["Project Name"]) || slug;
    const year = cleanText(row["Year"]) || "Unknown";
    const scope = cleanText(row["Scope"]);
    const organization = cleanText(row["Organization"]);
    const platform = cleanText(row["Platform"]);
    const shortDescription = cleanText(row["Short Project Description"]);
    const storyParagraphs = splitParagraphs(row["Story Text"] || row["Body"]);
    const summary = truncate(shortDescription || storyParagraphs[0] || `${title} case study.`);
    const challenge = storyParagraphs[0] || shortDescription || `${title} required a focused redesign to improve outcomes.`;

    const contextFallback = unique(
      [
        year && `Year: ${year}`,
        organization && `Organization: ${organization}`,
        scope && `Scope: ${scope}`,
        platform && `Platform: ${platform}`,
      ].filter(Boolean)
    ).join(" | ");
    const context = storyParagraphs[1] || contextFallback || challenge;

    const roleCapacities = parseStringArray(row["Role (capacity)"]);
    const roleParts = unique([
      cleanText(row["XXX Role"]),
      ...roleCapacities,
      organization ? `at ${organization}` : "",
    ]);
    const role = roleParts.join(" | ") || "Design lead";

    const process = extractContributionSteps(row["My Contribution"]);
    if (process.length === 0) {
      process.push(
        ...splitSentences(storyParagraphs[1] || storyParagraphs[0] || summary).slice(0, 4)
      );
    }
    if (process.length === 0) {
      process.push(
        "Clarified goals and constraints with stakeholders.",
        "Created and tested solution concepts.",
        "Delivered and iterated based on measurable feedback."
      );
    }

    const outcome = unique(
      [
        cleanText(row["Project Stat 1"]),
        cleanText(row["Project Stat 2"]),
        cleanText(row["Project Stat 3"]),
        cleanText(row["Highlight"]),
      ].filter(Boolean)
    );
    if (outcome.length === 0) {
      outcome.push(shortDescription || `${title} shipped with measurable product improvements.`);
    }

    const keyDecisions = unique(process.slice(0, 3));
    if (keyDecisions.length === 0) {
      keyDecisions.push(
        "Prioritized the highest-impact workflow first.",
        "Aligned solution details with platform constraints.",
        "Shipped incrementally with continuous feedback loops."
      );
    }

    const lessons = unique(
      [cleanText(row["XXX Experience Gained"]), ...splitSentences(storyParagraphs[2] || "")]
        .filter(Boolean)
        .slice(0, 4)
    );
    if (lessons.length === 0) {
      lessons.push(
        "Cross-functional alignment is critical for durable product outcomes.",
        "Scoping decisions early helps teams ship with confidence."
      );
    }

    const metrics = unique(
      [
        parseMetric(row["Project Stat 1"], 1),
        parseMetric(row["Project Stat 2"], 2),
        parseMetric(row["Project Stat 3"], 3),
      ].filter(Boolean)
    );
    if (metrics.length < 3 && year) {
      metrics.push({ label: "Year", value: year });
    }
    if (metrics.length < 3 && organization) {
      metrics.push({ label: "Organization", value: organization });
    }
    if (metrics.length < 3 && platform) {
      metrics.push({ label: "Platform", value: platform });
    }

    const mainImage = normalizeMediaUrl(row["Main Project Image"]);
    const gallery = parseGallery(row["Gallery"], title, mainImage);
    const demoUrl = cleanText(row["Demo"]);
    const sourceUrl = `https://www.notuser.com${projectPath}`;

    const tags = unique([
      ...scope.split(/[,/]/).map((entry) => cleanText(entry)),
      ...platform.split(/[,/]/).map((entry) => cleanText(entry)),
      organization,
      ...roleCapacities,
    ])
      .filter(Boolean)
      .slice(0, 8);

    if (slug !== rawSlug) {
      legacyProjectSlugMap[rawSlug] = slug;
      legacyProjectSlugMap[rawSlug.toLowerCase()] = slug;
    }

    projects.push({
      id: cleanText(row["ID"]) || slug,
      slug,
      title,
      category: scope || platform || "Case Study",
      year,
      organization,
      platform: platform || "Product",
      scope: scope || "Design and Delivery",
      summary,
      challenge,
      context,
      role,
      process,
      keyDecisions,
      outcome,
      lessons,
      tags: tags.length > 0 ? tags : [organization || "Case Study"],
      metrics: metrics.slice(0, 3),
      gallery,
      thumbnail: mainImage,
      demoUrl: demoUrl || undefined,
      sourceUrl,
      isPrivate: cleanText(row["XXX Requires Password"]).toLowerCase() === "true",
    });
  }

  projects.sort((a, b) => {
    const yearA = Number.parseInt(a.year, 10);
    const yearB = Number.parseInt(b.year, 10);
    if (Number.isFinite(yearA) && Number.isFinite(yearB) && yearA !== yearB) {
      return yearB - yearA;
    }
    return a.title.localeCompare(b.title);
  });

  const output = `export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  label: string;
  src?: string;
  alt?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  organization: string;
  platform: string;
  scope: string;
  summary: string;
  challenge: string;
  context: string;
  role: string;
  process: string[];
  keyDecisions: string[];
  outcome: string[];
  lessons: string[];
  tags: string[];
  metrics: ProjectMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: ProjectGalleryItem[];
  thumbnail?: string;
  demoUrl?: string;
  sourceUrl: string;
  isPrivate?: boolean;
};

const legacyProjectSlugMap: Record<string, string> = ${JSON.stringify(legacyProjectSlugMap, null, 2)};

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};

export function resolveProjectSlug(slug: string) {
  return legacyProjectSlugMap[slug] ?? slug;
}

export function getProjectBySlug(slug: string) {
  const resolved = resolveProjectSlug(slug);
  return projects.find((project) => project.slug === resolved);
}
`;

  await fs.writeFile(OUTPUT_PATH, output, "utf8");
  console.log(`Imported ${projects.length} projects to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

