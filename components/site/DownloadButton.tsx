import Link from "next/link";
import { Download } from "lucide-react";

type DownloadButtonProps = {
  href: string;
  label?: string;
};

export function DownloadButton({ href, label = "Download resume" }: DownloadButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <Download size={14} />
      {label}
    </Link>
  );
}
