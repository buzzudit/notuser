import { ArrowRight, Network } from "lucide-react";
import type { PeopleCategory, Person } from "@/data/people";
import { getPeopleCategory, peopleCategories } from "@/data/people";
import type { Project } from "@/data/projects";

type PeopleNetworkProps = {
  people: Person[];
  projects: Project[];
};

const categoryLabels: Record<PeopleCategory, string> = {
  Leadership: "Leaders",
  Product: "Product",
  Design: "Design",
  Engineering: "Engineering",
  Other: "Other",
};

export function PeopleNetwork({ people, projects }: PeopleNetworkProps) {
  const connectedProjectIds = new Set(people.flatMap((person) => person.relatedProjectIds));
  const connectedProjects = projects
    .filter((project) => connectedProjectIds.has(project.id))
    .slice(0, 6);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-5 md:p-7">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Relationship map
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            People connected through shipped work
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/35 px-3 py-1.5 text-sm text-muted-foreground">
          <Network size={14} />
          {people.length} collaborators
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1.25fr] lg:items-center">
        <div className="grid gap-3 sm:grid-cols-2">
          {peopleCategories.map((category) => {
            const count = people.filter((person) => getPeopleCategory(person) === category).length;
            return (
              <div key={category} className="rounded-xl border border-border bg-secondary/20 p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  {categoryLabels[category]}
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                  {count}
                </p>
              </div>
            );
          })}
        </div>

        <div className="hidden px-2 text-primary/70 lg:block">
          <ArrowRight size={28} />
        </div>

        <div className="relative min-h-[18rem] rounded-2xl border border-border bg-gradient-to-br from-secondary/60 via-card to-primary/5 p-4">
          <div className="absolute left-1/2 top-8 h-[75%] w-px bg-border/70" />
          <div className="absolute left-8 top-1/2 h-px w-[80%] bg-border/70" />
          <div className="relative grid h-full gap-3 sm:grid-cols-2">
            {connectedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`rounded-xl border border-border bg-background/80 p-4 shadow-sm ${
                  index % 2 === 0 ? "sm:translate-y-3" : "sm:-translate-y-3"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {project.organization}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                  {project.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{project.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
