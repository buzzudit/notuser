import { Project } from "../types/project";

export const project: Project = {
  id: "d44760b6-ac36-4f22-89d7-8c43f67772d8",
  slug: "design-quality",
  title: "Design Quality",
  category: "Strategy, Design & Development",
  year: "2021",
  organization: "athenahealth",
  platform: "Cloud App",
  scope: "Design Ops, Measurement, UX Maturity",
  summary:
    "Built and scaled a design-quality operating system across platform zones, combining quality instrumentation with cross-functional feedback loops.",
  challenge:
    "Design quality varied across zones, and teams lacked consistent signals for how UX was performing over time. We needed a practical system to measure quality and turn feedback into action.",
  context:
    "The work grew through 2020-2022 in athenahealth platform environments, with impact across UX, product, and engineering teams. It included both tooling and organizational routines.",
  role:
    "Director-level design leader with hands-on ownership of quality measurement patterns, collaboration rituals, and adoption coaching across teams.",
  process: [
    "Created a Design Quality Tool to track and measure UX outcomes in ways teams could use during planning and execution.",
    "Launched and iterated the CFC survey framework to capture cross-functional signals on efficiency and product-delivery health.",
    "Ran collaboration loops across zones so teams could interpret quality signals and convert them into practical delivery actions.",
    "Connected quality efforts with UX roles-and-responsibilities work to strengthen consistency in how teams assessed and improved their output.",
  ],
  keyDecisions: [
    "Treat design quality as an operating system with recurring measurement and review, not a one-time audit.",
    "Anchor quality conversations in cross-functional evidence so UX impact could be discussed in shared business language.",
    "Pair measurement tooling with team enablement and leadership communication to increase adoption and lasting behavior change.",
  ],
  outcome: [
    "Design Quality Tool established a measurable baseline for UX outcomes across platform contexts.",
    "The initial CFC survey cycle achieved 100% response, creating strong visibility into efficiency and delivery opportunities.",
    "Quality and maturity conversations became more actionable across platform zones, improving how teams planned and executed UX work.",
  ],
  lessons: [
    "Quality systems succeed when teams can connect metrics directly to delivery behavior and product outcomes.",
    "Measurement and mentorship must scale together; dashboards alone do not change organizations.",
    "Cross-functional feedback loops are essential for sustained UX maturity growth.",
  ],
  tags: [
    "Strategy",
    "Design Ops",
    "Cloud App",
    "athenahealth",
    "Zone Lead",
    "Hands-on",
  ],
  metrics: [
    { label: "CFC launch", value: "100% response" },
    { label: "Work type", value: "Quality measurement + enablement" },
    { label: "Scope", value: "Platform zones" },
  ],
  gallery: [
    {
      label: "Design Quality cover",
      src: "/images/projects/generated/design-quality.png",
      alt: "Design Quality",
    },
  ],
  thumbnail: "/images/projects/generated/design-quality.png",
  sourceUrl: "https://www.notuser.com/portfolio/design-quality",
  isPrivate: false,
  narrative: {
    hook:
      "Teams wanted better design quality, but we had no shared way to see whether quality was actually improving.",
    acts: [
      {
        id: "quality-without-instrumentation",
        chapter: "Act 1 · The Visibility Gap",
        title: "Quality existed as intention, not as an operating signal",
        prose: [
          "Across platform zones, people cared deeply about UX quality, but discussions often depended on local perspective and uneven evidence.",
          "Without a shared measurement approach, it was difficult to compare progress, prioritize interventions, or communicate impact beyond design.",
          "The challenge was to create a system that made quality visible, discussable, and actionable.",
        ],
      },
      {
        id: "build-the-system",
        chapter: "Act 2 · Building the Quality Operating Layer",
        title: "Tooling and routines had to arrive together",
        prose: [
          "I built the Design Quality Tool to measure and track UX outcomes in a way teams could use during real delivery cycles.",
          "In parallel, I developed the CFC survey approach to collect structured cross-functional signals and expose where process friction lived.",
          "The first CFC launch reached 100% response, giving us a credible baseline for discussing efficiency and product-delivery quality.",
        ],
        callout: {
          label: "Adoption insight",
          text: "Quality measurement gained traction because teams saw it as a shared planning tool, not a UX-only scorecard.",
        },
      },
      {
        id: "from-dashboard-to-behavior",
        chapter: "Act 3 · Turning Data Into Team Behavior",
        title: "The value came from how teams used the signals",
        prose: [
          "The project moved beyond tooling into leadership routines: coaching managers, aligning cross-functional partners, and framing quality in business-relevant terms.",
          "As these loops matured, teams used quality signals to sequence work and improve delivery consistency across zones.",
          "That shift helped elevate UX from output producer to a stronger strategic partner in how work gets planned.",
        ],
      },
    ],
    pivot: {
      chapter: "The Pivot · Quality As Workflow",
      title: "Measure what teams do, not only what screens look like",
      prose: [
        "The turning point was defining design quality as a workflow system rather than a visual checklist.",
        "Once quality became part of recurring team operations, it started influencing decisions earlier and more consistently.",
        "That is what made the effort durable across multiple zones and leadership cycles.",
      ],
      callout: {
        label: "Leadership principle",
        text: "Quality scales when evidence, routines, and coaching are designed together.",
      },
    },
    resolution: {
      prose: [
        "The Design Quality initiative established measurable UX signals, launched CFC with full participation, and improved the quality conversation across platform teams.",
        "It created a stronger foundation for zone-level maturity growth and more consistent product decision-making.",
        "Most importantly, it turned quality from aspiration into operating behavior.",
      ],
      highlight:
        "The real win was not a better dashboard. It was teams changing how they work because quality became visible and shared.",
    },
  },
};
