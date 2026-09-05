# AI Spine History — Chapter 22: The Brain Learns to Operate Itself

Once teams were using the framework every day, its next problems were operational rather than architectural. People needed to see what the system was doing, correct mistakes without fighting the workflow, and review automated output without losing attribution. Dep-brain also needed to follow the same governed planning process it prescribed to everyone else. This chapter turns those needs into visible feedback loops and makes the Brain a consumer of its own rules.

Small interactions become safer
-------------------------------

The feedback workflow now shows the proposed Jira issue before creating it. A user can inspect and correct the summary and description while the action is still reversible, rather than discovering a malformed ticket after it has entered the backlog.

The Jira-build workflow gains an explicit path for correcting existing tickets. The goal is not only to create well-formed work, but to repair title, hierarchy, scope, or acceptance-criteria drift discovered later without treating the ticket as immutable.

Repository rules also enter the workflow at the right moment. Before committing, the framework warns when a protected merge process requires a Jira key, but scopes that warning to repositories where the rule actually applies. The framework stops turning a local convention into universal ceremony.

Status becomes part of the experience
-------------------------------------

A dedicated status-line skill gives users a lightweight view of current context while they work. The main workflow can offer it during setup, making branch, model, and session state visible without requiring repeated diagnostic commands.

Health reporting grows in two directions. Workspace health begins counting registered-location drift as a cleanliness issue, so a repository in the wrong Bitbucket project is no longer treated as healthy merely because its files are current. A new skills-health report inspects the managed skill library itself, checking discoverability, wrappers, structure, and consistency. The framework can now report on whether its operating system is intact, not only whether downstream repositories have synchronized it.

Review findings become attributable
-----------------------------------

Code-review findings move from a generic PR summary into inline comments attached to the relevant code. Each finding is tagged with the skill that produced it, preserving both location and provenance. That makes automated review easier to act on and easier to evaluate: a developer can see exactly which line is affected and which review lens raised the concern.

Dep-brain adopts its own workflow
---------------------------------

The contribution process gives dep-brain a main branch and a self-hosted SDD planning path. Planning artifacts for changes to the framework now have an explicit home, while shared standards retain the map of where different categories of change belong. Edge cases such as a clean feature branch or an already-open PR are handled during contribution pre-flight rather than surfacing as confusing failures later.

Principles and rules
--------------------

**Preview consequential writes while they are still reversible.**

**Operational status should be visible without interrupting the work.**

**Health includes the framework’s skills and registry placement, not only synchronized files.**

**Automated review must preserve location and provenance.**

**The Brain follows the governance it asks other teams to follow.**

Why this matters
----------------

This is the point where dep-brain stops behaving like a collection of instructions and starts behaving like an operated product. It exposes state, provides correction paths, checks its own components, and submits its own changes through the workflow it governs. Those feedback loops are what let adoption scale without forcing a central maintainer to diagnose every confusing interaction.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #71 | AISPINE-189 — correct existing Jira tickets | Bhavya Shah |
| #72 | Count repository-location drift in health | Hunter Johnstone |
| #75 | Fix dep-brain-sync invocation | Bhavya Shah |
| #76 | Preview feedback before Jira creation | Bhavya Shah |
| #78 | Add dep-statusline | Bhavya Shah |
| #79 | Warn for Jira-key-on-merge repositories | Hunter Johnstone |
| #80 | Add skills health reporting | Hunter Johnstone |
| #83 | Post attributable inline review findings | Bhavya Shah |
| #88 | Give dep-brain a self-hosted SDD planning path | Hunter Johnstone |

**TLDR**

The framework adds previews, correction paths, a richer status line, skill-library health reporting, and attributable inline review comments. Most importantly, dep-brain begins governing its own changes through the same SDD model it distributes to other teams.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=981808900

