"use client";

import Link from "next/link";

type NavigatorItem = {
  label: string;
  href: string;
};

type AIGuidedNavigatorProps = {
  title?: string;
  items: NavigatorItem[];
};

export function AIGuidedNavigator({
  title = "Guided navigation",
  items,
}: AIGuidedNavigatorProps) {
  return (
    <nav className="rounded-xl border border-border bg-card p-4" aria-label={title}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        {title}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
