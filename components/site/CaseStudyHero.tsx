import type { Project } from "@/data/projects";
import { MetricsStrip } from "@/components/site/MetricsStrip";
import { TagList } from "@/components/site/TagList";

type CaseStudyHeroProps = {
  project: Project;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="rounded-2xl border border-border bg-card p-6 md:p-8">
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
      <TagList tags={project.tags} className="mt-5" />
      <div className="mt-6">
        <MetricsStrip metrics={project.metrics} />
      </div>
    </header>
  );
}
