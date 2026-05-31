# A Non-Developer's Guide to Git

Git can sound intimidating because people often introduce it through commands. But the core idea is much simpler: Git helps you save meaningful versions of a project over time, compare those versions, work safely on changes, and share those changes with other people.

You do not need to memorize every command to understand what Git is doing. You only need a mental model for a few recurring ideas: snapshots, commits, branches, merges, pushes, clones, and pull requests.

## Git Is Version Control

Imagine you are building something over several days or weeks. It could be an app, a prototype, a skill, a design system, or even a collection of documents. As you work, the project changes. You add files, edit existing files, try experiments, remove things, and sometimes make mistakes.

Git is a version control system. It keeps a history of important moments in that project so you are not relying on one fragile current version. Instead of having files named `final`, `final_v2`, `final_really_final`, and `final_use_this_one`, Git gives you a structured history.

The easiest analogy is photography. Each time you decide the project has reached a meaningful point, Git lets you take a snapshot. That snapshot captures the state of the project at that moment. Over time, those snapshots become the project's history.

## A Commit Is a Snapshot

In Git, a saved snapshot is called a commit.

You do not commit every tiny change automatically. You choose when the work is ready to save as a meaningful point in history. For example, you might commit after you finish a new login screen, fix a bug, update documentation, or complete a small feature.

A commit usually includes three important things:

- What changed
- Who made the change
- A short message explaining why the change was made

That commit message matters because future-you, or someone else on the team, may need to understand what happened without rereading every file.

Good commits are logical checkpoints. They say, "This piece of work is now worth preserving."

## `git add` Means Choosing What Goes Into the Snapshot

Before creating a commit, Git asks you to choose which changed files should be included. That step is commonly done with `git add`.

The photography analogy still works here. Before taking a photo, you decide what belongs in the frame. Maybe you worked on five files, but only three are ready to save. Maybe one file contains private notes, a password, or an experiment you do not want to share. You can leave those out.

So `git add` does not mean "save everything." It means "include this file, or these files, in the next snapshot."

Then `git commit` actually takes the snapshot.

## A Repository Is the Project Album

A Git repository, often shortened to repo, is the project plus its Git history. If commits are snapshots, the repository is the album that stores them.

The repository can live on your computer, on a shared server, or both. Git works locally, which means you can make commits on your own machine even before sharing anything with anyone else. Many teams also keep shared repositories on platforms like Bitbucket, GitHub, or GitLab so people can collaborate.

This local-plus-shared model is important:

- Your local repository is your working copy.
- The shared repository is where the team can see and collaborate on work.

You can save locally without publishing immediately.

## Git History Lets You Go Back in Time

Because Git keeps commits, it can help you inspect the past. If something breaks, you can look back through earlier commits to understand when the problem appeared.

You can also restore an older version, peek at a past state, or compare two snapshots to see what changed. Developers often use commands like `git checkout` or newer alternatives for this kind of time travel.

The exact command is less important than the capability: Git gives you a history, and that history gives you options.

Without version control, a broken project can feel like a dead end. With Git, it is more like, "When was the last known good version, and what changed after that?"

## Branches Let You Work Safely

A branch is a separate line of work.

Suppose the main project is already being used by other people. You probably do not want to make risky changes directly to the main version. Instead, you create a branch. That branch starts from an existing commit, then lets you make your own changes independently.

For example, imagine the main app has a login page. You want to add a "forgot password" feature. Rather than changing the main app immediately, you create a branch for that feature. On your branch, you can add the link, build the email flow, test the experience, revise it, and make several commits along the way.

The main project remains stable while your branch evolves.

Branches are useful because they let individuals or small groups work independently without constantly disrupting everyone else. A branch can also have its own history. You can even create a branch from another branch.

## Merge Means Bringing Work Together

At some point, the work on a branch may be ready to join the main project. That joining process is called a merge.

Merging is different from committing. A commit saves a snapshot of work in a branch. A merge brings changes from one branch into another branch.

In the "forgot password" example, your branch may contain the completed feature. The main branch still represents the version everyone uses. When the feature is ready, you merge your branch into the main branch so the main app includes the new feature.

Sometimes merging is straightforward. Sometimes Git needs help.

## Merge Conflicts Happen When Changes Overlap

A merge conflict happens when Git cannot confidently combine changes on its own.

For example, suppose you added a "forgot password" link under a login form while someone else added an "FAQ" link in the same place. Git may not know which link should come first, or whether one change should replace the other. It will ask for a decision.

That decision is not just technical. It can be a product or design decision:

- Should both changes stay?
- Which one appears first?
- Should one be rewritten to fit the other?
- Did one change make the other unnecessary?

Git can identify the overlap, but a human still needs to decide the right result. After the conflict is resolved and tested, the merge can continue.

## Push Means Sharing Your Work With the Server

A common point of confusion is the difference between commit, push, and merge.

A commit saves a snapshot in your local Git history.

A push sends your committed work from your machine to the shared server.

A merge combines work from one branch into another.

Those are separate actions. You can make several commits locally without pushing them. When you are ready for others to see or access your branch, you push it to the shared repository.

But pushing a branch does not automatically change the main branch. It only saves your branch on the server. To make your work part of main, it still needs to be merged.

Put simply:

- Commit: save this checkpoint.
- Push: put my saved work on the server.
- Merge: combine this branch into another branch.

## Clone Means Copying a Repository So You Can Work On It

When a repository exists on a shared server and you do not yet have it on your machine, you clone it.

Cloning copies the repository and its history to your computer. After that, you can inspect it, create a branch, make commits, and eventually push your own work back to the shared server if you have permission.

This is usually the first step when joining work that already exists somewhere else.

## Pull Requests Are a Review Process for Merging

A pull request, often called a PR, is a formal request to merge one branch into another.

Teams use pull requests because changes to important branches should usually be reviewed before they become part of the main project. A pull request lets others inspect the changes, comment, request edits, approve, and eventually merge.

For non-developers, the key thing to know is this: when someone says "open a PR," they usually mean "prepare this branch so it can be reviewed and merged into the main branch."

You may not need to create pull requests often, but you will hear the term whenever Git-based collaboration is happening around production work.

## Commands Worth Recognizing

You do not need to be command-line fluent to understand Git conversations, but a few commands are worth recognizing:

- `git status` shows what has changed and what is ready to commit.
- `git add` chooses files for the next commit.
- `git commit` saves a snapshot.
- `git clone` copies a repository to your machine.
- `git push` sends committed work to the shared server.
- `git checkout` can switch branches or inspect an older state, depending on how it is used.
- `git merge` combines changes from one branch into another.

Some Git commands deserve extra care. Commands like `git reset` and `git rebase` can rewrite or significantly rearrange repository history. They are powerful, but they can also create confusion if used casually. If an assistant, script, or teammate suggests them, it is reasonable to pause and ask what effect the command will have.

## The Mental Model to Keep

Git is not mainly about typing commands. It is about keeping project history understandable and collaboration safe.

Think of it this way:

- A repository is the project album.
- A commit is a snapshot.
- `git add` chooses what goes into the snapshot.
- A branch is a safe copy or separate line of work.
- A merge brings work back together.
- A push shares your local work with the server.
- A clone copies a shared project to your machine.
- A pull request is a reviewed merge into an important branch.

Once those ideas are clear, Git becomes much less mysterious. You may still need help with the exact commands, and that is normal. What matters first is understanding what Git is trying to do: preserve your work, let you experiment safely, and help multiple people collaborate without losing track of the project.
