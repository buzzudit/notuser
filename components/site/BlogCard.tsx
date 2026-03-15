import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { TagList } from "@/components/site/TagList";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const thumbnailSrc = resolveMirroredMediaSrc(post.thumbnail);

  return (
    <article className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <div className="relative mb-4 h-44 overflow-hidden rounded-lg border border-border/70 bg-secondary/40">
        <Image
          src={thumbnailSrc}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
        {post.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        {post.date} - {post.readTime} - {post.author}
      </p>
      <TagList tags={post.tags} className="mt-3" />
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex text-sm text-muted-foreground hover:text-foreground"
      >
        Read post
      </Link>
    </article>
  );
}
