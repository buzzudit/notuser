import { impactStats } from "@/data/skills";

export function ImpactStats() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {impactStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border bg-card p-4 text-center"
        >
          <p className="text-xl font-semibold text-foreground">{stat.value}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
