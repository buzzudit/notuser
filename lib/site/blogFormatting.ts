import type { BlogPost } from "@/data/blog";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

export type BlogRenderBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogRenderSection = {
  heading: string;
  blocks: BlogRenderBlock[];
};

const BLOG_IMAGE_FALLBACK_SRC = "/images/blog-placeholder.svg";

const MOJIBAKE_REPLACEMENTS: Record<string, string> = {
  "â€™": "'",
  "â€˜": "'",
  "â€œ": '"',
  "â€\u009d": '"',
  "â€¦": "...",
  "â€¢": "- ",
  "Â ": " ",
  "\u00a0": " ",
};

const LIST_PREFIX = /^(?:[-*]\s+|[0-9]+\.\s+)(.+)$/;
const HASHTAG_LINE = /^#\S+/;
const RECOGNIZED_CATEGORIES: Record<string, string> = {
  blog: "Perspective",
  design: "Design",
  leadership: "Leadership",
  "case study": "Case Study",
};

function applyMojibakeFixes(input: string) {
  return Object.entries(MOJIBAKE_REPLACEMENTS).reduce(
    (text, [from, to]) => text.split(from).join(to),
    input,
  );
}

export function normalizeBlogText(input: string) {
  const cleaned = applyMojibakeFixes(String(input ?? ""))
    .replace(/\r\n/g, "\n")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .trim();
  return cleaned;
}

function normalizeListItem(input: string) {
  const normalized = normalizeBlogText(input);
  const match = normalized.match(LIST_PREFIX);
  return match ? normalizeBlogText(match[1]) : "";
}

function toTitleCase(input: string) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
}

function isNoiseLine(input: string) {
  const normalized = normalizeBlogText(input);
  if (!normalized) return true;
  if (HASHTAG_LINE.test(normalized)) return true;
  return false;
}

function truncate(input: string, max = 220) {
  if (input.length <= max) return input;
  return `${input.slice(0, max - 3).trim()}...`;
}

function getFirstSectionParagraph(post: BlogPost) {
  for (const section of post.sections) {
    for (const paragraph of section.paragraphs) {
      const normalized = normalizeBlogText(paragraph);
      if (!normalized || isNoiseLine(normalized)) continue;
      const listItem = normalizeListItem(normalized);
      if (listItem) return listItem;
      return normalized;
    }
  }
  return "";
}

export function getBlogExcerpt(post: BlogPost, max = 220) {
  const normalizedExcerpt = normalizeBlogText(post.excerpt);
  const fallback = getFirstSectionParagraph(post);
  const seed =
    normalizedExcerpt && normalizedExcerpt.length <= 320
      ? normalizedExcerpt
      : fallback || normalizedExcerpt;
  return truncate(seed || "Article content currently being reformatted.", max);
}

export function getBlogDisplayCategory(post: BlogPost) {
  const category = normalizeBlogText(post.category);
  if (!category) return "Writing";
  const normalized = RECOGNIZED_CATEGORIES[category.toLowerCase()];
  if (normalized) return normalized;
  return toTitleCase(category);
}

export function getBlogDisplayTags(post: BlogPost) {
  const category = getBlogDisplayCategory(post).toLowerCase();
  const tags = post.tags
    .map((tag) => normalizeBlogText(tag))
    .filter(Boolean)
    .filter((tag) => !HASHTAG_LINE.test(tag))
    .filter((tag) => tag.toLowerCase() !== category)
    .filter((tag) => tag.toLowerCase() !== "blog")
    .filter((tag) => tag.length <= 32);

  const deduped = [...new Set(tags)];
  if (deduped.length > 0) return deduped.slice(0, 5);
  return [getBlogDisplayCategory(post)];
}

export function getBlogReadTime(readTime: string) {
  const normalized = normalizeBlogText(readTime);
  if (!normalized) return "5 min read";
  if (!/[0-9]/.test(normalized)) return "5 min read";
  if (!/min/i.test(normalized)) return `${normalized} min read`;
  return normalized;
}

export function getBlogThumbnailSrc(rawThumbnail: string) {
  const normalized = normalizeBlogText(rawThumbnail);
  if (!normalized) return BLOG_IMAGE_FALLBACK_SRC;
  const resolved = resolveMirroredMediaSrc(normalized);
  return resolved || BLOG_IMAGE_FALLBACK_SRC;
}

export function formatBlogDate(dateValue: string) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function getRenderableBlogSections(post: BlogPost): BlogRenderSection[] {
  return post.sections
    .map((section) => {
      const heading = normalizeBlogText(section.heading) || "Section";
      const blocks: BlogRenderBlock[] = [];
      let listItems: string[] = [];

      const flushList = () => {
        if (listItems.length === 0) return;
        blocks.push({ type: "list", items: listItems });
        listItems = [];
      };

      for (const paragraph of section.paragraphs) {
        const normalized = normalizeBlogText(paragraph);
        if (!normalized || isNoiseLine(normalized)) continue;

        const listItem = normalizeListItem(normalized);
        if (listItem) {
          listItems.push(listItem);
          continue;
        }

        flushList();
        blocks.push({ type: "paragraph", text: normalized });
      }

      flushList();

      if (blocks.length === 0) {
        return null;
      }

      return { heading, blocks };
    })
    .filter((section): section is BlogRenderSection => Boolean(section));
}

export function getFirstBlogBodyText(post: BlogPost) {
  const sections = getRenderableBlogSections(post);
  for (const section of sections) {
    for (const block of section.blocks) {
      if (block.type === "paragraph") return block.text;
      if (block.type === "list" && block.items.length > 0) return block.items[0];
    }
  }
  return "";
}

export function sortPostsByDateDesc(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    return timeB - timeA;
  });
}

export function getBlogLandingCollections(posts: BlogPost[], featuredSlugs: string[]) {
  const byDate = sortPostsByDateDesc(posts);
  const featuredSet = new Set(featuredSlugs);

  const slugIndex = new Map(byDate.map((post) => [post.slug, post]));
  const featuredBySlug = featuredSlugs
    .map((slug) => slugIndex.get(slug))
    .filter((post): post is BlogPost => Boolean(post));

  const supplementalFeatured = byDate.filter((post) => {
    if (featuredSet.has(post.slug)) return false;
    const category = getBlogDisplayCategory(post).toLowerCase();
    return category === "leadership" || category === "case study";
  });

  const featured = [...new Set([...featuredBySlug, ...supplementalFeatured].slice(0, 6))];
  const featuredSlugsSet = new Set(featured.map((post) => post.slug));
  const archive = byDate.filter((post) => !featuredSlugsSet.has(post.slug));

  return { featured, archive };
}
