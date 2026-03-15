import type { BlogPost } from "@/data/blog";
import { resolveMirroredMediaSrc } from "@/lib/wixMedia";

export type BlogPerson = {
  name: string;
  role: string;
  organization: string;
  imageSrc: string;
};

export type BlogRenderBlock =
  | { type: "paragraph"; text: string; tone?: "body" | "lead" | "emphasis" }
  | { type: "list"; items: string[] }
  | { type: "figure"; src: string; alt: string; caption?: string; aspectRatio?: string }
  | { type: "quote"; text: string }
  | { type: "people"; people: BlogPerson[] }
  | { type: "divider" };

export type BlogRenderSection = {
  heading: string;
  blocks: BlogRenderBlock[];
  hideHeading?: boolean;
  level?: 2 | 3;
};

const BLOG_IMAGE_FALLBACK_SRC = "/images/blog-placeholder.svg";

const MOJIBAKE_REPLACEMENTS: Record<string, string> = {
  "Ã¢â‚¬â„¢": "'",
  "Ã¢â‚¬Ëœ": "'",
  "Ã¢â‚¬Å“": '"',
  "Ã¢â‚¬\u009d": '"',
  "Ã¢â‚¬Â¦": "...",
  "Ã¢â‚¬Â¢": "- ",
  "Ã‚ ": " ",
  "\u00a0": " ",
};

const LIST_PREFIX = /^(?:[-*]\s+|[0-9]+\.\s+)(.+)$/;
const HASHTAG_LINE = /^#\S+/;
const DEFINITION_LIST_PREFIX =
  /^(?:[A-Z0-9][A-Za-z0-9/&()' -]{1,48}:|[0-9]+\s+[A-Za-z][A-Za-z0-9/&()' -]{1,32}:?)\s+.+$/;
const RECOGNIZED_CATEGORIES: Record<string, string> = {
  blog: "Perspective",
  design: "Design",
  leadership: "Leadership",
  "case study": "Case Study",
};

type BlogFigureSeed = {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
};

const FRAMEWORK_FIGURES = {
  flowchart: {
    src: "https://static.wixstatic.com/media/bc4f65_8a13b891ea03416a877addad46eddc73~mv2.png/v1/fill/w_4180,h_1216,al_c,q_95/bc4f65_8a13b891ea03416a877addad46eddc73~mv2.png",
    alt: "Framework-First Design flowchart",
    aspectRatio: "4180 / 1216",
  },
  gogul: {
    src: "https://static.wixstatic.com/media/bc4f65_00fa418d71384f92be0425cbf47a03e7~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80/bc4f65_00fa418d71384f92be0425cbf47a03e7~mv2.jpg",
    alt: "Portrait of Gogul R G",
    aspectRatio: "1 / 1",
  },
  userJourneyMap: {
    src: "https://static.wixstatic.com/media/bc4f65_50be70ea192a41cb84538fd3030999e9~mv2.jpg/v1/fill/w_3200,h_1879,al_c,q_90/bc4f65_50be70ea192a41cb84538fd3030999e9~mv2.jpg",
    alt: "User Journey Map Framework",
    caption: "User Journey Map Framework",
    aspectRatio: "3200 / 1879",
  },
  vignesh: {
    src: "https://static.wixstatic.com/media/bc4f65_e604f3fa331346098a0b87a117e91b24~mv2.jpg/v1/fill/w_496,h_496,al_c,lg_1,q_80/bc4f65_e604f3fa331346098a0b87a117e91b24~mv2.jpg",
    alt: "Portrait of Vignesh Prabhu Natarajan Rajasekara",
    aspectRatio: "1 / 1",
  },
  tShapedDesign: {
    src: "https://static.wixstatic.com/media/bc4f65_f646a0c4bb054febb0e3ab68b3b3f314~mv2.jpg/v1/fill/w_1801,h_1013,al_c,q_85/bc4f65_f646a0c4bb054febb0e3ab68b3b3f314~mv2.jpg",
    alt: "T-shaped Design Framework",
    caption: "T-shaped Design Framework",
    aspectRatio: "1801 / 1013",
  },
  tShapedCommunication: {
    src: "https://static.wixstatic.com/media/bc4f65_3778d83e15a7460e8dd7418045e07672~mv2.jpg/v1/fill/w_1801,h_1013,al_c,q_85/bc4f65_3778d83e15a7460e8dd7418045e07672~mv2.jpg",
    alt: "T-shaped Design Framework used for Communication",
    caption: "T-shaped Design Framework used for Communication",
    aspectRatio: "1801 / 1013",
  },
  downloadable: {
    src: "https://static.wixstatic.com/media/bc4f65_7ce46d42f31148db8820206afb6806f0~mv2.jpg/v1/fill/w_1190,h_1684,al_c,q_90/bc4f65_7ce46d42f31148db8820206afb6806f0~mv2.jpg",
    alt: "Downloadable Framework-First Design reference",
    caption: "Framework-First Design quick reference",
    aspectRatio: "1190 / 1684",
  },
} satisfies Record<string, BlogFigureSeed>;

