"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Compass } from "lucide-react";

export type AINavigationStep = {
  id: string;
  label: string;
  description: string;
  targetId?: string;
};

type AIGuidedNavigatorProps = {
  steps: AINavigationStep[];
  suggestedNext?: string;
  className?: string;
};

export function AIGuidedNavigator({
  steps,
  suggestedNext,
  className = "",
}: AIGuidedNavigatorProps) {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const handleNavigate = (step: AINavigationStep) => {
    setActiveStep(step.id);
    if (!step.targetId) {
      return;
    }

    const target = document.getElementById(step.targetId);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`rounded-lg border border-border bg-card p-4 ${className}`}
      aria-label="AI guided navigation"
    >
      <div className="mb-3 flex items-center gap-2">
        <Compass size={14} className="text-primary" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
          Guided exploration
        </span>
      </div>

      <div className="space-y-1">
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isSuggested = suggestedNext === step.id;

          return (
            <motion.button
              key={step.id}
              whileHover={{ x: 2 }}
              type="button"
              onClick={() => handleNavigate(step)}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <ChevronRight
                size={12}
                className={isActive ? "text-primary" : "text-muted-foreground/50"}
              />
              <div className="flex-1">
                <p className="text-xs font-medium">{step.label}</p>
                <p className="text-[11px] text-muted-foreground">{step.description}</p>
              </div>
              {isSuggested && !isActive ? (
                <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
                  Suggested
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
