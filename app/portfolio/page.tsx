import type { Metadata } from "next";
import { cookies } from "next/headers";
import { UkrSessionBridge } from "@/components/site/intent/UkrSessionBridge";
import { PortfolioPageContent } from "@/components/site/portfolio/PortfolioPageContent";
import {
  buildUkrScopedMetadata,
  resolveUkrExperience,
  UKR_COOKIE_NAME,
} from "@/lib/site/ukrLinks";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  return buildUkrScopedMetadata("/portfolio", searchParams);
}

export default async function PortfolioPage({ searchParams }: PageProps) {
  const cookieStore = await cookies();
  const intentState = await resolveUkrExperience({
    searchParams,
    cookieCode: cookieStore.get(UKR_COOKIE_NAME)?.value ?? null,
  });
  const activeIntent = intentState.activeIntent;

  return (
    <>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <PortfolioPageContent
        audienceProfile={
          activeIntent
            ? {
                code: activeIntent.code,
                company: activeIntent.org,
                position: activeIntent.positionTitle,
                positionUrl: activeIntent.positionUrl,
                intentType: activeIntent.intentType,
                notes: activeIntent.notes,
              }
            : null
        }
      />
    </>
  );
}
