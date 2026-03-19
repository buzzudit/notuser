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
  return buildUkrScopedMetadata("/blog", searchParams);
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
        "Extract weekly action items",
      ]
    : [
        "Summarize all posts",
        "Find workflow patterns",
        "What should I read first?",
        "Extract weekly action items",
      ];
  const blogHelperText = activeIntent
    ? `Ask AI to surface writing that best supports ${fitTarget} and this conversation.`
    : "Ask AI to summarize themes, compare posts, or suggest a next read.";
  const ctaTitle = activeIntent
    ? `Need help shipping outcomes for ${activeIntent.org}?`
    : "Need help turning ideas into shipped outcomes?";
  const ctaDescription = activeIntent
    ? `I work with teams to translate strategy into AI-native products with the kind of leadership depth relevant to ${fitTarget}.`
    : "I work with teams to translate strategy into AI-native products.";

  return (
    <PageLayout>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Writing on design leadership, systems, and AI-first execution</SectionHeading>
        <SectionDescription>
          Practical writing on product strategy, systems thinking, leadership, and
          the operating questions behind modern AI and platform work.
        </SectionDescription>
        {activeIntent ? (
          <div className="mt-6">
            <IntentAudienceBanner intentLink={activeIntent} />
          </div>
        ) : null}

        <AIWorkspace
          compact
          className="mt-6"
          page="blog"
          context={blogAiContext}
          helperText={blogHelperText}
          suggestions={blogSuggestions}
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
          title={ctaTitle}
          description={ctaDescription}
          primaryLabel="Work together"
          primaryHref="/contact"
          secondaryLabel="View portfolio"
          secondaryHref="/portfolio"
        />
      </SectionShell>
    </PageLayout>
  );
}
