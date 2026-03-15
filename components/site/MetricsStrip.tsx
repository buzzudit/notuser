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
        <div
          key={metric.label}
          className="rounded-lg border border-border/60 bg-secondary/40 p-3"
        >
          <p className="text-base font-semibold leading-tight text-foreground break-words">
            {metric.value}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
