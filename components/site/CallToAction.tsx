import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CallToActionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
};

export function CallToAction({
  eyebrow = "Next step",
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  tertiaryLabel,
  tertiaryHref,
}: CallToActionProps) {
  return (
    <section className="relative overflow-hidden rounded-[1.4rem] border border-white/20 bg-[linear-gradient(135deg,hsl(213_72%_79%)_0%,hsl(217_65%_69%)_46%,hsl(221_69%_57%)_100%)] px-6 py-7 text-white shadow-[0_28px_70px_rgba(74,120,211,0.28),0_2px_8px_rgba(15,23,42,0.08)] md:px-8 md:py-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.32),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(195,241,255,0.35),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:56px_56px] opacity-45 [mask-image:linear-gradient(90deg,rgba(0,0,0,0.55),transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-32 h-[24rem] w-[24rem] rounded-full border border-white/20 bg-white/12 shadow-[inset_0_0_80px_rgba(255,255,255,0.16)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-7 right-10 hidden h-36 w-36 rotate-[10deg] rounded-[1.6rem] border border-white/24 bg-[linear-gradient(145deg,rgba(255,255,255,0.24),rgba(255,255,255,0.08))] backdrop-blur-sm lg:block"
      >
        <div className="absolute inset-6 rounded-full border border-white/32" />
        <div className="absolute right-5 top-5 h-8 w-8 rounded-full border border-white/34 bg-[rgba(195,241,255,0.32)] shadow-[0_0_28px_rgba(195,241,255,0.5)]" />
      </div>

      <div className="relative max-w-3xl">
        <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-white/80">
          <span className="h-2 w-2 rounded-full bg-[rgba(195,241,255,0.95)] shadow-[0_0_18px_rgba(195,241,255,0.9)]" />
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.055em] text-white md:text-[2.7rem] md:leading-[0.96]">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base md:leading-7">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href={primaryHref}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/95 px-5 py-2.5 text-sm font-semibold text-[hsl(221_68%_46%)] shadow-[0_12px_28px_rgba(12,45,97,0.18)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-white hover:shadow-[0_16px_34px_rgba(12,45,97,0.24)]"
        >
          {primaryLabel} <ArrowRight size={14} />
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link
            href={secondaryHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/24 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/16"
          >
            {secondaryLabel}
          </Link>
        ) : null}
          {tertiaryLabel && tertiaryHref ? (
            <Link
              href={tertiaryHref}
              className="inline-flex min-h-11 items-center text-sm font-medium text-white/92 underline decoration-white/60 underline-offset-4 transition-colors hover:text-white"
            >
              {tertiaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
