# AI Spine History — Chapter 7: Zones, Portfolios, and Jira Hygiene

Two things happen in this chapter that, on the surface, look unrelated: a satellite skill for auditing Jira quality gets folded back into the framework's core, and a second, entirely separate governance effort that had been growing in parallel gets absorbed wholesale. But both events are really about the same underlying shift — **the framework stops treating "the org's reporting structure" as someone else's problem and starts owning it directly**, complete with a real data model for how work rolls up from a team's backlog to a portfolio-level strategy.

Jira hygiene comes home
-----------------------

Field-level Jira validation — required fields, valid values, conditional logic, naming conventions — had been living in a separate repository, `dep-jira-hygiene`, that `dep-jira-standards` only pointed to. **That arrangement is undone here.** The rule files move directly into `dep-jira-standards/rules/`, one YAML file per issue type (`boulder.yaml`, `initiative.yaml`, `feature.yaml`, `epic.yaml`, `story.yaml`, `task.yaml`, `bug.yaml`), and `dep-jira-standards` becomes the single authoritative source for both *what* a ticket should contain and *how to check* whether it does. The line that used to read "field rules live in dep-jira-hygiene... this skill works without it but cannot validate field-level correctness" is gone; validation is no longer an optional add-on.

With the rules absorbed, `dep-jira-standards` also gains a real **guide mode**: before creating any Jira issue, it loads the rules file for that issue type, extracts whatever field values it can from the feature's own artifacts (`proposal.md`, `design.md`, the dep-brain schema), layers on anything the developer has explicitly provided, and produces a gaps list — grouped by phase for Features (ideation → planning → pre-alpha → pre-ga), in file order for everything else. The output is a simple readiness checklist showing a checkmark next to fields already satisfied (like Zone or the feature description) and a question mark next to fields still needed (like Product Owner or the Parent Link to a RADBI Boulder).

Only the unresolved rows get asked about; anything already satisfied is left alone.

A standalone auditor, not a gatekeeper
--------------------------------------

Alongside the merge, a new skill — `dep-jira-audit` — is introduced to do something guide mode deliberately does not: **retroactively sweep existing Jira issues for hygiene gaps.** It's explicitly *not* wired into the day-to-day `dep-sdd` flow ("Not invoked by dep-sdd; run manually to assess Jira quality across a username, project, or zone scope"). Where guide mode is a narrow pre-check run at ticket-creation time, `dep-jira-audit` is a broad, on-demand sweep across the whole R&D hierarchy — Boulder → Initiative → Feature → Epic → Story/Task/Bug — that anyone can point at their own name, their team's project, or an entire zone.

It runs two passes with different bars: a full rule set (chain integrity, all required fields, consistency checks, milestone checks) for anything still In Progress, and a lightweight pass (chain integrity plus only fields marked `bare_minimum: true`, plus date sanity) for anything already Done — recognizing that a closed ticket doesn't need the same scrutiny as one still being worked. It also supports four named "focus areas" — High Priority Security Issues, High Priority Customer Issues, Minor Enhancements, and Client-Reported Bug backlog/triage — each with its own JQL and its own goal tracked on a Confluence page, so an audit can double as a performance snapshot against an org-wide target rather than just a list of missing fields.

Gaps come back as one markdown table per issue type, sorted by status and issue key, tagged `Rule` (a hard requirement) or `Convention` (a softer expectation), each with a remediation hint. And it doesn't stop at reporting: it can walk through the list interactively, proposing a fix for anything unambiguous, asking the developer for anything it can't infer, and writing the result straight back to Jira.

Absorbing a second governance effort
------------------------------------

The larger event in this chapter is **the merger of a parallel initiative — referred to internally as "DLB dep-brain"** — that had been building its own governance layer independent of the main framework: product documentation, a map of zones, a health-check routine, a rollup mechanism, a boulders concept, and a strategy layer. Rather than let two competing models of "how work is organized above the team level" coexist, that effort is folded into dep-brain directly, and it brings its data model with it.

This is where a shared data directory is established, and where a `/kr` command is introduced — the framework's first built-in way to work with key results as first-class objects rather than something buried in a Boulder's free-text description. It's also where "capabilities" get renamed to "portfolios," a small wording change that signals a bigger one: the framework isn't just tracking individual features anymore, it's tracking how they group into the higher-level containers — zones, portfolios, Boulders — that leadership actually plans and reports against.

