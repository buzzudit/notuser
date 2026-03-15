"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export type AIInsight = {
  category: string;
  text: string;
};

type AIInsightsPanelProps = {
  insights: AIInsight[];
  title?: string;
  className?: string;
};

export function AIInsightsPanel({
  insights,
  title = "Extracted insights",
  className = "",
}: AIInsightsPanelProps) {
  return (
    <div className={`rounded-lg border border-border bg-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <Lightbulb size={14} className="text-primary" />
        <span className="text-sm font-medium text-foreground">{title}</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[11px] text-primary">
          {insights.length} found
        </span>
      </div>

      <div className="divide-y divide-border">
        {insights.map((insight, index) => (
          <motion.div
            key={`${insight.category}-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3 px-5 py-3.5"
          >
            <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {insight.category}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {insight.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
