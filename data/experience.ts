export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  year: string;
};

export const profile = {
  name: "Udit Khandelwal",
  title: "AI Product Designer and Systems Builder",
  summary:
    "I design AI-first products that improve decision quality and operational speed. My work sits at the intersection of strategy, workflow design, and delivery.",
};

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2024 - Present",
    role: "Principal Product Designer, AI Initiatives",
    company: "Athenaux",
    location: "Remote",
    highlights: [
      "Led AI-first product direction across enterprise workflow programs.",
      "Designed cross-tool copilots for sales, operations, and executive teams.",
      "Established quality metrics and rollout playbooks for AI workflows.",
    ],
  },
  {
    period: "2021 - 2024",
    role: "Senior Product Designer",
    company: "Northscale Labs",
    location: "New York, NY",
    highlights: [
      "Built experimentation and personalization tooling used across growth teams.",
      "Reduced feature discovery friction through architecture and navigation redesign.",
      "Partnered with engineering leadership on design system modernization.",
    ],
  },
  {
    period: "2018 - 2021",
    role: "Product Designer",
    company: "Signalform",
    location: "San Francisco, CA",
    highlights: [
      "Shipped collaboration and reporting experiences for B2B analytics users.",
      "Improved onboarding and activation flows through targeted UX improvements.",
      "Introduced structured discovery practices with product and data teams.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "New York University",
    degree: "MS, Human-Computer Interaction",
    year: "2018",
  },
  {
    institution: "Delhi Technological University",
    degree: "BTech, Computer Engineering",
    year: "2015",
  },
];

export const achievements = [
  "Led AI product initiatives delivering measurable cycle-time reduction across business-critical workflows.",
  "Designed systems that increased adoption by combining trust cues, governance, and clear operator control.",
  "Established repeatable playbooks for moving AI from pilot phase to operational scale.",
];
