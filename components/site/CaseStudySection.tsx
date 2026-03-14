import type { ReactNode } from "react";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
};

export function CaseStudySection({ title, children }: CaseStudySectionProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-5 md:p-6">
      <h2 className="font-mono text-xs uppercase tracking-widest text-primary">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
