# AI Spine History — Chapter 15: Teams Start Contributing Their Own Data

For most of its life, the DEP organizational registry — the file that lists every zone, its leader, and every product underneath it — had one real author. **This chapter is where that stops being true.** In a short window, product teams from across the org start opening their own corrections and additions directly: a spine repo slug gets fixed, guide copy gets rebalanced to reflect how work actually happens, a whole subzone of API products gets reorganized by the team that owns it, a misclassified product gets reclassified, and a payer product gets renamed. None of these changes originate from the framework's maintainer. That's the milestone — not any single edit, but the fact that the registry is now being edited by the people it describes.

The registry becomes self-service
---------------------------------

The clearest signal is the API Platform zone rewrite. **A large block of registry entries under "API Solutions" gets restructured by the team that actually runs those products**: the suite slug shortens, several enabling platforms are renamed and re-slugged to match current naming, a handful of entries that no longer reflect reality are removed, and new ones take their place. A related connectivity-platform slug in the Integration Platform zone is trimmed the same way. This is not a typo fix — it's a team rewriting its own section of the org chart to match what it actually ships.

Smaller, more surgical corrections follow the same pattern. A spine repo slug for Health Plan Data Exchange changes to something shorter and clearer. The Open Ecosystem zone gets two structural fixes in one pass: a product is reclassified from Product Suite to Customer Product — a correction to how the product is actually organized, not just named — and another product moves from where it was previously listed under the wrong subzone into its correct home. A payer product gets a straightforward rename to better reflect its real audience, with its slug updated to match.

Each of these is a small diff on its own. Together they establish something the framework didn't have before: a working feedback loop where the people closest to a product are the ones keeping its registry entry accurate, rather than routing corrections through a single owner.

The guide learns to describe collaboration, not handoffs
--------------------------------------------------------

Alongside the data corrections, the guide documentation and root agent-guidance file get a copy pass that softens language which had implied strict handoffs between roles. The old phrasing described Engineers reviewing PM work "for feasibility" and PMs reviewing Engineering work at fixed checkpoints — a relay model. **The new copy replaces this with language about roles staying involved across steps**: Engineers are now described as available for feasibility input, constraints, or prototype support in Discovery, and PM/UX involvement in Planning and Implementation is described in terms of tradeoffs and whether the plan still matches the intended user value, rather than a one-time review gate. The step-defaults table picks up the same shift, changing narrow single-purpose review labels to fuller descriptions of ongoing involvement. The README's step table changes its own column header from "Who reviews / is involved" to "Who is involved," and marks Planning and Implementation as having PM and UX involved rather than Engineer-only. Per-artifact descriptions in the workspace layout section shift too — the proposal document goes from a "PM / UX artifact" to a "PM / UX-led artifact." The distinction is small in wording but real in intent: work has a lead, not an owner who works in isolation.

Jira ticket creation learns to read the room
--------------------------------------------

The other substantial change in this window is unrelated to the registry but shares its spirit of making the framework adapt to how a given team is actually structured. The Jira-build skill previously assumed every feature tracked in the status file used a Feature-level Jira key, with a fixed Epic-per-phase, Story-per-PR hierarchy underneath it. That assumption didn't hold for every team — some track work starting at the Epic or Story level, or even file straight to a Bug. **The skill now opens with a mandatory detection step:** read the Jira field in the status file, look up the issue, and route all subsequent ticket creation based on what type comes back — Feature, Epic, Story, or Bug.

Each key type gets its own path. A Feature key behaves as before: one Epic per phase, Stories under each Epic. An Epic key skips Epic creation entirely and creates Stories directly under the existing Epic. A Story key skips both Epic and Story creation — the Story itself is the unit of work, and the skill either attaches a single PR directly to it or, if the tasks document shows multiple component blocks, creates Sub-tasks under it. A Bug key follows the same single-PR pattern as a Story.

The skill also adds a guardrail for a case that doesn't fit any of the lighter-weight key types: a phased rollout (alpha/beta/GA) genuinely needs a Feature key, because each phase needs its own Epic, and Epics can't be children of another Epic, Story, or Bug. If the proposal describes multiple rollout phases but the tracked key is an Epic, Story, or Bug, the skill is required to stop and surface the mismatch rather than silently improvising a workaround, offering the user a choice: simplify the rollout to a single delivery, or upgrade to a Feature key.

A matching read on adoption
---------------------------

The health-scan command gains a companion mode that reads in the same direction as the registry changes: instead of only reporting raw adoption across all of DEP, it can now be scoped to a single zone, cross-referencing that zone's product list against the Bitbucket projects that actually belong to it to surface registry coverage and gaps — which products in a zone have a dep-spine repo and which don't. It's a small but telling addition: once teams are expected to keep their own zone accurate, the framework needs a way to check whether the entries and the reality still line up.

Why this matters
----------------

Every earlier chapter in this history describes work initiated and reviewed by the framework's original author. This is the first chapter where that's no longer the whole story: the registry that describes the organization is now being corrected by the organization itself, and the guide copy that explains how roles collaborate is being rewritten to better match how teams actually work rather than how the framework first imagined they would. Neither of these changes would have been possible to write from the center — a slug fix, a reclassification, a product rename to reflect its real audience — these are corrections only the owning team could reasonably make. Combined with the Jira-build skill learning to defer to whatever key type a team already uses rather than forcing a single hierarchy, the pattern across this window is the same: the framework is loosening its grip on decisions that belong to individual teams, while keeping the guardrails — the rollout/key-type mismatch check, the coverage report — that catch the cases where loosening that grip would cause real damage.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #28 | ISCAPS-10176 - Changed slug for HPDE spine repo | Balakumaran Marimuthu |
| #29 | Feature/AISPINE-112 clean up copy | Matthew Hendrix |
| #30 | Feature/AISPINE-118 | Hunter Johnstone |
| #32 | Feature/AISPINE-109 | Hunter Johnstone |
| #33 | AISPINE-121: Update Open Ecosystem Products in zones.yaml | Kayleigh DeMello |
| #36 | PAYERPND-143 Changing the name of the product | Dinesh Ayyamani |

**TLDR**

For the first time, product teams — not the framework's original maintainer — start directly editing the org registry themselves: fixing their own slugs, reorganizing their own zone's products, renaming things to match reality. It's a shift from centrally-maintained to self-service.

Alongside that, the guide docs stop describing PM/Engineering as a relay of handoffs and start describing ongoing involvement, and the Jira-ticket-creation skill learns to detect and adapt to whatever ticket hierarchy a team already uses (Feature, Epic, Story, or Bug) instead of forcing one fixed structure on everyone.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437394

