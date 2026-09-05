import Image from "next/image";

type CompanyLogoProps = {
  company: string;
  /** Path under /public to a square brand lockup. Falls back to a type chip when absent. */
  logo?: string;
};

/**
 * Square logo chip used as the experience timeline's rail marker.
 *
 * The mirrored lockups sit on opaque white, so every chip is the same box with a light
 * face. That keeps the white deliberate in either theme and holds the marks on a single
 * axis down the rail. Artwork uses `object-cover`: a no-op for the square lockups, which
 * already carry margins, and a centre crop for a wide canvas that would otherwise shrink
 * to an unreadable strip.
 *
 * Wrap it in CompanyHoverCard to attach the orientation card.
 */
export function CompanyLogo({ company, logo }: CompanyLogoProps) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-white p-1 shadow-sm transition-transform group-hover/company:-translate-y-0.5">
      {logo ? (
        <Image
          src={logo}
          alt={company}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="px-0.5 text-center text-[9px] font-semibold leading-tight tracking-tight text-neutral-800">
          {company}
        </span>
      )}
    </span>
  );
}
