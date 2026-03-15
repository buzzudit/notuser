"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/data/blog";
import { TagList } from "@/components/site/TagList";
import {
  formatBlogDate,
  getBlogDisplayCategory,
  getBlogDisplayTags,
  getBlogExcerpt,
  getBlogReadTime,
  getBlogThumbnailSrc,
} from "@/lib/site/blogFormatting";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogCard({ post, className = "" }: BlogCardProps) {
  const defaultThumbnailSrc = useMemo(
    () => getBlogThumbnailSrc(post.thumbnail),
    [post.thumbnail],
  );
  const [thumbnailSrc, setThumbnailSrc] = useState(defaultThumbnailSrc);
  const displayExcerpt = getBlogExcerpt(post, 210);
  const displayDate = formatBlogDate(post.date);
  const displayCategory = getBlogDisplayCategory(post);
  const displayTags = getBlogDisplayTags(post);
  const displayReadTime = getBlogReadTime(post.readTime);

  return (
    <motion.article
      whileHover={{ y: -3 }}
      className={`group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-[0_0_20px_-8px_hsl(38_92%_50%/0.2)] ${className}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative mb-4 h-52 overflow-hidden rounded-lg border border-border/70 bg-secondary/40">
          <Image
            src={thumbnailSrc}
            alt={post.title}
            fill
            onError={() => setThumbnailSrc("/images/blog-placeholder.svg")}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
            {displayCategory}
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">{displayReadTime}</p>
        </div>

        <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{displayExcerpt}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          {displayDate} - {post.author}
        </p>

        <TagList tags={displayTags} className="mt-3" />

        <div className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
          Read post <ArrowRight size={12} />
        </div>
      </Link>
    </motion.article>
  );
}
