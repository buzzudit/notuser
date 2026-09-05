import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import { ParagraphStack } from "@/components/site/ParagraphStack";

/**
 * Section treatments for a case study body.
 *
 * Seven identical bordered cards in a row read as a form to fill in rather than a piece
 * to read. Each block below is chosen for the shape of its content, not for variety's
 * sake: prose gets a reading measure, a sequence gets numbers, discrete choices get a
 * grid, and the single most load-bearing section for a hiring reader — Role — gets the
 * page's loudest treatment.
 *
 * These apply to every case study, so any article gains the rhythm for free.
 */

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary">
      {children}
    </p>
  );
}

/** Opening statement. Large type, no card — the problem is the hook, so it carries. */
export function CaseStudyOpener({
  id,
  label,
  text,
}: {
  id?: string;
  label: string;
  text: string;
}) {
  return (
    <section id={id} className="py-2">
      <SectionLabel>{label}</SectionLabel>
      <p className="max-w-4xl text-pretty text-xl font-medium leading-snug tracking-tight text-foreground md:text-3xl md:leading-[1.28]">
        {text}
      </p>
    </section>
  );
}

/** Long-form prose at a comfortable reading measure. */
export function CaseStudyProse({
  id,
  label,
  text,
}: {
  id?: string;
  label: string;
  text: string;
}) {
  return (
    <section id={id}>
      <SectionLabel>{label}</SectionLabel>
      <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        <ParagraphStack paragraphs={[text]} />
      </div>
    </section>
  );
}

/** Gradient panel. Reserved for Role — the thing a hiring reader is really scanning for. */
export function CaseStudyBanner({
  id,
  label,
  text,
}: {
  id?: string;
  label: string;
  text: string;
}) {
  return (
    <section id={id} className="case-banner">
      <div aria-hidden="true" className="case-banner-sheen absolute inset-0" />
      <div className="relative max-w-3xl">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-white/70">
          {label}
        </p>
        <div className="space-y-4 text-[15px] leading-relaxed text-white/90 md:text-base">
          <ParagraphStack paragraphs={[text]} />
        </div>
      </div>
    </section>
  );
}

/** Numbered steps. Only for genuinely ordered content — the numbers assert a sequence. */
export function CaseStudySteps({
  id,
  label,
  items,
}: {
  id?: string;
  label: string;
  items: string[];
}) {
  return (
    <section id={id}>
      <SectionLabel>{label}</SectionLabel>
      <ol className="mt-2 space-y-0">
        {items.map((item, index) => (
          <li key={item} className="flex gap-4 border-t border-border/60 py-4 first:border-t-0 first:pt-0">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.07] font-mono text-[11px] font-semibold text-primary">
              {index + 1}
            </span>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{item}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Discrete choices as a card grid — decisions are parallel, not sequential. */
export function CaseStudyCards({
  id,
  label,
  items,
}: {
  id?: string;
  label: string;
  items: string[];
}) {
  return (
    <section id={id}>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-2 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item}
            className="rounded-xl border border-border bg-card p-4 md:p-5"
          >
            <ArrowRight
              size={15}
              aria-hidden="true"
              className="mb-2.5 text-primary"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/** Results, marked. */
export function CaseStudyOutcomes({
  id,
  label,
  items,
}: {
  id?: string;
  label: string;
  items: string[];
}) {
  return (
    <section id={id} className="rounded-2xl border border-border bg-secondary/25 p-5 md:p-7">
      <SectionLabel>{label}</SectionLabel>
      <ul className="mt-2 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2
              size={16}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-primary"
            />
            <p className="text-[15px] leading-relaxed text-muted-foreground">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Quiet closing note, narrow measure. */
export function CaseStudyLessons({
  id,
  label,
  items,
}: {
  id?: string;
  label: string;
  items: string[];
}) {
  return (
    <section id={id} className="max-w-3xl">
      <div className="mb-3 flex items-center gap-2">
        <Lightbulb size={14} aria-hidden="true" className="text-primary" />
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
          {label}
        </p>
      </div>
      <ul className="space-y-3 border-l-2 border-primary/25 pl-5">
        {items.map((item) => (
          <li key={item} className="text-[15px] leading-relaxed text-foreground/80">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
