"use client";

import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { projects } from "@/data/projects";
import { AIGuidedNavigator } from "@/components/ai/AIGuidedNavigator";
import { AIInsightsPanel } from "@/components/ai/AIInsightsPanel";

export default function PortfolioPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionHeading>Case studies and shipped outcomes</SectionHeading>
        <SectionDescription>
          Five recent projects across AI product, healthcare systems, growth, and
          decision intelligence. Each project links to a full case study.
        </SectionDescription>
      </SectionShell>

      <SectionShell>
        <AIGuidedNavigator
          title="Guided portfolio navigation"
          items={[
            { label: "All projects", href: "#project-grid" },
            { label: "Case study structure", href: "#case-insights" },
            { label: "Get in touch", href: "#portfolio-cta" },
          ]}
        />
      </SectionShell>

      <SectionShell className="pt-0" id="project-grid">
        <ProjectGrid projects={projects} />
      </SectionShell>

      <SectionShell className="pt-0" id="case-insights">
        <AIInsightsPanel
          title="Insight extraction"
          insights={[
            {
              title: "Workflow focus wins",
              description:
                "Projects with tightly scoped workflow targets reached adoption faster than broad assistant launches.",
              signal: "Pattern 01",
            },
            {
              title: "Trust drives usage",
              description:
                "Transparent reasoning and confidence cues improved stakeholder buy-in in regulated and enterprise settings.",
              signal: "Pattern 02",
            },
            {
              title: "Outcome clarity scales teams",
              description:
                "Teams moved faster when each initiative tied to measurable impact and explicit ownership.",
              signal: "Pattern 03",
            },
          ]}
        />
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
