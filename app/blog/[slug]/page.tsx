import { notFound } from "next/navigation";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionShell } from "@/components/site/SectionShell";
import { ReadingProgressBar } from "@/components/site/ReadingProgressBar";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { TagList } from "@/components/site/TagList";
import { CallToAction } from "@/components/site/CallToAction";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

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
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <TagList tags={post.tags} className="mt-4" />

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

          {post.quote ? (
            <div className="mt-8">
              <QuoteBlock
                quote={post.quote.text}
                author={post.quote.author}
                role={post.quote.role}
              />
            </div>
          ) : null}
        </article>
      </SectionShell>

      <SectionShell>
        <CallToAction
          title="Want to apply this to your product?"
          description="Let's map these ideas to your current roadmap and team context."
          primaryLabel="Get in touch"
          primaryHref="/contact"
          secondaryLabel="Back to blog"
          secondaryHref="/blog"
        />
      </SectionShell>
    </PageLayout>
  );
}
