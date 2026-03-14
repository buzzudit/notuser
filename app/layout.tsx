import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "notuser",
  description: "Minimal Next.js + Prisma + PostgreSQL starter for Railway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
