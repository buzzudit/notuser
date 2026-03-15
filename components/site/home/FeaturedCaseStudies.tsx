import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MetricsStrip } from "@/components/site/MetricsStrip";
import type { Project } from "@/data/projects";
import type { HomeCaseStudyPreview } from "@/data/site";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type FeaturedCaseStudiesProps = {
  previews: HomeCaseStudyPreview[];
  projects: Project[];
};

export function FeaturedCaseStudies({
  previews,
  projects,
}: FeaturedCaseStudiesProps) {
  const featuredItems = previews.flatMap((preview) => {
    const project = projects.find((item) => item.slug === preview.slug);
    return project ? [{ preview, project }] : [];
  });

  return (
    <div className="space-y-5">
      {featuredItems.map(({ preview, project }) => (
        <article
          key={project.slug}
          className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/25 md:p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
            {project.thumbnail ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-secondary/40">
                <Image
                  src={resolveMirroredMediaSrc(project.thumbnail)}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 260px"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-end rounded-xl border border-border/70 bg-gradient-to-br from-secondary via-card to-card p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Portfolio preview
                </p>
              </div>
            )}

            <div>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                    {preview.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.organization} - {project.year} - {project.platform}
                  </p>
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  View case study <ArrowUpRight size={13} />
                </Link>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Role:</span> {project.role}
              </p>

              <div className="mt-6 grid gap-4 border-t border-border/50 pt-5 md:grid-cols-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                    Problem space
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {preview.problemSpace}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                    Leadership contribution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {preview.leadership}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                    Why it mattered
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {preview.impact}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <MetricsStrip metrics={preview.metrics} />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
