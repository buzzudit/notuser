"use client";

import { AIWorkspace } from "@/components/site/AIWorkspace";
import { ContentCard } from "@/components/site/ContentCard";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionLabel, SectionShell, SectionHeading } from "@/components/site/SectionShell";
import { resumeData } from "@/lib/site/content";

export default function ResumePage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Resume</SectionLabel>
        <SectionHeading>{resumeData.name}</SectionHeading>
        <p className="text-lg text-muted-foreground">{resumeData.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {resumeData.summary}
        </p>

        <div className="mt-6">
          <AIWorkspace compact />
          <p className="mt-2 text-[11px] text-muted-foreground">
            Ask AI about this resume - experience, skills, or fit for a role.
          </p>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Experience</SectionLabel>
        <div className="mt-6 space-y-4">
          {resumeData.experience.map((exp, index) => (
            <ContentCard key={`${exp.company}-${index}`} hoverable={false}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
                  <p className="text-xs text-muted-foreground">{exp.company}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
              </div>
              <ul className="mt-3 space-y-1">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li
                    key={`${exp.company}-${highlightIndex}`}
                    className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Skills</SectionLabel>
        <div className="mt-4 flex flex-wrap gap-2">
          {resumeData.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Education</SectionLabel>
        <div className="mt-4 space-y-3">
          {resumeData.education.map((education, index) => (
            <ContentCard key={`${education.institution}-${index}`} hoverable={false}>
              <h3 className="text-sm font-medium text-foreground">{education.degree}</h3>
              <p className="text-xs text-muted-foreground">
                {education.institution} - {education.year}
              </p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>
    </PageLayout>
  );
}
