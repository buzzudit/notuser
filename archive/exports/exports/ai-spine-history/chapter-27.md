# AI Spine History — Chapter 27: Topic-First UX and the Planning-to-Build Contract

The framework’s discovery model had a place for UX work, but the storage shape still reflected individual methods and stages more than the product question being investigated. That made it harder to combine research approaches, carry findings into a change, and distinguish durable knowledge from session mechanics. This chapter reorganizes UX around topics and change artifacts, then sharpens the moment when planning hands authority to implementation.

UX work starts with the topic
-----------------------------

A new UX discovery workspace organizes research around the topic being investigated. Each workspace can hold a research plan, moderator guide, session summaries, consolidated findings, design strategy, decision record, and readout. Validation checks the workspace structure, while migration fixtures demonstrate how an existing research effort can move into the new model.

The organizing principle is intentionally method-agnostic. RITE, resonance interviews, surveys, heuristic evaluation, and other research methods can contribute evidence to the same topic instead of creating separate silos. Method skills keep responsibility for their specialized templates and facilitation guidance; the workspace owns the combined evidence and decisions.

Discovery joins the change folder
---------------------------------

The model is simplified further by consolidating discovery into OpenSpec change folders. Discovery is no longer a parallel tree that later needs to be reconciled with SDD. Research evidence, decisions, proposal, design, specifications, and tasks become parts of one change record, loaded as the workflow reaches the relevant decision.

The main workflow and engineering standards are updated to route UX methods through those artifacts. Discovery decisions become simpler and the intent of each SDD step is clarified: evidence informs the proposal, the proposal defines the chosen change, and implementation consumes the approved plan.

Durable artifacts separate from session state
---------------------------------------------

Two smaller changes reinforce the same boundary. Feature Assets fields are resolved so links and references have an unambiguous home in the change record. Token mode, by contrast, is explicitly session state: it lives in the conversation and is not written to a file merely so a later turn can rediscover it.

This separation prevents temporary operating choices from polluting durable product history while ensuring research and design evidence survives the session that created it.

The planning-to-build checkpoint becomes explicit
-------------------------------------------------

Dependency review guidance is clarified across upstream, downstream, and resolution skills. The workflow states when each review occurs, what evidence is expected, and how health reporting detects missing checkpoints. Most importantly, completion of the planning path now explicitly authorizes implementation. The handoff is no longer implied by having enough files in a folder; it is a governed transition after dependencies and readiness have been resolved.

The contribution workflow carries the same authorization concept for changes to dep-brain itself. Planning is protected from premature implementation, but once the required decision is complete, the system does not continue asking for permission it has already earned.

Principles and rules
--------------------

**UX discovery is organized around the product topic, not the research method.**

**Method skills own specialized practice; the change workspace owns combined evidence and decisions.**

**Discovery and delivery share one change record rather than reconciling parallel folders later.**

**Durable product evidence belongs in files; temporary session preferences belong in the conversation.**

**Dependency checkpoints must be explicit and observable.**

**Approved planning authorizes implementation. The workflow should neither build early nor repeatedly re-request authority after the gate has passed.**

Why this matters
----------------

This chapter closes a long-running seam between discovery and delivery. UX evidence becomes easier to combine, easier to trace into the selected change, and less dependent on which method produced it. At the other end of planning, the build handoff becomes equally clear. Together those changes make SDD feel less like a sequence of document-producing activities and more like one evidence-backed decision system.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #105 | AISPINE-248 — add topic-first UX workspaces | Udit Khandelwal |
| #107 | AISPINE-292 — keep session token mode in the conversation | Nithish Kumar Selvakumaran |
| #108 | AISPINE-228 — resolve Feature Assets fields | Hunter Johnstone |
| #117 | AISPINE-320 — clarify dependency checkpoints and implementation authorization | Hunter Johnstone |

**TLDR**

UX research is reorganized around durable topics and folded into the same OpenSpec change folders used by planning and delivery. Temporary session settings stay out of files, dependency checkpoints become explicit, and completing the governed planning path now clearly authorizes implementation.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=981808905

