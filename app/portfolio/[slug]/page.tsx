import { notFound, redirect } from "next/navigation";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionShell } from "@/components/site/SectionShell";
import { CaseStudyHero } from "@/components/site/CaseStudyHero";
import { CaseStudySection } from "@/components/site/CaseStudySection";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { ImageGallery } from "@/components/site/ImageGallery";
import { CallToAction } from "@/components/site/CallToAction";
import { getProjectBySlug, projects, resolveProjectSlug } from "@/data/projects";
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AIInsightHighlight } from "@/components/ai/AIInsightHighlight";
import { AIGuidedNavigator } from "@/components/ai/AIGuidedNavigator";
import { AISummaryPanel } from "@/components/ai/AISummaryPanel";
import { AIWorkflowHelper } from "@/components/ai/AIWorkflowHelper";
import { AIInlineActions } from "@/components/ai/AIInlineActions";
import { AIInsightsPanel } from "@/components/ai/AIInsightsPanel";
import { BulletList } from "@/components/site/BulletList";
import { ParagraphStack } from "@/components/site/ParagraphStack";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveProjectSlug(slug);
  if (resolvedSlug !== slug) {
    redirect(`/portfolio/${resolvedSlug}`);
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const guidedSteps = [
    {
      id: "problem",
      label: "Problem",
      description: "What challenge needed solving",
      targetId: "problem",
    },
    {
      id: "context",
      label: "Context",
      description: "Background and constraints",
      targetId: "context",
    },
    {
      id: "role",
      label: "Role",
      description: "Scope and ownership",
      targetId: "role",
    },
    {
      id: "process",
      label: "Process",
      description: "How the solution was created",
      targetId: "process",
    },
    {
      id: "decisions",
      label: "Decisions",
      description: "Critical choices and tradeoffs",
      targetId: "decisions",
    },
    {
      id: "outcome",
      label: "Outcome",
      description: "Results and impact",
      targetId: "outcome",
    },
    {
      id: "lessons",
      label: "Lessons",
      description: "What transferred to future work",
      targetId: "lessons",
    },
  ];

  const workflowActions = [
    {
      label: "Break this case into delivery phases",
      description: "Map strategy, design, and execution into a reusable process.",
      result: project.process,
    },
    {
      label: "Extract reusable principles",
      description: "Pull out lessons that can be applied in new contexts.",
      result: project.lessons.slice(0, 4),
    },
  ];

  const projectInsights = [
    {
      category: "Challenge",
      text: project.challenge,
    },
    {
      category: "Outcome",
      text: project.outcome[0] ?? "Outcome documented in case study.",
    },
    {
      category: "Decision",
      text: project.keyDecisions[0] ?? "Key decisions documented below.",
    },
  ];

  return (
    <PageLayout>
      <SectionShell>
        <CaseStudyHero project={project} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <AISuggestionChips
              suggestions={[
                { label: "Summarize this case" },
                { label: "Extract key insights" },
                { label: "Compare with similar projects" },
                { label: "Generate a reusable playbook" },
              ]}
            />
            <AISummaryPanel
              title="AI case summary"
              summary={project.summary}
              bullets={[
                `Challenge: ${project.challenge}`,
                `Primary outcome: ${project.outcome[0] ?? "Outcome documented in case study."}`,
                `Key lesson: ${project.lessons[0] ?? "See full lessons section."}`,
              ]}
              defaultExpanded
            />
          </div>
          <AIGuidedNavigator steps={guidedSteps} suggestedNext="problem" />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4">
          <CaseStudySection title="Problem" id="problem">
            <ParagraphStack paragraphs={[project.challenge]} />
            <AIInsightHighlight className="mt-4" label="Impact signal">
              {project.outcome[0] ?? "Outcome documented in case study."}
            </AIInsightHighlight>
          </CaseStudySection>

          <CaseStudySection title="Context" id="context">
            <ParagraphStack paragraphs={[project.context]} />
            <AIInlineActions
              className="mt-4"
              result="Context often determines whether an AI feature succeeds. This project balanced stakeholder constraints with reliable workflow outcomes."
            />
          </CaseStudySection>

          <CaseStudySection title="Role" id="role">
            <ParagraphStack paragraphs={[project.role]} />
          </CaseStudySection>

          <CaseStudySection title="Process" id="process">
            <BulletList items={project.process} />
          </CaseStudySection>

          <AIWorkflowHelper actions={workflowActions} />

          <CaseStudySection title="Key Decisions" id="decisions">
            <BulletList items={project.keyDecisions} />
          </CaseStudySection>

          <CaseStudySection title="Outcome" id="outcome">
            <BulletList items={project.outcome} />
          </CaseStudySection>

          <AIInsightsPanel insights={projectInsights} />

          <CaseStudySection title="Lessons" id="lessons">
            <BulletList items={project.lessons} />
          </CaseStudySection>

          {project.gallery.length > 0 ? (
            <CaseStudySection title="Gallery">
              <ImageGallery items={project.gallery} />
            </CaseStudySection>
          ) : null}

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
