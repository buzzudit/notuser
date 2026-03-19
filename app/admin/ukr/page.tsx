import type { Metadata } from "next";
import { UkrLinkAdmin } from "@/components/site/admin/UkrLinkAdmin";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";

export const metadata: Metadata = {
  title: "UKR Admin",
  alternates: {
    canonical: "/admin/ukr",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default function UkrAdminPage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Admin</SectionLabel>
        <SectionHeading>Manage `ukr` hiring-intent links</SectionHeading>
        <SectionDescription>
          Internal tool for generating and deactivating personalized hiring links.
          This page is intentionally hidden from navigation and search indexing.
        </SectionDescription>
        <div className="mt-8">
          <UkrLinkAdmin />
        </div>
      </SectionShell>
    </PageLayout>
  );
}
