import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion, Network, Quote, Users } from "lucide-react";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { CallToAction } from "@/components/site/CallToAction";
import { PeoplePageContent } from "@/components/site/people/PeoplePageContent";
import { getPeopleCategory, people, peopleCategories } from "@/data/people";
import { projects } from "@/data/projects";
import { buildSiteMetadata } from "@/lib/site/metadata";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

export const metadata: Metadata = buildSiteMetadata({
  title: "People",
  description:
    "A visual map of collaborators, leaders, designers, product partners, and engineers connected to Udit Khandelwal's portfolio work.",
  pathname: "/people",
  keywords: [
    "Udit Khandelwal collaborators",
    "design leadership network",
    "product collaborators",
    "portfolio collaborators",
  ],
});

function getPeopleCountLabel(count: number) {
  return count === 1 ? "1 person" : `${count} people`;
}

function buildPeopleAiContext() {
  const currentProjectIds = new Set(projects.map((project) => project.id));
  const linkedPeople = people.filter((person) =>
    person.relatedProjectIds.some((projectId) => currentProjectIds.has(projectId)),
  );
  const categorySummary = peopleCategories
    .map(
      (category) =>
        `${category}: ${people.filter((person) => getPeopleCategory(person) === category).length}`,
    )
    .join(" | ");
  const relationshipSummary = [
    `Close collaborators: ${people.filter((person) => person.strength === "High").length}`,
    `Project partners: ${people.filter((person) => person.strength === "Med").length}`,
    `Wider circle: ${people.filter((person) => person.strength === "Low").length}`,
  ].join(" | ");
  const closeCollaborators = people
    .filter((person) => person.strength === "High")
    .slice(0, 16)
    .map((person) => `${person.name} (${person.role})`)
    .join(" | ");
  const testimonialPeople = people
    .filter((person) => person.testimonial)
    .slice(0, 10)
    .map((person) => `${person.name}: ${person.testimonial}`)
    .join(" | ");
  const projectConnections = projects
    .map((project) => {
      const collaborators = people.filter((person) =>
        person.relatedProjectIds.includes(project.id),
      );

      if (collaborators.length === 0) {
        return null;
      }

      return `${project.title} (${project.organization}, ${project.year}): ${collaborators
        .slice(0, 8)
        .map((person) => person.name)
        .join(", ")}`;
    })
    .filter(Boolean)
    .slice(0, 18)
    .join(" | ");

  return [
    "People page context for Udit Khandelwal's portfolio collaborator network.",
    `Total collaborators: ${people.length}. People linked to current public portfolio projects: ${linkedPeople.length}.`,
    `Categories: ${categorySummary}.`,
    `Relationship sections shown on the page: ${relationshipSummary}.`,
    `Close collaborator examples: ${closeCollaborators}.`,
    `People with testimonial excerpts: ${testimonialPeople}.`,
    `Current project connections: ${projectConnections}.`,
    "When answering, use the People page as a navigation aid. Point to /people and relevant /portfolio pages when useful.",
  ].join("\n\n");
}

function PeopleMasthead() {
  const linkedProjectIds = new Set(people.flatMap((person) => person.relatedProjectIds));
  const linkedProjects = projects.filter((project) => linkedProjectIds.has(project.id));
  const featuredPeople = people.filter((person) => person.image).slice(0, 9);
  const closeCollaborators = people.filter((person) => person.strength === "High").length;
  const projectPartners = people.filter((person) => person.strength === "Med").length;
  const widerCircle = people.filter((person) => person.strength === "Low").length;
  const testimonialCount = people.filter((person) => person.testimonial).length;
  const sectionLinks = [
    {
      href: "#close-collaborators",
      label: "Start with trusted collaborators",
      count: getPeopleCountLabel(closeCollaborators),
      className: "bg-primary/10 text-primary hover:bg-primary/15",
    },
    {
      href: "#project-partners",
      label: "Follow shared work",
      count: getPeopleCountLabel(projectPartners),
      className: "bg-secondary text-muted-foreground hover:bg-secondary/80",
    },
    {
      href: "#wider-circle",
      label: "Browse the wider circle",
      count: getPeopleCountLabel(widerCircle),
      className: "bg-background text-muted-foreground hover:bg-secondary",
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
          <div className="relative z-10">
            <SectionLabel>Shared Work</SectionLabel>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              The people who shaped the work
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Collaborators, leaders, designers, product partners, and engineers
              connected to the projects and teams in this portfolio.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background/80 p-4">
                <Users size={18} className="text-primary" />
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  {people.length}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  People in the story
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/80 p-4">
                <Network size={18} className="text-primary" />
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  {linkedProjects.length}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Work they touched
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/80 p-4">
                <Quote size={18} className="text-primary" />
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  {testimonialCount}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Kind words
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 rounded-3xl border border-border bg-background/80 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  Find Your Way In
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                  Start with the strongest ties, then follow the work outward
                </h2>
              </div>
              <MessageCircleQuestion size={22} className="text-primary" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredPeople.map((person) => (
                <Link
                  key={person.id}
                  className="relative h-14 w-14 overflow-hidden rounded-full border border-border bg-secondary"
                  title={person.name}
                  href={`/people/${person.slug}`}
                >
                  <Image
                    src={resolveMirroredMediaSrc(person.image ?? "")}
                    alt={person.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {sectionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors ${item.className}`}
                >
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
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

export default function PeoplePage() {
  const peopleAiContext = buildPeopleAiContext();
  const peopleAiSuggestions = [
    "Who are the closest collaborators in this network?",
    "Which projects have the strongest people evidence?",
    "Summarize the collaborator network for a hiring panel",
  ];

  return (
    <PageLayout>
      <PeopleMasthead />

      <SectionShell className="pt-0">
        <PeoplePageContent
          people={people}
          projects={projects}
          aiContext={peopleAiContext}
          aiSuggestions={peopleAiSuggestions}
        />
      </SectionShell>

      <SectionShell>
        <CallToAction
          eyebrow="Collaborate"
          title="Want to get featured here?"
          description="The people on this page are part of the work, decisions, and outcomes behind my portfolio. If you want to build something meaningful together, start a conversation or browse the work first."
          primaryLabel="Contact me"
          primaryHref="/contact"
          secondaryLabel="Browse my work"
          secondaryHref="/portfolio"
        />
      </SectionShell>
    </PageLayout>
  );
}
