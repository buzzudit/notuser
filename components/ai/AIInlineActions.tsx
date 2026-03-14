"use client";

import Link from "next/link";

type InlineAction = {
  label: string;
  href: string;
};

type AIInlineActionsProps = {
  title?: string;
  actions: InlineAction[];
};

export function AIInlineActions({
  title = "Inline actions",
  actions,
}: AIInlineActionsProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {actions.map((action) => (
          <Link
            key={`${action.label}-${action.href}`}
            href={action.href}
            className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
