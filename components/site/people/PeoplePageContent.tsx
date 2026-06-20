"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Linkedin, MessageSquareQuote, Sparkles } from "lucide-react";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { AIWorkspaceBanner } from "@/components/site/AIWorkspaceBanner";
import type { PeopleCategory, Person, PersonStrength } from "@/data/people";
import { getPeopleCategory, peopleCategories } from "@/data/people";
import { PersonAvatar } from "@/components/site/people/PersonAvatar";
import type { Project } from "@/data/projects";

type PeoplePageContentProps = {
  people: Person[];
  projects: Project[];
  aiContext: string;
  aiSuggestions: string[];
};

type CategoryFilter = "All" | PeopleCategory;
type SectionFilters = Record<PersonStrength, CategoryFilter>;

type NetworkSection = {
  strength: PersonStrength;
  title: string;
  description: string;
  shellClassName: string;
  cardClassName: string;
  metaClassName: string;
  avatarSize: "sm" | "md" | "lg";
};

const networkSections: NetworkSection[] = [
  {
    strength: "High",
    title: "Close collaborators",
    description: "People most directly connected to the work, mentoring, and shared delivery.",
    shellClassName: "border-primary/25 bg-primary/5",
    cardClassName:
      "border-primary/35 bg-gradient-to-br from-background via-primary/5 to-background p-5 shadow-sm hover:border-primary/60 hover:shadow-lg md:p-6",
    metaClassName: "bg-primary/10 text-primary",
    avatarSize: "lg",
  },
  {
    strength: "Med",
    title: "Project partners",
    description: "Collaborators connected through focused product, design, and delivery moments.",
    shellClassName: "border-border bg-background",
    cardClassName: "border-border bg-card p-4 hover:border-primary/35",
    metaClassName: "bg-secondary text-muted-foreground",
    avatarSize: "md",
  },
  {
    strength: "Low",
    title: "Wider circle",
    description: "Additional collaborators and peers from earlier work.",
    shellClassName: "border-border/80 bg-secondary/20",
    cardClassName: "border-border/80 bg-background/75 p-3 hover:border-primary/25",
    metaClassName: "bg-background text-muted-foreground",
    avatarSize: "sm",
  },
];

const defaultSectionFilters: SectionFilters = {
  High: "All",
  Med: "All",
  Low: "All",
};

function getProjectCount(person: Person, projectIds: Set<string>) {
  return person.relatedProjectIds.filter((id) => projectIds.has(id)).length;
}

function getProjectLabel(projectCount: number) {
  return projectCount === 1 ? "1 project" : `${projectCount} projects`;
}

function getSectionFilterOptions(sectionPeople: Person[]) {
  return (["All", ...peopleCategories] as CategoryFilter[]).filter((category) => {
    if (category === "All") {
      return true;
    }

    return sectionPeople.some((person) => getPeopleCategory(person) === category);
  });
}

function getFilteredSectionPeople(sectionPeople: Person[], categoryFilter: CategoryFilter) {
  if (categoryFilter === "All") {
    return sectionPeople;
  }

  return sectionPeople.filter((person) => getPeopleCategory(person) === categoryFilter);
}

export function PeoplePageContent({
  people,
  projects,
  aiContext,
  aiSuggestions,
}: PeoplePageContentProps) {
  const [sectionFilters, setSectionFilters] =
    useState<SectionFilters>(defaultSectionFilters);
  const projectIds = useMemo(() => new Set(projects.map((project) => project.id)), [projects]);

  const updateSectionFilter = (strength: PersonStrength, categoryFilter: CategoryFilter) => {
    setSectionFilters((currentFilters) => ({
      ...currentFilters,
      [strength]: categoryFilter,
    }));
  };

  return (
    <div className="space-y-6">
      {networkSections.map((section, sectionIndex) => {
        const sectionPeople = people.filter((person) => person.strength === section.strength);
        const categoryFilter = sectionFilters[section.strength];
        const sectionFilterOptions = getSectionFilterOptions(sectionPeople);
        const filteredSectionPeople = getFilteredSectionPeople(sectionPeople, categoryFilter);

        if (sectionPeople.length === 0) {
          return null;
        }

        return (
          <div key={section.strength} className="space-y-6">
            <section
              id={section.title.toLowerCase().replaceAll(" ", "-")}
              className={`rounded-2xl border p-4 md:p-5 ${section.shellClassName}`}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {filteredSectionPeople.length} of {sectionPeople.length} people shown
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sectionFilterOptions.map((category) => (
                    <button
                      key={`${section.strength}-${category}`}
                      type="button"
                      onClick={() => updateSectionFilter(section.strength, category)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                        categoryFilter === category
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background/70 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredSectionPeople.map((person) => {
                  const projectCount = getProjectCount(person, projectIds);
                  const isCloseCollaborator = section.strength === "High";
                  const isWiderCircle = section.strength === "Low";
                  return (
                    <article
                      key={person.id}
                      className={`group rounded-xl border transition-colors ${section.cardClassName}`}
                    >
                      {isCloseCollaborator ? (
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-primary/15 pb-4">
                          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                            <Sparkles size={13} />
                            Core collaborator
                          </span>
                          {person.testimonial ? (
                            <MessageSquareQuote
                              size={18}
                              className="shrink-0 text-primary"
                              aria-label="Has testimonial"
                            />
                          ) : null}
                        </div>
                      ) : null}
                      <div
                        className={`flex items-start gap-4 ${
                          isCloseCollaborator ? "md:items-center" : ""
                        }`}
                      >
                        <PersonAvatar person={person} size={section.avatarSize} />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <Link
                                href={`/circle/${person.slug}`}
                                className={`font-semibold text-foreground transition-colors group-hover:text-primary ${
                                  isCloseCollaborator
                                    ? "text-lg"
                                    : isWiderCircle
                                      ? "text-sm"
                                      : "text-base"
                                }`}
                              >
                                {person.name}
                              </Link>
                              <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
                            </div>
                            {isWiderCircle ? (
                              <a
                                href={person.linkedIn}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${person.name} on LinkedIn`}
                                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                              >
                                <Linkedin size={14} />
                              </a>
                            ) : !isCloseCollaborator && person.testimonial ? (
                              <MessageSquareQuote
                                size={16}
                                className="mt-1 shrink-0 text-primary"
                                aria-label="Has testimonial"
                              />
                            ) : null}
                          </div>
                          {!isWiderCircle ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span
                                className={`rounded-full px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${section.metaClassName}`}
                              >
                                {getPeopleCategory(person)}
                              </span>
                              <span className="rounded-full bg-secondary px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                {getProjectLabel(projectCount)}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      {!isWiderCircle ? (
                        <div className="mt-5 flex items-center justify-between gap-3">
                          <Link
                            href={`/circle/${person.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            View profile <ArrowUpRight size={13} />
                          </Link>
                          <a
                            href={person.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                          >
                            LinkedIn
                          </a>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>

            {sectionIndex === 0 ? (
              <AIWorkspaceBanner
                eyebrow="Ask AI"
                title="Ask about the collaborator network"
                description="Find relevant collaborators, project connections, or a hiring-panel summary."
                className="mx-auto w-full max-w-5xl"
              >
                <AIWorkspace
                  page="circle"
                  context={aiContext}
                  helperText="Ask AI to summarize collaborator patterns, surface project connections, or prepare a people-focused briefing."
                  suggestions={aiSuggestions}
                  tone="banner"
                />
              </AIWorkspaceBanner>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
