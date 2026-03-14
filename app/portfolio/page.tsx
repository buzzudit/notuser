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
        <ProjectGrid projects={projects} />
      </SectionShell>

      <SectionShell>
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
