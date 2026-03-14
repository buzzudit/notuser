export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  sections: BlogSection[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "designing-ai-workflows-that-people-trust",
    title: "Designing AI Workflows That People Trust",
    excerpt:
      "A practical framework for moving from novelty demos to reliable AI workflows that teams use every week.",
    category: "AI Product",
    date: "2026-02-18",
    readTime: "8 min read",
    tags: ["Trust", "Product Design", "AI UX"],
    sections: [
      {
        heading: "Trust starts with legibility",
        paragraphs: [
          "Teams adopt AI workflows when they can understand how outputs were produced and when to challenge them.",
          "Legibility comes from source visibility, confidence cues, and clear handoff points to human judgment.",
        ],
      },
      {
        heading: "Design for correction, not perfection",
        paragraphs: [
          "Most production failures happen when users cannot quickly fix assistant output.",
          "Great systems optimize for rapid correction loops, preserving momentum and confidence.",
        ],
      },
      {
        heading: "Make value measurable",
        paragraphs: [
          "Define baseline time, quality, and error metrics before rollout.",
          "Without explicit value metrics, teams cannot distinguish novelty from real operational gain.",
        ],
      },
    ],
    quote: {
      text: "Adoption follows confidence, and confidence follows clarity.",
      author: "Product Lead",
      role: "B2B Platform",
    },
  },
  {
    id: "b2",
    slug: "from-prompting-to-operating-ai-systems",
    title: "From Prompting to Operating AI Systems",
    excerpt:
      "Prompt quality matters, but sustainable outcomes come from operational design around prompts.",
    category: "Operations",
    date: "2026-01-27",
    readTime: "7 min read",
    tags: ["Operations", "Prompting", "Governance"],
    sections: [
      {
        heading: "Prompting is only one layer",
        paragraphs: [
          "Production AI outcomes depend on retrieval quality, workflow sequencing, and review controls.",
          "Teams that focus only on prompt phrasing usually plateau quickly.",
        ],
      },
      {
        heading: "Operational guardrails create scale",
        paragraphs: [
          "Role-based boundaries, approval checkpoints, and failure routing are core product features.",
          "These controls reduce risk while increasing the speed of confident usage.",
        ],
      },
      {
        heading: "Instrument everything",
        paragraphs: [
          "Track where users accept, edit, or reject outputs to reveal model and UX gaps.",
          "Operational telemetry should drive weekly prioritization.",
        ],
      },
    ],
  },
  {
    id: "b3",
    slug: "how-ai-changes-roadmapping-for-product-teams",
    title: "How AI Changes Roadmapping for Product Teams",
    excerpt:
      "Roadmaps now need capability tracks, quality tracks, and governance tracks - not just feature tracks.",
    category: "Product Strategy",
    date: "2025-12-12",
    readTime: "6 min read",
    tags: ["Roadmapping", "Strategy", "Execution"],
    sections: [
      {
        heading: "Capability planning is not enough",
        paragraphs: [
          "Shipping AI capability without reliability planning creates support burden and trust erosion.",
          "Roadmaps should include explicit quality and evaluation milestones.",
        ],
      },
      {
        heading: "Treat evaluation as a product stream",
        paragraphs: [
          "Evaluation assets should evolve alongside features, not after launch.",
          "Continuous evaluation prevents regressions in high-impact workflows.",
        ],
      },
      {
        heading: "Align stakeholders on risk posture",
        paragraphs: [
          "Product, legal, and operations teams need shared assumptions about acceptable failure modes.",
          "Early alignment avoids expensive rework near launch.",
        ],
      },
    ],
  },
  {
    id: "b4",
    slug: "building-a-high-signal-portfolio-in-the-ai-era",
    title: "Building a High-Signal Portfolio in the AI Era",
    excerpt:
      "A strong portfolio now demonstrates decision quality, systems thinking, and measurable outcomes.",
    category: "Career",
    date: "2025-11-03",
    readTime: "5 min read",
    tags: ["Portfolio", "Career", "Case Studies"],
    sections: [
      {
        heading: "Show your decisions, not just outputs",
        paragraphs: [
          "Hiring teams care about why decisions were made under constraint.",
          "Case studies should highlight tradeoffs, assumptions, and iteration logic.",
        ],
      },
      {
        heading: "Include operational outcomes",
        paragraphs: [
          "Quantifiable impact creates signal: cycle-time changes, adoption, quality, and business outcomes.",
          "Metrics contextualize craft and help others understand the scale of your work.",
        ],
      },
      {
        heading: "Use concise storytelling",
        paragraphs: [
          "A high-signal portfolio is easy to scan and deep enough for detailed review.",
          "Structure consistently: problem, role, approach, outcomes, lessons.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
