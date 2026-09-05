export type ClaimEvidence = {
  /** Case study this claim is grounded in. Omitted when the evidence is a post. */
  projectSlug?: string;
  /** Blog post this claim is grounded in. Omitted when the evidence is a case study. */
  postSlug?: string;
  /** Section id that proves the claim. Posts have no section anchors, so it is optional. */
  anchorId?: string;
  /** How that anchor reads in a sentence, e.g. "the decisions". */
  anchorLabel?: string;
  /** One line, specific to this project, on how it proves the claim. Not the card copy. */
  note: string;
  /** Optional seed for the page's AI banner, framed around this claim. */
  suggestion?: string;
};

export type Claim = {
  id: string;
  /** Shared verbatim with the homepage card — the repetition is what makes the thread visible. */
  eyebrow: string;
  title: string;
  evidence: ClaimEvidence[];
};

export const claims: Claim[] = [
  {
    id: "alignment-is-not-agreement",
    eyebrow: "Direction",
    title: "Alignment is not agreement.",
    evidence: [
      {
        projectSlug: "vision-platform-and-data-services",
        anchorId: "decisions",
        anchorLabel: "the decisions",
        note: "The vision only counted once teams used it to sequence roadmap work. Treating it as an operating tool rather than a deck is what moved zones from lagging to strong.",
        suggestion: "How did the vision change what teams actually prioritised?",
      },
    ],
  },
  {
    id: "hard-part-between-teams",
    eyebrow: "Cross-org work",
    title: "The hard part sits between the teams.",
    evidence: [
      {
        projectSlug: "360x-closed-loop-referrals",
        anchorId: "decisions",
        anchorLabel: "the decisions",
        note: "Getting sender and receiver systems to agree on one referral lifecycle — including who owns a declined referral — was the real work, not the routing screen.",
        suggestion: "How did the two systems actually agree on referral status?",
      },
    ],
  },
  {
    id: "coaching-is-a-schedule",
    eyebrow: "Growing people",
    title: "Coaching is a schedule, not a sentiment.",
    evidence: [
      {
        postSlug: "how-i-groom-my-designers-at-athenahealth",
        note: "Written down because a practice that lives only in my head stops happening the week I get busy. Growth plans, the trust it takes, and what I deliberately hand over.",
      },
    ],
  },
  {
    id: "cannot-review-your-way-to-quality",
    eyebrow: "Quality",
    title: "You cannot review your way to quality at scale.",
    evidence: [
      {
        projectSlug: "design-quality",
        anchorId: "outcome",
        anchorLabel: "the outcome",
        note: "Review meetings don't scale past a few teams. A measured signal did — the first CFC survey cycle came back at 100% response.",
        suggestion: "How did measurement replace design review here?",
      },
    ],
  },
  {
    id: "shared-vocabulary-beats-shared-document",
    eyebrow: "Scale",
    title: "A shared vocabulary beats a shared document.",
    evidence: [
      {
        projectSlug: "user-journey-framework",
        anchorId: "decisions",
        anchorLabel: "the decisions",
        note: "The framework didn't hand teams a new template. It gave product, engineering, and design the same words for the same decisions, starting with the highest-risk workflow first.",
        suggestion: "How did one vocabulary change three teams' decisions?",
      },
    ],
  },
  {
    id: "stay-close-enough-to-be-wrong",
    eyebrow: "Hands-on",
    title: "I stay close enough to be wrong in public.",
    evidence: [
      {
        projectSlug: "content-led-commerce-at-zivame",
        anchorId: "decisions",
        anchorLabel: "the decisions",
        note: "Treating content as a commerce surface, not a blog, was a product decision, not a content one — which is why I stayed in the integration patterns myself.",
        suggestion: "Where did staying hands-on change a commerce decision?",
      },
    ],
  },
];

export type ClaimCitation = {
  claim: Claim;
  evidence: ClaimEvidence;
};

/** Claims that cite this project, strongest first. Empty for projects with no evidence yet. */
export function getClaimsForProject(slug: string): ClaimCitation[] {
  const citations: ClaimCitation[] = [];
  for (const claim of claims) {
    const evidence = claim.evidence.find((item) => item.projectSlug === slug);
    if (evidence) {
      citations.push({ claim, evidence });
    }
  }
  return citations;
}

/** Claims that cite this post, strongest first. */
export function getClaimsForPost(slug: string): ClaimCitation[] {
  const citations: ClaimCitation[] = [];
  for (const claim of claims) {
    const evidence = claim.evidence.find((item) => item.postSlug === slug);
    if (evidence) {
      citations.push({ claim, evidence });
    }
  }
  return citations;
}

export function getClaimById(id: string): Claim {
  const claim = claims.find((item) => item.id === id);
  if (!claim) {
    throw new Error(`Unknown claim id: ${id}`);
  }
  return claim;
}
