import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { ArrowUpRight } from "lucide-react";
import { ContentCard } from "@/components/site/ContentCard";
import { IntentAudienceBanner } from "@/components/site/intent/IntentAudienceBanner";
import { UkrSessionBridge } from "@/components/site/intent/UkrSessionBridge";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { DownloadButton } from "@/components/site/DownloadButton";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { AIWorkspaceBanner } from "@/components/site/AIWorkspaceBanner";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import {
  achievements,
  education,
  experienceTimeline,
  profile,
  resumeTestimonials,
  resumeSignals,
  trainingAndCertifications,
} from "@/data/experience";
import { people } from "@/data/people";
import {
  buildUkrIntentAiContext,
  buildUkrScopedMetadata,
  getIntentRoleSummary,
  resolveUkrExperience,
  UKR_COOKIE_NAME,
} from "@/lib/site/ukrLinks";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  return buildUkrScopedMetadata("/resume", searchParams, {
    title: "Resume",
    description: profile.summary,
    image: "/images/udit-bw.png",
    imageAlt: "Black and white portrait of Udit Khandelwal",
    keywords: [
      "Udit Khandelwal resume",
      "design director",
      "AI-first product leadership",
      "enterprise UX leadership",
    ],
  });
}

// Written out in full rather than built from the index: Tailwind tree-shakes @layer
// component rules whose class names never appear literally in the source.
const SIGNAL_TONES = ["signal-card-1", "signal-card-2", "signal-card-3"];

