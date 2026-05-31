import type { Metadata } from "next";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { PeoplePageContent } from "@/components/site/people/PeoplePageContent";
import { people } from "@/data/people";
import { projects } from "@/data/projects";
import { buildSiteMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "People",
  description:
    "A visual map of collaborators, leaders, designers, product partners, and engineers connected to Udit Khandelwal's portfolio work.",
  pathname: "/people",
  keywords: [
    "Udit Khandelwal collaborators",
    "design leadership network",
    "product collaborators",
    "portfolio collaborators",
  ],
});

export default function PeoplePage() {
  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>People</SectionLabel>
        <SectionHeading>Collaborators behind the work</SectionHeading>
        <SectionDescription>
          A visual directory of people connected through projects, leadership
          work, product partnerships, design craft, and engineering execution.
        </SectionDescription>
      </SectionShell>

      <SectionShell className="pt-0">
        <PeoplePageContent people={people} projects={projects} />
      </SectionShell>
    </PageLayout>
  );
}
