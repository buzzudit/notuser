"use client";

import { useState } from "react";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { PageLayout } from "@/components/site/layout/PageLayout";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
  SectionShell,
} from "@/components/site/SectionShell";
import { PromptExamples } from "@/components/site/PromptExamples";
import { AIWorkflowCards } from "@/components/site/AIWorkflowCards";
import { CallToAction } from "@/components/site/CallToAction";
import { aiWorkflowSteps, circlePrompts } from "@/data/site";

export default function CirclePage() {
  const [selectedPrompt, setSelectedPrompt] = useState("");

  return (
    <PageLayout>
      <SectionShell>
        <SectionLabel>Circle</SectionLabel>
        <SectionHeading>Prompt playground for AI-first workflows</SectionHeading>
        <SectionDescription>
          Explore example prompts, experiment quickly, and see a repeatable AI
          workflow model from framing to execution.
        </SectionDescription>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionLabel>Prompt Examples</SectionLabel>
        <div className="space-y-4">
          <PromptExamples prompts={circlePrompts} onSelect={setSelectedPrompt} />
          <AIWorkspace prefill={selectedPrompt} />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>AI Workflow Steps</SectionLabel>
        <AIWorkflowCards steps={aiWorkflowSteps} />
      </SectionShell>

      <SectionShell>
        <CallToAction
          title="Want custom prompts for your team?"
          description="I can help design a workflow-specific prompt system and operating playbook."
          primaryLabel="Request a session"
          primaryHref="/contact"
          secondaryLabel="View portfolio"
          secondaryHref="/portfolio"
        />
      </SectionShell>
    </PageLayout>
  );
}
