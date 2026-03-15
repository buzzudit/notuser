"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNavItems } from "@/lib/site/navigation";
import { siteConfig } from "@/lib/site/content";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      role="banner"
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="container flex h-14 items-center justify-between"
      >
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          {siteConfig.name}
          <span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {mainNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                  pathname === item.href
                    ? "text-foreground after:absolute after:inset-x-3 after:-bottom-[1px] after:h-[2px] after:rounded-full after:bg-primary after:content-['']"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Get in touch
        </Link>

        <button
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
