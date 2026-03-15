function sanitizePathSegment(segment: string) {
  return segment.replaceAll(":", "_").replaceAll("?", "_").replaceAll("*", "_");
}

function convertWixImageProtocol(rawUrl: string) {
  if (!rawUrl.startsWith("wix:image://v1/")) {
    return rawUrl;
  }

  const token = rawUrl.slice("wix:image://v1/".length).split(/[\/#?]/)[0];
  if (!token) {
    return rawUrl;
  }

  return `https://static.wixstatic.com/media/${decodeURIComponent(token)}`;
}

function canonicalizePath(parsed: URL) {
  if (parsed.hostname === "static.wixstatic.com" && parsed.pathname.startsWith("/media/")) {
    const cleanedPath = decodeURIComponent(parsed.pathname);
    const afterMedia = cleanedPath.slice("/media/".length);
    const token = afterMedia.split("/")[0];
    if (!token) return null;
    return `/media/${token}`;
  }

  if (parsed.hostname === "video.wixstatic.com" || parsed.hostname === "filesusr.com") {
    return decodeURIComponent(parsed.pathname);
  }

  return null;
}

export function resolveMirroredMediaSrc(rawUrl: string) {
  try {
    const parsed = new URL(convertWixImageProtocol(rawUrl));
    const canonicalPath = canonicalizePath(parsed);
    if (!canonicalPath) {
      return rawUrl;
    }

    const pathParts = canonicalPath
      .split("/")
      .filter(Boolean)
      .map((segment) => sanitizePathSegment(segment));

    return `/media/mirror/${sanitizePathSegment(parsed.hostname)}/${pathParts.join("/")}`;
  } catch {
    return rawUrl;
  }
}
