type WorkflowStep = {
  title: string;
  description: string;
};

type AIWorkflowCardsProps = {
  steps: WorkflowStep[];
};

export function AIWorkflowCards({ steps }: AIWorkflowCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="rounded-xl border border-border bg-card p-5"
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
            Step {index + 1}
          </p>
          <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </article>
      ))}
    </div>
  );
}
