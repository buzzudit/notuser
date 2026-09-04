export type HomeMetric = {
  label: string;
  value: string;
};

export type HomeSignalItem = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomeCaseStudyPreview = {
  slug: string;
  eyebrow: string;
  problemSpace: string;
  leadership: string;
  impact: string;
  metrics: HomeMetric[];
};

export type ContactReason = {
  label: string;
  title: string;
  description: string;
};

export type ContactConversationOption = {
  value: string;
  label: string;
};

export const homeHero = {
  eyebrow: "Executive Portfolio",
  name: "Udit Khandelwal",
  headline: "Design leader for AI-first products and enterprise platforms",
  subheadline:
    "I help product organizations turn messy workflows into clear product direction, stronger teams, and experiences people can trust.",
  credibilityLine:
    "18+ years across healthcare, enterprise software, cloud platforms, and commerce, with an engineering foundation.",
  imageSrc: "/images/udit-bw.png",
  imageAlt: "Black and white portrait of Udit Khandelwal",
  quickSignals: [
    "Director, Experience Design at athenahealth",
    "Enterprise platforms, ecosystems, and workflow products",
    "Strategy, systems thinking, and hands-on execution",
  ],
  fitRoles: [
    "Design leadership for complex product organizations",
    "AI-first product strategy and transformation initiatives",
    "Platform modernization across enterprise and healthcare environments",
  ],
};

export const trustIndicators: HomeMetric[] = [
  { value: "18+", label: "Years across design and product delivery" },
  { value: "Director", label: "Current leadership scope" },
  { value: "70+", label: "Products influenced in platform vision work" },
  { value: "6", label: "Companies across engineering and design leadership" },
];

export const homeWhyUdit: HomeSignalItem[] = [
  {
    eyebrow: "Current scope",
    title: "Healthcare design leadership at scale.",
    description:
      "At athenahealth, I lead platform direction, workflow modernization, design quality, and team growth in a cloud product environment.",
  },
  {
    eyebrow: "Enterprise work",
    title: "Depth in platforms and workflows.",
    description:
      "My work spans healthcare, developer ecosystems, data services, commerce, and mobility products where constraints are real and alignment matters.",
  },
  {
    eyebrow: "Technical fluency",
    title: "Engineering roots behind practical design.",
    description:
      "I started in software engineering, so I can work closely with technical teams, read tradeoffs clearly, and keep direction realistic.",
  },
];

export const homeAILeadership = {
  intro:
    "I treat AI as a workflow, systems, and operating-model challenge, not just an interface feature.",
  focusAreas: [
    "Find where AI can improve judgment, speed, coordination, or service quality.",
    "Design human plus AI systems with review, escalation, and clear operator control.",
    "Shape orchestration across tools, people, and data instead of isolating AI in one surface.",
    "Help teams adopt AI-enabled practices without lowering standards for trust or quality.",
  ],
};

export const homeAILeadershipPillars: HomeSignalItem[] = [
  {
    eyebrow: "AI-first product strategy",
    title: "Find durable product value.",
    description:
      "I focus on where AI changes workflow value, not where it only adds novelty.",
  },
  {
    eyebrow: "Human + AI workflows",
    title: "Design clear collaboration patterns.",
    description:
      "That means review loops, fallback paths, clear responsibility, and strong decision support.",
  },
  {
    eyebrow: "Trust and control",
    title: "Build trust through control.",
    description:
      "Explainability, confidence, intervention, and governance matter more than polished prompts alone.",
  },
  {
    eyebrow: "Team transformation",
    title: "Help teams change how they work.",
    description:
      "I care about how design, product, and engineering use AI to move faster without lowering standards.",
  },
];

