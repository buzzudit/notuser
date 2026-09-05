# AI Spine History — Chapter 25: Enterprise Reality Expands the Skill Set

The early framework was shaped mainly around Git-hosted product repositories and feature delivery. Broader adoption brings workloads that do not fit that clean model: monolith components in Perforce, mature Perl conventions, organization-wide Sonar cleanup, disaster-recovery procedures, and developers trying to understand the cost of long AI sessions. This chapter expands the managed skill set to meet that enterprise reality.

Monolith and Perforce enter the workflow
----------------------------------------

The dep-spine workflow gains an explicit path for implementation components that are not Git repositories. Planning and governance can still live in the Spine while implementation occurs in a monolith or Perforce workspace. The workflow documents how to locate the component, how to carry change context across the boundary, and which Git-oriented operations do not apply.

Perl engineering skills are materialized into the managed library rather than left behind an external submodule boundary. Directory structure, Oracle-development guidance, TAP testing, and review standards become directly available and are deduplicated against the framework’s general engineering standards. This is less glamorous than adding a new language, but more durable: the guidance can now be synchronized, reviewed, and versioned with the rest of dep-brain.

Remediation becomes a reusable campaign
---------------------------------------

A Sonar remediation workflow turns static-analysis cleanup into a repeatable, configurable campaign. It includes project configuration, API access, issue retrieval, prioritization, and a workflow for moving from findings to verified changes. The contribution is structured for reuse across products rather than tied to one team’s cleanup effort.

DR guidance also receives a correctness pass. An unsupported mesh check is removed and the recovery-point and recovery-time objectives are corrected by tier. The earlier EKS DR enablement skill and Lambda migration guidance are updated as teams exercise them, showing infrastructure practices becoming living, maintained capabilities rather than one-time contributions.

Efficiency becomes observable
-----------------------------

A token-usage skill gives users a supported way to inspect session consumption across Claude Code and Codex. The convention is integrated into the shared agents instructions without persisting an unnecessary delegation log. This extends the efficiency work from Chapter 20: the framework no longer only reduces repeated reads; it helps users see the resource cost of their sessions.

Jira title-prefix conventions are removed in the same period. Association still matters, especially where protected merges enforce it, but duplicating keys in every title is no longer treated as universal correctness. The workflow aligns with the systems that already hold the relationship.

Principles and rules
--------------------

**Governance can span implementation systems without pretending every component is Git-hosted.**

**Enterprise coding guidance belongs in the managed skill library when teams depend on it.**

**Remediation workflows should be reusable campaigns, not one-off scripts.**

**Operational guidance is corrected when real use disproves an assumption.**

**Efficiency is easier to improve when consumption is visible.**

**Ticket association and ticket naming are separate concerns.**

Why this matters
----------------

Frameworks fail at scale when their happy path becomes a hidden eligibility test. Supporting monoliths, Perforce, infrastructure remediation, and mature language ecosystems makes clear that dep-brain governs change rather than prescribing one repository shape. The result is a broader platform with fewer exceptions that teams must handle outside the shared process.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #84 | AISPINE-209 — support monolith and Perforce components | Sathiesh kumar Murugan |
| #98 | AISPINE-232 — add token-usage guidance | Nithish Kumar Selvakumaran |
| #99 | AISPINE-243 — correct DR checks and objectives | Arun kumar Subramaniyan |
| #100 | AISPINE-247 — remove Jira title-prefix conventions | Gang Fu |
| #101 | AISPINE-245 — add a reusable Sonar remediation workflow | Sonali Bharti |

**TLDR**

Dep-brain expands beyond Git-centric feature work: monolith and Perforce components become supported implementation targets, Perl practices enter the managed library, and reusable Sonar, DR, and token-usage workflows mature. Jira association remains important without forcing keys into every ticket title.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=981808903

