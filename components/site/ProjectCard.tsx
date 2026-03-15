"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TagList } from "@/components/site/TagList";
import { MetricsStrip } from "@/components/site/MetricsStrip";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className={`group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-[0_0_20px_-8px_hsl(38_92%_50%/0.2)] ${className}`}
    >
      {project.thumbnail ? (
        <div className="relative mb-4 h-44 overflow-hidden rounded-lg border border-border/70 bg-secondary/40">
          <Image
            src={resolveMirroredMediaSrc(project.thumbnail)}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="mb-4 rounded-lg border border-border/70 bg-gradient-to-br from-secondary/70 via-secondary/40 to-card p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Visual preview unavailable
          </p>
        </div>
      )}

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
          {project.category} - {project.year}
        </p>
        {project.isPrivate ? (
          <span className="rounded border border-border/70 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
            Private
          </span>
        ) : null}
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary"
        >
          Case study <ArrowUpRight size={14} />
        </Link>
      </div>

      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {project.organization} - {project.platform}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <TagList tags={project.tags} className="mt-4" />
      <div className="mt-4">
        <MetricsStrip metrics={project.metrics} compact />
      </div>
    </motion.article>
  );
}
