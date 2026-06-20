import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/site/Providers";
import { siteConfig } from "@/lib/site/content";
import {
  buildSiteMetadata,
  getPersonJsonLd,
  safeJsonLd,
} from "@/lib/site/metadata";
import { ThemeProvider } from "@/contexts/ThemeContext";

const rootMetadata = buildSiteMetadata({
  title: "Udit Khandelwal",
  description: siteConfig.description,
  pathname: "/",
  image: "/images/udit-bw.png",
  imageAlt: "Black and white portrait of Udit Khandelwal",
  keywords: [
    "Udit Khandelwal",
    "design leadership",
    "AI-first product strategy",
    "enterprise UX",
    "healthcare technology",
  ],
});

export const metadata: Metadata = {
  ...rootMetadata,
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: "_ZRpXlJOip2gmGVNGKG-IhUDKDL7axiMt0RffO7JvM8",
  },
  title: {
    default: "Udit Khandelwal | notuser",
    template: `%s | ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(getPersonJsonLd()) }}
        />
        <ThemeProvider>
          <Providers />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
