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
import { FeaturedCaseStudies } from "@/components/site/home/FeaturedCaseStudies";
import { projects } from "@/data/projects";
import { homeFeaturedCaseStudies } from "@/data/site";

type ShareProfileContext = {
  code: string;
  company: string;
  position: string | null;
  notes: string | null;
};

type PortfolioPageContentProps = {
  shareProfile?: ShareProfileContext | null;
};

function parseProjectYear(value: string) {
  const matches = value.match(/\d{4}/g);
  if (!matches) {
    return 0;
  }

  return Math.max(...matches.map((entry) => Number(entry)));
}

export function PortfolioPageContent({ shareProfile }: PortfolioPageContentProps) {
  const sortedProjects = [...projects].sort((left, right) => {
    const yearDelta = parseProjectYear(right.year) - parseProjectYear(left.year);
    if (yearDelta !== 0) {
      return yearDelta;
    }

    return left.title.localeCompare(right.title);
  });

  const featuredPreviews = homeFeaturedCaseStudies.filter((preview) =>
    sortedProjects.some((project) => project.slug === preview.slug),
  );
  const featuredSlugs = new Set(featuredPreviews.map((preview) => preview.slug));
  const summaryProjects = sortedProjects.filter((project) => !featuredSlugs.has(project.slug));

  const shareContextBlock = shareProfile
    ? [
        `Share profile code: ${shareProfile.code}`,
        `Target company: ${shareProfile.company}`,
        shareProfile.position ? `Target position: ${shareProfile.position}` : "",
        shareProfile.notes ? `Tailoring notes: ${shareProfile.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    : null;

  const portfolioAiContext = [
    "Portfolio landing page with flagship and full project coverage.",
    `Total projects: ${sortedProjects.length}.`,
    shareContextBlock ?? "",
    `Flagship projects: ${
      featuredPreviews.length > 0
        ? featuredPreviews.map((preview) => preview.slug).join(" | ")
        : "none"
    }.`,
    `Project list and metadata: ${sortedProjects
      .map(
        (project) =>
          `${project.title} (${project.year}) | org: ${project.organization} | category: ${project.category} | platform: ${project.platform} | scope: ${project.scope} | tags: ${project.tags.slice(0, 4).join(", ")} | metrics: ${project.metrics
            .slice(0, 2)
            .map((metric) => `${metric.label} ${metric.value}`)
            .join(", ")}`,
      )
      .join(" || ")}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionHeading>Case studies and successes</SectionHeading>
        <SectionDescription>
          A curated set of flagship case studies followed by the complete project
          catalog for breadth across healthcare, enterprise platforms, commerce,
          and personal build work.
        </SectionDescription>
        {shareProfile ? (
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/[0.06] px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Tailored view
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              This portfolio link is tailored for{" "}
              <span className="font-semibold text-foreground">{shareProfile.company}</span>
              {shareProfile.position ? ` (${shareProfile.position})` : ""}.
            </p>
          </div>
        ) : null}
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

      <SectionShell className="pt-0" id="portfolio-ai">
        <AIWorkspace
          compact
          className="rounded-xl border border-border bg-card p-4"
          page="portfolio"
          shareCode={shareProfile?.code}
          context={portfolioAiContext}
          helperText="Ask about technology choices, chronology, outcomes, and tradeoffs across projects."
          suggestions={[
            "Compare all projects",
            "Show AI-related work",
            "Which project had the highest impact?",
          ]}
        />
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
