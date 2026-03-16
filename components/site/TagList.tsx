type TagListProps = {
  tags: string[];
  brandTag?: string;
  className?: string;
};

const BRAND_TAG_STYLES: Record<string, string> = {
  athenahealth: "border-[#0072ce]/45 bg-[#0072ce]/14 text-[#0b4f9f]",
  adobe: "border-[#ff0000]/45 bg-[#ff0000]/14 text-[#a50000]",
  zivame: "border-[#e0007a]/45 bg-[#e0007a]/14 text-[#9f0056]",
  cisco: "border-[#1ba0d7]/45 bg-[#1ba0d7]/14 text-[#0b6f98]",
  kaseya: "border-[#e31c24]/45 bg-[#e31c24]/14 text-[#991319]",
  appliedmaterials: "border-[#0056a7]/45 bg-[#0056a7]/14 text-[#0a3d75]",
  independent: "border-[#64748b]/45 bg-[#64748b]/14 text-[#334155]",
};

function normalizeTag(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function TagList({ tags, brandTag, className = "" }: TagListProps) {
  const normalizedBrand = brandTag ? normalizeTag(brandTag) : null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide ${
            normalizedBrand && normalizeTag(tag) === normalizedBrand
              ? BRAND_TAG_STYLES[normalizedBrand] ??
                "border-primary/45 bg-primary/12 text-primary"
              : "border-border bg-card text-muted-foreground"
          }`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
