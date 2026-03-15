# Storytelling Template Guide
## How to write portfolio case studies as narratives

> **Goal:** Make a hiring manager or recruiter feel the work, not just read about it.
> A narrative case study answers "what was it like to be you on this project?" — not just "what did you ship?"

---

## The Core Principle

Most portfolio case studies read like incident reports. They describe what happened but not what it *meant*. They list deliverables but skip the tension, the decisions, the moments that defined the outcome.

Narrative case studies work differently. They put the reader inside the problem. They have stakes, turning points, and a protagonist (you) who exercised judgment under pressure. That is what impresses a hiring manager — not that you shipped, but *how* you thought.

---

## The 5-Part Story Arc

Every narrative case study should follow this arc, even loosely:

```
Hook → Act(s) → Pivot → Resolution → Lessons
```

### 1. Hook
**What it is:** A single sentence or two that opens with the human or business reality — *before* you appeared.

**Purpose:** Earns the reader's attention in the first 10 seconds.

**Formula:** `[Broken state of the world] + [Scale or stakes]`

**Examples:**
- "Thousands of referrals left athenahealth's network every day. Most of them disappeared."
- "The data pipeline ran every night. Nobody knew what it actually exported."
- "Every engineer had their own way of shipping. Nobody agreed on what 'done' meant."

**Avoid:**
- Starting with your title or role
- Starting with what you built
- Starting with a metric

---

### 2. Acts (1–3)
**What they are:** The body of the story — the situation you inherited, the problems you diagnosed, the work you did.

**Each act has:**
| Element | Description |
|---|---|
| `chapter` | Label like `Act 1 · The Broken Loop` — sets tone and pacing |
| `title` | A plain prose subtitle — what this section is actually about |
| `prose[]` | Narrative paragraphs in first-person, active voice |
| `callout` (optional) | A boxed aside — stakes, principles, constraints |
| `options[]` (optional) | A decision comparison card — Path A vs Path B |

**Act structure to aim for:**
- **Act 1 — The World Before:** What existed, why it wasn't working, what was at stake. Ground the reader in the problem viscerally.
- **Act 2 — The Architecture/Strategic Crossroads:** The decision or diagnosis that changed everything. Show the options you considered and why you chose what you did.
- **Act 3 — The Hard Part Nobody Talks About:** The edge case, the detail, the workflow scenario that could have broken everything. This is your expertise signal.

**Writing guidelines for prose:**
- Use short sentences for emphasis. "Then nothing." lands harder than a five-clause compound sentence.
- Write in first person: "I recommended," "I designed," "I owned."
- Name specific things: components, metrics, timeframes, systems. Specificity signals credibility.
- One idea per paragraph. Let white space work for you.
- Vary paragraph length intentionally. A one-sentence paragraph after three long ones creates emphasis.

---

### 3. Pivot
**What it is:** The single most important design or strategy decision — the one that most directly changed how users experienced the product.

**Purpose:** Shows taste and judgment. This is often where leadership signals live.

**Formula:** `[What the old way required users to do] + [What you eliminated or automated] + [The principle behind the decision]`

**Examples:**
- Smart Delivery: removed routing decisions from care coordinators entirely
- A default that removed a choice users were making incorrectly 99% of the time
- A progressive disclosure pattern that hid complexity users didn't need at step one

**Use a callout here** to surface the design principle — the transferable insight that shows how you think, not just what you shipped.

---

### 4. Resolution
**What it is:** What shipped, what changed, what it meant.

**Structure:**
1. 2–3 prose paragraphs narrating the outcome (not bullet points)
2. A **highlight** — the one sentence that captures the *real* measure of success

**The highlight is the most important sentence in the case study.** It should:
- Be quotable
- Capture the human/workflow outcome, not the technical metric
- Show that you understand the difference between system performance and actual impact

**Examples:**
- "The measure of success wasn't uptime. It was care coordinators who stopped picking up the phone."
- "We didn't ship a feature. We shipped the last excuse for not doing the thing everyone had been avoiding."
- "The dashboard got 40% fewer support tickets. Users didn't notice because there was nothing left to be confused about."