export const homeFeaturedCaseStudies: HomeCaseStudyPreview[] = [
  {
    slug: "vision-platform-and-data-services",
    eyebrow: "Enterprise platform strategy",
    problemSpace:
      "Platform and data-service work across 70+ products needed one shared direction instead of disconnected local wins.",
    leadership:
      "Led cross-zone vision synthesis, aligned VP stakeholders, and turned fragmented discussions into a narrative teams could act on.",
    impact:
      "Created clearer roadmap direction and strengthened UX maturity in platform zones where alignment had been inconsistent.",
    metrics: [
      { label: "Scope", value: "70+ products" },
      { label: "Role", value: "Director and project lead" },
      { label: "Focus", value: "Platform and data services" },
    ],
  },
  {
    slug: "360x-closed-loop-referrals",
    eyebrow: "Healthcare workflow leadership",
    problemSpace:
      "Referral workflows were weakening continuity of care because sender and receiver systems lacked reliable closed-loop status.",
    leadership:
      "Set zone-level direction, aligned architecture and workflow priorities, and framed decisions around care coordination reality.",
    impact:
      "Created a stronger interoperability foundation and reduced manual coordination burden in a high-stakes healthcare experience.",
    metrics: [
      { label: "Role", value: "Zone lead" },
      { label: "Environment", value: "Healthcare cloud product" },
      { label: "Work type", value: "Strategy, direction, research" },
    ],
  },
  {
    slug: "spine-triage",
    eyebrow: "Human + AI product leadership",
    problemSpace:
      "An AI triage agent could investigate defects competently, but engineers could not see what it had done, what evidence it used, or what it intended next.",
    leadership:
      "Set the experience direction and stayed close enough to implement it, reorganising the product around inspectable runs and explicit human approval rather than a chat transcript.",
    impact:
      "Reached production in September 2026 with feature parity intact, establishing a trust model where the system proposes and a developer decides.",
    metrics: [
      { label: "Role", value: "Experience direction and delivery" },
      { label: "Delivery", value: "Production, September 2026" },
      { label: "Control model", value: "No autonomous merge or submit" },
    ],
  },
  {
    slug: "content-led-commerce-at-zivame",
    eyebrow: "Cross-functional business impact",
    problemSpace:
      "Commerce growth needed a model that improved discovery and conversion while fitting publishing and merchandising workflows.",
    leadership:
      "Owned strategy and implementation direction across product, content, and business teams.",
    impact:
      "Drove measurable commercial outcomes through an integrated content-commerce system, including 1.9x higher conversion.",
    metrics: [
      { label: "Role", value: "UX Director and project lead" },
      { label: "Impact", value: "1.9x higher conversions" },
      { label: "Model", value: "Content-led commerce" },
    ],
  },
];

export const homeLeadershipModel: HomeSignalItem[] = [
  {
    eyebrow: "Direction",
    title: "Clarity in ambiguous work.",
    description:
      "I help teams move from vague opportunities to sharper priorities, clearer frameworks, and better product bets.",
  },
  {
    eyebrow: "Alignment",
    title: "Alignment across functions.",
    description:
      "I make collaboration concrete by clarifying goals, decisions, dependencies, and the path to delivery.",
  },
  {
    eyebrow: "Team growth",
    title: "Team growth through coaching.",
    description:
      "Coaching, feedback, context-setting, and stretch opportunities are central to how I build stronger teams over time.",
  },
  {
    eyebrow: "Quality",
    title: "Quality through repeatable habits.",
    description:
      "I use frameworks, principles, and review rhythms to keep product quality from becoming inconsistent at scale.",
  },
  {
    eyebrow: "Scale",
    title: "Practices that outlast launches.",
    description:
      "That includes design systems, decision frameworks, operating rhythms, and ways of working that make future execution stronger.",
  },
  {
    eyebrow: "Hands-on credibility",
    title: "Hands-on judgment when needed.",
    description:
      "I stay close enough to the product, workflow, and delivery reality to keep decisions practical.",
  },
];

export const homeExecutiveProof: HomeSignalItem[] = [
  {
    eyebrow: "Current scope",
    title: "Senior-level scope in healthcare platforms.",
    description:
      "At athenahealth, I lead platform direction, workflow modernization, design maturity, and team leadership in cloud-service environments.",
  },
  {
    eyebrow: "Career arc",
    title: "From engineering roots to design leadership.",
    description:
      "That arc shows up in strategy, systems thinking, and cross-functional execution across the portfolio.",
  },
  {
    eyebrow: "Breadth",
    title: "Breadth across high-constraint domains.",
    description:
      "Healthcare, enterprise software, commerce, and devices shaped how I balance strategy with delivery judgment.",
  },
];

export const homeWritingSection = {
  label: "Thinking",
  heading: "Writing on design, leadership, and AI",
  description:
    "Selected essays on systems thinking, product quality, design leadership, and AI-enabled ways of working.",
};

export const homeFeaturedWritingSlugs = [
  "how-i-groom-my-designers-at-athenahealth",
  "framework-first-design-a-scalable-approach-to-problem-solving",
  "consistency-at-scale-with-systems-thinking",
];

