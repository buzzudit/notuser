"use client";

type InsightItem = {
  title: string;
  description: string;
  signal?: string;
};

type AIInsightsPanelProps = {
  title?: string;
  insights: InsightItem[];
};

export function AIInsightsPanel({
  title = "AI insights",
  insights,
}: AIInsightsPanelProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        {title}
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {insights.map((insight) => (
          <article
            key={insight.title}
            className="rounded-md border border-border/70 bg-secondary/30 p-3"
          >
            <p className="text-sm font-medium text-foreground">{insight.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {insight.description}
            </p>
            {insight.signal ? (
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-primary">
                {insight.signal}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
