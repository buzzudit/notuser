"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import type { Trial } from "@/data/trials";

type TrialCardProps = {
  trial: Trial;
};

export function TrialCard({ trial }: TrialCardProps) {
  return (
    <Link
      href={`/lab/${trial.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="relative h-64 border-b border-border bg-secondary/40">
        <Image
          src={trial.thumbnail}
          alt={trial.title}
          fill
          unoptimized={trial.thumbnail.endsWith(".svg")}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          <FlaskConical size={14} />
          {trial.entityLabel}
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            {trial.status} - {trial.year}
          </p>
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
            Idea <ArrowUpRight size={14} />
          </span>
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          {trial.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {trial.summary}
        </p>
        <div className="mt-4 rounded-lg border border-border/70 bg-secondary/30 p-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
            Core belief
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {trial.hypothesis}
          </p>
        </div>
      </div>
    </Link>
  );
}