const GROWTH_FIGURES = {
  overview: {
    src: "https://static.wixstatic.com/media/bc4f65_a320f8efbc3b4eac891026801921f8ee~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_a320f8efbc3b4eac891026801921f8ee~mv2.png",
    alt: "Illustration of the designer growth journey",
    aspectRatio: "1800 / 1013",
  },
  infancy: {
    src: "https://static.wixstatic.com/media/bc4f65_3045413348a84dc29c4deb284c0d56df~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_3045413348a84dc29c4deb284c0d56df~mv2.png",
    alt: "Infancy stage illustration",
    aspectRatio: "1800 / 1013",
  },
  walking: {
    src: "https://static.wixstatic.com/media/bc4f65_fb32fbeb84b14b988e0e7f0707d12347~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_fb32fbeb84b14b988e0e7f0707d12347~mv2.png",
    alt: "Walking stage illustration",
    aspectRatio: "1800 / 1013",
  },
  playing: {
    src: "https://static.wixstatic.com/media/bc4f65_9b1c1930f98842c181fc9374504fd2a8~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_9b1c1930f98842c181fc9374504fd2a8~mv2.png",
    alt: "Playing stage illustration",
    aspectRatio: "1800 / 1013",
  },
  venturing: {
    src: "https://static.wixstatic.com/media/bc4f65_a3743bf1bc064070886ce742fd5337b5~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_a3743bf1bc064070886ce742fd5337b5~mv2.png",
    alt: "Venturing stage illustration",
    aspectRatio: "1800 / 1013",
  },
  sprinting: {
    src: "https://static.wixstatic.com/media/bc4f65_c5465ef26fea41cdb45e100f2b9bb38b~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_c5465ef26fea41cdb45e100f2b9bb38b~mv2.png",
    alt: "Sprinting stage illustration",
    aspectRatio: "1800 / 1013",
  },
  cruising: {
    src: "https://static.wixstatic.com/media/bc4f65_bed37483c2d3408794af13054b5d5c1f~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_bed37483c2d3408794af13054b5d5c1f~mv2.png",
    alt: "Cruising stage illustration",
    aspectRatio: "1800 / 1013",
  },
  flying: {
    src: "https://static.wixstatic.com/media/bc4f65_92a20dbd1c9b4ae08c7f702b5ad8e289~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_92a20dbd1c9b4ae08c7f702b5ad8e289~mv2.png",
    alt: "Flying stage illustration",
    aspectRatio: "1800 / 1013",
  },
  findYourSpot: {
    src: "https://static.wixstatic.com/media/bc4f65_ac75d73af567484684a39e2aab9585c5~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_ac75d73af567484684a39e2aab9585c5~mv2.png",
    alt: "Find your spot illustration",
    aspectRatio: "1800 / 1013",
  },
  realityCheck: {
    src: "https://static.wixstatic.com/media/bc4f65_efe1a3c5dec441d4b40c86dbca0dd9a3~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_efe1a3c5dec441d4b40c86dbca0dd9a3~mv2.png",
    alt: "Life is not linear illustration",
    aspectRatio: "1800 / 1013",
  },
  reward: {
    src: "https://static.wixstatic.com/media/bc4f65_e784d7d8b6264e7abe6d8df57d5d4790~mv2.png/v1/fill/w_1800,h_1013,al_c,q_90/bc4f65_e784d7d8b6264e7abe6d8df57d5d4790~mv2.png",
    alt: "Growth itself as the reward illustration",
    aspectRatio: "1800 / 1013",
  },
} satisfies Record<string, BlogFigureSeed>;