export const homeTestimonials = [
  {
    quote:
      "What an incredible impact you have! With every new team I have taken on, you have been essential to its success.",
    author: "Leah Foerster",
    role: "Director Product Mgmt, athenahealth",
    image:
      "wix:image://v1/bc4f65_032bb53ebf4d4f04a61248fd5cf866d5~mv2.jpeg/leah.jpeg#originWidth=400&originHeight=400",
  },
  {
    quote:
      "Udit is clear in his presentation, able to pivot as circumstances change, open to feedback, collaborative in his approach, thoughtful and considerate with his colleagues, empathetic and positive.",
    author: "Liz Dunn",
    role: "Director Product Mgmt, athenahealth",
    image:
      "wix:image://v1/bc4f65_d30fe141a45b4a4185de58d7db370273~mv2.jpeg/lizd.jpeg#originWidth=400&originHeight=399",
  },
  {
    quote:
      "Udit has been fantastic. He has a lot of great ideas and is very open to feedback. Everything Udit delivers is polished and incorporates all best practices.",
    author: "Joe Hunstock",
    role: "Product Manager, athenahealth",
    image:
      "wix:image://v1/bc4f65_137366605d76475d936c78f41a3a5620~mv2.png/joe%20hunstock%20-%20athenahealth.png#originWidth=200&originHeight=200",
  },
];

export const homeCallToAction = {
  eyebrow: "Conversations",
  title: "Looking for design leadership or AI product strategy?",
  description:
    "If the role involves design leadership, AI-first product strategy, or platform modernization, I can share relevant work and talk through fit.",
  primaryLabel: "Start a conversation",
  primaryHref: "/contact",
  secondaryLabel: "Explore case studies",
  secondaryHref: "/portfolio",
  tertiaryLabel: "View resume",
  tertiaryHref: "/resume",
};

export const designFeatures = [
  {
    title: "How I lead",
    description:
      "I nurture and mentor people, set strategic direction, create growth opportunities, and drive innovation across product initiatives.",
  },
  {
    title: "How I operate",
    description:
      "I identify and close communication gaps between Product, Engineering, and business teams to improve execution efficiency.",
  },
  {
    title: "How I deliver",
    description:
      "I continuously hone design quality and strategy to ship products and cloud apps that are useful, usable, and beautiful.",
  },
];

export const aiWorkflowSteps = [
  {
    title: "Set direction",
    description:
      "Align product strategy, design intent, and outcomes with leadership and delivery teams.",
  },
  {
    title: "Scale collaboration",
    description:
      "Run a clear operating rhythm across design, product, and engineering.",
  },
  {
    title: "Ship quality",
    description:
      "Keep interaction quality, systems thinking, and execution detail visible through release.",
  },
];

export const contactReasons: ContactReason[] = [
  {
    label: "Hiring",
    title: "Senior design leadership searches",
    description:
      "For teams hiring a design leader who can create clarity, align partners, and raise product quality.",
  },
  {
    label: "AI",
    title: "AI product and workflow strategy",
    description:
      "For organizations rethinking product strategy, operating models, and human-plus-AI workflows.",
  },
  {
    label: "Portfolio",
    title: "Case study walkthroughs",
    description:
      "For hiring managers and leadership teams who want to go deeper on selected work, decision-making, tradeoffs, and leadership context.",
  },
  {
    label: "Advisory",
    title: "Focused advisory conversations",
    description:
      "For targeted discussions on platform thinking, design systems, product direction, or quality at scale.",
  },
];

export const contactConversationOptions: ContactConversationOption[] = [
  { value: "design-leadership-role", label: "Design leadership role" },
  { value: "ai-transformation", label: "AI transformation conversation" },
  { value: "portfolio-deep-dive", label: "Portfolio deep dive" },
  { value: "advisory-strategy", label: "Advisory or strategy discussion" },
  { value: "other", label: "Other" },
];

export const directContact = {
  email: "udit@notuser.com",
  locationLabel: "Greater Boston Area",
  locationHref:
    "https://www.google.com/maps/place/Boston+Metropolitan+Area/@42.3122307,-71.308966,10.08z/data=!4m6!3m5!1s0x89e30b92b7c5e443:0x78ad15d3851547d6!8m2!3d42.3600709!4d-71.0588305!16zL20vMDNreHpt?entry=ttu",
  linkedinHref: "https://www.linkedin.com/in/khandelwaludit/",
  availability:
    "Open to conversations about design leadership roles, AI product strategy, and relevant portfolio walkthroughs.",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khandelwaludit/" },
];

export const circlePrompts = [
  "Design an onboarding flow for an AI assistant in B2B SaaS",
  "Generate a case-study outline from project notes",
  "Turn a product brief into an experiment roadmap",
  "Summarize tradeoffs between two AI UX approaches",
];
