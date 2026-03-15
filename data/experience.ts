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
  "Led AI product initiatives delivering measurable cycle-time reduction across business-critical workflows.",
  "Designed systems that increased adoption by combining trust cues, governance, and clear operator control.",
  "Established repeatable playbooks for moving AI from pilot phase to operational scale.",
];
