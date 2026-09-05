import { Project } from "../types/project";

export const project: Project = {
  id: "d826f60a-82f2-4f8f-adef-3e6f0d400832",
  slug: "ai-resource-hub",
  title: "AI Resource Hub",
  category: "AI Enablement Strategy & Product Direction",
  year: "2026",
  organization: "athenahealth",
  platform: "Internal Product",
  scope: "Enablement model, product direction, prototype, leadership review",
  summary:
    "Defined and built a role- and job-based AI enablement product connecting learning, reusable tools, real examples, expert support, and evidence of progress — taken from information model through working prototype to senior leadership review.",
  challenge:
    "AI learning and reusable resources existed in abundance across courses, recordings, repositories, internal sites, prompts, and individual experts. Employees still could not tell what was relevant to their work, what was current, or what to do next. A course catalog can supply content; it cannot supply role context, workflow applicability, progress, contribution, or evidence that a skill was ever applied. Left alone, adoption stays dependent on personal networks and broadcast email, while the underlying tools change faster than static content can track.",
  context:
    "This was a tiger-team initiative with overlapping workstreams and shared ownership — I owned the Resource Hub and the role model that informed the broader enablement strategy, not the whole program. The Hub overlapped with an internal AI marketplace, a capability atlas, division onboarding, and a foundations course, so a large part of the work was reconciling what each was actually for. Roles were themselves changing as AI changed the work, which made fixed role curricula a trap. The preferred internal hosting pilot supported frontend-only applications, while the Hub needed a backend for shared progress, submissions, administration, and analytics.",
  role:
    "Director, Experience Design. I owned the Resource Hub workstream through concept, product model, prototype, implementation, and senior leadership review — defining the enablement framing, building the working product, presenting it to leadership, and assessing hosting fit. Program coordination, foundations training, and long-term curation were owned by partners.",
  process: [
    "Replaced the course-catalog framing with a chain that starts from the work: persona, then job to be done, then AI competency, then enablement need.",
    "Consolidated fragmented enablement labels into a small set of durable themes so delivery could be planned without losing traceability to individual needs.",
    "Modeled a combined workshop structure that collapsed dozens of need-specific sessions into a fraction as many, cutting delivery overhead while keeping each need addressable.",
    "Built a working prototype spanning discovery, learning paths, reusable tools, wins, contribution, administration, and analytics rather than specifying it on paper.",
    "Produced the executive narrative and an end-to-end demonstration, then presented to senior leadership and answered on hosting, sustainability, discoverability, and overlap.",
    "Tested the internal hosting pilot directly, completed its intake, and documented precisely why the Hub could not migrate without backend support.",
    "Named the sustaining problem out loud: content freshness is an operating-model risk, not a product feature, and it needs an owner.",
  ],
  keyDecisions: [
    "Organize enablement around skills and jobs rather than fixed role courses. Roles overlap and are actively changing under AI; the underlying work is what stays reusable.",
    "Keep the framework technology-agnostic, organizing needs around outcomes so tool-specific content can attach to a durable need without making the whole information architecture obsolete when the tool changes.",
    "Treat seniority, AI proficiency, and builder orientation as three independent lenses. A single maturity ladder is simpler and misclassifies experienced leaders new to AI alongside non-engineers already building advanced workflows.",
    "Define enablement as more than a content library — workshops, self-service, examples, reusable prompts and agents, coaching, communities, verification — rejecting the equation of content availability with demonstrated capability.",
    "Distinguish discovery from access. The marketplace solved access to tools; the Hub solved relevance, guidance, progress, and return engagement. Declined to collapse the Hub into a repository registry before reconciling the underlying user needs.",
    "Build the experience before committing to a platform. Waiting for hosting to resolve would delay learning; hardening the prototype platform into the final architecture would create operational risk.",
    "Refuse to present possible resources as completed coverage. Placeholders stayed visible as placeholders in the readiness picture given to leadership.",
    "Separate build ownership from sustainable curation, and say so — the person who builds a content product is rarely the right long-term editorial owner.",
  ],
  outcome: [
    "A working Resource Hub prototype demonstrating discovery, learning paths, reusable tooling, wins capture, contribution, and administrative analytics end to end.",
    "A role- and job-based enablement model that senior leadership picked up specifically as a way to avoid boxing people into their current roles as AI reshapes the work.",
    "A consolidated delivery structure that collapsed dozens of separate need-specific sessions into a small set of combined workshops without losing traceability to any individual need.",
    "A documented hosting assessment establishing why the preferred internal platform could not support the product, converting a stalled question into a specific, answerable ask.",
    "Adoption and business impact are unmeasured. The work reached prototype and leadership review; learner participation, durable staffing, and productivity movement were not established at that checkpoint.",
  ],
  lessons: [
    "Enablement fails at discovery far more often than at content. The organization usually already has the material.",
    "Any model that reduces people to a single maturity ladder will misclassify exactly the people you most need to reach.",
    "Building the prototype was the fastest way to make a strategy argument legible to leadership — a working product answers questions a deck only raises.",
    "Naming the unglamorous sustaining problem — who keeps this current — is more useful to leadership than a roadmap that quietly assumes someone will.",
  ],
  tags: [
    "AI Enablement",
    "Jobs to Be Done",
    "Product Direction",
    "Enterprise Strategy",
    "Design Leadership",
    "athenahealth",
    "Director",
  ],
  metrics: [
    { label: "Role", value: "Workstream owner, concept to leadership review" },
    { label: "Model", value: "Persona to job to competency to need" },
    { label: "Stage", value: "Working prototype, adoption unmeasured" },
  ],
  gallery: [
    {
      label:
        "Role and job-to-be-done model: enablement need derived from the work, not from a fixed course catalogue",
    },
    {
      label:
        "Three independent lenses — seniority, AI proficiency, and builder orientation — kept deliberately unmerged",
    },
  ],
  sourceUrl: "https://www.notuser.com/portfolio/ai-resource-hub",
  narrative: {
    hook:
      "The organization did not have an AI training problem. It had thousands of resources and no way for anyone to find the three that applied to them.",
    acts: [
      {
        id: "abundance-without-relevance",
        chapter: "Act 1 · Abundance Without Relevance",
        title: "More content was never going to fix it",
        prose: [
          "Courses, recordings, repositories, prompts, internal sites, and genuinely expert people — all of it existed. What nobody could determine was what applied to their job, what was still current, and what to do next.",
          "The default response to that is another course. It would have failed, because a catalog supplies content and the missing thing was context.",
          "The people affected were not only engineers. Product, UX, support, operations, implementation, subject-matter experts, and analysts all needed a route in, and most existing material assumed a developer.",
        ],
        callout: {
          label: "The trap",
          text: "Roles were themselves changing as AI changed the work. Any fixed role curriculum would have reinforced the organization that existed rather than the one forming.",
        },
      },
      {
        id: "jobs-not-roles",
        chapter: "Act 2 · Jobs, Not Roles",
        title: "Anchoring to the work instead of the org chart",
        prose: [
          "The model started from the job rather than the title: persona, then job to be done, then the AI competency that job now requires, then the enablement need that follows.",
          "That chain survives reorganization, because the work outlasts the role that currently holds it.",
          "I also kept three dimensions deliberately unmerged — seniority, AI proficiency, and builder orientation. Collapsing them into one ladder is tidier and would have misfiled the experienced leader new to AI alongside the non-engineer already shipping advanced workflows.",
        ],
        callout: {
          label: "Leadership move",
          text: "Consolidating scattered labels into a few durable themes let dozens of separate sessions collapse into a handful of combined workshops, without losing the thread back to any individual need.",
        },
      },
      {
        id: "build-to-argue",
        chapter: "Act 3 · Build the Argument",
        title: "A working product instead of another deck",
        prose: [
          "Rather than specifying the Hub and waiting for a platform decision, I built it — discovery, learning paths, reusable tools, wins, contribution, administration, and analytics, running end to end.",
          "That made the strategy legible. Leadership could use the thing and ask sharper questions than a deck would have provoked: hosting, sustainability, discoverability, overlap with the marketplace.",
          "I then tested the preferred internal hosting pilot directly and documented why the Hub could not move to it — the platform supported frontend-only applications and the Hub needed a backend. A vague blocker became a specific ask.",
        ],
      },
    ],
    pivot: {
      chapter: "The Pivot · Discovery Is the Product",
      title: "Separating access from relevance, and refusing to merge them",
      prose: [
        "The pressure was to fold the Hub into the existing marketplace. It would have been faster and it would have solved the wrong problem.",
        "The marketplace solved access — where to get the tool. The Hub solved relevance, guidance, progress, and coming back. Merging them before reconciling those user needs would have produced a registry that nobody browsed twice.",
        "The same discipline applied to readiness: possible resources stayed marked as possible in the picture I gave leadership, rather than being rounded up into coverage the program had not earned.",
      ],
      callout: {
        label: "Transferable principle",
        text: "Access and discovery look like the same problem on a roadmap and behave like different products in a user's hands.",
      },
    },
    resolution: {
      prose: [
        "The Hub reached a working prototype and a senior leadership review, and the job-based model was picked up specifically as a way to avoid boxing people into their current roles.",
        "The honest limit is that the evidence stops there. Learner participation, durable staffing, and productivity movement were not established at that checkpoint, and presenting development completion as adoption would be a misread of what happened.",
        "What the work did settle was the shape of the problem and the operating model it would take to sustain an answer — including naming, without a volunteer in the room, that content freshness needs a permanent owner.",
      ],
      highlight:
        "The strongest result was strategic: an enablement model built on the work people do, which survives the next reorganization and the next tool.",
    },
  },
};
