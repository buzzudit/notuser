"use client";

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
import { contactReasons, socialLinks } from "@/data/site";

export default function ContactPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Contact</SectionLabel>
        <SectionHeading>Let&apos;s work together</SectionHeading>
        <SectionDescription>
          If you&apos;re designing AI-first workflows or scaling product outcomes,
          I&apos;d love to hear what you&apos;re building.
        </SectionDescription>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionLabel>Reasons to reach out</SectionLabel>
        <ContactReasons reasons={contactReasons} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-5">
            <SectionLabel>Send a message</SectionLabel>
            <div className="mt-3">
              <ContactForm />
            </div>
          </div>

          <aside className="rounded-xl border border-border bg-card p-5">
            <SectionLabel>Social</SectionLabel>
            <p className="mb-3 text-sm text-muted-foreground">
              Prefer social channels? Reach out here.
            </p>
            <SocialLinks links={socialLinks} />
          </aside>
        </div>
      </SectionShell>
    </PageLayout>
  );
}
