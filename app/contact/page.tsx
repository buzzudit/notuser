"use client";

import Link from "next/link";
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

export default function ContactPage() {
  return (
    <PageLayout>
      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.95fr)] lg:items-start">
          <div>
            <div className="rounded-xl border border-border bg-card p-5 md:p-6">
              <SectionLabel>Send a message</SectionLabel>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                The fastest path for hiring and leadership conversations
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Share the role, team, or problem space and I&apos;ll respond with the
                most relevant next step, whether that is a conversation, a resume
                review, or a focused portfolio walkthrough.
              </p>
              <div className="mt-3">
                <ContactForm />
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
        <SectionHeading>Conversations that are likely to be most relevant</SectionHeading>
        <SectionDescription>
          This page is most useful when the conversation involves leadership,
          transformation, or a closer read of how I operate across complex product work.
        </SectionDescription>
        <div className="mt-8">
          <ContactReasons reasons={contactReasons} />
        </div>
      </SectionShell>
    </PageLayout>
  );
}
