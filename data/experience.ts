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

export type TrainingCertificationItem = {
  year: string;
  title: string;
  provider: string;
  summary: string;
};

export const profile = {
  name: "Udit Khandelwal",
  title: "Design leader focused on AI-first products, enterprise platforms, and transformation work",
  summary:
    "Director-level design leader with engineering roots and 80+ years across healthcare, enterprise software, cloud platforms, and commerce. I work with teams to clarify direction, modernize complex workflows, and build durable design and product systems for long-term outcomes.",
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
      "Led subdivision-level vision work across Integration and Foundational zones, helping move UX performance from lagging to strong through alignment and execution.",
      "Drove cross-organization platform and AI transformation initiatives that strengthened UX influence in roadmap planning while enabling teams with scalable methods, coaching, and adoption programs.",
    ],
  },
  {
    period: "2018 - 2021",
    role: "Senior Manager, UX",
    company: "athenahealth",
    location: "Boston",
    highlights: [
      "Shaped platform and partner-ecosystem UX direction, including roadmap and systems alignment across teams during major organizational transitions.",
      "Built durable UX operating foundations, raised design quality practices, and improved customer outcomes across platform and partner experiences during organizational transition.",
    ],
  },
  {
    period: "2017 - 2018",
    role: "Manager, UX",
    company: "athenahealth",
    location: "Bengaluru",
    highlights: [
      "Led AGILE transformation practices in the design workflow and helped establish JIRA-based collaboration patterns as a shared source of truth.",
      "Led high-velocity product design delivery across web and platform surfaces while coaching team growth, supporting hiring, and improving cross-functional collaboration.",
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

export const trainingAndCertifications: TrainingCertificationItem[] = [
  {
    year: "2019 - 2020",
    title: "Executive Certificate in Management and Leadership",
    provider: "Massachusetts Institute of Technology",
    summary:
      "Completed MIT executive education programs covering platform strategy, complex business problem solving, finance for technical executives, and managing technical professionals and organizations.",
  },
  {
    year: "2022",
    title: "Digital Health",
    provider: "Harvard Online",
    summary:
      "Studied digital transformation in healthcare, including implementation strategy, adoption barriers, and opportunities created by data and digital technologies.",
  },
  {
    year: "2021",
    title: "Performance Leadership",
    provider: "eCornell",
    summary:
      "Completed a three-month leadership program focused on coaching, cross-cultural leadership, service quality, innovation, organizational change, and influence.",
  },
  {
    year: "2015",
    title: "Certified Experience Analyst (CXA)",
    provider: "Human Factors International",
    summary:
      "Completed PET design, PET architect, innovation strategy, and UX-practice institutionalization training as part of the certification program.",
  },
  {
    year: "2012",
    title: "Certified Usability Analyst (CUA)",
    provider: "Human Factors International",
    summary:
      "Completed training in UX foundations, user-centered analysis and conceptual design, application design, and practical usability testing.",
  },
  {
    year: "2010 and 2012",
    title: "Adobe Certified Expert (Flash and Illustrator)",
    provider: "Adobe",
    summary:
      "Earned Adobe certifications by completing formal training and passing proficiency exams for both Flash and Illustrator.",
  },
];

export const achievements = [
  "Set direction for platform and data-services vision work at athenahealth across a broad ecosystem spanning 70+ products.",
  "Translated ambiguous, cross-zone problem spaces into shared narratives that product, engineering, and design teams could align around and execute.",
  "Led AI transformation in design operations through practical frameworks, hands-on enablement, and broad adoption across teams.",
  "Built durable design quality and collaboration practices that improved execution consistency across platform, partner, and workflow surfaces.",
  "Progressed from software engineering to director-level design leadership while retaining technical fluency and delivery depth.",
  "Delivered sustained outcomes across healthcare, enterprise platforms, cloud products, and commerce through systems thinking and operational leadership.",
];
