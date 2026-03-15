"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

type AIInsightHighlightProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export function AIInsightHighlight({
  children,
  label = "AI Insight",
  className = "",
}: AIInsightHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-lg border border-primary/20 bg-primary/[0.04] p-4 ${className}`}
    >
      <div className="mb-2 flex items-center gap-1.5">
        <Zap size={12} className="text-primary" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
          {label}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </motion.div>
  );
}

type AIHighlightSpanProps = {
  children: ReactNode;
};

export function AIHighlightSpan({ children }: AIHighlightSpanProps) {
  return <span className="rounded-sm bg-primary/10 px-1 py-0.5 text-primary">{children}</span>;
}
