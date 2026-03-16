"use client";

import Link from "next/link";
import { mainNavItems } from "@/lib/site/navigation";
import { siteConfig } from "@/lib/site/content";

export function Footer() {
  return (
    <footer role="contentinfo" className="relative border-t border-border/50 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_30%)]" />
      <div className="container relative py-10 md:py-12">
        <div className="rounded-2xl border border-border/70 bg-card/70 p-6 backdrop-blur-sm md:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Link
                href="/"
                className="font-mono text-sm font-medium tracking-tight text-foreground"
              >
                {siteConfig.name}
                <span className="text-primary">.</span>
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Design leadership, AI-first product thinking, and enterprise transformation work.
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {mainNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex rounded-md border border-border/70 bg-background/70 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/40 pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <Link
              href="/contact"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Start a conversation &rarr;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
