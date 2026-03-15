"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlignLeft,
  Lightbulb,
  Maximize2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export type AIInlineActionType = "summarize" | "expand" | "insights" | "followup";

export type AIInlineAction = {
  type: AIInlineActionType;
  label: string;
};

const defaultActions: AIInlineAction[] = [
  { type: "summarize", label: "Summarize" },
  { type: "expand", label: "Expand" },
  { type: "insights", label: "Insights" },
  { type: "followup", label: "Follow-up" },
];

const iconMap: Record<AIInlineActionType, ReactNode> = {
  summarize: <AlignLeft size={11} />,
  expand: <Maximize2 size={11} />,
  insights: <Lightbulb size={11} />,
  followup: <MessageCircle size={11} />,
};

type AIInlineActionsProps = {
  actions?: AIInlineAction[];
  onAction?: (type: AIInlineActionType) => void;
  result?: string;
  className?: string;
};

export function AIInlineActions({
  actions = defaultActions,
  onAction,
  result,
  className = "",
}: AIInlineActionsProps) {
  const [activeAction, setActiveAction] = useState<AIInlineActionType | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAction = (action: AIInlineAction) => {
    setActiveAction(action.type);
    onAction?.(action.type);
    setShowResult(true);
    window.setTimeout(() => setActiveAction(null), 1200);
  };

  return (
    <div className={className}>
      <div className="flex items-center gap-1.5">
        <Sparkles size={11} className="text-primary/60" />
        {actions.map((action) => (
          <motion.button
            key={action.type}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => handleAction(action)}
            className={`inline-flex items-center gap-1 rounded-md border px-2 py-1 font-mono text-[11px] transition-colors ${
              activeAction === action.type
                ? "border-primary/30 bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground hover:border-primary/20 hover:text-foreground"
            }`}
          >
            {iconMap[action.type]}
            {action.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showResult && result ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-md border border-primary/15 bg-primary/[0.03] p-3">
              <p className="text-sm leading-relaxed text-muted-foreground">{result}</p>
              <button
                type="button"
                onClick={() => setShowResult(false)}
                className="mt-2 font-mono text-[11px] text-primary transition-opacity hover:opacity-70"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