The Jira hygiene rules absorbed alongside this make that hierarchy concrete rather than aspirational. A Feature's chain integrity now depends on a real `Parent Link` to a Boulder in the `RADBI` project; a Feature's `Zone` field and `Product` field are both `bare_minimum` requirements, not optional metadata; and an Initiative's summary is checked for sync against a "KR: " line in its parent Boulder's description, so the key-result language introduced by `/kr` isn't just documentation — it's something the audit skill actively verifies stays consistent up and down the chain. Scope in the new audit skill is explicitly zone-aware too: someone accountable for an entire product zone (not just their own tickets or their own team's project) can now ask for every Feature under that zone and have the tool traverse Features → Epics → Stories/Tasks/Bugs on their behalf.

Principles & rules
------------------

**One rules directory, one owner.** Field validation rules for every issue type now live in exactly one place — `dep-jira-standards/rules/` — and both the creation-time guide mode and the retroactive `dep-jira-audit` skill read from that same directory. There is no longer a second repository that has to stay in sync with the framework's understanding of Jira structure.

**Guide mode only asks about gaps, never about certainties.** "Ask the developer for each unresolved field before creating the ticket. Do not ask for fields already satisfied." Extracted and explicitly-provided values always take precedence over prompting — the developer is never asked something the framework could have figured out itself.

**Type 2 Features get a real exemption mechanism.** Rather than the framework having to remember a separate exempt-field list, each rule can carry `type2_exempt: true`, and both guide mode and the audit skill skip that field automatically whenever `Feature Type = Type 2`. Release-date-centric and roadmap fields — target release, GA release type, path to GA, the security questionnaire — are all marked this way, because Type 2 (maintenance/expensed) Features are open-ended containers with no GA date to hold them to.

**A broken parent chain always outranks everything else.** Regardless of which fields are filled in, a Story/Task/Bug missing its Epic Link, an Epic missing its Parent Link to a Feature or Initiative, or a Feature missing its Parent Link to a Boulder is flagged as a `Rule`-severity gap — chain integrity is checked first and is never downgraded to a convention.

**Resolved work is graded on a lighter curve.** Once an issue's status category is Done, the audit only checks chain integrity and fields explicitly marked `bare_minimum: true`, plus date sanity — it does not re-litigate every field a closed ticket was ever supposed to have.

**Audits default to identity, not intrusion.** Scope resolution is explicit about what each mode does and doesn't see: a `username` scope only surfaces issues where that person is reporter, assignee, or Product Owner — not anything they're accountable for through a signoff field or zone ownership. Picking the right scope type (`username`, `project`, or `zone`) is treated as a real decision, documented for the person setting up their own audit profile, not a default to accept blindly.

**Acceptance criteria live in the field, not just the description.** Carried over and reinforced from the earlier Story/Task rename, AC standards are now explicit and enforced: AC "MUST be written in the dedicated Jira field — not only in the description body," must be Given/When/Then or clear outcome-oriented bullets, must be specific and measurable, and each criterion must map to at least one test case in the traceability matrix.

**Degraded mode is a documented fallback, not a silent failure.** If REST access isn't available and only the MCP tool can be reached, `dep-jira-audit` still runs — but narrows itself to chain integrity, summary, status, assignee, and reporter, and says so up front: "Running in degraded mode — Jira token not available for REST API." A missing credential shrinks the audit's scope; it doesn't stop it from running at all.

Why this matters
----------------

Before this chapter, "correct Jira structure" and "how the org's work rolls up into zones and portfolios" were two separate concerns, tracked in two separate places, with no guarantee they agreed with each other. Folding dep-jira-hygiene into the framework's core turns field validation from a courtesy check into an enforced standard available at both ticket-creation time and, now, on demand across a whole zone. Absorbing the parallel governance effort at the same time means that standard is being enforced against a hierarchy — zones, portfolios, Boulders, key results — that the framework itself now understands and can verify, rather than trusting that a Feature's Zone field and a leadership rollup happen to describe the same reality. This is the point where dep-brain stops being just a tool for shipping individual features correctly and starts being a tool for keeping the organization's own accounting of its work honest.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #11 | feat(AISPINE-18): absorb dep-jira-hygiene as dep-jira-standards guide mode + dep-jira-audit skill | Hunter Johnstone |

**TLDR**

Jira field validation rules move out of a separate repo and directly into dep-jira-standards, which now also gets a "guide mode" that tells you exactly which fields are missing before you create a ticket, plus a standalone audit skill that can retroactively sweep an entire zone's Jira issues for gaps.

The bigger event is absorbing a parallel governance effort — zones, a rollup mechanism, health checks, and a "Boulders" strategy layer — directly into dep-brain, plus renaming "capabilities" to "portfolios." This is where the framework starts owning the org's reporting hierarchy end to end, not just individual features.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437373

