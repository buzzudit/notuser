# AI Spine History — Chapter 2: The Governance Framework Is Born

Before this point, dep-brain was a name and an intention. This is the chapter where it becomes an actual thing: a single, large drop that lands the entire **spec-driven-development (SDD)** governance framework at once — **the slash commands, the skill library, the gate-check tooling, the templates, and the documentation** explaining how it all fits together. Nothing here is scaffolding for later; the six-step governed workflow, the audit trail, and the founding set of twenty skills all arrive fully formed in one motion. This is the true founding commit of the product.

One command, front-loaded with judgment
---------------------------------------

The framework's front door is **`/go`** — deliberately built to be the only command most users ever need. Its own description calls it the "DEP Brain front door — sync upstream, inspect workspace, auto-commit changes, and route to the right workflow." A user types `/go` and nothing else; the agent pulls the latest shared work, inspects where the feature stands, asks one intent question, and routes to the right workflow. Every file the agent touches during the session gets staged and committed automatically, with a descriptive message — the user is never expected to run a git command.

That simplicity is intentional, but it's paired with a rule that keeps `/go` from becoming a way to route around governance: speed is not permission to bypass framework requirements. **The command distinguishes between things a session may legitimately skip** — discovery interview depth when the problem is already clear, design artifact collection when no designs exist yet, codebase assessment for greenfield work — **and a short list of things that may never be skipped**, no matter how urgently the user asks. When someone tries to skip one of those, the agent doesn't quietly comply or quietly refuse; it surfaces a specific, visible warning and proceeds carefully rather than either blocking or capitulating.

A six-step workflow with real teeth
-----------------------------------

At the center of the framework is `dep-sdd-governance`: sequential, artifact-verified step enforcement.

**Six steps:**

1. **Assessment**
2. **Product Requirements**
3. **Engineering Plan**
4. **Implementation**
5. **Quality & Testing**
6. **Close-out**

Each step is gated by a concrete check against a real file, not a self-report. The rule is explicit: "the agent verifies, it does not ask... do not accept a 'yes' in place of verification." **Every feature's canonical plan lives in `docs/sdd/[FEATURE-KEY]/plan.md`, its live status in `STATUS.md`, and its full history of step passages in `AUDIT-LOG.md`.**

This isn't purely a conversational convention, either. **A companion CLI, `dep-sdd-dev`, and a large gate-check script (`dep-sdd-gate-check.py`) enforce the same artifact checks independently of any agent session** — runnable as a pre-commit hook, wired into a Bitbucket Pipeline, or dropped into a GitHub Actions workflow, so a missing `plan.md` or incomplete `prd.md` can block a pipeline before a single test runs. T**he framework is explicit that the two enforcement layers are not redundant**: the CLI checks that required content exists; it cannot check that a Jira ticket is real rather than a placeholder, or that a recorded reviewer name reflects an actual cross-role review. Conversational enforcement during an **active agent session is described as "the primary check" for that class of problem — the CLI is "a structural safety net, not a substitute for the process."**

The skill library
-----------------

**Twenty skills land together**, organized around one composition layer, `dep-sdd`, which the framework describes as not duplicating rules but declaring "which skills are active, at which phases, and with what authority." A handful are always-on across every phase — `dep-agent-guardrails` (protected-zone enforcement and AI scope limits), `dep-runtime-standards` (PHI/PII prohibition in logs, structured logging, performance budgets), `dep-code-standards` (spec-first discipline, commit standards), and `dep-mcp-standards` (MCP tool detection and graceful fallback). Others activate by phase: `dep-codebase-assessment` at discovery, `dep-atlassian-integration` and `dep-jira-standards` at planning, `dep-forge-standards` and `dep-forge-validate` wherever frontend code is touched, `dep-test-standards` and `dep-test-design` through implementation, `dep-reconciliation` at the end of each phase and mandatorily at close-out, and `dep-code-review` before any PR opens. Dedicated exits exist for work that doesn't need the full weight of the process — `dep-enhance` for small changes, `dep-fix` for isolated bugs, `dep-spike` for time-boxed investigation — each explicitly framed as a place to stop rather than continue through the full six steps.

One of the more consequential design calls in this founding drop is the panel review. **Between Implementation and Quality & Testing, `dep-panel-review` spawns four independent reviewers — Spec Compliance, Security, Accessibility, and Performance** — each with its own checklist, each producing a PASS/CONCERN/FAIL verdict without seeing the others' findings. The security reviewer checks for PHI/PII exposure, missing auth, and unsanitized input; the accessibility reviewer checks for Forge component usage and WCAG 2.1 AA compliance; the performance reviewer checks for N+1 queries and unbounded results. **The four reports get combined into one summary**, and the response is tiered to severity: any FAIL prompts a direct question about fixing it now, CONCERNS are noted but don't block, and a clean sweep across all four is called out as such before the feature is allowed to move on.