const SYSTEMS_FIGURES = {
  overview: {
    src: "https://static.wixstatic.com/media/bc4f65_208c84c1458c45ec8079c57b4b607b3b~mv2.jpg/v1/fill/w_1024,h_485,al_c,q_85/bc4f65_208c84c1458c45ec8079c57b4b607b3b~mv2.jpg",
    alt: "Growth at scale illustration",
    aspectRatio: "1024 / 485",
  },
  populationGrowth: {
    src: "https://static.wixstatic.com/media/bc4f65_f4ecfa4dac5345ac83c5334260299290~mv2.png/v1/fill/w_1229,h_356,al_c,lg_1,q_90/bc4f65_f4ecfa4dac5345ac83c5334260299290~mv2.png",
    alt: "Population Growth causal loop diagram",
    caption: "Population Growth - Causal Loop Diagram",
    aspectRatio: "1229 / 356",
  },
  populationGrowthRate: {
    src: "https://static.wixstatic.com/media/bc4f65_1d1097d1c3d445d184d8869a20954c82~mv2.png/v1/fill/w_1229,h_356,al_c,lg_1,q_90/bc4f65_1d1097d1c3d445d184d8869a20954c82~mv2.png",
    alt: "Population growth rate causal loop diagram",
    caption: "Causal Loop Diagram - Population Growth Rate",
    aspectRatio: "1229 / 356",
  },
  marketplace: {
    src: "https://static.wixstatic.com/media/bc4f65_767c7e9d10a64c0981ec18d2b1068f11~mv2.png/v1/fill/w_1024,h_662,al_c,q_90/bc4f65_767c7e9d10a64c0981ec18d2b1068f11~mv2.png",
    alt: "athenahealth Marketplace screenshot",
    caption: "athenahealth Marketplace",
    aspectRatio: "1024 / 662",
  },
  ecosystem: {
    src: "https://static.wixstatic.com/media/bc4f65_78657f518e864205876aa31b1f9546e2~mv2.jpg/v1/fill/w_1024,h_568,al_c,q_85/bc4f65_78657f518e864205876aa31b1f9546e2~mv2.jpg",
    alt: "Marketplace ecosystem relationship diagram",
    aspectRatio: "1024 / 568",
  },
  growingNetwork: {
    src: "https://static.wixstatic.com/media/bc4f65_c3e317693452428fb059f79591079cc8~mv2.png/v1/fill/w_1229,h_306,al_c,lg_1,q_90/bc4f65_c3e317693452428fb059f79591079cc8~mv2.png",
    alt: "Growing Network causal loop diagram",
    caption: "Causal Loop - Growing Network",
    aspectRatio: "1229 / 306",
  },
  growingUsage: {
    src: "https://static.wixstatic.com/media/bc4f65_1f01c19d76e349e38393e8117ae0da30~mv2.png/v1/fill/w_1024,h_474,al_c,q_90/bc4f65_1f01c19d76e349e38393e8117ae0da30~mv2.png",
    alt: "Growing Usage and Services causal loop diagram",
    caption: "Causal Loop - Growing Usage and Services",
    aspectRatio: "1024 / 474",
  },
  deterioratingExperience: {
    src: "https://static.wixstatic.com/media/bc4f65_895b7f1f9d9d409f8a973ac53e2f424d~mv2.png/v1/fill/w_1024,h_678,al_c,q_90/bc4f65_895b7f1f9d9d409f8a973ac53e2f424d~mv2.png",
    alt: "Balancing loop of deteriorating experience",
    caption: "Causal Loop - Balancing Loop of Deteriorating Experience",
    aspectRatio: "1024 / 678",
  },
  maturingFramework: {
    src: "https://static.wixstatic.com/media/bc4f65_4464e83d93b54ed193c964c1d8bfcc48~mv2.png/v1/fill/w_1024,h_681,al_c,q_90/bc4f65_4464e83d93b54ed193c964c1d8bfcc48~mv2.png",
    alt: "Maturing framework causal loop diagram",
    caption: "Causal Loop - Maturing Framework",
    aspectRatio: "1024 / 681",
  },
  consoleFramework: {
    src: "https://static.wixstatic.com/media/bc4f65_b3cf0bf880f7400db2a49a40eae5bda0~mv2.jpg/v1/fill/w_1024,h_576,al_c,q_85/bc4f65_b3cf0bf880f7400db2a49a40eae5bda0~mv2.jpg",
    alt: "Console framework diagram",
    caption: "Console Framework",
    aspectRatio: "1024 / 576",
  },
  improvingStandards: {
    src: "https://static.wixstatic.com/media/bc4f65_4d7e60bc79fc45d8bd731a0a9a698eec~mv2.png/v1/fill/w_1024,h_672,al_c,q_90/bc4f65_4d7e60bc79fc45d8bd731a0a9a698eec~mv2.png",
    alt: "Improving standards causal loop diagram",
    caption: "Causal Loop - Improving Standards",
    aspectRatio: "1024 / 672",
  },
} satisfies Record<string, BlogFigureSeed>;

function applyMojibakeFixes(input: string) {
  return Object.entries(MOJIBAKE_REPLACEMENTS).reduce(
    (text, [from, to]) => text.split(from).join(to),
    input,
  );
}

export function normalizeBlogText(input: string) {
  const cleaned = applyMojibakeFixes(String(input ?? ""))
    .replace(/\r\n/g, "\n")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .trim();
  return cleaned;
}

