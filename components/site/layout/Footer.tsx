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
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          (c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          {mainNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
