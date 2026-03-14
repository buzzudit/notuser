"use client";

type PromptExamplesProps = {
  prompts: string[];
  onSelect: (prompt: string) => void;
};

export function PromptExamples({ prompts, onSelect }: PromptExamplesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          type="button"
          onClick={() => onSelect(prompt)}
          className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
