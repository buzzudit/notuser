# AI Spine History — Chapter 23: Stage Gates and Consumer-Aware Change

The framework already required acceptance criteria and traceability, but readiness was still too easy to judge as a final-state property: assemble the documents, run validation, and decide whether the package is complete. This chapter changes the model. Quality becomes something checked at each transition, and dependency awareness expands from the services immediately named in a proposal to the consumers that may never appear in the initiating team’s repository.

Quality moves to the transitions
--------------------------------

SDD gains stage-gate quality controls across the lifecycle. Each step has an explicit entry and exit contract, with automated checks that examine whether the artifacts needed for the next decision actually exist and contain meaningful evidence. Proposal review, task readiness, traceability, and fix evidence become connected parts of one progression rather than independent documents that happen to share a folder.

The gate checker grows substantially to support this model. It validates required artifacts and relationships, distinguishes different schema routes, and produces actionable failures before a change advances. The workflow can therefore stop incomplete work at the boundary where the missing evidence matters, instead of allowing ambiguity to accumulate until implementation or review.

Reference documents become recognized evidence
----------------------------------------------

Teams often carry important supporting material outside the primary product, architecture, or change templates: research summaries, migration notes, operational constraints, decision records, or domain-specific references. The SDD guidance now explicitly recognizes these supporting documents and tells the workflow when to load them.

That closes a subtle gap. A rigid template-only process can appear complete while ignoring the context that actually governs the decision. The new guidance preserves a structured core without pretending every meaningful fact must be copied into a standard form.

Forward blast radius becomes a first-class concern
--------------------------------------------------

A new consumer-awareness skill adds the forward direction that dependency review was missing. Traditional dependency checks ask what the current change relies on. Consumer awareness asks who relies on the thing being changed.

The workflow identifies shared-service consumers, gathers evidence from registered products and repositories, distinguishes confirmed consumers from plausible ones, and brings the resulting blast radius into planning. Capability templates gain a place to record this consumer context so it persists beyond a single review session.

Backlog language also gets clarified around portfolio intent. The backlog is not merely a local queue of tickets; it represents future investment and sequencing across a product area. That framing makes consumer and dependency evidence relevant before a Story is selected for build, not only after engineering has begun.

Principles and rules
--------------------

**Quality is enforced at stage boundaries, not reconstructed at the end.**

**A gate checks readiness for the next decision, not superficial document presence.**

**Supporting evidence may live outside standard templates and must be loaded when relevant.**

**Dependency analysis looks both backward to providers and forward to consumers.**

**Backlog items express portfolio intent, so cross-product impact belongs in prioritization.**

Why this matters
----------------

Stage gates and consumer awareness address the same failure mode from opposite directions: locally complete work that is globally unready. One prevents a change from advancing without its internal evidence; the other prevents a team from assuming that internal evidence captures everyone affected. Together they make “ready” a stronger, portfolio-aware claim.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #82 | AISPINE-203 — add SDD stage-gate quality controls | Udit Khandelwal |
| #66 | AISPINE-178 — recognize supporting reference documents | Kalaiarasan Sivaprakasam |
| #91 | AISPINE-215 — add forward blast-radius and consumer awareness | Kalaiarasan Sivaprakasam |
| #92 | AISPINE-217 — clarify backlog portfolio intent | Hunter Johnstone |
| #73 | AISPINE-195 — register the DR enablement skill | Arun kumar Subramaniyan |

**TLDR**

SDD begins checking quality at every lifecycle transition, using real evidence and traceability rather than end-of-process document checks. A new consumer-awareness practice adds forward blast-radius analysis, so planning accounts for the products and services that depend on what is changing.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=981808901

