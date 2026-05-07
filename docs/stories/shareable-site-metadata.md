# Shareable site metadata

## Story Spec

### Objective

Make notuser.com pages more useful when shared in social previews, search results, and AI/crawler summaries.

### Scope

* Add shared metadata helpers for page titles, descriptions, canonicals, OpenGraph, and Twitter cards.
* Apply page-specific metadata to public landing, blog, portfolio, resume, circle, contact, personalization, blog detail, portfolio detail, and share-code routes.
* Keep `?ukr=` URLs shareable with generic canonical OpenGraph/Twitter previews while preventing indexing.
* Add minimal structured data for the person/site, blog articles, and portfolio case studies.

### Out of Scope

* Visual redesign, CSS changes, or AI banner/workspace styling changes.
* Dynamic OpenGraph image generation.
* Broad copy rewrites or a new content data model.
* Search indexing for admin or private share-code pages.

### Acceptance Criteria

* Public pages have specific title, description, canonical URL, OpenGraph, and Twitter metadata.
* Blog and portfolio detail pages derive metadata from existing post/project data.
* `?ukr=` URLs keep rich generic previews and canonicalize to the base page while setting `noindex,nofollow`.
* Internal admin remains `noindex`.
* Share-code portfolio URLs get safe generic share metadata and stay `noindex`.
* Structured data is emitted only for low-risk page types: person/site, blog article, and portfolio creative work.

### Definition of Done

* Implementation is complete against the approved metadata-only scope.
* Existing visual and style work is not changed.
* `npm run lint` passes.
* `npm run build` passes.

### Notes (Optional)

* Dependencies: existing Next.js app-router metadata APIs and existing site/blog/project data.
* Risks/assumptions: AI optimization means crawler-friendly summaries and structured data, not hidden content or changed AI assistant behavior.
* Rollback/verification plan: remove the helper and route metadata calls if previews regress; spot-check representative built page metadata before release.
