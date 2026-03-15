import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionShell } from "@/components/site/SectionShell";
import { ReadingProgressBar } from "@/components/site/ReadingProgressBar";
import { TagList } from "@/components/site/TagList";
import { CallToAction } from "@/components/site/CallToAction";
import { blogPosts, getBlogPostBySlug, resolveBlogSlug } from "@/data/blog";
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AISummaryPanel } from "@/components/ai/AISummaryPanel";
import { AIThinkingPrompts } from "@/components/ai/AIThinkingPrompts";
import { AIInsightHighlight } from "@/components/ai/AIInsightHighlight";
import { AIInlineActions } from "@/components/ai/AIInlineActions";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveBlogSlug(slug);
  if (resolvedSlug !== slug) {
    redirect(`/blog/${resolvedSlug}`);
  }

  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const thumbnailSrc = resolveMirroredMediaSrc(post.thumbnail);

  return (
    <PageLayout>
      <ReadingProgressBar />
      <SectionShell>
        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
            {post.category} - {post.date} - {post.readTime}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">
            By {post.author} - Updated {post.updatedAt}
          </p>

          <div className="relative mt-4 h-[220px] overflow-hidden rounded-lg border border-border/70 bg-secondary/40 md:h-[420px]">
            <Image
              src={thumbnailSrc}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
            />
          </div>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <TagList tags={post.tags} className="mt-4" />

          <AISuggestionChips
            className="mt-6"
            suggestions={[
              { label: "Summarize this article" },
              { label: "Extract key takeaways" },
              { label: "Find related posts" },
            ]}
          />

          <AISummaryPanel
            className="mt-6"
            summary={post.excerpt}
            bullets={post.sections.map((section) => section.heading)}
            defaultExpanded
          />

          <AIInsightHighlight className="mt-6" label="Smart highlight">
            {post.sections[0]?.paragraphs[0] ??
              "This article explores practical AI-first design decisions."}
          </AIInsightHighlight>

          <div className="mt-8 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <AIInlineActions
            className="mt-8"
            result="This post can be converted into a concrete weekly experiment with clear owners, quality checks, and a measurable outcome."
          />

          <AIThinkingPrompts
            className="mt-8"
            prompts={[
              {
                question: "What assumption in this article fails in my context?",
                context:
                  "Look for organizational constraints, data limitations, or trust requirements that change execution.",
              },
              {
                question: "Which idea can be tested in the next 7 days?",
                context:
                  "Pick the smallest test with a measurable outcome and explicit owner.",
              },
              {
                question: "Where does this strategy need human oversight?",
                context:
                  "Identify decisions that require judgment, policy interpretation, or stakeholder alignment.",
              },
            ]}
          />

          <p className="mt-6 text-xs text-muted-foreground">
            Source:&nbsp;
            <Link
              href={post.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline"
            >
              Original post on notuser.com
            </Link>
          </p>
        </article>
      </SectionShell>

      <SectionShell>
        <CallToAction
          title="Want to apply this to your product?"
          description="Let's map these ideas to your roadmap and team context."
          primaryLabel="Get in touch"
          primaryHref="/contact"
          secondaryLabel="Back to blog"
          secondaryHref="/blog"
        />
      </SectionShell>
    </PageLayout>
  );
}
