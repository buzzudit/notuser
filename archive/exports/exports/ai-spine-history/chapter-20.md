# AI Spine History — Chapter 20: Security Hardening and Efficiency Polish

By this point in the framework's life, most of the big structural gaps are closed: discovery has a home, review has independent reviewers, the Jira hierarchy matches how the organization actually rolls up work, capabilities have a durable place to live. What's left is the kind of work that only shows up once a system is mature — tightening the sync mechanics so they can't corrupt a workspace, right-sizing a template that had grown too heavy for smaller specs, writing down a working model so agents stop burning tokens re-deriving it every session, and closing a real security hole in how the framework handles free-text input. This is the framework doing maintenance on itself.

The sync guard: main is the only source of truth
------------------------------------------------

The sync routine that pulls framework updates into a workspace at the start of every main workflow session previously assumed it was always safe to run wherever the session happened to be. That assumption breaks the moment a team works on feature branches, which is most of the time. **The fix adds an explicit branch guard as the very first step, before anything else runs:** sync must always run on main; main is the authoritative sync target, and all other branches follow by merging from main when they want framework updates.

The guard now branches three ways. If the session is already on main, sync proceeds normally. If it's on another branch with a clean working tree, the skill records the branch name, checks out main, runs the full sync, and switches back — then notifies the user once that sync ran on main and is pushed, and to merge main into the current branch when they want the latest updates. If the other branch has uncommitted changes, sync is skipped entirely for the session, with a warning that switching to main would carry those changes along, and the workflow continues on the current branch without syncing.

This closes a real hazard: a workspace could previously pick up framework updates on a scratch or feature branch, diverge from what main actually had, and never reconcile cleanly. Anchoring sync to main and treating every other branch as a follower makes the sync history predictable regardless of where a session happens to start.

Sync state stops clobbering itself
----------------------------------

A second, smaller but consequential fix landed alongside the branch guard: **the sync marker file previously got overwritten wholesale every time sync wrote to it** — its own two fields were printed fresh, discarding anything else that had been added to the file. That mattered because the main workflow had started writing its own fields into the same file, to avoid re-scanning for migration candidates every session and to avoid re-checking living-doc placeholders once they'd already been filled in. Every sync was quietly erasing that state.

The fix rewrites the marker additively, preserving any existing fields and only replacing the two that sync itself owns.

Right-sizing the capability spec: the mini-spine
------------------------------------------------

The product document and a new capability document template both get reworked around a single idea: not every capability needs its own repo, but every capability should have a spec that could stand on its own if it ever did. The template's own description of this is direct — **it's a "mini-spine":** at the suite level the document is self-contained (product context, architecture, metrics, and requirements all live there), and if the capability ever graduates to its own dep-spine repo, its sections map directly onto top-level artifacts — with the same mapping working in reverse if a subproduct repo ever collapses back into a suite-level spec.

The new capability template carries six sections — Overview, Customers and Users, Product Boundaries, Architecture, Metrics, and Requirements — with the Requirements section explicitly protected by an embedded comment: requirements are merged in only by the sync process at feature close, and must never be hand-edited directly.

The product document sheds weight in the same move: an old identifiers table and a relationships section are removed — that bookkeeping moves to the team configuration file or is simply retired. In exchange, the product document gains real structure: Problem and Vision are promoted to top-level headings, a new Strategic Constraints section captures non-negotiable boundaries that apply to all work in this product and cannot be traded away in proposals, a new Product Boundaries section exists to push back on out-of-scope work during discovery and proposal, and a new Capability Map table replaces the old free-form user detail with a routing index — one row per capability spec, with status and a one-line scope, so an agent knows which specs to load before doing real work.

The compliance tooling is updated in lockstep: the product document's required-sections list grows, and the compliance skill gains a full procedure for repairing capability specs — deriving Overview from existing requirements, pulling user types from Requirements or the product document, deriving Architecture from the relevant Components table entries, pulling metrics or marking them as pending, and asking the user only for product boundaries. The one rule carried through unchanged: if a spec already has structured requirements, they're preserved exactly, and every other section is added around them.

A documented Spine and service-repo working model
-------------------------------------------------

As products grow enough service repos to need their own AI-facing documentation, the framework had no written answer for what belongs where — leading to duplicated or drifting context between the Spine and the code repos it governs. The standards document now describes the model explicitly: it applies when service repos carry their own AI artifacts; when they don't, the Spine handles everything and service repos stay code-only.

