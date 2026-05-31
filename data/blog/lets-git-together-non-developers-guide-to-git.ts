import { BlogPost } from "../types/blog";

export const post: BlogPost = {
  id: "real-25",
  slug: "lets-git-together-non-developers-guide-to-git",
  title: "Think Like a Photographer: Git for Non-Developers",
  excerpt:
    "A simple way to understand Git without starting from commands: your project is the scene, and Git helps you capture useful snapshots over time.",
  sourceUrl: "https://www.notuser.com/blog/lets-git-together-non-developers-guide-to-git",
  thumbnail: "/images/blog/lets-git-together/photographer-taking-snapshots.jpeg",
  author: "Udit Khandelwal",
  category: "Blog",
  tags: ["Git", "Collaboration", "Non-developer guide"],
  date: "2026-05-20T12:00:00-04:00",
  updatedAt: "2026-05-20T12:00:00-04:00",
  readTime: "5 min read",
  sections: [
    {
      heading: "Think Like a Photographer",
      paragraphs: [
        "If Git feels intimidating, do not start with commands.",
        "Start with the photographer idea.",
        "Your project is the scene. Git helps you capture snapshots of that scene as it changes over time.",
      ],
    },
    {
      heading: "Your Project Is the Scene",
      paragraphs: [
        "A project is not static. Files appear. Files change. Some edits are intentional. Some are experiments.",
        "Like a photographer arranging a scene, you keep working until there is a moment worth saving.",
        "That project can be an app, a prototype, a website, documentation, or a folder of important working files.",
      ],
    },
    {
      heading: "A Commit Is Pressing the Camera Button",
      paragraphs: [
        "A commit is a saved snapshot of changes.",
        "You do not commit every second. You commit when the work has reached a useful checkpoint.",
        "The commit also carries a short note, so later you can understand what changed and why.",
      ],
    },
    {
      heading: "git add Chooses What Goes in the Frame",
      paragraphs: [
        "`git add` is the staging step.",
        "It decides what goes into the next snapshot.",
        "Maybe ten files changed, but only three are ready. Maybe one file has private notes or an unfinished experiment. You leave that out of the frame.",
      ],
    },
    {
      heading: "The Repository Is the Album",
      paragraphs: [
        "One photo is a commit. The album is the repository.",
        "A repository, or repo, holds the project and the snapshots Git has saved over time.",
        "That is why Git is more than backup. It gives the project an organized memory.",
      ],
    },
    {
      heading: "History Is the Timeline",
      paragraphs: [
        "Git history is the timeline of snapshots.",
        "You can review it, compare moments, and sometimes revert to an earlier state.",
        "When something breaks, history lets you ask a better question: when was this still working?",
      ],
    },
    {
      heading: "A Branch Is Your Own World",
      paragraphs: [
        "A branch is a separate line of work.",
        "It gives you your own world where you can try an idea without altering the main scene.",
        "This is how you can work on a feature, fix, or experiment while the main project stays stable.",
      ],
    },
    {
      heading: "A Merge Brings Worlds Together",
      paragraphs: [
        "A merge brings two branches together into one view.",
        "This is the point where work from your separate world becomes part of the shared project.",
        "Push is not the same thing. Push saves your committed work on the server. Merge combines branches.",
      ],
    },
    {
      heading: "Conflicts Mean Git Needs a Human",
      paragraphs: [
        "Conflicts are normal when merges overlap.",
        "Git can tell that two changes touched the same area. It cannot always know which final version makes sense.",
        "That is where a human decision comes in: keep both, move one, rewrite something, or choose one version.",
      ],
    },
    {
      heading: "A Pull Request Is a Reviewed Merge",
      paragraphs: [
        "A pull request is a formal, reviewable merge.",
        "It gives people a place to discuss the change, run checks, ask questions, and approve it before it enters the main branch.",
        "As a non-developer, you may not create many pull requests yourself, but you should know what developers mean when they say PR.",
      ],
    },
    {
      heading: "A Few Commands Are Enough to Start",
      paragraphs: [
        "You do not need to know every Git command.",
        "Start by recognizing the small set you will hear most often: `init`, `clone`, `add`, `commit`, `checkout`, `branch`, `merge`, `pull`, and `push`.",
        "Also pause when you hear commands like `reset` or `rebase`. They can be useful, but they can also make drastic changes to the repository.",
      ],
    },
    {
      heading: "The Whole Picture",
      paragraphs: [
        "Using Git well gives you safe, reviewable, and reversible project history.",
        "You can save useful moments, work separately, review changes, merge carefully, and go back when needed.",
        "That is the practical value. Git helps you move forward without losing the thread.",
      ],
    },
  ],
};