function normalizeListItem(input: string, allowDefinitionStyle = false) {
  const normalized = normalizeBlogText(input);
  const match = normalized.match(LIST_PREFIX);
  if (match) return normalizeBlogText(match[1]);
  if (allowDefinitionStyle && DEFINITION_LIST_PREFIX.test(normalized)) {
    return normalized;
  }
  return "";
}

function toTitleCase(input: string) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
    .join(" ");
}

function isNoiseLine(input: string) {
  const normalized = normalizeBlogText(input);
  if (!normalized) return true;
  if (HASHTAG_LINE.test(normalized)) return true;
  return false;
}

function truncate(input: string, max = 220) {
  if (input.length <= max) return input;
  return `${input.slice(0, max - 3).trim()}...`;
}

function getDefaultSectionLevel(heading: string, index: number): 2 | 3 {
  if (index > 0 && /^\d+\./.test(heading)) return 3;
  return 2;
}

function getFirstSectionParagraph(post: BlogPost) {
  for (const section of post.sections) {
    for (const paragraph of section.paragraphs) {
      const normalized = normalizeBlogText(paragraph);
      if (!normalized || isNoiseLine(normalized)) continue;
      const listItem = normalizeListItem(normalized, true);
      if (listItem) return listItem;
      return normalized;
    }
  }
  return "";
}

function getSectionParagraphs(post: BlogPost, heading: string) {
  const section = post.sections.find(
    (item) => normalizeBlogText(item.heading) === normalizeBlogText(heading),
  );
  if (!section) return [];
  return section.paragraphs
    .map((paragraph) => normalizeBlogText(paragraph))
    .filter((paragraph) => !isNoiseLine(paragraph));
}

function paragraph(text: string, tone: "body" | "lead" | "emphasis" = "body"): BlogRenderBlock {
  return { type: "paragraph", text, tone };
}

function figure({
  src,
  alt,
  caption,
  aspectRatio,
}: BlogFigureSeed): BlogRenderBlock {
  return { type: "figure", src, alt, caption, aspectRatio };
}

function people(peopleItems: BlogPerson[]): BlogRenderBlock {
  return { type: "people", people: peopleItems };
}