export default async function ResumePage({ searchParams }: PageProps) {
  const cookieStore = await cookies();
  const intentState = await resolveUkrExperience({
    searchParams,
    cookieCode: cookieStore.get(UKR_COOKIE_NAME)?.value ?? null,
  });
  const activeIntent = intentState.activeIntent;
  const fitTarget = activeIntent ? getIntentRoleSummary(activeIntent) : null;
  const resumeAiContext = [
    `Profile: ${profile.name}`,
    `Title: ${profile.title}`,
    `Summary: ${profile.summary}`,
    `Leadership context: ${resumeSignals
      .map((signal) => `${signal.label}: ${signal.title}. ${signal.description}`)
      .join(" ")}`,
    `Career timeline: ${experienceTimeline
      .map(
        (item) =>
          `${item.period} - ${item.role} at ${item.company} (${item.location}). Highlights: ${item.highlights.join(" ")}`,
      )
      .join(" ")}`,
    `Selected outcomes: ${achievements.map((item) => item.text).join(" ")}`,
    `Education: ${education
      .map((item) => `${item.degree}, ${item.institution} (${item.year})`)
      .join(" | ")}`,
    `Professional development: ${trainingAndCertifications
      .map((item) => `${item.year}: ${item.title} - ${item.provider}. ${item.summary}`)
      .join(" ")}`,
    activeIntent ? buildUkrIntentAiContext(activeIntent) : "",
  ].join("\n\n");
  const resumeSuggestions = activeIntent
    ? [
        `Summarize this resume for ${fitTarget}`,
        `What strengths matter most for ${fitTarget}?`,
        `What interview concerns might ${activeIntent.org} raise?`,
      ]
    : [
        "Summarize this resume for a hiring manager",
        "Extract top leadership strengths",
        "Draft interview questions based on this profile",
      ];
  const resumeHelperText = activeIntent
    ? `Ask AI for a role-fit summary for ${fitTarget}, interview briefing, or leadership talking points.`
    : "Ask AI for a role-fit summary, interview briefing, or leadership talking points.";
  const peopleByName = new Map(people.map((person) => [person.name, person]));

  return (
    <PageLayout>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <SectionShell spacing="tight">
        <SectionLabel>Resume</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading>{profile.name}</SectionHeading>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-foreground/90">
              {profile.title}
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <DownloadButton href="/resume.docx" />
          </div>
        </div>
        {activeIntent ? (
          <div className="mt-6">
            <IntentAudienceBanner intentLink={activeIntent} />
          </div>
        ) : null}
      </SectionShell>

      {/* Order follows what a hiring reader asks, in order: what has he achieved, how
          does he work, what is the career shape, can I verify it. Evidence therefore
          sits above the claims it substantiates. */}
      <SectionShell spacing="tight">
        <SectionLabel>Impact</SectionLabel>
        <SectionHeading>What I have delivered</SectionHeading>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {achievements.map((achievement) => (
            <li
              key={achievement.text}
              className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                {achievement.text}
                {achievement.href ? (
                  <>
                    {" "}
                    <Link
                      href={achievement.href}
                      className="inline-flex items-center gap-0.5 whitespace-nowrap font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {achievement.hrefLabel}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </Link>
                  </>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell spacing="tight">
        <SectionLabel>Leadership Context</SectionLabel>
        <SectionHeading>What the background brings to leadership</SectionHeading>
        <SectionDescription>
          Platform leadership, systems thinking, cross-functional influence, and
          technical depth in one career arc.
        </SectionDescription>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {resumeSignals.map((signal, index) => (
            <article
              key={signal.title}
              className={`signal-card ${SIGNAL_TONES[index % SIGNAL_TONES.length]}`}
            >
              <div aria-hidden="true" className="signal-card-sheen absolute inset-0" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                  {signal.label}
                </p>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {signal.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell spacing="tight">
        <SectionLabel>Experience</SectionLabel>
        <SectionHeading>From engineering roots to design leadership</SectionHeading>
        <ExperienceTimeline />
      </SectionShell>

      <SectionShell spacing="tight">
        <SectionLabel>Education</SectionLabel>
        <SectionHeading>Education and professional development</SectionHeading>
        <div className="mt-6 space-y-4">
          {education.map((item) => (
            <div
              key={`${item.institution}-${item.year}`}
              className="rounded-3xl border border-border bg-card px-6 py-7 md:px-8 md:py-9"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex max-w-3xl items-start gap-4">
                  {item.logo ? (
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-white p-1.5">
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        width={128}
                        height={128}
                        className="h-full w-full object-contain"
                      />
                    </span>
                  ) : null}
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                      Foundational degree
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {item.degree}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/80 md:text-base">
                      {item.institution}
                    </p>
                  </div>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:text-right">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Professional development
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {trainingAndCertifications.map((item) => (
              <ContentCard key={`${item.title}-${item.year}`} hoverable={false}>
                <div className="flex items-start gap-3">
                  {item.logo ? (
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-white p-1.5">
                      <Image
                        src={item.logo}
                        alt={item.provider}
                        width={128}
                        height={128}
                        className="h-full w-full object-contain"
                      />
                    </span>
                  ) : null}
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {item.year}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.provider}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              </ContentCard>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell spacing="tight" className="blue-section-wash">
        <SectionLabel>Testimonials</SectionLabel>
        <SectionHeading>What collaborators say</SectionHeading>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resumeTestimonials.map((testimonial) => {
            const person = peopleByName.get(testimonial.author);

            return (
              <TestimonialCard
                key={`${testimonial.author}-${testimonial.photoSrc}`}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                photoSrc={testimonial.photoSrc}
                authorHref={person ? `/circle/${person.slug}` : undefined}
              />
            );
          })}
        </div>
      </SectionShell>

      <SectionShell spacing="tight">
        <div className="mb-4 flex justify-center">
          <DownloadButton href="/resume.docx" />
        </div>
        <AIWorkspaceBanner
          eyebrow="AI Resume Helper"
          title="Review the resume against a role"
          description={resumeHelperText}
          className="mx-auto w-full max-w-4xl"
        >
          <AIWorkspace
            page="resume"
            context={resumeAiContext}
            helperText={resumeHelperText}
            suggestions={resumeSuggestions}
            tone="banner"
          />
        </AIWorkspaceBanner>
      </SectionShell>
    </PageLayout>
  );
}
