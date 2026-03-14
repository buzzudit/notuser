"use client";

import type { ReactNode } from "react";
import { Header } from "@/components/site/layout/Header";
import { Footer } from "@/components/site/layout/Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1 pt-14" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
