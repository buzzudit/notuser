import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { IntentAudienceBanner } from "@/components/site/intent/IntentAudienceBanner";
import { UkrSessionBridge } from "@/components/site/intent/UkrSessionBridge";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { ContactReasons } from "@/components/site/ContactReasons";
import { ContactForm } from "@/components/site/ContactForm";
import { ContentCard } from "@/components/site/ContentCard";
import { contactReasons, directContact } from "@/data/site";
import {
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
  return buildUkrScopedMetadata("/contact", searchParams);
}

export default async function ContactPage({ searchParams }: PageProps) {
  const cookieStore = await cookies();
  const intentState = await resolveUkrExperience({
    searchParams,
    cookieCode: cookieStore.get(UKR_COOKIE_NAME)?.value ?? null,
  });
  const activeIntent = intentState.activeIntent;
  const fitTarget = activeIntent ? getIntentRoleSummary(activeIntent) : null;
  const contactHeading = activeIntent
    ? `The fastest path for the ${fitTarget} conversation`
    : "The fastest path for hiring and leadership conversations";
  const contactDescription = activeIntent
    ? `Share what matters for ${fitTarget}, and I will respond with the most relevant next step, whether that is a conversation, a resume review, or a focused portfolio walkthrough.`
    : "Share the role, team, or problem space and I'll respond with the most relevant next step, whether that is a conversation, a resume review, or a focused portfolio walkthrough.";
  const messagePlaceholder = activeIntent
    ? `Share what matters for ${fitTarget}, the team context, or the challenge and I will reply with the most relevant next step.`
    : "Share the role, challenge, or context and I will reply with the most relevant next step.";
  const introText = activeIntent
    ? `This form is already tuned for ${fitTarget}. The more context you share about the role, team, and decision criteria, the more useful my response will be.`
    : "Use this form for hiring conversations, AI transformation work, portfolio deep dives, or strategy discussions. The more context you share, the more useful my response can be.";

  return (
    <PageLayout>
      <UkrSessionBridge
        persistCode={intentState.shouldPersistQueryCode ? activeIntent?.code ?? null : null}
        clearInvalid={intentState.shouldClearCookie}
      />
      <SectionShell>
        {activeIntent ? (
          <div className="mb-6">
            <IntentAudienceBanner intentLink={activeIntent} />
          </div>
        ) : null}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.95fr)] lg:items-start">
          <div>
            <div className="rounded-xl border border-border bg-card p-5 md:p-6">
              <SectionLabel>Send a message</SectionLabel>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                {contactHeading}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {contactDescription}
              </p>
              <div className="mt-3">
                <ContactForm
                  initialCompany={activeIntent?.org ?? ""}
                  messagePlaceholder={messagePlaceholder}
                  introText={introText}
                />
              </div>
            </div>
          </div>

          <ContentCard hoverable={false} className="rounded-2xl">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Direct contact
            </p>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Email</p>
                <Link
                  href={`mailto:${directContact.email}`}
                  className="mt-1 inline-flex items-center text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {directContact.email}
                </Link>
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <Link
                  href={directContact.locationHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {directContact.locationLabel}
                </Link>
              </div>
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <Link
                  href={directContact.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  View profile
                </Link>
              </div>
              <p className="border-t border-border pt-4 leading-relaxed">
                {directContact.availability}
              </p>
            </div>
          </ContentCard>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionLabel>Best fit conversations</SectionLabel>
        <SectionHeading>
          {activeIntent
            ? `Conversations likely to matter for ${activeIntent.org}`
            : "Conversations that are likely to be most relevant"}
        </SectionHeading>
        <SectionDescription>
          {activeIntent
            ? `This page is tuned for a closer conversation about ${fitTarget}, including leadership, transformation, and how I operate across complex product work.`
            : "This page is most useful when the conversation involves leadership, transformation, or a closer read of how I operate across complex product work."}
        </SectionDescription>
        <div className="mt-8">
          <ContactReasons reasons={contactReasons} />
        </div>
      </SectionShell>
    </PageLayout>
  );
}
