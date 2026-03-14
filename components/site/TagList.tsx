type TagListProps = {
  tags: string[];
  className?: string;
};

export function TagList({ tags, className = "" }: TagListProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
