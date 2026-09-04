# AI Spine History — Chapter 17: Acceptance Testing and Performance Tuning

By this point in the framework's life, the SDD workflow had a well-defined shape — six steps, a schema for every kind of work, and a growing library of overlay skills enforcing each phase. This chapter is where two very different kinds of maturity show up at once: a real testing discipline that anchors acceptance criteria to executable proof, and a set of performance fixes that make the framework itself cheaper and faster to run every single day. A smaller addition — an HTML roadmap generator, later hardened and renamed, plus a newly tracked Triage Agent zone entry — rounds out the chapter's theme of a framework tuning its own machinery rather than just adding new rules.

Acceptance criteria stop being decoration
-----------------------------------------

Up to now, an Acceptance Criteria section in the proposal document was a required heading, but nothing forced it to actually contain anything. A feature could pass Step 2 with the heading present and the body empty. **That gap closes here: the gate check that governs Step 2 now parses the Acceptance Criteria section for actual list items** — numbered or bulleted — and fails the step if none are found. The rationale is architectural, not just a formatting nitpick: an entire new testing track (Acceptance-Test-Driven Development, or ATDD) is now anchored to those criteria, so an empty AC section would let that whole track silently no-op.

ATDD is introduced as a second, parallel track alongside the existing unit/integration TDD discipline — not a replacement for it. Unit tests continue to anchor to requirement IDs (the implementation contract); acceptance tests anchor to the ACs themselves (the product promise). Both coexist, and the framework is explicit that the coverage thresholds, pyramid ratios, and code-quality gate are unchanged and non-negotiable regardless of how well the acceptance suite does.

**Every AC is routed to exactly one of two destinations.** AUTOMATED means the AC's behavior can be honestly verified against the real top-level entry point with only external boundaries mocked — this produces a runnable acceptance scenario. DEV-VERIFIED means the AC's truth depends on real infrastructure a mock can't faithfully reproduce (real permission enforcement, real alert delivery, "verified in an environment") — this produces no test code at all, only a developer obligation whose evidence gets recorded directly in the traceability matrix. The framework draws a sharp line here: whether the code *attempted* an operation can usually be verified with a recording mock (AUTOMATED); whether that operation *succeeded* against real infrastructure often can't — and the rule is not to defer the attempt-check to DEV-VERIFIED just because the outcome-check has to be. Placeholder or skipped scenarios are explicitly disallowed — a real-infra-only AC produces zero test artifacts, tracked only as an obligation.

Where the acceptance suite lives is deliberately constrained. It's generated locally in the service repo but excluded via a local git-exclude entry — never a committed ignore-file line — so it never stages and never reaches a pull request. The framework goes out of its way to prevent even incidental pollution of the service repo: no committed test-runner configuration should be added solely to support the local run, since it would become an orphan reference once the tests are excluded; the marker is registered inline at run time instead. Generation and the local run are mandatory whenever ATDD applies — including for pure-DDL, SQL-view, or config-only changes — only committing the test code is forbidden.

The verdict, not the test code, is the durable artifact. It's written into the traceability matrix as additional rows alongside the existing requirement/unit-test rows, feeding the same Step 5 quality gate. Jira and the PR may get a mirrored summary after the artifact is updated, but the framework is blunt about the hierarchy: the acceptance suite is generated and run locally and git-ignored — never committed to the service repo. Its verdict is recorded first in the dep-spine traceability matrix; Jira is a mirror, not the durable evidence store. Test code itself must never be pasted into a Jira comment.

At the Step 5 quality gate, the ATDD verdict becomes an additional input layered on top of the existing coverage/code-quality criteria — it can only hold a PASS back, never substitute for it. A failing AUTOMATED scenario counts as a critical uncovered criterion; an AC with neither an automated scenario nor a DEV-VERIFIED obligation counts as unrouted and also drives toward FAIL; a DEV-VERIFIED obligation with no recorded evidence drives toward WARN, waivable only under the same documented-justification rules that already governed waived decisions. Bug fixes get a lighter touch: ATDD is suggested rather than required for the fix schema, reserved for cases where the fix is user-visible, workflow-critical, or otherwise high-risk, with acceptance-style checks derived from the bug report's reproduction steps and expected behavior rather than a new AC section.

Making the everyday workflow cheaper to run
-------------------------------------------

The second half of this chapter has nothing to do with rules and everything to do with cost. As the overlay skill catalog grew across earlier chapters, the core SDD skill's always-on manifest had grown into a long list — every discovery, Jira, Forge, test, and review overlay loaded into context for the whole session regardless of which of the six steps was actually active. **That gets replaced with phase-scoped lazy loading:** the always-on list shrinks to four true always-on entries (agent guardrails, infosec standards, engineering standards, and integrations), and everything else — discovery, Jira-build, Forge validation, test design, and the rest — becomes a step-scoped overlay skill loaded only when the active step and trigger call for it. The core skill file itself now carries an explicit guardrail comment warning maintainers not to add a step-scoped overlay back into the always-on list, since doing so would make it always-on and defeat phase-scoped lazy loading.

