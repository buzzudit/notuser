# Portfolio Action Plan — Sr. Director UX search

**Companion to:** [`portfolio-audit.md`](./portfolio-audit.md)
**Started:** 3 September 2026
**Status:** Interview round 1 in progress

> **Repo convention note.** `AGENTS.md` makes Linear the source of truth for SDD story management. This document is a working reference and interview log, not a story spec. Once the workstreams below are agreed, they should be created as Linear stories and this file should link to them rather than duplicate them.

---

## ⚠️ Revised for a 2–3 day runway

The search starts in 2–3 days. The capture loop still runs — **capture and publish are separate decisions.**

> **Correction.** An earlier revision of this plan claimed 6+ efforts made the per-session loop unworkable on a 2–3 day runway. That was wrong: it conflated "session" with "day." A capture batch costs ~10 minutes of Udit's time and the write-up is mine, so six batches is roughly an hour — comfortably inside the runway. The real constraint is editorial, not temporal.

What that means concretely:

- **Capture all 6.** Memory is the perishable asset, and the raw material has value beyond the site — resume bullets, interview stories, future updates. Run the batches back to back rather than one per sitting.
- **Publish 2–3.** Selection stays ruthless. Adding six entries to a portfolio already flagged for dilution (audit finding 05) would work against the search. Everything captured but unpublished stays in the repo as raw material.
- **Delete rather than rewrite.** The 9 templated summaries get cut, not improved. Removal is instant and strictly raises quality.
- **Send the testimonial ask today.** It has the longest lead time and will not land before day 3 — but an outstanding ask is worth more than none, and it may arrive during the search.
- **Defer the homepage restructure entirely.** W8 is real but it is polish, and polish does not move a hiring decision.

### Three-day sequence

| Day | Work | Needs from you |
|---|---|---|
| **1** | Exact scope numbers onto the site. Compress the resume PDF. Send the sponsor testimonial ask. Run capture batches across all 6 efforts. | 15 min for the figures, then ~10 min per effort |
| **2** | Write every captured effort into `data/projects/`. Decide which 2–3 get promoted to the site. Add outcome numbers to existing flagships. Rebuild the flagship four. | 15 min: outcome figures + promotion decisions |
| **3** | Archive triage to ~15 visible projects. Re-aim the homepage headline. Build, verify, deploy. | 10 min: veto pass on the cut list |

### Positioning note — the headline may be mis-aimed

Target domains selected: **healthcare / health tech** and **enterprise platforms / B2B SaaS**. Notably *not* AI-first products.

The current H1 reads *"Design leader for AI-first products and enterprise platforms."* It leads with a category that isn't being targeted. AI fluency remains a strong differentiator for healthcare and enterprise roles — but as a **capability**, not the headline category. Recommend re-aiming the headline toward healthcare and platform depth, with AI as the modifier that makes it current. Decide on day 3.

Company profile: **large enterprise** and **scale-up**. Both are served by the same positioning, so no split needed.

---

## How this works

The audit found eleven issues. Nine of them are blocked on information only Udit has — team scope, outcome numbers, what's publishable, and roughly three months of uncaptured work. Writing more copy doesn't fix that. Interviewing does.

So this is a **recurring loop**, not a one-off plan:

```
   ┌─────────────────────────────────────────────────┐
   │  1. I ask a focused batch of questions          │
   │  2. You answer (short answers are fine)         │
   │  3. I write the answers straight into the repo  │
   │  4. I update the tracker below                  │
   │  5. Next session picks up the next batch        │
   └─────────────────────────────────────────────────┘
```

**Session shape:** one batch per session, 10–20 minutes of your time, ending with committed changes to the site. The loop keeps running until the tracker is clear — then it switches to maintenance mode (one new project captured per session as work ships).

**Ground rule:** approximate answers beat perfect ones. "Somewhere around 12–15 designers, three of them senior" is publishable. A blank is not.

---

## Workstreams

Ordered by return per hour, not by audit rank.

### W1 — Scope numbers · *unblocks audit 01*

The single highest-leverage change on the site. Needs one interview batch, then half a day of edits to `data/site.ts` and `data/experience.ts`.

**Blocked on:** Interview batch A

### W2 — Capture the missing work · *unblocks audit 02*

Nothing since 3 June 2026 exists anywhere. This is recurring: one project per session, extracted by interview and written directly into `data/projects/`. Scope and outcome numbers get captured in the same pass, so W1 and W3 advance alongside it.

