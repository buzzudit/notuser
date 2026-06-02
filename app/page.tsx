import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IntentAudienceBanner } from "@/components/site/intent/IntentAudienceBanner";
import { UkrSessionBridge } from "@/components/site/intent/UkrSessionBridge";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { AILeadershipSection } from "@/components/site/home/AILeadershipSection";
import { ExecutiveHero } from "@/components/site/home/ExecutiveHero";
import { FeaturedCaseStudies } from "@/components/site/home/FeaturedCaseStudies";
import { SignalCardGrid } from "@/components/site/home/SignalCardGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { AIWorkspaceBanner } from "@/components/site/AIWorkspaceBanner";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { BlogGrid } from "@/components/site/BlogGrid";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { ImpactStats } from "@/components/site/ImpactStats";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import {
  homeAILeadership,
  homeAILeadershipPillars,
  homeCallToAction,
  homeExecutiveProof,
  homeFeaturedCaseStudies,
  homeFeaturedWritingSlugs,
  homeHero,
  homeLeadershipModel,
  homeTestimonials,
  homeWhyUdit,
  homeWritingSection,
  trustIndicators,
} from "@/data/site";
import {
  buildUkrIntentAiContext,
  buildUkrScopedMetadata,
  getIntentRoleSummary,
  resolveUkrExperience,
  UKR_COOKIE_NAME,
} from "@/lib/site/ukrLinks";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  return buildUkrScopedMetadata("/", searchParams, {
    title: "Udit Khandelwal",
    description: homeHero.subheadline,
    image: homeHero.imageSrc,
    imageAlt: homeHero.imageAlt,
    keywords: [
      "Udit Khandelwal",
      "design leadership",
      "AI-first product strategy",
      "enterprise platforms",
      "healthcare UX",
    ],
  });
}

