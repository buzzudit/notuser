import { Project } from "../types/project";

export const project: Project = {
  id: "ed7e086e-7ce2-4dd7-a08d-7efe4c8dbc63",
  slug: "smart-beds-and-spaces-with-built-in-decor",
  title: "Smart Beds and Spaces with Built-In Decor",
  category: "Personal Project",
  year: "2025",
  organization: "Independent",
  platform: "Fallout 4 (PC Mod)",
  scope: "Systems Design, 3D Composition, Modding Pipeline",
  summary:
    "A settlement-building mod that ships ready-styled beds, wardrobes, shelves, and tables so players can create lived-in spaces without manual clutter placement.",
  challenge:
    "Most settlement players spend more time placing tiny decorative objects than designing the space itself. The friction isn't creativity; it's repetitive assembly and snapping.",
  context:
    "Built and published on Nexus Mods, this project focused on practical usability: no DLC requirements, broad placement compatibility, and a content set large enough to feel expressive in day-to-day settlement builds.",
  role:
    "Solo creator. I handled concepting, kit-building in the Creation Kit, asset composition, iteration planning, release packaging, and community support through the Nexus posts thread.",
  process: [
    "Defined a utility-first content model: each item needed to look styled out of the box while staying placement-friendly in active settlements.",
    "Implemented four primary categories (beds, wardrobes, shelves, tables) and built internal variation rules so each piece looked intentional instead of randomized clutter.",
    "Scoped compatibility for broad use: no DLC dependency and no mandatory external mod requirement for core functionality.",
    "Published iteratively and used the Nexus posts thread as a live validation channel to collect layout and snapping feedback from players.",
    "Applied the same debugging discipline from the modding blog post 'How I almost failed at modding' to isolate placement edge cases quickly and ship fixes in small increments.",
  ],
  keyDecisions: [
    "Optimized for speed-to-beautiful rather than maximum granular customization: players can place a finished object in one action.",
    "Shipped as modular category expansions over time instead of a monolithic one-shot release, allowing safer updates and community-driven prioritization.",
    "Kept the baseline dependency-light (no DLC required) to maximize installability and reduce friction for new users.",
    "Used release notes and posts-driven patching (v1.1-v1.6) to harden snapping, mirrored walls, and object placement behavior before adding more content breadth.",
  ],
  outcome: [
    "Reached 4k total downloads and 278 endorsements on Nexus Mods.",
    "Expanded to a 130+ item set spanning beds, wardrobes, shelves, and tables.",
    "Shipped a steady release cadence from December 2024 through March 2025, with community-led refinements across six visible update steps.",
    "Maintained a clean public bug signal at publish time with 0 open bugs listed on the mod page.",
  ],
  lessons: [
    "In modding, player time is a product metric. Saving setup effort is as meaningful as adding visual variety.",
    "Community posts are not just support; they are a lightweight product discovery channel when you respond in release-sized increments.",
    "Personal projects scale when you treat them with production discipline: scoped releases, changelog clarity, and repeatable debug workflows.",
    "The workflow I described in the blog post 'How I almost failed at modding' becomes far more valuable when applied to maintenance, not only initial creation.",
  ],
  tags: [
    "Personal Project",
    "Game Modding",
    "Fallout 4",
    "Creation Kit",
    "Community-Driven Iteration",
    "System Design",
  ],
  metrics: [
    { label: "Downloads", value: "4k" },
    { label: "Endorsements", value: "278" },
    { label: "Content set", value: "130+ items" },
    { label: "Open bugs", value: "0 listed" },
  ],
  gallery: [],
  sourceUrl: "https://www.nexusmods.com/fallout4/mods/99176",
  isPrivate: false,
  narrative: {
    hook:
      "Settlement building in Fallout 4 often turns into object-by-object busywork. I wanted to give players back their creative flow.",
    acts: [
      {
        id: "friction-in-flow",
        chapter: "Act 1 · The Friction in Creativity",
        title: "The problem was not imagination. It was setup overhead.",
        prose: [
          "Players had ideas for beautiful rooms, but getting there meant manually stacking dozens of tiny props around each functional item.",
          "That workflow creates fatigue fast: too many micro placements, too much snapping friction, and too little momentum.",
          "I framed the project around one question: what if each placement could already look intentionally styled without taking control away from the player?",
        ],
        callout: {
          label: "Design target",
          text: "Reduce repetitive decorating actions while preserving enough variety for personal expression.",
        },
      },
      {
        id: "build-the-kit",
        chapter: "Act 2 · Designing a Practical Kit",
        title: "Structure the content so it is fast to use and easy to maintain.",
        prose: [
          "I built the mod as a structured kit of beds, wardrobes, shelves, and tables, each with pre-composed decor choices.",
          "Compatibility mattered as much as visuals, so I prioritized no-DLC requirements and low setup friction for installation.",
          "To keep scope sustainable, I shipped in increments and used each release to validate that placement behavior held up in real player settlements.",
        ],
        options: [
          {
            label: "Path A: Fully Manual Clutter",
            detail: "Maximum user control, but high effort and slower creative momentum.",
          },
          {
            label: "Path B: Built-In Decor Components",
            detail: "Faster placement and immediate visual payoff, with curated variation.",
          },
        ],
        callout: {
          label: "Chosen approach",
          text: "I chose built-in decor components to optimize for player momentum and practical usability.",
        },
      },
      {
        id: "community-loop",
        chapter: "Act 3 · Shipping With the Community",
        title: "Posts and patch notes became the product feedback loop.",
        prose: [
          "Nexus posts quickly surfaced real-world edge cases: snapping behavior, mirrored wall alignment, and placement oddities.",
          "Instead of batching everything into rare large updates, I shipped focused fixes and small additions across v1.1 through v1.6.",
          "That cadence improved reliability while keeping players engaged, and it gave me a repeatable way to balance stability with expansion.",
        ],
        callout: {
          label: "Related blog post",
          text: "This maintenance workflow directly builds on the debugging and process discipline described in 'How I almost failed at modding.'",
        },
      },
    ],
    pivot: {
      chapter: "The Pivot · Speed to Beautiful",
      title: "Treat placement time as the primary UX problem.",
      prose: [
        "The most important decision was shifting value from 'more pieces' to 'fewer actions per satisfying result.'",
        "By embedding decor into functional objects, players could focus on spatial storytelling instead of repetitive object assembly.",
        "That changed the feel of settlement building from chore-like setup to immediate creative iteration.",
      ],
      callout: {
        label: "Product principle",
        text: "If users repeat the same setup task every session, that task is the product problem to solve first.",
      },
    },
    resolution: {
      prose: [
        "The mod grew into a 130+ item pack and reached 4k downloads with 278 endorsements.",
        "Public iteration through posts and changelogs helped me improve fit, snapping behavior, and placement reliability while expanding content.",
        "The project now stands as a personal case study in applied product thinking: scoped rollout, feedback-driven prioritization, and ongoing quality loops.",
      ],
      highlight:
        "The biggest win was not another prop variant. It was turning decorating from repetitive setup into fast creative flow.",
    },
  },
};
