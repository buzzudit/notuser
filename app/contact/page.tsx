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
import { SocialLinks } from "@/components/site/SocialLinks";
import { ContentCard } from "@/components/site/ContentCard";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { contactReasons, directContact, socialLinks } from "@/data/site";

export default function ContactPage() {
  return (
    <PageLayout>
      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.95fr)] lg:items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <SectionHeading>Start a hiring or transformation conversation</SectionHeading>
            <SectionDescription>
              Best for design leadership roles, AI-first product transformation,
              portfolio deep dives, and focused strategy conversations around
              enterprise and platform work.
            </SectionDescription>
            <div className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                If you&apos;re a hiring manager, recruiter, or product leader
                assessing fit, this page is the fastest path to a direct
                conversation.
              </p>
              <p>
                I&apos;m especially relevant where product complexity, systems
                thinking, cross-functional alignment, and AI-enabled workflows
                all need to come together in a credible way.
              </p>
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
                  className="mt-1 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
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
                  className="mt-1 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
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
                  className="mt-1 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
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
        <SectionHeading>What to reach out about</SectionHeading>
        <SectionDescription>
          The strongest use of this page is for conversations where leadership,
          product judgment, and transformation work all matter.
        </SectionDescription>
        <div className="mt-8">
          <ContactReasons reasons={contactReasons} />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
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

          <aside className="space-y-4">
            <ContentCard hoverable={false}>
              <SectionLabel>AI prep</SectionLabel>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                Draft a concise outreach note before sending your message.
              </p>
              <AIWorkspace
                compact
                page="contact"
                context="Contact page focused on hiring conversations, design leadership roles, and AI transformation discussions."
                helperText="Generate a draft note, then refine and send through the contact form."
                suggestions={[
                  "Draft a hiring manager outreach note",
                  "Draft a recruiter intro message",
                  "Draft an AI transformation conversation request",
                ]}
              />
            </ContentCard>

            <ContentCard hoverable={false}>
              <SectionLabel>What helps</SectionLabel>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>The role or type of conversation you have in mind.</p>
                <p>The product, platform, or transformation challenge in scope.</p>
                <p>
                  Whether you want a portfolio deep dive, leadership discussion,
                  or hiring conversation.
                </p>
              </div>
            </ContentCard>

            <ContentCard hoverable={false}>
              <SectionLabel>Elsewhere</SectionLabel>
              <p className="mb-3 text-sm text-muted-foreground">
                Social is available, but direct email is the better path for
                hiring and portfolio conversations.
              </p>
              <SocialLinks links={socialLinks} />
            </ContentCard>
          </aside>
        </div>
      </SectionShell>
    </PageLayout>
  );
}
