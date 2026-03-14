"use client";

import { AIWorkspace } from "@/components/site/AIWorkspace";
import { ContentCard } from "@/components/site/ContentCard";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { portfolioItems } from "@/lib/site/content";

export default function PortfolioPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionHeading>Selected work</SectionHeading>
        <SectionDescription>
          A curated selection of projects spanning AI, product, and strategy.
        </SectionDescription>

        <div className="mt-6">
          <AIWorkspace compact />
          <p className="mt-2 text-[11px] text-muted-foreground">
            Ask about any project - technology, outcomes, or approach.
          </p>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <ContentCard key={item.id}>
              <div
                className="mb-4 h-40 rounded-md bg-secondary"
                role="img"
                aria-label={item.imageAlt}
              />
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-primary">
                {item.category}
              </p>
              <h3 className="mb-2 text-base font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="rounded-md border border-border/50 bg-secondary/50 p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  Outcome
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{item.outcome}</p>
              </div>
            </ContentCard>
          ))}
        </div>
      </SectionShell>
    </PageLayout>
  );
}
