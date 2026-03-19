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
    <article className="relative flex flex-col overflow-hidden rounded-xl bg-card px-5 pb-5 pt-10">
      <span
        className="pointer-events-none absolute left-3 -top-5 font-serif text-[14rem] leading-[1.2] text-primary"
        style={{ opacity: 0.1 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="relative z-10 mt-5 flex-1 text-sm leading-relaxed text-foreground/90">{quote}</p>
      <div className="relative z-10 mt-4 border-t border-border/50 pt-4">
        {photoSrc ? (
          <div className="mb-3 h-12 w-12 overflow-hidden rounded-full bg-secondary/40">
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
        {role ? (
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
            {role}
          </p>
        ) : null}
      </div>
    </article>
  );
}
