"use client";

import { AIWorkspace } from "@/components/site/AIWorkspace";
import { ContentCard } from "@/components/site/ContentCard";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { blogPosts } from "@/lib/site/content";

export default function BlogPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Thinking out loud</SectionHeading>
        <SectionDescription>
          Ideas on AI, product building, and the future of work.
        </SectionDescription>

        <div className="mt-6">
          <AIWorkspace compact />
          <p className="mt-2 text-[11px] text-muted-foreground">
            Ask AI to summarize posts or explore related topics.
          </p>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <ContentCard key={post.id}>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    {post.category}
                  </p>
                  <h3 className="mb-1 text-base font-medium text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  {post.date}
                  <br />
                  {post.readTime}
                </p>
              </div>
            </ContentCard>
          ))}
        </div>
      </SectionShell>
    </PageLayout>
  );
}
