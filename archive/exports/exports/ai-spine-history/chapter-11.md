# AI Spine History — Chapter 11: Registry Hygiene and the Sync Mechanism

By this point, dozens of downstream teams had scaffolded their own dep-spine workspaces from the framework, and the cracks that only show up at that scale started to surface. A packaging bug was quietly duplicating the Brain's internal reporting data into every one of those workspaces. `/health` had no way to tell a team "your credentials are the problem" versus "something is actually broken." And — despite the framework having shipped a discovery process, a Jira integration, and a full SDD lifecycle by now — there was still no defined answer to the most basic operational question a governance framework can be asked: how does a downstream repo actually get updates once the Brain changes? **This chapter is where all three get resolved**, and where the Brain/Spine relationship stops being implicit and becomes a documented, repeatable mechanism.

The rollup leak
---------------

`brain-data/` is the aggregated rollup directory where the Brain tracks product architecture, metrics, and progress across every team it governs — the kind of cross-team, leadership-facing content that only makes sense to exist once, centrally. **The bug was that this directory was being seeded into every dep-spine workspace** created from the framework, because dep-brain's own `.gitignore` had `brain-data/` listed alongside the other brain-only directories that `init.sh` strips out at scaffold time. Once removed from tracking that way, the ignore rule structure implied brain-data was symmetric with those other directories — but it isn't: brain-only script and skill directories are genuinely meaningless in a Spine workspace and get deleted outright, while `brain-data/` was accidentally being treated the same way when it should never have been staged as if it belonged in dep-spine's git history at all.

The fix draws a real line between the two repos' responsibilities. dep-brain's `.gitignore` comment now says it plainly: "brain-data/ is intentionally NOT ignored in dep-brain — it is the aggregated rollup output that leadership and cross-team stakeholders browse. It IS ignored in dep-spine workspaces (added by init.sh)." The rollup lives and is tracked where it's produced and consumed; downstream workspaces get a `.gitignore` entry for it instead of a copy of the data itself. `init.sh` now writes that entry directly during scaffolding, guarding against the case where a rollup gets run in a Spine workspace by mistake. And for repos that had already been scaffolded before the fix, the same guardrail was retrofitted into the `/go` command's Step 0 cleanup, so that running an existing sync also repairs the workspace it's syncing into — checking for the missing gitignore line and adding it to the same batch commit as any other brain-artifact cleanup.

Naming the sync mechanism
-------------------------

The framework had always assumed dep-spine workspaces would need to periodically catch up with changes made centrally in dep-brain, but until now that assumption never had a name, a defined scope, or a set of rules a team could actually follow without guessing. **This chapter introduces dep-brain-sync as a formal skill:** the first place the framework states, in one place, what gets synced, what doesn't, and what happens when a local file has diverged from the upstream version it came from.

Sitting alongside it is **dep-migrate-framework**, which handles the harder problem sync alone can't: a workspace that predates a structural change in the framework itself, not just a content update. Where sync assumes the shapes match and only the content needs reconciling, migration assumes the shapes themselves have moved — directories renamed, layers collapsed, new required files introduced — and needs a path to bring an existing workspace's structure in line with the current framework before content-level sync can even be meaningful again.

A third skill, **dep-heuristic-evaluation**, rounds out the chapter's additions. It packages a structured usability review discipline — the standard ten usability heuristics plus a framework-specific human-centered AI heuristic — as a reusable skill any team can point at a feature under review, giving the Spine ecosystem a shared, repeatable way to evaluate UX quality rather than leaving it to each team's own judgment.

Principles & rules
------------------

**New files are always safe.** When a sync runs and finds a file that exists upstream in dep-brain but doesn't exist yet in the local dep-spine workspace, it's added automatically — no confirmation needed, because there's no local content to conflict with.

**Changed files get checked, not overwritten.** For files that exist on both sides but differ, sync doesn't just clobber the local copy. Each changed file within the standard sync scope is checked for local edits, and the workspace's own history determines whether the incoming update is applied cleanly, merged, or flagged for a human decision.

**Brain-only artifacts don't belong in Spine, period.** The framework maintains a running scan for tracked paths that should never have been committed in a dep-spine workspace. Anything found is staged for removal with a path-specific explanation, collected into a single Step 0 batch commit at the start of the sync, so a workspace gets cleaned up as part of catching up, not as a separate manual chore.

**The rollup boundary is explicit, not inferred.** dep-brain's `.gitignore` now documents in-line exactly why the rollup directory is tracked in dep-brain and not in dep-spine — because the aggregated rollup is what leadership and cross-team stakeholders browse centrally, and a Spine workspace has no legitimate reason to carry a copy of it. Any dep-spine repo that had it committed before this fix has a documented recovery path in the same comment block.

**Sync repairs the workspace it's syncing, not just its content.** Because older dep-spine workspaces were scaffolded before the gitignore fix existed, `/go`'s Step 0 doesn't just check for tracked brain-only paths — it also checks whether the rollup directory is present in the local gitignore and adds it if not, folding that repair into the same batch commit as everything else Step 0 cleans up. A team running its normal sync gets the fix automatically, without needing to know the bug ever existed.

Why this matters
----------------

Up to now, the relationship between dep-brain and its downstream Spine repos had been mostly one-directional and implicit: teams scaffolded once from the Brain and were largely on their own after that. This chapter is where that relationship becomes bidirectional and named — sync for keeping pace with ongoing changes, migration for catching up after structural ones — which is what makes "centrally-managed governance framework" a claim the framework can actually back up, rather than a description of how it started. The registry hygiene fix matters for the same reason in miniature: a rollup meant for leadership visibility had been leaking into every team's workspace as dead weight, and fixing it — plus building the repair into the sync path itself — is what keeps the boundary between "what the Brain tracks about everyone" and "what each Spine workspace actually needs" from eroding again as more teams onboard.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #19 | Feature/DEPLT-23 fix gitignore | Patrick Hursen |

**TLDR**

A packaging bug that was leaking internal reporting data into every downstream team's workspace gets fixed, with a repair built directly into the sync process so existing workspaces get cleaned up automatically.

More importantly, the mechanism for pulling framework updates from the central repo into a team's own workspace finally gets a name and a real rule set (dep-brain-sync), plus a companion skill for migrating workspaces that predate a structural change (dep-migrate-framework) and a shared UX heuristic-evaluation skill.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437381

