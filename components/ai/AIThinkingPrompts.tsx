"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Brain } from "lucide-react";

export type AIThinkingPrompt = {
  question: string;
  context?: string;
};

type AIThinkingPromptsProps = {
  prompts: AIThinkingPrompt[];
  onSelect?: (prompt: AIThinkingPrompt) => void;
  className?: string;
};

export function AIThinkingPrompts({
  prompts,
  onSelect,
  className = "",
}: AIThinkingPromptsProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (prompt: AIThinkingPrompt, index: number) => {
    const nextIndex = selectedIndex === index ? null : index;
    setSelectedIndex(nextIndex);
    onSelect?.(prompt);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="mb-3 flex items-center gap-2">
        <Brain size={14} className="text-primary" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
          Think deeper
        </span>
      </div>

      {prompts.map((prompt, index) => {
        const isActive = selectedIndex === index;
        return (
          <motion.button
            key={`${prompt.question}-${index}`}
            whileHover={{ x: 3 }}
            type="button"
            onClick={() => handleSelect(prompt, index)}
            className={`group flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ${
              isActive
                ? "border-primary/30 bg-primary/[0.04]"
                : "border-border bg-card hover:border-primary/20"
            }`}
          >
            <div className="flex-1">
              <p className="text-sm text-foreground">{prompt.question}</p>
            </div>
            <ArrowRight
              size={14}
              className={`shrink-0 transition-all ${
                isActive
                  ? "translate-x-0 text-primary"
                  : "-translate-x-1 text-muted-foreground/40 group-hover:translate-x-0 group-hover:text-muted-foreground"
              }`}
            />
          </motion.button>
        );
      })}

      <AnimatePresence>
        {selectedIndex !== null && prompts[selectedIndex]?.context ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-1 rounded-lg border border-primary/20 bg-primary/[0.03] p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {prompts[selectedIndex].context}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
