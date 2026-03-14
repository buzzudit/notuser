import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TagList } from "@/components/site/TagList";
import { MetricsStrip } from "@/components/site/MetricsStrip";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
          {project.category} - {project.year}
        </p>
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          Case study <ArrowUpRight size={14} />
        </Link>
      </div>

      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <TagList tags={project.tags} className="mt-4" />
      <div className="mt-4">
        <MetricsStrip metrics={project.metrics} compact />
      </div>
    </article>
  );
}
