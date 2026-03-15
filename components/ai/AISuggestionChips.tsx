"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export type AISuggestion = {
  label: string;
  action?: string;
};

type AISuggestionChipsProps = {
  suggestions: AISuggestion[];
  onSelect?: (suggestion: AISuggestion) => void;
  className?: string;
};

export function AISuggestionChips({
  suggestions,
  onSelect,
  className = "",
}: AISuggestionChipsProps) {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [activated, setActivated] = useState<string | null>(null);

  const visibleSuggestions = suggestions.filter(
    (suggestion) => !dismissed.has(suggestion.label),
  );

  const handleSelect = (suggestion: AISuggestion) => {
    setActivated(suggestion.label);
    onSelect?.(suggestion);
    window.setTimeout(() => setActivated(null), 1200);
  };

  const handleDismiss = (label: string) => {
    setDismissed((prev) => new Set(prev).add(label));
  };

  if (visibleSuggestions.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <Sparkles size={14} className="mt-1.5 shrink-0 text-primary" />
      <div className="flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {visibleSuggestions.map((suggestion) => (
            <motion.div
              key={suggestion.label}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={`group inline-flex items-center rounded-md border px-2 py-1.5 transition-colors ${
                activated === suggestion.label
                  ? "border-primary/40 bg-primary/10"
                  : "border-border bg-card"
              }`}
            >
              <button
                type="button"
                onClick={() => handleSelect(suggestion)}
                className={`font-mono text-[11px] transition-colors ${
                  activated === suggestion.label
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {suggestion.label}
              </button>
              <button
                type="button"
                onClick={() => handleDismiss(suggestion.label)}
                aria-label={`Dismiss ${suggestion.label}`}
                className="ml-2 text-[11px] text-muted-foreground/60 transition-opacity hover:text-foreground"
              >
                x
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
