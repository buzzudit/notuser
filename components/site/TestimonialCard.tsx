import Image from "next/image";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  photoSrc?: string;
};

export function TestimonialCard({ quote, author, role, photoSrc }: TestimonialCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/20">
      <span className="mb-3 font-serif text-3xl leading-none text-primary/50" aria-hidden="true">
        &ldquo;
      </span>
      <p className="flex-1 text-sm leading-relaxed text-foreground/90">{quote}</p>
      <div className="mt-4 border-t border-border/50 pt-4">
        {photoSrc ? (
          <div className="mb-3 h-12 w-12 overflow-hidden rounded-full border border-border/60 bg-secondary/40">
            <Image
              src={resolveMirroredMediaSrc(photoSrc)}
              alt={`${author} profile photo`}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
        <p className="text-sm font-medium text-foreground">{author}</p>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{role}</p>
      </div>
    </article>
  );
}
