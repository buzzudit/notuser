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
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { blogPosts } from "@/data/blog";
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AIThinkingPrompts } from "@/components/ai/AIThinkingPrompts";

const blogThinkingPrompts = [
  {
    question: "How would these ideas apply to my current product?",
    context:
      "Pick one post and map it to a single workflow in your team before broad rollout.",
  },
  {
    question: "Which assumption here is most likely to fail first?",
    context:
      "Stress-test where trust, governance, or execution capacity could break under real usage.",
  },
  {
    question: "What is the smallest experiment I can run this week?",
    context:
      "Turn one takeaway into a measurable test with a success threshold and owner.",
  },
];

export default function BlogPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Writing on AI product and execution</SectionHeading>
        <SectionDescription>
          Real posts on designing reliable AI workflows, operating systems, and
          high-signal product narratives.
        </SectionDescription>

        <div className="mt-6">
          <AIWorkspace compact />
          <p className="mt-2 text-[11px] text-muted-foreground">
            Ask AI to summarize themes, compare posts, or suggest a next read.
          </p>
        </div>

        <AISuggestionChips
          className="mt-4"
          suggestions={[
            { label: "Summarize all posts" },
            { label: "Find workflow patterns" },
            { label: "What should I read first?" },
            { label: "Extract weekly action items" },
          ]}
        />
      </SectionShell>

      <SectionShell className="pt-0">
        <BlogGrid posts={blogPosts} />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Reflect</SectionLabel>
        <SectionHeading>Think deeper</SectionHeading>
        <div className="mt-4 max-w-2xl">
          <AIThinkingPrompts prompts={blogThinkingPrompts} />
        </div>
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
