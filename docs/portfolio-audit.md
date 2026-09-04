# Portfolio Audit — notuser.com

**Context:** Evaluation of notuser.com against a Sr. Director UX search
**Date:** 3 September 2026
**Reviewed:** Live site (home, portfolio, resume, four flagship case studies, lab, circle) plus the repo content layer — 37 project records, `data/site.ts`, `data/experience.ts`, `app/api/ai/route.ts`

---

## The read

**The site reads senior. It doesn't yet prove scope.**

This is a genuinely well-made portfolio — better built than most design-leadership sites, and the AI-leadership framing is a real differentiator right now. The gap is narrower and more specific than a redesign: it argues for leadership *in the abstract* and almost never proves it with a number a hiring committee can carry into a debrief.

### Working — protect these

- Craft and hygiene are not the problem: clean mobile, both themes, JSON-LD, sitemap, canonical redirects, `noindex` on private work. It looks like it was built by someone who ships.
- The AI-leadership section is specific where most are hypey — "review loops, fallback paths, clear responsibility" is an actual point of view, not a trend badge.
- The engineering-to-design arc (Applied Materials, Adobe, Cisco) is uncommon and genuinely load-bearing for platform roles.
- The 360X role statement is the strongest writing on the site — it names what *you* decided, not what the team did.
- 25 essays with "How I groom my designers" is real, checkable leadership evidence.

### Blocking the level

- Zero people-scope numbers anywhere on the site.
- Roughly three months of current work exists nowhere — not in the repo, not on the site.
- Half the flagship set is pre-Director work; the one true Director-level strategy case is marked private.
- The flagship case studies mostly end in assertions, not outcomes.
- A 37-project archive, 9 of them with visibly templated copy, dilutes the 6 that carry the argument.
- Two live defects on the homepage's own AI feature.

---

## Findings

Ranked by impact on a Sr. Director search, not by effort.

### 01 · BLOCKER — There is not one number describing the size of anything you've led

**Effort:** Half a day · highest leverage on the site

Sr. Director is, more than anything else, a scope-of-organization role. A committee wants designers led, managers managed, hires made, people promoted, org retained. I searched the entire content layer for it — it isn't there, on any page.

**Evidence**

Only two team-size phrases exist in all 37 project records:

- `"a team of six"` — Kaseya, 2014, as an individual contributor
- `"a small team of developers"` — a Flash game

Homepage trust indicators: **18+** years · **Director** · **70+** products · **6** companies. Three of the four measure tenure or breadth. None measures people.

"Team growth through coaching" and "coaching, feedback, context-setting, and stretch opportunities" describe a philosophy of management. They're indistinguishable from what a senior IC would write about mentoring, which is exactly the ambiguity a Sr. Director screen is trying to resolve.

**Fix**

Swap at least two trust indicators in `data/site.ts` for people scope, and add a scope line to each athenahealth role in `data/experience.ts` — designers and managers reporting in, hires, promotions, retention. If exact figures are sensitive, ranges and "grew from N to M" both work. This one change moves the site's argument more than everything else on this list combined.

---

### 02 · BLOCKER — Roughly three months of current work exists nowhere

**Effort:** Ongoing capture · gated entirely on interview time

The site and the repo are identical — 37 projects in both. The newest project record was written **3 June 2026**; the last commit is **20 June 2026**. Everything since then lives only in your head.

This compounds finding 03: the portfolio's most recent public evidence is aging while the work that would most directly demonstrate Sr. Director scope is never written down. For a search running now, this is the difference between a portfolio that shows a trajectory and one that shows a plateau.

**Fix**

A recurring capture loop (see the action plan) rather than a one-off writing sprint. Each session: one project extracted through interview, written straight into `data/projects/`, with scope and outcome numbers captured at the same time so finding 01 gets solved in the same pass.

---

### 03 · BLOCKER — The flagship case studies end in assertions, not outcomes

**Effort:** 2–3 days

The portfolio promises "flagship case studies with business context" and "problem context, leadership scope, decision tradeoffs, and outcomes." Three of the four deliver everything except the outcome.

**Evidence**

*Developer Portal* — entire Outcome section, zero numbers:

