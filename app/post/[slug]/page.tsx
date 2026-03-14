import { notFound, redirect } from "next/navigation";
import { blogPosts, resolveBlogSlug } from "@/data/blog";

type LegacyPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function LegacyPostPage({ params }: LegacyPostPageProps) {
  const { slug } = await params;
  const resolved = resolveBlogSlug(slug);
  const exists = blogPosts.some((post) => post.slug === resolved);

  if (!exists) {
    notFound();
  }

  redirect(`/blog/${resolved}`);
}
