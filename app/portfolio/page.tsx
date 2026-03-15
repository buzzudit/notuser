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
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AIInsightHighlight } from "@/components/ai/AIInsightHighlight";

export default function PortfolioPage() {
  const privateCount = projects.filter((project) => project.isPrivate).length;
  const impactSignalCount = projects.reduce(
    (count, project) => count + project.metrics.length,
    0,
  );

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionHeading>Case studies and shipped outcomes</SectionHeading>
        <SectionDescription>
          {projects.length} projects across healthcare, commerce, platform, and
          product systems. Each card links to a full case study; {privateCount} are
          marked private where deeper details stay limited.
        </SectionDescription>

        <div className="mt-6">
          <AIWorkspace compact />
          <p className="mt-2 text-[11px] text-muted-foreground">
            Ask about technology choices, outcomes, and tradeoffs across projects.
          </p>
        </div>

        <AISuggestionChips
          className="mt-4"
          suggestions={[
            { label: "Compare all projects" },
            { label: "Show AI-related work" },
            { label: "Which project had the highest impact?" },
          ]}
        />
      </SectionShell>

      <SectionShell className="pt-0" id="portfolio-overview">
        <AIInsightHighlight label="Portfolio overview">
          {projects.length} projects with {impactSignalCount}+ recorded impact
          signals across UX strategy, platform design, and workflow execution.
        </AIInsightHighlight>
      </SectionShell>

      <SectionShell className="pt-0" id="project-grid">
        <ProjectGrid projects={projects} />
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
