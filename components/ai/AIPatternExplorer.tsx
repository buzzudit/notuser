"use client";

import { useState } from "react";

type Pattern = {
  name: string;
  whenToUse: string;
  value: string;
};

type AIPatternExplorerProps = {
  patterns: Pattern[];
};

export function AIPatternExplorer({ patterns }: AIPatternExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = patterns[activeIndex];

  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        Pattern explorer
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {patterns.map((pattern, index) => (
          <button
            key={pattern.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
              index === activeIndex
                ? "border-primary/50 bg-primary/10 text-foreground"
                : "border-border bg-secondary/30 text-muted-foreground hover:text-foreground"
            }`}
          >
            {pattern.name}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-md border border-border/70 bg-secondary/30 p-3">
        <p className="text-sm font-medium text-foreground">{active.name}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">When:</span> {active.whenToUse}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Value:</span> {active.value}
        </p>
      </div>
    </section>
  );
}
