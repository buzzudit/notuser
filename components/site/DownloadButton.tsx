import Link from "next/link";

type DownloadButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export function DownloadButton({ href, label = "Download resume", className }: DownloadButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-lg px-4 py-2 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground ${className ?? ""}`.trim()}
    >
      {label}
    </Link>
  );
}
