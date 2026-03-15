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
  headline: "Design leader shaping AI-first products, platforms, and teams.",
  subheadline:
    "Director-level design leader helping product organizations turn complex enterprise workflows into clear, trustworthy experiences.",
  credibilityLine:
    "Director, Experience Design at athenahealth, with 17+ years across healthcare, enterprise software, cloud platforms, and commerce, grounded in an engineering foundation.",
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
  { value: "17+", label: "Years across design and product delivery" },
  { value: "Director", label: "Current leadership scope" },
  { value: "70+", label: "Products influenced in platform vision work" },
  { value: "6", label: "Companies across engineering and design leadership" },
];

export const homeWhyUdit: HomeSignalItem[] = [
  {
    eyebrow: "Leadership",
    title: "Direction and execution stay connected.",
    description:
      "I help teams align around direction, make clearer product decisions, and move from scattered effort to coordinated delivery.",
  },
  {
    eyebrow: "Enterprise",
    title: "Comfortable with platform complexity.",
    description:
      "My work is strongest where product ecosystems, shared services, technical constraints, and multiple stakeholders all shape the experience.",
  },
  {
    eyebrow: "AI-first",
    title: "AI thinking starts with workflows.",
    description:
      "I focus on how AI changes decision-making, orchestration, trust, and operating models across real product environments.",
  },
  {
    eyebrow: "Influence",
    title: "Cross-functional alignment as a core practice.",
    description:
      "I reduce ambiguity across functions, translate strategy into execution, and help teams make progress without losing quality.",
  },
  {
    eyebrow: "Technical fluency",
    title: "Technical fluency that supports better decisions.",
    description:
      "My engineering foundation helps me partner credibly with technical teams, frame systems-level tradeoffs, and stay grounded in delivery reality.",
  },
  {
    eyebrow: "Transformation",
    title: "Transformation beyond individual launches.",
    description:
      "From platform vision to team development and quality systems, I help organizations evolve how they work, not only what they release.",
  },
];

export const homeAILeadership = {
  intro:
    "I treat AI less as an interface feature and more as a workflow, systems, and operating-model design challenge.",
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
    title: "Clarify where AI adds durable product value.",
    description:
      "I focus on where AI truly changes workflow value, not where it simply adds novelty to the interface.",
  },
  {
    eyebrow: "Human + AI workflows",
    title: "Design strong human and AI collaboration patterns.",
    description:
      "That means review loops, fallback paths, clear responsibility, and strong interaction patterns around decision support.",
  },
  {
    eyebrow: "Trust and control",
    title: "Build trust through control, transparency, and governance.",
    description:
      "Explainability, confidence, intervention, and governance matter more in enterprise settings than polished prompts alone.",
  },
  {
    eyebrow: "Team transformation",
    title: "Help teams evolve how they work with AI.",
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
    title: "Clarity in ambiguous problem spaces.",
    description:
      "I help teams move from vague opportunity spaces to sharper priorities, clearer frameworks, and better product bets.",
  },
  {
    eyebrow: "Alignment",
    title: "Alignment across product, design, and engineering.",
    description:
      "I make collaboration concrete by clarifying goals, decisions, dependencies, and the path from strategy to delivery.",
  },
  {
    eyebrow: "Team growth",
    title: "Team growth through coaching and context.",
    description:
      "Coaching, feedback, context-setting, and stretch opportunities are central to how I build stronger teams over time.",
  },
  {
    eyebrow: "Quality",
    title: "Quality through repeatable systems.",
    description:
      "I use frameworks, design principles, and repeatable review habits to keep product quality from becoming inconsistent at scale.",
  },
  {
    eyebrow: "Scale",
    title: "Scalable practices beyond a single launch.",
    description:
      "That includes design systems, decision frameworks, operating rhythms, and ways of working that make future execution stronger.",
  },
  {
    eyebrow: "Hands-on credibility",
    title: "Hands-on judgment where needed.",
    description:
      "I am strategic, but I stay grounded in the product, the workflow, and the delivery reality so decisions remain practical.",
  },
];

export const homeExecutiveProof: HomeSignalItem[] = [
  {
    eyebrow: "Current scope",
    title: "Director-level scope in a complex healthcare platform context.",
    description:
      "At athenahealth, my work spans platform thinking, product direction, team leadership, and cloud-based services that support real operational workflows.",
  },
  {
    eyebrow: "Career arc",
    title: "Progression from engineering roots to design leadership.",
    description:
      "My path moves from software engineering and prototyping into UX leadership, strategy, systems thinking, and product transformation.",
  },
  {
    eyebrow: "Breadth",
    title: "Breadth across healthcare, enterprise software, commerce, and devices.",
    description:
      "That range makes me effective in roles that need both strategic perspective and the ability to work across very different product contexts.",
  },
];

export const homeWritingSection = {
  label: "Thinking",
  heading: "Thinking on design, AI, and transformation",
  description:
    "Writing that captures how I think about systems, leadership, product quality, and AI-first ways of working.",
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
  eyebrow: "Conversations",
  title: "Open to design leadership and AI transformation conversations",
  description:
    "If you are hiring for design leadership, AI-first product strategy, or platform modernization, I am happy to share relevant work and discuss fit.",
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

export const contactReasons: ContactReason[] = [
  {
    label: "Hiring",
    title: "Design leadership roles",
    description:
      "For teams hiring a senior design leader who can set direction, align functions, and raise product quality across complex environments.",
  },
  {
    label: "Transformation",
    title: "AI-first product and workflow work",
    description:
      "For organizations exploring how AI changes product strategy, operating models, decision support, and human-plus-AI workflows.",
  },
  {
    label: "Portfolio",
    title: "Case-study and portfolio deep dives",
    description:
      "For hiring managers and leadership teams who want to go deeper on selected work, scope, tradeoffs, and how I operated in context.",
  },
  {
    label: "Advisory",
    title: "Strategic product and design conversations",
    description:
      "For focused conversations on platform thinking, design systems, organizational clarity, or quality at scale.",
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
    "Open to conversations about design leadership roles, AI-first product transformation, and relevant portfolio walkthroughs.",
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
