export type TrialMetric = {
  label: string;
  value: string;
};

export type Trial = {
  id: string;
  slug: string;
  title: string;
  status: string;
  year: string;
  medium: string;
  entityLabel: string;
  summary: string;
  context: string;
  hypothesis: string;
  experimentFrame: string;
  result: string;
  learning: string;
  learningSignal: string;
  whatItTests: string[];
  features: string[];
  signals: string[];
  nextQuestions: string[];
  metrics: TrialMetric[];
  tags: string[];
  sourceUrl: string;
  thumbnail: string;
};

export const trials: Trial[] = [
  {
    id: "bd0e9d75-30e3-4b85-9c96-55f21d62a5ef",
    slug: "bithub",
    title: "Bithub",
    status: "Desktop MVP",
    year: "2026",
    medium: "Electron app",
    entityLabel: "Idea",
    summary:
      "An idea about giving non-developers a safe way into Bitbucket at the exact moment AI work started turning Markdown files into shared product artifacts.",
    context:
      "As AI-DLC came into the picture and teams adopted AI-assisted workflows, more product and delivery work was moving into Markdown files: specs, plans, prompts, reviews, notes, and implementation artifacts. Those files still needed to be stored, managed, shared, edited, and previewed inside Bitbucket-backed workspaces, but many of the people touching them were not comfortable with Git.",
    hypothesis:
      "Repo work could feel less intimidating if people saw projects, files, edits, sync state, and previews instead of branches, clones, pulls, pushes, and merge conflicts.",
    experimentFrame:
      "The idea was simple: make Bitbucket feel like a workspace instead of a source-control system. Open a project, edit the Markdown, preview what matters, and know whether everything is safely synced.",
    result:
      "The idea resonated because people could immediately feel the pain it was addressing: AI-DLC artifacts were going to live in repos, but the contributors were not all developers. It lost steam when Codex and other major tools started growing their own file browsers, workspaces, and repo interaction patterns.",
    learning:
      "The idea had a short half-life, which became the point. In fast-moving AI platform spaces, a bridge can be useful and still age quickly because the big tools are racing toward the same need. What lasted was the signal: repo-native AI work has to feel safe, understandable, and recoverable for non-developers too.",
    learningSignal:
      "Repo-native AI work has to feel safe, understandable, and recoverable for contributors who do not think in Git.",
    whatItTests: [
      "Finding a Bitbucket repo should feel like finding a project, not locating a remote.",
      "Sync should feel like a clear state of the workspace, not a command someone has to remember.",
      "Editing Markdown should feel safe enough for people who are contributing ideas, specs, and decisions rather than code.",
      "Conflicts need human language because the real fear is losing work or breaking something.",
      "A small workspace manifest can turn a raw repo into a useful place with home documents, sections, and previews.",
    ],
    features: [
      "Bitbucket Data Center personal access token onboarding.",
      "Personal repository discovery and stable local folders under ~/Bithub Projects.",
      "Markdown and text editing with autosave and background sync.",
      "Plain-language sync status and conflict handling.",
      "Optional /.bithub/workspace.yml manifest for home documents, important sections, and local preview commands.",
      "Installable desktop packaging for macOS and Windows.",
    ],
    signals: [
      "The desktop shape mattered because people still needed local files, local previews, and a feeling of control.",
      "The manifest idea hinted at something important: a repo can carry its own product experience, not just its files.",
      "The release-blocker bug-hunt flow pulled the work out of concept territory and into shippable-tool discipline.",
      "The loss of momentum was its own signal: file browsing and repo interaction were quickly becoming table stakes inside AI coding products.",
    ],
    nextQuestions: [
      "Can non-developers understand sync and conflict language without training?",
      "Which file types beyond Markdown and text create the most value?",
      "Should Bithub stay a personal workspace or become a team collaboration surface?",
      "How much Git behavior should remain invisible before users lose necessary context?",
    ],
    metrics: [
      { label: "Audience", value: "Non-developers" },
      { label: "Core job", value: "Work in Bitbucket without Git" },
      { label: "Surface", value: "Desktop workspace" },
      { label: "Status", value: "MVP" },
    ],
    tags: ["Bitbucket", "No-Git UX", "Desktop App", "Repository Workflow", "Experiment"],
    sourceUrl: "https://bitbucket.athenahealth.com/users/ukhandelwal/repos/bithub/browse",
    thumbnail: "/images/lab/bithub.svg",
  },
  {
    id: "62e94bf2-6f07-4a61-a507-ea01c2ac58f7",
    slug: "ai-dlc-navigator",
    title: "AI-DLC Navigator",
    status: "Framework adapter",
    year: "2026",
    medium: "Markdown framework",
    entityLabel: "Idea",
    summary:
      "A shared AI-Collaborative Design Framework that lets Codex, Claude, and Windsurf guide the same artifact-driven product methodology through thin platform adapters.",
    context:
      "AI-assisted product work was becoming fragmented across assistants. Each tool had its own invocation style, but the underlying work still needed the same discipline: discover before defining, define before designing, design before prototyping, and move stages only when artifacts were ready.",
    hypothesis:
      "AI product work becomes less chaotic when assistants navigate by evidence, stage artifacts, and immediate next actions instead of generic advice or tool-specific prompt rituals.",
    experimentFrame:
      "The framework made `ai-dlc/` the canonical source of truth, with shared core guidance, navigator logic, decision trees, stage examples, anti-patterns, and stable workflow IDs. Codex, Claude, and Windsurf became thin adapters over the same methodology.",
    result:
      "The idea moved the center of gravity from assistant-specific prompts to a portable operating model. The useful shift was making the method neutral enough that any capable assistant could pick up the same artifacts and guide the same next step.",
    learning:
      "The durable product is not the prompt. It is the shared contract that tells every assistant what evidence to inspect, which artifact is missing, and what action will move the work forward without rushing to code.",
    learningSignal:
      "The method becomes portable when the artifact contract sits above the assistant that happens to run it.",
    whatItTests: [
      "Assistant guidance can be portable when the methodology lives outside any one tool.",
      "Artifact-driven stage checks can reduce premature prototyping in AI-assisted product work.",
      "Workflow IDs are more stable than slash commands because each platform can translate them differently.",
      "Thin adapters keep platform flavor without letting platform behavior fork the method.",
      "Progress guidance becomes more trustworthy when the assistant names the missing artifact and its consequence.",
    ],
    features: [
      "Canonical `ai-dlc/` framework with core, navigator, and workflow folders.",
      "Assistant brief for the five-phase AI-Collaborative Design Framework.",
      "Navigator that checks progress, identifies stage, calls out gaps, and gives immediate actions.",
      "Stable workflow IDs for setup, stage checks, discovery, definition, design, and prototype-making.",
      "Codex, Claude, and Windsurf adapter surfaces that point back to the shared method.",
      "Anti-pattern and stage-example guidance to keep advice grounded in real artifacts.",
    ],
    signals: [
      "The neutral architecture mattered because teams were already using more than one AI assistant.",
      "The stage-check behavior made the framework feel like navigation rather than documentation.",
      "The adapter pattern reduced content drift because methodology updates happened in one place.",
      "The strongest value was protecting product rigor at the moment AI made building feel deceptively easy.",
    ],
    nextQuestions: [
      "How much artifact inspection can be automated without becoming brittle?",
      "Which workflow IDs deserve to stay stable as the methodology matures?",
      "Can the same framework support both product discovery and implementation governance?",
      "What evidence should force an assistant to stop and ask for human validation?",
    ],
    metrics: [
      { label: "Audience", value: "AI-assisted product teams" },
      { label: "Core job", value: "Navigate the AI-DLC stage" },
      { label: "Surface", value: "Shared assistant framework" },
      { label: "Status", value: "Portable method" },
    ],
    tags: ["AI-DLC", "Assistant Workflow", "Product Methodology", "Markdown Framework", "Experiment"],
    sourceUrl: "https://bitbucket.athenahealth.com/scm/~nmalavika/ai-dlc-navigator.git",
    thumbnail: "/images/lab/ai-dlc-navigator.svg",
  },
  {
    id: "3ac3bb3f-2512-4ec7-b2c8-c3f54d97fdf5",
    slug: "automat",
    title: "Automat",
    status: "Working POC",
    year: "2026",
    medium: "Full-stack web app",
    entityLabel: "Idea",
    summary:
      "A self-improving product loop where analytics and feedback become PRD-style enhancements, admins approve the work, and AI coding tools receive implementation-ready prompts.",
    context:
      "Product teams often collect analytics, feedback, and operational signals without turning them into shippable work fast enough. Automat used a meal-planning product as the proving ground for a bigger question: could software continuously detect improvement opportunities and package them for AI-assisted implementation?",
    hypothesis:
      "A product can evolve faster if behavior data and user feedback generate clear, reviewable enhancement PRDs instead of ending as dashboards that someone has to manually translate later.",
    experimentFrame:
      "The system tracked user behavior, generated enhancement proposals with an AI engine, let admins triage status, produced Cascade-ready implementation prompts, and added a Codex autopilot path that could claim approved enhancements, implement them, run checks, and record outcomes.",
    result:
      "The loop became concrete enough to test end to end: detected enhancements, admin approval, detailed PRD generation, AI implementation handoff, and completion tracking. It also made clear that review, auditability, and status control are the difference between useful automation and reckless autonomy.",
    learning:
      "Autonomy works best when the handoffs are explicit. The winning pattern was not invisible self-modifying software; it was a visible chain from signal to PRD to approval to implementation to evidence.",
    learningSignal:
      "Self-improvement needs a visible approval chain before it deserves more autonomy.",
    whatItTests: [
      "Analytics can become backlog inputs when the system knows what a good enhancement brief requires.",
      "AI-generated PRDs are more useful when they include files, APIs, data changes, edge cases, and tests.",
      "Admin status control keeps the loop intentional instead of letting automation outrun judgment.",
      "Copy-paste handoff to coding AI can still validate the workflow before direct integration exists.",
      "Build and test summaries are part of the product loop, not just developer housekeeping.",
    ],
    features: [
      "Analytics engine for user behavior, engagement, errors, feedback, and upvotes.",
      "Scheduled AI engine that generates comprehensive PRD-style enhancement proposals.",
      "Admin enhancement review with editable statuses from detected through completed.",
      "Cascade prompt generation for approved enhancements.",
      "Codex enhancement autopilot for claiming, implementing, validating, and recording work.",
      "Database-backed enhancement lifecycle and deployment evidence tracking.",
    ],
    signals: [
      "The idea became strongest when it emphasized human approval rather than fully automatic deployment.",
      "Detailed PRDs reduced the ambiguity that usually makes AI implementation prompts fragile.",
      "Status editing mattered because automation needs a management surface, not only a generation engine.",
      "The proof of concept suggested that self-improvement loops need governance as much as intelligence.",
    ],
    nextQuestions: [
      "What quality bar should an AI-generated enhancement meet before it can be approved?",
      "When should implementation move from copy-paste prompt handoff to direct tool integration?",
      "How should impact be measured after an enhancement ships?",
      "What rollback or kill-switch behavior is required before this pattern can run in production?",
    ],
    metrics: [
      { label: "Audience", value: "Product builders" },
      { label: "Core job", value: "Turn signals into shippable work" },
      { label: "Surface", value: "Admin review and autopilot" },
      { label: "Status", value: "Proof of concept" },
    ],
    tags: ["Autonomous Product", "Enhancement Workflow", "PRD Generation", "AI Coding", "Experiment"],
    sourceUrl: "https://github.com/buzzudit/automat",
    thumbnail: "/images/lab/automat.svg",
  },
  {
    id: "a43e3f98-827c-46b1-9e08-733ebd43bc7e",
    slug: "multi-agent",
    title: "Multi-Agent",
    status: "Agent POC",
    year: "2026",
    medium: "Node and TypeScript dashboard",
    entityLabel: "Idea",
    summary:
      "A real multi-agent UX intelligence system for Outline that collects interaction telemetry, builds heatmap signals, and turns friction into prioritized stories and UX proposals.",
    context:
      "Multi-agent demos often look impressive while hiding whether the agents have tools, memory, state, evaluation, or useful handoffs. This experiment asked what a practical product-intelligence pipeline would look like if each agent had a specific job and the dashboard made the reasoning visible.",
    hypothesis:
      "Multi-agent systems become more credible when each agent owns a bounded product task, uses tools against real data, persists memory, validates output, and hands structured context to the next agent.",
    experimentFrame:
      "The system instrumented Outline with a tracker, ingested analytics, generated heatmaps, then ran an Analyst agent, Story Writer agent, and UX Solutioner agent through an orchestrated pipeline with retries, memory, tool logs, evaluators, and a real-time dashboard.",
    result:
      "The prototype clarified where multi-agent value actually shows up: not in the label, but in the quality of handoffs between telemetry, analysis, story generation, and design proposals. The dashboard made traceability as important as the final recommendation.",
    learning:
      "The unit of value in a multi-agent product is the handoff. Agents need boundaries, memory, schemas, and inspectable traces so each step improves the next instead of producing a pile of disconnected AI output.",
    learningSignal:
      "Agent systems earn trust through bounded handoffs, memory, schemas, and visible traces.",
    whatItTests: [
      "UX friction analysis can be grounded in telemetry and heatmaps instead of subjective screenshots alone.",
      "Sequential agents can create clearer outputs than one large prompt when each step has its own tools and schema.",
      "Memory and reasoning traces make agent behavior easier to inspect and reuse across runs.",
      "A dashboard changes trust because users can see status, tool calls, outputs, and failures.",
      "Live product data and mock fallbacks can coexist without breaking the pipeline.",
    ],
    features: [
      "Outline tracker snippet for clicks, hovers, scroll depth, task events, and telemetry batches.",
      "Analytics and heatmap services backed by SQLite.",
      "Orchestrator with sequential agent runs, retries, state tracking, and lifecycle events.",
      "Analyst, Story Writer, and UX Solutioner agents with dedicated tools and schemas.",
      "Long-term and session memory for outputs, context, and reasoning traces.",
      "Realtime dashboard for feeds, heatmaps, stories, proposals, traces, memory, and chat.",
    ],
    signals: [
      "The strongest differentiator was inspectability: outputs felt more trustworthy when traces were visible.",
      "Agent boundaries helped convert raw behavioral data into progressively more product-shaped artifacts.",
      "Retries and schema validation made the system feel like infrastructure rather than a demo script.",
      "The Outline integration showed that agentic UX analysis needs real product context to avoid generic advice.",
    ],
    nextQuestions: [
      "Which parts of the pipeline should run continuously versus on demand?",
      "How should teams compare agent-generated stories with existing roadmap priorities?",
      "Can agents learn from shipped outcomes without reinforcing weak signals?",
      "What is the right human review point before UX proposals become implementation work?",
    ],
    metrics: [
      { label: "Audience", value: "UX and product teams" },
      { label: "Core job", value: "Convert friction into product work" },
      { label: "Surface", value: "Agent dashboard" },
      { label: "Status", value: "Prototype" },
    ],
    tags: ["Multi-Agent", "UX Intelligence", "Outline", "Heatmaps", "Agent Workflow"],
    sourceUrl: "https://github.com/buzzudit/multi-agent",
    thumbnail: "/images/lab/multi-agent.svg",
  },
  {
    id: "5c9cb8ff-e825-478d-880b-a9a67320169d",
    slug: "speclite",
    title: "Speclite",
    status: "Codex skill",
    year: "2026",
    medium: "Skill and templates",
    entityLabel: "Idea",
    summary:
      "A lightweight project operating system that gives AI-assisted builds just enough planning, story tracking, testing policy, and design direction without turning every repo into a process monument.",
    context:
      "AI-assisted development made it easier to start building before the work had a story, acceptance criteria, or verification plan. Speclite explored a smaller operating model for owner-led projects: enough structure to prevent drift, but not so much that the process becomes the product.",
    hypothesis:
      "Small AI-assisted projects can stay coherent if they start from tracked stories, choose verification depth by risk, and adapt to the repo that exists instead of imposing a generic scaffold.",
    experimentFrame:
      "Speclite packaged planning guidance as a Codex skill with starter templates for vision, bookkeeping, story management, testing strategy, design direction, optional bootstrap steps, compliance, and owner-run demos. The skill defaults to existing-repo adaptation and single-person planning budgets.",
    result:
      "The idea became a reusable way to keep AI work accountable without heavyweight ceremony. In this change, it provided the pattern for creating a small local story when Linear was unavailable and implementation still needed a source of truth.",
    learning:
      "The useful middle ground is lightweight governance. AI does better work when it has a story and a definition of done, but the planning system has to stay smaller than the thing being built.",
    learningSignal:
      "Story-first structure keeps AI work grounded only when the process stays smaller than the build.",
    whatItTests: [
      "Story-first execution can reduce AI drift without requiring a large product-ops system.",
      "Existing-repo adaptation is safer than dropping a full planning scaffold into mature projects.",
      "Testing levels help right-size verification by risk instead of habit.",
      "Optional modules keep compliance, bootstrap, and design guidance available without forcing them on every repo.",
      "Owner-run demo guidance can make AI demos repeatable while keeping visible actions under app control.",
    ],
    features: [
      "Codex skill for bootstrapping or adapting a planning-first project operating model.",
      "Starter templates for planning, story management, testing, design direction, and progress tracking.",
      "Story-driven execution protocol with doing, verification, done evidence, and status updates.",
      "Risk-based test levels from documentation-only work through launch-critical changes.",
      "Existing-repo rules that preserve canonical docs and avoid duplicate operating systems.",
      "Optional owner-run AI demo module with stable targets, narration, and local harness guidance.",
    ],
    signals: [
      "The skill was most useful when it added one missing artifact instead of a whole new structure.",
      "The story protocol made AI implementation feel less improvisational.",
      "Risk-based testing language gave small projects a practical way to decide how much verification is enough.",
      "The owner-run demo module showed that process guidance can include operational rituals, not only documents.",
    ],
    nextQuestions: [
      "Which planning artifacts are truly minimum viable for different repo maturities?",
      "How should local Markdown stories migrate cleanly into Linear or another external system?",
      "Can Speclite detect when it is about to create duplicate process documents?",
      "What signals should upgrade a story from lightweight verification to deeper testing?",
    ],
    metrics: [
      { label: "Audience", value: "Owner-led AI builds" },
      { label: "Core job", value: "Keep work story-driven" },
      { label: "Surface", value: "Codex skill" },
      { label: "Status", value: "Reusable skill" },
    ],
    tags: ["Speclite", "Story-Driven Execution", "Planning System", "Codex Skill", "Experiment"],
    sourceUrl: "https://github.com/buzzudit/speclite",
    thumbnail: "/images/lab/speclite.svg",
  },
];

export function getTrialBySlug(slug: string) {
  return trials.find((trial) => trial.slug === slug);
}
