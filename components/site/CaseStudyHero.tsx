import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { MetricsStrip } from "@/components/site/MetricsStrip";
import { TagList } from "@/components/site/TagList";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type CaseStudyHeroProps = {
  project: Project;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="rounded-2xl border border-border bg-card p-6 md:p-8">
      {project.thumbnail ? (
        <div className="relative mb-5 h-[220px] overflow-hidden rounded-xl border border-border/70 bg-secondary/40 md:h-[360px]">
          <Image
            src={resolveMirroredMediaSrc(project.thumbnail)}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
        </div>
      ) : (
        <div className="mb-5 rounded-xl border border-border/70 bg-gradient-to-br from-secondary/70 via-secondary/40 to-card p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Visual preview unavailable
          </p>
        </div>
      )}
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        {project.category} - {project.year}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Role:</span> {project.role}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Context:</span>{" "}
        {project.organization} - {project.platform} - {project.scope}
      </p>
      <TagList tags={project.tags} brandTag={project.organization} className="mt-5" />
      <div className="mt-6">
        <MetricsStrip metrics={project.metrics} />
      </div>
      <div className="mt-5 flex flex-wrap gap-3 text-xs">
        {project.demoUrl ? (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-muted-foreground hover:text-foreground"
          >
            Live demo
          </Link>
        ) : null}
        <Link
          href={project.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-muted-foreground hover:text-foreground"
        >
          Original source
        </Link>
      </div>
    </header>
  );
}
