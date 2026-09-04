# AI Spine History — Chapter 5: The Big Reconciliation Pass

By this point the framework had grown fast enough that its pieces had started to drift from each other. `/go` told Codex CLI users to type a slash command that didn't exist for them. `proposal.md` had no owner field, no rollout section, and Jira integration was reading rollout data out of `design.md`, a file that didn't reliably have it. There was no low-friction way to report a bug in dep-brain itself short of opening a full PR. And a brand-new kind of contribution — a data architecture skill covering schema design, migrations, and HIPAA governance — needed a home that didn't exist yet. **This chapter is the pass where all of that gets reconciled at once**: proposal.md gets real ownership and rollout structure, Jira field mapping gets corrected to match, a `/feedback` path gets added below `/contribute`, dep-brain-light gets brought into alignment with dep-brain's new terminology, the README gets restructured around Codex parity, and data architecture becomes a first-class governed skill.

Proposal gets an owner and a rollout plan
-----------------------------------------

`proposal.md` picks up a required top-level **Product Owner** field, defaulted to `git config user.name` at creation time and confirmed with the user before being written — this same value now syncs to a dedicated Jira custom field (`customfield_15901`) on the Feature ticket, so ownership is recorded once, in the artifact, rather than asked for separately every time a ticket is touched.

Alongside it, proposal.md gains an entirely new **Rollout** section, explicitly scoped as a product decision rather than an engineering one ("the engineering implementation of toggles belongs in design.md"). It asks for an enablement model (opt-in, pushed, or phased), the unit of enablement (user, practice, tier, geography, or other), and a phase table — Alpha, Pilot, GA — where each row states the rollout target and the gating criteria that must be true before that phase ships. **The template is explicit that implementation phases and rollout phases are treated as the same thing in dep-brain's model**: each Epic is a release milestone for its phase's rollout population. A closing prompt for support and communication readiness makes sure a feature doesn't ship without documentation or support tooling in place, with "No support readiness steps." as the honest default when none are needed.

The lightweight `dep-brain-light` schema gets the same fields, just optional rather than required — a Product Owner field, and a Rollout section that can be skipped with "No toggle — enabled at deploy." when an enhancement doesn't need one, plus a **Rollback notes** line asking what can't be cleanly reversed if the change needs to be disabled after deploy.

User stories and acceptance criteria get cleaned up alongside this: stories drop their embedded Given/When/Then blocks and are scoped to the primary happy path only, referencing the ACs that satisfy them. Acceptance criteria absorb everything that used to blur across both — happy paths and error/edge conditions alike — with a required phrasing for failure cases: "Given [the failure precondition], when [action], then [what the user observes]." Design links absorb open UX questions and interaction decisions that previously had no clear home. The net effect is that each section of the artifact now owns exactly one kind of content instead of three sections all partially describing the same behavior.

Jira stops asking twice
-----------------------

Because proposal.md now carries Product Owner and Rollout data directly, **the Jira field-mapping table in `dep-jira-standards` is corrected to pull from it instead of from `design.md`**. Target GA Release, Path to GA, Rollout Friction, and Complexity of Adoption all move from "ask during planning" to a direct read of the Rollout section — Path to GA maps to the phase sequence and gating criteria (including staggered waves within a phase where relevant), Rollout Friction maps to the complexity of those gating criteria, and Complexity of Adoption maps to the enablement model plus support readiness requirements. Product Owner moves from an ad hoc `design.md` lookup to the confirmed proposal.md field synced to its dedicated custom field. dep-sdd's own proposal.md creation order is tightened to match: gather content, run Jira-hygiene guide mode to catch missing required fields, create the Jira Feature ticket, confirm the Product Owner field is actually set on it, and only then write `proposal.md` with the real key embedded throughout — the rule is explicit that "there is no placeholder" for the feature key.

`/go` stops assuming a slash
----------------------------

The workspace guidance in `AGENTS.md` — the file Codex CLI reads instead of `CLAUDE.md` — is corrected so it no longer tells Codex users to type `/go`. It previously listed both `/go` and `go` as valid triggers even though Codex has no slash-command syntax; that's collapsed to just `go`, `guide`, `progress`, and the newly added `contribute`, matching how Codex users actually invoke the workspace. **The README's command table is restructured around the same distinction**: a two-column Claude Code / Codex header now sits above every command, with an explicit note that "the underlying prompt files are identical" — the asymmetry was purely in how the two tools were told to invoke the same behavior, not in the behavior itself.

`/feedback` — a path that doesn't need write access
---------------------------------------------------

Below `/contribute`, the framework adds **`/feedback`**, described as "the lightweight path for reporting something wrong or suggesting an improvement to dep-brain. It does not require developer access, a branch, or a PR — it just creates a Jira task so the AI Spine team can triage it." It asks the user what broke and what they expected instead, checks whether the report is actually about dep-brain itself versus the user's own feature work (redirecting to `/go` in the latter case), locates the active "DEP Brain and Spine" Epic via a Jira search, and files a Task linked to it. If Jira access isn't available, it falls back to giving the user a pre-filled summary to paste into a new ticket manually. The command explicitly draws the line against its sibling: use `/feedback` to report something; use `/contribute` if you want to fix or build it yourself.

Terminology and schema alignment
--------------------------------

With dep-brain's proposal template changed, `dep-brain-light` — the lightweight schema for single-phase enhancements — gets pulled into step with it rather than left to drift: same Product Owner field, same optional Rollout section, same AC phrasing for error states, same removal of inline Given/When/Then from stories. The `openspec/services.md` service map is also split in two: the shared, committed file keeps only repo metadata (no more developer-specific local paths mixed into version-controlled content), and a new gitignored `openspec/services.local.yaml` — with an `.example` template — holds machine-local repo paths per developer. **`AGENTS.md` picks up an explicit "shared artifact hygiene" rule as a consequence**: never write machine-local absolute paths into any shared artifact; use repo-relative paths or `filename:line` references instead, because local paths belong only in the gitignored file.

