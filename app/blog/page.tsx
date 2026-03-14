"use client";

import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { BlogGrid } from "@/components/site/BlogGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Blog</SectionLabel>
        <SectionHeading>Writing on AI product and execution</SectionHeading>
        <SectionDescription>
          Four recent posts on designing reliable AI workflows, operating systems,
          and building high-signal product narratives.
        </SectionDescription>
      </SectionShell>

      <SectionShell>
        <BlogGrid posts={blogPosts} />
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
