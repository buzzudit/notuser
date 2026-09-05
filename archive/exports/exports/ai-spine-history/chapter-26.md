# AI Spine History — Chapter 26: OpenSpec Becomes Native—and Searchable

OpenSpec had influenced the framework since its earliest naming and workflow changes, but parts of dep-brain still treated it as an adapted external methodology. Stores, schemas, living specs, and change artifacts used framework-specific arrangements that required translation. This chapter removes that distance. OpenSpec becomes the native layout, and once specifications have a predictable shape, they become searchable across the DEP portfolio.

Reuse before invention
----------------------

The contribution workflow gains an OpenSpec reuse gate. Before introducing another schema, workflow, or artifact convention, contributors must check whether the capability already exists in the upstream methodology or the shared store. The goal is not blind conformity; it is to avoid maintaining a local reinvention when a supported primitive already exists.

OpenSpec workflows and stores are integrated into synchronization and SDD. Dependency workflows learn the new locations, schemas shed duplicated structure, and shared standards document the boundary between canonical OpenSpec behavior and DEP-specific governance.

Native file layout replaces translation
---------------------------------------

DEP specifications move into the native OpenSpec directory and filename layout. Template names, capability paths, adapter behavior, compliance checks, progress parsing, and setup guidance are updated together. Synchronization removes stale archived layouts so old copies cannot masquerade as current specifications.

Living specs follow the same model. The workspace specification template becomes compatible with native OpenSpec tooling while retaining DEP’s protected requirements and governance rules. Compatibility tests guard the boundary so a future sync cannot quietly reintroduce a layout that one side understands and the other does not.

Search becomes a DEP capability
-------------------------------

A new search command indexes product and capability specifications, then expands from local discovery to remote search across registered Spines in Bitbucket. The design deliberately removes a persisted search cache: results come from the current layered sources rather than another long-lived index that can drift.

Search is offered from the main workflow, uses the zone registry to identify scope, and documents the Bitbucket API path needed to query OpenSpec content. Guidance is tightened as the implementation matures so users are told what the command can establish and where source access still constrains the result.

Principles and rules
--------------------

**Check for an existing OpenSpec capability before creating a DEP-specific one.**

**Native compatibility means using the expected layout, not maintaining a translation layer indefinitely.**

**Schema, sync, adapters, compliance, and progress must migrate together.**

**Stale layouts are removed during sync so old artifacts cannot compete with the current model.**

**Search should query current registered sources rather than depend on a second persistent cache.**

Why this matters
----------------

A methodology is only truly adopted when its native tools can understand the resulting workspace. This chapter reduces the maintenance cost of local adaptations and makes specifications portable across the broader OpenSpec ecosystem. Search is the visible payoff: once the portfolio speaks a predictable specification language, dep-brain can help people discover prior capabilities and decisions before they duplicate them.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #102 | AISPINE-249 — integrate and align native OpenSpec workflows | Hunter Johnstone |
| #106 | AISPINE-285 — add DEP specification search | Hunter Johnstone |
| #109 | AISPINE-293 — make living specs natively OpenSpec-compatible | Balakumaran Marimuthu |

**TLDR**

OpenSpec stops being an adapted layer and becomes the native structure for DEP changes and living specifications. Synchronization cleans up the old layouts, contribution begins with a reuse check, and a new search command discovers current specifications across registered Spines without creating another persistent cache.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=981808904

