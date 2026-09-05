# AI Spine History — Chapter 13: Hardening the Guardrails

Up to this point, the framework's governance rules lived almost entirely in prose — skills and schemas the agent was expected to read and follow in good faith. **This chapter is where that trust model gets a second layer: machine-enforced checks that run on every pull request**, independent of whether the agent (or the person driving it) remembered to follow the rules. In quick succession, the pipeline gains structural validation of OpenSpec artifacts, a check for silently rewritten planning documents, then four more checks landing together — acceptance criteria coverage, scenario format consistency, slug and naming consistency, and a PHI/PII exposure scan. One more sweeping guardrail is added and then rolled back pending more discussion, a reminder that not every enforcement idea survives contact with real usage. Alongside the CI work, a substantial backlog-reduction pass cleans up the framework's own file structure, dedupes its Codex and Claude Code command surfaces, and gives brain-only tooling a proper home.

Checks that run whether or not anyone remembers to ask
------------------------------------------------------

The first new gate validates OpenSpec structure on every pull request, run automatically rather than left to reviewer memory. The second closes a specific hole: the proposal document is meant to be a locked planning artifact once Step 2 of the workflow closes, but nothing previously stopped someone from quietly editing it afterward. **The new check looks at whether the proposal has been touched after the audit log recorded Step 2 as passed**, and if so, requires a corresponding entry in the design document's Amendments section describing what changed and why. No entry, no design doc at all, or an empty Amendments section all fail the check outright — the build has to explain itself in writing before it can pass.

These two checks were deliberately made CI-safe rather than conversational: the same enforcement logic that a developer can run interactively also runs headless in the pipeline, using audit-log timestamps and git history rather than asking the agent for its opinion.

Four checks land together
-------------------------

The next wave adds four checks in the same pass, each targeting a different way a spec-driven artifact can quietly drift out of compliance without anyone noticing until much later:

* **Acceptance criteria coverage** — verifying that every requirement written into a feature's specs actually has the AC coverage the workflow expects, rather than trusting that it was done by convention.
* **Scenario format consistency** — enforcing the EARS-style scenario heading structure that the schema instructions describe but previously had no automated backstop.
* **Slug and naming consistency** — checking that feature slugs, capability names, and file paths agree with each other rather than diverging as a feature moves through steps.
* **PHI/PII exposure scan** — a security-flavored check layered on top of existing infosec and codebase-assessment guidance, catching sensitive-data patterns in committed artifacts before a reviewer has to catch them by eye.

Landing these four together signals a shift in how the framework thinks about its own rules: written guidance in a skill file is necessary but not sufficient, and where a rule can be phrased as a yes/no structural check, it eventually gets one.

A guardrail added, then walked back
-----------------------------------

Not every enforcement idea sticks on the first try. **A merge-blocking guardrail was introduced to stop pull requests from landing outright when certain conditions weren't met, and then reverted shortly after** while the team worked out exactly where the line should sit between "block the merge" and "flag it and let a human decide." The revert isn't a retreat from the goal — the four checks above and the amendment lock both remain fully in force — it's a signal that blocking enforcement is treated as a serious, deliberate step that needs its false-positive rate and escape hatches worked out before it goes live, not something bolted on reactively.

Clearing the backlog: a framework housekeeping pass
---------------------------------------------------

Running in the same window, a large backlog-reduction effort tidies up structural debt that had built up across earlier chapters. The brain-only command surface moves into a consistent, dedicated layout matching the shape of the regular command directories instead of living beside them as a special case. **Codex's prompt files, which had been full duplicates of the Claude Code command definitions, become one-line redirects instead**, so a command's instructions live in exactly one place and Codex doesn't drift out of sync with Claude Code over time.

The pass also formalizes the dep-brain-sync skill that runs at the start of every `/go` session: it pulls origin, verifies remotes point where they should, diffs against the last-synced upstream commit, and applies a tiered set of update rules — new files land automatically, changed files with no local edits update automatically, changed files with local edits get a three-way merge or a prompt, and files removed upstream are deleted. It also handles known one-time workspace migrations. A companion dep-migrate-framework skill is introduced to detect and migrate SDD artifacts already in use at a team (BMAD, Spec Kit, AgentOS, custom OpenSpec, or plain docs) into the dep-spine shape, and dep-heuristic-evaluation — an 11-heuristic UX review skill — joins the roster of overlay skills usable at multiple steps.

Commercialization tooling, previously distributed to every dep-spine workspace, moves to a brain-only location and is dropped from the synced skill set entirely — flagged in the skill index as struck through and explicitly not distributed to dep-spine workspaces.

Principles & rules
------------------

**A locked artifact stays locked, or the change has to be explained.** Once Step 2 closes, the proposal document is treated as frozen. Any later edit is allowed, but only if the design document's Amendments section documents what changed and why — an empty or missing Amendments section fails the build even if the proposal edit itself was reasonable.

**CI checks and interactive checks share one implementation.** The gate-check script gained a headless amendment-check command that sits alongside its interactive equivalent — both read the same status file, audit log, and git history, so a developer running the check locally and the pipeline running it on a PR get identical answers.

**Structural checks fail loud and specific, not silent.** The amendment check doesn't just return a pass/fail code — it prints the exact commits found on the proposal document after Step 2 closed and names precisely which file or section is missing, so a failed CI run tells a developer exactly what to fix rather than making them guess.

**Merge-blocking enforcement is not adopted lightly.** When a guardrail was found to block merges more aggressively than the team was ready to commit to, it was reverted rather than patched in place — enforcement that stops work outright gets a higher bar than enforcement that flags and reports.

**Brain-only tooling gets its own consistent shape, and gets excluded from sync by construction.** Anything that scans or aggregates across dep-spine repos lives under a dedicated brain-only path, and dep-brain-sync treats those paths as permanently out of scope — new dep-spine workspaces never receive them, and existing ones get them stripped out and gitignored automatically.

**One command definition, not two.** Codex prompt files stop being parallel copies of Claude Code command files and become one-line redirects. The rule going forward: write the full command once, and add only a redirect stub for Codex — the shared agent guidance file is responsible for translating harness-specific syntax globally, not each individual prompt file.

Why this matters
----------------

A governance framework that only exists as instructions an agent might follow is only as strong as its weakest reading of those instructions. This chapter is where dep-brain starts backing its written rules with checks that run the same way every time, on every PR, regardless of which agent or which human is driving. The proposal-lock and four-check wave close specific, previously silent gaps — a planning document that could be quietly rewritten, acceptance criteria that could go uncovered, scenarios that could drift out of format, slugs that could disagree with themselves, and PHI/PII that could slip through unreviewed. The reverted merge-blocking guardrail is just as instructive as the checks that stuck: it shows a framework willing to enforce hard stops, but not willing to ship one without first being sure it's right. And the backlog-reduction pass underneath it all is what keeps the framework itself honest — cleaning up the very structure that guardrails like these depend on staying legible.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #20 | Feature/AISPINE-82 backlog reduction | Hunter Johnstone |

**TLDR**

The framework's rules stop being just prose an agent is trusted to follow, and start getting backed by real CI checks: OpenSpec structural validation, a lock on the proposal doc after planning closes (with a required amendment log for any later change), plus four more checks for acceptance-criteria coverage, scenario formatting, slug consistency, and PHI/PII exposure.

A stricter merge-blocking guardrail got tried and then rolled back — not abandoned, just judged not ready. Alongside all this, a big cleanup pass consolidates the command/skill file structure and formalizes the dep-brain-sync skill that keeps downstream workspaces up to date.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437389

