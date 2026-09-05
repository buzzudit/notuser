import { Project } from "../types/project";

export const project: Project = {
  id: "eebb6b68-b920-42c7-b34a-386ce2ed67bd",
  slug: "dep-nervous-system",
  title: "AI Spine",
  category: "AI Delivery Platform",
  year: "2026",
  organization: "athenahealth",
  platform: "Internal AI Platform",
  scope: "Experience direction and framework contribution",
  summary:
    "A shared framework that gives AI coding assistants the product, architecture, and standards context they otherwise lack, delivered as a working workspace each team actually opens rather than a standards document nobody reads.",
  challenge:
    "Engineers were adopting AI coding tools faster than anyone could agree on how to use them. Nothing was failing yet, which was exactly the difficulty: there was no incident to point at, no budget line to defend, and every week of waiting added another team with its own conventions to unwind later.",
  context:
    "Nothing was broken when this started. That was the point. AI-assisted delivery was spreading fast, and left alone a hundred teams would each invent their own way of working — most of it dead inside a year.\n\nThe framework grew by accretion rather than decree. Governance came first, then a six-step workflow, then the organization's real reporting hierarchy, so work rolled up the way the business already worked.\n\nTeams already running their own methods were never asked to abandon them. An adapter offered a clean migration or a live bridge that kept their own repo in sync, and externally owned skills stayed with their maintainers rather than being copied in. Absorption beat replacement, and that is why leaders with existing investments came along.\n\nTrust had to be earned mechanically. Prose rules became automated checks: locked planning artifacts, acceptance-criteria coverage, a scan for exposed patient data. One guardrail was rolled back after contact with real use.\n\nUX arrived late and changed shape doing it. Research reorganized around the topic under investigation, not the method that produced it, and discovery folded into the same change record as delivery instead of a parallel tree to reconcile later.\n\nEventually it began maintaining itself.",
  role:
    "Director, Experience Design, and UX lead on the AI Spine team. I shaped how research, design evidence, and quality gates enter an AI-assisted delivery workflow, and I shipped those changes into the framework myself rather than specifying them for someone else to build. Framework architecture and division-wide rollout were owned by partners; I was not the overall DRI.",
  process: [
    "Created a guided setup path: non-developers can start with /setup, while developers can run init.sh to configure product name, Jira keys, Bitbucket project, Confluence URLs, upstream remotes, dependencies, and seeded OpenSpec docs.",
    "Established /go as the daily entry point that pulls workspace updates, inspects the current feature state, routes the agent to the right workflow, and keeps changes committed and pushed.",
    "Defined command-level support for progress tracking, feedback intake, dep-brain contribution, KR updates, and plain-English workspace guidance across Claude Code and Codex.",
    "Packaged a six-step SDD workflow with explicit artifacts: discovery, proposal, assessment, specs, design, tasks, reviews, reconciliation, traceability, STATUS, and audit logs.",
    "Distributed reusable skills for codebase assessment, Jira drafting/build/audit, Confluence documentation, data architecture, AI evaluation, quality review, test design, Forge validation, React/Nimbus standards, and commercialization.",
    "Separated shared framework files from team-owned artifacts so teams can receive dep-brain updates without overwriting their product docs, metrics, architecture, feature specs, or backlog.",
  ],
  keyDecisions: [
    "Use a brain-and-spine model: dep-brain owns cross-team commands, schemas, scripts, and skills; dep-spine owns the team's product context and feature artifacts.",
    "Make /go the primary user experience so users do not need to remember framework steps, skill names, or OpenSpec commands.",
    "Support both Claude Code and Codex with mirrored command behavior while documenting harness-specific differences clearly.",
    "Keep governance strict but conversational: artifact gates, Jira linkage, quality reviews, traceability, and audit logs are enforced without exposing process jargon to users.",
    "Provide safe contribution paths through /contribute and /feedback so improvements can flow back into dep-brain without ad hoc Jira, branch, and PR handling.",
  ],
  outcome: [
    "Teams get a repeatable AI-assisted delivery workspace with guided setup, daily workflow routing, source-control hygiene, and shared standards.",
    "Product, UX, and engineering partners can move from idea to proposal, specification, implementation, testing, and close-out with traceable artifacts.",
    "Leadership gains clearer progress and KR visibility through progress, rollup, health, and weekly status flows.",
    "Framework improvements become reusable across DEP because dep-brain updates can sync into dep-spine workspaces while team-owned artifacts remain protected.",
    "Confluence and Jira work become part of the operating flow instead of side-channel documentation and ticket hygiene.",
  ],
  lessons: [
    "The strongest AI enablement feature is not a prompt; it is a dependable path from intent to governed delivery.",
    "Shared frameworks need firm boundaries between what updates globally and what remains team-owned.",
    "Non-developer adoption improves when setup and day-to-day actions are expressed as plain-language commands.",
    "Governance feels lighter when the system records evidence automatically and routes people to the next useful step.",
  ],
  tags: [
    "AI Spine",
    "DEP Brain",
    "DEP Spine",
    "AI Enablement",
    "Developer Experience",
    "Spec-Driven Development",
    "athenahealth",
  ],
  metrics: [
    { label: "Contribution", value: "Onboarding trust, stage gates, UX workspaces" },
    { label: "Adoption model", value: "Absorb rival frameworks, never mandate" },
    { label: "Enforcement", value: "Prose rules became automated checks" },
  ],
  gallery: [
    {
      label: "How the shared framework reaches each team workspace",
      src: "/images/projects/generated/dep-nervous-system-flow.svg",
      alt: "Flow diagram showing DEP Brain feeding setup, sync, team DEP Spine workspaces, delivery workflow, and benefits.",
      fit: "contain",
      span: "wide",
    },
  ],
  thumbnail: "/images/projects/generated/dep-nervous-system.png",
  sourceUrl: "https://www.notuser.com/portfolio/dep-nervous-system",
  isPrivate: true,
  sectionGuide: {
    problem: "Why moving early was the hard part",
    context: "From governance to a system that runs itself",
    role: "What was mine, and what partners owned",
    process: "Guided setup, a daily entry point, safe contribution",
    decisions: "Brain and spine, one command, governance without jargon",
    outcome: "What teams and leaders can do now",
    lessons: "What transfers to any shared framework",
  },
};
