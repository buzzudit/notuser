import Link from "next/link";
import type { ClaimCitation } from "@/data/claims";

type ClaimStripProps = {
  primary: ClaimCitation;
  others?: ClaimCitation[];
};

/**
 * Reuses the homepage card's own eyebrow and title verbatim. The repetition is what tells
 * a reader who arrived from that card that the thread held — a label explaining the
 * mechanism ("cited as evidence for") would just be furniture.
 */
export function ClaimStrip({ primary, others = [] }: ClaimStripProps) {
  const { claim, evidence } = primary;

  return (
    <div className="border-l-2 border-primary/40 pl-5">
      <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
        {claim.eyebrow}
      </p>
      <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
        {claim.title}
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {evidence.note}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link
          href={`#${evidence.anchorId}`}
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Read {evidence.anchorLabel} →
        </Link>
        {others.length > 0 ? (
          <p className="text-sm text-muted-foreground">
            {others.length === 1
              ? `Also makes the case for ${others[0].claim.title.replace(/\.$/, "")}.`
              : `Also makes the case for ${others.length} other claims.`}
          </p>
        ) : null}
      </div>
    </div>
  );
}