Provenance, stated up front
---------------------------

The founding README does something unusual for a framework's first real version: it names, in a table, exactly which prior internal frameworks it drew from and what each one contributed — the SKILL.md format and gate-enforcement pattern from one internal agent-extensions project, the delta-spec model and EARS requirement syntax from another, PHI/PII guardrails and SonarQube thresholds from a spec-kit preset, the step model and STATUS.md governance from an AI-DLC framework, the traceability matrix and test-design approach from a BMAD orchestrator, and code review criteria from a Kiro-based toolkit. dep-brain, from its very first real version, positions itself explicitly as a synthesis of the strongest ideas already circulating across DEP teams, not a from-scratch invention — and the credit is preserved directly in the repo rather than left to the original commit message.

Principles & rules
------------------

**Verification, not attestation.** Every one of the six governance steps requires the agent to open and inspect the actual artifact — the PRD, the plan, the traceability matrix — rather than accept a spoken confirmation that the work is done. A "yes" from the user is never sufficient on its own.

**A short, absolute list of non-negotiables.** Regardless of urgency, the framework states plainly that Jira ticket creation (or an explicit "local-only prototype" acknowledgment), platform/runtime confirmation, cross-role review nudges, gate artifact completeness checks, and auto-commit/push after every change can never be skipped. Each has a stated reason — for example, Jira ticket creation cannot be skipped because "traceability, sprint tracking, and gate check auto-detection depend on the key."

**Skipping is surfaced, never silent.** If a user asks to bypass one of those non-negotiables, the rule requires a specific warning format — "⚠ Governance compression: [item] cannot be skipped... [Brief explanation of why it matters]" — and every such request gets written into the audit log, along with whether the session continued or was blocked.

**Acceptance criteria describe outcomes, not systems.** The PRD template requires that each acceptance criterion state something a user can observe — "the user can do X" — and explicitly rejects system-description phrasing like "the system SHALL be fast." Every acceptance criterion must map to at least one user story in the plan before Step 3 can pass; a gap between the two blocks advancement.

**Architecture deviations require a paper trail before the code changes.** If implementation reveals that the approved architecture in `plan.md` needs to change, the framework requires a numbered amendment file be written first, capturing the original decision, what changed, and why — because, as the skill puts it, "`plan.md` only ever shows current state... Git blame shows that a line changed on a given date; it does not show what the original decision was or why it was abandoned." The agent is told explicitly not to silently edit the plan to match new reality.

**A merge gate with real numbers attached.** New code must reach at least 80% line coverage, introduce zero new bugs or vulnerabilities, and stay at or below 3% duplication — stated as "a hard merge blocker," not a target.

**kind:new vs. kind:delta is about spec lineage, not code age.** The framework corrects a natural but wrong intuition up front: an old, well-established service with no prior dep-sdd spec is still `kind:new` work, and a tiny change against a service that already has a spec is still `kind:delta`. "Don't force kind:delta to signal 'we know this codebase' — use kind:new and write the requirements the feature currently needs."

Why this matters
----------------

This chapter is the moment dep-brain stops being an idea about how AI-assisted development *should* work and becomes a specific, opinionated, enforceable answer. The choices made here — verification over attestation, a short list of things that can never be compressed away, a documented amendment trail instead of silent rewrites, a four-perspective review panel that runs without human scheduling — are the ones that recur, get refined, and get argued about in every later chapter of this history. Nearly everything that comes after is either building on this shape or correcting a rough edge in it.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #2 | feat: dep-brain v2 — SDD governance framework with skill library | Hunter Johnstone |

**TLDR**

dep-brain's first real release landed everything at once: a single /go command as the front door, a six-step process (Assessment → Requirements → Plan → Implementation → Testing → Close-out), and twenty skills to enforce it — including a four-reviewer panel (Security, Accessibility, Performance, Spec Compliance) that checks every feature before it ships.

The philosophy driving all of it: trust nothing you haven't verified. The agent has to open and check the actual files, not just take someone's word that something's done. A handful of things — creating the Jira ticket, confirming the platform, reviewing gate artifacts — can never be skipped, no matter how much of a rush someone's in, and if anyone tries, the framework says so out loud instead of quietly going along with it. Acceptance criteria have to describe what a user can actually see happening, not vague system-speak. And if the original plan changes mid-build, that change has to be written down first — no quietly editing history.

There's also a real merge bar (80%+ test coverage, zero new bugs, low duplication) and a rule that stops teams from mislabeling old work as new just to dodge stricter checks.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437344

