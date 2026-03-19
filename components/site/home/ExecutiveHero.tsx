import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      <div className="container relative pt-12 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono text-lg uppercase tracking-[0.16em] text-muted-foreground md:text-2xl">
              {hero.name}
            </p>

            <div className="relative mx-auto mt-4 h-[220px] w-full max-w-[220px] lg:hidden">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                fill
                className="object-contain object-bottom"
                priority
                sizes="220px"
              />
            </div>

            <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/90 md:text-xl">
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
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground md:ml-6"
              >
                Explore case studies
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-end justify-end">
            <div className="relative h-[620px] w-full max-w-[420px]">
              <div className="absolute inset-x-6 bottom-2 h-20 rounded-full bg-primary/10 blur-3xl" />
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1280px) 36vw, 32vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
