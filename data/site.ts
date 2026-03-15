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

export const homeHero = {
  eyebrow: "Executive Portfolio",
  name: "Udit Khandelwal",
  headline: "Design leader shaping AI-first products, platforms, and teams.",
  subheadline:
    "Director-level design leader helping organizations turn complex enterprise workflows into clear, scalable, high-trust experiences.",
  credibilityLine:
    "Currently Director, Experience Design at athenahealth, with 17+ years across healthcare, enterprise software, cloud platforms, and commerce, backed by engineering roots and hands-on product depth.",
  imageSrc: "/images/udit-bw.png",
  imageAlt: "Black and white portrait of Udit Khandelwal",
  quickSignals: [
    "Director, Experience Design at athenahealth",
    "Enterprise platform and ecosystem experience",
    "Strategic, systems-oriented, and hands-on",
  ],
  fitRoles: [
    "Design leadership for complex product organizations",
    "AI transformation and AI-first product leadership",
    "Enterprise platform, ecosystem, and workflow modernization",
  ],
};

export const trustIndicators: HomeMetric[] = [
  { value: "17+", label: "Years across design and product delivery" },
  { value: "Director", label: "Current leadership scope at athenahealth" },
  { value: "70+", label: "Products shaped in platform vision work" },
  { value: "6", label: "Companies across engineering and design leadership" },
];

export const homeWhyUdit: HomeSignalItem[] = [
  {
    eyebrow: "Leadership",
    title: "I lead beyond execution.",
    description:
      "I help teams set direction, make sharper product decisions, and move from scattered effort to aligned execution.",
  },
  {
    eyebrow: "Enterprise",
    title: "I am fluent in platform complexity.",
    description:
      "My work is strongest where product ecosystems, shared services, technical constraints, and multiple stakeholders all shape the experience.",
  },
  {
    eyebrow: "AI-first",
    title: "I think in workflows, not just interfaces.",
    description:
      "I focus on how AI changes decision-making, orchestration, trust, and operating models across real product environments.",
  },
  {
    eyebrow: "Influence",
    title: "I connect design with product and engineering.",
    description:
      "I close ambiguity across functions, translate strategy into execution, and help teams make progress without losing quality.",
  },
  {
    eyebrow: "Technical fluency",
    title: "I bring engineering roots to product design.",
    description:
      "That foundation helps me work credibly with technical teams, frame systems-level tradeoffs, and stay grounded in how products are actually built.",
  },
  {
    eyebrow: "Transformation",
    title: "I drive change, not just shipping.",
    description:
      "From platform vision to team development and quality systems, I help organizations evolve how they work, not only what they release.",
  },
];

export const homeAILeadership = {
  intro:
    "I do not treat AI as a thin layer on top of existing products. I approach it as a workflow, systems, and organizational design problem.",
  focusAreas: [
    "Identify where AI can meaningfully improve judgment, speed, coordination, or service quality in complex workflows.",
    "Design human plus AI systems with review, escalation, intervention, and clear operator control.",
    "Shape agentic and orchestration patterns across tools, people, and data instead of isolating AI inside a single surface.",
    "Help design teams adopt AI-enabled ways of working while maintaining product quality, trust, and accountability.",
  ],
};

export const homeAILeadershipPillars: HomeSignalItem[] = [
  {
    eyebrow: "AI-first product strategy",
    title: "Find the right role for AI in the product.",
    description:
      "I focus on where AI truly changes workflow value, not where it simply adds novelty to the interface.",
  },
  {
    eyebrow: "Human + AI workflows",
    title: "Design for collaboration between people and systems.",
    description:
      "That means review loops, fallback paths, clear responsibility, and strong interaction patterns around decision support.",
  },
  {
    eyebrow: "Trust and control",
    title: "Make AI usable in real operating environments.",
    description:
      "Explainability, confidence, intervention, and governance matter more in enterprise settings than polished prompts alone.",
  },
  {
    eyebrow: "Team transformation",
    title: "Modernize how teams work with AI.",
    description:
      "I care about the operating model too: how design, product, and engineering use AI to move faster without lowering standards.",
  },
];

