# AI Spine History — Chapter 14: The Org Chart Takes Shape

By this point in the framework's life, the org product registry — the file mapping every DEP product and subproduct to a slug, a zone, and a leader — had been living mostly on inherited structure: whichever grouping and naming happened to be true when the file was first drafted. **This chapter is where that registry gets its first serious cleanup pass**, catching up to how the organization actually splits its products, its teams, and its repos. Alongside it, the discovery flow gets a smaller but equally overdue fix: the confusing requirement that discovery work needed a Jira Feature before it could even start.

Individualizing the shared slugs
--------------------------------

For a long stretch, the registry treated many subproducts as interchangeable — a whole product suite's contents list would share one parent slug because no one had gotten around to giving each subproduct its own. Patient Match, Patient Search, the Patient Curation tool, and half a dozen siblings under Patient Directory all pointed at the same slug as their parent. The same was true across Integration Platform, where nearly every product under "Interfaces Platform" resolved to a single generic slug, and across Analytics Platform, where several distinct products all collapsed into one shared identifier.

**The cleanup wave gives each of these its own slug.** The AI Spine product itself picks up the same treatment — two MCP server products that had been sharing one slug get distinct identifiers. Interoperability Networks products are renamed alongside their new individual slugs, spelling out abbreviations that had been sitting in the registry unexplained (ADT becomes "Admission, Discharge, and Transfer," MoC becomes "Moments of Care," and so on).

A companion fix lands in the Data Services / Analytics area a little later: several of the newly-individualized slugs turn out not to match the Bitbucket repos actually in use, and get reconciled to the repo names already live in Bitbucket — a reminder that a registry cleanup isn't finished the moment it's internally consistent; it also has to match the outside world it's describing.

Filling in the missing map
--------------------------

Beyond de-duplicating shared slugs, this wave adds slugs to dozens of subproducts that had none at all — entries that were listed by name but had no slug field, meaning tooling reading the registry had no way to resolve them to a repo. Patient Directory's six subproducts, Provider Directory's three, athenaConnect's eight, and API Solutions' eleven subproducts all go from name-only entries to fully resolvable registry rows in one pass.

Restructuring Integration Platform
----------------------------------

Integration Platform's product list had organized itself loosely around two subzones that no longer reflected how the zone's teams actually worked. **The cleanup splits the old grouping into four real subzones** — Interfaces Core Products, Interfaces Infrastructure, Message Management Services, and Quality Management — each given its own leader in the registry, with named leads underneath the zone's overall leader.

Restructuring Data and Analytics Platform
-----------------------------------------

The bigger structural move folds what had been two separate zones — Analytics Platform and Data Services — into a single Data and Analytics Platform zone under a new zone leader, with the two originals surviving underneath as subzones with their original leaders intact. Within it, product suites get reorganized too — several data-pipeline products are pulled out into their own "External Data Pipelines" suite, and a data-enablement suite is promoted from a nested entry to a top-level product suite in its own right.

New zones for Developer Console and GraphQL
-------------------------------------------

Developer Console and GraphQL — both of which existed only as unlabeled entries buried in larger products — get pulled out and named as their own product lines with dedicated slugs, reflecting that these are no longer minor internal tools riding along with a parent product, but products with their own roadmaps and their own review needs.

Removing the confusing exploration lane from /go
------------------------------------------------

Separately from the registry work, the discovery workflow gets a targeted fix aimed at onboarding clarity. The old flow required creating (or confirming) a Jira Feature — set to status Research, target release TBD — as the very first step of starting discovery, before any actual investigation had happened. In practice this meant new users hit a Jira-creation prompt before they'd even validated that there was a problem worth exploring, which read as ceremony rather than as something discovery needed.

**The fix makes Jira creation optional during discovery and defers the requirement to the point where it actually matters:** "Optionally create or confirm a Jira Feature — not required until PROCEED." The stub status file written at the start of discovery drops its Jira reference entirely, and only picks the Jira key back up once discovery concludes with PROCEED or CONDITIONAL PROCEED — at which point the Feature is created (or confirmed) with all required fields set, and the key is written back into the status file. If discovery ends in STOP or PIVOT and no Jira Feature was ever created, the framework now explicitly says no Jira action is needed at all, instead of routing to a transition step for a ticket that never existed.

Principles and rules
--------------------

**Jira timing is now explicit, not implicit.** The intake step states it directly: Jira is optional during discovery and required only at PROCEED/proposal. Work type, slug, and platform/context are enough to begin discovery; Jira key and platform confirmation remain non-negotiable before proposal or implementation can proceed.

**Granularity conflicts are a registry health signal, not just clutter.** The rollup workflow used for weekly product-doc auditing now explicitly flags zones where both suite-level and subproduct-level repos exist — turning slug hygiene into something the framework actively watches for, not something that only gets caught by a human noticing.

**Zone Bitbucket projects are no longer trusted as a single source of routing truth.** The per-zone Bitbucket-project field is removed from the registry entirely. Workflows that used to read it now discover repos through org-lookup or explicit flags instead, with the rule stated plainly: don't rely on a zone-level project field, because products may span multiple projects.

**Declining a suggested command doesn't reset the session.** Both the product-facing and brain-only entry points add the same rule for when a user turns down a routed suggestion: preserve their place, don't restart triage or punish the decline, acknowledge the choice, and keep the current workspace summary available.

Why this matters
----------------

A governance framework that routes work by product and zone is only as trustworthy as the registry behind it — if half the products in a suite share one slug, or a zone's routing field silently disagrees with where the repos actually live, every downstream workflow that reads the registry inherits that confusion quietly. This chapter is the point where the registry stops being an approximation and starts being individually addressable: every subproduct gets its own resolvable identity, the zones are redrawn to match how the org's leadership actually splits responsibility, and the tooling that reads the registry is taught to flag its own inconsistencies going forward. The discovery fix follows the same instinct in miniature — discovery shouldn't ask for paperwork before there's anything to file, and a framework that respects that distinction earns more trust from the people using it for the first time.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #22 | Feature/AISPINE-97 | Hunter Johnstone |
| #24 | Feature/AISPINE-100 | Hunter Johnstone |
| #25 | AISPINE-99 — Improve /go onboarding clarity, status trust, and experimentation path | Udit Khandelwal |
| #26 | Feature/AISPINE-107 contribute dep brain context | Hunter Johnstone |
| #27 | fix(zones.yaml): reconcile D and A Platform slugs to match existing Bitbucket repos | Hunter Johnstone |

**TLDR**

The org product registry gets its first big cleanup: dozens of subproducts that had been sharing one generic slug (or had no slug at all) get their own resolvable identity, Integration Platform and Data and Analytics Platform get restructured to match how the org actually works, and Developer Console/GraphQL get pulled out as real product lines.

Separately, discovery stops requiring a Jira ticket before you've even validated there's a problem worth exploring — Jira only becomes required once discovery actually reaches a go decision.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437391

