import Image from "next/image";
import type { ProjectGalleryItem } from "@/data/projects";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type ImageGalleryProps = {
  items: ProjectGalleryItem[];
};

export function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.src ?? "placeholder"}`}
          className={`overflow-hidden rounded-lg border border-border bg-secondary/40 ${
            item.span === "wide" ? "sm:col-span-2 lg:col-span-3" : ""
          }`}
        >
          {item.src ? (
            <div className={`relative w-full ${item.span === "wide" ? "h-72 md:h-[28rem]" : "h-40"}`}>
              <Image
                src={resolveMirroredMediaSrc(item.src)}
                alt={item.alt || item.label}
                fill
                unoptimized={item.src.endsWith(".svg")}
                className={item.fit === "contain" ? "object-contain p-3" : "object-cover"}
                sizes={
                  item.span === "wide"
                    ? "100vw"
                    : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                }
              />
            </div>
          ) : (
            <div className="h-40 w-full bg-secondary" />
          )}
          <p className="px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
