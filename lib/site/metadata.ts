import type { Metadata } from "next";
import { directContact, homeHero } from "@/data/site";
import { siteConfig } from "@/lib/site/content";

const DEFAULT_SHARE_IMAGE = "/images/udit-bw.png";

type SearchIndexPolicy = Metadata["robots"];

export type BuildSiteMetadataInput = {
  title?: string;
  description?: string;
  pathname: string;
  image?: string | null;
  imageAlt?: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  robots?: SearchIndexPolicy;
};

export function absoluteUrl(pathOrUrl = "/") {
  return new URL(pathOrUrl, siteConfig.url).toString();
}

export function buildSiteMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  pathname,
  image = DEFAULT_SHARE_IMAGE,
  imageAlt = siteConfig.name,
  keywords,
  openGraphType = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  robots,
}: BuildSiteMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(pathname);
  const imageUrl = image ? absoluteUrl(image) : absoluteUrl(DEFAULT_SHARE_IMAGE);
  const openGraphImages = [
    {
      url: imageUrl,
      alt: imageAlt,
    },
  ];
  const openGraph: Metadata["openGraph"] =
    openGraphType === "article"
      ? {
          title,
          description,
          url: canonicalUrl,
          siteName: siteConfig.name,
          type: "article",
          images: openGraphImages,
          publishedTime,
          modifiedTime,
          authors,
          section,
          tags,
        }
      : {
          title,
          description,
          url: canonicalUrl,
          siteName: siteConfig.name,
          type: "website",
          images: openGraphImages,
        };

  return {
    title,
    description,
    applicationName: siteConfig.name,
    keywords,
    alternates: {
      canonical: pathname,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots,
  };
}

export function buildNoIndexMetadata(input: Omit<BuildSiteMetadataInput, "robots">) {
  return buildSiteMetadata({
    ...input,
    robots: {
      index: false,
      follow: false,
    },
  });
}

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: homeHero.name,
    url: siteConfig.url,
    image: absoluteUrl(homeHero.imageSrc),
    jobTitle: "Senior-level design leader",
    description: siteConfig.description,
    email: `mailto:${directContact.email}`,
    sameAs: [directContact.linkedinHref],
    knowsAbout: [
      "Design leadership",
      "AI-first product strategy",
      "Enterprise platforms",
      "Healthcare technology",
      "Design systems",
      "Workflow transformation",
    ],
  };
}

export function getArticleJsonLd(input: {
  title: string;
  description: string;
  pathname: string;
  image?: string | null;
  author: string;
  datePublished: string;
  dateModified: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.pathname),
    image: absoluteUrl(input.image || DEFAULT_SHARE_IMAGE),
    author: {
      "@type": "Person",
      name: input.author,
    },
    publisher: {
      "@type": "Person",
      name: homeHero.name,
      url: siteConfig.url,
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    keywords: input.keywords,
  };
}

export function getCreativeWorkJsonLd(input: {
  title: string;
  description: string;
  pathname: string;
  image?: string | null;
  organization?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.pathname),
    image: absoluteUrl(input.image || DEFAULT_SHARE_IMAGE),
    creator: {
      "@type": "Person",
      name: homeHero.name,
      url: siteConfig.url,
    },
    about: input.organization,
    keywords: input.keywords,
  };
}
