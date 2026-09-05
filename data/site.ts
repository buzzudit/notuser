import { getClaimById } from "./claims";

export type HomeMetric = {
  label: string;
  value: string;
};

export type HomeSignalItem = {
  eyebrow: string;
  title: string;
  description: string;
  /** Case study backing the claim, so a reader can check it rather than take it. */
  href?: string;
  hrefLabel?: string;
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
    "19+ years across healthcare, enterprise software, cloud platforms, and commerce, with an engineering foundation.",
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
  { value: "19+", label: "Years across design and product delivery" },
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
    "The hard part is never the model. It is deciding what a person still has to be responsible for.",
  ctaLabel: "See how this worked in production",
  ctaHref: "/portfolio/spine-triage",
};

export const homeAILeadershipPillars: HomeSignalItem[] = [
  {
    eyebrow: "Where AI earns its place",
    title: "Not every workflow needs an agent.",
    description:
      "On an internal enablement product, the win was never automation. It was helping people find the few resources that actually applied to their job.",
    href: "/portfolio/ai-resource-hub",
    hrefLabel: "AI Resource Hub",
  },
  {
    eyebrow: "Human in the loop",
    title: "The system proposes, a person decides.",
    description:
      "Spine Triage can read the logs, trace the code, and draft the fix. The hard part was never the investigation. It was making sure a person still had to say yes before anything reached the codebase.",
    href: "/portfolio/spine-triage",
    hrefLabel: "Spine Triage",
  },
  {
    eyebrow: "Trust and control",
    title: "Capability without supervision is a demo.",
    description:
      "Engineers did not hold back because the answers were wrong. They held back because they could not see how the system got there, or refuse it once it had.",
    href: "/portfolio/spine-triage",
    hrefLabel: "Spine Triage",
  },
  {
    eyebrow: "Adoption",
    title: "Rules become checks, or they get ignored.",
    description:
      "On a division-wide delivery framework, guidance written in prose only changed behaviour once it became an automated gate.",
    href: "/portfolio/dep-nervous-system",
    hrefLabel: "AI Spine",
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

/**
 * Eyebrow and title come from the claims registry rather than being retyped here, so the
 * homepage card and the case study's ClaimStrip can never drift into saying related-but-
 * different things about the same claim.
 */
function leadershipCard(
  claimId: string,
  description: string,
  href: string,
  hrefLabel: string,
): HomeSignalItem {
  const claim = getClaimById(claimId);
  return { eyebrow: claim.eyebrow, title: claim.title, description, href, hrefLabel };
}

export const homeLeadershipModel: HomeSignalItem[] = [
  leadershipCard(
    "alignment-is-not-agreement",
    "Platform teams were shipping perfectly well. What was missing was a direction they could sequence against, so I built the vision as something teams used in roadmap calls rather than a deck they were shown once.",
    "/portfolio/vision-platform-and-data-services",
    "Platform and data services",
  ),
  leadershipCard(
    "hard-part-between-teams",
    "Closing the referral loop was never one product's problem. It needed sender and receiver systems to agree on status, which meant settling architecture and workflow questions neither side owned alone.",
    "/portfolio/360x-closed-loop-referrals",
    "360X Closed Loop Referrals",
  ),
  leadershipCard(
    "coaching-is-a-schedule",
    "Everyone says they develop their team. What made it real was writing down how I do it — growth plans, the trust it takes, and what I hand over — so it survived me being busy.",
    "/blog/how-i-groom-my-designers-at-athenahealth",
    "How I grow designers",
  ),
  leadershipCard(
    "cannot-review-your-way-to-quality",
    "Design review does not survive contact with dozens of teams. Making quality a measured, visible signal did — the first survey cycle came back at 100% response, and maturity stopped being an opinion.",
    "/portfolio/design-quality",
    "Design Quality",
  ),
  leadershipCard(
    "shared-vocabulary-beats-shared-document",
    "Teams did not need another template. They needed the same words for the same decisions, so the framework gave product, engineering, and design one language for journeys instead of three.",
    "/portfolio/user-journey-framework",
    "User Journey Framework",
  ),
  leadershipCard(
    "stay-close-enough-to-be-wrong",
    "On the commerce model at Zivame I owned the strategy and then stayed in the integration patterns themselves, because the decisions that mattered only showed up once content and product had to work as one system.",
    "/portfolio/content-led-commerce-at-zivame",
    "Content-led commerce",
  ),
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
  label: "Writing",
  heading: "What I write about",
  description:
    "Systems thinking, product quality, design leadership, and how teams actually adopt AI.",
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
  title: "I am open to the right conversation",
  description:
    "If you are hiring for design leadership, AI product strategy, or platform modernization, I am happy to walk through the work and talk honestly about fit.",
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
