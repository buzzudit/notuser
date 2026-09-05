import Image from "next/image";
import type { ReactNode } from "react";
import type { CompanyProfile } from "@/data/experience";

type CompanyHoverCardProps = {
  company: string;
  profile?: CompanyProfile;
  logo?: string;
  children: ReactNode;
  /** Aligns the card under a wide trigger such as a text label. */
  align?: "center" | "start";
};

/**
 * Wraps any trigger — the timeline's logo mark or the company name in the subtitle —
 * with a short card explaining what kind of company it is.
 *
 * A hiring reader knows athenahealth and Adobe. Kaseya and Applied Materials are the
 * ones that need a line, and they are exactly the entries a reader would otherwise
 * skim past. Hover and focus are handled in CSS so this stays a server component, and
 * the trigger is focusable so the card is reachable from the keyboard.
 */
export function CompanyHoverCard({
  company,
  profile,
  logo,
  children,
  align = "center",
}: CompanyHoverCardProps) {
  if (!profile) {
    return <>{children}</>;
  }

  return (
    <span className="group/company relative inline-flex">
      <span
        tabIndex={0}
        role="button"
        aria-label={`About ${company}`}
        className="rounded-lg outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-primary"
      >
        {children}
      </span>

      <span
        role="tooltip"
        className={`pointer-events-none invisible absolute top-[calc(100%+10px)] z-50 w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-popover p-4 opacity-0 shadow-lg transition-opacity duration-150 group-hover/company:visible group-hover/company:opacity-100 group-focus-within/company:visible group-focus-within/company:opacity-100 ${
          align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
        }`}
      >
        <span className="flex items-center gap-2.5">
          {logo ? (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border/70 bg-white p-0.5">
              <Image
                src={logo}
                alt=""
                width={72}
                height={72}
                className="h-full w-full object-cover"
              />
            </span>
          ) : null}
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-tight text-foreground">
              {company}
            </span>
            <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest text-primary">
              {profile.sector}
            </span>
          </span>
        </span>
        <span className="mt-3 block text-[13px] leading-relaxed text-muted-foreground">
          {profile.about}
        </span>
      </span>
    </span>
  );
}
