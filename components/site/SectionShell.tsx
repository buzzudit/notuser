"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * `default` suits marketing pages, where sections are meant to read as separate
 * screens. `tight` is for document-like pages such as /resume, which are scanned
 * top to bottom and where the full rhythm leaves ~192px of dead space between blocks.
 */
export type SectionSpacing = "default" | "tight";

const SECTION_SPACING: Record<SectionSpacing, string> = {
  default: "py-16 md:py-24",
  tight: "py-8 md:py-12",
};

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: SectionSpacing;
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
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      // Spacing is swapped, not appended: an appended py-* utility loses to the one
      // Tailwind emits later in the stylesheet, so overriding via className silently
      // does nothing.
      className={`${SECTION_SPACING[spacing]} ${className}`}
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
