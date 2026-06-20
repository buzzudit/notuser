import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/site/layout/PageLayout";
import { buildSiteMetadata } from "@/lib/site/metadata";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";

export const metadata: Metadata = {
  ...buildSiteMetadata({
    title: "About Personalization",
    pathname: "/about-personalization",
    description:
      "How notuser.com uses ukr links and a first-party cookie for on-site personalization.",
    keywords: [
      "notuser personalization",
      "ukr links",
      "hiring context",
      "first-party cookie",
    ],
  }),
};

const explanationPoints = [
  {
    title: "How `ukr` links work",
    body:
      "Some links include a short code like `?ukr=abc`. That code points to hiring context such as organization, role title, and visit intent.",
  },
  {
    title: "What cookie gets set",
    body:
      "When a valid `ukr` link is used, the site stores a first-party cookie so the same context can carry across pages.",
  },
  {
    title: "What information is stored",
    body:
      "The cookie supports role-intent context only. It is used to remember a short code tied to hiring context, not personal identity, account information, or cross-site browsing history.",
  },
  {
    title: "How long it lasts",
    body:
      "The cookie lasts up to 60 days unless a newer valid `ukr` visit replaces it or you remove it earlier.",
  },
  {
    title: "Why it exists",
    body:
      "Its purpose is to tailor on-site messaging and AI prompts to a specific hiring conversation or role context.",
  },
  {
    title: "What it does not do",
    body:
      "This personalization is not used for third-party advertising, cross-site tracking, or sharing your activity with outside data brokers or ad platforms.",
  },
];

const storedData = [
  "organization",
  "position title",
  "source role URL",
  "intent type",
  "notes about the hiring context",
  "the 3-letter `ukr` code that maps to that context",
];

const optOutSteps = [
  "clear this site's cookies in your browser",
  "open the site without a `ukr` link after clearing cookies",
  "use a private browsing window if you prefer not to keep the cookie between visits",
];

export default function AboutPersonalizationPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Transparency</SectionLabel>
        <SectionHeading>About personalization</SectionHeading>
        <SectionDescription>
          This site may tailor some content when you arrive through a `ukr` link
          tied to a hiring conversation. Here is what that means.
        </SectionDescription>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {explanationPoints.map((item) => (
            <section key={item.title} className="rounded-xl border border-border bg-card p-5 md:p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </section>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <section className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Stored context
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              What the site may remember
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A valid `ukr` visit can map to role context so the site stays
              relevant as you move between pages.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {storedData.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border/80 bg-background px-4 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Opt out
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              How to remove it
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {optOutSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-medium text-foreground">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Questions about how the site handles personalization can be sent through{" "}
              <Link
                href="/contact"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                the contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </SectionShell>
    </PageLayout>
  );
}
