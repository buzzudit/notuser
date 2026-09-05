"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * `default` suits marketing pages, where sections are meant to read as separate
 * screens. `tight` is for document-like pages such as /resume, which are scanned
 * top to bottom and where the full rhythm leaves ~192px of dead space between blocks.
 */
export type SectionSpacing = "default" | "tight";

/**
 * Top and bottom are emitted as separate utilities rather than `py-*`, because an
 * override passed through `className` loses to the shorthand — and a responsive
 * shorthand like `md:py-24` beats even an unprefixed `pt-0`. Composing explicitly
 * here means the value you ask for is the value you get.
 */
const SECTION_PADDING: Record<SectionSpacing, { top: string; bottom: string }> = {
  default: { top: "pt-16 md:pt-24", bottom: "pb-16 md:pb-24" },
  tight: { top: "pt-8 md:pt-12", bottom: "pb-8 md:pb-12" },
};

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: SectionSpacing;
  /** Removes top padding so this section sits directly under the previous one. */
  flushTop?: boolean;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function SectionShell({
  children,
  className = "",
  id,
  spacing = "default",
  flushTop = false,
}: SectionShellProps) {
  const padding = SECTION_PADDING[spacing];

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className={`${flushTop ? "pt-0" : padding.top} ${padding.bottom} ${className}`}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
      {children}
    </h2>
  );
}

export function SectionDescription({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}
