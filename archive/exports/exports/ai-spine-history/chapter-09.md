# AI Spine History — Chapter 9: Feature Backlog, External Skills, and the BMAD Adapter

By this point in the framework's life, the workspace progress file had quietly become two things at once: a place status commands auto-refreshed with live status, and — informally — wherever teams jotted down the features they hadn't started yet. Nothing separated the two, so "backlog" had no real home. **This chapter gives it one**, and then uses the same moment of tidying up the contribution path to open the framework to something new: skills that live outside the framework entirely, maintained by other teams' repos, and pulled in rather than copied. That same mechanism is immediately put to real use — a shared React best-practices bundle and an app-building skill arrive as the framework's first external dependencies — and, on the process side, a full adapter is built for teams currently running a different methodology (BMAD) who want in without abandoning their existing workflow overnight.

Backlog becomes a first-class status, not a side document
---------------------------------------------------------

The workspace progress file's feature list is redefined as the single source of truth for every feature regardless of what stage it's in — backlog, active, or closed — rather than a list that the progress command alone was allowed to touch. **The split that makes this work is between agent-managed fields and human-managed ones:** the progress command may only ever update step, step name, RAG status, and next action; everything else — status, priority, description, target GA, dependencies, notes — is written by people and must never be silently overwritten.

This isn't just a schema change — both the progress and go commands start reading it. The "no feature exists" path now checks the backlog before it asks a team to start from scratch: if backlog entries exist, it surfaces the highest-priority one by name and description and offers to start speccing it. The progress report grew a matching backlog section — a ranked table of open items with target GA and blocking dependencies. The framework's own internal backlog — the long-running table of "known limitations" that had been living directly in the main configuration file — moves out of the file entirely and into a Jira epic, keeping the framework's own backlog consistent with the mechanism every downstream team now uses.

Skills that live somewhere else
-------------------------------

Until now, every skill was the framework's own, edited in place. That stops being the only option. **A skill maintained in an external repo can now be tracked as a git submodule internally** — invisible to downstream workspaces, stripped out entirely during setup — while a materialized copy of the same content lives at the normal skill path and syncs to downstream workspaces exactly like any other skill. Downstream teams never see the submodule or know an external upstream exists; they just receive files.

Adding one is a fixed move: add the submodule, copy the relevant subtree into the skill's own directory, commit both. Updating later is a submodule update followed by the same copy step, so the materialized copy never drifts from what the upstream actually contains. One submodule can also back several skills at once if the external repo is itself a skill library — each skill inside it materializes into its own directory, tracked in a table mapping submodule and internal path to the framework's own skill name. **The one hard rule: never edit the materialized copy directly if the skill is externally managed** — fixes go upstream.

This mechanism gets used immediately. Two external repos are wired in: an innersource repo supplies a React best-practices bundle — a 30-plus-skill set covering component composition, design-system integration, CSS, TypeScript, and testing conventions — and an app-builder skill, an end-to-end scaffolding skill for building micro-frontends against the org's design system, from spec or design file through to a committed, tested codebase. A second external repo supplies facilitation guides for direction-finding concept testing and iterative usability studies. All four join the standard skill table in the README, and the React best-practices bundle is added to the set of skills that activate automatically at any step touching frontend — placed ahead of the framework's own older frontend skill, which is explicitly marked deprecated for code-inspectable checks now that the newer bundle supersedes it.

The BMAD adapter: migrate, or bridge
------------------------------------

Some teams arriving at the framework aren't starting from nothing — they're running BMAD, an existing orchestrator-based methodology with its own artifacts. Forcing a clean break was judged too costly, so a BMAD adapter skill ships with **two distinct modes** and asks up front which one a team wants: is this a one-time migration, or does the team plan to keep using their existing repo and want the new framework kept in sync as it evolves?

**Mode 1 — one-time migration.** BMAD repos are typically one feature per branch, so the skill enumerates remote branches, checks each for existing content, and runs the full translation once per selected branch. The mapping is deliberate rather than a blind copy: a PRD document becomes the framework's proposal doc, with user stories rewritten into standard "As a [user], I want [action], so that [outcome]" form and acceptance criteria rewritten into user-observable outcomes; an architecture document becomes the framework's design doc, but only the feature-delta parts — content describing the existing system is flagged and redirected toward the living architecture document rather than copied wholesale; and individual story files split three ways, with narrative and ACs feeding the proposal and derived requirements (never copied verbatim) feeding the specs. The skill also scans for methodology-specific extensions — custom personas, task definitions, team templates, non-standard commands — and classifies each against a five-way rubric (Duplicate, Partial overlap, Candidate contribution, Local command, Retire) before executing anything, so nothing team-specific silently disappears in the move.

**Mode 2 — the active bridge**, for teams that don't want to migrate at all — they keep working directly in their existing repo, and a generated bridge command installed into that repo does the translation live: it detects which step of the other methodology is active, loads the matching framework skill from the paired workspace, and writes validated output back. Every write-back runs full structural validation before committing, looping on failures until it passes. The backing sync script is conflict-aware: if the artifact it's about to overwrite was modified locally since the last bridge run, it writes a merge-candidate file and flags the conflict instead of clobbering anything.

Discoverable operations
-----------------------

Two operations that had existed as internal conventions — a health scan (assessing adoption and engineering-quality signals) and a rollup (pulling living product docs from downstream repos into the center) — are formalized as registered, discoverable commands rather than something a user had to already know to invoke. Because these are internal-only and meaningless in a downstream workspace, they're added to the sync command's explicit exclusion list — the same command that keeps downstream repos current is taught to skip these files by name.

Why this matters
----------------

This chapter is about the framework admitting that "not started yet" is a real state worth tracking, and that the framework doesn't have to author every skill it distributes. The backlog unification means future work and in-flight work live in one place with one clear rule about who's allowed to touch what field. External skills via submodule mean the framework can lean on living, externally-maintained expertise without freezing a stale copy at import time. And the BMAD adapter is the clearest sign yet that the framework expects to onboard teams with existing investment in a different way of working — offering a real choice between a clean break and a live bridge, rather than forcing either.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #15 | Feature/AISPINE-15 feature backlog | Hunter Johnstone |
| #16 | Feature/AISPINE-76 linter external skills | Hunter Johnstone |
| #17 | AISPINE-79 — register /health and /rollup as slash commands | Sam Lambson |

**TLDR**

Backlog tracking gets a real home: features move through backlog → active → closed with a clear rule about which fields the agent can update automatically and which are human-owned.

The framework also starts allowing skills to live in externally-maintained repos and sync in as living dependencies instead of frozen copies — used immediately to pull in a React best-practices bundle and an app-builder skill. And a BMAD adapter ships so teams already using a different methodology can either do a one-time migration or run an ongoing live bridge, instead of being forced to switch overnight.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437376

