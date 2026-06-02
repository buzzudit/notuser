import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Layers3,
  MessageCircleQuestion,
  Sparkles,
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
import { projects, type Project } from "@/data/projects";
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

function getProjectCountLabel(count: number) {
  return count === 1 ? "1 project" : `${count} projects`;
}

type PortfolioMastheadProps = {
  audienceProfile?: AudienceProfileContext | null;
  heading: string;
  description: string;
  sortedProjects: Project[];
  featuredPreviews: HomeCaseStudyPreview[];
};

function PortfolioMasthead({
  audienceProfile,
  heading,
  description,
  sortedProjects,
  featuredPreviews,
}: PortfolioMastheadProps) {
  const categoryCount = new Set(sortedProjects.map((project) => project.category)).size;
  const organizationCount = new Set(sortedProjects.map((project) => project.organization)).size;
  const sectionLinks = [
    {
      href: "#flagship-case-studies",
      label: "Start with flagship work",
      count: getProjectCountLabel(featuredPreviews.length),
      className: "bg-primary/10 text-primary hover:bg-primary/15",
    },
    {
      href: "#portfolio-ai",
      label: "Ask the portfolio guide",
      count: "AI lens",
      className: "bg-secondary text-muted-foreground hover:bg-secondary/80",
    },
  ];

  return (
    <SectionShell className="pb-10 md:pb-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[hsl(var(--banner-blue-end))] to-primary"
        />
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:p-10">
          <div className="relative z-10 min-w-0">
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="max-w-3xl break-words text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {heading}
            </h1>
            <p className="mt-5 max-w-2xl break-words text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>

            {audienceProfile ? (
              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/[0.06] px-4 py-3">
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

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="min-w-0 rounded-2xl border border-border bg-background/80 p-4">
                <BriefcaseBusiness size={18} className="text-primary" />
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  {sortedProjects.length}
                </p>
                <p className="mt-1 break-words text-xs uppercase tracking-widest text-muted-foreground">
                  Projects in the archive
                </p>
              </div>
              <div className="min-w-0 rounded-2xl border border-border bg-background/80 p-4">
                <Sparkles size={18} className="text-primary" />
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  {featuredPreviews.length}
                </p>
                <p className="mt-1 break-words text-xs uppercase tracking-widest text-muted-foreground">
                  Flagship case studies
                </p>
              </div>
              <div className="min-w-0 rounded-2xl border border-border bg-background/80 p-4">
                <Layers3 size={18} className="text-primary" />
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  {categoryCount}
                </p>
                <p className="mt-1 break-words text-xs uppercase tracking-widest text-muted-foreground">
                  Categories across {organizationCount} orgs
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 min-w-0 rounded-3xl border border-border bg-background/80 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  Find Your Way In
                </p>
                <h2 className="mt-2 break-words text-xl font-semibold tracking-tight text-foreground">
                  Choose a starting point for the work
                </h2>
              </div>
              <MessageCircleQuestion size={22} className="shrink-0 text-primary" />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The portfolio is organized around deeper flagship stories first,
              with the AI guide available for targeted comparisons.
            </p>

            <div className="mt-6 space-y-3">
              {sectionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-w-0 items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors ${item.className}`}
                >
                  <span className="min-w-0 break-words text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-widest">
                    {item.count} <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
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
    : "Case studies and successes";
  const portfolioDescription = audienceProfile
    ? `Explore detailed case studies and the broader project catalog with ${portfolioRoleSummary} in mind.`
    : "Explore detailed case studies first, then browse the broader project catalog across healthcare, enterprise platforms, commerce, and personal build work.";
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
    : "Need this level of depth on your product?";
  const ctaDescription = audienceProfile
    ? `I can help connect product, design, and AI workflow strategy in a way that is relevant to ${portfolioRoleSummary}.`
    : "I can help map your AI roadmap to real workflow impact.";

  const portfolioAiContext = [
    "Portfolio landing page with flagship and full project coverage.",
    `Total projects: ${sortedProjects.length}.`,
    shareContextBlock ?? "",
    `Flagship projects: ${
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
        sortedProjects={sortedProjects}
        featuredPreviews={featuredPreviews}
      />

      <SectionShell className="pt-0" id="flagship-case-studies">
        <SectionLabel>Flagship Work</SectionLabel>
        <SectionHeading>Deeper stories for leadership and transformation conversations</SectionHeading>
        <SectionDescription>
          These case studies cover problem context, leadership scope, decision
          tradeoffs, and outcomes in complex product environments.
        </SectionDescription>
        <div className="mt-8">
          <FeaturedCaseStudies previews={featuredPreviews} projects={projects} />
        </div>
      </SectionShell>

      <SectionShell className="pt-0" id="portfolio-ai">
        <AIWorkspaceBanner
          eyebrow="AI Portfolio Guide"
          title="Explore the portfolio from a leadership lens"
          description="Ask about technology choices, chronology, outcomes, and tradeoffs across projects."
        >
          <AIWorkspace
            compact
            page="portfolio"
            shareCode={audienceProfile?.code}
            context={portfolioAiContext}
            helperText="Ask about technology choices, chronology, outcomes, and tradeoffs across projects."
            suggestions={portfolioSuggestions}
            tone="banner"
          />
        </AIWorkspaceBanner>
      </SectionShell>

      <SectionShell className="pt-0" id="project-grid">
        <SectionLabel>Full Project Set</SectionLabel>
        <SectionHeading>Additional projects that show breadth across domains and roles</SectionHeading>
        <SectionDescription>
          Browse additional projects across healthcare, enterprise platforms,
          commerce, devices, and independent builds.
        </SectionDescription>
        <div className="mt-8">
          <ProjectGrid projects={summaryProjects} fullCardLinks />
        </div>
      </SectionShell>

      <SectionShell id="portfolio-cta">
        <CallToAction
          eyebrow="Conversations"
          title={ctaTitle}
          description={ctaDescription}
          primaryLabel="Contact me"
          primaryHref="/contact"
          secondaryLabel="Read the blog"
          secondaryHref="/blog"
        />
      </SectionShell>
    </PageLayout>
  );
}
