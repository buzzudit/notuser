type ContactReasonsProps = {
  reasons: string[];
};

export function ContactReasons({ reasons }: ContactReasonsProps) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {reasons.map((reason) => (
        <li
          key={reason}
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
        >
          {reason}
        </li>
      ))}
    </ul>
  );
}