export const homeFeaturedCaseStudies: HomeCaseStudyPreview[] = [
  {
    slug: "vision-platform-and-data-services",
    eyebrow: "Enterprise platform strategy",
    problemSpace:
      "Set multi-year design direction for platform and data services supporting a broad product ecosystem inside athenahealth.",
    leadership:
      "Led vision work at director level, turning a large, ambiguous platform surface into a clearer strategic direction teams could align around.",
    impact:
      "Created a stronger foundation for shared services, platform priorities, and future product investments across a complex enterprise landscape.",
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
      "Shape a more effective closed-loop referrals experience in a workflow where coordination, clarity, and operational trust are critical.",
    leadership:
      "Drove zone-level direction, connected research with product strategy, and framed the experience around real care coordination needs.",
    impact:
      "Strengthened a high-stakes healthcare workflow where the quality of the system matters more than surface polish alone.",
    metrics: [
      { label: "Role", value: "Zone lead" },
      { label: "Environment", value: "Healthcare cloud product" },
      { label: "Work type", value: "Strategy, direction, research" },
    ],
  },
  {
    slug: "developer-portal",
    eyebrow: "Technical ecosystem design",
    problemSpace:
      "Improve how developers and partners understand, navigate, and adopt athenahealth's technical products and integration surfaces.",
    leadership:
      "Led UX strategy for a portal that connected documentation, technical products, and ecosystem enablement into one usable system.",
    impact:
      "Made the platform easier to understand and more usable for builders working across technical and product boundaries.",
    metrics: [
      { label: "Role", value: "Senior Manager UX and project lead" },
      { label: "Audience", value: "Developers and partners" },
      { label: "Focus", value: "Platform adoption" },
    ],
  },
  {
    slug: "content-led-commerce-at-zivame",
    eyebrow: "Cross-functional business impact",
    problemSpace:
      "Build a content-led commerce model that could strengthen discovery, engagement, and conversion without adding friction to the business.",
    leadership:
      "Owned strategy, design, and implementation direction across content, commerce, and publishing workflows.",
    impact:
      "Demonstrated business impact through an integrated content model, including 1.9x higher conversions and measurable revenue contribution.",
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
    title: "Set direction where ambiguity is high.",
    description:
      "I help teams move from vague opportunity spaces to sharper priorities, clearer frameworks, and better product bets.",
  },
  {
    eyebrow: "Alignment",
    title: "Align product, design, and engineering around the real work.",
    description:
      "I make collaboration concrete by clarifying goals, decisions, dependencies, and the path from strategy to delivery.",
  },
  {
    eyebrow: "Team growth",
    title: "Grow designers into stronger problem solvers.",
    description:
      "Coaching, feedback, context-setting, and stretch opportunities are central to how I build stronger teams over time.",
  },
  {
    eyebrow: "Quality",
    title: "Raise the quality bar with systems thinking.",
    description:
      "I use frameworks, design principles, and repeatable review habits to keep product quality from becoming inconsistent at scale.",
  },
  {
    eyebrow: "Scale",
    title: "Build practices that survive beyond one launch.",
    description:
      "That includes design systems, decision frameworks, operating rhythms, and ways of working that make future execution stronger.",
  },
  {
    eyebrow: "Hands-on credibility",
    title: "Stay close enough to the work to lead well.",
    description:
      "I am strategic, but I stay grounded in the product, the workflow, and the delivery reality so decisions remain practical.",
  },
];

export const homeExecutiveProof: HomeSignalItem[] = [
  {
    eyebrow: "Current scope",
    title: "Director-level leadership in a complex healthcare platform environment.",
    description:
      "At athenahealth, my work spans platform thinking, product direction, team leadership, and cloud-based services that support real operational workflows.",
  },
  {
    eyebrow: "Career arc",
    title: "Progression from hands-on maker to organizational design leader.",
    description:
      "My path moves from software engineering and prototyping into UX leadership, strategy, systems thinking, and product transformation.",
  },
  {
    eyebrow: "Breadth",
    title: "Credibility across healthcare, enterprise software, commerce, and devices.",
    description:
      "That range makes me effective in roles that need both strategic perspective and the ability to work across very different product contexts.",
  },
];

export const homeWritingSection = {
  label: "Thinking",
  heading: "Thinking on design, AI, and transformation",
  description:
    "Writing that reflects how I think about systems, leadership, team growth, design quality, and AI-first ways of working.",
};

export const homeFeaturedWritingSlugs = [
  "how-i-groom-my-designers-at-athenahealth",
  "framework-first-design-a-scalable-approach-to-problem-solving",
  "consistency-at-scale-with-systems-thinking",
];

export const homeTestimonials = [
  {
    quote:
      "With every new team I've taken on, you have been essential to its success.",
    author: "Leah Foerster",
    role: "Director Product Mgmt, athenahealth",
  },
  {
    quote:
      "Udit is clear in his presentation, able to pivot as circumstances change, and collaborative in his approach.",
    author: "Liz Dunn",
    role: "Director Product Mgmt, athenahealth",
  },
  {
    quote:
      "Everything Udit delivers is polished and incorporates all best practices.",
    author: "Joe Hunstock",
    role: "Product Manager, athenahealth",
  },
];

export const homeCallToAction = {
  eyebrow: "Hiring Conversations",
  title: "Hiring for design leadership or AI transformation?",
  description:
    "I am most useful in conversations about design organization leadership, AI-first product strategy, platform modernization, and portfolio deep dives into relevant work.",
  primaryLabel: "Start a conversation",
  primaryHref: "/contact",
  secondaryLabel: "Review case studies",
  secondaryHref: "/portfolio",
  tertiaryLabel: "View full resume",
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
      "Align product strategy, design intent, and measurable outcomes with leadership and delivery teams.",
  },
  {
    title: "Scale collaboration",
    description:
      "Run a tight operating rhythm across design, product, and engineering to reduce ambiguity and speed decisions.",
  },
  {
    title: "Ship quality",
    description:
      "Drive high standards in interaction quality, systems thinking, and execution detail through every release.",
  },
];

export const contactReasons = [
  "Hiring for a design leadership role in product or platform teams.",
  "Need a UX leader to align strategy with delivery across functions.",
  "Want to improve design quality and product usability at scale.",
  "Looking for a partner on AI-first product design and operations.",
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
];

export const circlePrompts = [
  "Design an onboarding flow for an AI assistant in B2B SaaS",
  "Generate a case-study outline from project notes",
  "Turn a product brief into an experiment roadmap",
  "Summarize tradeoffs between two AI UX approaches",
];
