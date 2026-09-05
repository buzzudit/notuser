import type { Metadata } from "next";
import Image from "next/image";
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

function getConnectionLabel(person: NonNullable<ReturnType<typeof getPersonBySlug>>) {
  if (person.strength === "High") {
    return "Close connection";
  }

  if (person.strength === "Med") {
    return "Project connection";
  }

  return "Wider circle";
}

export async function generateMetadata({ params }: PersonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getPersonBySlug(slug);
  if (!person) {
    notFound();
  }

  return buildSiteMetadata({
    title: `${person.name} | Circle`,
    description: getPersonDescription(person),
    pathname: `/circle/${person.slug}`,
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
    url: absoluteUrl(`/circle/${person.slug}`),
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
  const hasPersonalStory = Boolean(person.relationship || person.fondMemory);

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(personJsonLd) }}
      />
      <SectionShell>
        <Link
          href="/circle"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to circle
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
                  {getConnectionLabel(person)}
                </span>
                {relatedProjects.length > 0 ? (
                  <span className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {relatedProjects.length} shared projects
                  </span>
                ) : null}
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
        <SectionShell flushTop>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card p-6 shadow-sm md:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[hsl(var(--banner-blue-end))] to-primary" />
            <div className="relative flex items-start gap-4">
              <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageSquareQuote size={20} />
              </span>
              <div className="min-w-0">
                <SectionLabel>Testimonial</SectionLabel>
                <blockquote className="mt-4 max-w-4xl font-serif text-2xl font-medium italic leading-relaxed text-foreground md:text-3xl">
                  {person.testimonial}
                </blockquote>
                {person.concurrentDesignation ? (
                  <p className="mt-5 border-l-2 border-primary/25 pl-4 text-sm text-muted-foreground">
                    {person.concurrentDesignation}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </SectionShell>
      ) : null}

      {hasPersonalStory ? (
        <SectionShell flushTop>
          <SectionLabel>Personal Story</SectionLabel>
          <SectionHeading>Working with {person.firstName}</SectionHeading>
          <div className="mt-8 grid gap-4">
            {person.fondMemory ? (
              <article className="relative overflow-hidden rounded-2xl border border-primary/35 bg-primary/5 p-6 shadow-sm md:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[hsl(var(--banner-blue-end))] to-primary" />
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageSquareQuote size={18} />
                  </span>
                  <h2 className="text-xl font-semibold text-foreground">Fond memory</h2>
                </div>
                <p className="mt-5 whitespace-pre-line text-base leading-8 text-foreground md:text-lg">
                  {person.fondMemory}
                </p>
              </article>
            ) : null}
            {person.relationship ? (
              <article className="rounded-2xl border border-border bg-card p-6 md:p-7">
                <h2 className="text-base font-semibold text-foreground">Relationship</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-muted-foreground">
                  {person.relationship}
                </p>
              </article>
            ) : null}
          </div>
        </SectionShell>
      ) : null}

      {person.gallery.length > 0 ? (
        <SectionShell flushTop>
          <SectionLabel>Gallery</SectionLabel>
          <SectionHeading>Shared moments with {person.firstName}</SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {person.gallery.map((item, index) => (
              <figure
                key={`${item.src}-${index}`}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] bg-secondary">
                  <Image
                    src={resolveMirroredMediaSrc(item.src)}
                    alt={item.alt ?? `${person.name} gallery image ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {item.title || item.description ? (
                  <figcaption className="p-4">
                    {item.title ? (
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                    ) : null}
                    {item.description ? (
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </SectionShell>
      ) : null}

      {relatedProjects.length > 0 ? (
        <SectionShell flushTop>
          <SectionLabel>Connected Work</SectionLabel>
          <SectionHeading>My projects with {person.firstName}</SectionHeading>
          <SectionDescription>
            Projects where our paths crossed and the work is part of this portfolio.
          </SectionDescription>
          <div className="mt-8">
            <ProjectGrid projects={relatedProjects} />
          </div>
        </SectionShell>
      ) : null}
    </PageLayout>
  );
}