function buildGrowthJourneySections(post: BlogPost): BlogRenderSection[] {
  return [
    {
      heading: "Overview",
      hideHeading: true,
      blocks: [
        figure(GROWTH_FIGURES.overview),
        paragraph(
          "The journey of growth is something that resonates deeply with me, especially in the context of design. It is a topic close to my heart, and this article walks through the stages a designer often moves through over time.",
          "lead",
        ),
        paragraph(
          getSectionParagraphs(post, "Overview")[0] ??
            "This is not a well-researched piece; rather, it is a philosophical and opinionated take based on my personal experiences and observations.",
        ),
      ],
    },
    {
      heading: "The Seven Stages",
      level: 2,
      blocks: (getSectionParagraphs(post, "The Seven Stages") ?? []).map((text) =>
        paragraph(text),
      ),
    },
    {
      heading: "Infancy: Birth of a Designer",
      level: 3,
      blocks: [
        figure(GROWTH_FIGURES.infancy),
        ...getSectionParagraphs(post, "Infancy: Birth of a Designer").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Walking: The Learning Phase",
      level: 3,
      blocks: [
        figure(GROWTH_FIGURES.walking),
        ...getSectionParagraphs(post, "Walking: The Learning Phase").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Playing: The Safe Playground",
      level: 3,
      blocks: [
        figure(GROWTH_FIGURES.playing),
        ...getSectionParagraphs(post, "Playing: The Safe Playground").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Venturing: Into the Unknown",
      level: 3,
      blocks: [
        figure(GROWTH_FIGURES.venturing),
        ...getSectionParagraphs(post, "Venturing: Into the Unknown").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Sprinting: The Goal-Driven Stage",
      level: 3,
      blocks: [
        figure(GROWTH_FIGURES.sprinting),
        ...getSectionParagraphs(post, "Sprinting: The Goal-Driven Stage").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Cruising: Sharing Success",
      level: 3,
      blocks: [
        figure(GROWTH_FIGURES.cruising),
        ...getSectionParagraphs(post, "Cruising: Sharing Success").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Flying: Identity and Empowering Others",
      level: 3,
      blocks: [
        figure(GROWTH_FIGURES.flying),
        ...getSectionParagraphs(post, "Flying: Identity and Empowering Others").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Find Your Spot and Do Your Thing",
      level: 2,
      blocks: [
        figure(GROWTH_FIGURES.findYourSpot),
        ...getSectionParagraphs(post, "Find Your Spot and Do Your Thing").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "Reality Check: Life is Not Linear",
      level: 2,
      blocks: [
        figure(GROWTH_FIGURES.realityCheck),
        ...getSectionParagraphs(post, "Reality Check: Life is Not Linear").map((text) =>
          paragraph(text),
        ),
      ],
    },
    {
      heading: "The Reward: Growth Itself",
      level: 2,
      blocks: [
        figure(GROWTH_FIGURES.reward),
        paragraph(
          "The ultimate reward is growth itself. The thrill of overcoming challenges, learning new moves, and evolving as a designer is unmatched. Keep learning from those around you, and the journey of growth becomes its own reward.",
          "lead",
        ),
      ],
    },
  ];
}

function buildFrameworkFirstSections(post: BlogPost): BlogRenderSection[] {
  const overview = getSectionParagraphs(post, "Overview");
  const research = getSectionParagraphs(post, "1. Research");
  const subjectZero = getSectionParagraphs(post, "3.Tackle Subject Zero");
  const deriveFramework = getSectionParagraphs(post, "4.Derive Framework");
  const gogul = getSectionParagraphs(
    post,
    "See it in action: Gogul's Practical Application of Framework-First Design",
  );
  const community = getSectionParagraphs(post, "Community Contribution");
  const vignesh = getSectionParagraphs(
    post,
    "See It in Action: Vignesh's Approach to Streamlining Clinical Messaging",
  );
  const longTermVision = getSectionParagraphs(post, "Long-Term Vision");
  const brandBuilding = getSectionParagraphs(post, "Brand Building");

  return [
    {
      heading: "Overview",
      hideHeading: true,
      blocks: [
        paragraph(overview[0] ?? "", "lead"),
        figure(FRAMEWORK_FIGURES.flowchart),
        paragraph(overview[1] ?? ""),
      ],
    },
    {
      heading: "The Process",
      level: 2,
      blocks: [],
    },
    {
      heading: "1. Research",
      level: 3,
      blocks: [
        paragraph(research[0] ?? ""),
        { type: "list", items: research.slice(1, 8) },
        paragraph(research[8] ?? ""),
      ],
    },
    {
      heading: "2. SME Review",
      level: 3,
      blocks: getSectionParagraphs(post, "2. SME Review").map((text) => paragraph(text)),
    },
    {
      heading: "3. Tackle Subject Zero",
      level: 3,
      blocks: [
        paragraph(subjectZero[0] ?? ""),
        { type: "list", items: subjectZero.slice(1, 10) },
        paragraph(subjectZero[10] ?? ""),
        paragraph(subjectZero[11] ?? ""),
      ],
    },
    {
      heading: "4. Derive Framework",
      level: 3,
      blocks: [
        paragraph(deriveFramework[0] ?? ""),
        { type: "list", items: deriveFramework.slice(1) },
      ],
    },
    {
      heading: "5. Iteration & Feedback",
      level: 3,
      blocks: getSectionParagraphs(post, "5.Iteration & Feedback").map((text) =>
        paragraph(text),
      ),
    },
    {
      heading: "See it in action: Gogul's Practical Application of Framework-First Design",
      level: 2,
      blocks: [
        paragraph(gogul[0] ?? ""),
        people([
          {
            name: gogul[1] ?? "Gogul R G",
            role: gogul[2] ?? "Lead Designer",
            organization: gogul[3] ?? "athenahealth",
            imageSrc: FRAMEWORK_FIGURES.gogul.src,
          },
        ]),
      ],
    },
    {
      heading: "The Beginning",
      level: 3,
      blocks: getSectionParagraphs(post, "The Beginning").map((text) => paragraph(text)),
    },
    {
      heading: "Feedback Loop",
      level: 3,
      blocks: getSectionParagraphs(post, "Feedback Loop").map((text) => paragraph(text)),
    },
    {
      heading: "First Map Creation",
      level: 3,
      blocks: getSectionParagraphs(post, "First Map Creation").map((text) =>
        paragraph(text),
      ),
    },
    {
      heading: "Iteration and Refinement",
      level: 3,
      blocks: getSectionParagraphs(post, "Iteration and Refinement").map((text) =>
        paragraph(text),
      ),
    },
    {
      heading: "Sharing with the Org",
      level: 3,
      blocks: getSectionParagraphs(post, "Sharing with the Org").map((text) =>
        paragraph(text),
      ),
    },
    {
      heading: "Community Contribution",
      level: 3,
      blocks: [
        paragraph(community[0] ?? ""),
        figure(FRAMEWORK_FIGURES.userJourneyMap),
        paragraph(community[1] ?? ""),
      ],
    },
    {
      heading: "See It in Action: Vignesh's Approach to Streamlining Clinical Messaging",
      level: 2,
      blocks: [
        paragraph(vignesh[0] ?? ""),
        people([
          {
            name: vignesh[1] ?? "Vignesh Prabhu Natarajan Rajasekara",
            role: vignesh[2] ?? "Principal Designer",
            organization: vignesh[3] ?? "athenahealth",
            imageSrc: FRAMEWORK_FIGURES.vignesh.src,
          },
        ]),
      ],
    },
    {
      heading: "Starting Point",
      level: 3,
      blocks: getSectionParagraphs(post, "Starting Point").map((text) => paragraph(text)),
    },
    {
      heading: "Collaboration and Testing",
      level: 3,
      blocks: getSectionParagraphs(post, "Collaboration and Testing").map((text) =>
        paragraph(text),
      ),
    },
    {
      heading: "From One to Many",
      level: 3,
      blocks: getSectionParagraphs(post, "From One to Many").map((text) => paragraph(text)),
    },
    {
      heading: "Long-Term Vision",
      level: 3,
      blocks: [
        paragraph(longTermVision[0] ?? ""),
        figure(FRAMEWORK_FIGURES.tShapedDesign),
        figure(FRAMEWORK_FIGURES.tShapedCommunication),
        { type: "quote", text: longTermVision[1] ?? "" },
      ],
    },
    {
      heading: "Benefits of Framework-First Design",
      level: 2,
      blocks: [],
    },
    {
      heading: "Scalability",
      level: 3,
      blocks: getSectionParagraphs(post, "Scalability").map((text) => paragraph(text)),
    },
    {
      heading: "Consistency",
      level: 3,
      blocks: getSectionParagraphs(post, "Consistency").map((text) => paragraph(text)),
    },
    {
      heading: "Efficiency",
      level: 3,
      blocks: getSectionParagraphs(post, "Efficiency").map((text) => paragraph(text)),
    },
    {
      heading: "Collaboration",
      level: 3,
      blocks: getSectionParagraphs(post, "Collaboration").map((text) => paragraph(text)),
    },
    {
      heading: "Brand Building",
      level: 3,
      blocks: [
        paragraph(brandBuilding[0] ?? ""),
        { type: "divider" },
        paragraph(brandBuilding[1] ?? ""),
        figure(FRAMEWORK_FIGURES.downloadable),
      ],
    },
    {
      heading: "Conclusion",
      level: 2,
      blocks: getSectionParagraphs(post, "Conclusion").map((text) =>
        paragraph(text, "emphasis"),
      ),
    },
  ];
}

function buildSystemsThinkingSections(post: BlogPost): BlogRenderSection[] {
  const overview = getSectionParagraphs(post, "Overview");
  const systemsThinking = getSectionParagraphs(post, "What is Systems Thinking");
  const causalLoop = getSectionParagraphs(post, "Causal Loop Diagram");
  const realWorld = getSectionParagraphs(post, "A Real-world Complex System");
  const askingWhatIf = getSectionParagraphs(post, "Asking What If");
  const challenges = getSectionParagraphs(post, "Challenges and How to Tackle Them");
  const drift = getSectionParagraphs(post, "Drift to low performance");
  const resources = getSectionParagraphs(post, "Resources");
  const overviewLead =
    "Scaling up is easy. Maintaining quality is not. This piece looks at how systems thinking helps teams keep experience quality coherent as products, services, and partner ecosystems expand.";
  const overviewBody =
    "Fast organic growth often shifts complexity onto the user. By understanding how teams, standards, services, and incentives interact, we can make better structural decisions before fragmentation becomes the default experience.";
  const askingWhatIfIntro =
    "Once the system is visible, the next step is to ask a better question: what changes if we introduce stronger standards and a shared framework?";
  const askingWhatIfBody =
    "This is the practical move. Introduce reusable components, clearer standards, and a framework that teams can build on together, then test how those changes alter the behavior of the whole system.";
  const askingWhatIfOutro =
    "In practice, that means shared infrastructure for common patterns and team-owned flexibility where specialization matters. Different teams can keep moving independently while still operating within a coherent design and governance model.";
  const resourcesLead =
    resources[0] ??
    "Much of this perspective was shaped by MIT Sloan's 'Understanding and Solving Complex Business Problems,' which I took in June 2020 with support from athenahealth's tuition assistance program.";
  const resourcesBooks =
    "If you want to go deeper, start with Donella Meadows' 'Thinking in Systems: A Primer,' then pair it with a practical systems-thinking course to see how the models translate into everyday product and organizational decisions.";
  const resourcesClose =
    "If this perspective helps you frame scale problems more clearly, I would love to hear how you're applying it in your own product or platform context.";

  return [
    {
      heading: "Overview",
      hideHeading: true,
      blocks: [
        paragraph(overviewLead, "lead"),
        figure(SYSTEMS_FIGURES.overview),
        paragraph(overviewBody || overview[1] || ""),
      ],
    },
    {
      heading: "What is Systems Thinking?",
      level: 2,
      blocks: [
        paragraph(systemsThinking[0] ?? ""),
        { type: "list", items: systemsThinking.slice(1) },
        {
          type: "quote",
          text:
            "Systems thinking is a tool that lets you talk about improving performance by understanding how the underlying model behaves.",
        },
      ],
    },
    {
      heading: "Causal Loop Diagram",
      level: 2,
      blocks: [
        figure(SYSTEMS_FIGURES.populationGrowth),
        paragraph(causalLoop[1] ?? ""),
        { type: "list", items: causalLoop.slice(2, 4) },
        paragraph(causalLoop[4] ?? ""),
        figure(SYSTEMS_FIGURES.populationGrowthRate),
        paragraph(causalLoop[6] ?? ""),
        {
          type: "quote",
          text:
            "By drawing the model and understanding how it works, you can start to identify the levers that will actually change the system.",
        },
        paragraph(causalLoop[7] ?? ""),
        figure(SYSTEMS_FIGURES.marketplace),
      ],
    },
    {
      heading: "A Real-world Complex System",
      level: 2,
      blocks: [
        figure(SYSTEMS_FIGURES.ecosystem),
        paragraph(realWorld[0] ?? ""),
        paragraph(realWorld[1] ?? ""),
        figure(SYSTEMS_FIGURES.growingNetwork),
        paragraph(realWorld[3] ?? ""),
        figure(SYSTEMS_FIGURES.growingUsage),
        paragraph(realWorld[5] ?? ""),
        paragraph(realWorld[6] ?? ""),
        figure(SYSTEMS_FIGURES.deterioratingExperience),
        {
          type: "quote",
          text:
            "In causal loop diagrams, a balancing loop appears whenever there is an odd number of negative relationships in the loop.",
        },
        paragraph(realWorld[8] ?? ""),
      ],
    },
    {
      heading: "Asking What If?",
      level: 2,
      blocks: [
        paragraph(askingWhatIfIntro),
        {
          type: "quote",
          text:
            "The question 'what if?' is the real unlock. It creates space to test how a complicated model might change once you introduce a new lever.",
        },
        paragraph(askingWhatIfBody),
        figure(SYSTEMS_FIGURES.maturingFramework),
        paragraph(askingWhatIf[3] ?? ""),
        paragraph(askingWhatIf[4] ?? ""),
        figure(SYSTEMS_FIGURES.consoleFramework),
        paragraph(askingWhatIfOutro),
      ],
    },
    {
      heading: "Challenges and How to Tackle Them",
      level: 2,
      blocks: [
        paragraph(challenges[0] ?? ""),
        { type: "list", items: challenges.slice(1) },
      ],
    },
    {
      heading: "Policy resistance",
      level: 3,
      blocks: getSectionParagraphs(post, "Policy resistance").map((text) => paragraph(text)),
    },
    {
      heading: "Tragedy of Commons",
      level: 3,
      blocks: getSectionParagraphs(post, "Tragedy of Commons").map((text) =>
        paragraph(text),
      ),
    },
    {
      heading: "Drift to low performance",
      level: 3,
      blocks: [
        paragraph(drift[0] ?? ""),
        figure(SYSTEMS_FIGURES.improvingStandards),
      ],
    },
    {
      heading: "Resources",
      level: 2,
      blocks: [
        paragraph(resourcesLead),
        paragraph(resourcesBooks),
        paragraph(resourcesClose),
      ],
    },
  ];
}

function getRichBlogSections(post: BlogPost): BlogRenderSection[] | null {
  if (post.slug === "framework-first-design-a-scalable-approach-to-problem-solving") {
    return buildFrameworkFirstSections(post);
  }

  if (post.slug === "growth-a-designer-s-journey") {
    return buildGrowthJourneySections(post);
  }

  if (post.slug === "consistency-at-scale-with-systems-thinking") {
    return buildSystemsThinkingSections(post);
  }

  return null;
}

export function getBlogExcerpt(post: BlogPost, max = 220) {
  const normalizedExcerpt = normalizeBlogText(post.excerpt);
  const fallback = getFirstSectionParagraph(post);
  const seed =
    normalizedExcerpt && normalizedExcerpt.length <= 320
      ? normalizedExcerpt
      : fallback || normalizedExcerpt;
  return truncate(seed || "Article content currently being reformatted.", max);
}

export function getBlogDisplayCategory(post: BlogPost) {
  const category = normalizeBlogText(post.category);
  if (!category) return "Writing";
  const normalized = RECOGNIZED_CATEGORIES[category.toLowerCase()];
  if (normalized) return normalized;
  return toTitleCase(category);
}

export function getBlogDisplayTags(post: BlogPost) {
  const category = getBlogDisplayCategory(post).toLowerCase();
  const tags = post.tags
    .map((tag) => normalizeBlogText(tag))
    .filter(Boolean)
    .filter((tag) => !HASHTAG_LINE.test(tag))
    .filter((tag) => tag.toLowerCase() !== category)
    .filter((tag) => tag.toLowerCase() !== "blog")
    .filter((tag) => tag.length <= 32);

  const deduped = [...new Set(tags)];
  if (deduped.length > 0) return deduped.slice(0, 5);
  return [getBlogDisplayCategory(post)];
}

export function getBlogReadTime(readTime: string) {
  const normalized = normalizeBlogText(readTime);
  if (!normalized) return "5 min read";
  if (!/[0-9]/.test(normalized)) return "5 min read";
  if (!/min/i.test(normalized)) return `${normalized} min read`;
  return normalized;
}

export function getBlogThumbnailSrc(rawThumbnail: string) {
  const normalized = normalizeBlogText(rawThumbnail);
  if (!normalized) return BLOG_IMAGE_FALLBACK_SRC;
  const resolved = resolveMirroredMediaSrc(normalized);
  return resolved || BLOG_IMAGE_FALLBACK_SRC;
}

export function formatBlogDate(dateValue: string) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function getRenderableBlogSections(post: BlogPost): BlogRenderSection[] {
  const richSections = getRichBlogSections(post);
  if (richSections) {
    return richSections.filter(
      (section): section is BlogRenderSection =>
        section.blocks.length > 0 || Boolean(section.heading),
    );
  }

  const defaultSections: Array<BlogRenderSection | null> = post.sections.map(
    (section, index) => {
      const heading = normalizeBlogText(section.heading) || "Section";
      const blocks: BlogRenderBlock[] = [];
      let listItems: string[] = [];

      const normalizedParagraphs = section.paragraphs
        .map((paragraph) => normalizeBlogText(paragraph))
        .filter((paragraph) => !isNoiseLine(paragraph));
      const allowDefinitionStyleList =
        normalizedParagraphs.filter((paragraph) =>
          DEFINITION_LIST_PREFIX.test(paragraph),
        ).length >= 2;

      const flushList = () => {
        if (listItems.length === 0) return;
        blocks.push({ type: "list", items: listItems });
        listItems = [];
      };

      for (const paragraphValue of section.paragraphs) {
        const normalized = normalizeBlogText(paragraphValue);
        if (!normalized || isNoiseLine(normalized)) continue;

        const listItem = normalizeListItem(normalized, allowDefinitionStyleList);
        if (listItem) {
          listItems.push(listItem);
          continue;
        }

        flushList();
        blocks.push({ type: "paragraph", text: normalized });
      }

      flushList();

      if (blocks.length === 0) {
        return null;
      }

      return {
        heading,
        blocks,
        hideHeading: heading === "Overview",
        level: getDefaultSectionLevel(heading, index),
      };
    },
  );

  return defaultSections.filter(
    (section): section is BlogRenderSection => section !== null,
  );
}

export function getFirstBlogBodyText(post: BlogPost) {
  const sections = getRenderableBlogSections(post);
  for (const section of sections) {
    for (const block of section.blocks) {
      if (block.type === "paragraph") return block.text;
      if (block.type === "quote") return block.text;
      if (block.type === "list" && block.items.length > 0) return block.items[0];
    }
  }
  return "";
}

export function sortPostsByDateDesc(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    return timeB - timeA;
  });
}

export function getBlogLandingCollections(posts: BlogPost[], featuredSlugs: string[]) {
  const byDate = sortPostsByDateDesc(posts);
  const featuredSet = new Set(featuredSlugs);

  const slugIndex = new Map(byDate.map((post) => [post.slug, post]));
  const featuredBySlug = featuredSlugs
    .map((slug) => slugIndex.get(slug))
    .filter((post): post is BlogPost => Boolean(post));

  const supplementalFeatured = byDate.filter((post) => {
    if (featuredSet.has(post.slug)) return false;
    const category = getBlogDisplayCategory(post).toLowerCase();
    return category === "leadership" || category === "case study";
  });

  const featured = [...new Set([...featuredBySlug, ...supplementalFeatured].slice(0, 6))];
  const featuredSlugsSet = new Set(featured.map((post) => post.slug));
  const archive = byDate.filter((post) => !featuredSlugsSet.has(post.slug));

  return { featured, archive };
}
