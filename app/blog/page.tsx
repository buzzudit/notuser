"use client";

import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { BlogGrid } from "@/components/site/BlogGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { blogPosts } from "@/data/blog";
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AIInsightsPanel } from "@/components/ai/AIInsightsPanel";

export default function BlogPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Writing on AI product and execution</SectionHeading>
        <SectionDescription>
          Four recent posts on designing reliable AI workflows, operating systems,
          and building high-signal product narratives.
        </SectionDescription>
      </SectionShell>

      <SectionShell>
        <AISuggestionChips
          title="Contextual suggestions"
          suggestions={[
            "Show posts about trust in AI workflows",
            "Find articles with operational playbooks",
            "Highlight strategy-to-execution frameworks",
            "Extract weekly implementation actions",
          ]}
        />
      </SectionShell>

      <SectionShell className="pt-0">
        <BlogGrid posts={blogPosts} />
      </SectionShell>

      <SectionShell className="pt-0">
        <AIInsightsPanel
          title="Theme insights"
          insights={[
            {
              title: "Trust and legibility",
              description:
                "High-performing AI products expose reasoning and make correction easy.",
              signal: "Core theme",
            },
            {
              title: "Operations over prompts",
              description:
                "Sustainable outcomes come from workflow design, governance, and instrumentation.",
              signal: "Execution lens",
            },
            {
              title: "Narrative with metrics",
              description:
                "Strong product storytelling combines decision quality with measurable outcomes.",
              signal: "Communication",
            },
          ]}
        />
      </SectionShell>

      <SectionShell>
        <CallToAction
          title="Need help turning ideas into shipped outcomes?"
          description="I work with teams to translate strategy into AI-native products."
          primaryLabel="Work together"
          primaryHref="/contact"
          secondaryLabel="View portfolio"
          secondaryHref="/portfolio"
        />
      </SectionShell>
    </PageLayout>
  );
}
