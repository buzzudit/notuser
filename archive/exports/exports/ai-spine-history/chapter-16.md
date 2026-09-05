# AI Spine History — Chapter 16: The Great Skill-Folder Refactor

By this point the framework had accumulated skills, commands, and scripts the way any fast-moving repo does: a skills directory here, a commands directory there, brain-only scripts scattered under their own path, and a single shared integration script quietly doing double duty as the connection layer for half the automation in the repo. None of it was wrong, exactly — it was just accreted rather than designed. **This chapter is where that accretion gets deliberately torn down and rebuilt**, right after the commercialization skill finally earns the structure its own workflow had been missing.

Commercialization grows a spine
-------------------------------

The commercialization skill had been running as a delta-spec workflow with living specs that accumulated loosely under a shared changes tree. **That model gets replaced with something considerably more concrete:** a dedicated OpenSpec instance with three new persistent workspace directories — SKUs, packages, and buyers — sitting alongside the existing per-initiative changes tree.

A SKU is now its own file, one per commercial offering, written from the buyer's perspective rather than an internal framing, with an explicit pricing model and tier but no dollar amounts in the spec at all. Packages bundle SKUs together, and buyers get their own persona files that SKUs and packages reference by ID. All three are cross-referenced by design: a SKU file lists which packages include it and which buyer IDs target it, and those references have to resolve — a new CI check exists specifically to catch broken links between the three.

The initiative lifecycle itself picks up a real Activation gate. Every initiative now declares its launch approach up front — "Pilot → GA" or "Direct GA" — and that choice determines which sections of the readiness planner and go-to-market analysis even apply: a Direct GA initiative omits the Pilot section entirely, chosen when the offering is low-risk, well-understood, or the customer set is small and known. A Pilot → GA initiative has to clear defined Pilot Success Criteria before it's allowed to advance to the GA gate. At Handoff, anything an initiative built or modified in its own subfolders gets promoted into the canonical workspace directories, with a Change History row appended to the promoted file — the initiative's spec work becomes permanent organizational memory rather than something that dies with the initiative folder.

Dependent Features — the dep-spine work an initiative's launch timing depends on — get a defined resolution path too: check the cached progress data first, fall back to reading the feature's status file directly from its own repo, and never use Jira for this because it's "too coarse, can drift." Once a dependent feature ships, its tracked row is rewritten automatically to point at the shipped spec instead of the now-closed change directory.

Everything moves under one skills directory
-------------------------------------------

Immediately after, a large restructuring effort lands — and it touches essentially every file in the repository that isn't product code. **The premise is simple to state and enormous to execute: every command and every skill should live in exactly one predictable place**, with any supporting scripts or data files sitting right next to it instead of scattered across separate script, command, and skill trees.

Commands stop being a separate concept from skills. Every top-level command file makes the same move into the unified skill directory structure. Brain-only commands and skills consolidate the same way, with the Codex mirror reduced to thin redirect shells. The old split — a skill's behavior in one tree, its invocation in another — disappears; a skill and everything it needs to run now travel together.

Brain-internal scripts that used to live scattered under their own path move into the skill folders they actually serve, and the pipeline job that pushes schema updates out to every dep-spine repo is renamed and promoted to the repo root as a standalone entry point, since it's invoked directly by the CI pipeline rather than through the skill-loading path.

The old contribution guide is retired outright. Its content — the placement rules, the external-skill submodule instructions, the current external-skill registry — doesn't disappear, it moves into the contribute skill itself, so the one workflow that actually walks someone through contributing is also the one document that explains the rules for doing it. There's no longer a separate cliff-notes file that can drift out of sync with the workflow it describes.

One client becomes three
------------------------

The biggest structural surgery is inside the shared Atlassian client script, which had grown into the repo's de facto integration layer: Jira and Bitbucket auth, MCP-vs-script fallback logic, and workforce-analytics zone lookups, all in one module that everything else imported from. **It gets split three ways**, each piece landing in the skill folder that actually owns its concern:

* **The integrations skill** keeps the connection cascade itself — detection, the script fallback, and credential handling for Jira and Bitbucket. It's marked as not directly user-invocable: no one calls it directly, every other skill defers to it.
* **The workforce-lookup skill** takes ownership of workforce/zone discovery, cleanly separated from generic Atlassian auth because it's a different API with a different cache lifecycle.
* **The schema-push tool** keeps only what it needs to push schema updates to dep-spine repos, importing the connection cascade rather than owning any auth logic itself.

Every script that used to import the old combined client now points at the new integrations module by name, and skills that previously referenced the old MCP-standards skill for "the integration cascade" are updated to point at the new name.

Principles & rules
------------------

**One directory per skill, script included.** The new rule is explicit: a skill's own folder is the only place its behavior lives, and supporting scripts and data files live alongside it. A skill is no longer a single file with scripts scattered elsewhere in the tree that only it uses.

**Commands are skills now, not a separate tree.** Any change that used to touch a standalone command file now touches the unified skill folder, with the Codex mirror reduced to a one-line redirect: follow the Claude Code skill file, do not duplicate full content.

**Brain-only stays brain-only, but consistently.** The brain-only skill directory holds both brain-only skills and their scripts, stripped from dep-spine workspaces at setup time; the Codex brain-only directory holds only the matching thin redirects. The sync-scope table in the contribution guide is the single source of truth for what propagates to dep-spine and what stays behind.

**Renames require a full-repo reference sweep.** The pre-flight checklist adds a hard requirement for this kind of move: if a file is renamed anywhere in the repo, search the full repo — including all skills — to catch all references before committing. A refactor this size doesn't get to leave dangling paths for the next contributor to trip over.

**Don't inline auth logic — defer to the integrations skill.** Skills that need Jira, Bitbucket, or Confluence access are told directly not to define their own fallback cascade. Jira-touching skills are updated to list the integrations skill as a required dependency rather than reimplementing detection logic.

**No dollar amounts in commercialization specs.** SKU and pricing templates are explicit: pricing tier and model are recorded, but never a specific figure — enforced by a dedicated CI gate rather than left to reviewer diligence.

**Pilot and GA are a declared choice, not an afterthought.** The go-to-market analysis and readiness planner both require the launch approach to be stated at the top of the document, and the two files must agree with each other. Pilot success criteria are a real gate: an initiative cannot advance to GA on a Pilot → GA path until those criteria are met and documented.

**External skills stay externally owned.** The submodule pattern that used to live in the old contribution guide is preserved verbatim in spirit inside the new one: a submodule for the upstream repo, a materialized copy at the normal skill path, and a standing rule that the materialized copy is what reviewers see in PRs and what dep-spine teams receive — never edit it directly if the skill is externally managed.

Why this matters
----------------

None of this changes what the framework does for a team running through the SDD flow — it changes whether the framework itself stays maintainable as it keeps growing. Before this chapter, finding "the file that owns X" meant knowing which of three or four trees to check; after it, the answer is always the same shape. Splitting the shared Atlassian client into three focused pieces does the same thing for the integration layer — three modules with one job each, instead of one module every other script quietly depended on. And giving commercialization real SKU, package, and buyer structure with an enforced Pilot/GA gate means commercialization initiatives now leave behind durable, cross-referenced artifacts instead of prose that only made sense to the person who wrote it.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #38 | Adding NCHS to the products - ISCAPS-10383 | Sakthidevi S |
| #39 | Feature/AISPINE-122 | Hunter Johnstone |
| #40 | Feature/AISPINE-117 | Hunter Johnstone |

**TLDR**

The commercialization skill grows real structure — persistent SKU, package, and buyer files with cross-references that must resolve, plus a Pilot/Direct-GA activation gate.

The much bigger event is a repo-wide restructuring: every command and skill moves into one predictable folder layout instead of being scattered across separate command/skill/script trees, and a monolithic Atlassian client script gets split into three focused pieces (integrations, workforce lookup, schema push) so no other script inlines its own auth logic.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437404

