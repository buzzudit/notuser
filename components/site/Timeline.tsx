import type { ReactNode } from "react";

type TimelineProps = {
  children: ReactNode;
};

type TimelineItemProps = {
  period: string;
  title: string;
  subtitle: ReactNode;
  /** Optional rail marker. Falls back to the default dot when omitted. */
  mark?: ReactNode;
  children?: ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return <ol className="relative space-y-8 border-l border-border/60 pl-16">{children}</ol>;
}

export function TimelineItem({
  period,
  title,
  subtitle,
  mark,
  children,
}: TimelineItemProps) {
  return (
    <li className="relative">
      {mark ? (
        // The rail sits at the list's left border, 64px (pl-16) left of this item's
        // content box, so a 44px marker centres on it at -86px.
        <span className="absolute -left-[86px] top-0">{mark}</span>
      ) : (
        <span className="absolute -left-[75px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
      )}
      <p className="font-mono text-[11px] uppercase tracking-wider text-primary/70">
        {period}
      </p>
      <h3 className="mt-1 text-base font-semibold text-foreground">{title}</h3>
      <div className="text-sm text-muted-foreground">{subtitle}</div>
      {children && <div className="mt-3">{children}</div>}
    </li>
  );
}
