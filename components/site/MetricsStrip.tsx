import type { ProjectMetric } from "@/data/projects";

type MetricsStripProps = {
  metrics: ProjectMetric[];
  compact?: boolean;
};

export function MetricsStrip({ metrics, compact = false }: MetricsStripProps) {
  return (
    <div
      className={`grid gap-3 ${
        compact
          ? "grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-3"
      }`}
    >
      {metrics.map((metric) => (
        // Full height with the label pinned to the bottom, so tiles whose value wraps
        // to two lines still align with their single-line neighbours.
        <div
          key={metric.label}
          className="flex h-full flex-col justify-between gap-3 rounded-lg border border-border/60 bg-secondary/40 p-4"
        >
          <p className="text-[15px] font-semibold leading-snug text-foreground break-words">
            {metric.value}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
