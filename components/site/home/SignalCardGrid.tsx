import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Braces,
  Building2,
  Compass,
  Flag,
  GitBranchPlus,
  Handshake,
  Layers3,
  Orbit,
  ShieldCheck,
  Sparkles,
  Users2,
  Waypoints,
} from "lucide-react";
import type { HomeSignalItem } from "@/data/site";

type SignalCardGridProps = {
  items: HomeSignalItem[];
  columns?: "two" | "three";
  iconSet?: "value" | "ai" | "leadership" | "proof";
};

const iconSets: Record<NonNullable<SignalCardGridProps["iconSet"]>, LucideIcon[]> = {
  value: [Compass, Building2, Bot, Handshake, Braces, Orbit],
  ai: [Sparkles, Bot, Waypoints, ShieldCheck],
  leadership: [Flag, Handshake, Users2, Layers3, GitBranchPlus, Compass],
  proof: [Building2, Orbit, Braces],
};

export function SignalCardGrid({
  items,
  columns = "three",
  iconSet = "value",
}: SignalCardGridProps) {
  const gridClassName =
    columns === "two" ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={gridClassName}>
      {items.map((item, index) => {
        const Icon = iconSets[iconSet][index % iconSets[iconSet].length];

        return (
          <article
            key={`${item.eyebrow}-${item.title}`}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-primary/25 bg-primary/10 p-2 text-primary">
                <Icon size={16} />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                {item.eyebrow}
              </p>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
