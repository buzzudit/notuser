import { Project } from "../types/project";

export const project: Project = {
  id: "26b7d67c-672a-47d6-9601-cb6d4fe165ec",
  slug: "athenanet-device-manager",
  title: "athenaNet Device Manager",
  category: "UX Design & Strategy",
  year: "2019",
  organization: "athenahealth",
  platform: "Cloud App",
  scope: "UX Strategy, Interaction Design, Delivery Leadership",
  summary:
    "Reimagined athenaNet Device Manager under a compressed timeline to improve install, troubleshooting, and adoption before launch.",
  challenge:
    "Beta feedback showed the workflow was difficult for users trying to download, install, and troubleshoot the application. The team needed a stronger UX quickly, right before release.",
  context:
    "The request came in late in the release cycle, with high pressure to improve quality without delaying momentum. Device management was a complex domain and not a typical athenaNet flow, so rapid understanding was critical.",
  role:
    "Senior UX leader and hands-on project lead. I drove rapid discovery, reframed the core user journey, and partnered tightly with product and engineering to deliver within timeline constraints.",
  process: [
    "Rapidly assessed the existing device-management journey to identify where users were getting stuck in the install and troubleshooting path.",
    "Reframed the information architecture and interaction flow around critical tasks users needed to complete successfully on first attempt.",
    "Iterated quickly with cross-functional stakeholders, balancing design quality with shipping constraints.",
    "Focused implementation on reducing cognitive load in high-friction states while preserving technical accuracy.",
  ],
  keyDecisions: [
    "Prioritized the end-to-end operational workflow over visual polish, with emphasis on install and troubleshooting confidence.",
    "Made interaction clarity the primary success metric under deadline pressure, so each UI decision reduced user ambiguity.",
    "Used rapid iteration loops with stakeholders to maintain momentum while still improving quality materially before launch.",
  ],
  outcome: [
    "ADM 3.0 shipped with a 4/5 satisfaction rating in 19.11, representing a 25% increase over earlier versions.",
    "Reached 50K users with 22% of device usage already on ADM 3.0 one month after GA.",
    "Established a stronger user-centered baseline for a complex product area under tight timeline conditions.",
  ],
  lessons: [
    "In late-cycle redesigns, clear prioritization of user-critical tasks creates the highest leverage.",
    "Complex technical products can still move fast when discovery and decision loops stay tightly coupled.",
    "Strong cross-functional trust is often the difference between rushed UI changes and meaningful outcome gains.",
  ],
  tags: [
    "UX Design & Strategy",
    "Cloud App",
    "athenahealth",
    "Project Lead",
    "Hands-on",
  ],
  metrics: [
    { label: "Satisfaction", value: "4/5" },
    { label: "Lift", value: "+25% vs earlier versions" },
    { label: "Users", value: "50K" },
    { label: "Usage share", value: "22% in month one" },
  ],
  gallery: [
    {
      label: "athenaNet Device Manager cover",
      src: "/images/projects/generated/athenanet-device-manager.png",
      alt: "athenaNet Device Manager",
    },
  ],
  thumbnail: "/images/projects/generated/athenanet-device-manager.png",
  sourceUrl: "https://www.notuser.com/portfolio/athenanet-device-manager",
  isPrivate: false,
  narrative: {
    hook:
      "Weeks before launch, beta users were still struggling with one basic question: how do I get this working without calling support?",
    acts: [
      {
        id: "late-cycle-pressure",
        chapter: "Act 1 · The Late-Cycle Reality",
        title: "The product had to improve fast",
        prose: [
          "The ADM team pulled me in with a time-sensitive ask: reimagine the Device Management experience before launch.",
          "Beta users were finding the path to download, install, and troubleshoot harder than it should be.",
          "There was no luxury timeline. The job was to raise usability quickly in a domain that was both technical and unfamiliar to most users.",
        ],
        callout: {
          label: "Constraint",
          text: "This was high-stakes, last-mile UX work where clarity had to improve without slowing delivery.",
        },
      },
      {
        id: "task-first-redesign",
        chapter: "Act 2 · Design Around Critical Tasks",
        title: "Install and troubleshooting became the design backbone",
        prose: [
          "I focused the redesign on the highest-friction steps users faced when getting devices up and running.",
          "We simplified how key actions were discovered and sequenced, reducing ambiguity in moments where users typically stalled.",
          "The design process stayed tightly collaborative with product and engineering so decisions moved quickly and implementation stayed realistic.",
        ],
      },
      {
        id: "execution-under-deadline",
        chapter: "Act 3 · Shipping Under Pressure",
        title: "Quality gains without losing momentum",
        prose: [
          "The team executed rapid iterations and kept user clarity as the north star.",
          "Because we targeted the core workflow instead of spreading effort thin, the changes landed with meaningful impact.",
          "ADM 3.0 shipped with stronger customer reception and faster adoption than expected.",
        ],
      },
    ],
    pivot: {
      chapter: "The Pivot · Task Clarity Over Feature Density",
      title: "Treat operational confidence as the product outcome",
      prose: [
        "The turning point was deciding that success meant reducing uncertainty in critical tasks, not adding more interface capability.",
        "That reframed design discussions from 'what can we show' to 'what does the user need to finish confidently right now.'",
        "Once that lens was shared, execution accelerated and outcomes improved.",
      ],
      callout: {
        label: "Design principle",
        text: "In complex operational products, confidence is a core UX deliverable.",
      },
    },
    resolution: {
      prose: [
        "Post-launch results reflected the shift: satisfaction rose to 4/5, a 25% lift over earlier versions.",
        "Adoption moved quickly, with 50K users and 22% of device usage on ADM 3.0 within a month.",
        "The project demonstrated how focused, leadership-driven UX can materially improve outcomes even under compressed timelines.",
      ],
      highlight:
        "When a release is close, the highest-impact redesign is the one that makes critical tasks feel obvious.",
    },
  },
};
