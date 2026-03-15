"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { TagList } from "@/components/site/TagList";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogCard({ post, className = "" }: BlogCardProps) {
  const thumbnailSrc = resolveMirroredMediaSrc(post.thumbnail);

  return (
    <motion.article
      whileHover={{ y: -2 }}
      className={`group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 ${className}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative mb-4 h-44 overflow-hidden rounded-lg border border-border/70 bg-secondary/40">
          <Image
            src={thumbnailSrc}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
            {post.category}
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">{post.readTime}</p>
        </div>

        <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          {post.date} - {post.author}
        </p>

        <TagList tags={post.tags} className="mt-3" />

        <div className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
          Read post <ArrowRight size={12} />
        </div>
      </Link>
    </motion.article>
  );
}
