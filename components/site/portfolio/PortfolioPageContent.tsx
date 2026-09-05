import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Layers3,
  MessageCircleQuestion,
} from "lucide-react";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { CallToAction } from "@/components/site/CallToAction";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { AIWorkspaceBanner } from "@/components/site/AIWorkspaceBanner";
import { FeaturedCaseStudies } from "@/components/site/home/FeaturedCaseStudies";
import { projects } from "@/data/projects";
import { homeFeaturedCaseStudies, type HomeCaseStudyPreview } from "@/data/site";

type AudienceProfileContext = {
  code: string;
  company: string;
  position: string | null;
  positionUrl?: string | null;
  intentType?: string | null;
  notes: string | null;
};

type PortfolioPageContentProps = {
  audienceProfile?: AudienceProfileContext | null;
};

function parseProjectYear(value: string) {
  const matches = value.match(/\d{4}/g);
  if (!matches) {
    return 0;
  }

  return Math.max(...matches.map((entry) => Number(entry)));
}

function getAudienceRoleSummary(profile: AudienceProfileContext) {
  if (profile.position) {
    return `${profile.position} at ${profile.company}`;
  }

  return `a role at ${profile.company}`;
}

type PortfolioMastheadProps = {
  audienceProfile?: AudienceProfileContext | null;
  heading: string;
  description: string;
  featuredPreviews: HomeCaseStudyPreview[];
};

