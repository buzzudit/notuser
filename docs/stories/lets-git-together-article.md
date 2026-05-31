# Let's Git Together article

## Story Spec

### Objective

Publish a practical Git article based on the VTT and slide images in `temp/letsgittogether/` that keeps the original training analogies intact for non-developers.

### Scope

* Add a new public blog article on Git for non-developers.
* Ignore the older markdown draft as source material.
* Keep the article structure close to the source Git analogies: snapshots, photo album, time machine, alternate timelines, merges, and pull requests.
* Start with the photographer slide and use included full-picture slide images where they support the article.
* Frame the article around the approved headline sequence from photographer, scene, commit, staging, repository, history, branch, merge, conflict, pull request, commands, and whole picture.
* Include at least one visual per headline/section, with generated local visuals where the slide deck does not have a clean match.
* Match the simple, lightweight, non-developer-friendly tone from the VTT training.
* Register the article in the blog index so the blog page and sitemap include it.

### Out of Scope

* Broad blog redesign or blog data model changes.
* Publishing the whole slide deck.
* Adding unrelated Claude, MCP, package-install, terminal-basics, or admin-privilege material to the Git article.

### Acceptance Criteria

* The article appears on `/blog`.
* The article has a canonical detail page under `/blog/lets-git-together-non-developers-guide-to-git`.
* Selected images render inline where they reinforce the analogies.
* Every section has an associated image, and the scene/staging section can use more than one image where it improves comprehension.
* Copy stays concise enough that the images can carry part of the explanation.
* Sitemap generation includes the new canonical blog URL.
* Existing blog posts and legacy redirects keep working.

### Definition of Done

* Blog data and selected image assets are committed-ready.
* `npm run lint` passes.
* `npm run build` passes.

### Notes

* Source material lives in `temp/letsgittogether/`.
* The public article should avoid drifting into a generic Git command reference.
* Keep the article focused on Git. Do not pull in the broader Claude Code, MCP, package install, terminal-basics, or admin-privilege prep slides.
