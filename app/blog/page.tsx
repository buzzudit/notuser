"use client";

import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { BlogGrid } from "@/components/site/BlogGrid";
import { BlogList } from "@/components/site/BlogList";
import { CallToAction } from "@/components/site/CallToAction";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { blogPosts } from "@/data/blog";
import { homeFeaturedWritingSlugs } from "@/data/site";
import {
  getBlogDisplayCategory,
  getBlogDisplayTags,
  getBlogLandingCollections,
  getBlogReadTime,
} from "@/lib/site/blogFormatting";

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
  const commonThemes = Array.from(
    new Set(blogPosts.flatMap((post) => getBlogDisplayTags(post))),
  )
    .filter((theme) => theme && theme.trim().length > 0)
    .slice(0, 24);
  const blogAiContext = [
    `Blog landing with ${blogPosts.length} posts (${featured.length} featured, ${archive.length} archive).`,
    "Core site routes: /blog | /portfolio | /resume | /contact",
    `Featured posts: ${featured
      .map(
        (post) =>
          `${post.title} | path: /blog/${post.slug} | ${getBlogDisplayCategory(post)} | ${post.author} | ${getBlogReadTime(post.readTime)} | tags: ${getBlogDisplayTags(post).join(", ")}`,
      )
      .join(" || ")}`,
    `Archive posts: ${archive
      .map(
        (post) =>
          `${post.title} | path: /blog/${post.slug} | ${getBlogDisplayCategory(post)} | ${post.author} | ${getBlogReadTime(post.readTime)} | tags: ${getBlogDisplayTags(post).join(", ")}`,
      )
      .join(" || ")}`,
    `Common themes: ${commonThemes.join(", ")}`,
  ].join("\n\n");

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Writing on design leadership, systems, and AI-first execution</SectionHeading>
        <SectionDescription>
          Practical writing on product strategy, systems thinking, leadership, and
          the operating questions behind modern AI and platform work.
        </SectionDescription>

        <AIWorkspace
          compact
          className="mt-6"
          page="blog"
          context={blogAiContext}
          helperText="Ask AI to summarize themes, compare posts, or suggest a next read."
          suggestions={[
            "Summarize all posts",
            "Find workflow patterns",
            "What should I read first?",
            "Extract weekly action items",
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
            <BlogList posts={archive} />
          </div>
        </section>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Think Tank</SectionLabel>
        <SectionHeading>Questions to pressure-test your thinking</SectionHeading>
        <ol className="mt-6 divide-y divide-border/70 rounded-xl border border-border/70 bg-card">
          {blogThinkingPrompts.map((prompt, index) => (
            <li key={prompt.question} className="grid gap-3 px-4 py-4 md:grid-cols-[40px_1fr] md:px-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="text-sm font-medium text-foreground md:text-base">{prompt.question}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {prompt.context}
                </p>
              </div>
            </li>
          ))}
        </ol>
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
