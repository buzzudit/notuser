# AI Spine History — Chapter 10: Tool Parity and External Skill Hardening

By this point in the framework's life, the BMAD adapter and the newly absorbed external skill library were both working, but "working" and "consistent" are different bars. This chapter is a hardening pass — no new subsystem gets introduced. Instead, the framework tightens the seams between itself and the tools it has to interoperate with: the BMAD artifact bridge gets corrected where its mappings and orchestration modes didn't quite line up with reality, guidance gets written for the fact that different AI coding tools each see a developer's multi-repo workspace differently, and the external skills absorbed in the previous chapter get a lint-and-conform pass so they read like they were written for this framework rather than imported into it.

The BMAD adapter, corrected
---------------------------

The BMAD adapter's job is to translate between the framework's own artifact model and BMAD's, and to bridge orchestration between the two systems when a team is running BMAD-driven work inside the framework's governance. **Both of those translation layers needed correction here.** The artifact mapping — which of the framework's documents correspond to which BMAD artifacts, and in which direction data should flow when both exist — is fixed to match how the artifacts are actually structured, rather than an earlier approximation. The orchestration bridge modes, which govern how control passes back and forth between the framework's own step sequencing and BMAD's orchestration, are similarly corrected so that a team moving between the two doesn't hit a mode where the bridge either double-drives a step or drops one silently.

This is not glamorous work, but it's the kind of correction that matters more the more teams route through the adapter: a mapping bug that only shows up in an edge case still shows up, repeatedly, for every team that happens to hit that edge case.

Multi-repo work looks different in every tool
---------------------------------------------

The framework had always assumed a certain amount of homogeneity in how an agent gets at a developer's code — clone it, read it, write to it. **That assumption breaks down once a team's workflow spans more than one repository and more than one CLI tool**, because different AI coding tools don't grant multi-repo access the same way. A workflow written with only one of those tools in mind can silently fail — or silently do the wrong thing — in another, because what looks like "the repo" to the framework's scripts may only be one of several repos the agent actually has open, or the agent may not have write access to a sibling repo at all depending on which tool is driving.

Rather than trying to paper over those differences with one abstraction that pretends they don't exist, the framework adds explicit guidance describing how each tool's multi-repo model actually behaves, so a team choosing between tools for a given piece of work can reason about what that choice implies for cross-repo steps, instead of discovering the gap mid-workflow.

Bringing external skills up to house style
------------------------------------------

The previous chapter absorbed a set of skills that originated outside the framework. Absorption alone doesn't make them consistent with the framework's own conventions — naming, structure, tone, the way a skill declares its triggers and its scope — and this chapter is where that gets reconciled. **The external skill set goes through a hardening and linting pass so that each skill matches the same shape as the framework's native ones**: consistent front matter, consistent phrasing for when a skill should and shouldn't fire, and consistent expectations about what a skill is allowed to assume about the environment it's running in.

The point of this pass isn't cosmetic uniformity for its own sake. A developer working across a dozen skills shouldn't have to remember that three of them behave slightly differently because they came from somewhere else. Once a skill is in the framework's library, it needs to read and behave like it always belonged there.

Why this matters
----------------

None of this chapter's work is visible as a new capability — nothing here is a feature a team would point to and say "we can now do X." What it buys instead is trust in the parts of the framework that already existed: an adapter whose mappings actually match its targets, guidance that keeps a multi-tool team from getting burned by an assumption the framework never should have made in the first place, and an absorbed skill library that behaves like a single coherent thing instead of a patchwork of donated parts. Correctness and consistency passes like this one are what keep a governance framework trustworthy as its surface area grows — they're less visible than new features, but they're what stops the accumulated surface area from becoming a liability.

---

Appendix: Relevant PRs
----------------------

This chapter's work is covered by PR #16, already attributed to Chapter 9. No distinct PR is associated with this chapter.

**TLDR**

A pure hardening pass, no new capability: the BMAD adapter's artifact mappings and orchestration modes get corrected where they didn't quite match reality, guidance is written for how different AI coding tools handle multi-repo access differently, and the externally-absorbed skill library gets a linting pass so it reads and behaves consistently with the framework's own skills.

None of this is visible as a feature — it's the kind of correctness work that keeps a growing framework trustworthy instead of a patchwork.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437378

