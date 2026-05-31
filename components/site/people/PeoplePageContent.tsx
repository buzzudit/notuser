"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, MessageSquareQuote } from "lucide-react";
import type { PeopleCategory, Person, PersonStrength } from "@/data/people";
import { getPeopleCategory, peopleCategories } from "@/data/people";
import { PeopleNetwork } from "@/components/site/people/PeopleNetwork";
import { PersonAvatar } from "@/components/site/people/PersonAvatar";
import type { Project } from "@/data/projects";

type PeoplePageContentProps = {
  people: Person[];
  projects: Project[];
};

type CategoryFilter = "All" | PeopleCategory;
type StrengthFilter = "All" | PersonStrength;

const strengthFilters: StrengthFilter[] = ["All", "High", "Med", "Low"];

function getProjectCount(person: Person, projectIds: Set<string>) {
  return person.relatedProjectIds.filter((id) => projectIds.has(id)).length;
}

export function PeoplePageContent({ people, projects }: PeoplePageContentProps) {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const [strengthFilter, setStrengthFilter] = useState<StrengthFilter>("All");
  const projectIds = useMemo(() => new Set(projects.map((project) => project.id)), [projects]);

  const filteredPeople = people.filter((person) => {
    const categoryMatches =
      categoryFilter === "All" || getPeopleCategory(person) === categoryFilter;
    const strengthMatches = strengthFilter === "All" || person.strength === strengthFilter;
    return categoryMatches && strengthMatches;
  });

  return (
    <div className="space-y-10">
      <PeopleNetwork people={people} projects={projects} />

      <div className="rounded-2xl border border-border bg-card p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Explore the network
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {filteredPeople.length} people shown
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {(["All", ...peopleCategories] as CategoryFilter[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategoryFilter(category)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    categoryFilter === category
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {strengthFilters.map((strength) => (
                <button
                  key={strength}
                  type="button"
                  onClick={() => setStrengthFilter(strength)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    strengthFilter === strength
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {strength}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPeople.map((person) => {
            const projectCount = getProjectCount(person, projectIds);
            return (
              <article
                key={person.id}
                className="group rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/35"
              >
                <div className="flex items-start gap-4">
                  <PersonAvatar person={person} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/people/${person.slug}`}
                          className="text-base font-semibold text-foreground transition-colors group-hover:text-primary"
                        >
                          {person.name}
                        </Link>
                        <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
                      </div>
                      {person.testimonial ? (
                        <MessageSquareQuote
                          size={16}
                          className="mt-1 shrink-0 text-primary"
                          aria-label="Has testimonial"
                        />
                      ) : null}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                        {person.strength}
                      </span>
                      <span className="rounded-full bg-secondary px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {projectCount} projects
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <Link
                    href={`/people/${person.slug}`}
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
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
