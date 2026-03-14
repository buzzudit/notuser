"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { StatusIndicator } from "@/components/site/StatusIndicator";
import {
  SectionShell,
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/site/SectionShell";
import { ContentCard } from "@/components/site/ContentCard";
import {
  blogPosts,
  heroContent,
  portfolioItems,
  trustIndicators,
} from "@/lib/site/content";

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
            {heroContent.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {heroContent.subheadline}
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
          <Link
            href="/portfolio"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <ContentCard key={item.id}>
              <div className="mb-3 h-32 rounded-md bg-secondary" />
              <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                {item.category}
              </p>
              <h3 className="mb-1 text-sm font-medium text-foreground">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <SectionLabel>Blog</SectionLabel>
            <SectionHeading>Latest thinking</SectionHeading>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <ContentCard key={post.id}>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-primary">
                {post.category}
              </p>
              <h3 className="mb-1 text-sm font-medium text-foreground">
                {post.title}
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {post.date} - {post.readTime}
              </p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="text-center">
        <SectionLabel>Ready?</SectionLabel>
        <SectionHeading>Let&apos;s build something together</SectionHeading>
        <SectionDescription>
          Start with a conversation and we can map the right path quickly.
        </SectionDescription>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
          <Link
            href="/circle"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Join the Circle
          </Link>
        </div>
      </SectionShell>
    </PageLayout>
  );
}
