import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { AILeadershipSection } from "@/components/site/home/AILeadershipSection";
import { ExecutiveHero } from "@/components/site/home/ExecutiveHero";
import { FeaturedCaseStudies } from "@/components/site/home/FeaturedCaseStudies";
import { SignalCardGrid } from "@/components/site/home/SignalCardGrid";
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

export default function HomePage() {
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
  ].join("\n");

  return (
    <PageLayout>
      <ExecutiveHero hero={homeHero} />

      <SectionShell className="pt-0 bg-gradient-to-b from-[rgba(166,198,234,0.25)] via-[rgba(229,239,251,0.6)] to-transparent">
        <div className="flex justify-center">
          <section className="w-full max-w-4xl rounded-2xl border border-border bg-card p-5 md:p-6">
            <SectionLabel>AI Briefing</SectionLabel>
            <SectionHeading>Check if I am fit for a particular role</SectionHeading>
            <SectionDescription>
              Ask for a quick summary tailored to the role you are hiring for. Get an unbiased and informed opinion.
            </SectionDescription>
            <AIWorkspace
              compact
              className="mt-5"
              page="home"
              context={homeAiContext}
              suggestions={[
                "Summarize Udit's leadership fit in 5 bullets",
                "What roles is this profile best suited for?",
                "What makes this relevant for AI transformation?",
              ]}
            />
          </section>
        </div>
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
        <SectionLabel>Why Udit</SectionLabel>
        <SectionHeading>
          Where I tend to add value in senior design and transformation roles
        </SectionHeading>
        <SectionDescription>
          I am most effective where leadership, systems thinking, product quality,
          and organizational change need to move in the same direction.
        </SectionDescription>
        <div className="mt-8">
          <SignalCardGrid items={homeWhyUdit} iconSet="value" iconTreatment="background" />
        </div>
      </SectionShell>

      <SectionShell
        id="ai-leadership"
        className="border-y border-border/50 bg-gradient-to-b from-[rgba(166,198,234,0.35)] via-[rgba(229,239,251,0.65)] to-transparent"
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
              These previews focus on problem context, the leadership I brought,
              and why the work mattered in enterprise environments.
            </SectionDescription>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View full portfolio <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8">
          <FeaturedCaseStudies previews={homeFeaturedCaseStudies} projects={projects} />
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

      <SectionShell id="career-proof" className="border-y border-border/50">
        <SectionLabel>Career Context</SectionLabel>
        <SectionHeading>Progression across leadership, platforms, and engineering roots</SectionHeading>
        <SectionDescription>
          The progression matters: director-level leadership at athenahealth,
          supported by earlier work across Adobe, Cisco, Kaseya, Zivame, and a
          foundation in software engineering.
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

      <SectionShell className="bg-gradient-to-b from-[rgba(166,198,234,0.25)] via-[rgba(229,239,251,0.6)] to-transparent">
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
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all writing <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-8">
          <BlogGrid posts={featuredPosts} />
        </div>
      </SectionShell>

      <SectionShell>
        <section className="rounded-2xl border border-border bg-[hsl(217_65%_73%)] p-6 text-white shadow-[0_10px_40px_rgba(30,64,175,0.35)] md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/80">
            {homeCallToAction.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {homeCallToAction.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90">
            {homeCallToAction.description}
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={homeCallToAction.primaryHref}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-primary transition-opacity hover:bg-white/90"
            >
              {homeCallToAction.primaryLabel} <ArrowRight size={14} />
            </Link>
            <Link
              href={homeCallToAction.tertiaryHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 transition-colors hover:underline hover:text-white/80"
            >
              {homeCallToAction.tertiaryLabel}
            </Link>
          </div>
        </section>
      </SectionShell>
    </PageLayout>
  );
}
