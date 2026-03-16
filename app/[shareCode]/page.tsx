import { notFound } from "next/navigation";
import { PortfolioPageContent } from "@/components/site/portfolio/PortfolioPageContent";
import {
  getPortfolioShareLinkByCode,
  isValidPortfolioShareCode,
  normalizePortfolioShareCode,
} from "@/lib/site/portfolioShareLinks";

type SharePortfolioPageProps = {
  params: Promise<{ shareCode: string }>;
};

export const dynamic = "force-dynamic";

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

  return <PortfolioPageContent shareProfile={shareLink} />;
}
