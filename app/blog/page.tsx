import type { Metadata } from "next";
import { cookies } from "next/headers";
import { IntentAudienceBanner } from "@/components/site/intent/IntentAudienceBanner";
import { UkrSessionBridge } from "@/components/site/intent/UkrSessionBridge";
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
import { AIWorkspaceBanner } from "@/components/site/AIWorkspaceBanner";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { blogPosts } from "@/data/blog";
import { homeFeaturedWritingSlugs } from "@/data/site";
import {
  getBlogDisplayCategory,
  getBlogDisplayTags,
  getBlogLandingCollections,
  getBlogReadTime,
} from "@/lib/site/blogFormatting";
import {
  buildUkrIntentAiContext,
  buildUkrScopedMetadata,
  getIntentRoleSummary,
  resolveUkrExperience,
  UKR_COOKIE_NAME,
} from "@/lib/site/ukrLinks";

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

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  return buildUkrScopedMetadata("/blog", searchParams, {
    title: "Writing on Design, Leadership, and AI",
    description:
      "Practical writing from Udit Khandelwal on design, leadership, product systems, and AI.",
    keywords: [
      "design leadership writing",
      "AI-first execution",
      "systems thinking",
      "product strategy",
      "enterprise UX",
    ],
  });
}

export default async function BlogPage({ searchParams }: PageProps) {
  const cookieStore = await cookies();
  const intentState = await resolveUkrExperience({
    searchParams,
    cookieCode: cookieStore.get(UKR_COOKIE_NAME)?.value ?? null,
  });
  const activeIntent = intentState.activeIntent;
  const fitTarget = activeIntent ? getIntentRoleSummary(activeIntent) : null;
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
    activeIntent ? buildUkrIntentAiContext(activeIntent) : "",
  ].join("\n\n");
  const blogSuggestions = activeIntent
    ? [
        `Which posts are most relevant for ${fitTarget}?`,
        `What writing would resonate with ${activeIntent.org}?`,
        `Which posts best demonstrate leadership fit?`,
        "Extract useful action items",
      ]
    : [
        "Summarize the writing themes",
        "Find workflow patterns",
        "What should I read first?",
        "Extract useful action items",
      ];
  const blogHelperText = activeIntent
    ? `Ask AI to surface writing that best supports ${fitTarget} and this conversation.`
    : "Ask AI to summarize themes, compare posts, or suggest a next read.";
  const ctaTitle = activeIntent
    ? `Need sharper product direction for ${activeIntent.org}?`
    : "Need sharper product direction?";
  const ctaDescription = activeIntent
    ? `I help teams connect strategy, design, and AI workflow decisions in ways relevant to ${fitTarget}.`
    : "I help teams connect strategy, design, and AI workflow decisions.";

  return (
    <PageLayout>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Writing on design, leadership, and AI</SectionHeading>
        <SectionDescription>
          Practical essays on product strategy, systems thinking, leadership, and
          the operating questions behind AI and platform work.
        </SectionDescription>
        {activeIntent ? (
          <div className="mt-6">
            <IntentAudienceBanner intentLink={activeIntent} />
          </div>
        ) : null}

        <div className="mt-6">
          <AIWorkspaceBanner
            eyebrow="AI Guide"
            title="Find the most relevant writing"
            description={blogHelperText}
          >
            <AIWorkspace
              compact
              page="blog"
              context={blogAiContext}
              helperText={blogHelperText}
              suggestions={blogSuggestions}
              tone="banner"
            />
          </AIWorkspaceBanner>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionLabel>Featured</SectionLabel>
        <SectionHeading>Start with these essays</SectionHeading>
        <SectionDescription>
          A focused set on product strategy, organizational design, systems
          thinking, and execution quality.
        </SectionDescription>
        <div className="mt-8">
          <BlogGrid posts={featured} />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <section className="rounded-xl border border-border/70 bg-card p-5 md:p-6">
          <SectionLabel>Archive</SectionLabel>
          <SectionHeading>More writing from the archive</SectionHeading>
          <SectionDescription>
            Older essays across design, product, technology, and leadership.
          </SectionDescription>
          <div className="mt-8">
            <BlogList posts={archive} />
          </div>
        </section>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Think Tank</SectionLabel>
        <SectionHeading>Questions to sharpen your thinking</SectionHeading>
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
          eyebrow="Collaboration"
          title={ctaTitle}
          description={ctaDescription}
          primaryLabel="Start a conversation"
          primaryHref="/contact"
          secondaryLabel="View portfolio"
          secondaryHref="/portfolio"
        />
      </SectionShell>
    </PageLayout>
  );
}
