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
  homeWritingSection,} from "@/data/site";
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
    `AI leadership themes: ${homeAILeadershipPillars.map((item) => item.title).join(" | ")}`,
    activeIntent ? buildUkrIntentAiContext(activeIntent) : "",
  ].join("\n");
  const homeAiHeading = activeIntent
    ? `Check Udit's fit for ${fitTarget}`
    : "Check Udit's fit for a role";
  const homeAiDescription = activeIntent
    ? `Get a role-specific read on strengths, relevant work, and likely questions for ${fitTarget}${activeIntent.intentType ? ` in this ${activeIntent.intentType} conversation` : ""}.`
    : "Get a role-specific read on strengths, relevant work, and likely questions for the role you are hiring for.";
  const homeAiSuggestions = activeIntent
    ? [
        `Check fit for ${fitTarget}`,
        `Which case studies matter most for ${activeIntent.org}?`,
        `What gaps would a hiring team for ${fitTarget} question?`,
      ]
    : [
        "Summarize Udit's leadership fit",
        "Which roles does this profile fit best?",
        "What is relevant for AI transformation?",
      ];

  return (
    <PageLayout>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <ExecutiveHero hero={homeHero} />

      {activeIntent ? (
        <SectionShell flushTop>
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

      <SectionShell id="why-udit">
        <SectionLabel>Why me</SectionLabel>
        <SectionHeading>What I bring</SectionHeading>
        <SectionDescription>
          I have led design in healthcare at scale, worked deep in enterprise
          platforms, and started out writing code.
        </SectionDescription>
        <div className="mt-8">
          <SignalCardGrid items={homeWhyUdit} iconSet="value" iconTreatment="background" />
        </div>
      </SectionShell>

      <SectionShell
        id="ai-leadership"
        className="relative overflow-hidden blue-section-wash border-y border-border/50"
        backdrop={
          <div aria-hidden="true" className="section-shape-field">
            <span className="section-shape section-shape-a" />
            <span className="section-shape section-shape-b" />
          </div>
        }
        >
        <AILeadershipSection
          label="AI Leadership"
          heading="I build AI products that hold up in real workflows"
          intro={homeAILeadership.intro}
          ctaLabel={homeAILeadership.ctaLabel}
          ctaHref={homeAILeadership.ctaHref}
          pillars={homeAILeadershipPillars}
        />
      </SectionShell>

      <SectionShell id="case-studies">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Best Work</SectionLabel>
            <SectionHeading>The work I would want you to judge me on</SectionHeading>
            <SectionDescription>
              The hardest problems I have been handed, and what I decided.
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
        <SectionLabel>Experience</SectionLabel>
        <SectionHeading>From engineering roots to design leadership</SectionHeading>
        <SectionDescription>
          I started in software engineering and moved into design leadership,
          across athenahealth, Zivame, Kaseya, Cisco, and Adobe.
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
        <SectionHeading>How I lead</SectionHeading>
        <div className="mt-8">
          <SignalCardGrid items={homeLeadershipModel} iconSet="leadership" />
        </div>
      </SectionShell>

      <SectionShell className="blue-section-wash">
        <SectionLabel>Testimonials</SectionLabel>
        <SectionHeading>What the people I worked with say</SectionHeading>
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
