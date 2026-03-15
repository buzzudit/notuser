"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Workflow } from "lucide-react";

export type AIWorkflowAction = {
  label: string;
  description: string;
  result?: string[];
};

type AIWorkflowHelperProps = {
  actions: AIWorkflowAction[];
  className?: string;
};

export function AIWorkflowHelper({
  actions,
  className = "",
}: AIWorkflowHelperProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex((previous) => (previous === index ? null : index));
  };

  return (
    <div className={`rounded-lg border border-border bg-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <Workflow size={14} className="text-primary" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
          Workflow assist
        </span>
      </div>

      <div className="divide-y divide-border">
        {actions.map((action, index) => (
          <div key={`${action.label}-${index}`}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-secondary/50"
            >
              <ChevronRight
                size={12}
                className={`shrink-0 text-muted-foreground transition-transform ${
                  expandedIndex === index ? "rotate-90 text-primary" : ""
                }`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{action.label}</p>
                <p className="text-[11px] text-muted-foreground">{action.description}</p>
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === index && action.result ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pl-10">
                    <ul className="space-y-1.5">
                      {action.result.map((item, itemIndex) => (
                        <motion.li
                          key={`${item}-${itemIndex}`}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.06 }}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
