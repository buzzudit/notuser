import { BulletList } from "@/components/site/BulletList";
import { SignalCardGrid } from "@/components/site/home/SignalCardGrid";
import type { HomeSignalItem } from "@/data/site";

type AILeadershipSectionProps = {
  intro: string;
  focusAreas: string[];
  pillars: HomeSignalItem[];
};

export function AILeadershipSection({
  intro,
  focusAreas,
  pillars,
}: AILeadershipSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="text-base leading-relaxed text-foreground md:text-lg">{intro}</p>
        <div className="mt-6 rounded-xl border border-border/70 bg-secondary/30 p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
            What I focus on
          </p>
          <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
            <BulletList items={focusAreas} />
          </div>
        </div>
      </div>
      <SignalCardGrid items={pillars} columns="two" iconSet="ai" />
    </div>
  );
}
