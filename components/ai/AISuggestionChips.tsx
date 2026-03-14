"use client";

type AISuggestionChipsProps = {
  title?: string;
  suggestions: string[];
  onSelect?: (value: string) => void;
};

export function AISuggestionChips({
  title = "Suggestions",
  suggestions,
  onSelect,
}: AISuggestionChipsProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => onSelect?.(suggestion)}
            className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </section>
  );
}
