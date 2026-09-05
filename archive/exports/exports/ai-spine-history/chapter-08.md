# AI Spine History — Chapter 8: The Six-Step Model and Connection Cascade

By this point the framework had a working shape — a schema-driven workflow, a discovery phase, a Jira hierarchy that matched reality. What it didn't have was a settled name for any of it, a single place that owned how the agent talks to Atlassian, or a way for the growing list of workspace-level documents to stay coherent as they multiplied. This chapter is where the naming, the connection logic, and the workspace's living documentation all get straightened out at once.

Naming the schemas after what they actually are
-----------------------------------------------

The three OpenSpec schemas that drive every feature, enhancement, and bug fix through the framework had been called `dep-brain`, `dep-brain-light`, and `dep-brain-fix` — names that described where they came from, not what they were for. **They're renamed to `sdd`, `sdd-enhancement`, and `sdd-fix`.** The change touches everything that names a schema: the `dep-sdd` skill's schema-selection table, the `/go` and `/setup` command flows, the governance file layout diagrams in the README, and every template path reference. It's a rename with real teeth — every place that told an agent or a person which schema governs a piece of work now says so in terms of the six-step model itself, not the tool's own name for it.

That six-step model — Assessment, Proposal, Specs + Design, Implementation, Quality & Testing, Close-out — is the spine the rename is organized around. Each step has an owner (Engineer, PM/UX, or a shared Engineer/QA pairing) and a defined deliverable, and the schema selection, the overlay-skill activation table, and the Jira ticket-type mapping all key off it consistently now that the schema names no longer imply a hierarchy of "full" versus "lite" versus "fix" tooling — they're peers describing three different-sized passes through the same six steps.

A single connection point for external integrations
---------------------------------------------------

Every skill and command that had previously implemented its own ad hoc logic for talking to Jira or Bitbucket now defers to **one shared client module**. It exposes a small set of operations — checking whether a repo exists, listing repos in a project, fetching a raw file, checking or fetching a Jira issue — through both a direct API and a CLI, with clear exit codes for found/not-found/unknown. The module's own header explains why it exists as a separate layer at all: certain runtime concepts are available to the LLM inside command/skill files but not to scripts running outside a conversation. Scripts can't reach into an agent's live session context, so anything that runs outside a conversation — CI, health checks, `/setup` — needs its own path to external systems that doesn't depend on an LLM being present.

The fallback cascade, written down as two layers
------------------------------------------------

That split becomes a documented "two-layer connection cascade," and **it's explicit that the layer in play is determined by where code is executing, not by preference:**

* **Layer 1 — LLM-driven commands** (skill and command files): try the relevant integration first; if it's unavailable or the call fails, fall back to the shared client as a subprocess. One integration (Confluence) has no script fallback at all — if it isn't available, the agent produces a manual template instead.
* **Layer 2 — script-driven operations** (the shared client itself, whether invoked directly or from CI): each integration tries an environment-variable token, then stored credentials, then falls all the way back to a lower-level protocol call as a last resort for confirming something exists.

The rule that ties the two layers together is ownership: the shared client owns all of Layer 2, and nothing else is allowed to inline its own auth logic — other scripts import from it or shell out to it. And because credentials are involved, there's a hard safety line: credential lookup output is consumed directly as an HTTP header inside the process and never printed, and the standard explicitly warns against ever running a credential-fill command directly through an agent's shell tool, since that would put a live token into the one place — tool output — that the model can see and might echo back.

One prompt instead of two
-------------------------

`/setup`'s workspace-configuration step used to ask for product name, Jira keys, and a project key as three separate conversational questions, then confirm them, without ever checking whether there was already a matching zone or an existing repo. **It's rebuilt as a single connected lookup:** an org-lookup query for all of a user's team options, cross-referenced against a product map to build one unified list of candidate product workspaces (grouping products that share a slug as a suite, flagging zones with no key or no product list), followed by a repo-existence check against each candidate slug using the same two-layer cascade described above. All of it — the zone, the product, the keys, the repo status — is shown to the user in a single message, closed with one question: which workspace are they setting up. Where the old flow asked three separate questions and then confirmed, the new one front-loads everything the framework can already infer and only asks the user to pick and correct, not to supply from scratch.

Consolidating the living docs
-----------------------------

Alongside the schema rename, the workspace's standing documentation gets consolidated into a defined singleton set: a product doc, an architecture doc, a metrics doc, and a progress file, templated centrally and seeded into each team's workspace at setup time. The architecture doc replaces older sprawl as the place that owns "system design, component relationships" as a living, continuously-updated record — distinct from the point-in-time design doc written per feature. `/go` gains a migration step for these four files: templates are treated as the authoritative structure, working copies as team content, and any heading present upstream but missing locally gets appended (never overwritten) after a confirmation prompt. A companion rollup capability pulls all four documents from every downstream workspace into the central framework for centralized visibility, and a new health-check pass flags any product folder missing one of the four as a compliance gap.

Principles & rules
------------------

**Auth method choice is not a preference, it's an execution-context fact.** The two-layer cascade is explicit that the layer is determined by execution context, not by user choice — an LLM session always prefers the live integration and falls back to the script; a script (including CI) never has that live context available and goes straight to token/credential fallback.

**Nothing owns external-system auth except one module.** The standard states it directly: don't inline auth logic in other scripts — import from or call the shared client. Every other script and skill that needs Jira or Bitbucket access routes through this one place.

**Credentials never touch tool output.** Credential-fill results are held in process memory and used only as an HTTP header; the standard calls out that running a credential-fill command directly via an agent's shell tool is unsafe because it would surface the token in visible output.

**Schema names describe the work, not the tool.** `sdd`, `sdd-enhancement`, and `sdd-fix` replace the older, tool-named schemas everywhere — skill tables, command flows, README diagrams, and every template path. The routing logic underneath is unchanged; only the vocabulary is corrected.

**Living docs are additive-only during sync.** The `/go` migration step for the four living documents never overwrites a team's existing content — it diffs headings (or top-level keys, for the data file) against the current template and appends only what's missing, always with a confirmation prompt naming the specific section before anything is added.

**`/setup` shows its work before asking.** The unified product view is a hard requirement, not a style suggestion: every candidate workspace, its keys, and its repo-existence status are surfaced together before the user is asked to choose.

Why this matters
----------------

None of these changes add a new capability a user would immediately notice — no new step, no new artifact type. What they do is remove the seams that had been quietly accumulating: three schema names that no longer matched the six-step model they governed, connection logic reinvented slightly differently in every skill that needed it, a `/setup` flow that asked for information the framework already had access to, and living documentation that had grown organically enough that different teams' workspaces could drift out of structural sync with each other. Fixing the seams now, before more skills and more teams are built on top of them, is what keeps the framework's connection layer and naming consistent as it scales rather than accumulating small inconsistencies that get expensive to unwind later.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #12 | Feature/AISPINE-17 | Hunter Johnstone |

**TLDR**

Three schema names (dep-brain, dep-brain-light, dep-brain-fix) that no longer matched what they actually did get renamed to sdd, sdd-enhancement, and sdd-fix — peers describing three different-sized passes through the same six-step model, not a hierarchy of "full" vs "lite" tooling.

Every script that used to hand-roll its own Jira/Bitbucket connection logic now defers to one shared client, with a clearly documented two-layer fallback (try the live integration, then fall back to a script) so credentials never leak into visible output.

The setup flow also stops asking three separate questions it could have answered itself, and four workspace-level docs (product, architecture, metrics, progress) get consolidated into one consistent, template-driven set.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437375

