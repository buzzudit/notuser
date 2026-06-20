import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Person } from "@/data/people";
import { PersonAvatar } from "@/components/site/people/PersonAvatar";

type ProjectPeopleStripProps = {
  people: Person[];
};

export function ProjectPeopleStrip({ people }: ProjectPeopleStripProps) {
  if (people.length === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Circle behind this work
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            Collaborators and partners from the project network
          </h2>
        </div>
        <Link
          href="/circle"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          View full circle <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {people.slice(0, 9).map((person) => (
          <Link
            key={person.id}
            href={`/circle/${person.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3 transition-colors hover:border-primary/35"
          >
            <PersonAvatar person={person} size="sm" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                {person.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">{person.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
