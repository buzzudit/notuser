import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Mail } from "lucide-react";

type ExecutiveHeroProps = {
  hero: {
    eyebrow: string;
    name: string;
    headline: string;
    subheadline: string;
    credibilityLine: string;
    imageSrc: string;
    imageAlt: string;
    quickSignals: string[];
    fitRoles: string[];
  };
};

export function ExecutiveHero({ hero }: ExecutiveHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_28%)]" />
      <div className="container relative py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              {hero.eyebrow}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {hero.name}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              {hero.subheadline}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {hero.credibilityLine}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View leadership work <ArrowRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Explore case studies
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact <Mail size={14} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {hero.quickSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-border/70 bg-card/80 p-3 shadow-2xl shadow-black/20">
              <div className="relative aspect-[0.78] overflow-hidden rounded-[1.25rem] bg-secondary/40">
                <Image
                  src={hero.imageSrc}
                  alt={hero.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/85 p-5">
              <div className="flex items-center gap-2">
                <div className="rounded-full border border-primary/25 bg-primary/10 p-2 text-primary">
                  <BriefcaseBusiness size={16} />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Best Fit
                </p>
              </div>
              <ul className="mt-4 space-y-3">
                {hero.fitRoles.map((role) => (
                  <li key={role} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
