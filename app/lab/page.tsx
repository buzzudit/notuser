import type { Metadata } from "next";
import { SectionDescription, SectionHeading, SectionLabel, SectionShell } from "@/components/site/SectionShell";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { TrialCard } from "@/components/site/lab/TrialCard";
import { trials } from "@/data/trials";
import { buildSiteMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Lab",
  description:
    "Product ideas, prototypes, and AI workflow experiments from Udit Khandelwal.",
  pathname: "/lab",
  keywords: ["product ideas", "AI workflow prototypes", "UX lab", "Bitbucket workflow"],
});

export default function LabPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Lab</SectionLabel>
        <SectionHeading>Product ideas and AI workflow experiments</SectionHeading>
        <SectionDescription>
          Some ideas become products. Some get overtaken by the market. The useful
          ones leave behind a sharper read on what people needed.
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
