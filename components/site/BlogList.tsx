import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import {
  formatBlogDate,
  getBlogDisplayCategory,
  getBlogReadTime,
} from "@/lib/site/blogFormatting";

type BlogListProps = {
  posts: BlogPost[];
};

export function BlogList({ posts }: BlogListProps) {
  return (
    <ul className="divide-y divide-border/70 rounded-xl border border-border/70 bg-card">
      {posts.map((post) => {
        const displayCategory = getBlogDisplayCategory(post);
        const displayDate = formatBlogDate(post.date);
        const displayReadTime = getBlogReadTime(post.readTime);

        return (
          <li key={post.id} className="px-4 py-4 md:px-5">
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-start justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {displayCategory} - {displayDate} - {displayReadTime}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary md:text-lg">
                  {post.title}
                </h3>
              </div>
              <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
                Read <ArrowRight size={13} />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
