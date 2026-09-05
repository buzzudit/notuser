# AI Spine History — Chapter 24: The Cross-Spine Delivery Control Plane

As adoption spread, no single repository could answer a basic portfolio question: what is actually moving toward delivery? Jira knew about tickets, each Spine knew about its own change artifacts, and service repositories knew about implementation, but those views did not line up automatically. This chapter builds the first cross-spine pipeline and then folds it into the everyday progress experience.

The first cross-spine pipeline
------------------------------

An experimental pipeline command scans registered Spines and groups work into recognizable delivery states. Its first versions quickly expose the difficulty of turning heterogeneous repository state into one trustworthy view: status files vary, Jira hierarchies differ, repository listings are paginated, and terms such as “spec complete” or “in build” need operational definitions.

The command evolves through those failures. It flattens results across repositories, adds an explicit In Build bucket, orders active work by SDD step, and renames the stages to clearer portfolio language: Backlog, In Draft, Shovel-Ready Build Queue, and In Build. Design and specification artifacts must contain real content rather than placeholders before a change is treated as ready. Multi-Story work is labeled instead of being forced into a one-ticket assumption.

A dashboard accompanies the conversation
----------------------------------------

Every pipeline run begins producing an HTML dashboard alongside the chat report. This gives the portfolio view a durable, scannable form without making the HTML file the source of truth. The dashboard escapes repository and Jira content before rendering, and parsing logic is separated into a testable module.

Hardening closes several real correctness gaps: repository discovery must paginate fully before filtering; matching uses correct word boundaries; UTF-8 command output is handled safely; and Sub-task-as-Story hierarchies no longer disappear from the results. Test coverage reaches the point where the parser can evolve without silently changing the portfolio’s meaning.

Pipeline and progress converge
------------------------------

The experimental command is eventually absorbed into progress. Instead of maintaining a parallel progress file, the workflow derives a context-aware changes pipeline from live artifacts and Jira. The same improvement lets the view follow the full Jira parent chain, so a Story can be associated with the correct Feature and higher-level portfolio context rather than stopping at the first parent it recognizes.

Health reporting then measures whether the registered Spines contain the feature and change coverage needed to support this view. The dashboard is not merely prettier reporting; it creates pressure for the underlying registry, artifacts, and hierarchy to become more complete.

Principles and rules
--------------------

**Portfolio status is derived from live systems of record, not maintained in a second status ledger.**

**Readiness requires substantive artifacts, not placeholder files.**

**Cross-repository discovery must finish pagination before making completeness claims.**

**A portfolio view preserves the full Jira hierarchy and handles valid hierarchy variants.**

**Rendered dashboards are outputs, not sources of truth, and all external text is escaped.**

Why this matters
----------------

This work turns dep-brain from a workflow used inside individual repositories into a control plane for understanding delivery across them. It also demonstrates the cost of that ambition: once the framework summarizes multiple sources, parsing, pagination, hierarchy, and output security all become governance concerns. The result is a shared picture that is useful precisely because it is derived rather than manually curated.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #93 | AISPINE-220 — add the experimental cross-spine pipeline | Michael Frankfort |
| #94 | AISPINE-229 — improve dep-brain health coverage | Hunter Johnstone |
| #104 | AISPINE-255 — follow the full Jira parent chain and order In Build work | Michael Frankfort |

**TLDR**

An experimental cross-spine pipeline grows into the main progress experience, combining live Jira hierarchy and repository artifacts into Backlog, In Draft, Shovel-Ready, and In Build views. It gains a safe HTML dashboard, hardened parsing, full pagination, and strong test coverage along the way.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=981808902

