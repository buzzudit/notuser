import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { MetricsStrip } from "@/components/site/MetricsStrip";
import { TagList } from "@/components/site/TagList";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type CaseStudyHeroProps = {
  project: Project;
};

// Records migrated from the legacy site carry a sourceUrl pointing at the original
// published page. Records authored here point sourceUrl at their own canonical path,
// where an "Original source" link would just be a self-reference.
function isSelfReferencingSource(project: Project) {
  try {
    return new URL(project.sourceUrl).pathname === `/portfolio/${project.slug}`;
  } catch {
    return false;
  }
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const showOriginalSource = !isSelfReferencingSource(project);

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
      {/* The summary is the thesis, so it reads large — but a step below the title, and
          on a measure that wraps in two or three lines rather than a block of display
          type that swamps a short project name. */}
      <p className="mt-4 max-w-3xl text-pretty text-lg font-medium leading-snug tracking-tight text-foreground/75 md:text-2xl md:leading-snug">
        {project.summary}
      </p>

      {/* Structured meta, so the drop from statement type to detail is a deliberate
          step rather than a fall into a wall of small text. */}
      <dl className="mt-7 grid gap-x-10 gap-y-5 border-t border-border/60 pt-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Role
          </dt>
          <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            {project.role}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Context
          </dt>
          <dd className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            {project.organization}
            <span className="mx-1.5 text-border">·</span>
            {project.platform}
            <span className="mx-1.5 text-border">·</span>
            {project.scope}
          </dd>
        </div>
      </dl>

      <TagList tags={project.tags} brandTag={project.organization} className="mt-6" />
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
        {showOriginalSource ? (
          <Link
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-muted-foreground hover:text-foreground"
          >
            Original source
          </Link>
        ) : null}
      </div>
    </header>
  );
}
