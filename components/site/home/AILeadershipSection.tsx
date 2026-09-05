import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SignalCardGrid } from "@/components/site/home/SignalCardGrid";
import type { HomeSignalItem } from "@/data/site";

type AILeadershipSectionProps = {
  label: string;
  heading: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  pillars: HomeSignalItem[];
};

/**
 * The claims here were previously unbacked, which made a real position read as fluff.
 * Each pillar cites the case study it came from, and the column closes on a route into
 * the strongest one.
 *
 * Ordering differs by breakpoint on purpose. On desktop the cards lead and the text
 * column sits to their right, holding label, heading, position and CTA together. Stacked
 * on mobile that order would bury the heading, so the heading rises to the top and only
 * the intro and CTA drop below the cards — the ask still follows the evidence.
 */
export function AILeadershipSection({
  label,
  heading,
  intro,
  ctaLabel,
  ctaHref,
  pillars,
}: AILeadershipSectionProps) {
  return (
    <div className="grid gap-x-14 gap-y-9 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="lg:col-start-2 lg:row-start-1">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          {label}
        </p>
        <h2 className="mt-3 text-pretty text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {heading}
        </h2>
      </div>

      <div className="order-last lg:order-none lg:col-start-2 lg:row-start-2">
        {/* Fills the column's dead space and carries the same argument the copy makes:
            the model is the start, coordination is the work, supervision is the point. */}
        <Image
          src="/images/home/ai-journey.png"
          alt="Three ascending steps: a model, a coordinated workflow, and a verified outcome"
          width={1254}
          height={852}
          className="mb-6 hidden w-full max-w-sm lg:block"
        />
        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {intro}
        </p>
        <Link
          href={ctaHref}
          className="group mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {ctaLabel}
          <ArrowRight
            size={15}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <SignalCardGrid items={pillars} columns="two" iconSet="ai" />
      </div>
    </div>
  );
}