**Blocked on:** Interview batch B, repeated

### W3 — Outcome numbers for existing flagships · *unblocks audit 03*

Every flagship needs at least one real number in its Outcome section, and the fake metric tiles (`Senior Manager UX / ROLE`) get retired.

**Blocked on:** Interview batch C

### W4 — Rebuild the flagship four · *unblocks audit 04*

Promote current Director-level work, retire Developer Portal and Zivame from the marquee set, sanitize rather than hide.

**Blocked on:** Interview batch D (what can be made public), and W2

### W5 — Archive triage · *unblocks audit 05*

Cut the visible portfolio to 12–15, move the rest behind an explicit archive link, rewrite or delete the 9 templated summaries.

**Blocked on:** Interview batch E — though I can propose a cut list first and have you veto.

### W6 — Code fixes · *unblocks audit 06, 07, 09, 11*

The `/about` 404, the AI level targeting, the Wix filename captions, the 5.4 MB PDF. **Not blocked on anything** — these can ship immediately and independently.

### W7 — Sponsor testimonial · *unblocks audit 08*

Longest lead time of anything here, so the ask starts early even though it lands last.

**Blocked on:** Interview batch F

### W8 — Homepage tightening · *unblocks audit 10*

Merge four leadership blocks into two, move Selected work higher. Best done *after* W1 and W3, so there are numbers to replace the abstract claims with.

**Blocked on:** W1, W3

---

## Interview backlog

### Batch A — People scope `→ W1`

1. How many designers report into you today, directly and indirectly?
2. Any managers or leads reporting to you? How many?
3. Over your time as Director, how many people have you hired? Promoted?
4. What's the largest org you've been responsible for, and over what period?
5. Beyond headcount — what budget, vendor, or contractor scope do you own?
6. How many product teams or zones does your design org support?

### Batch B — Project capture `→ W2` *(repeats, once per project)*

The reusable extraction template. For each uncaptured project:

