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
import {
  formatBlogDate,
  getBlogDisplayCategory,
  getBlogDisplayTags,
  getBlogExcerpt,
  getFirstBlogBodyText,
  getBlogReadTime,
  getBlogThumbnailSrc,
  getRenderableBlogSections,
} from "@/lib/site/blogFormatting";

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

  const thumbnailSrc = getBlogThumbnailSrc(post.thumbnail);
  const displayDate = formatBlogDate(post.date);
  const displayUpdatedAt = formatBlogDate(post.updatedAt);
  const displayExcerpt = getBlogExcerpt(post, 320);
  const renderableSections = getRenderableBlogSections(post);
  const displayCategory = getBlogDisplayCategory(post);
  const displayTags = getBlogDisplayTags(post);
  const displayReadTime = getBlogReadTime(post.readTime);
  const firstBodyText =
    getFirstBlogBodyText(post) ||
    "This article explores practical AI-first design decisions.";

  return (
    <PageLayout>
      <ReadingProgressBar />
      <SectionShell>
        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            {displayCategory} - {displayDate} - {displayReadTime}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            By {post.author} - Updated {displayUpdatedAt}
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
            {displayExcerpt}
          </p>
          <TagList tags={displayTags} className="mt-4" />

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
            summary={displayExcerpt}
            bullets={renderableSections.map((section) => section.heading)}
            defaultExpanded
          />

          <AIInsightHighlight className="mt-6" label="Smart highlight">
            {firstBodyText}
          </AIInsightHighlight>

          <div className="mt-8 space-y-8">
            {renderableSections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.blocks.map((block, blockIndex) => (
                    block.type === "paragraph" ? (
                      <p key={`${section.heading}-paragraph-${blockIndex}`}>{block.text}</p>
                    ) : (
                      <ul
                        key={`${section.heading}-list-${blockIndex}`}
                        className="space-y-2"
                      >
                        {block.items.map((item, itemIndex) => (
                          <li key={`${section.heading}-item-${itemIndex}`} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
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

          <p className="mt-6 text-sm text-muted-foreground">
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
