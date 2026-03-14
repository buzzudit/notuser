"use client";

type AIWorkflowHelperProps = {
  title?: string;
  stage: string;
  inputs: string[];
  output: string;
};

export function AIWorkflowHelper({
  title = "Workflow assist",
  stage,
  inputs,
  output,
}: AIWorkflowHelperProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
        {title}
      </p>
      <p className="mt-2 text-sm text-foreground">
        Current stage: <span className="font-medium">{stage}</span>
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="rounded-md border border-border/70 bg-secondary/30 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Inputs
          </p>
          <ul className="mt-2 space-y-1">
            {inputs.map((input) => (
              <li key={input} className="text-xs text-muted-foreground">
                - {input}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-border/70 bg-secondary/30 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Output
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{output}</p>
        </div>
      </div>
    </section>
  );
}
