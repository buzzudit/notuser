import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
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
import { AIWorkspaceBanner } from "@/components/site/AIWorkspaceBanner";
import { ProjectPeopleStrip } from "@/components/site/people/ProjectPeopleStrip";
import { getPeopleForProject } from "@/data/people";
import type { Project } from "@/data/types/project";
import {
  buildNoIndexMetadata,
  buildSiteMetadata,
  getCreativeWorkJsonLd,
  safeJsonLd,
} from "@/lib/site/metadata";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProjectShareImage(project: Project) {
  const galleryImage = project.gallery.find((item) => item.src)?.src;
  const image = project.thumbnail || galleryImage || null;
  return image ? resolveMirroredMediaSrc(image) : null;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = resolveProjectSlug(slug);
  const project = getProjectBySlug(resolvedSlug);
  if (!project) {
    notFound();
  }

  const metadataInput = {
    title: project.title,
    description: project.summary,
    pathname: `/portfolio/${resolvedSlug}`,
    image: getProjectShareImage(project),
    imageAlt: project.title,
    keywords: project.tags,
  };

  return project.isPrivate
    ? buildNoIndexMetadata(metadataInput)
    : buildSiteMetadata(metadataInput);
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const resolvedSlug = resolveProjectSlug(slug);
  if (resolvedSlug !== slug) {
    permanentRedirect(`/portfolio/${resolvedSlug}`);
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  // Defaults describe what each section means in general. A project can override any of
  // them via `sectionGuide` to say what is actually in its own section, which is what
  // makes the guide useful for navigation rather than a restatement of the labels.
  const navDefaults = [
    { id: "problem", label: "Problem", description: "What challenge needed solving" },
    { id: "context", label: "Context", description: "Background and constraints" },
    { id: "role", label: "Role", description: "Scope and ownership" },
    { id: "process", label: "Process", description: "How the solution was created" },
    { id: "decisions", label: "Decisions", description: "Critical choices and tradeoffs" },
    { id: "outcome", label: "Outcome", description: "Results and impact" },
    { id: "lessons", label: "Lessons", description: "What transferred to future work" },
  ] as const;

  const navItems = navDefaults.map((item) => ({
    ...item,
    description: project.sectionGuide?.[item.id] ?? item.description,
  }));

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
  const creativeWorkJsonLd = getCreativeWorkJsonLd({
    title: project.title,
    description: project.summary,
    pathname: `/portfolio/${project.slug}`,
    image: getProjectShareImage(project),
    organization: project.organization,
    keywords: project.tags,
  });
  const connectedPeople = getPeopleForProject(project.id);

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(creativeWorkJsonLd) }}
      />
      <SectionShell>
        <CaseStudyHero project={project} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <AIWorkspaceBanner
            eyebrow="AI Case Guide"
            title="Interrogate the case study with AI"
            description="Ask AI to summarize the case, extract leadership signals, or compare this work to other projects."
          >
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
              tone="banner"
            />
          </AIWorkspaceBanner>
          <nav className="rounded-lg border border-border bg-card p-4" aria-label="Case study sections">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary">
              Section guide
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

      {connectedPeople.length > 0 ? (
        <SectionShell className="pt-0">
          <ProjectPeopleStrip people={connectedPeople} />
        </SectionShell>
      ) : null}

      <SectionShell className="pt-0">
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
