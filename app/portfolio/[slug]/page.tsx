import { notFound, redirect } from "next/navigation";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionShell } from "@/components/site/SectionShell";
import { CaseStudyHero } from "@/components/site/CaseStudyHero";
import { CaseStudySection } from "@/components/site/CaseStudySection";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { ImageGallery } from "@/components/site/ImageGallery";
import { CallToAction } from "@/components/site/CallToAction";
import { getProjectBySlug, projects, resolveProjectSlug } from "@/data/projects";
import { BulletList } from "@/components/site/BulletList";
import { ParagraphStack } from "@/components/site/ParagraphStack";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import type { ProjectNarrative } from "@/data/types/project";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function NarrativeLayout({ narrative }: { narrative: ProjectNarrative }) {
  return (
    <div className="space-y-0">
      {/* Hook — cinematic opener */}
      <div className="border-b border-border/50 py-10 text-center">
        <p className="mx-auto max-w-2xl text-xl font-medium italic leading-relaxed text-foreground md:text-2xl">
          &ldquo;{narrative.hook}&rdquo;
        </p>
      </div>

      {/* Acts */}
      {narrative.acts.map((act) => (
        <section key={act.id} id={act.id} className="border-b border-border/50 py-10">
          <div className="space-y-6">
            {/* Chapter label */}
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              {act.chapter}
            </p>

            {/* Chapter title */}
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {act.title}
            </h2>

            {/* Prose */}
            <div className="space-y-4">
              {act.prose.map((para, i) => (
                <p
                  key={i}
                  className={
                    para === "Then nothing."
                      ? "text-lg font-medium text-foreground"
                      : "text-base leading-[1.8] text-muted-foreground"
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Decision options (Path A vs Path B cards) */}
            {act.options && act.options.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {act.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border p-5 ${
                      i === 0
                        ? "border-primary/40 bg-primary/5"
                        : "border-border bg-secondary/20"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {i === 0 && (
                        <span className="mt-0.5 shrink-0 rounded-full bg-primary px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-primary-foreground">
                          Chosen
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-foreground">{opt.label}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                      {opt.detail}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Callout */}
            {act.callout ? (
              <div className="rounded-xl border-l-2 border-l-primary/60 bg-secondary/20 py-4 pl-5 pr-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {act.callout.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {act.callout.text}
                </p>
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {/* Pivot — visually distinct */}
      <section id="pivot" className="border-b border-border/50 py-10">
        <div className="space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            {narrative.pivot.chapter}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {narrative.pivot.title}
          </h2>
          <div className="space-y-4">
            {narrative.pivot.prose.map((para, i) => (
              <p key={i} className="text-base leading-[1.8] text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
          {narrative.pivot.callout ? (
            <div className="rounded-xl border-l-2 border-l-primary/60 bg-secondary/20 py-4 pl-5 pr-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {narrative.pivot.callout.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {narrative.pivot.callout.text}
              </p>
            </div>
          ) : null}
        </div>
      </section>

      {/* Resolution */}
      <section id="resolution" className="py-10">
        <div className="space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Resolution
          </p>
          <div className="space-y-4">
            {narrative.resolution.prose.map((para, i) => (
              <p key={i} className="text-base leading-[1.8] text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
          {/* Highlight — the "so what" pull quote */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-6 text-center">
            <p className="text-lg font-medium italic leading-relaxed text-foreground md:text-xl">
              &ldquo;{narrative.resolution.highlight}&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
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

  const navItems = project.narrative
    ? [
        ...project.narrative.acts.map((act) => ({
          id: act.id,
          label: act.chapter.split(" · ")[0],
          description: act.title,
        })),
        { id: "pivot", label: "Pivot", description: project.narrative.pivot.title },
        { id: "resolution", label: "Resolution", description: "Outcomes and impact" },
        { id: "lessons", label: "Lessons", description: "What carried forward" },
      ]
    : [
        { id: "problem", label: "Problem", description: "What challenge needed solving" },
        { id: "context", label: "Context", description: "Background and constraints" },
        { id: "role", label: "Role", description: "Scope and ownership" },
        { id: "process", label: "Process", description: "How the solution was created" },
        { id: "decisions", label: "Decisions", description: "Critical choices and tradeoffs" },
        { id: "outcome", label: "Outcome", description: "Results and impact" },
        { id: "lessons", label: "Lessons", description: "What transferred to future work" },
      ];

  const aiContext = [
    `Project title: ${project.title}`,
    `Summary: ${project.summary}`,
    `Challenge: ${project.challenge}`,
    `Context: ${project.context}`,
    `Role: ${project.role}`,
    `Process highlights: ${project.process.join(" | ")}`,
    `Key decisions: ${project.keyDecisions.join(" | ")}`,
    `Outcomes: ${project.outcome.join(" | ")}`,
    `Lessons: ${project.lessons.join(" | ")}`,
  ].join("\n");

  return (
    <PageLayout>
      <SectionShell>
        <CaseStudyHero project={project} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <AIWorkspace
            compact
            page="portfolio-detail"
            context={aiContext}
            helperText="Ask AI to summarize the case, extract leadership signals, or compare this work to other projects."
            suggestions={[
              "Summarize this case study",
              "Extract leadership and strategy signals",
              "Compare this with enterprise platform projects",
              "Generate a reusable playbook from this case",
            ]}
          />
          <nav className="rounded-lg border border-border bg-card p-4" aria-label="Case study sections">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary">
              {project.narrative ? "Story arc" : "Section guide"}
            </p>
            <div className="space-y-1">
              {navItems.map((step) => (
                <a
                  key={step.id}
                  href={`#${step.id}`}
                  className="block rounded-md px-3 py-2 transition-colors hover:bg-secondary"
                >
                  <p className="text-xs font-medium text-foreground">{step.label}</p>
                  <p className="text-[11px] text-muted-foreground">{step.description}</p>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        {project.narrative ? (
          <div className="rounded-2xl border border-border bg-card px-6 md:px-10">
            <NarrativeLayout narrative={project.narrative} />

            {/* Lessons — pull-quote style after the narrative */}
            <section id="lessons" className="border-t border-border/50 py-10">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-primary">
                Lessons carried forward
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.lessons.map((lesson, i) => (
                  <div key={i} className="rounded-xl border border-border/60 bg-secondary/10 p-5">
                    <p className="text-sm leading-relaxed text-foreground">{lesson}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="grid gap-4">
            <CaseStudySection title="Problem" id="problem">
              <ParagraphStack paragraphs={[project.challenge]} />
              <div className="mt-4 rounded-lg border border-border/70 bg-secondary/25 p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  Impact signal
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {project.outcome[0] ?? "Outcome documented in case study."}
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection title="Context" id="context">
              <ParagraphStack paragraphs={[project.context]} />
            </CaseStudySection>

            <CaseStudySection title="Role" id="role">
              <ParagraphStack paragraphs={[project.role]} />
            </CaseStudySection>

            <CaseStudySection title="Process" id="process">
              <BulletList items={project.process} />
            </CaseStudySection>

            <CaseStudySection title="Key Decisions" id="decisions">
              <BulletList items={project.keyDecisions} />
            </CaseStudySection>

            <CaseStudySection title="Outcome" id="outcome">
              <BulletList items={project.outcome} />
            </CaseStudySection>

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
        )}
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
