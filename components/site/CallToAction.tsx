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
    <section className="blue-banner">
      <div
        aria-hidden="true"
        className="blue-banner-radial absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="blue-banner-grid absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="blue-banner-orb"
      />
      <div
        aria-hidden="true"
        className="blue-banner-device"
      >
        <div className="blue-banner-device-ring" />
        <div className="blue-banner-device-dot" />
      </div>

      <div className="relative max-w-3xl">
        <p className="blue-banner-eyebrow">
          <span className="blue-banner-dot" />
          {eyebrow}
        </p>
        <h2 className="blue-banner-title">
          {title}
        </h2>
        <p className="blue-banner-description">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={primaryHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/95 px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_12px_28px_rgb(12_45_97_/_0.18)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-white hover:shadow-[0_16px_34px_rgb(12_45_97_/_0.24)]"
          >
            {primaryLabel} <ArrowRight size={14} />
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/[0.24] bg-white/[0.1] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.16]"
            >
              {secondaryLabel}
            </Link>
          ) : null}
          {tertiaryLabel && tertiaryHref ? (
            <Link
              href={tertiaryHref}
              className="inline-flex min-h-11 items-center text-sm font-medium text-white/[0.92] underline decoration-white/60 underline-offset-4 transition-colors hover:text-white"
            >
              {tertiaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
