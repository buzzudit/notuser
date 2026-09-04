# AI Spine History — Chapter 12: Template/Registry Model and Living Docs

By this point in the framework's history, `/rollup` had earned its keep as the command teams ran to get a picture of where a feature stood. But it had a structural problem baked in from the start: it read from snapshots. Someone — or some earlier step in the workflow — had to have written progress data down somewhere before `/rollup` could summarize it, and that "somewhere" was a static file that could drift out of sync with the actual state of the repo the moment work continued after the snapshot was taken. This chapter is where that gets fixed, and where a cluster of related changes turn the framework's tracking artifacts from write-once records into genuinely live documents.

From snapshot to source of truth
--------------------------------

The core change is a rework of `/rollup` so that it reads live data directly instead of relying on a pre-generated snapshot. Previously, getting an accurate rollup meant trusting that whatever process last wrote the snapshot had run recently and had captured the right state. **Now `/rollup` goes straight to the data that reflects current reality**, which means the command's output is only ever as stale as the moment you run it — not as stale as the last time someone remembered to regenerate a snapshot file.

This shift only works, though, if there's a well-defined live document for `/rollup` to point at. That's the second half of this chapter: backlog tracking moves out of the progress file and into a single markdown document. Where progress had previously been tracked in a structured data file that tooling wrote and read but humans rarely opened directly, the backlog now lives in one markdown document that's both machine-readable enough for `/rollup` to consume and human-readable enough for a team to open and understand at a glance. Consolidating backlog state into a single file also removes an entire class of "which file has the real answer" ambiguity that a scattered, multi-file tracking model invites.

Living docs join the main workflow
----------------------------------

A living document is only as useful as its upkeep, and up to now populating these tracking artifacts had been something closer to a manual afterthought — a step a team remembered to run, or didn't, depending on discipline rather than design. **This chapter wires living-document population directly into the main `/go` workflow**, so that keeping the backlog and related tracking documents current stops being a separate chore bolted on after the fact and becomes an intrinsic part of running the framework's primary command. If `/go` is how teams do the work, `/go` is now also how the record of that work stays accurate — the framework no longer depends on someone remembering a second step.

A branch-aware `/rollup`
------------------------

With `/rollup` now reading live state, it also needed to behave differently depending on where that state was being read from. The chapter ships a branch-aware version of the command: **on the main branch, `/rollup` is strictly read-only**, reflecting the fact that main is the converged, shared record and shouldn't be mutated by a reporting command. On working branches, it's cached — recognizing that a feature branch's state changes frequently as work is in progress, and that re-deriving a full rollup from scratch on every invocation would be wasteful when the same branch is likely to be queried again before it merges. This split gives teams a command that's safe to run constantly during active development without either corrupting shared state or paying a full recomputation cost every time.

Quarantining commercialization
------------------------------

Not everything in this chapter is additive. **A commercialization feature gets pulled out of the active codebase and quarantined into a brain-only folder**, explicitly marked for later rework rather than shipped in its current form. This is a deliberate containment move: rather than let a half-formed feature linger in the main tree where it might get half-used or half-trusted, it's set aside in a location that keeps it out of the active workflow while preserving the work for whenever it's picked back up. It's a small housekeeping act, but it's consistent with the chapter's broader theme — being disciplined about what counts as a live, trustworthy part of the framework versus what's provisional and shouldn't be treated as such yet.

Why this matters
----------------

The through-line across all of these changes is a shift in what "current" means inside the framework. A snapshot-based `/rollup` and a write-once progress file are both artifacts of a model where truth is written down periodically and trusted until the next write. A live `/rollup` reading directly from a single backlog document, wired into `/go` so it's kept current automatically, and made branch-aware so it behaves correctly whether you're on main or mid-feature, is a model where truth is derived on demand from whatever the repo actually contains right now. That's a meaningfully more trustworthy foundation for any team relying on the framework's reporting to make real decisions — and quarantining the one feature that wasn't ready to meet that bar is the same instinct applied in the other direction.

---

Appendix: Relevant PRs
----------------------

No PRs — direct commits to master.

**TLDR**

Rollup reporting stops reading from stale snapshot files and starts reading live data directly, so its output is only ever as old as the moment you run it. Backlog tracking moves into a single, human-readable markdown document, and populating it gets wired directly into the main /go workflow instead of being a manual, easily-forgotten step.

Rollup also becomes branch-aware — read-only on main, cached on feature branches — and a half-finished commercialization feature gets quarantined out of the active codebase until it's actually ready.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437386

