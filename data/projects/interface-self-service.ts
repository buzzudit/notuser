import { Project } from "../types/project";

export const project: Project = {
  id: "a3dfe746-9c4d-4e49-9389-98d410181854",
  slug: "interface-self-service",
  title: "Interface Self Service",
  category: "AI Strategy & Platform Transformation",
  year: "2026",
  organization: "athenahealth",
  platform: "Healthcare Integration Platform",
  scope: "Leadership, Strategy, Framework Design, AI-enabled Workflow Transformation",
  summary:
    "Leadership and strategy work for Project Fusion, an AI-enabled transformation of the interface build and scoping process at athenahealth.",
  challenge:
    "Interface build work was highly manual, fragmented across many teams and tools, and hard to scale consistently. The opportunity was to turn complex integration intake, scoping, feasibility analysis, and build readiness into a more self-service, AI-supported workflow without losing governance or expert judgment.",
  context:
    "Project Fusion, also known as Interface Build and Interface Self Service, focused on AI-enabled transformation across healthcare interface workflows. Internal source material framed the effort around automating HL7 integration request scoping, connecting Salesforce intake, Jira, interface mappings, historical configurations, LLM-based summarization, feasibility analysis, and self-service recommendations.",
  role:
    "Leadership and strategy partner. I shaped the direction of the work, invented the framework used by the project, and helped connect the AI transformation narrative to practical interface build outcomes.",
  process: [
    "Mapped the current-state interface build process as a fragmented workflow across request initiation, intake, triage, scoping, build, testing, deployment, and support.",
    "Created the strategic framework used by the project to reason about AI-enabled transformation, self-service readiness, and where expert involvement should remain visible.",
    "Helped position Project Fusion as more than an AI prototype by connecting it to operational scalability, faster scoping, reuse of proven interface patterns, and reduced dependency on R&D investigation.",
    "Partnered with design and product collaborators to make the work legible across Interface Self Service, Interface Build, and Project Fusion naming contexts.",
    "Grounded the strategy in measurable behavior, including whether users could complete scoping without needing to raise investigation tickets.",
  ],
  keyDecisions: [
    "Frame the work around end-to-end interface build transformation instead of a single AI assistant surface.",
    "Treat self-service as a governed workflow: AI could summarize, categorize, compare, and recommend, while still preserving manual override and expert review paths.",
    "Use the framework to connect upstream discovery, internal scoping, feasibility analysis, subscription workflows, and downstream implementation readiness.",
    "Keep the portfolio framing private and abstracted because the underlying repo, Confluence pages, and integration architecture are internal.",
  ],
  outcome: [
    "Established a strategy narrative for AI-enabled interface build transformation across Project Fusion, Interface Build, and Interface Self Service.",
    "Clarified how AI agents could support request intake, HL7 scoping, historical pattern reuse, feasibility recommendations, and self-service decision-making.",
    "Created a framework that helped the project move from fragmented process analysis toward a more coherent product and operating model.",
    "Connected success measurement to practical workflow signals such as reduced R&D investigation dependency and faster scoping confidence.",
  ],
  lessons: [
    "AI transformation is strongest when it starts from workflow architecture, not from the assistant surface.",
    "Self-service in complex healthcare integration work needs explicit governance, confidence signals, and escalation paths.",
    "A strong framework can let multiple teams discuss discovery, scoping, feasibility, and build readiness without collapsing everything into implementation detail.",
    "Naming varies across organizations, so portfolio storytelling needs to connect aliases without pretending they are separate bodies of work.",
  ],
  tags: [
    "AI Strategy",
    "Interface Self Service",
    "Project Fusion",
    "Healthcare Integration",
    "HL7",
    "Framework Design",
    "athenahealth",
    "Director",
  ],
  metrics: [
    { label: "Process scope", value: "7+ workflow stages" },
    { label: "Transformation model", value: "AI-enabled scoping" },
    { label: "Success signal", value: "Reduced R&D dependency" },
  ],
  gallery: [
    {
      label: "Interface Self Service cover",
      src: "/images/projects/generated/interface-self-service.png",
      alt: "Abstract AI-enabled interface workflow system map",
    },
  ],
  thumbnail: "/images/projects/generated/interface-self-service.png",
  sourceUrl:
    "https://bitbucket.athenahealth.com/users/nmalavika/repos/interface-build/browse",
  isPrivate: true,
  narrative: {
    hook:
      "Interface build was not just a slow workflow. It was a knowledge problem spread across people, tickets, tools, configurations, and years of accumulated integration decisions.",
    acts: [
      {
        id: "fragmented-interface-build",
        chapter: "Act 1 · The Fragmented Build",
        title: "A long workflow with too much hidden expertise",
        prose: [
          "The current-state interface build process involved many handoffs: request initiation, intake, triage, design and scoping, build, testing, deployment, and support.",
          "That fragmentation made it hard for teams to reuse proven solutions or understand whether a new request was feasible without pulling expert teams into investigation.",
          "The strategic challenge was to make the system more self-service without flattening the complexity that makes healthcare integration work risky.",
        ],
        callout: {
          label: "Source signal",
          text: "Internal Project Fusion material framed the opportunity around AI-powered scoping, feasibility analysis, knowledge reuse, and faster interface delivery.",
        },
      },
      {
        id: "framework-first-strategy",
        chapter: "Act 2 · The Framework",
        title: "Create a model teams could use before building more surface area",
        prose: [
          "My role was leadership and strategy: I invented the framework used by the project and helped shape how the work should be understood across Interface Build, Interface Self Service, and Project Fusion.",
          "The framework connected upstream discovery, request intake, scoping, historical match analysis, feasibility recommendations, and build readiness into one transformation model.",
          "That helped the team discuss AI as a way to restructure decision-making, not simply as a chat layer on top of an existing process.",
        ],
        callout: {
          label: "Leadership move",
          text: "The framework made the project legible as an operating model shift: self-service where confidence is high, escalation where expertise is still required.",
        },
      },
      {
        id: "ai-enabled-self-service",
        chapter: "Act 3 · Self-Service With Governance",
        title: "Use AI to reduce uncertainty, not hide it",
        prose: [
          "Project Fusion's internal architecture direction pointed toward Salesforce intake, LLM-based summarization, HL7 configuration analysis, historical pattern matching, and feasibility recommendations.",
          "The self-service strategy needed those outputs to remain reviewable: teams still needed confidence signals, auditability, and the ability to raise investigation when a request was not straightforward.",
          "That balance became the heart of the product direction: reduce avoidable dependency while preserving expert judgment where the system was uncertain.",
        ],
      },
    ],
    pivot: {
      chapter: "The Pivot · From Assistant To Transformation",
      title: "The value was not the AI agent; it was the redesigned operating model",
      prose: [
        "The key shift was treating Project Fusion as interface build transformation rather than a standalone AI assistant.",
        "Once the work was framed around workflow stages, decision points, confidence, reuse, and escalation, the AI capabilities had a clearer job to do.",
        "That made it easier to connect strategy, implementation, and measurement without over-indexing on the novelty of the tooling.",
      ],
      callout: {
        label: "Transferable principle",
        text: "AI self-service works when teams can see what the system knows, what it recommends, and when it needs help.",
      },
    },
    resolution: {
      prose: [
        "Interface Self Service became a strategy story about making complex integration work more repeatable, explainable, and scalable.",
        "The framework helped connect aliases, artifacts, and teams into one coherent Project Fusion narrative.",
        "The outcome was a clearer direction for AI-enabled scoping and build readiness, with success tied to operational signals like reduced investigation dependency.",
      ],
      highlight:
        "The important contribution was strategic: turning a fragmented interface build process into a framework for governed AI-enabled self-service.",
    },
  },
};
