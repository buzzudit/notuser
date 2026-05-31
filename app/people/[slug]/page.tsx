import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Linkedin, MessageSquareQuote } from "lucide-react";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { PersonAvatar } from "@/components/site/people/PersonAvatar";
import { getPeopleCategory, getPersonBySlug, people } from "@/data/people";
import { projects } from "@/data/projects";
import {
  absoluteUrl,
  buildSiteMetadata,
  safeJsonLd,
} from "@/lib/site/metadata";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type PersonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

function getRelatedProjects(projectIds: string[]) {
  const idSet = new Set(projectIds);
  return projects.filter((project) => idSet.has(project.id));
}

function getPersonDescription(person: NonNullable<ReturnType<typeof getPersonBySlug>>) {
  const category = getPeopleCategory(person).toLowerCase();
  return `${person.name} is part of Udit Khandelwal's ${category} collaborator network, connected through portfolio work and shared product execution.`;
}

export async function generateMetadata({ params }: PersonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getPersonBySlug(slug);
  if (!person) {
    notFound();
  }

  return buildSiteMetadata({
    title: `${person.name} | People`,
    description: getPersonDescription(person),
    pathname: `/people/${person.slug}`,
    image: person.image ? resolveMirroredMediaSrc(person.image) : null,
    imageAlt: person.name,
    keywords: [person.name, person.role, "Udit Khandelwal collaborator"],
  });
}

function getPersonJsonLd(
  person: NonNullable<ReturnType<typeof getPersonBySlug>>,
  relatedProjects: ReturnType<typeof getRelatedProjects>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: absoluteUrl(`/people/${person.slug}`),
    image: person.image ? absoluteUrl(resolveMirroredMediaSrc(person.image)) : undefined,
    jobTitle: person.role,
    description: getPersonDescription(person),
    sameAs: person.linkedIn ? [person.linkedIn] : undefined,
    knowsAbout: relatedProjects.map((project) => project.title),
    subjectOf: relatedProjects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: absoluteUrl(`/portfolio/${project.slug}`),
    })),
  };
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = await params;
  const person = getPersonBySlug(slug);
  if (!person) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(person.relatedProjectIds);
  const personJsonLd = getPersonJsonLd(person, relatedProjects);

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personJsonLd) }}
      />
      <SectionShell>
        <Link
          href="/people"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to people
        </Link>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative grid gap-6 p-6 md:grid-cols-[auto_1fr] md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_bottom_left,hsl(var(--banner-blue-start)/0.13),transparent_34%)]" />
            <div className="relative">
              <PersonAvatar person={person} size="lg" />
            </div>
            <div className="relative">
              <SectionLabel>{getPeopleCategory(person)}</SectionLabel>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {person.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {person.role}
              </p>
              {person.concurrentDesignation ? (
                <p className="mt-2 text-sm text-muted-foreground">
                  {person.concurrentDesignation}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary">
                  {person.strength} connection
                </span>
                <span className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {relatedProjects.length} linked projects
                </span>
              </div>
              <a
                href={person.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/45"
              >
                <Linkedin size={15} />
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      {person.testimonial ? (
        <SectionShell className="pt-0">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <MessageSquareQuote className="mt-1 shrink-0 text-primary" size={22} />
              <div>
                <SectionLabel>Testimonial</SectionLabel>
                <blockquote className="mt-3 max-w-4xl text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                  &ldquo;{person.testimonial}&rdquo;
                </blockquote>
                {person.concurrentDesignation ? (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {person.concurrentDesignation}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </SectionShell>
      ) : null}

      <SectionShell className={person.testimonial ? "pt-0" : undefined}>
        <SectionLabel>Connected Work</SectionLabel>
        <SectionHeading>Projects linked to {person.firstName}</SectionHeading>
        <SectionDescription>
          Current portfolio pages connected through the archived collaborator
          relationship data.
        </SectionDescription>
        <div className="mt-8">
          {relatedProjects.length > 0 ? (
            <ProjectGrid projects={relatedProjects} />
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
              No current public portfolio project is linked to this archived
              collaborator record yet.
            </div>
          )}
        </div>
      </SectionShell>
    </PageLayout>
  );
}
