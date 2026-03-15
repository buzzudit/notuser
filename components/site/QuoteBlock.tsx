type QuoteBlockProps = {
  quote: string;
  author: string;
  role: string;
};

export function QuoteBlock({ quote, author, role }: QuoteBlockProps) {
  return (
    <figure className="rounded-xl border border-border bg-secondary/40 p-5">
      <blockquote className="text-base leading-relaxed text-foreground">
        &quot;{quote}&quot;
      </blockquote>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span> - {role}
      </figcaption>
    </figure>
  );
}
