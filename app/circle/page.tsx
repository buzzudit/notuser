import type { Metadata } from "next";
import { cookies } from "next/headers";
import { CirclePageContent } from "@/components/site/circle/CirclePageContent";
import { IntentAudienceBanner } from "@/components/site/intent/IntentAudienceBanner";
import { UkrSessionBridge } from "@/components/site/intent/UkrSessionBridge";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import {
  buildUkrIntentAiContext,
  buildUkrScopedMetadata,
  getIntentRoleSummary,
  resolveUkrExperience,
  UKR_COOKIE_NAME,
} from "@/lib/site/ukrLinks";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  return buildUkrScopedMetadata("/circle", searchParams);
}

export default async function CirclePage({ searchParams }: PageProps) {
  const cookieStore = await cookies();
  const intentState = await resolveUkrExperience({
    searchParams,
    cookieCode: cookieStore.get(UKR_COOKIE_NAME)?.value ?? null,
  });
  const activeIntent = intentState.activeIntent;
  const fitTarget = activeIntent ? getIntentRoleSummary(activeIntent) : null;

  return (
    <PageLayout>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <SectionShell>
        <SectionLabel>Circle</SectionLabel>
        <SectionHeading>Prompt playground for AI-first workflows</SectionHeading>
        <SectionDescription>
          Explore example prompts, experiment quickly, and see a repeatable AI
          workflow model from framing to execution.
        </SectionDescription>
        {activeIntent ? (
          <div className="mt-6">
            <IntentAudienceBanner intentLink={activeIntent} />
          </div>
        ) : null}
      </SectionShell>

      <CirclePageContent
        fitTarget={fitTarget}
        org={activeIntent?.org ?? null}
        intentContext={activeIntent ? buildUkrIntentAiContext(activeIntent) : null}
      />
    </PageLayout>
  );
}