export default async function HomePage({ searchParams }: PageProps) {
  const cookieStore = await cookies();
  const intentState = await resolveUkrExperience({
    searchParams,
    cookieCode: cookieStore.get(UKR_COOKIE_NAME)?.value ?? null,
  });
  const activeIntent = intentState.activeIntent;
  const fitTarget = activeIntent ? getIntentRoleSummary(activeIntent) : null;
  const featuredPosts = homeFeaturedWritingSlugs.flatMap((slug) => {
    const post = blogPosts.find((item) => item.slug === slug);
    return post ? [post] : [];
  }).slice(0, 3);
  const homeAiContext = [
    `Profile: ${homeHero.name}`,
    `Headline: ${homeHero.headline}`,
    `Positioning: ${homeHero.subheadline}`,
    `Credibility: ${homeHero.credibilityLine}`,
    `Why hire themes: ${homeWhyUdit.map((item) => item.title).join(" | ")}`,
    `AI leadership themes: ${homeAILeadership.focusAreas.join(" | ")}`,
    activeIntent ? buildUkrIntentAiContext(activeIntent) : "",
  ].join("\n");
  const homeAiHeading = activeIntent
    ? `Check if I am fit for ${fitTarget}`
    : "Check if I am fit for a particular role";
  const homeAiDescription = activeIntent
    ? `Ask for a quick summary tailored to ${fitTarget}${activeIntent.intentType ? ` and this ${activeIntent.intentType} conversation` : ""}. Get an unbiased and informed opinion.`
    : "Ask for a quick summary tailored to the role you are hiring for. Get an unbiased and informed opinion.";
  const homeAiSuggestions = activeIntent
    ? [
        `Check fit for ${fitTarget}`,
        `Which case studies matter most for ${activeIntent.org}?`,
        `What gaps would a hiring team for ${fitTarget} question?`,
      ]
    : [
        "Summarize Udit's leadership fit in 5 bullets",
        "What roles is this profile best suited for?",
        "What makes this relevant for AI transformation?",
      ];

  return (
    <PageLayout>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <ExecutiveHero hero={homeHero} />

      {activeIntent ? (
        <SectionShell className="pt-0">
          <IntentAudienceBanner intentLink={activeIntent} />
        </SectionShell>
      ) : null}

      <SectionShell className="blue-section-wash pt-10 md:pt-12">
        <AIWorkspaceBanner
          eyebrow="AI Briefing"
          title={homeAiHeading}
          description={homeAiDescription}
        >
          <AIWorkspace
            compact
            page="home"
            context={homeAiContext}
            suggestions={homeAiSuggestions}
            tone="banner"
          />
        </AIWorkspaceBanner>
      </SectionShell>

      <SectionShell className="border-b border-border/50 py-10 md:py-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trustIndicators.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-card px-4 py-5 transition-colors hover:border-primary/25"
            >
              <p className="text-3xl font-semibold tracking-tight text-foreground">
                {item.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="why-udit">
        <SectionLabel>Why me</SectionLabel>
        <SectionHeading>
          Three concrete reasons to consider me
        </SectionHeading>
        <SectionDescription>
          Senior-level design leadership, enterprise platform experience, and
          technical fluency across complex product work.
        </SectionDescription>
        <div className="mt-8">
          <SignalCardGrid items={homeWhyUdit} iconSet="value" iconTreatment="background" />
        </div>
      </SectionShell>

      <SectionShell
        id="ai-leadership"
        className="blue-section-wash border-y border-border/50"
      >
        <SectionLabel>AI Leadership</SectionLabel>
        <SectionHeading>
          AI-first product thinking grounded in workflows and operating reality
        </SectionHeading>
        <SectionDescription>
          For me, AI work is less about novelty and more about decision support,
          orchestration, trust, and how product organizations operate.
        </SectionDescription>
        <div className="mt-10 flex justify-center">
          <AILeadershipSection
            intro={homeAILeadership.intro}
            focusAreas={homeAILeadership.focusAreas}
            pillars={homeAILeadershipPillars}
          />
        </div>
      </SectionShell>

      <SectionShell id="case-studies">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <SectionHeading>Case studies with business and leadership context</SectionHeading>
            <SectionDescription>
              These previews cover problem context, leadership contribution, and
              business or workflow outcomes in enterprise environments.
            </SectionDescription>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            View full portfolio <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8">
          <FeaturedCaseStudies previews={homeFeaturedCaseStudies} projects={projects} />
        </div>
        <div className="mt-6 flex justify-end">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            View full portfolio <ArrowRight size={14} />
          </Link>
        </div>
      </SectionShell>

      <SectionShell id="career-proof" className="border-y border-border/50">
        <SectionLabel>Career Context</SectionLabel>
        <SectionHeading>Progression across leadership, platforms, and engineering roots</SectionHeading>
        <SectionDescription>
          My path combines senior-level leadership at athenahealth, earlier roles
          across Adobe, Cisco, Kaseya, and Zivame, and a foundation in software
          engineering.
        </SectionDescription>
        <div className="mt-8">
          <SignalCardGrid items={homeExecutiveProof} iconSet="proof" iconTreatment="none" />
        </div>
        <div className="mt-8">
          <ImpactStats />
        </div>
        <div className="mt-8">
          <ExperienceTimeline />
        </div>
      </SectionShell>

      <SectionShell id="leadership-model">
        <SectionLabel>Leadership</SectionLabel>
        <SectionHeading>How I lead design in complex product environments</SectionHeading>
        <SectionDescription>
          I focus on clarifying direction, aligning teams, growing designers, and
          building systems that sustain quality as organizations scale.
        </SectionDescription>
        <div className="mt-8">
          <SignalCardGrid items={homeLeadershipModel} iconSet="leadership" />
        </div>
      </SectionShell>

      <SectionShell className="blue-section-wash">
        <SectionLabel>Partner Feedback</SectionLabel>
        <SectionHeading>How collaborators describe working with me</SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {homeTestimonials.map((item) => (
            <TestimonialCard
              key={item.author}
              quote={item.quote}
              author={item.author}
              role={item.role}
              photoSrc={item.image}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="thinking">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>{homeWritingSection.label}</SectionLabel>
            <SectionHeading>{homeWritingSection.heading}</SectionHeading>
            <SectionDescription>{homeWritingSection.description}</SectionDescription>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            View all writing <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8">
          <BlogGrid posts={featuredPosts} />
        </div>
      </SectionShell>

      <SectionShell>
        <CallToAction
          eyebrow={homeCallToAction.eyebrow}
          title={homeCallToAction.title}
          description={homeCallToAction.description}
          primaryLabel={homeCallToAction.primaryLabel}
          primaryHref={homeCallToAction.primaryHref}
          secondaryLabel={homeCallToAction.secondaryLabel}
          secondaryHref={homeCallToAction.secondaryHref}
          tertiaryLabel={homeCallToAction.tertiaryLabel}
          tertiaryHref={homeCallToAction.tertiaryHref}
        />
      </SectionShell>
    </PageLayout>
  );
}
