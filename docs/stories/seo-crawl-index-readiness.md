# SEO crawl and index readiness

## Summary
Strengthen notuser.com's technical SEO foundation so search engines can discover the right public pages, understand canonical URLs, and avoid indexing private or low-value surfaces.

## Problem
The site already has page metadata, canonical tags, social previews, and structured data, but it is missing several crawl and index controls that matter before broader content optimization. Without a generated sitemap, explicit robots policy, permanent redirects for legacy URLs, and a clear indexing decision for the public resume PDF, search engines have less reliable signals about which URLs should be discovered, consolidated, and indexed.

## Desired outcome
Search engines should be able to crawl the public portfolio, writing, resume, and contact surfaces cleanly while legacy URLs consolidate into the canonical pages and private/internal surfaces remain out of the index.

## Spec delta
- Add repo-native sitemap generation for public indexable routes.
- Add repo-native robots generation that references the sitemap.
- Convert legacy blog and portfolio slug redirects to permanent redirects.
- Decide and implement the indexing policy for `public/resume.pdf`.
- Keep existing metadata, OpenGraph, Twitter, and JSON-LD behavior intact.
- Keep personalized `?ukr=` URLs, admin pages, API routes, and private share-code URLs excluded from indexable discovery.

## In scope
- Generate sitemap entries for the homepage, portfolio landing, portfolio case studies, blog landing, blog articles, resume page, contact page, circle page, and public personalization disclosure page.
- Exclude admin, API, generated Prisma, private share-code, and query-parameter variants from the sitemap.
- Add `robots.txt` output with a permissive public crawl policy for indexable content and a sitemap reference.
- Preserve noindex behavior for personalized `?ukr=` visits and private/admin pages.
- Make legacy `/post/[slug]` and legacy portfolio slug routes resolve with permanent redirects.
- Add a header-level robots policy for `resume.pdf` if the HTML resume page should be the preferred indexed result.

## Out of scope
- Keyword research or broad copy rewriting.
- Dynamic OpenGraph image generation.
- New page layouts, visual redesign, or changes to AI helper surfaces.
- New structured data beyond what is needed for crawl/index readiness.
- Search Console setup, external sitemap submission, or production deployment.

## Acceptance criteria
1. A sitemap is generated from source data for all public canonical pages.
2. Non-public routes, API routes, private share links, admin pages, and personalized query variants are not included in the sitemap.
3. `robots.txt` is available and references the production sitemap URL.
4. Existing page-specific metadata, canonicals, OpenGraph, Twitter cards, and JSON-LD continue to render.
5. Legacy blog and portfolio URLs redirect permanently to their canonical destinations.
6. The resume PDF indexing policy is explicit and implemented in code.
7. Public HTML resume remains discoverable when the PDF is noindexed.
8. No visual behavior changes are introduced.
9. `npm run lint` passes.
10. `npm run build` passes.

## Definition of done
- `app/sitemap.ts` or equivalent Next.js sitemap support is implemented.
- `app/robots.ts` or equivalent robots support is implemented.
- Redirect behavior is updated and verified for representative legacy blog and portfolio URLs.
- `resume.pdf` index policy is implemented or documented as intentionally indexable.
- Story evidence is updated with validation notes after implementation.
- Local lint and build pass.

## Notes
- Dependencies: existing Next.js App Router metadata APIs, `siteConfig.url`, `blogPosts`, `projects`, and existing legacy slug maps.
- Risks/assumptions: the preferred search result for resume-related queries is assumed to be `/resume`, not `/resume.pdf`; confirm before implementation if the PDF should remain indexable.
- Verification plan: inspect generated `/sitemap.xml` and `/robots.txt`, check representative page metadata, verify permanent redirect status for legacy URLs, and confirm PDF response headers if a noindex header is added.

## Implementation evidence
- Added Next.js metadata routes for `/sitemap.xml` and `/robots.txt`.
- Generated sitemap includes 64 canonical URLs: 7 static pages, 33 public portfolio case studies, and 24 blog posts.
- Generated sitemap excludes admin/API routes, private share-code URLs, query variants, `resume.pdf`, and the project marked `isPrivate`.
- Generated `robots.txt` allows public crawling, disallows `/admin/` and `/api/`, and references `https://notuser.com/sitemap.xml`.
- Legacy `/post/designing-ai-workflows-that-people-trust` returns `308` to `/blog/framework-first-design-a-scalable-approach-to-problem-solving`.
- Legacy `/portfolio/revenue-intelligence-copilot` returns `308` to `/portfolio/insights-and-reporting`.
- `resume.pdf` returns `X-Robots-Tag: noindex, follow` so `/resume` remains the preferred indexable resume surface.
- `npm run lint` passed.
- `npm run build` passed.
- Domain migration follow-up: if the canonical domain changes, update `siteConfig.url` before submitting the sitemap in Search Console.
