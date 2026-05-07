import type { ReactNode } from "react";

type AIWorkspaceBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function AIWorkspaceBanner({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: AIWorkspaceBannerProps) {
  return (
    <section
      className={`blue-banner ${className}`}
    >
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

      <div className="relative max-w-4xl">
        <p className="blue-banner-eyebrow">
          <span className="blue-banner-dot" />
          {eyebrow}
        </p>
        <h2 className="blue-banner-title">
          {title}
        </h2>
        {description ? (
          <p className="blue-banner-description">
            {description}
          </p>
        ) : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
