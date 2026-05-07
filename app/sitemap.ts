import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/site/metadata";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes: SitemapEntry[] = [
  {
    url: absoluteUrl("/"),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: absoluteUrl("/portfolio"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: absoluteUrl("/blog"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: absoluteUrl("/resume"),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: absoluteUrl("/contact"),
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: absoluteUrl("/circle"),
    changeFrequency: "yearly",
    priority: 0.55,
  },
  {
    url: absoluteUrl("/about-personalization"),
    changeFrequency: "yearly",
    priority: 0.4,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: SitemapEntry[] = projects
    .filter((project) => !project.isPrivate)
    .map((project) => ({
      url: absoluteUrl(`/portfolio/${project.slug}`),
      changeFrequency: "yearly",
      priority: 0.75,
    }));

  const blogRoutes: SitemapEntry[] = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt,
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
