type ImageGalleryProps = {
  items: string[];
};

export function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-lg border border-border bg-secondary/50 p-4"
          role="img"
          aria-label={item}
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {item}
          </p>
          <div className="mt-3 h-24 rounded-md bg-secondary" />
        </div>
      ))}
    </div>
  );
}
