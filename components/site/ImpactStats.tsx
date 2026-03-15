import { impactStats } from "@/data/skills";

export function ImpactStats() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {impactStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/25"
        >
          <p className="text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
