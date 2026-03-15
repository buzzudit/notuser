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
  return <ol className="relative space-y-6 border-l border-border pl-5">{children}</ol>;
}

export function TimelineItem({
  period,
  title,
  subtitle,
  children,
}: TimelineItemProps) {
  return (
    <li className="relative">
      <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {period}
      </p>
      <h3 className="mt-1 text-base font-medium text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {children && <div className="mt-2">{children}</div>}
    </li>
  );
}