- "Made athenahealth's technical ecosystem easier to understand and navigate."
- "Created a stronger foundation for platform adoption."
- "Raised the quality bar for a technical experience."

Its three metric tiles: **Developers and partners** / AUDIENCE · **Senior Manager UX** / ROLE · **Platform adoption** / FOCUS — restatements of the page header, styled as measurements.

| Case | Outcome signal |
|---|---|
| Vision | "low to high UX performance" — an internal scale no outsider can read |
| 360X | "reduced manual coordination burden" — no baseline, no figure |
| Developer Portal | none |
| Zivame | **1.9x conversion** — the only real number in the flagship set, from 2017 |

A reader can't tell whether the Developer Portal succeeded. That's a costly thing to leave unanswered on a page a hiring manager opens first.

**Fix**

Every flagship needs at least one number in Outcome — adoption, time-to-integration, ticket volume, partner count, cycle time, satisfaction delta, dollars. Where you can't publish the figure, publish the shape: "cut interface scoping from weeks to days." Then retire the fake metric tiles; a tile that reads *Senior Manager UX / ROLE* spends prime visual real estate to say nothing.

---

### 04 · BLOCKER — Half your marquee work is below the level you're interviewing for

**Effort:** 1 day, mostly a judgment call

The four flagships on both the homepage and the portfolio page are the strongest signal the site sends. Two are pre-Director, and the sharpest Director-level case is the one you've hidden.

| Flagship | Year | Level | Status |
|---|---|---|---|
| Vision: Platform and Data Services | 2023 | Director | `isPrivate: true`, noindexed |
| 360X Closed Loop Referrals | 2024 | Zone Lead | public |
| Developer Portal | 2020 | **Senior Manager** | public |
| Content Led Commerce | 2017 | **nine years old** | public |

Meanwhile the three 2026 records that most directly demonstrate current Director-level AI and platform leadership — AI Enablement, DEP Nervous System, Interface Self Service — are all marked private and sit below the fold in the archive. The site's newest and most senior work is its least visible.

**Fix**

Rebuild the flagship four so every entry is Director-or-above and no older than 2021. Promote Interface Self Service (Project Fusion) — AI-enabled transformation of a healthcare integration process is precisely the story a 2026 Sr. Director search wants. For anything you can't make public, publish a sanitized version rather than a *Private* badge: a locked door on your best work reads as no work at all to a recruiter who won't email to ask.

---

### 05 · MAJOR — The 37-project archive is actively working against the six projects that matter

**Effort:** 1 day

Volume reads as thoroughness to you and as noise to a reader who gives the page ninety seconds. Worse, a stretch of the archive is visibly machine-generated, which undercuts the craft signal everything else on the site works to establish.

**Evidence**

9 records share one template:

- "Data Exports at athenahealth (2024) focused on strategy & direction for cloud app. Why it matters: …"
- "Payer Solutions at athenahealth (2024) focused on design and delivery for product. Why it matters: …"

Only **7 of 37** have the deep narrative treatment.

Cards render non-facts as stat tiles: **2024** / YEAR · **athenahealth** / ORGANIZATION · **Cloud App** / PLATFORM.

Sitting in the same grid as your healthcare platform work: a Fallout 4 mod (966 downloads), *Hungry Lion* (a Flash game), and set-top box EPG work from 2012–2014.

**Fix**

Cut the visible portfolio to roughly 12–15 and put the rest behind an explicit "Full archive (2007–2020)" link. Rewrite or delete the 9 templated summaries — a templated sentence on a design leader's site costs more than a missing project. Keep the Fallout mod; it's charming and honestly labelled. Just don't let it share a row with 360X.

---

### 06 · LIVE DEFECT — The homepage AI briefing links to a page that 404s

**Effort:** 10 minutes

Reproduced on the live site. I asked the homepage widget "Which roles does this profile fit best?" and its *Relevant links* section rendered a link to `/about`, which does not exist — the route is `/about-personalization`.

**Evidence**

```
curl notuser.com/about → 404
```

Rendered anchor confirmed in the homepage DOM after the AI response.

Root cause — `app/api/ai/route.ts`, `SYSTEM_INSTRUCTIONS`: *"use relative markdown links only"* … with no allowlist of real routes, so the model invents plausible ones.

**Fix**

