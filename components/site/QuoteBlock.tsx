type QuoteBlockProps = {
  quote: string;
  author: string;
  role: string;
};

export function QuoteBlock({ quote, author, role }: QuoteBlockProps) {
  return (
    <figure className="rounded-xl border border-border bg-secondary/40 p-5 pl-6 border-l-2 border-l-primary/50">
      <blockquote className="text-base leading-relaxed text-foreground">
        {quote}
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span>
        <span className="mx-1.5 text-border">·</span>
        {role}
      </figcaption>
    </figure>
  );
}
