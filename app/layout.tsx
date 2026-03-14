import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/site/Providers";

export const metadata: Metadata = {
  title: "notuser",
  description: "AI-first workspace experience for notuser.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers />
        {children}
      </body>
    </html>
  );
}
