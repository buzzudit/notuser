# AI Spine History — Chapter 3: OpenSpec Migration and Naming Shakeout

By this point the framework had a working skeleton, but it was speaking two dialects at once: naming borrowed from wherever the original prototype happened to land, and terminology that didn't yet agree with the emerging spec-driven-development vocabulary the rest of the organization was converging on. This chapter is the housecleaning pass — **the framework adopts the OpenSpec methodology as its organizing model**, rewrites its skills documentation to match, and **renames its core concepts wholesale** so that the words teams use to talk about the framework finally mean what they say.

Adopting OpenSpec as the backbone
---------------------------------

Rather than continue to grow its own bespoke vocabulary for how specs, proposals, and implementation phases relate to one another, **the framework aligns itself to the OpenSpec methodology** — a more disciplined, widely-recognized model for spec-driven development. This wasn't a cosmetic rebrand: it meant re-deriving the skills documentation from scratch around OpenSpec's assumptions about how a change moves from proposed spec to accepted implementation, rather than continuing to patch documentation that had been written before the team had a settled opinion on that lifecycle. Adopting an outside methodology also gave the framework a stable reference point to justify its terminology choices, instead of every naming decision being an internal judgment call.

The great rename
----------------

With OpenSpec as the reference frame, several names that had drifted from their actual meaning got corrected in one pass:

* **`--team` becomes `--product`.** The flag had been named after the org unit running the framework, not the thing the framework actually organizes work around. Renaming it to `--product` aligns the CLI surface with how work is actually scoped — by product area, not by whichever team happens to be operating it that week.
* **`dep-panel-review` becomes `dep-quality-review`.** "Panel" described the mechanism (a panel of reviewers) rather than the purpose (a quality gate). The new name says what the skill is for, not how it happens to be staffed.
* **`dep-runtime-standards` becomes `dep-infosec-standards`.** The old name suggested general operational concerns; the actual content of the skill was security-and-compliance standards enforced at build time. Renaming it to `dep-infosec-standards` removes the ambiguity and makes the skill discoverable by the concern it actually addresses.
* **`dep-brain-dev` becomes `dep-sdd-dev`.** This is the most telling rename of the batch: the framework's own development-facing skill drops the internal codename ("brain") in favor of the methodology it implements — spec-driven development. It's a small signal of a larger shift, where the framework starts describing itself by what it does rather than by what it's internally called.

**Each of these renames touches every skill, template, and command reference that mentioned the old name**, so the shakeout isn't just a find-and-replace on a handful of files — it's a consistency sweep across the whole documentation surface, done so that a team reading any one skill file encounters the same vocabulary as a team reading any other.

Clarifying skill boundaries
---------------------------

Renaming alone doesn't fix confusion if two skills still overlap in scope, so this chapter also draws a clearer line between `dep-jira-standards` and `dep-atlassian-integration`. **The former is the rules layer** — what a Jira issue must look like, what fields are required, what the hierarchy and statuses mean. **The latter is the mechanism layer** — how the framework actually talks to Atlassian's APIs to create and update those issues. Before this clarification the two skills risked becoming a single grab-bag of "everything Jira-related"; separating standards from integration means a contributor changing how the framework calls the Jira API doesn't have to touch the same file as a contributor changing what fields a Story requires, and vice versa.

A front door for contribution
-----------------------------

The chapter also introduces a **`/contribute` command** — a first explicit, discoverable entry point for someone who wants to add to or modify the framework itself, rather than use it to build a product feature. Up to now, contributing to the framework meant knowing where the skills lived and how they were structured; `/contribute` gives that process a name and a starting point, which matters more than it sounds once the renamed, reorganized skill set stops being small enough to hold in one person's head.

Why this matters
----------------

None of this chapter's changes add new capability — nothing here lets a team do something they couldn't do before. What it does is make the framework's vocabulary trustworthy: a `--product` flag that means product, a `dep-quality-review` that's unambiguously about quality, a `dep-infosec-standards` that's unambiguously about security, and a `dep-sdd-dev` skill that says outright what methodology it's implementing. Aligning to OpenSpec gives that vocabulary an external anchor instead of an internal one, and clarifying the Jira skill boundary keeps the documentation from re-accumulating the same ambiguity it just shed. This is the chapter where the framework's internal language catches up to what it's actually trying to be.

---

Appendix: Relevant PRs
----------------------

No PRs — direct commits to master.

**TLDR**

The framework had grown its own inconsistent naming, so this chapter is a cleanup pass: it adopts OpenSpec as a shared, outside-recognized model for how specs and proposals move through the process, instead of inventing its own rules for that as it goes.

Four names get corrected to say what they actually mean: `--team` → `--product` (work is scoped by product, not by team), `dep-panel-review` → `dep-quality-review` (names the purpose, not the mechanism), `dep-runtime-standards` → `dep-infosec-standards` (it was always a security skill), and `dep-brain-dev` → `dep-sdd-dev` (drops the internal codename for the actual methodology).

The chapter also draws a clean line between Jira rules (`dep-jira-standards`) and Jira mechanics (`dep-atlassian-integration`), so the two stop blurring into one catch-all skill. And it adds `/contribute` — the first real front door for someone who wants to modify the framework itself rather than build a feature with it.

None of this adds new capability. It's the chapter where the framework's own vocabulary finally matches what it's trying to be.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437350

