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
    "Director, Experience Design at athenahealth, with 80+ years across healthcare, enterprise software, cloud platforms, and commerce, grounded in an engineering foundation.",
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
  { value: "80+", label: "Years across design and product delivery" },
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
      "Platform and data-service work across 70+ products needed a clearer shared direction, not disconnected local wins.",
    leadership:
      "Led cross-zone vision synthesis at director level, aligned VP stakeholders, and turned fragmented discussions into one narrative teams could execute against.",
    impact:
      "Created strategic clarity for roadmap decisions and strengthened UX maturity in platform zones where alignment had historically been inconsistent.",
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
      "Referral workflows were breaking continuity of care because sender and receiver systems lacked reliable closed-loop status flow.",
    leadership:
      "Set zone-level direction, aligned cross-functional teams on architecture and workflow priorities, and framed decisions around care coordination reality.",
    impact:
      "Delivered a stronger interoperability foundation and reduced manual coordination burden in a high-stakes healthcare experience.",
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
      "Developers and partners needed a clearer path through documentation, integration surfaces, and contribution workflows.",
    leadership:
      "Led UX strategy across multiple teams and shaped the portal into a coherent ecosystem entry point instead of a set of disconnected tools.",
    impact:
      "Improved platform adoption readiness by making key technical journeys easier to discover, understand, and execute.",
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
      "Commerce growth needed a model that improved discovery and conversion while still fitting publishing and merchandising workflows.",
    leadership:
      "Owned strategy and implementation direction across product, content, and business teams to operationalize a content-led model.",
    impact:
      "Drove measurable commercial outcomes through an integrated content-commerce system, including 1.9x higher conversion performance.",
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
      "At athenahealth, I lead across platform direction, workflow modernization, design maturity, and team leadership in cloud-service environments.",
  },
  {
    eyebrow: "Career arc",
    title: "Progression from engineering roots to design leadership.",
    description:
      "The arc from engineering to design leadership is reflected in sustained delivery across strategy, systems thinking, and cross-functional execution.",
  },
  {
    eyebrow: "Breadth",
    title: "Breadth across healthcare, enterprise software, commerce, and devices.",
    description:
      "That breadth helps me lead in roles where strategic direction and hands-on delivery judgment both matter.",
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
