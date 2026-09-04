# AI Spine History — Chapter 19: Repo Access Tooling and Registry Consolidation

This chapter is largely housekeeping — but the kind of housekeeping that determines whether the previous eighteen chapters' worth of governance actually works in practice. Teams onboarding to dep-spine kept running into the same friction: agents that couldn't read their service repos, a registry of products and zones that had quietly drifted, and a growing pile of local cache paths scattered across the framework instead of living in one place. This chapter fixes all three, and adds one genuinely new capability along the way — a skill that lets the framework reach past product development entirely and into infrastructure migration.

Repo access becomes a conversation, not a settings edit
-------------------------------------------------------

Until now, giving an agent access to a team's own service repositories meant hand-editing a local settings file — finding the right JSON path, typing in absolute directory paths, and hoping you didn't typo something. **The framework replaces that with an interactive repo-access skill**, entered through a lightweight setup entry point that the sync mechanism now calls automatically whenever the main workflow notices that a service repo listed in the architecture document has no local access configured.

The workflow is deliberately conversational rather than a form to fill out. It starts by inspecting what's already there — reading the local settings and the architecture document's Components table — and only then asks which repo or component the user wants to set up, rather than jumping straight to "what's the path?" If the user doesn't know or doesn't provide a path, the skill can search for it: a companion discovery script walks approved local directories looking for repository folders and fuzzy-matches what it finds against component names using a straightforward scoring scheme — an exact name match scores highest, a suffix/prefix match scores high, a substring match scores moderate, and token overlap scores incrementally per shared word. The skill presents ranked candidates and waits for the user to confirm before writing anything.

Once a path is confirmed, a second script merges it into the local permissions configuration, preserving existing entries and deduplicating by resolved absolute path. For Codex, which has no local settings file to edit, the skill instead tells the user to relaunch the CLI with a directory flag or, for the desktop app, to root the project at a common parent folder containing both workspaces.

**The skill is explicit about the boundary it's protecting:** shared service identity (component name, Bitbucket repo, Jira project) belongs in the shared architecture document, and machine-local absolute paths must never leak into that or any other shared artifact. As the skill's core rules put it, the architecture document is a shared service inventory only and is never searched for local paths. This matters because that document is committed and shared across a team — every engineer's laptop has a different checkout location, and only the gitignored local settings file is safe to hold that information.

Cache and registry paths get one home
-------------------------------------

Separately, the framework's own internal storage gets tidied up. Cross-product caching — the product docs that the rollup command fetches from other dep-spine repos so leaders and cross-product workflows have current context without re-fetching every time — used to write to a products-labeled cache path. That path is renamed to a dedicated cache directory throughout the framework, closing the confusion between "disposable, regenerable artifact" and the framework's actual per-product ownership data.

Zones learn where their repos actually live
-------------------------------------------

The zone registry — the file that maps every product and subproduct to a zone, a leader, and a dep-spine slug — **gains a new location field.** Each product entry can now record which Bitbucket project that product's dep-spine workspace repo is expected to live in. A new code comment spells out the intent precisely: this field records where the repo is expected to live, but doesn't imply the product equals that project — multiple products may share a project. Dozens of product entries across the registry pick up this field, each pointing at its actual Bitbucket project key.

This location data isn't just documentation — it feeds directly into the registry's own health checks. A new helper compares a discovered repo's actual Bitbucket project against the declared location for its slug and reports whether it's in the expected place; a repo with no declared location is treated as compliant by default. Supporting helpers let zone-scoped tooling resolve which Bitbucket projects and slugs belong to a given zone or subzone, including fuzzy zone-name matching that strips stopwords before comparing. The fuzzy repo-name matcher used elsewhere in the registry tooling also picks up a small but meaningful fix, closing a class of false negatives in zone reconciliation reports.

Two more zone cleanups land in the same window, continuing work started by other teams in earlier chapters: a set of legacy 1.0-era product entries are removed as stale, no longer representing active products, and the Message Management Services group is consolidated — a standalone product suite that had wrapped several AI-assisted sub-slugs is flattened into direct top-level entries.

