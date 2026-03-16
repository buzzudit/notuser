"use client";

import { ContentCard } from "@/components/site/ContentCard";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { SkillGrid } from "@/components/site/SkillGrid";
import { ImpactStats } from "@/components/site/ImpactStats";
import { DownloadButton } from "@/components/site/DownloadButton";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import {
  achievements,
  education,
  experienceTimeline,
  profile,
  resumeSignals,
  trainingAndCertifications,
} from "@/data/experience";

export default function ResumePage() {
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
    `Selected outcomes: ${achievements.join(" ")}`,
    `Education: ${education
      .map((item) => `${item.degree}, ${item.institution} (${item.year})`)
      .join(" | ")}`,
    `Training and certifications: ${trainingAndCertifications
      .map((item) => `${item.year}: ${item.title} - ${item.provider}. ${item.summary}`)
      .join(" ")}`,
  ].join("\n\n");

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Resume</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.9fr)] lg:items-start">
          <div>
            <SectionHeading>{profile.name}</SectionHeading>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-foreground/90">
              {profile.title}
            </p>
            <div className="mt-4 max-w-3xl">
              <SectionDescription>{profile.summary}</SectionDescription>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              At a glance
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>Director-level design leadership in enterprise healthcare and platform environments.</p>
              <p>Career progression at athenahealth from Manager to Director across platform vision, UX maturity, and cross-zone transformation.</p>
              <p>Recognized for AI transformation leadership, hands-on enablement, and sustained cross-functional impact.</p>
            </div>
            <div className="mt-5">
              <DownloadButton href="/resume.pdf" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-border bg-card p-5 md:p-6">
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-primary">
            AI resume helper
          </p>
          <AIWorkspace
            className="mt-4"
            page="resume"
            context={resumeAiContext}
            helperText="Ask AI for a role-fit summary, interview briefing, or leadership talking points."
            suggestions={[
              "Summarize this resume for a hiring manager",
              "Extract top leadership strengths",
              "Draft interview questions based on this profile",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Leadership Context</SectionLabel>
        <SectionHeading>Background and operating context</SectionHeading>
        <SectionDescription>
          Beyond tenure, this reflects a combination of platform leadership,
          systems thinking, cross-functional influence, and technical depth.
        </SectionDescription>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {resumeSignals.map((signal) => (
            <ContentCard key={signal.title} hoverable={false}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                {signal.label}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {signal.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {signal.description}
              </p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Impact</SectionLabel>
        <SectionHeading>Career signals</SectionHeading>
        <ImpactStats />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Selected Outcomes</SectionLabel>
        <SectionHeading>Leadership scope and progression</SectionHeading>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Career Timeline</SectionLabel>
        <SectionHeading>Progression from engineering roots to design leadership</SectionHeading>
        <ExperienceTimeline />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Capabilities</SectionLabel>
        <SectionHeading>How I operate across design, product, and transformation work</SectionHeading>
        <SkillGrid />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Education</SectionLabel>
        <div className="grid gap-3 md:grid-cols-2">
          {education.map((item) => (
            <ContentCard key={`${item.institution}-${item.year}`} hoverable={false}>
              <h3 className="text-sm font-medium text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution} - {item.year}
              </p>
            </ContentCard>
          ))}
        </div>

        <div className="mt-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Training and certification
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {trainingAndCertifications.map((item) => (
              <ContentCard key={`${item.title}-${item.year}`} hoverable={false}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {item.year}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.provider}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              </ContentCard>
            ))}
          </div>
        </div>
      </SectionShell>
    </PageLayout>
  );
}