1. What was the problem, in the words the business used — not the design framing?
2. What was your specific decision or call? (Not the team's — yours.)
3. What did you decide *against*, and why?
4. Who did you have to align, and what made it hard?
5. What changed as a result? Any number at all — time, volume, cost, adoption, satisfaction, headcount avoided?
6. What's the level signal — was this you as Director, or you as a hands-on contributor?
7. Can this be public, sanitized, or must it stay private?

### Batch C — Outcome numbers for existing work `→ W3`

1. **Developer Portal:** any adoption, integration-time, partner-count, or support-ticket data? Even directional?
2. **Vision / Platform:** what does "low to high UX performance" mean in figures a stranger could read?
3. **360X:** what did closed-loop status actually change — volume, time, error rate?
4. **Interface Self Service (Fusion):** what does "reduced R&D dependency" translate to?
5. For any of these — if the number can't be published, what's the *shape* you can publish?

### Batch D — Publishability `→ W4`

1. For each private athenahealth project: what specifically makes it private — screenshots, figures, roadmap, customer names?
2. If those were removed, could the case study be public?
3. Is there an internal review path for publishing sanitized work?
4. What's your risk tolerance here while employed and searching?

### Batch E — Archive triage `→ W5`

1. Which pre-2020 projects are you unwilling to cut, and why?
2. The Fallout mod, Hungry Lion, set-top box work — keep in an archive section, or retire?
3. Any project in the 37 you'd consider a hidden gem I've under-weighted?

### Batch F — Testimonials `→ W7`

1. Who did you report to at athenahealth, 2021–present? Would they write something?
2. Any VP or exec partner who saw your org-level impact directly?
3. Which former reports would speak to how you grew them — and can we label their existing quotes with reporting relationship?

### Batch G — Positioning calibration `→ shapes everything`

1. Sr. Director where — healthcare, enterprise platforms, AI-first products, or open?
2. Company stage: big-co, scale-up, or either?
3. Are you targeting a peer-level move or a stretch to VP-track?
4. Any specific companies or roles in play right now that the site should speak to?

---

## Tracker

| # | Workstream | Blocked on | Status |
|---|---|---|---|
| W1 | Scope numbers | Exact figures | 🟡 Ranges captured, awaiting exact numbers |
| W2 | Capture missing work | Batch B ×N | ⬜ Not started |
| W3 | Outcome numbers | Batch C | ⬜ Not started |
| W4 | Rebuild flagship four | Batch D, W2 | ⬜ Not started |
| W5 | Archive triage | Batch E | ⬜ Not started |
| W6 | Code fixes | — *(unblocked)* | 🟢 3 of 4 shipped |
| W7 | Sponsor testimonial | Batch F | ⬜ Not started |
| W8 | Homepage tightening | W1, W3 | ⬜ Not started |

### W6 detail

| Fix | Status |
|---|---|
| `/about` 404 — route allowlist added to `SYSTEM_INSTRUCTIONS` | ✅ Done |
| AI level targeting — Sr. Director and above, no IC titles | ✅ Done |
| Developer Portal filename captions — 6 rewritten from the actual screens | ✅ Done |
| Resume PDF 5.4 MB → under 1 MB | ⬜ Needs the source file |

---

## Interview log

*Each session appends here: date, batch, what was captured, what shipped.*

### Session 1 — 3 September 2026

- Audit delivered and saved to `docs/portfolio-audit.md`.
- User flagged that recent projects were never entered — verified live site and repo are identical at 37 projects, newest record written 3 June 2026. Added as audit finding 02.

**Batch A captured (ranges):**

| Measure | Answer |
|---|---|
| Designers in org (direct + indirect) | 6–12 |
| Managers or leads reporting in | 1–2 |
| Hires as Director (2021–present) | 4–8 |
| Promoted or sponsored for promotion | 3–5 |

**Correction logged:** I initially benchmarked Sr. Director UX at 20–40+ reports. That figure is engineering-calibrated and wrong for design. Design orgs run leaner — a Sr. Director of Design commonly owns 10–20 people with 2–3 leads. Udit's numbers sit inside that band and should be stated plainly, not hedged.

**Shipped this session:** W6 items 1–3 (`app/api/ai/route.ts` route allowlist and level targeting; six real gallery captions in `data/projects/developer-portal.ts`, written from the actual screens). Lint and typecheck clean.

**Batch G captured:**

| Question | Answer |
|---|---|
| Uncaptured efforts | **6+** |
| Target domains | Healthcare / health tech · Enterprise platforms / B2B SaaS *(not AI-first)* |
| Company profile | Large enterprise · Scale-up |
| Search timing | **Starting in 2–3 days** |

The 2–3 day answer overrode every option offered and forces the compressed plan at the top of this document. Original multi-session loop is retained below as the post-launch maintenance mode.

**Capture completed via handoff agent.** A second Claude account with access to AI Spine working material returned structured source records for three initiatives: DEP Brain / DEP Spine, Spine Triage, and AI Training & Enablement / AI Resource Hub. The agent held an explicit evidence standard and marked absent figures `NO DATA FOUND` rather than estimating.

**Critical finding from the capture — the outcome data does not exist.**

Every business-impact measure across all three initiatives came back `NO DATA FOUND`: adoption rate, teams onboarded with verified use, cycle-time change, time saved, defect reduction, KR movement. Audit finding 03 therefore **cannot** be closed with this work.

What the material does contain is craft-volume evidence — commit counts (165 in 18 days on one initiative, 37 on another), test counts, heuristic-eval item counts. On a Sr. Director portfolio those argue the wrong case: they read as a senior IC who builds. The handoff agent independently reached the same read, scoring Spine Triage as *"primarily senior hands-on product and UX leadership."*

**Editorial decision:** all three records are framed around decisions and tradeoffs, where this material is genuinely exceptional. No commit counts, test counts, or volume metrics are published. Outcome sections state the absence of adoption data explicitly rather than implying impact.

**Written this session:**

| Record | Action |
|---|---|
| `data/projects/spine-triage.ts` | New. Full narrative. Strongest new flagship candidate — real production deployment, Sept 2026 |
| `data/projects/ai-resource-hub.ts` | New. Full narrative. Strategy and product-formation signal |
| `data/projects/dep-nervous-system.ts` | Role corrected from "experience and product strategy partner translating…" to actual UX leadership of the AI Spine team, with partner-owned areas named honestly |

**Testimonial leads surfaced by the capture** — closes audit finding 08. Two senior leaders observed this work directly and are credible sponsor-quote sources: one reported "wide adoption and enthusiasm" after observing teams first-hand; another participated in product review sessions Udit facilitated. Both outrank peer-level PM quotes currently on the resume page.

**Open and blocking:** four exact scope figures. Whether to promote Spine Triage into the flagship four. Whether the three 2026 AI records stay `isPrivate`.
