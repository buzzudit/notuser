# AGENTS.md

**This is the single source of truth for agent instructions in this repository.**

There is deliberately one elaborate file rather than several partial ones. `CLAUDE.md` exists only as a pointer to this document — it holds no rules of its own, so there is nothing to keep in sync. If you are adding guidance, add it here.

| Agent | How it reaches this file |
|---|---|
| Codex, Cursor, Windsurf, and most coding agents | Read `AGENTS.md` natively |
| Claude Code | Reads `CLAUDE.md`, which points here |
| Anything else | Read this file directly |

**Contents:** [Working preference](#working-preference) · [Spec-driven development](#spec-driven-development) · [Delivery](#delivery) · [Confidentiality](#confidentiality) · [Resume DOCX](#resume-docx) · [Case study section guides](#case-study-section-guides) · [SEO and indexing](#seo-and-indexing) · [Environment notes](#environment-notes)

---

## Working preference

- Follow Spec-Driven Development (SDD) for product and content work in this repo.

## Spec-driven development

- Start from a clear story spec before implementation.
- Keep scope, acceptance criteria, and definition of done explicit for each meaningful change.
- Use the Linear "SDD Story Template" for every new or updated story: https://linear.app/buzzudit/document/sdd-story-template-2d5b4fa02ad7
- Use Linear as the source of truth for SDD story management. Create, update, merge, and close stories in Linear; do not create or maintain local story specs such as `docs/stories/*.md`.
- If local story specs are found, check current Linear stories first, merge intelligently to avoid duplicates, and migrate the local content into Linear before implementation continues.
- Prefer tightening the spec first when a request is ambiguous, especially for homepage messaging, portfolio positioning, blog presentation, and release work.
- Implement against the agreed spec rather than improvising net-new product direction.
- Preserve the existing visual language unless a spec explicitly calls for broader design change.

## Delivery

- Reuse existing components, data structures, and styling patterns where possible.
- Keep changes production-ready, responsive, and maintainable.
- Validate work locally with `lint` and `build` before considering a story complete.
- Use repo-native PDF extraction support for appraisal/doc review when needed: `npm run pdf:extract` (optionally `npm run pdf:extract -- <inputPath> <outputPath>`).
- Do not deploy with Athena Artifactory.
- When suggesting possible next steps near the end of a response, include one recommended next step and why.
- When suggesting a next step near the end of a response, also recommend which model is most appropriate for that step.

## Confidentiality

This is a public portfolio built largely from work done inside an employer. The site must never expose internal infrastructure or a colleague's identity.

- **No internal hostnames or URLs in public data.** Never put `bitbucket.athenahealth.com`, `intranet.athenahealth.com`, Jira, Confluence, SharePoint, or Teams links into `data/projects/*`, `data/trials.ts`, or any rendered field. `sourceUrl` and `demoUrl` are rendered as visible buttons.
- **Never expose another person's namespace.** A repo path containing a colleague's username identifies them; drop the link rather than linking it.
- `isPrivate: true` only removes a page from the sitemap and adds `noindex`. **The page still renders for anyone with the URL.** It is not access control — do not treat it as protection for sensitive content.
- Prefer sanitizing a case study over hiding it. A locked-looking page reads to a recruiter as no work at all.
- Before publishing a case study drawn from internal work, remove customer names, internal metrics, roadmap detail, architecture specifics, and screenshots containing tickets, logs, or employee names.
- Do not state outcomes the evidence does not support. If an adoption or impact figure is not measured, say so plainly rather than implying it.

## Resume DOCX

- `public/resume.docx` is the downloadable resume and is a **generated artifact**. Never hand-edit it; it is overwritten on every build.
- It is generated from `data/experience.ts` (plus contact details in `data/site.ts`) by `npm run resume:docx`.

### The DOCX is a resume, not a copy of the page

The `/resume` page and the DOCX serve different readers and must not share structure or voice.

- The **page** is a marketing surface. Labelled tiles, section headings written to persuade, gradient cards, links out to case studies, first-person copy.
- The **document** is skimmed by a recruiter in about twenty seconds and parsed by applicant tracking systems. It follows resume conventions instead: a prose Professional Summary, a scannable Areas of Expertise line, Selected Achievements placed near the top where a skim lands, reverse-chronological Professional Experience, then Education and one-line credentials.

Rules that follow from this:

- Do **not** render the page's `resumeSignals` into the document. Their label/title/description shape reads as marketing in a resume. Document prose lives in `resumeDocument` in `data/experience.ts` and is written separately.
- Do not carry page-voice headings into the document. "What I have delivered" is right for the page; the document says "Selected Achievements".
- Keep credentials to one line each. The long `summary` prose on each certification belongs on the page, not in the document.
- No links, no color accents, no decorative furniture. Plain black text, one rule under each section heading, standard fonts — anything else risks the ATS parse.
- When adding a new section to the page, decide explicitly whether it belongs in the document. Most page sections do not.

### Regeneration timing

**Regenerate immediately before committing, never while iterating.** Any change to resume content or the resume page makes the DOCX stale, but regenerating on each edit produces churn and large binary diffs for work still in flux. So:

1. Make and review all resume changes first, using the page as the source of truth.
2. Once the changes are settled and ready to commit, run `npm run resume:docx`.
3. Stage `public/resume.docx` in the same commit as the content change so the file and the page never diverge.

Required for any edit to `profile`, `resumeDocument`, `experienceTimeline`, `achievements`, `education`, or `trainingAndCertifications`, and for any change to the resume page that alters what those sections say.

If `scripts/build-resume-docx.ts` changes, regenerate and visually check the output before committing. LibreOffice and Python are not available in every environment, so confirm the rendering rather than assuming it.

## Case study section guides

Every case study renders a Section Guide listing Problem, Context, Role, Process, Decisions, Outcome, and Lessons. Each entry has a subtitle, and the defaults in `app/portfolio/[slug]/page.tsx` merely define what those words mean — "Problem: what challenge needed solving" tells a reader nothing they did not already know.

**Write article-specific subtitles via the optional `sectionGuide` field on the project record.** Keys are the seven section ids; anything omitted falls back to the generic default, so this can be rolled out one article at a time.

Rules:

- Say what is actually in *this* article's section, not what the section is for. "Why moving early was the hard part" beats "What challenge needed solving".
- Keep each to a short phrase. Read top to bottom, the seven lines should work as a synopsis of the piece.
- Write them from the finished body copy, not before it. The subtitle describes what the section says.
- Do not template a phrase across articles. The Role line especially: "What was mine, and what partners owned" is right where credit is genuinely shared and undersells the work where it was not.
- Only worth doing for substantial case studies. Archive entries with a single generated summary have no real Process or Decisions to describe and should stay on the defaults.

Reference implementation: `data/projects/dep-nervous-system.ts`.

## SEO and indexing

- Treat `app/sitemap.ts`, `app/robots.ts`, `next.config.ts` headers, and route redirects as part of the site's public content contract.
- When adding, removing, renaming, privatizing, or materially changing a public page, blog post, portfolio case study, PDF, or route group, check whether the sitemap, robots policy, canonical metadata, redirect behavior, or `X-Robots-Tag` headers need an update.
- Sitemap entries should include only canonical public URLs. Exclude admin routes, API routes, generated/internal routes, private share-code URLs, personalized query variants such as `?ukr=`, and files intentionally kept out of search results.
- Note that **every trial in `data/trials.ts` is added to the sitemap unconditionally** — there is no `isPrivate` equivalent for `/lab`. Anything added there is submitted to search engines.
- If a public URL is renamed or replaced, add or update a permanent redirect to the canonical destination instead of leaving old URLs to 404.
- If a downloadable file can compete with an HTML page in search results, make the indexing policy explicit in `next.config.ts` headers or document why the file should remain indexable.
- After SEO-relevant route or content changes, verify with `npm run build` so generated `/sitemap.xml` and `/robots.txt` are checked before completion.

## Environment notes

Traps that have cost real debugging time in this repo.

- **Never run `npm run build` while the dev server is running.** Both write to `.next`, and the build fails during "Collecting page data" with `ENOENT` errors on pages unrelated to your change. Worse, the wrapper can still report exit code 0. Stop the dev server, `rm -rf .next`, then build.
- **Tailwind tree-shakes `@layer components` rules whose class names never appear literally in the source.** A class built at runtime — `` `signal-card-${index}` `` — silently renders with no styles. Write the full class names out in an array and index into that instead.
- **Media lives in `public/media/mirror/`** with hashed Wix filenames. The friendly name is in `_manifest.json`, but not always in a searchable form. When looking for an asset, scan image dimensions rather than filenames — square company and institution marks are usually 1024×1024 or 512×512.
- **Python and LibreOffice are not installed** in the usual dev environment here, so the DOCX skill's render-and-check step cannot run. Verify document output by unzipping and reading `word/document.xml`, and ask a human to confirm the visual result.
