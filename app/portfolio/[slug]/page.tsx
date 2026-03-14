import { notFound } from "next/navigation";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionShell } from "@/components/site/SectionShell";
import { CaseStudyHero } from "@/components/site/CaseStudyHero";
import { CaseStudySection } from "@/components/site/CaseStudySection";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { ImageGallery } from "@/components/site/ImageGallery";
import { CallToAction } from "@/components/site/CallToAction";
import { getProjectBySlug, projects } from "@/data/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <SectionShell>
        <CaseStudyHero project={project} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4">
          <CaseStudySection title="Problem">
            <p>{project.challenge}</p>
          </CaseStudySection>
          <CaseStudySection title="Context">
            <p>{project.context}</p>
          </CaseStudySection>
          <CaseStudySection title="Role">
            <p>{project.role}</p>
          </CaseStudySection>
          <CaseStudySection title="Process">
            <ul className="space-y-1.5">
              {project.process.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {step}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Key Decisions">
            <ul className="space-y-1.5">
              {project.keyDecisions.map((decision) => (
                <li key={decision} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {decision}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Outcome">
            <ul className="space-y-1.5">
              {project.outcome.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Lessons">
            <ul className="space-y-1.5">
              {project.lessons.map((lesson) => (
                <li key={lesson} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {lesson}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Gallery">
            <ImageGallery items={project.gallery} />
          </CaseStudySection>
          {project.testimonial ? (
            <QuoteBlock
              quote={project.testimonial.quote}
              author={project.testimonial.author}
              role={project.testimonial.role}
            />
          ) : null}
        </div>
      </SectionShell>

      <SectionShell>
        <CallToAction
          title="Want this outcome in your product?"
          description="Let's design the next workflow your team can trust in production."
          primaryLabel="Start a conversation"
          primaryHref="/contact"
          secondaryLabel="Back to portfolio"
          secondaryHref="/portfolio"
        />
      </SectionShell>
    </PageLayout>
  );
}
