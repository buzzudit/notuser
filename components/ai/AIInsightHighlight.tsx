"use client";

import { Sparkles } from "lucide-react";

type AIInsightHighlightProps = {
  title: string;
  insight: string;
  context?: string;
};

export function AIInsightHighlight({
  title,
  insight,
  context,
}: AIInsightHighlightProps) {
  return (
    <aside className="rounded-xl border border-primary/30 bg-primary/5 p-4">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-primary" />
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
          {title}
        </p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{insight}</p>
      {context ? <p className="mt-2 text-xs text-muted-foreground">{context}</p> : null}
    </aside>
  );
}
