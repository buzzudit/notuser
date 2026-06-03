# Refine Lab Detail Template Layout

Status: done
Area: site-content
Owner: Udit Khandelwal
Test Level: Level 2 - low-risk shared page-template change with build verification

## Story

As a portfolio visitor, I want the lab detail page sections to use consistent, non-black visual treatments so the page feels coherent with the Ask AI surface and scans with better rhythm.

## Scope

- Make the learning row use a 33/66 desktop column distribution.
- Make the why/shape row use a 66/33 desktop column distribution.
- Swap the why/shape row so the shape section is first and why is second.
- Replace black lab tiles with Ask-AI-style blue banner surfaces.
- Remove black numbered badges from the Idea Path graphic.
- Make the learning graphic steps read as a staircase with longer, offset tiles.

## Acceptance Criteria

- The first lab content row uses `1fr 2fr` on desktop.
- The second lab content row uses `2fr 1fr` on desktop and renders Shape before Why.
- The learning graphic uses the shared `blue-banner` visual language.
- The learning graphic steps are longer stacked tiles with progressive horizontal offsets.
- The shape section uses the shared `blue-banner` visual language.
- The Idea Path numbers use a light primary treatment instead of a black background.

## Spec Delta

### Added

- Local story record for the lab template refinement.

### Changed

- Lab detail template layout and visual treatment.
- Learning graphic step layout.

### Removed

- Black background treatment from the learning graphic, shape section, and Idea Path number badges.

## Done Evidence

- Created checkpoint commit before edits: `1cfc274`.
- Updated `app/lab/[slug]/page.tsx`.
- Adjusted the learning graphic steps into a longer stair-step layout.
- Verified `http://localhost:3004/lab/bithub` returned `200 OK`.
- Ran `npm run lint` successfully.
- Ran `npm run build` successfully.
- Residual risk: build still reports the existing multiple-lockfile Next.js workspace-root warning; it does not block compilation.