function PortfolioMasthead({
  audienceProfile,
  heading,
  description,
}: PortfolioMastheadProps) {
  // Three things a reader can do, not three facts about the archive. Each is a verb
  // with a destination, so the hero moves people into the work instead of describing it.
  const actions = [
    {
      href: "#best-work",
      icon: BookOpen,
      label: "See my best work",
      detail: "Hardest problems, biggest consequences",
    },
    {
      href: "#project-grid",
      icon: Layers3,
      label: "Browse every project",
      detail: "Healthcare, platforms, commerce, devices",
    },
    {
      href: "#portfolio-ai",
      icon: MessageCircleQuestion,
      label: "Ask which work fits your role",
      detail: "Compare projects by domain, scope, and outcome",
    },
  ];

  return (
    <SectionShell spacing="tight">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[hsl(var(--banner-blue-end))] to-primary"
        />
        <div className="relative z-10 p-6 md:p-8 lg:p-10">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="max-w-3xl break-words text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {heading}
          </h1>
          <p className="mt-5 max-w-2xl break-words text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>

          {audienceProfile ? (
            <div className="mt-6 max-w-2xl rounded-xl border border-primary/30 bg-primary/[0.06] px-4 py-3">
              <p className="font-mono text-[11px] uppercase text-primary">
                Tailored view
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                This portfolio link is tailored for{" "}
                <span className="font-semibold text-foreground">
                  {audienceProfile.company}
                </span>
                {audienceProfile.position ? ` (${audienceProfile.position})` : ""}
                {audienceProfile.intentType
                  ? ` for a ${audienceProfile.intentType} conversation`
                  : ""}
                .
              </p>
              {audienceProfile.notes ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Notes: {audienceProfile.notes}
                </p>
              ) : null}
              {audienceProfile.positionUrl ? (
                <a
                  href={audienceProfile.positionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                >
                  View source role
                </a>
              ) : null}
            </div>
          ) : null}

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group flex min-w-0 flex-col rounded-2xl border border-border bg-background/80 p-5 transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
                >
                  <Icon size={18} className="text-primary" />
                  <span className="mt-3 flex items-start gap-1.5 text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                    {action.label}
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="mt-1.5 break-words text-sm leading-relaxed text-muted-foreground">
                    {action.detail}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function PortfolioPageContent({ audienceProfile }: PortfolioPageContentProps) {
  const sortedProjects = [...projects].sort((left, right) => {
    const yearDelta = parseProjectYear(right.year) - parseProjectYear(left.year);
    if (yearDelta !== 0) {
      return yearDelta;
    }

    return left.title.localeCompare(right.title);
  });

  const featuredPreviews = homeFeaturedCaseStudies.filter((preview) =>
    sortedProjects.some((project) => project.slug === preview.slug),
  );
  const featuredSlugs = new Set(featuredPreviews.map((preview) => preview.slug));
  const summaryProjects = sortedProjects.filter((project) => !featuredSlugs.has(project.slug));

  const shareContextBlock = audienceProfile
    ? [
        `Share profile code: ${audienceProfile.code}`,
        `Target company: ${audienceProfile.company}`,
        audienceProfile.position ? `Target position: ${audienceProfile.position}` : "",
        audienceProfile.positionUrl ? `Source role URL: ${audienceProfile.positionUrl}` : "",
        audienceProfile.intentType ? `Intent type: ${audienceProfile.intentType}` : "",
        audienceProfile.notes ? `Tailoring notes: ${audienceProfile.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    : null;
  const portfolioRoleSummary = audienceProfile
    ? getAudienceRoleSummary(audienceProfile)
    : null;
  const portfolioHeading = audienceProfile
    ? `Case studies and evidence for ${portfolioRoleSummary}`
    : "I lead design for platforms people depend on";
  const portfolioDescription = audienceProfile
    ? `Explore detailed case studies and the broader project catalog with ${portfolioRoleSummary} in mind.`
    : "Healthcare integration, developer tooling, AI systems, and commerce. Pick a way in below, or ask me anything about the work.";
  const portfolioSuggestions = audienceProfile
    ? [
        `Which case studies matter most for ${portfolioRoleSummary}?`,
        `What evidence best supports ${portfolioRoleSummary}?`,
        `Where might ${audienceProfile.company} still want more proof?`,
      ]
    : [
        "Compare all projects",
        "Show AI-related work",
        "Which project had the highest impact?",
      ];
  const ctaTitle = audienceProfile
    ? `Need this level of depth for ${audienceProfile.company}?`
    : "Need design leadership for a platform or AI product?";
  const ctaDescription = audienceProfile
    ? `I can help connect product, design, and AI workflow strategy for ${portfolioRoleSummary}.`
    : "I can help connect product direction, design quality, and workflow strategy.";

  const portfolioAiContext = [
    "Portfolio landing page covering selected best work and the full project set.",
    `Total projects: ${sortedProjects.length}.`,
    shareContextBlock ?? "",
    `Best work: ${
      featuredPreviews.length > 0
        ? featuredPreviews.map((preview) => preview.slug).join(" | ")
        : "none"
    }.`,
    `Project list and metadata: ${sortedProjects
      .map(
        (project) =>
          `${project.title} (${project.year}) | org: ${project.organization} | category: ${project.category} | platform: ${project.platform} | scope: ${project.scope} | tags: ${project.tags.slice(0, 4).join(", ")} | metrics: ${project.metrics
            .slice(0, 2)
            .map((metric) => `${metric.label} ${metric.value}`)
            .join(", ")}`,
      )
      .join(" || ")}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <PageLayout>
      <PortfolioMasthead
        audienceProfile={audienceProfile}
        heading={portfolioHeading}
        description={portfolioDescription}
        featuredPreviews={featuredPreviews}
      />

      <SectionShell spacing="tight" flushTop id="best-work">
        <SectionLabel>Best Work</SectionLabel>
        <SectionHeading>The work I would want you to judge me on</SectionHeading>
        <SectionDescription>
          The hardest problems I have been handed, the calls I stand behind, and the ones
          that cost the most to get right.
        </SectionDescription>
        <div className="mt-8">
          <FeaturedCaseStudies previews={featuredPreviews} projects={projects} />
        </div>
      </SectionShell>

      <SectionShell spacing="tight" flushTop id="portfolio-ai">
        <AIWorkspaceBanner
          eyebrow="AI Portfolio Guide"
          title="Ask about the portfolio"
          description="Compare projects by role, domain, chronology, outcomes, and tradeoffs."
        >
          <AIWorkspace
            compact
            page="portfolio"
            shareCode={audienceProfile?.code}
            context={portfolioAiContext}
            helperText="Ask about role, domain, chronology, outcomes, and tradeoffs across projects."
            suggestions={portfolioSuggestions}
            tone="banner"
          />
        </AIWorkspaceBanner>
      </SectionShell>

      <SectionShell spacing="tight" flushTop id="project-grid">
        <SectionLabel>Full Project Set</SectionLabel>
        <SectionHeading>More projects across domains and roles</SectionHeading>
        <SectionDescription>
          Browse additional work across healthcare, enterprise platforms,
          commerce, devices, and independent builds.
        </SectionDescription>
        <div className="mt-8">
          <ProjectGrid projects={summaryProjects} fullCardLinks />
        </div>
      </SectionShell>

      <SectionShell spacing="tight" id="portfolio-cta">
        <CallToAction
          eyebrow="Conversations"
          title={ctaTitle}
          description={ctaDescription}
          primaryLabel="Start a conversation"
          primaryHref="/contact"
          secondaryLabel="Read the blog"
          secondaryHref="/blog"
        />
      </SectionShell>
    </PageLayout>
  );
}
