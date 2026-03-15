#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_SITE_ORIGIN = "https://www.notuser.com";
const DEFAULT_OUTPUT_DIR = "public/media/mirror";
const DEFAULT_ARCHIVE_DIR = "archive";
const DEFAULT_CONCURRENCY = 8;
const DEFAULT_TIMEOUT_MS = 30000;

function parseArgs(argv) {
  const args = {
    siteOrigin: DEFAULT_SITE_ORIGIN,
    outputDir: DEFAULT_OUTPUT_DIR,
    archiveDir: DEFAULT_ARCHIVE_DIR,
    concurrency: DEFAULT_CONCURRENCY,
    timeoutMs: DEFAULT_TIMEOUT_MS,
    skipArchive: false,
    dryRun: false,
    limit: Infinity,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (token === "--site-origin") {
      args.siteOrigin = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--output-dir") {
      args.outputDir = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--archive-dir") {
      args.archiveDir = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--skip-archive") {
      args.skipArchive = true;
      continue;
    }
    if (token === "--concurrency") {
      args.concurrency = Number.parseInt(argv[i + 1], 10);
      i += 1;
      continue;
    }
    if (token === "--timeout-ms") {
      args.timeoutMs = Number.parseInt(argv[i + 1], 10);
      i += 1;
      continue;
    }
    if (token === "--limit") {
      args.limit = Number.parseInt(argv[i + 1], 10);
      i += 1;
      continue;
    }
  }

  if (!Number.isFinite(args.concurrency) || args.concurrency < 1) {
    args.concurrency = DEFAULT_CONCURRENCY;
  }
  if (!Number.isFinite(args.timeoutMs) || args.timeoutMs < 1000) {
    args.timeoutMs = DEFAULT_TIMEOUT_MS;
  }
  if (!Number.isFinite(args.limit) || args.limit < 1) {
    args.limit = Infinity;
  }

  return args;
}

function xmlDecode(input) {
  return input
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function extractLocTags(xml) {
  return [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) =>
    xmlDecode(match[1].trim())
  );
}

function extractImageLocTags(xml) {
  return [...xml.matchAll(/<image:loc>([\s\S]*?)<\/image:loc>/gi)].map(
    (match) => xmlDecode(match[1].trim())
  );
}

function extractRssLinks(xml) {
  return [...xml.matchAll(/<item>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<\/item>/gi)]
    .map((match) => xmlDecode(match[1].trim()))
    .filter((url) => url.startsWith("http"));
}

function extractRssEnclosures(xml) {
  return [...xml.matchAll(/<enclosure[^>]*url="([^"]+)"[^>]*>/gi)].map((match) =>
    xmlDecode(match[1].trim())
  );
}

