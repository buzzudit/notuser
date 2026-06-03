import { Project } from "../types/project";

export const project: Project = {
  id: "4ace0bd2-8b5f-49da-bc47-51adca3eb9d1",
  slug: "ai-enablement",
  title: "AI Enablement",
  category: "AI Strategy & Enablement",
  year: "2026",
  organization: "athenahealth",
  platform: "Enterprise AI Adoption",
  scope: "AI Training, Community Enablement, Workflow Adoption",
  summary:
    "A growing body of AI enablement work across community sessions, peer support, non-developer ramps, and volunteer support for Claude Training.",
  challenge:
    "Teams were curious about AI, but many people still needed practical ways to try it safely: examples, setup help, low-pressure forums, non-developer context, and space to compare what was actually useful.",
  context:
    "This work spans several related efforts at athenahealth, including AI Playtime, DEP AI conversations, peer troubleshooting, non-developer pre-training, and a volunteer captain role in the org-wide Claude Training initiative. Claude Training was an important but smaller slice, roughly 10-20% of the overall AI enablement work.",
  role:
    "Design and product leader contributing to AI enablement through facilitation, examples, peer support, and community-building. For Claude Training specifically, I participated as a volunteer captain and support contributor, not as the owner of the org-wide initiative.",
  process: [
    "Helped run AI Playtime as a recurring community space for demos, questions, experiments, and practical examples from people trying AI in their work.",
    "Hosted two optional Claude Code pre-training sessions for non-developers and others who wanted a friendlier ramp into Git, terminal usage, VS Code, Node/NPM, setup troubleshooting, and AI-assisted workflows.",
    "Shared pre-training slides, recordings, transcripts, prompts, and setup resources so people could revisit the basics asynchronously.",
    "Contributed as a volunteer captain in the org-wide Claude Training effort by helping with participant readiness, setup questions, and support paths.",
    "Worked through AI Spine, DEP Brain, and related discussions with peers and leaders to explore how AI practices could fit into product, design, research, and SDD workflows.",
  ],
  keyDecisions: [
    "Keep enablement practical and peer-led: show real examples, answer setup questions, and make space for people to compare what worked.",
    "Create a non-developer ramp so AI-assisted work did not feel limited to people already comfortable with command-line and repo workflows.",
    "Use AI Playtime as a lightweight community habit rather than a polished training program.",
    "Be careful not to over-claim ownership of org-wide initiatives; contribute where useful and make the surrounding support clearer.",
  ],
  outcome: [
    "AI Playtime remained a visible weekly space for experimentation, Q&A, demos, and practical peer learning.",
    "Pre-training resources gave non-developers and less technical participants a gentler entry point into Claude Code setup and usage.",
    "Volunteer support in Claude Training helped with readiness and troubleshooting, while staying appropriately scoped within the larger org-wide initiative.",
    "The broader work helped make AI adoption feel more approachable across UX, product, research, and engineering conversations.",
  ],
  lessons: [
    "AI enablement works best when it stays close to real tasks and real friction.",
    "Non-developer enablement needs explicit scaffolding around Git, terminal, package setup, and project context before advanced AI workflows can feel accessible.",
    "Community forums create the trust and repetition that formal training cannot provide by itself.",
    "It is important to distinguish ownership from contribution, especially when a volunteer role sits inside a much larger company initiative.",
  ],
  tags: [
    "AI Enablement",
    "Claude Code",
    "Community",
    "Training",
    "Design Leadership",
    "athenahealth",
    "Director",
  ],
  metrics: [
    { label: "Community forum", value: "AI Playtime" },
    { label: "Pre-training", value: "2 optional sessions" },
    { label: "Claude Training", value: "Volunteer captain role" },
  ],
  gallery: [
    {
      label: "AI Enablement cover",
      src: "/images/projects/generated/ai-enablement.png",
      alt: "AI Enablement",
    },
  ],
  thumbnail: "/images/projects/generated/ai-enablement.png",
  sourceUrl: "https://www.notuser.com/portfolio/ai-enablement",
  isPrivate: true,
  narrative: {
    hook:
      "A lot of AI enablement work is small on purpose: helping people get unstuck, try something real, and come back with better questions.",
    acts: [
      {
        id: "training-was-not-enough",
        chapter: "Act 1 · The Practical Gap",
        title: "People needed approachable ways to try AI in real work",
        prose: [
          "Across product, design, research, and engineering conversations, people were interested in AI but unevenly confident about where to start.",
          "Some barriers were conceptual, but many were very practical: setup, repos, terminal basics, prompts, MCPs, examples, and knowing who to ask.",
          "The work was less about owning a single program and more about creating useful entry points wherever the friction showed up.",
        ],
        callout: {
          label: "Scope note",
          text: "Claude Training was an org-wide initiative. My role there was a volunteer captain/support role and only one part of the broader enablement work.",
        },
      },
      {
        id: "building-the-ramp",
        chapter: "Act 2 · Building The Ramp",
        title: "Make the unfamiliar parts teachable before the room fills up",
        prose: [
          "I hosted two optional pre-training sessions tailored especially for non-developers and anyone who needed a friendlier introduction to Git, terminal usage, VS Code setup, Node/NPM, and troubleshooting.",
          "The sessions were backed by reusable slides, recordings, transcripts, and setup materials so people could revisit the basics on their own time.",
          "This kept the support practical: explain the mental model, normalize the awkward setup steps, and make the next step feel possible.",
        ],
        callout: {
          label: "Enablement principle",
          text: "People do not need every technical detail up front. They need enough structure to stop feeling lost.",
        },
      },
      {
        id: "community-and-leadership",
        chapter: "Act 3 · Community Practice",
        title: "Keep the learning alive through examples, demos, and office hours",
        prose: [
          "AI Playtime became the steady home for much of this work: a place to ask questions, show experiments, find volunteers, and share examples without needing every session to be polished.",
          "Related AI Spine and DEP Brain discussions created another layer of practice around SDD, research, product context, and how AI-assisted work should be structured.",
          "The value was in the accumulation of small enablement moves: people had more places to learn, ask, demo, and keep going.",
        ],
      },
    ],
    pivot: {
      chapter: "The Pivot · Enablement As Practice",
      title: "Make adoption ordinary enough to repeat",
      prose: [
        "The useful shift was treating AI enablement as repeated practice rather than a finished rollout.",
        "The tool mattered, but so did confidence, context, examples, support, and permission to learn in public.",
        "That made the work intentionally modest: create ramps, host forums, share artifacts, and help teams connect AI to their actual workflows.",
      ],
      callout: {
        label: "Transferable principle",
        text: "AI adoption grows through repeated, practical support as much as through formal training.",
      },
    },
    resolution: {
      prose: [
        "This AI Enablement work is still best described as a set of related contributions rather than a single owned program.",
        "It includes AI Playtime facilitation, non-developer pre-training, peer support, AI Spine and DEP Brain conversations, and a small volunteer captain role in Claude Training.",
        "The throughline is practical adoption: helping people understand enough to try, ask better questions, and connect AI to real work.",
      ],
      highlight:
        "The point was not to claim ownership of the AI wave. It was to make useful participation easier.",
    },
  },
};
