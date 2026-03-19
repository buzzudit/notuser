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

export type ResumeTestimonial = {
  author: string;
  role: string;
  quote: string;
  photoSrc: string;
};

export const profile = {
  name: "Udit Khandelwal",
  title:
    "Director-level design leader with engineering roots, shaping AI-first enterprise platforms and complex product transformation work.",
  summary:
    "Director-level design leader with engineering roots, shaping AI-first enterprise platforms and complex product transformation work.",
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
    institution: "Thapar University",
    degree: "Bachelor of Engineering, Computer Science",
    year: "2003 - 2007",
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
    year: "2010, 2012",
    title: "Adobe Certified Expert, Flash and Illustrator",
    provider: "Adobe",
    summary:
      "Completed Adobe certification tracks and proficiency exams for both Flash and Illustrator.",
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

export const resumeTestimonials: ResumeTestimonial[] = [
  {
    author: "Melissa Ledoux",
    role: "",
    quote:
      "Udit, thank you for your exceptional guidance and support. Your strategic direction and partnership have been invaluable in helping me mentor and guide my team. I truly appreciate the positive impact you have made on our collaboration.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_5fc320cc8369458a96aa40995429afec~mv2.jpg",
  },
  {
    author: "Leah Foerster",
    role: "Director Product Mgmt, athenahealth",
    quote:
      "What an incredible impact you have! With every new team I have taken on, you have been essential to its success.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_032bb53ebf4d4f04a61248fd5cf866d5~mv2.jpeg",
  },
  {
    author: "Liz Dunn",
    role: "Director Product Mgmt, athenahealth",
    quote:
      "Udit is clear in his presentation, able to pivot as circumstances change, open to feedback, collaborative in his approach, thoughtful and considerate with his colleagues, empathetic and positive.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_d30fe141a45b4a4185de58d7db370273~mv2.jpeg",
  },
  {
    author: "Brian Murphy",
    role: "CSO, Kaseya",
    quote:
      "Udit's attention to detail is excellent, his intuitiveness is incredible and his skills are extremely excellent.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_22030d6b4af0470a905b6f8eb13e1a97~mv2.jpg",
  },
  {
    author: "Guruprasad Baskaran",
    role: "Director Engineering, Zivame",
    quote:
      "Udit is not just excellent at design but also understands the nuances of requirements from the viewpoint of a product manager / business person.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_0c5e467c22ef4d1792814306123d0126~mv2.jpeg",
  },
  {
    author: "Gogul R G",
    role: "",
    quote:
      "Thanks Udit for your great support and motivation in my work. There have been a lot of learnings from you! It's been a wonderful experience working with you, and I look forward to continuing this collaboration.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_6db684a14d904584b4aafc442d85acad~mv2.jpeg",
  },
  {
    author: "Satish Kumar",
    role: "Senior Visualizer, Cisco",
    quote:
      "Udit is a key player in the team. His work is on the forefront of all our team's showcases.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_e19b3d2faa4343018f33ff2581b0e068~mv2.jpeg",
  },
  {
    author: "Joe Hunstock",
    role: "Product Manager, athenahealth",
    quote:
      "Udit has been fantastic. He has a lot of great ideas and is very open to feedback. Everything Udit delivers is polished and incorporates all best practices.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_137366605d76475d936c78f41a3a5620~mv2.png",
  },
  {
    author: "Tom Hayes",
    role: "VP Product Mktg, Kaseya",
    quote:
      "Udit's work was on time and of the highest quality. He offered excellent insight on the task, and was a pleasure to work with.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_44a9d99c8bff47aabff5385ddaa07411~mv2.jpeg",
  },
  {
    author: "Vignesh Prabhu NR",
    role: "",
    quote:
      "It feels like a dream to have accomplished so much in the last five days; none of it would have been possible without your mentoring, support, and encouragement, from planning zone meetings to driving impactful outcomes together.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_88b32f7fe2a94393bdd598a82a10b68c~mv2.jpg",
  },
  {
    author: "Jamie Simpson",
    role: "Sr Manager, Adobe",
    quote:
      "Udit is a very committed individual. I can always count on Udit to go that extra mile to ensure customer satisfaction.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_26aa1572436f41478bfddb0886bb2e72~mv2.jpg",
  },
  {
    author: "Christie Flanagan",
    role: "VP Corp Mktg, Kaseya",
    quote:
      "Quick turn around. Very happy with his creative work. He manages the process as well which makes things very easy for me.",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_779e339e01b142fcb2be2a120b06d80f~mv2.jpeg",
  },
  {
    author: "Nikki Davis",
    role: "",
    quote:
      "Udit, thank you for your unwavering support and guidance. Your design knowledge and business understanding have been invaluable to me. I always knew I could count on you for insightful feedback and honest advice, which helped me grow as a professional. It was a pleasure working with you!",
    photoSrc:
      "/media/mirror/static.wixstatic.com/media/bc4f65_7da0eae4726e4fdaa4907a913cb5fd92~mv2.jpeg",
  },
];
