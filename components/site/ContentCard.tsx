"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function ContentCard({
  children,
  className = "",
  hoverable = true,
}: ContentCardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -2 } : undefined}
      className={`rounded-lg border border-border bg-card p-5 transition-colors ${
        hoverable ? "hover:border-primary/20" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
