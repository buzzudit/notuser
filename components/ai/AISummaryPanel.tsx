"use client";

type AISummaryPanelProps = {
  title?: string;
  summary: string;
  bullets?: string[];
};

export function AISummaryPanel({
  title = "AI summary",
  summary,
  bullets = [],
}: AISummaryPanelProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
      {bullets.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
