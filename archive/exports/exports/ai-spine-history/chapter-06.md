# AI Spine History — Chapter 6: Discovery Gets a Home, and Every PR Becomes a Story

Up to this point, the framework had a clear path for turning a defined feature into shipped code, but no formal answer for the messier question that comes before that: how do you explore a problem before you've committed to a solution? **This chapter is where that gap gets closed**, and where the framework's Jira integration gets corrected to match how the rest of athenahealth actually tracks work.

A real discovery phase
----------------------

The framework introduces `discovery.md`, a template built around parallel Business, Usability, and Feasibility tracks that converge into a single synthesis. Instead of jumping straight from an idea to a proposal, teams now have a defined space to explore the problem, run parallel investigation, and land on a shared point of view before anything gets formally proposed.

That exploration needed somewhere to live outside of throwaway notes, so the discovery flow adds a lightweight prototype lifecycle: spin something up, deploy it for review, run test sessions, and hand off the findings cleanly into the proposal stage once it's served its purpose. Early on this leaned on Netlify for hosting quick prototypes — later chapters swap this out for an internal hosting option, but the shape of the workflow (build, deploy, test, hand off) is set here.

To keep discovery from sprawling into an undefined mess, the framework also documents a branch taxonomy and a governing principle for it — a clear statement of which branches exist for which purpose, so exploratory work doesn't get tangled up with feature branches or accidentally treated as production-track.

Principles & rules
------------------

**When to run discovery.** The skill is explicit that discovery isn't mandatory ceremony — it only runs when at least one of these is true: the problem itself is unvalidated, the solution direction is genuinely uncertain, end users are directly affected and no recent usability research exists, or there's a feasibility question code review alone can't answer. Well-understood enhancements and bug fixes skip it entirely and go straight to the proposal step.

**Branch isolation.** Nothing except a stub `STATUS.md` touches `main` during discovery. All real work — `discovery.md`, any prototype code — lives on a `discovery/[slug]` branch. This is a hard boundary, not a convention teams are free to bend: main only ever sees a pointer saying discovery is in progress and where to find it.

**Three tracks, each with an exit gate.** Business, Usability, and Feasibility each have their own "track complete" checklist before synthesis can happen — for example, the Business track requires a drafted problem statement with no solution language, an evidence base where at least one source has real findings (not all blank), and every open business question either resolved or explicitly accepted as an assumption. A track can be legitimately skipped, but only by writing down why (e.g., "Feasibility track not run — reading the code was sufficient").

**Prototypes need a falsifiable hypothesis before they need code.** The Feasibility track's rule is blunt: "If you cannot write this sentence, do not build a prototype" — referring to the required one-line hypothesis format, "We believe [assumption]. We will know we are right if [observable outcome]." Prototypes are scoped to the minimum needed to test that assumption; production-quality error handling, auth, or persistence are explicitly out of scope unless they're the thing being tested.

**A defined go/no-go, not a vibe.** Discovery ends in one of four synthesis outcomes: PROCEED, CONDITIONAL PROCEED, PIVOT, or STOP. On PROCEED, findings are extracted into `proposal.md` and the discovery branch is closed and preserved; on STOP, the Jira Feature transitions to Won't Do; on PIVOT, it stays open with a comment describing the new direction. Every finding that carries forward has a required destination and format — a validated UI flow must become a `proposal.md` user story phrased as "As a [persona], I can [action] so that [outcome]," an observed edge case must become an acceptance criterion phrased as "WHEN [condition] THEN [system behaviour]." Findings don't just get summarized; they get translated into the exact shape the next artifact expects.

**Jira tracks the same lifecycle.** The Jira Feature is created before any investigation begins, set to status Research with target release TBD — so it's visible in the backlog as "being explored," not as committed work. It only moves to the team's normal backlog status once discovery actually reaches PROCEED.

**Task becomes Story, and it's not just a rename.** The issue hierarchy is corrected from `Feature → Epic → Story → Task` (one Task per pull request) to `Feature → Epic → Story` (one Story per pull request) — collapsing a layer, not renaming one. Every reference across `dep-jira-standards`, `dep-atlassian-integration`, and the `/go` command is updated in lockstep so the rule is enforced consistently: "Stories are created at the start of each phase (one per pull request)."

**Fix Version stops being silently blank.** When creating an Epic, the framework now must ask: "What fix version should I use for this Epic? (Leave blank to use TBD)." If there's no answer, it explicitly sets `TBD` rather than leaving the field empty — and the answer is cached in `design.md` so the question is only asked once per feature, not once per Epic.

Why this matters
----------------

Together, these changes mark the point where the framework stops being only a "build the feature" tool and starts accounting for the earlier, fuzzier part of product work — while also making sure the paper trail it leaves in Jira actually matches how the organization reports on and rolls up that work. Discovery gives teams a legitimate place to explore before committing, with real exit criteria instead of an open-ended vibe; the Story/Fix Version fixes make sure that once they do commit, the tracking reflects reality.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #14 | Feature/AISPINE-52 discovery step | Hunter Johnstone |
| #9 | fix(dep-jira-standards,dep-atlassian-integration): change per-PR issue type from Task to Story | Michael Frankfort |
| #10 | feat(dep-atlassian-integration): prompt for Epic fix version, default to TBD | Michael Frankfort |

**TLDR**

A formal discovery phase gets added before a feature is committed to: parallel investigation tracks (business, usability, feasibility) that end in a real go/no-go decision, plus a lightweight way to build and test a prototype before writing requirements.

Separately, the Jira ticket hierarchy gets fixed — what used to be Feature → Epic → Story → Task collapses to Feature → Epic → Story, one Story per pull request, matching how the org actually tracks delivery.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437366