A new skill: data architecture and HIPAA governance
---------------------------------------------------

The framework's Step 3 (Specs + Design) gains a dedicated `dep-data-architecture` skill, contributed as a standalone specification covering schema design, data flow, storage selection, migration strategy, and HIPAA compliance. It activates whenever a feature touches a database table, introduces a data pipeline, establishes a cross-service data contract, adds a new storage technology, changes retention behavior, or requires a migration file — and can also be loaded independently for data modeling work outside the full workflow. **Its output has a fixed home: `design.md ## Data Model`, with seven required subsections that cannot be left blank** (an explicit "N/A" is required where a subsection genuinely doesn't apply).

To support this new skill, both the `assessment.md` template and the `dep-brain` schema are expanded well beyond their prior scope — the assessment artifact now requires a Repo Composition table, a Call Flow section, a Data Access section, Auth and Permission Boundaries, a Behavioral Model (or an explicit "Structural track only" note when it wasn't run), and a Test Surface and Coverage Gaps section, with every risk now rated BLOCKING / ADVISORY / INFORMATIONAL alongside a confidence level of EXPLICIT / INFERRED / UNCERTAIN. The same three-tier confidence scale replaces the old HIGH/MEDIUM/LOW rating in `spike.md`, unifying how confidence is expressed everywhere in the framework.

Principles & rules
------------------

**Product Owner is confirmed, not assumed.** The default comes from `git config user.name`, but the framework must confirm it with the user before writing it — and it is written exactly once, in `proposal.md`, then synced outward to Jira rather than re-derived per artifact.

**Rollout is a product decision, design.md is not where it lives.** The Rollout section's own comment is explicit: "This is a product decision — the engineering implementation of toggles belongs in design.md." Implementation phases and rollout phases are treated as identical in dep-brain's model — each Epic is a release milestone for its phase's rollout population, not a separate concept engineers negotiate later.

**Error states belong in Acceptance Criteria, never in User Stories.** Stories describe only the primary happy path; every error and edge condition is written as an AC in the fixed form "Given [the failure precondition], when [action], then [what the user observes]." This rule is enforced identically in both `dep-brain` and `dep-brain-light`.

**The Jira Feature key must exist before `proposal.md` does.** "Never write `proposal.md` before the Jira Feature key is confirmed" — the directory name, the STATUS.md `Feature:` field, and every downstream artifact reference depend on a real key, and the framework will not self-fulfill this requirement on the user's behalf.

**Local paths never enter shared artifacts.** Machine-specific absolute paths (`/Users/...`, `/home/...`) are barred from `assessment.md`, `design.md`, `specs/`, and `project-standards.md`. They belong only in the gitignored `openspec/services.local.yaml`; shared documents use repo-relative paths or `filename:line` references.

**Data Model subsections are a hard gate, not a suggestion.** When `dep-data-architecture` applies, Step 3 cannot pass until all seven required subsections are populated, every introduced PHI/PII field is copied into `openspec/project-standards.md ## PHI/PII Inventory`, and any SIGNOFF REQUIRED condition surfaced during data flow or storage selection has a matching signed-off user story in `specs/`.

**The HIPAA minimum-necessary test is mandatory before adding any PHI field.** The skill states it plainly: "Collecting PHI beyond what the feature's ACs require is a compliance violation — not a design choice." If the honest answer to "is this field required to fulfill the stated purpose of this feature?" is "it might be useful later," the field fails the test and must be challenged in design review.

**Migrations are expand/contract, always, with a rollback answer required.** Every schema change proceeds through Expand (additive only), Migrate (dual-write, backfill), and Contract (remove old structures) as separate phases and separate migration files, and every migration ADR must answer four fixed questions: the rollback procedure, whether a DOWN migration exists, the data-loss risk in rollback, and which team is responsible for executing it during an incident.

**Commands are the same prompt, different syntax — and the docs must say so.** The Claude Code / Codex CLI split is treated as cosmetic, not functional: every command reference in the README, `AGENTS.md`, and the command files themselves now names both invocation forms side by side, and `AGENTS.md` no longer tells Codex users to type a slash they don't have.

Why this matters
----------------

None of these changes introduce a new phase or a new artifact type — they fix seams where the framework's own pieces had stopped agreeing with each other. Rollout and ownership data now lives in exactly one place instead of being asked for twice; Codex users get instructions that match the tool they're actually typing into; a report of a broken skill no longer requires the same PR ceremony as fixing it; and a new governance domain — data architecture, schema evolution, and HIPAA compliance — enters the framework with the same enforced rigor as everything else in Step 3, rather than being left as tacit tribal knowledge. Reconciliation work like this is unglamorous, but it's what keeps a framework this large from quietly diverging from itself as it grows.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #7 | Feature/AISPINE-48 dep brain v4 | Hunter Johnstone |
| #6 | feat(dep-data-architecture): add data architecture skill with schema, migration, and HIPAA governance standards | Amol Patankar |

**TLDR**

A cleanup chapter where several loose ends get tied together at once: the proposal document gets a real owner field and a rollout plan section, Jira stops being asked for the same info twice, Codex users get instructions that actually match their tool, and a lightweight /feedback path is added so reporting a framework bug doesn't require opening a full PR.

The other big addition is a new data-architecture skill covering schema design, migrations, and HIPAA compliance — with a hard rule that you can't add a patient-data field just because it might be useful later; it has to be required by the feature's actual acceptance criteria.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437359

