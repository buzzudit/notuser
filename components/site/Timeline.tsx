import type { ReactNode } from "react";

type TimelineProps = {
  children: ReactNode;
};

type TimelineItemProps = {
  period: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return <ol className="relative space-y-8 border-l border-border/60 pl-6">{children}</ol>;
}

export function TimelineItem({
  period,
  title,
  subtitle,
  children,
}: TimelineItemProps) {
  return (
    <li className="relative">
      <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
      <p className="font-mono text-[11px] uppercase tracking-wider text-primary/70">
        {period}
      </p>
      <h3 className="mt-1 text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {children && <div className="mt-3">{children}</div>}
    </li>
  );
}
