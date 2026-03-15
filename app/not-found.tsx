import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/site/layout/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex flex-1 items-center justify-center py-32">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ArrowLeft size={14} /> Return home
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
