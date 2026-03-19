# Admin-generated `ukr` links for hiring personalization

## Summary
Create a hidden admin workflow that lets Udit generate a 3-letter `ukr` link for a specific open role, store structured hiring-intent context behind that link, and use that context to tailor the site for that hiring conversation.

## Problem
The site is currently generic. Even when a visitor arrives because of a specific open role, the experience does not know which organization, position, or hiring intent brought them in. That lowers relevance and weakens the chance of moving the conversation toward interview fit.

## Desired outcome
When a visitor lands on a URL like `/?ukr=abc`, the site should recognize the associated role context, personalize the page they are on immediately, persist that context for 60 days, and adapt copy and AI prompts across the main site journey.

## In scope
- Hidden admin page for create, list, and deactivate.
- Unique 3-letter lowercase alphabetic `ukr` code generation.
- Structured persistence for `org`, `positionTitle`, `positionUrl`, `intentType`, `notes`, `code`, and active status.
- Request-time personalization for `/`, `/resume`, `/portfolio`, `/blog`, `/contact`, and `/circle`.
- 60-day cookie persistence for valid `ukr` visits.
- Non-indexing behavior for any request containing `ukr` and for the admin page.

## Out of scope
- Full authentication or user accounts.
- Metrics dashboards or attribution reporting.
- Edit-in-place or delete flows beyond deactivation.
- Per-role rewrites of portfolio or blog body content.

## Acceptance criteria
1. Admin can create a new `ukr` link from `/admin/ukr` without direct database access.
2. Generated codes are exactly 3 lowercase alphabetic characters and unique.
3. Admin can view existing links and deactivate them.
4. Visiting a valid `?ukr=abc` personalizes the current page without redirecting.
5. A valid `ukr` visit persists the active context in a cookie for 60 days.
6. Invalid or inactive `ukr` values do not personalize the page and fall back safely.
7. Requests with `ukr` are non-indexable and preserve the clean route as canonical.
8. The hidden admin page is non-indexable.
9. AI prompts and supporting copy adapt to the active role context.
10. `lint` and `build` pass before the story is considered complete.

## Definition of done
- Prisma model and migration are added.
- Hidden admin page and API are implemented.
- Session persistence API and client bridge are implemented.
- Top-level route personalization is wired.
- Search-engine visibility rules are implemented.
- Role-aware AI prompt context is live.
- Documentation is updated for the new env var and route.
