"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

export type AIPattern = {
  name: string;
  category: string;
  description: string;
  example: string;
};

type AIPatternExplorerProps = {
  patterns: AIPattern[];
  className?: string;
};

export function AIPatternExplorer({
  patterns,
  className = "",
}: AIPatternExplorerProps) {
  const categories = [...new Set(patterns.map((pattern) => pattern.category))];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] ?? "");

  const filteredPatterns = patterns.filter(
    (pattern) => pattern.category === activeCategory,
  );

  return (
    <div className={`rounded-lg border border-border bg-card ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <Layers size={14} className="text-primary" />
        <span className="text-sm font-medium text-foreground">AI design patterns</span>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-border px-5 py-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-md px-3 py-1.5 font-mono text-[11px] transition-colors ${
              activeCategory === category
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="divide-y divide-border">
        {filteredPatterns.map((pattern, index) => (
          <motion.div
            key={pattern.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="px-5 py-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-sm font-medium text-foreground">{pattern.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {pattern.description}
                </p>
              </div>
              <ExternalLink size={12} className="mt-1 shrink-0 text-muted-foreground/40" />
            </div>
            <div className="mt-2 rounded-md bg-secondary/50 px-3 py-2">
              <p className="font-mono text-[11px] text-muted-foreground">
                <span className="text-primary">Example:</span> {pattern.example}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
