# AI Spine History — Chapter 21: Secure Connections and Dependency-Aware Planning

The framework had already hardened how it synchronized and audited work, but one important trust boundary still sat outside that model: the connection between an agent and Atlassian. At the same time, “spec drift” was proving too narrow a description for what teams actually encountered. A changed baseline could be the symptom, but the real problem was usually a dependency decision spanning upstream providers, downstream consumers, and a change already in flight. This chapter tightens both boundaries: secrets stop living in the workspace, and dependency reconciliation becomes a first-class planning activity.

Atlassian credentials leave the repository
------------------------------------------

The setup flow removes the checked-in MCP configuration file and replaces it with explicit, platform-aware connection guidance. Teams can choose a remote or local Atlassian MCP route, but either route must keep credentials outside committed workspace files. macOS guidance uses Keychain-backed retrieval; other environments get equivalent protected PAT-storage guidance; Docker is recommended where isolation helps prevent tokens from appearing in local process logs.

The sync workflow also gains a migration rule for existing Spines. If an older workspace still carries the retired MCP file, sync removes it and directs the user toward the new setup path. This makes the security fix durable: it applies not only to newly bootstrapped repositories, but to the installed base.

Canonical governance gets clearer
---------------------------------

Several adjacent changes remove ambiguity about which files dep-brain owns. Shared standards stop being copied by sync in a way that could produce two competing canonical versions. Contribution pre-flight becomes a standalone checkpoint that every contribution route must pass, and tool-specific skill wrappers settle under the common agents boundary. Commercialization artifacts are kept out of downstream Spine workspaces, narrowing synchronization to governance that product teams actually need.

Spec drift becomes dependency resolution
----------------------------------------

The original drift-detection skill compared a working specification with its baseline and reported mismatches. Useful, but incomplete: a change can be internally consistent and still break a consumer, depend on an upstream contract that has moved, or require coordinated sequencing across repositories.

The replacement dependency-resolution workflow expands the question from “did this spec drift?” to “what changed, who depends on it, and what must be reconciled before work continues?” It becomes part of SDD rather than a detached diagnostic. The workflow distinguishes evidence from decisions, routes upstream and downstream cases deliberately, and records the outcome in the change artifacts that implementation will use.

Principles and rules
--------------------

**Credentials belong to protected machine or runtime configuration, never the shared workspace.**

**Security migrations must reach existing repositories, not only future setups.**

**One governance artifact has one canonical owner.** Synchronization must not create a second source of truth.

**Dependency review is a planning responsibility.** Detecting drift is insufficient unless the workflow resolves its impact on providers, consumers, and delivery order.

Why this matters
----------------

These changes make two invisible assumptions explicit. First, adopting a shared AI workflow must not require teams to accept weaker secret handling. Second, a specification is not ready merely because its own files agree with each other. In a portfolio of connected products and services, readiness includes the contracts around it.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #67 | Feature/AISPINE-177 — contribution and workspace-boundary cleanup | Hunter Johnstone |
| #68 | Feature/AISPINE-171 — canonical governance and sync cleanup | Hunter Johnstone |
| #69 | AISPINE-55 — secure Atlassian MCP configuration | Hunter Johnstone |
| #70 | AISPINE-180 — dependency/spec baseline resolution | Kalaiarasan Sivaprakasam |

**TLDR**

Atlassian credentials move out of committed workspace configuration, with a migration path for existing Spines. In parallel, the narrow spec-drift check becomes a full dependency-resolution workflow that examines providers, consumers, and sequencing before implementation.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=981808899

