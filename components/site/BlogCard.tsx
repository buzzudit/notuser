import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { TagList } from "@/components/site/TagList";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
        {post.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        {post.date} - {post.readTime}
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
