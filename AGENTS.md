# AGENTS.md

## Working Preference
- Follow Spec-Driven Development (SDD) for product and content work in this repo.

## SDD Expectations
- Start from a clear story spec before implementation.
- Keep scope, acceptance criteria, and definition of done explicit for each meaningful change.
- Use the Linear "SDD Story Template" for every new or updated story: https://linear.app/buzzudit/document/sdd-story-template-2d5b4fa02ad7
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

## SEO and Indexing
- Treat `app/sitemap.ts`, `app/robots.ts`, `next.config.ts` headers, and route redirects as part of the site's public content contract.
- When adding, removing, renaming, privatizing, or materially changing a public page, blog post, portfolio case study, PDF, or route group, check whether the sitemap, robots policy, canonical metadata, redirect behavior, or `X-Robots-Tag` headers need an update.
- Sitemap entries should include only canonical public URLs. Exclude admin routes, API routes, generated/internal routes, private share-code URLs, personalized query variants such as `?ukr=`, and files intentionally kept out of search results.
- If a public URL is renamed or replaced, add or update a permanent redirect to the canonical destination instead of leaving old URLs to 404.
- If a downloadable file can compete with an HTML page in search results, make the indexing policy explicit in `next.config.ts` headers or document why the file should remain indexable.
- After SEO-relevant route or content changes, verify with `npm run build` so generated `/sitemap.xml` and `/robots.txt` are checked before completion.
