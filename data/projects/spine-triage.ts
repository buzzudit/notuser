import { Project } from "../types/project";

export const project: Project = {
  id: "d0c26ed8-04dd-43ef-a66f-83d4b7360c4f",
  slug: "spine-triage",
  title: "Spine Triage",
  category: "AI Product Strategy & Experience Design",
  year: "2026",
  organization: "athenahealth",
  platform: "Internal AI Platform",
  scope: "Experience direction, product model, hands-on delivery",
  summary:
    "Led and directly implemented the experience overhaul of an AI-assisted engineering triage product that turns fragmented ticket and code context into reviewable findings and proposed changes, with explicit human approval at every consequential step.",
  challenge:
    "Engineering teams absorb defect and operational work that demands repetitive context gathering before anyone can make a decision: reading incomplete tickets, locating repositories, gathering logs, tracing code, identifying ownership, and judging whether a safe fix is even possible. Low-priority issues stayed in the backlog because investigation cost competed with roadmap work. The existing prototype could investigate, but users could not reliably tell what the agent was doing, how long it would take, what context it had used, or what would happen next. An AI system whose reasoning you cannot inspect is one you cannot delegate to.",
  context:
    "The product had to operate across issue tracking, two different source-control systems, monolith and microservice code, team runbooks, logs, and custom tooling — for teams inside the shared delivery framework and, eventually, teams without it. The system could propose code but never merge or submit it autonomously; developer review was mandatory by design. Product hierarchy did not map cleanly onto reporting structure or code ownership, so investigations regularly crossed team and repository boundaries. The existing product was already functional, so the overhaul had to preserve feature parity while changing navigation, core concepts, and workflows underneath it.",
  role:
    "Director, Experience Design and UX leader for the AI Spine team. I owned the product-experience direction for the overhaul and implemented a substantial part of it myself — initiating the review that started it, defining the experience model, making the terminology and interaction decisions, and taking the work through to a production deployment. I was not the overall product DRI: engineering implementation and organizational rollout were led by partners, and I worked inside that shared ownership rather than around it.",
  process: [
    "Reviewed the working product end to end with engineering, then initiated a holistic experience overhaul rather than a screen-by-screen cleanup.",
    "Ran heuristic evaluations as the baseline, the post-implementation check, and a broader full-tool audit, treating severity movement as the working signal rather than a headline metric.",
    "Restructured the product around Runs — durable, inspectable investigations — instead of configuration pages or a chat transcript.",
    "Designed a conversational New Triage flow and first-time onboarding that ask for problem, scope, and review confirmation in sequence.",
    "Made the experience decisions concrete in the codebase, working in the shared feature branch alongside engineering rather than handing off specifications.",
    "Reviewed engineering feedback item by item, accepted or rejected each with recorded rationale, and converted the remainder into tracked work.",
    "Ran the leadership demonstration on the new interface connected to a live API rather than the old production experience or disconnected visual concepts.",
  ],
  keyDecisions: [
    "Make Runs the organizing center of the product. Configuration pages and a chatbot transcript were both rejected: users needed durable status, evidence, and delivery traceability that survived the session.",
    "Use conversational guidance without shipping a generic chatbot, keeping the low friction of conversation while preserving predictable product states and explicit review points.",
    "Put the answer first and disclose evidence progressively. Showing raw investigation output first preserved completeness but made decisions harder to scan.",
    "Preserve human control as a product property, not a disclaimer. The system generates findings and proposed changes; a developer reviews and approves. Autonomous merge or submission stayed explicitly out of scope.",
    "Choose action language that describes system behavior. 'Save guidance' replaced 'Save investigation' because the latter implied the whole investigation was being stored; explicit Index and Refresh language was kept over a generic 'Onboarding'.",
    "Refuse to expose unfinished functionality as if it were ready — unbuilt tooling came out of the demonstration rather than being implied into existence.",
    "Reuse the delivery framework's existing product identity instead of asking users to recreate product structures the ecosystem already knew. Raised this as a cross-product boundary question for the framework and product leads to settle rather than deciding it unilaterally.",
    "Do not hide backend limitations behind reassuring copy. Run status, timeframe expectations, delivery state, and error framing surface honestly rather than implying every investigation completes or produces a fix.",
  ],
  outcome: [
    "The redesigned experience reached production on internal engineering surfaces in September 2026, with feature parity preserved through a change to the product's core concepts.",
    "Heuristic evaluation severity moved from a highest-severity-3 baseline to highest-severity-2 after implementation, across an expanded review set — directional evidence that the overhaul closed real usability risk rather than moving it.",
    "The product gained an inspectable trust model: users can see what the agent did, what evidence it used, what state a run is in, and what it is proposing, before anything reaches a repository.",
    "Identified and escalated a duplicate product-identity problem between the triage product and the wider delivery framework — an ecosystem-level issue that neither product would have surfaced on its own.",
    "Adoption and operating impact are not yet measured. The product deployed recently, teams are onboarding, and no throughput, acceptance-rate, or time-saved data exists at the time of writing.",
  ],
  lessons: [
    "For AI products, transparency is the feature. Users delegate to a system whose reasoning they can inspect and whose output they can refuse.",
    "Terminology is interaction design. 'Save guidance' and 'Save investigation' set different expectations about what the system retains, and users act on the difference.",
    "The strongest position for a design leader in AI work is close enough to implement, senior enough to say no to the roadmap.",
    "Surfacing what a system cannot do builds more trust than smoothing over it — every hidden limitation becomes a broken promise at the moment it matters.",
  ],
  tags: [
    "AI Product Strategy",
    "Human + AI Workflows",
    "Developer Experience",
    "Experience Direction",
    "Trust and Control",
    "athenahealth",
    "Director",
  ],
  metrics: [
    { label: "Role", value: "Experience direction and delivery" },
    { label: "Delivery", value: "Production, September 2026" },
    { label: "Control model", value: "No autonomous merge or submit" },
  ],
  gallery: [
    {
      label:
        "Runs as the organizing center: current and historical investigations with durable status, evidence, and delivery state",
    },
    {
      label:
        "Conversational New Triage flow — problem, scope, and review confirmation in sequence, without a generic chatbot",
    },
  ],
  sourceUrl: "https://www.notuser.com/portfolio/spine-triage",
  narrative: {
    hook:
      "The product already worked. That was the problem — it investigated well, and nobody could tell what it had done.",
    acts: [
      {
        id: "opaque-competence",
        chapter: "Act 1 · Opaque Competence",
        title: "A capable agent nobody could supervise",
        prose: [
          "Spine Triage could take a defect ticket, gather the logs, trace the code, and propose a fix. The capability was real and the prototype worked.",
          "What users could not do was supervise it. There was no reliable way to see what the agent was doing, how long it would take, which context it had drawn on, or what it intended to do next.",
          "That is a trust problem wearing the costume of a UI problem. An engineer will not hand a repository to a system whose reasoning is invisible, no matter how good the output turns out to be.",
        ],
        callout: {
          label: "The real constraint",
          text: "The system could propose code but never merge or submit it. Human review was mandatory by design — so the experience had to make review possible, not just required.",
        },
      },
      {
        id: "runs-not-chat",
        chapter: "Act 2 · Runs, Not Chat",
        title: "Choosing a product model over a conversation",
        prose: [
          "The obvious shape for an AI product in 2026 is a chat transcript. I rejected it.",
          "A transcript is ephemeral and unstructured; investigations needed to persist, carry evidence, and show delivery state long after the conversation ended. So the product reorganized around Runs — durable, inspectable investigations you could return to.",
          "Conversation survived where it earned its place: the New Triage flow asks for the problem, the scope, and a review confirmation in sequence. Low friction at the entrance, predictable states everywhere after it.",
        ],
        callout: {
          label: "Leadership move",
          text: "I worked in the shared feature branch alongside engineering rather than handing over specifications, then reviewed their feedback item by item and recorded the rationale for each accept and reject.",
        },
      },
      {
        id: "honest-surfaces",
        chapter: "Act 3 · Honest Surfaces",
        title: "Refusing to smooth over what the system cannot do",
        prose: [
          "The redesign surfaces run status, timeframe expectations, delivery state, and error framing rather than implying every investigation completes or produces a usable fix.",
          "Unfinished functionality came out of the leadership demonstration instead of being implied into existence, and the demonstration ran on the new interface against a live API rather than on disconnected visual concepts.",
          "The same instinct drove the language. 'Save guidance' replaced 'Save investigation' because the second one promised something the system did not do.",
        ],
      },
    ],
    pivot: {
      chapter: "The Pivot · Control Is the Product",
      title: "Stop designing an AI that impresses and start designing one that can be refused",
      prose: [
        "The turning point was treating human control as a product property rather than a safety disclaimer bolted on at the end.",
        "Every consequential step routes through a person: the system proposes, a developer reviews, and nothing reaches a repository without an explicit decision. The interface exists to make that decision informed rather than ceremonial.",
        "That reframing also surfaced an ecosystem problem neither product would have caught alone — a duplicate product identity between the triage tool and the wider delivery framework, which I escalated to the framework and product leads rather than resolving inside my own surface.",
      ],
      callout: {
        label: "Transferable principle",
        text: "An AI product earns delegation by being inspectable and refusable. Capability without supervision is a demo, not a tool.",
      },
    },
    resolution: {
      prose: [
        "The overhaul reached production on internal engineering surfaces in September 2026 with feature parity intact, despite changing the product's core concepts underneath.",
        "Heuristic severity moved from a highest-severity-3 baseline to highest-severity-2 across an expanded review set — directional evidence that the redesign closed real risk rather than relocating it.",
        "Adoption impact is genuinely unmeasured. The product deployed recently and teams are still onboarding. What the work demonstrably established is a trust model that makes the measurement worth doing.",
      ],
      highlight:
        "The outcome was not a better-looking triage tool. It was an AI system an engineer could supervise, and therefore one they could actually use.",
    },
  },
};