---

### 5. Lessons Carried Forward
**What they are:** 3–5 insights you took from this project to future work.

**These are NOT:**
- Generic best practices
- Things every PM/designer already knows
- Restatements of what you did

**They ARE:**
- Specific to this project's challenges
- Applicable to future, similar problems
- Evidence of metacognition — you don't just do the work, you understand it

**Formula:** `[Specific observation from this project] + [The transferable principle it revealed]`

**Example:**
> "The right architectural decision and the right product decision are not always the same. Know which one you're making."

That's stronger than: "It's important to balance technical and product considerations."

---

## The Data Structure

To add a narrative to any project, add the `narrative` field to its data file:

```typescript
import { Project } from "../types/project";

export const project: Project = {
  // ... existing fields ...
  narrative: {
    hook: "One or two sentences. The world before you. Stakes or scale.",
    acts: [
      {
        id: "unique-id-for-anchor-links",
        chapter: "Act 1 · [Short evocative label]",
        title: "Plain prose description of what this act covers",
        prose: [
          "First paragraph. Set the scene.",
          "Second paragraph. Deepen the problem.",
          "Third paragraph. Show where you entered.",
        ],
        callout: {                          // optional
          label: "What was at stake",
          text: "The callout text. One or two sentences.",
        },
        options: [                         // optional — for decision moments
          {
            label: "Path One: [Name]",
            detail: "Timeline · Approach · Risk · Status",
          },
          {
            label: "Path Two: [Name]",
            detail: "Timeline · Approach · Risk · Status",
          },
        ],
      },
      // Add Act 2, Act 3...
    ],
    pivot: {
      chapter: "The Pivot · [Label]",
      title: "The principle or decision in plain language",
      prose: [
        "What the old state required.",
        "What you changed and why.",
        "The principle this revealed.",
      ],
      callout: {                           // optional
        label: "Design principle",
        text: "The transferable insight.",
      },
    },
    resolution: {
      prose: [
        "What shipped.",
        "What changed for users or the business.",
        "The timeline or scale context.",
      ],
      highlight: "The one sentence that captures the real measure of success.",
    },
  },
};
```

---

## Page Rendering

When `project.narrative` is present, the portfolio detail page (`app/portfolio/[slug]/page.tsx`) automatically renders the narrative layout instead of the generic section layout.

- The **side nav** updates to show "Story arc" with chapter-based anchor links
- Each **act** renders with chapter label, title, prose, optional decision cards, and optional callouts
- The **pivot** renders as a visually distinct section
- The **resolution** closes with the highlight pull quote
- **Lessons** render as a 2-column card grid after the narrative

Projects without a `narrative` field continue to use the existing generic layout — no migration required.

---

## Checklist Before Publishing

- [ ] Hook opens on the world *before* you — not on your role
- [ ] At least one act includes a specific decision (not just what you did)
- [ ] At least one act includes edge cases or hard problems, not just the happy path
- [ ] The pivot reveals a design principle, not just a feature
- [ ] The highlight sentence captures a workflow or human outcome, not a KPI
- [ ] Lessons are specific, not generic
- [ ] All prose is first-person, active voice
- [ ] No section is just a restatement of another section

---

## Reference: 360X Closed Loop Referrals

The `data/projects/360x-closed-loop-referrals.ts` file is the canonical example of this template applied. Key techniques used there:

| Technique | Where |
|---|---|
| Human-stakes hook (patients, not systems) | `narrative.hook` |
| Short-sentence punch ("Then nothing.") | Act 1, prose[1] |
| Named components for credibility (ReferralTracker.pm, Message.pm) | Act 2 prose |
| Decision comparison cards (10 weeks vs 24 weeks) | Act 2 options |
| Edge-case depth (referral ID unhooking) | Act 3 |
| Principle surfaced in callout | Act 2 + Pivot callout |
| Human outcome in highlight (coordinators, not uptime) | resolution.highlight |
| Transferable lessons not restating the work | lessons[] |
