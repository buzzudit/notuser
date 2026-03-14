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
import { AISuggestionChips } from "@/components/ai/AISuggestionChips";
import { AIWorkflowHelper } from "@/components/ai/AIWorkflowHelper";
import { AIPatternExplorer } from "@/components/ai/AIPatternExplorer";

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
          <AISuggestionChips
            title="Contextual suggestions"
            suggestions={circlePrompts}
            onSelect={setSelectedPrompt}
          />
          <PromptExamples prompts={circlePrompts} onSelect={setSelectedPrompt} />
          <AIWorkspace prefill={selectedPrompt} />
          <AIWorkflowHelper
            stage="Prompt to workflow translation"
            inputs={[
              "Clear problem framing",
              "Useful context and constraints",
              "Expected output format",
            ]}
            output="A reusable prompt pattern that can be embedded in a team workflow."
          />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>AI Workflow Steps</SectionLabel>
        <AIWorkflowCards steps={aiWorkflowSteps} />
        <div className="mt-4">
          <AIPatternExplorer
            patterns={[
              {
                name: "Suggestion chips",
                whenToUse: "When users need fast starting points instead of blank input states.",
                value: "Reduces interaction friction and improves first-run engagement.",
              },
              {
                name: "Workflow assist",
                whenToUse: "When prompts need structured inputs and expected output guidance.",
                value: "Improves output quality and repeatability across teams.",
              },
              {
                name: "Pattern explorer",
                whenToUse: "When teaching non-experts how to choose the right AI UX pattern.",
                value: "Builds shared understanding and speeds onboarding.",
              },
            ]}
          />
        </div>
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
