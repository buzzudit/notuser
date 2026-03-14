"use client";

import { motion } from "framer-motion";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { StatusIndicator } from "@/components/site/StatusIndicator";
import {
  SectionShell,
  SectionHeading,
  SectionLabel,
} from "@/components/site/SectionShell";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { AIWorkflowCards } from "@/components/site/AIWorkflowCards";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { BlogGrid } from "@/components/site/BlogGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { ImpactStats } from "@/components/site/ImpactStats";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import {
  aiWorkflowSteps,
  designFeatures,
  homeHero,
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
            className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
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
        </div>
        <ProjectGrid projects={projects.slice(0, 3)} />
      </SectionShell>

      <SectionShell>
        <SectionLabel>What I Design</SectionLabel>
        <SectionHeading>AI-native product systems with operational depth</SectionHeading>
        <FeatureGrid features={designFeatures} />
      </SectionShell>

      <SectionShell>
        <SectionLabel>AI-First Approach</SectionLabel>
        <SectionHeading>From strategy to reliable execution</SectionHeading>
        <AIWorkflowCards steps={aiWorkflowSteps} />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Career Highlights</SectionLabel>
        <SectionHeading>Design leadership across product and platform teams</SectionHeading>
        <ImpactStats />
        <div className="mt-8">
          <ExperienceTimeline />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Writing</SectionLabel>
        <SectionHeading>Recent thoughts on AI, product, and execution</SectionHeading>
        <BlogGrid posts={blogPosts.slice(0, 2)} />
      </SectionShell>

      <SectionShell>
        <CallToAction
          title="Let's build your next AI-first experience"
          description="I partner with teams that need clarity, speed, and quality in AI product execution."
          primaryLabel="Start a project"
          primaryHref="/contact"
          secondaryLabel="See the circle"
          secondaryHref="/circle"
        />
      </SectionShell>
    </PageLayout>
  );
}
