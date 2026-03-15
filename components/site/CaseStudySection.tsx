import type { ReactNode } from "react";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

export function CaseStudySection({ title, children, id }: CaseStudySectionProps) {
  return (
    <section id={id} className="rounded-xl border border-border bg-card p-5 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-border/50" />
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-primary">
          {title}
        </h2>
        <span className="h-px flex-1 bg-border/50" />
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
