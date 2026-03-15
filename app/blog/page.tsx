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
import { homeFeaturedWritingSlugs } from "@/data/site";
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AIThinkingPrompts } from "@/components/ai/AIThinkingPrompts";
import { getBlogLandingCollections } from "@/lib/site/blogFormatting";

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
  const { featured, archive } = getBlogLandingCollections(
    blogPosts,
    homeFeaturedWritingSlugs,
  );

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Writing on design leadership, systems, and AI-first execution</SectionHeading>
        <SectionDescription>
          Practical writing on product strategy, systems thinking, leadership, and
          the operating questions behind modern AI and platform work.
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
        <SectionLabel>Featured</SectionLabel>
        <SectionHeading>Thinking on leadership, product systems, and AI-first execution</SectionHeading>
        <SectionDescription>
          Priority reading for hiring managers and product leaders evaluating how I
          approach strategy, organizational design, and execution quality.
        </SectionDescription>
        <div className="mt-8">
          <BlogGrid posts={featured} />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <section className="rounded-xl border border-border/70 bg-card p-5 md:p-6">
          <SectionLabel>Archive</SectionLabel>
          <SectionHeading>Additional writing and legacy posts</SectionHeading>
          <SectionDescription>
            Earlier writing remains available for context and breadth, with lower
            priority than the featured leadership and AI-focused pieces above.
          </SectionDescription>
          <div className="mt-8">
            <BlogGrid posts={archive} />
          </div>
        </section>
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
