"use client";

import { useState } from "react";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import {
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

type CirclePageContentProps = {
  fitTarget: string | null;
  org: string | null;
  intentContext: string | null;
};

export function CirclePageContent({
  fitTarget,
  org,
  intentContext,
}: CirclePageContentProps) {
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const circleContext = [
    "Circle page for trying prompt ideas related to AI-first product workflows.",
    intentContext ?? "",
  ]
    .filter(Boolean)
    .join("\n\n");
  const helperText = fitTarget
    ? `Select a prompt starter or write your own to generate a response for the ${fitTarget} conversation.`
    : "Select a prompt starter or write your own to generate a response.";
  const ctaTitle = org ? `Want custom prompts for ${org}?` : "Want custom prompts for your team?";
  const ctaDescription = fitTarget
    ? `I can help design a workflow-specific prompt system and operating playbook relevant to ${fitTarget}.`
    : "I can help design a workflow-specific prompt system and operating playbook.";

  return (
    <>
      <SectionShell className="pt-0">
        <SectionLabel>Prompt Examples</SectionLabel>
        <div className="space-y-4">
          <AISuggestionChips
            suggestions={circlePrompts.map((prompt) => ({ label: prompt }))}
            onSelect={(suggestion) => setSelectedPrompt(suggestion.label)}
          />
          <PromptExamples prompts={circlePrompts} onSelect={setSelectedPrompt} />
          <AIWorkspace
            prefill={selectedPrompt}
            autoSubmitOnPrefill
            page="circle"
            context={circleContext}
            helperText={helperText}
          />
          <AIWorkflowHelper
            actions={[
              {
                label: "Frame the prompt",
                description: "Define task, context, constraints, and output format.",
                result: [
                  "Clarify the exact decision this prompt supports.",
                  "Add domain constraints and source-of-truth inputs.",
                  "State output structure for easier downstream use.",
                ],
              },
              {
                label: "Operationalize the workflow",
                description: "Turn one-off prompts into reusable team routines.",
                result: [
                  "Assign owners for prompt quality and review loops.",
                  "Create acceptance checks for output reliability.",
                  "Track adoption and measurable outcomes over time.",
                ],
              },
            ]}
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
                category: "Discovery",
                description:
                  "Provide immediate high-signal starting points when users face blank input states.",
                example: "Summarize this project, compare options, identify risks.",
              },
              {
                name: "Workflow assist",
                category: "Execution",
                description:
                  "Guide teams through repeatable prompt-to-output steps with explicit checkpoints.",
                example: "Frame -> Generate -> Review -> Instrument.",
              },
              {
                name: "Pattern explorer",
                category: "Enablement",
                description:
                  "Help non-experts choose the right AI interaction pattern for each product moment.",
                example: "Use summaries for orientation and inline actions for depth.",
              },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell>
        <CallToAction
          title={ctaTitle}
          description={ctaDescription}
          primaryLabel="Request a session"
          primaryHref="/contact"
          secondaryLabel="View portfolio"
          secondaryHref="/portfolio"
        />
      </SectionShell>
    </>
  );
}
