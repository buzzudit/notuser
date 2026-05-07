import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site/metadata";
import { siteConfig } from "@/lib/site/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
