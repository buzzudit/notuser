"use client";

import { ContentCard } from "@/components/site/ContentCard";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { SectionLabel, SectionShell, SectionHeading } from "@/components/site/SectionShell";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { SkillGrid } from "@/components/site/SkillGrid";
import { ImpactStats } from "@/components/site/ImpactStats";
import { DownloadButton } from "@/components/site/DownloadButton";
import { achievements, education, profile } from "@/data/experience";

export default function ResumePage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Resume</SectionLabel>
        <SectionHeading>{profile.name}</SectionHeading>
        <p className="text-lg text-muted-foreground">{profile.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
        <div className="mt-6">
          <DownloadButton href="/resume.pdf" />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Impact</SectionLabel>
        <ImpactStats />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Achievements</SectionLabel>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <ContentCard key={achievement} hoverable={false}>
              <p className="text-sm leading-relaxed text-muted-foreground">{achievement}</p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>Experience Timeline</SectionLabel>
        <ExperienceTimeline />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Skills</SectionLabel>
        <SkillGrid />
      </SectionShell>

      <SectionShell>
        <SectionLabel>Education</SectionLabel>
        <div className="grid gap-3 md:grid-cols-2">
          {education.map((item) => (
            <ContentCard key={`${item.institution}-${item.year}`} hoverable={false}>
              <h3 className="text-sm font-medium text-foreground">{item.degree}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.institution} - {item.year}
              </p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>
    </PageLayout>
  );
}
