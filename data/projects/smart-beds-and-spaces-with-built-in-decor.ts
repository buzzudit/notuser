import { Project } from "../types/project";

export const project: Project = {
  id: "ed7e086e-7ce2-4dd7-a08d-7efe4c8dbc63",
  slug: "smart-beds-and-spaces-with-built-in-decor",
  title: "Auto Beds and Spaces",
  category: "Personal Project",
  year: "2025",
  organization: "Independent",
  platform: "Fallout 4 Mod",
  scope: "Mod Design, Scripting, Asset Composition",
  summary:
    "A Fallout 4 settlement-building mod that semi-automates decoration by placing a functional bed or space together with surrounding props, so builders move faster without losing creative control.",
  challenge:
    "Decorating settlements in Fallout 4 became repetitive at scale. To furnish a room, I had to place a bed, then covers, then surrounding furniture and clutter, and repeat that process hundreds of times.",
  context:
    "I built this as a personal project for fun after feeling that pain in my own playthroughs. It started as Auto Beds, then expanded into Auto Beds and Spaces once players began asking for dining and living areas as well.",
  role:
    "Solo creator. I defined the concept, edited and composed assets, created textures, wrote placement scripts, packaged the files, published the mod on Nexus Mods, and responded directly to community feedback.",
  process: [
    "Started from a personal pain point in settlement building: furnishing at scale meant placing the same kinds of objects over and over again.",
    "Designed a semi-automated interaction model where placing one bed could also bring in a bed sheet, a foot locker, a usable chair, and other nearby decoration.",
    "Added controlled variation through change options, so players could swap bed sheets or refresh the whole decorative setup instead of being stuck with one output.",
    "Built the mod through a multi-tool workflow that included Creation Kit, NifSkope, Photoshop, scripting, packaging, and AI-assisted experimentation.",
    "Expanded the scope through player comments: the project began with beds, then grew into dining and living spaces and was renamed to reflect that broader direction.",
  ],
  keyDecisions: [
    "Semi-automated the experience instead of fully automating it, because full automation removes the fun of building.",
    "Started narrowly with beds rather than trying to redesign settlement building all at once.",
    "Used Fallout-friendly assets and custom textures so the output felt native to the game rather than visually out of place.",
    "Let the roadmap emerge from community demand instead of forcing a fixed plan up front.",
  ],
  outcome: [
    "By the time of the Concepts over Coffee session, the mod had reached 966 downloads and 61 likes on Nexus Mods.",
    "The Nexus discussion had grown to roughly 50 to 60 comments across three pages, giving the project a real feedback loop.",
    "The project evolved from a focused bed mod into a broader spaces mod covering additional room types.",
    "It became a strong proof point that I could combine design, programming, texture work, asset composition, and community iteration in one end-to-end personal project.",
  ],
  lessons: [
    "A personal pain point can be a sharper product prompt than a top-down roadmap.",
    "The best automation often lives in the middle: remove repetition without removing agency.",
    "Starting small makes ambitious creative systems more learnable and more shippable.",
    "This project is the practical follow-through to the learning arc in my blog post 'How I almost failed at modding.'",
  ],
  tags: [
    "Personal Project",
    "Game Modding",
    "Fallout 4",
    "Creation Kit",
    "Scripting",
    "Community Feedback",
  ],
  metrics: [
    { label: "Downloads", value: "966" },
    { label: "Likes", value: "61" },
    { label: "Discussion", value: "50-60 comments" },
    { label: "Scope growth", value: "Beds to spaces" },
  ],
  gallery: [],
  sourceUrl: "https://www.nexusmods.com/fallout4/mods/99176",
  isPrivate: false,
  narrative: {
    hook:
      "I did not start this mod because I wanted another asset pack. I started it because decorating settlements meant solving the same problem hundreds of times.",
    acts: [
      {
        id: "the-repetition-problem",
        chapter: "Act 1 · The Pain That Would Not Stay Small",
        title: "The problem was not creativity. It was repetition.",
        prose: [
          "When I was building settlements in Fallout 4, the friction was never coming up with ideas. The friction was execution. To finish a single room, I had to place a bed, then go back through menus for covers, nearby furniture, and surrounding clutter.",
          "That is manageable once. It becomes exhausting when you think about furnishing whole settlements. In the session, I described it as the moment where you realize you may have to solve the same decoration problem hundreds of times.",
          "That was the actual start of the mod. Not a grand roadmap. Not a market gap analysis. Just a very clear personal pain point that kept repeating.",
        ],
        callout: {
          label: "What triggered the project",
          text: "I built it because the manual workflow was too laborious, especially when multiplied across many rooms and many beds.",
        },
      },
      {
        id: "semi-automation",
        chapter: "Act 2 · Finding the Sweet Spot",
        title: "I did not want full automation. I wanted assisted creativity.",
        prose: [
          "The core design choice was not whether to automate, but how far to go. I did not want a button that built everything for the player, because then the fun disappears.",
          "So I looked for a middle ground. When a player places a bed, the mod can also bring in nearby decorative pieces like a bed sheet, a foot locker, and a chair. The result feels complete immediately, but the player is still the one composing the settlement.",
          "I also added variation controls. A player can change the bed sheet or refresh the larger setup, which keeps the system from feeling static while preserving the speed benefit.",
        ],
        options: [
          {
            label: "Path A: Full automation",
            detail: "Faster output, but too much control leaves the player and the creative fun drops away.",
          },
          {
            label: "Path B: Semi-automation",
            detail: "Reduce repetitive work while keeping the player in charge of the overall build.",
          },
        ],
        callout: {
          label: "Design principle",
          text: "The right answer was the sweet spot where the computer helps, but does not take over.",
        },
      },
      {
        id: "from-beds-to-spaces",
        chapter: "Act 3 · The Mod Grew in Public",
        title: "I started with beds. The community pulled it into something bigger.",
        prose: [
          "The first version was just beds. That was the whole idea. I posted it that way, and even the name reflected that narrow scope.",
          "Then the comments started coming in. People asked for adjacent use cases, which pushed the project from Auto Beds into Auto Beds and Spaces. Dining spaces came next. Living spaces were already in progress. The shape of the mod changed because people were telling me where the pain existed beyond the first feature.",
          "That meant the roadmap was not something I authored in advance. I kept building, learning, and responding. The mod evolved in public, with each release clarifying what belonged in the system.",
        ],
        callout: {
          label: "Community effect",
          text: "The naming change itself tells the story: this stopped being only about beds once the players showed me the broader opportunity.",
        },
      },
    ],
    pivot: {
      chapter: "The Pivot · Treat It Like a Product",
      title: "Once I stopped thinking in props, I started thinking in workflows.",
      prose: [
        "What made the mod click was realizing that the real design unit was not a single object. It was a decorating workflow.",
        "That pushed me into a more complete system: asset composition in NifSkope, texture work in Photoshop, scripting in the Creation Kit workflow, packaging, publishing, and then learning from live feedback.",
        "This is also where the project connects back to my blog post 'How I almost failed at modding.' That post is about learning how to stay with the complexity. This mod is what happened once that learning turned into a repeatable process.",
      ],
      callout: {
        label: "Transferable insight",
        text: "A hobby project becomes serious when you stop shipping pieces and start shaping the workflow around the user.",
      },
    },
    resolution: {
      prose: [
        "By the time I presented it in the Concepts over Coffee session, the mod had 966 downloads, 61 likes, and pages of discussion on Nexus Mods.",
        "More importantly, it had become a real loop: I shipped something from a personal pain point, players responded, and the project widened from beds into spaces.",
        "It also forced me to use nearly every skill I had at once: design judgment, scripting, asset editing, texture work, packaging, and community iteration.",
      ],
      highlight:
        "The goal was never to let the computer decorate everything. The goal was to remove the boring parts and keep the fun.",
    },
  },
};