The rule that governs this is stated plainly: load these only when the active workflow step and trigger match; when a step ends, stop applying that step's overlay-specific rules. A worked example is written directly into the skill file for a backend-only feature with no UI and no schema change, walking through which overlays load and unload at each step boundary — while the four always-on skills never move.

The second efficiency change targets a different kind of waste: redundant disk reads during gate checks and the main workflow command. The file-read helper inside the gate-check script gains a per-process cache keyed by resolved path, storing content alongside the file's modification time and size so a file that actually changes on disk is transparently re-read, while an unchanged file is served from memory. Every code path that writes a governance artifact now calls a matching cache-invalidation step immediately after the write, so the cache can never serve stale content back to the same process. The main workflow command gets the equivalent rule for its own inspection pass: reuse the snapshot of key files already read during initial inspection rather than re-reading from disk — unless the file was written or changed since it was read, in which case re-read. The framework is careful to preserve the read-before-write principle established earlier — the cache is a performance layer, not a relaxation of the rule that file content, not conversation memory, is authoritative.

A related fix landed in the same pass on the check-running logic itself: gate status and gate advance had each been re-running every check function twice — once to decide pass/fail, once again to print the result. That collapses into a single evaluation pass that runs each check exactly once and returns results for both display and the pass/fail decision, with a test suite added specifically to assert each check function fires only once per invocation.

Principles and rules
--------------------

**An empty Acceptance Criteria section is now a Step 2 failure, not a formatting gap.** The gate check parses for actual numbered or bulleted items inside the AC section; a heading with no content fails the step. This is enforced because ATDD anchors acceptance tests to these ACs, so an empty section would let the acceptance track silently no-op.

**Every AC routes to AUTOMATED or DEV-VERIFIED — no third option.** AUTOMATED produces a runnable scenario with mocked boundaries; DEV-VERIFIED produces zero test code and a tracked obligation instead. Skipped or placeholder scenarios are explicitly disallowed.

**Acceptance test code is local-only, forever.** It lives in a dedicated local test directory, excluded via a local git-exclude entry — never a committed ignore-file line — and no committed configuration file may exist solely to support it. Generation and the local run happen regardless of implementation type; only committing the code is forbidden.

**The verdict lives in the traceability matrix first; Jira is a mirror.** Acceptance verdicts are recorded as additional rows beside the existing requirement/unit-test rows in the dep-spine workspace before anything is posted to Jira, and raw test code must never be pasted into a Jira comment.

**ATDD can only hold back a PASS, never grant one.** It layers on top of the existing coverage and code-quality criteria at the Step 5 gate; a green acceptance suite does not waive the coverage requirement.

**The always-on skill list is reserved for true always-on skills.** A code comment in the core skill file itself now warns against adding any step-scoped overlay back into that list, since it would defeat phase-scoped lazy loading for the entire session.

**Step-scoped overlays deactivate when their step ends.** When a step ends, stop applying that step's overlay-specific rules — unless the next step lists the same overlay or an always-on rule repeats the requirement.

**Artifact reads are cached per-process, never across a write.** Every write path to a governance artifact invalidates that file's cache entry immediately, so read-before-write stays true even with caching enabled.

Why this matters
----------------

These two threads look unrelated but share a purpose: making the framework's guarantees actually hold up under real use rather than just on paper. ATDD closes a hole where "the feature has acceptance criteria" and "the feature was verified against those criteria" could silently diverge — every AC now has to land somewhere provable, either as a running scenario or a tracked human obligation, and the empty-AC gate check makes sure the criteria exist to route in the first place. The lazy-loading and caching work closes a different hole: a governance framework that gets more expensive and slower every time it grows a new overlay skill eventually becomes something teams route around. Scoping overlays to the step that needs them and caching reads that don't need to happen twice keeps the framework's day-to-day cost flat even as its rulebook keeps growing.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #41 | AISPINE-130 — Introduce ATDD development practice in SDD | Arun Karthick Paranjothi |
| #44 | AISPINE-132: phase-scoped lazy loading for dep-sdd overlays (best of both) | Manoj S V |
| #46 | AISPINE-133: cache artifact reads during gate checks and /go | Manoj S V |

**TLDR**

Acceptance criteria now have to contain actual content, not just an empty heading, because a whole new testing track (ATDD) depends on them. Every AC gets routed to either a runnable automated test or a tracked human-verification obligation — never left unrouted or faked with a placeholder.

Separately, a real performance pass lands: skills now load only when the active step actually needs them instead of every skill loading for the whole session, and file reads during gate checks get cached so the same file isn't re-read multiple times per invocation.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437407

