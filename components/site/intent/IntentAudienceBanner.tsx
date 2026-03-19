import Link from "next/link";
import { getIntentRoleSummary, type IntentLinkRecord } from "@/lib/site/ukrLinks";

type IntentAudienceBannerProps = {
  intentLink: IntentLinkRecord;
};

export function IntentAudienceBanner({ intentLink }: IntentAudienceBannerProps) {
  return (
    <div className="rounded-xl border border-primary/30 bg-primary/[0.06] px-4 py-4">
      <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
        Tailored context
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground">
        This visit is currently tailored for{" "}
        <span className="font-semibold text-foreground">
          {getIntentRoleSummary(intentLink)}
        </span>
        {intentLink.intentType ? ` (${intentLink.intentType})` : ""}.
      </p>
      {intentLink.notes ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Notes driving this version: {intentLink.notes}
        </p>
      ) : null}
      {intentLink.positionUrl ? (
        <Link
          href={intentLink.positionUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          View source role
        </Link>
      ) : null}
    </div>
  );
}
