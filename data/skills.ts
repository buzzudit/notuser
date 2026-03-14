export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI Product Strategy",
    skills: [
      "AI opportunity framing",
      "Workflow decomposition",
      "Evaluation planning",
      "Human-in-the-loop design",
      "Prompt orchestration",
    ],
  },
  {
    category: "UX + Interface Systems",
    skills: [
      "Information architecture",
      "Interaction design",
      "Design systems",
      "Accessibility-first UI",
      "Prototyping",
    ],
  },
  {
    category: "Execution + Delivery",
    skills: [
      "Cross-functional leadership",
      "Roadmapping",
      "Discovery facilitation",
      "Experiment design",
      "Quality instrumentation",
    ],
  },
  {
    category: "Technical Fluency",
    skills: [
      "Next.js",
      "TypeScript",
      "API design",
      "Data modeling",
      "Analytics and telemetry",
    ],
  },
];

export const impactStats = [
  { label: "AI launches", value: "18+" },
  { label: "Products scaled", value: "7" },
  { label: "Avg cycle-time gain", value: "41%" },
  { label: "Cross-functional teams led", value: "12" },
];