Put the actual route list in the system prompt and instruct the model to link only from it. A broken link inside an AI feature is read as "the AI is making things up," which is the last inference you want on a page selling AI product judgment.

---

### 07 · MAJOR — Your AI briefing argues you're a fit for six different levels

**Effort:** 30 minutes

Same prompt, same session. Asked which roles fit best, it returned a ladder spanning three levels below your target and one above it — on the marquee interactive feature of a site whose entire job is to land a Sr. Director role.

**Verbatim from the live widget**

- Director / Head of Design
- VP of Product Design / Chief Product Designer
- Design Lead for AI Products (**Senior Manager** / Director)
- Head of UX for Healthcare Platforms
- Platform UX Lead / **Principal Designer**
- Design Strategist for Enterprise AI Adoption

A recruiter who runs that prompt gets told you're a Principal Designer candidate. The feature is well-built and grounded — it just hasn't been given a target.

**Fix**

Add the level to the system instructions: answer for Sr. Director / Head of Design and above, and never propose roles below Director. Two sentences in `app/api/ai/route.ts`.

---

### 08 · MAJOR — Twelve testimonials, none from anyone who was above you

**Effort:** Depends on who you ask

The resume page's social proof is peer-weighted, and several entries praise craft rather than leadership — the wrong register for the level. At Sr. Director, the testimonial that carries weight comes from a sponsor: the VP, CPO, or design executive you reported to.

**Evidence**

athenahealth quotes: **Director PM** · **Director PM** · **Product Manager** — all peers or below.

Craft-register praise reading as IC-level:

- "attention to detail is excellent, his intuitiveness is incredible"
- "Quick turn around. Very happy with his creative work."
- "Everything Udit delivers is polished"

Mentee quotes (Melissa, Nikki, Vignesh) are the most valuable ones here — but none states that the person **reported to you**.

**Fix**

Get one quote from someone senior to you that names scope and outcome. Then add "Designer on Udit's team, 2022–2024" style attributions to the mentee quotes — as written they read as nice colleagues; labelled, they're evidence you grow people. Retire the "quick turn around" quote from Kaseya.

---

### 09 · POLISH — A flagship case study shows raw Wix filenames as image captions

**Effort:** 15 minutes

`data/projects/developer-portal.ts` — 6 of 7 gallery items:

```
"label": "bc4f65_fff263152d524304bf2c9d0b4ccab7f2~mv2.jpg"
```

Rendered visibly beneath each image at `components/site/ImageGallery.tsx:38`. Confined to this one project — but it's one of your four flagships.

**Fix**

Write six real captions. Better: make them do work — "Integration path from documentation to first API call" tells a reader something a screenshot alone can't. A migration artifact left visible on a design leader's flagship case study is the kind of detail an interviewer notices and doesn't mention.

---

### 10 · POLISH — The homepage asks for a lot of scrolling before it makes its case

**Effort:** 1 hour

Roughly 9,900px of page across thirteen sections, and the leadership material — Why me, AI leadership, leadership model, executive proof — runs to four separate abstract-claim blocks with substantial overlap. "Current scope" appears twice with near-identical copy in `homeWhyUdit` and `homeExecutiveProof`.

Nothing here is badly written. There's just more assertion than a reader needs before reaching the proof, and the repetition costs credibility that the case studies then have to win back.

**Fix**

Merge the four leadership blocks into two and move Selected work higher. Every abstract claim you cut and replace with a number makes the remaining claims more believable.

---

### 11 · POLISH — The resume PDF is 5.4 MB

**Effort:** 20 minutes

```
notuser.com/resume.pdf → Content-Length: 5,674,273 bytes
```

**Fix**

Compress to under 1 MB. Some applicant tracking systems and corporate mail filters reject or silently truncate large attachments, and this is the one file that has to survive being forwarded around a hiring committee.

---

## Closing

The honest summary: this site would clear a Director screen comfortably and is better engineered than most portfolios at any level. What it doesn't yet do is answer the two questions a Sr. Director committee actually asks — **how big was the organization, and what changed because you ran it.** The work is evidently there in the record. It just isn't on the page.

---

*Companion document: [`portfolio-action-plan.md`](./portfolio-action-plan.md) — the working plan and interview loop.*
