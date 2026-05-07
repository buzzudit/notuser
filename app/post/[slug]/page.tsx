import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { blogPosts, getBlogPostBySlug, resolveBlogSlug } from "@/data/blog";
import {
  getBlogDisplayCategory,
  getBlogDisplayTags,
  getBlogExcerpt,
  getBlogThumbnailSrc,
} from "@/lib/site/blogFormatting";
import { buildSiteMetadata } from "@/lib/site/metadata";

type LegacyPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: LegacyPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveBlogSlug(slug);
  const post = getBlogPostBySlug(resolved);
  if (!post) {
    notFound();
  }

  const tags = getBlogDisplayTags(post);
  return buildSiteMetadata({
    title: post.title,
    description: getBlogExcerpt(post, 240),
    pathname: `/blog/${resolved}`,
    image: getBlogThumbnailSrc(post.thumbnail),
    imageAlt: post.title,
    openGraphType: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    section: getBlogDisplayCategory(post),
    tags,
    keywords: tags,
  });
}

export default async function LegacyPostPage({ params }: LegacyPostPageProps) {
  const { slug } = await params;
  const resolved = resolveBlogSlug(slug);
  const exists = blogPosts.some((post) => post.slug === resolved);

  if (!exists) {
    notFound();
  }

  permanentRedirect(`/blog/${resolved}`);
}
