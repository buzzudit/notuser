"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContentCard } from "@/components/site/ContentCard";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { circleContent } from "@/lib/site/content";

export default function CirclePage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Community</SectionLabel>
        <SectionHeading>{circleContent.headline}</SectionHeading>
        <SectionDescription>{circleContent.description}</SectionDescription>
      </SectionShell>

      <SectionShell className="pt-0 md:pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {circleContent.features.map((feature) => (
            <ContentCard key={feature.title}>
              <h3 className="mb-2 text-sm font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="text-center">
        <SectionHeading>Interested?</SectionHeading>
        <p className="mx-auto mb-6 max-w-md text-sm text-muted-foreground">
          The Circle is currently invite-only. Reach out to express interest or
          request an invitation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Request access <ArrowRight size={14} />
        </Link>
      </SectionShell>
    </PageLayout>
  );
}
