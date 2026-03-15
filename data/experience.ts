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

export type ResumeSignal = {
  label: string;
  title: string;
  description: string;
};

export const profile = {
  name: "Udit Khandelwal",
  title: "Design leader focused on AI-first products, enterprise platforms, and transformation work",
  summary:
    "Director-level design leader with engineering roots and 17+ years across healthcare, enterprise software, cloud platforms, and commerce. I work with teams to clarify direction, modernize complex workflows, and build durable design and product systems for long-term outcomes.",
};

export const resumeSignals: ResumeSignal[] = [
  {
    label: "Current role",
    title: "Director, Experience Design at athenahealth",
    description:
      "Leading experience direction across platform and cloud-service environments where complexity, scale, and operational trust are central.",
  },
  {
    label: "Leadership approach",
    title: "Strategy, systems thinking, and hands-on product judgment",
    description:
      "I work at the intersection of design leadership, product direction, organizational clarity, and execution quality.",
  },
  {
    label: "Where I add value",
    title: "Bridging strategy, systems, and delivery in AI-era products",
    description:
      "My background spans workflow design, enterprise ecosystems, cross-functional influence, and the technical fluency needed for modern AI product environments.",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2021 - Present",
    role: "Director, Experience Design",
    company: "athenahealth",
    location: "Boston",
    highlights: [
      "Leading a world-class experience for cloud-based services and mobile tools across zones within athenahealth Platform.",
    ],
  },
  {
    period: "2018 - 2021",
    role: "Senior Manager, UX",
    company: "athenahealth",
    location: "Boston",
    highlights: [
      "Led a world-class experience for cloud-based services and mobile tools across zones within athenahealth Platform.",
    ],
  },
  {
    period: "2017 - 2018",
    role: "Manager, UX",
    company: "athenahealth",
    location: "Bengaluru",
    highlights: [
      "Defined a world-class experience for cloud-based services and mobile tools for medical groups and health systems.",
    ],
  },
  {
    period: "2016 - 2017",
    role: "UX Director",
    company: "Zivame",
    location: "Bengaluru",
    highlights: [
      "Defined shopping experience across multiple offline and online properties of Zivame.",
      "Led major redesign work focused on strengthening the brand as a global lingerie destination.",
    ],
  },
  {
    period: "2014 - 2016",
    role: "Senior UX Designer",
    company: "Kaseya",
    location: "Bengaluru",
    highlights: [
      "Redefined UX for the corporate website, e-commerce portal, and flagship product.",
      "Contributed to marketing collateral, presentations, and team-building efforts.",
    ],
  },
  {
    period: "2012 - 2014",
    role: "UX Engineer",
    company: "Cisco",
    location: "Bengaluru",
    highlights: [
      "Defined animations and developed high-fidelity interactive prototypes in Flash/AS3.",
      "Designed and innovated new tools for set-top boxes.",
    ],
  },
  {
    period: "2010 - 2012",
    role: "Mobile and Devices Engineer",
    company: "Adobe",
    location: "Bengaluru",
    highlights: [
      "Ported Flash runtimes to mobiles and devices.",
      "Handled runtime maintenance, device certification, enterprise support, and troubleshooting.",
    ],
  },
  {
    period: "2007 - 2010",
    role: "Software Engineer",
    company: "Applied Materials",
    location: "Bengaluru",
    highlights: [
      "Developed upgradable device drivers in C++ for the chip manufacturing tool Endura.",
      "Provided enterprise support and troubleshooting.",
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
  "Set direction for platform and data-services vision work at athenahealth across a broad product ecosystem spanning 70+ products.",
  "Led design organizations and cross-functional teams through platform, cloud, healthcare, and commerce initiatives where clarity and systems thinking were essential.",
  "Built credibility across product, engineering, and business partners through a blend of strategic leadership, delivery judgment, and technical fluency.",
  "Progressed from software engineering into director-level design leadership, creating a strong foundation for enterprise product and AI transformation work.",
];
