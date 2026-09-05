# AI Spine History — Chapter 4: Multi-Repo Bootstrap Hardening

Every earlier chapter in this history describes the framework as content — skills, templates, governance rules living inside the Brain repo itself. This chapter is about the machinery that gets that content out of Brain and into someone else's repo, and about the first time that machinery broke in a way that only showed up once real teams started running it against their own machines. **The bootstrap script stops being an internal implementation detail and starts being treated as a product surface in its own right.**

From team workspace to product workspace
----------------------------------------

The initialization flow is reframed around a "product" rather than a "team." Previously, standing up a downstream Spine workspace meant running `init.sh` with an explicit `--team` flag and manually filling in a Jira key and a Bitbucket key. That still works, but it's no longer the primary path. **The script now supports three distinct modes:** a zero-argument auto-detect mode that looks up the caller's product name, Jira keys, and Bitbucket key from WFA using their git `user.email`; an explicit mode where those values are passed directly with `--product`, `--jira`, and `--bitbucket`; and a scan-only mode (`--scan --bitbucket KEY`) that just refreshes the generated services listing without touching anything else.

The auto-detect path is deliberately not silent. It prints the values it found in a formatted box — product name, Jira key(s), Bitbucket key — and asks the person running it to confirm, decline, or edit before anything is substituted into the workspace. If WFA lookup fails outright (no network, no match, malformed response), the script falls back to asking for the three values by hand rather than failing the whole init. The placeholder token itself changes to match: `[TEAM_NAME]` becomes `[PRODUCT_NAME]` everywhere it appears — README, CLAUDE.md, AGENTS.md, the generated services doc — so the naming in a freshly-bootstrapped workspace matches the language teams actually use to talk about what they're building.

The README picks up a new section spelling out the Brain/Spine relationship explicitly, because the model had drifted from what people assumed: "dep-brain is a template — you clone it once, configure it, and push the result to your own Bitbucket repo as `dep-spine-YOUR_PRODUCT`... dep-brain stays wired as an upstream remote that `/go` uses to pull framework updates each session — your feature artifacts and configuration in your dep-spine repo are never touched." It also nails down a detail that matters for repo hygiene: **Brain uses `master` as its default branch** (requiring Jira links, reviews, and approvals), while **every downstream Spine repo is expected to default to `main` instead**.

Governance rules move into config, not prose
--------------------------------------------

Alongside the bootstrap changes, this version introduces **`openspec/config.yaml`** as a dep-brain-owned file that carries the framework's non-negotiable rules in a structured, machine-readable form rather than only as prose scattered across skill files. Its header is explicit about ownership: "This file is dep-brain-owned — updated via upstream sync. Team-specific values (Jira keys, team name, Bitbucket key) live in CLAUDE.md / AGENTS.md." The file's `context` block restates the framework's hard boundaries in one place — the PHI/PII prohibition, the Forge-by-default UI rule, and a pointer that speed pressure never overrides Jira key confirmation, platform confirmation, step artifact checks, or auto-commit after every logical change. Underneath that, a `rules` section breaks requirements out per SDD step (assessment, proposal, and onward), each with specific gating conditions — for example, assessment isn't considered complete unless both `assessment.md` and an updated `project-standards.md` exist, and the proposal step requires a confirmed Jira Feature key before the artifact can be committed at all, with a narrow, explicitly-logged exception for local-only prototypes.

The init script also starts doing more than substituting placeholders. It installs OpenSpec (at the version pinned in `package.json`), wires `OPENSPEC_TELEMETRY=0` into the workspace's Claude settings if it isn't already present, and adds a commented-out `openspec/changes/` entry to `.gitignore` so teams can decide for themselves whether change artifacts belong in their own history.

The lockfile bug
----------------

That expanded install step is exactly where the portability problem showed up. The original code ran `npm install --prefix "$REPO_ROOT"` from wherever the script happened to be invoked. **Running `npm install` with `--prefix` pointed somewhere other than the actual working directory causes npm to write machine- and path-specific keys into the generated `package-lock.json`** — meaning the lockfile that got committed into a freshly-initialized downstream Spine workspace was tied to the exact filesystem path of whoever ran `init.sh`, not to the workspace itself. Anyone else — a teammate on a different machine, a CI runner, even the same person after renaming the cloned folder as the script itself instructs them to do — could end up with a broken or inconsistent install.

The fix is small and surgical: instead of passing `--prefix` from an arbitrary location, the script now `cd`s into `$REPO_ROOT` first and runs a plain `npm install` from there, so the lockfile npm generates reflects the workspace's own path, not the path of the shell that launched the script. The comment left in place is direct about why: "Run npm from the repo root so the generated lockfile stays portable... `npm install --prefix` rewrites package-lock.json with machine-specific path keys in downstream initialized workspaces."

Why this matters
----------------

This is the point where "does the framework work" stops being answerable by reading the skills and templates in Brain, and starts depending on whether the handoff into a brand-new Spine repo survives contact with someone else's laptop. The product-workspace reframing and WFA auto-detect make that handoff friendlier — less manual key-hunting, clearer language about what belongs to Brain versus what belongs to a team's own Spine. But the lockfile bug is the more important signal: it's the first concrete evidence that init-time correctness isn't just about getting placeholders substituted right, it's about producing a workspace that behaves identically regardless of whose machine created it. Fixing it quickly, in a dedicated follow-up PR, sets the expectation that bootstrap bugs get treated with the same urgency as governance bugs — because a workspace that can't reliably `npm install` never gets far enough to hit any of the governance rules in the first place.

---

Appendix: Relevant PRs
----------------------

| PR | Title | Author |
| --- | --- | --- |
| #4 | Feature/AISPINE-11 dep brain v3 | Hunter Johnstone |
| #5 | AISPINE-46 — fix init.sh lockfile portability | Gang Fu |

**TLDR**

The setup script that bootstraps a new team workspace from dep-brain gets reworked around "product" instead of "team," with an auto-detect mode that looks up your Jira and Bitbucket keys for you instead of asking you to type them in.

The real story is a bug fix: the install step was writing machine-specific paths into the lockfile, so a workspace set up on one laptop could break for anyone else who touched it. The fix runs npm from the right directory instead of an arbitrary one — small change, but it's the first sign that "does the bootstrap actually work everywhere" gets treated as seriously as the governance rules themselves.

---

Source: https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=956437356

