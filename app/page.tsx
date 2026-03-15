"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { StatusIndicator } from "@/components/site/StatusIndicator";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { AIWorkflowCards } from "@/components/site/AIWorkflowCards";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { BlogGrid } from "@/components/site/BlogGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { ImpactStats } from "@/components/site/ImpactStats";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import {
  aiWorkflowSteps,
  designFeatures,
  homeHero,
  homeTestimonials,
  trustIndicators,
} from "@/data/site";

export default function HomePage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="container flex flex-col items-center py-24 text-center md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <StatusIndicator />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 whitespace-pre-line text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {homeHero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {homeHero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-xl"
          >
            <AIWorkspace />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View resume <ArrowRight size={14} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Browse portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      <SectionShell className="border-y border-border/50 py-10 md:py-10">
        <div className="grid grid-cols-3 gap-8 text-center">
          {trustIndicators.map((item) => (
            <div key={item.label}>
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                {item.metric}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <SectionHeading>Selected work</SectionHeading>
          </div>
          <Link
            href="/portfolio"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <ProjectGrid projects={projects.slice(0, 4)} />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Leadership</SectionLabel>
        <SectionHeading>How I lead, operate, and deliver</SectionHeading>
        <SectionDescription>
          My operating model combines team leadership, cross-functional alignment,
          and design quality discipline to consistently ship high-impact products.
        </SectionDescription>
        <div className="mt-8">
          <FeatureGrid features={designFeatures} />
        </div>
      </SectionShell>

      <SectionShell className="border-y border-border/50">
        <SectionLabel>Operating Model</SectionLabel>
        <SectionHeading>How I run design organizations</SectionHeading>
        <SectionDescription>
          I balance strategic direction with tactical execution to help teams move
          faster without compromising product quality.
        </SectionDescription>
        <div className="mt-8">
          <AIWorkflowCards steps={aiWorkflowSteps} />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Impact</SectionLabel>
        <SectionHeading>Career highlights</SectionHeading>
        <ImpactStats />
        <div className="mt-8">
          <ExperienceTimeline />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>What partners say</SectionLabel>
        <SectionHeading>Leadership and execution feedback</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {homeTestimonials.map((item) => (
            <TestimonialCard
              key={item.author}
              quote={item.quote}
              author={item.author}
              role={item.role}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <SectionLabel>Writing</SectionLabel>
            <SectionHeading>Latest thinking</SectionHeading>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <BlogGrid posts={blogPosts.slice(0, 3)} />
      </SectionShell>

      <SectionShell>
        <CallToAction
          title="Hiring for a design leadership role?"
          description="If you are a hiring manager or recruiter, I would be glad to share role fit, leadership examples, and portfolio depth."
          primaryLabel="View full resume"
          primaryHref="/resume"
          secondaryLabel="Contact Udit"
          secondaryHref="/contact"
        />
      </SectionShell>
    </PageLayout>
  );
}
