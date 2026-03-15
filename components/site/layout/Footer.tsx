"use client";

import Link from "next/link";
import { mainNavItems } from "@/lib/site/navigation";
import { siteConfig } from "@/lib/site/content";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border/50 bg-background"
    >
      <div className="container py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
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
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
    </footer>
  );
}
