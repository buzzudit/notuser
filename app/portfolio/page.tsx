import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { projects } from "@/data/projects";
import { homeFeaturedCaseStudies } from "@/data/site";
import { FeaturedCaseStudies } from "@/components/site/home/FeaturedCaseStudies";

export default function PortfolioPage() {
  const privateCount = projects.filter((project) => project.isPrivate).length;
  const impactSignalCount = projects.reduce(
    (count, project) => count + project.metrics.length,
    0,
  );
  const featuredPreviews = homeFeaturedCaseStudies.filter((preview) =>
    projects.some((project) => project.slug === preview.slug),
  );
  const featuredSlugs = new Set(featuredPreviews.map((preview) => preview.slug));
  const summaryProjects = projects.filter((project) => !featuredSlugs.has(project.slug));
  const totalVisibleProjects = featuredPreviews.length + summaryProjects.length;

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionHeading>Portfolio with flagship case studies and full project coverage</SectionHeading>
        <SectionDescription>
          This portfolio is structured for fast executive review: a flagship tier
          with deeper context, followed by the broader project set that shows range
          across healthcare, commerce, platforms, and product systems.
        </SectionDescription>

        <AIWorkspace
          compact
          className="mt-6"
          page="portfolio"
          context="Portfolio landing page with flagship case studies and a full project set spanning healthcare, enterprise platforms, and commerce."
          helperText="Ask about technology choices, outcomes, and tradeoffs across projects."
          suggestions={[
            "Compare all projects",
            "Show AI-related work",
            "Which project had the highest impact?",
          ]}
        />
      </SectionShell>

      <SectionShell className="pt-0" id="portfolio-overview">
        <div className="rounded-lg border border-border/70 bg-secondary/25 p-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Portfolio overview
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {totalVisibleProjects} visible projects in two tiers ({featuredPreviews.length}{" "}
            flagship and {summaryProjects.length} summary), with {impactSignalCount}+ impact
            signals. {privateCount} projects are marked private where details are intentionally
            limited.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="pt-0" id="flagship-case-studies">
        <SectionLabel>Flagship Case Studies</SectionLabel>
        <SectionHeading>Higher-context work for leadership and transformation conversations</SectionHeading>
        <SectionDescription>
          These case studies provide stronger detail on problem space, leadership
          scope, and why the work mattered. They are intended as the first review
          set for hiring managers and senior product leaders.
        </SectionDescription>
        <div className="mt-8">
          <FeaturedCaseStudies previews={featuredPreviews} projects={projects} />
        </div>
      </SectionShell>

      <SectionShell className="pt-0" id="project-grid">
        <SectionLabel>Full Project Set</SectionLabel>
        <SectionHeading>Additional projects that show breadth across domains and roles</SectionHeading>
        <SectionDescription>
          The remaining projects stay visible to show consistent execution across
          environments, while keeping the flagship tier as the primary deep-dive path.
        </SectionDescription>
        <div className="mt-8">
          <ProjectGrid projects={summaryProjects} />
        </div>
      </SectionShell>

      <SectionShell id="portfolio-cta">
        <CallToAction
          title="Need this level of depth on your product?"
          description="I can help map your AI roadmap to real workflow impact."
          primaryLabel="Contact me"
          primaryHref="/contact"
          secondaryLabel="Read the blog"
          secondaryHref="/blog"
        />
      </SectionShell>
    </PageLayout>
  );
}
