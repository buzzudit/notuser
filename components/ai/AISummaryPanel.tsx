"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

type AISummaryPanelProps = {
  title?: string;
  summary: string;
  bullets?: string[];
  defaultExpanded?: boolean;
  className?: string;
};

export function AISummaryPanel({
  title = "30-second overview",
  summary,
  bullets,
  defaultExpanded = false,
  className = "",
}: AISummaryPanelProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [revealed, setRevealed] = useState(defaultExpanded);

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true);
      setExpanded(true);
      return;
    }

    setExpanded((previous) => !previous);
  };

  return (
    <div className={`overflow-hidden rounded-lg border border-border bg-card ${className}`}>
      <button
        type="button"
        onClick={handleReveal}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-secondary/50"
      >
        <div className="flex items-center gap-2">
          <FileText size={14} className="text-primary" />
          <span className="text-sm font-medium text-foreground">{title}</span>
          {!revealed ? (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
              AI generated
            </span>
          ) : null}
        </div>
        {revealed ? (
          expanded ? (
            <ChevronUp size={14} className="text-muted-foreground" />
          ) : (
            <ChevronDown size={14} className="text-muted-foreground" />
          )
        ) : null}
      </button>

      <AnimatePresence>
        {expanded && revealed ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="border-t border-border px-5 py-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
              {bullets && bullets.length > 0 ? (
                <ul className="mt-3 space-y-1.5">
                  {bullets.map((bullet, index) => (
                    <motion.li
                      key={`${bullet}-${index}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