A skill for infrastructure, not just product features
-----------------------------------------------------

The most structurally new addition in this chapter is a Lambda-to-PCA migration skill that has nothing to do with feature specs, discovery, or Jira hygiene — **it migrates an existing Lambda service and its AWS resources from distributed AWS accounts into athenahealth's Platform Cloud Accounts.** It's the framework's first real foray into infrastructure/cloud migration work rather than product development, and it's built with the same rigor as the SDD skills that came before it: gather required inputs before touching any files, present an inventory for user confirmation before generating anything, and never assume defaults that belong to one specific team.

The skill opens by demanding several inputs before it will read any service files: the distributed account IDs per environment tier, tag values used for tracking, the Terraform workspace prefix, and the team folder prefix used in remote-state keys — with an explicit warning not to assume a shared identity folder prefix, since that belongs exclusively to a different team. The target platform account IDs themselves are fixed platform constants, while distributed account IDs are team-specific and must be discovered, not guessed.

Once inputs are gathered, the skill reads the service's deployment configuration in full and builds a resource inventory — one row per declared resource, mapped to its Terraform equivalent using a large athenahealth module registry covering IAM roles, streams, tables, queues, keys, and two dozen other resource types. The skill is blunt that this step cannot be skipped or rubber-stamped: do not proceed past this step until the user confirms the inventory is complete and correct. From there it scaffolds a full Terraform workspace — one file per resource type, one backend file per unique account/region pair, and one variables file per derived environment — plus a CI/CD pipeline definition whose environment promotion graph, manual-approval gating, and account-to-environment mapping are all derived from whichever environments actually exist in the source deployment configuration, not copied wholesale from the skill's own reference template.

Ongoing registry hygiene from other teams
-----------------------------------------

As in earlier chapters, zone slug cleanup continues as routine, distributed maintenance rather than a single coordinated effort — teams fix their own corner of the registry as they notice drift, treating it as a living, continuously-corrected document rather than a one-time snapshot.

Why this matters
----------------

None of the individual pieces here are glamorous, but together they close a gap between the framework's governance ambitions and its day-to-day usability. An agent that can't read a team's actual service code can't do meaningful architecture review or feature work no matter how well-specified the process is — the repo-access skill removes that blocker without compromising the boundary between shared, committed artifacts and machine-local configuration. The cache consolidation and the new location field on the zone registry are both instances of the same underlying discipline: give every piece of derived or local state an unambiguous, single home, so that reconciliation tooling can tell the difference between "this is wrong" and "this was never declared." And the infrastructure-migration skill demonstrates that the discipline dep-brain has been building isn't limited to product features with Jira tickets and OpenSpec proposals — the same discipline of gathering inputs, presenting inventories for confirmation, and deriving output from actual source-of-truth files rather than assumptions applies just as well to a Terraform migration as it does to a UI feature.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #57 | AISPINE-146 — Add interactive repo setup skill for local service repo access | Sahana Banerjee |
| #58 | Feature/AISPINE-144 | Charan Alagappan Vallinathan |
| #59 | fixing INTAIX products | Amirthalingam Rajasundar |
| #60 | IAM-9678 Add Lambda Pca Migrate Skill | Clyson Dsouza |
| #61 | AISPINE-145 Message Management Service cleanup | Maharajan Kamatchi Sundareswaran |
| #62 | Feature/AISPINE-147 | Hunter Johnstone |

**TLDR**

Three practical friction points get fixed at once: an interactive skill replaces hand-editing settings files to give an agent access to your service repos, the framework's internal cache paths get consolidated into one consistent location, and the zone registry gains a "location" field so it's possible to detect when a product's repo isn't where it's expected to be.

The chapter also adds the framework's first infrastructure-migration skill — moving Lambda services into Platform Cloud Accounts — built with the same input-gathering, confirm-before-acting discipline as the product-facing skills.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437411

