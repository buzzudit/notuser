import { notFound } from "next/navigation";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionShell } from "@/components/site/SectionShell";
import { CaseStudyHero } from "@/components/site/CaseStudyHero";
import { CaseStudySection } from "@/components/site/CaseStudySection";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { ImageGallery } from "@/components/site/ImageGallery";
import { CallToAction } from "@/components/site/CallToAction";
import { getProjectBySlug, projects } from "@/data/projects";
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AIInsightHighlight } from "@/components/ai/AIInsightHighlight";
import { AIGuidedNavigator } from "@/components/ai/AIGuidedNavigator";
import { AISummaryPanel } from "@/components/ai/AISummaryPanel";
import { AIWorkflowHelper } from "@/components/ai/AIWorkflowHelper";
import { AIInlineActions } from "@/components/ai/AIInlineActions";

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
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <AISummaryPanel
            title="AI case summary"
            summary={project.summary}
            bullets={[
              `Challenge: ${project.challenge}`,
              `Primary outcome: ${project.outcome[0] ?? "Outcome documented in case study."}`,
              `Key lesson: ${project.lessons[0] ?? "See full lessons section."}`,
            ]}
          />
          <div className="space-y-4">
            <AIGuidedNavigator
              title="Guided case map"
              items={[
                { label: "Problem", href: "#problem" },
                { label: "Context", href: "#context" },
                { label: "Role", href: "#role" },
                { label: "Process", href: "#process" },
                { label: "Decisions", href: "#decisions" },
                { label: "Outcome", href: "#outcome" },
                { label: "Lessons", href: "#lessons" },
              ]}
            />
            <AISuggestionChips
              title="Contextual suggestions"
              suggestions={[
                "Summarize the core tradeoff",
                "Extract a reusable workflow pattern",
                "Highlight implementation risk",
                "Convert this into a 30-60-90 plan",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4">
          <CaseStudySection title="Problem" id="problem">
            <p>{project.challenge}</p>
          </CaseStudySection>
          <CaseStudySection title="Context" id="context">
            <p>{project.context}</p>
          </CaseStudySection>
          <CaseStudySection title="Role" id="role">
            <p>{project.role}</p>
          </CaseStudySection>
          <AIWorkflowHelper
            stage="Case study process interpretation"
            inputs={[
              "Business objective and user constraints",
              "Cross-functional execution context",
              "Observed workflow bottlenecks",
            ]}
            output="A concise process narrative that links strategic choices to measurable outcomes."
          />
          <CaseStudySection title="Process" id="process">
            <ul className="space-y-1.5">
              {project.process.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {step}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <AIInsightHighlight
            title="Smart highlight"
            insight={project.keyDecisions[0] ?? "Key decisions documented below."}
            context="This decision had outsized impact on adoption velocity and trust calibration."
          />
          <CaseStudySection title="Key Decisions" id="decisions">
            <ul className="space-y-1.5">
              {project.keyDecisions.map((decision) => (
                <li key={decision} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {decision}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Outcome" id="outcome">
            <ul className="space-y-1.5">
              {project.outcome.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Lessons" id="lessons">
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

      <SectionShell className="pt-0">
        <AIInlineActions
          title="Inline micro-actions"
          actions={[
            { label: "Ask for similar case", href: "/contact" },
            { label: "Compare with other projects", href: "/portfolio" },
            { label: "Read related thinking", href: "/blog" },
          ]}
        />
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
