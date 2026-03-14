"use client";

type AIThinkingPromptsProps = {
  prompts: string[];
};

export function AIThinkingPrompts({ prompts }: AIThinkingPromptsProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        Thinking prompts
      </p>
      <ul className="mt-3 space-y-2">
        {prompts.map((prompt) => (
          <li
            key={prompt}
            className="rounded-md border border-border/70 bg-secondary/30 px-3 py-2 text-sm text-muted-foreground"
          >
            {prompt}
          </li>
        ))}
      </ul>
    </section>
  );
}
