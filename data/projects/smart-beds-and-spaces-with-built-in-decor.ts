import { Project } from "../types/project";

export const project: Project = {
  id: "ed7e086e-7ce2-4dd7-a08d-7efe4c8dbc63",
  slug: "smart-beds-and-spaces-with-built-in-decor",
  title: "Smart Beds and Spaces with Built-In Decor",
  category: "Personal Project",
  year: "2025",
  organization: "Independent",
  platform: "Fallout 4 (PC Mod)",
  scope: "Systems Design, 3D Composition, Modding Pipeline",
  summary:
    "Auto Beds & Spaces is a Fallout 4 settlement mod that lets builders drop a fully styled bedroom, dining nook, or living space with one click—decor, lighting, memory collectibles, and interaction prompts included.",
  challenge:
    "Settlement builders love storytelling, but they burn hours snapping clutter into place, debugging navmesh, or re-posing settlers every time. The real blocker isn’t imagination, it’s setup overhead and keeping layouts consistent across dozens of beds.",
  context:
    "Released on Nexus Mods (mod ID 99176) in December 2025 and still actively updated (v1.7 as of Jan 16, 2026). The mod needed to stay dependency-light (no DLC), compatible with Sim Settlements 2 plots, and script-safe enough to earn the ‘Safe to use’ check while supporting a collectible ‘memory’ quest.",
  role:
    "Solo creator and maintainer. I define the content kit, author Creation Kit blueprints, compose AI-assisted textiles, wire up Papyrus scripts, triage community requests in the Nexus thread (185+ posts), and ship hotfixes like the v1.7 ‘Change All’ keyword patch.",
  process: [
    "Mapped the furniture taxonomy (beds, dining, living, wardrobes, tribute wall) so every placement could spawn a complete vignette—functional furniture, clutter, lights, even animated props.",
    "Wrote Creation Kit placement scripts that anchor optional ‘Change All’ toggles, randomize textiles, and occasionally spawn ‘memory’ photos that feed a 10-step collectible quest.",
    "Kept releases modular: beds shipped first (v1.0), dining landed Christmas week, kitchen and living spaces followed after January community requests, and tribute walls + bunk beds arrived in v1.6.",
    "Used Nexus comments as a live research panel—feature backlog came directly from questions like “where’s the 1x1 living room?” or “can I get pre-war kitchens?”—and turned bug reports (e.g., orphaned bunk-bed lights) into hotfixes.",
    "Documented dependency-light packaging (no DLC, no Sim Settlements requirement) so the mod remained installable for console-equivalent load orders and coexisted with SS2 interior plots.",
  ],
  keyDecisions: [
    "Optimized for ‘speed-to-beautiful’ instead of maximum micro-control—players drop one asset and get a coherent scene with clutter, nav-friendly seating, and scripted change modes.",
    "Released as a living kit (v1.0–v1.7) so each update could respond to Nexus asks: dining tables at Christmas, kitchen/living in January, tribute walls and bunk beds once memory quest feedback landed.",
    "Maintained dependency-light shipping (no DLC, no SS2 requirement) so the mod could slot into vanilla or console-friendly load orders while still being SS2-compatible.",
    "Added an in-world memory-collection quest (10 photos) to reward decorators with lore and milestone bonuses, turning repetitive placement into a gamified loop.",
    "Shipped the v1.7 keyword fix to stop ‘Change All’ prompts from leaking onto workbenches—treating small Papyrus bugs with the same urgency as content drops.",
  ],
  outcome: [
    "Reached 2,156 total downloads, 1,157 unique installers, 119 endorsements, and 8,900+ views within the first quarter on Nexus Mods (v1.7).",
    "Expanded into a 130+ asset pack across bedrooms, dining nooks, kitchen modules, living rooms, wardrobes, tribute walls, and Sim Settlements-compatible interior fillers.",
    "Maintained a 0-open-bug status on the Nexus listing while supporting 185+ comment threads for support, feature asks, and screenshots.",
    "Turned the collectible memory mechanic into a community mini-quest: builders now hunt photos while decorating, driving repeat placements instead of one-and-done installs.",
    "Kept pace with feedback—kitchen, living room, and living-space rug variations shipped within days of players asking, proving a responsive solo maintainer loop.",
  ],
  lessons: [
    "Player time is a product metric—one-click placements beat bigger texture sets when builders need to dress 20+ bedrooms overnight.",
    "Nexus comment threads double as research backlogs; responding in warm, release-sized increments keeps the community co-designing the roadmap.",
    "Script-heavy mods live or die by small QA fixes (like the ‘Change All’ keyword). Treat Papyrus hygiene like a SaaS regression, not a side quest.",
    "Gamifying repetitive actions (memory collectibles) creates retention loops even in decorative mods—it’s not just about assets, it’s about motivation.",
  ],
  tags: [
    "Personal Project",
    "Game Modding",
    "Fallout 4",
    "Creation Kit",
    "Community-Driven Iteration",
    "System Design",
  ],
  metrics: [
    { label: "Total downloads", value: "2,156" },
    { label: "Unique installers", value: "1,157" },
    { label: "Endorsements", value: "119" },
    { label: "Content breadth", value: "130+ pieces" },
    { label: "Open bugs", value: "0 listed" },
  ],
  gallery: [],
  sourceUrl: "https://www.nexusmods.com/fallout4/mods/99176",
  isPrivate: false,
  narrative: {
    hook:
      "Settlement building in Fallout 4 often turns into object-by-object busywork. I wanted to give players back their creative flow.",
    acts: [
      {
        id: "friction-in-flow",
        chapter: "Act 1 · The Friction in Creativity",
        title: "The problem wasn’t imagination. It was setup overhead.",
        prose: [
          "Fallout 4’s workshop lets you build entire settlements, but styling a single bedroom means 20+ micro placements. Rugs, lamps, chairs, clutter—it’s a chore before it’s creative.",
          "Players in the Concepts over Coffee session kept repeating the same pain: “I have to place a bed, then a lamp, then a shelf, then delete it when a settler clips through.”",
          "I framed the mod around a product question, not an art one: what if one placement could already look intentionally lived-in without stealing control from the builder?",
        ],
        callout: {
          label: "Design target",
          text: "Reduce repetitive decorating actions while preserving enough variation for personal expression.",
        },
      },
      {
        id: "build-the-kit",
        chapter: "Act 2 · Designing a Practical Kit",
        title: "Structure the content so it’s fast to use and safe to maintain.",
        prose: [
          "I built the mod as a structured kit—beds, wardrobes, dining rugs, kitchen islands, living pods, tribute walls—each with pre-composed decor and nav-friendly collision.",
          "Every placement runs lightweight scripts to randomize textiles, spawn ‘memory’ photos, and expose a ‘Change All’ toggle that cycles the whole vignette.",
          "I kept dependencies at zero (no DLC, no Sim Settlements requirement) so console-equivalent load orders could install it without touching their mod list.",
        ],
        options: [
          {
            label: "Path A: Fully manual clutter",
            detail: "Maximum user control, but high effort, more bugs, and zero collectible loop.",
          },
          {
            label: "Path B: Built-in decor scenes",
            detail: "One-click placement, curated randomness, opt-in change modes, and space for scripted memories.",
          },
        ],
        callout: {
          label: "Chosen approach",
          text: "I went with one-click decor scenes so the mod felt like a kit-of-parts product, not a prop dump.",
        },
      },
      {
        id: "community-loop",
        chapter: "Act 3 · Shipping with the community",
        title: "Nexus posts became the roadmap and QA lab.",
        prose: [
          "Within two weeks of release the thread filled with asks: Sim Settlements interior compatibility, kitchen modules, living rooms, more rug variety, tribute walls.",
          "I answered in releases: dining (Dec 25), kitchen/living (Jan), tribute wall and bunk-bed fixes (Feb), plus v1.7’s hotfix for the ‘Change All’ keyword bleeding onto workbenches.",
          "Even bug escalations (bunk-bed lights persisting after scrap) turned into micro patches, often within 24 hours—treating a hobby mod with production discipline.",
        ],
        callout: {
          label: "Related loop",
          text: "The maintenance workflow mirrored the debugging system from ‘How I almost failed at modding’—log everything, patch in small increments, publish changelogs.",
        },
      },
    ],
    pivot: {
      chapter: "The Pivot · Speed to Beautiful",
      title: "Treat placement time as the primary UX problem.",
      prose: [
        "The most important decision was shifting value from 'more pieces' to 'fewer actions per satisfying result.'",
        "By embedding decor into functional objects, players could focus on spatial storytelling instead of repetitive object assembly.",
        "That changed the feel of settlement building from chore-like setup to immediate creative iteration.",
      ],
      callout: {
        label: "Product principle",
        text: "If users repeat the same setup task every session, that task is the product problem to solve first.",
      },
    },
    resolution: {
      prose: [
        "By v1.7 the kit spanned 130+ assets, 2,156 downloads, and a memory quest that turns decorating into collectible hunting.",
        "Every update stayed dependency-light, zero open bugs, and a habit of answering Nexus requests within days—kitchen, living, tribute wall, even Sim Settlements callouts.",
        "The mod became proof that hobby projects can mimic SaaS cadence: research in comments, scoped releases, hotfix discipline, and storytelling rewards.",
      ],
      highlight:
        "The biggest win wasn’t another prop—it was turning settlement decorating from repetitive setup into a fast, story-rich creative flow.",
    },
  },
};