function extractMediaUrlsFromHtml(html) {
  const urls = [...html.matchAll(/https?:\/\/[^\s"'<>]+/gi)].map((m) => m[0]);
  return urls.filter((url) => {
    try {
      const parsed = new URL(url);
      if (/[{}$`]/.test(url)) return false;

      if (parsed.hostname === "static.wixstatic.com") {
        if (!parsed.pathname.startsWith("/media/")) return false;
        const remainder = decodeURIComponent(parsed.pathname.slice("/media/".length));
        const token = remainder.split("/")[0];
        return token.length > 0;
      }

      if (parsed.hostname === "video.wixstatic.com") {
        return parsed.pathname.length > 1;
      }

      if (parsed.hostname === "filesusr.com") {
        return parsed.pathname.length > 1;
      }

      return false;
    } catch {
      return false;
    }
  });
}

function extractWixProtocolImageIds(input) {
  return [...input.matchAll(/wix:image:\/\/v1\/([^\/#?\s"'\\]+)/gi)].map(
    (match) => match[1].trim()
  );
}

function toWixStaticMediaUrl(imageId) {
  const cleanId = decodeURIComponent(imageId);
  return `https://static.wixstatic.com/media/${cleanId}`;
}

function sanitizePathSegment(segment) {
  return segment.replaceAll(":", "_").replaceAll("?", "_").replaceAll("*", "_");
}

function canonicalizeWixStaticMedia(parsedUrl) {
  const cleanedPath = decodeURIComponent(parsedUrl.pathname);
  const afterMedia = cleanedPath.startsWith("/media/")
    ? cleanedPath.slice("/media/".length)
    : cleanedPath;
  const token = afterMedia.split("/")[0];
  const canonicalPath = `/media/${token}`;
  const canonicalUrl = `https://static.wixstatic.com${canonicalPath}`;
  return { canonicalUrl, canonicalPath };
}

function mapMediaUrl(rawUrl, outputDir) {
  const parsed = new URL(rawUrl);
  let canonicalUrl = rawUrl;
  let canonicalPath = decodeURIComponent(parsed.pathname);

  if (parsed.hostname === "static.wixstatic.com" && parsed.pathname.startsWith("/media/")) {
    const result = canonicalizeWixStaticMedia(parsed);
    canonicalUrl = result.canonicalUrl;
    canonicalPath = result.canonicalPath;
  }

  const localPath = path.join(
    outputDir,
    sanitizePathSegment(parsed.hostname),
    ...canonicalPath
      .split("/")
      .filter(Boolean)
      .map((part) => sanitizePathSegment(part))
  );

  return {
    originalUrl: rawUrl,
    canonicalUrl,
    host: parsed.hostname,
    localPath,
  };
}

async function fetchText(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "notuser-media-mirror/1.0" },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchBinary(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "notuser-media-mirror/1.0" },
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } finally {
    clearTimeout(timeout);
  }
}

async function fileExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function runPool(items, worker, concurrency) {
  const queue = [...items];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const next = queue.shift();
      if (!next) return;
      await worker(next);
    }
  });
  await Promise.all(workers);
}

async function listFilesRecursive(rootDir) {
  let entries;
  try {
    entries = await fs.readdir(rootDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      const childFiles = await listFilesRecursive(fullPath);
      files.push(...childFiles);
      continue;
    }
    files.push(fullPath);
  }
  return files;
}

function shouldScanArchiveFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return (
    ext === ".csv" ||
    ext === ".json" ||
    ext === ".txt" ||
    ext === ".xml" ||
    ext === ".html" ||
    ext === ".md"
  );
}

async function discoverMediaFromArchive(args, mediaCandidates) {
  if (args.skipArchive) {
    return { filesScanned: 0, directUrls: 0, wixRefs: 0 };
  }

  const archiveFiles = await listFilesRecursive(args.archiveDir);
  const candidates = archiveFiles.filter((filePath) => shouldScanArchiveFile(filePath));

  let directUrls = 0;
  let wixRefs = 0;

  for (const filePath of candidates) {
    try {
      const content = await fs.readFile(filePath, "utf8");
      const urls = extractMediaUrlsFromHtml(content);
      const imageIds = extractWixProtocolImageIds(content);

      for (const url of urls) {
        mediaCandidates.add(url);
        directUrls += 1;
      }
      for (const imageId of imageIds) {
        mediaCandidates.add(toWixStaticMediaUrl(imageId));
        wixRefs += 1;
      }
    } catch (error) {
      console.warn(`Failed archive file: ${filePath} (${String(error)})`);
    }
  }

  return { filesScanned: candidates.length, directUrls, wixRefs };
}

async function discoverMedia(args) {
  const visitedXml = new Set();
  const xmlQueue = [
    `${args.siteOrigin}/sitemap.xml`,
    `${args.siteOrigin}/blog-feed.xml`,
  ];
  const pageUrls = new Set();
  const mediaCandidates = new Set();

  while (xmlQueue.length > 0) {
    const xmlUrl = xmlQueue.shift();
    if (!xmlUrl || visitedXml.has(xmlUrl)) continue;
    visitedXml.add(xmlUrl);

    try {
      const xml = await fetchText(xmlUrl, args.timeoutMs);
      const locs = extractLocTags(xml);
      const imageLocs = extractImageLocTags(xml);
      const rssLinks = extractRssLinks(xml);
      const rssEnclosures = extractRssEnclosures(xml);

      for (const mediaUrl of imageLocs) mediaCandidates.add(mediaUrl);
      for (const mediaUrl of rssEnclosures) mediaCandidates.add(mediaUrl);

      for (const loc of locs) {
        if (loc.endsWith(".xml")) {
          xmlQueue.push(loc);
        } else if (loc.startsWith("http")) {
          pageUrls.add(loc);
        }
      }

      for (const link of rssLinks) pageUrls.add(link);
      console.log(`Parsed XML: ${xmlUrl}`);
    } catch (error) {
      console.warn(`Failed XML: ${xmlUrl} (${String(error)})`);
    }
  }

  const pageList = [...pageUrls];
  await runPool(
    pageList,
    async (pageUrl) => {
      try {
        const html = await fetchText(pageUrl, args.timeoutMs);
        const mediaUrls = extractMediaUrlsFromHtml(html);
        for (const mediaUrl of mediaUrls) mediaCandidates.add(mediaUrl);
      } catch (error) {
        console.warn(`Failed page: ${pageUrl} (${String(error)})`);
      }
    },
    Math.min(6, args.concurrency)
  );

  const archiveStats = await discoverMediaFromArchive(args, mediaCandidates);
  if (archiveStats.filesScanned > 0) {
    console.log(
      `Archive scan: files=${archiveStats.filesScanned} directUrls=${archiveStats.directUrls} wixImageRefs=${archiveStats.wixRefs}`
    );
  }

  return [...mediaCandidates]
    .map((url) => mapMediaUrl(url, args.outputDir))
    .reduce((acc, item) => {
      if (!acc.has(item.canonicalUrl)) {
        acc.set(item.canonicalUrl, item);
      }
      return acc;
    }, new Map())
    .values();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  console.log("Starting media mirror...");
  console.log(
    `site=${args.siteOrigin} output=${args.outputDir} archiveDir=${args.archiveDir} skipArchive=${args.skipArchive} concurrency=${args.concurrency} dryRun=${args.dryRun}`
  );

  const discovered = [...(await discoverMedia(args))];
  discovered.sort((a, b) => a.canonicalUrl.localeCompare(b.canonicalUrl));

  const limited = discovered.slice(0, args.limit);
  const manifestPath = path.join(args.outputDir, "_manifest.json");
  await fs.mkdir(args.outputDir, { recursive: true });
  await fs.writeFile(manifestPath, JSON.stringify(limited, null, 2), "utf8");

  console.log(
    `Discovered ${discovered.length} unique assets (${limited.length} selected). Manifest: ${manifestPath}`
  );

  if (args.dryRun) {
    console.log("Dry run complete. No files downloaded.");
    return;
  }

  let downloadedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;
  let totalBytes = 0;

  await runPool(
    limited,
    async (asset) => {
      try {
        const exists = await fileExists(asset.localPath);
        if (exists) {
          skippedCount += 1;
          return;
        }

        const binary = await fetchBinary(asset.canonicalUrl, args.timeoutMs);
        await fs.mkdir(path.dirname(asset.localPath), { recursive: true });
        await fs.writeFile(asset.localPath, binary);
        downloadedCount += 1;
        totalBytes += binary.length;

        if (downloadedCount % 25 === 0) {
          console.log(`Downloaded ${downloadedCount}/${limited.length}...`);
        }
      } catch (error) {
        failedCount += 1;
        console.warn(`Failed asset: ${asset.canonicalUrl} (${String(error)})`);
      }
    },
    args.concurrency
  );

  console.log("Mirror complete.");
  console.log(
    `downloaded=${downloadedCount} skipped=${skippedCount} failed=${failedCount} sizeMB=${(
      totalBytes /
      (1024 * 1024)
    ).toFixed(2)}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
