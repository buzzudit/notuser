import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPageContent } from "@/components/site/portfolio/PortfolioPageContent";
import { buildNoIndexMetadata } from "@/lib/site/metadata";
import {
  getPortfolioShareLinkByCode,
  isValidPortfolioShareCode,
  normalizePortfolioShareCode,
} from "@/lib/site/portfolioShareLinks";

type SharePortfolioPageProps = {
  params: Promise<{ shareCode: string }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildNoIndexMetadata({
  title: "Private Portfolio Selection",
  pathname: "/portfolio",
  description:
    "A private portfolio selection from Udit Khandelwal for design leadership and product conversations.",
  image: "/images/udit-bw.png",
  imageAlt: "Black and white portrait of Udit Khandelwal",
});

export default async function SharePortfolioPage({ params }: SharePortfolioPageProps) {
  const { shareCode } = await params;
  const normalizedCode = normalizePortfolioShareCode(shareCode);

  if (!isValidPortfolioShareCode(normalizedCode)) {
    notFound();
  }

  const shareLink = await getPortfolioShareLinkByCode(normalizedCode, { activeOnly: true });
  if (!shareLink) {
    notFound();
  }

  return <PortfolioPageContent audienceProfile={shareLink} />;
}
