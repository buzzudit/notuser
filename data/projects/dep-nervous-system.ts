import { Project } from "../types/project";

export const project: Project = {
  id: "eebb6b68-b920-42c7-b34a-386ce2ed67bd",
  slug: "dep-nervous-system",
  title: "DEP Nervous System",
  category: "AI Enablement, Product Strategy & Developer Experience",
  year: "2026",
  organization: "athenahealth",
  platform: "Internal AI Platform",
  scope: "AI Spine, DEP Brain, DEP Spine, SDD Governance",
  summary:
    "Created a shared AI delivery workspace system that gives DEP teams one guided front door for setup, specification, implementation, quality checks, contribution, and leadership visibility.",
  challenge:
    "DEP teams were adopting AI-assisted delivery unevenly. Product, UX, engineering, and leadership needed a repeatable way to start work, preserve governance, connect Jira and Bitbucket, maintain Confluence documentation, and keep team-specific artifacts separate from shared framework updates.",
  context:
    "AISPINE/dep-brain is the source template for team-owned dep-spine workspaces. The repo distributes commands, skills, OpenSpec schemas, scripts, and guardrails while keeping product docs, architecture, metrics, feature specs, and implementation artifacts owned by each team's dep-spine repo. Teams channels such as DEP Nervous System (Brain + Spine), AI Spine Zone Huddle, AI Spine + IDP, and Weekly AI Spine + UXR Meetup showed the cross-functional adoption surface.",
  role:
    "Director, Experience Design and UX leader for the AI Spine team. I set the direction for how UX discovery, research, artifacts, reviews, and acceptance evidence enter a specification-driven delivery workflow, and I contributed working changes to the framework itself rather than commenting on it from outside. Framework architecture, product rollout, and division-level adoption strategy were owned by partners; I was not the overall DRI, and the decisions below are the ones that were mine.",
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
    { label: "Primary commands", value: "setup, go, progress, contribute, feedback, kr" },
    { label: "Workflow gates", value: "6 SDD steps with artifact checks" },
    { label: "Core artifacts", value: "Proposal, specs, design, tasks, RTM, audit log" },
    { label: "Source systems", value: "Bitbucket, Jira, Confluence, Teams" },
  ],
  gallery: [
    {
      label: "DEP Nervous System flow",
      src: "/images/projects/generated/dep-nervous-system-flow.svg",
      alt: "Flow diagram showing DEP Brain feeding setup, sync, team DEP Spine workspaces, delivery workflow, and benefits.",
      fit: "contain",
      span: "wide",
    },
  ],
  thumbnail: "/images/projects/generated/dep-nervous-system.png",
  sourceUrl: "https://www.notuser.com/portfolio/dep-nervous-system",
  isPrivate: true,
};
