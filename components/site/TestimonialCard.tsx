type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <p className="text-sm leading-relaxed text-foreground">&quot;{quote}&quot;</p>
      <p className="mt-3 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span> - {role}
      </p>
    </article>
  );
}
