import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionShell } from "@/components/site/SectionShell";
import { ReadingProgressBar } from "@/components/site/ReadingProgressBar";
import { TagList } from "@/components/site/TagList";
import { CallToAction } from "@/components/site/CallToAction";
import { blogPosts, getBlogPostBySlug, resolveBlogSlug } from "@/data/blog";
import { AIWorkspace } from "@/components/site/AIWorkspace";
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
  const aiContext = [
    `Article title: ${post.title}`,
    `Category: ${displayCategory}`,
    `Author: ${post.author}`,
    `Excerpt: ${displayExcerpt}`,
    renderableSections.length > 0
      ? `Section headings: ${renderableSections.map((section) => section.heading).join(", ")}`
      : "",
  ]
    .filter(Boolean)
    .join("\n");

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

          <AIWorkspace
            className="mt-6"
            compact
            page="blog-detail"
            context={aiContext}
            helperText="Ask AI to summarize this article, extract takeaways, or map ideas to your context."
            suggestions={[
              "Summarize this article",
              "Extract key takeaways",
              "Find related posts by theme",
              "Suggest one experiment from this article",
            ]}
          />

          <div className="mt-6 rounded-lg border border-border/70 bg-secondary/25 p-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Key excerpt
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{firstBodyText}</p>
          </div>

          <div className="mt-8 space-y-8">
            {renderableSections.map((section) => (
              <section key={section.heading}>
                {!section.hideHeading ? (
                  section.level === 3 ? (
                    <h3 className="text-lg font-medium tracking-tight text-foreground">
                      {section.heading}
                    </h3>
                  ) : (
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      {section.heading}
                    </h2>
                  )
                ) : null}
                {section.blocks.length > 0 ? (
                  <div
                    className={`space-y-4 text-sm leading-relaxed text-muted-foreground ${
                      section.hideHeading ? "" : "mt-4"
                    }`}
                  >
                    {section.blocks.map((block, blockIndex) => {
                      const blockKey = `${section.heading}-block-${blockIndex}`;

                      if (block.type === "paragraph") {
                        const paragraphClassName =
                          block.tone === "lead"
                            ? "text-lg leading-relaxed text-foreground"
                            : block.tone === "emphasis"
                              ? "text-base italic leading-relaxed text-foreground"
                              : undefined;

                        return (
                          <p key={blockKey} className={paragraphClassName}>
                            {block.text}
                          </p>
                        );
                      }

                      if (block.type === "list") {
                        return (
                          <ul key={blockKey} className="space-y-2">
                            {block.items.map((item, itemIndex) => (
                              <li key={`${blockKey}-item-${itemIndex}`} className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (block.type === "figure") {
                        return (
                          <figure
                            key={blockKey}
                            className="overflow-hidden rounded-xl border border-border/70 bg-secondary/30"
                          >
                            <div
                              className="relative"
                              style={{ aspectRatio: block.aspectRatio ?? "16 / 9" }}
                            >
                              <Image
                                src={resolveMirroredMediaSrc(block.src)}
                                alt={block.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 860px"
                              />
                            </div>
                            {block.caption ? (
                              <figcaption className="border-t border-border/70 px-4 py-3 text-sm text-muted-foreground">
                                {block.caption}
                              </figcaption>
                            ) : null}
                          </figure>
                        );
                      }

                      if (block.type === "quote") {
                        return (
                          <blockquote
                            key={blockKey}
                            className="rounded-xl border border-border/70 bg-secondary/35 px-4 py-4 text-base leading-relaxed text-foreground"
                          >
                            {block.text}
                          </blockquote>
                        );
                      }

                      if (block.type === "people") {
                        return (
                          <ul
                            key={blockKey}
                            className="grid gap-3 sm:grid-cols-2"
                            aria-label="People featured in this article"
                          >
                            {block.people.map((person) => (
                              <li
                                key={`${blockKey}-${person.name}`}
                                className="flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/30 p-4"
                              >
                                <Image
                                  src={resolveMirroredMediaSrc(person.imageSrc)}
                                  alt={person.name}
                                  width={56}
                                  height={56}
                                  className="h-14 w-14 rounded-full object-cover"
                                />
                                <div>
                                  <p className="text-sm font-semibold text-foreground">{person.name}</p>
                                  <p className="text-sm text-muted-foreground">{person.role}</p>
                                  <p className="text-sm text-muted-foreground">{person.organization}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <hr key={blockKey} className="border-border/70" />
                      );
                    })}
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-8 space-y-2">
            {[
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
            ].map((prompt) => (
              <div key={prompt.question} className="rounded-lg border border-border bg-card px-4 py-3">
                <p className="text-sm text-foreground">{prompt.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prompt.context}
                </p>
              </div>
            ))}
          </div>

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
