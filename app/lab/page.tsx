import type { Metadata } from "next";
import { SectionDescription, SectionHeading, SectionLabel, SectionShell } from "@/components/site/SectionShell";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { TrialCard } from "@/components/site/lab/TrialCard";
import { trials } from "@/data/trials";
import { buildSiteMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Lab",
  description:
    "Ideas, prototypes, and product bets from Udit Khandelwal's product and AI workflow practice.",
  pathname: "/lab",
  keywords: ["product ideas", "AI workflow prototypes", "UX lab", "Bitbucket workflow"],
});

export default function LabPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Lab</SectionLabel>
        <SectionHeading>Ideas that got far enough to teach something</SectionHeading>
        <SectionDescription>
          Some ideas become products. Some get overtaken by the market. The useful ones leave
          behind a sharper understanding of what people actually needed.
        </SectionDescription>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {trials.map((trial) => (
            <TrialCard key={trial.id} trial={trial} />
          ))}
        </div>
      </SectionShell>
    </PageLayout>
  );
}