Where both exist, the split is now written down rather than reconstructed by trial and error: product context, capability specs, and feature artifacts live in the Spine; product-level architecture, metrics, and coding standards live in the Spine; service internals, service-specific coding conventions, security posture, and architectural decision records live in the service repo; implementation code lives in the service repo's source tree. Precedence is stated just as plainly — Spine skills and governance take precedence over service-repo-level agent instructions, service repos shouldn't ship their own skill folders unless the skill is genuinely not managed by any Spine, and the Spine's security overlay takes precedence over a service repo's local security documentation when both are loaded.

The main workflow command itself is tuned to spend fewer tokens confirming things it already knows. Workspace inspection is now scoped to file existence and a handful of key fields rather than full file contents — deferring full reads until a route is actually chosen. The one-time scans are now gated behind markers so they only run once per workspace instead of once per session, re-triggering only when something relevant actually changes. And the status check is skipped outright when there's nothing in-flight for it to report on.

The log-injection fix
---------------------

The one true security finding in this arc is narrow and concrete. The script that records step completions asks a free-text question at the end of a passing gate check — "who reviewed this?" — and writes the answer straight into a permanent audit log. **Because that reviewer string was taken verbatim from user input, it could contain embedded newlines or control characters**, letting a malformed answer inject fabricated lines into the audit trail — a classic log-injection vector, made worse by the fact that this particular log is the framework's record of who signed off on what.

The fix is a single sanitization step inserted immediately after the input is read, before it's used anywhere: every control character is stripped from the reviewer name before that value is ever written to the audit log. The surrounding fallback logic — defaulting to the session user or "self-reviewed" when the answer is blank — is untouched; the fix closes only the gap between "text a human typed" and "text that ends up verbatim in a permanent record."

Principles and rules
--------------------

**Sync only ever runs on main, never on whatever branch a session happens to be on.** Every other branch is a follower that catches up by merging main — sync switches to main, does its work, and switches back, or skips entirely if the tree is dirty.

**Sync state is additive, not overwritten.** Any field another skill writes into the sync marker survives a sync; only the fields sync itself owns are replaced.

**A capability spec must be self-contained enough to become its own repo.** The mini-spine's six sections exist so that "graduating" a capability to its own Spine, or collapsing a subproduct repo back into a suite-level spec, is a mechanical section remap rather than a rewrite.

**Requirements are never hand-edited in the living spec.** They enter only through the SDD delta-spec pipeline at feature close — every other section of a capability spec can be filled in by compliance tooling, but Requirements is explicitly locked to that one path.

**The Spine governs; service repos execute.** When both carry AI artifacts, Spine skills, standards, and the security overlay take precedence over anything a service repo defines locally.

**Expensive inspection is deferred until a route is chosen.** Cheap existence/field checks happen first; full artifact reads and one-time scans only run when they're actually needed, and one-time checks are gated so they don't repeat every session.

**Any free-text answer that gets written to a persistent log must be sanitized first.** Control characters and newlines are stripped from user input before it touches an audit trail — at the point of capture, not somewhere downstream where it might be forgotten.

Why this matters
----------------

None of these changes add a new capability a user would point to and call a feature. That's the point: this is what it looks like when a framework has already built the things it needed to build and starts paying down the risk and friction that accumulated along the way. A sync routine that can silently corrupt state or run against the wrong branch is a bigger long-term liability than a missing feature, a template that's grown too heavy gets trimmed before teams quietly stop maintaining it, a documented working model replaces a re-derived one, and a log-injection bug — however narrow — is exactly the class of issue a security-conscious organization expects a mature internal framework to have already found and fixed by the time other teams are depending on it.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #63 | Feature/AISPINE-174 | Hunter Johnstone |
| #64 | Feature/AISPINE-170 | Hunter Johnstone |
| #65 | fix(dep-sdd): sanitize reviewer input to prevent log injection (AISPINE-172) | Hunter Johnstone |

**TLDR**

Pure maintenance chapter: the sync routine now refuses to run anywhere except main (other branches just follow by merging), and its state file stops accidentally wiping out fields other parts of the framework had written into it.

A capability spec template gets right-sized into a "mini-spine" that can graduate into its own repo cleanly, a written model finally documents what belongs in the Spine vs. a service repo, and a real security bug gets fixed — free-text reviewer input was going straight into a permanent audit log unsanitized, opening a log-injection risk.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437458

