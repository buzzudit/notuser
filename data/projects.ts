export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  context: string;
  role: string;
  process: string[];
  keyDecisions: string[];
  outcome: string[];
  lessons: string[];
  tags: string[];
  metrics: ProjectMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "p1",
    slug: "revenue-intelligence-copilot",
    title: "Revenue Intelligence Copilot",
    category: "AI Product",
    year: "2025",
    summary:
      "Built a sales copilot that unified CRM history, call transcripts, and deal context to produce accurate next-step guidance.",
    challenge:
      "Sales reps were spending too much time searching scattered systems before critical calls, which reduced preparation quality and close rates.",
    context:
      "The company had grown through acquisitions, creating fragmented workflows across Salesforce, Gong, and internal tools. Leadership needed a single operational layer.",
    role:
      "Led product strategy, AI workflow design, and delivery across product, design, and platform engineering teams.",
    process: [
      "Mapped highest-value rep workflows and distilled repetitive prep tasks.",
      "Designed retrieval pipelines for account context and call-history summarization.",
      "Prototyped prompt orchestration for meeting briefs and risk flags.",
      "Rolled out in stages with feedback instrumentation and quality scoring.",
    ],
    keyDecisions: [
      "Started with call-prep and deal-risk use cases before broader assistant functionality.",
      "Added confidence indicators and source citations for all generated recommendations.",
      "Optimized for actionability over verbosity in assistant responses.",
    ],
    outcome: [
      "Reduced prep time from 45 minutes to 12 minutes per account.",
      "Increased pipeline review coverage by 2.4x across the sales org.",
      "Improved win rate on at-risk renewals in pilot accounts.",
    ],
    lessons: [
      "Trust required transparent sourcing, not just fluent output.",
      "Narrow use-case focus produced faster adoption than broad assistant positioning.",
      "Prompt quality improved significantly when tied to explicit workflow state.",
    ],
    tags: ["LLM", "RAG", "GTM", "Workflow Automation"],
    metrics: [
      { label: "Prep time", value: "-73%" },
      { label: "Adoption", value: "84% weekly" },
      { label: "Pipeline coverage", value: "2.4x" },
    ],
    testimonial: {
      quote:
        "This changed how our team goes into enterprise calls. We now start informed instead of scrambling.",
      author: "VP Sales",
      role: "Enterprise SaaS",
    },
    gallery: ["Brief view", "Deal risk panel", "Action queue"],
  },
  {
    id: "p2",
    slug: "clinical-triage-assistant",
    title: "Clinical Triage Assistant",
    category: "Healthcare AI",
    year: "2024",
    summary:
      "Designed a triage assistant for intake teams to prioritize urgent cases and reduce processing delays.",
    challenge:
      "Nurse coordinators were manually reviewing intake notes with inconsistent urgency classification across shifts.",
    context:
      "A regional care network needed improved response consistency while maintaining strict human oversight and compliance workflows.",
    role:
      "Owned product definition and UX for AI-assisted triage recommendations with audit-ready reasoning.",
    process: [
      "Co-designed triage criteria with clinical operations and compliance teams.",
      "Built structured prompt templates aligned with existing clinical decision trees.",
      "Implemented clinician feedback loops for recommendation tuning.",
      "Validated quality with side-by-side human review in production shadow mode.",
    ],
    keyDecisions: [
      "Used decision-support framing instead of autonomous recommendation language.",
      "Required explicit reason codes and source snippets for each triage suggestion.",
      "Added escalation triggers when model confidence dropped below threshold.",
    ],
    outcome: [
      "Reduced median intake-to-routing time by 38%.",
      "Improved triage consistency across teams and shifts.",
      "Created auditable review logs that simplified compliance reporting.",
    ],
    lessons: [
      "Clinical adoption depends on explainability and workflow fit, not novelty.",
      "Human override UX must be first-class in regulated environments.",
      "Decision support performs best with structured inputs and bounded scope.",
    ],
    tags: ["Healthcare", "Decision Support", "Compliance", "Human-in-the-loop"],
    metrics: [
      { label: "Routing speed", value: "+38%" },
      { label: "Consistency", value: "+29%" },
      { label: "Escalation SLA", value: "99.1%" },
    ],
    gallery: ["Intake overview", "Reason codes", "Escalation queue"],
  },
  {
    id: "p3",
    slug: "knowledge-ops-command-center",
    title: "Knowledge Ops Command Center",
    category: "Enterprise Platforms",
    year: "2024",
    summary:
      "Built an internal knowledge command center for operations teams to query policy, process, and runbooks in one interface.",
    challenge:
      "Support and operations teams depended on stale docs across multiple systems, causing inconsistent customer outcomes.",
    context:
      "The organization needed faster knowledge retrieval and a process to keep high-traffic answers continuously improved.",
    role:
      "Led discovery, architecture alignment, and UI strategy for knowledge retrieval and governance workflows.",
    process: [
      "Identified top recurring intents from support tickets and internal search logs.",
      "Designed a retrieval confidence model with freshness and ownership metadata.",
      "Launched editor workflows for content verification and update cycles.",
      "Added metrics dashboards for unresolved intent and answer quality gaps.",
    ],
    keyDecisions: [
      "Scored results by policy freshness and ownership confidence.",
      "Embedded feedback directly into answer cards for rapid correction loops.",
      "Prioritized operational intents before long-tail documentation coverage.",
    ],
    outcome: [
      "Cut time-to-answer for internal ops requests by 61%.",
      "Lowered policy-related ticket escalations quarter-over-quarter.",
      "Increased self-serve resolution in support operations.",
    ],
    lessons: [
      "Knowledge systems fail without ownership and freshness signals.",
      "Feedback loops outperform one-time indexing projects.",
      "Intent taxonomy quality drives retrieval quality.",
    ],
    tags: ["Knowledge Systems", "Internal Tools", "Search", "Ops"],
    metrics: [
      { label: "Time-to-answer", value: "-61%" },
      { label: "Escalations", value: "-27%" },
      { label: "Self-serve", value: "+33%" },
    ],
    gallery: ["Search panel", "Answer card", "Governance dashboard"],
  },
  {
    id: "p4",
    slug: "personalization-engine-studio",
    title: "Personalization Engine Studio",
    category: "Growth Systems",
    year: "2023",
    summary:
      "Created a no-code personalization studio that let marketing teams define AI-assisted segment strategies and messaging variants.",
    challenge:
      "Growth experiments were bottlenecked by engineering handoffs and inconsistent targeting logic.",
    context:
      "The team needed a controlled interface to run high-velocity tests while preserving brand and governance constraints.",
    role:
      "Drove product direction, experimentation UX, and rollout plan with growth and data teams.",
    process: [
      "Mapped experiment lifecycle from hypothesis to deployment and analysis.",
      "Designed a segment builder with guardrails for targeting integrity.",
      "Integrated performance analytics and variant-level outcome views.",
      "Established governance checkpoints for brand-safe generation.",
    ],
    keyDecisions: [
      "Separated hypothesis definition from execution settings to reduce setup errors.",
      "Built reusable experiment templates for common funnel scenarios.",
      "Used progressive rollout controls for high-risk audience segments.",
    ],
    outcome: [
      "Increased experiment velocity by 3.1x.",
      "Reduced median launch time for growth tests from days to hours.",
      "Improved conversion lift consistency across campaigns.",
    ],
    lessons: [
      "Operator-friendly tooling unlocks compounding experimentation.",
      "Templates accelerate quality when paired with clear constraints.",
      "Measurement design must be built into the creation workflow.",
    ],
    tags: ["Experimentation", "Personalization", "Growth", "Analytics"],
    metrics: [
      { label: "Experiment velocity", value: "3.1x" },
      { label: "Launch time", value: "-78%" },
      { label: "CVR lift", value: "+14%" },
    ],
    gallery: ["Segment builder", "Variant workspace", "Results board"],
  },
  {
    id: "p5",
    slug: "executive-insight-briefing",
    title: "Executive Insight Briefing",
    category: "Decision Intelligence",
    year: "2023",
    summary:
      "Shipped an executive briefing system that converted operational data into concise, action-oriented weekly insight decks.",
    challenge:
      "Leaders received high-volume raw reporting but lacked a consistent narrative on priorities, risk, and opportunity.",
    context:
      "Operations, finance, and product each used different reporting views, creating alignment friction in weekly reviews.",
    role:
      "Defined product scope and narrative framework, partnering with analytics engineering and leadership stakeholders.",
    process: [
      "Defined decision moments and information hierarchy for executive review.",
      "Built summary generation templates tied to KPI deltas and thresholds.",
      "Implemented drill-down flows from summary insight to source metrics.",
      "Iterated language calibration for concise, decision-focused output.",
    ],
    keyDecisions: [
      "Optimized for signal prioritization instead of comprehensive dashboards.",
      "Enforced strict output length to keep review meetings focused.",
      "Included explicit recommended actions with ownership by default.",
    ],
    outcome: [
      "Cut briefing prep effort by 70% for ops and analytics teams.",
      "Increased follow-through on weekly action items.",
      "Improved cross-functional alignment on top priorities.",
    ],
    lessons: [
      "Decision intelligence requires narrative framing, not just data exposure.",
      "Constrained formats can improve leadership decision quality.",
      "Action ownership should be generated with each insight artifact.",
    ],
    tags: ["Executive Ops", "Analytics", "Narrative UX", "Automation"],
    metrics: [
      { label: "Prep effort", value: "-70%" },
      { label: "Action completion", value: "+24%" },
      { label: "Meeting time", value: "-35%" },
    ],
    gallery: ["Weekly brief", "KPI narrative", "Action tracker"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
