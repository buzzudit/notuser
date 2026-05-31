# People directory and portfolio cross-links

## Summary
Create a public visual people directory from the archived collaborator data and connect it bidirectionally with portfolio case studies.

## Problem
The archived site had collaborator data under old `/circle/*` routes, but the current `/circle` page is now an AI workflow prompt playground. The current site needs a new public people surface that preserves collaborator context while connecting it to current project evidence.

## Desired outcome
The site has a new `/people` page with visual network treatment, individual person pages, main navigation access, indexed metadata, sitemap coverage, and portfolio case-study backlinks.

## In scope
- Import all archived `PUBLISHED` collaborator records into a typed data layer.
- Add `/people` and `/people/[slug]`.
- Link people pages to current portfolio projects using archived project IDs.
- Link portfolio detail pages back to connected people.
- Add public metadata, Person JSON-LD, and sitemap entries.
- Preserve the existing `/circle` prompt playground.

## Out of scope
- Replacing `/circle`.
- Recreating old Wix page layouts exactly.
- Adding a new graph visualization dependency.
- Publishing unmapped legacy project links.

## Acceptance criteria
1. `/people` renders a visual network summary and filterable people cards.
2. `/people/[slug]` renders profile, LinkedIn, testimonial when present, and linked current projects.
3. Portfolio detail pages show connected people when archived project references match a current project.
4. `People` appears in main navigation.
5. `/people` and person detail routes are included in the sitemap.
6. `lint` and `build` pass.

## Definition of done
- Data layer, routes, components, metadata, and sitemap are implemented.
- `/circle` remains unchanged.
- Local verification covers desktop, mobile, person detail, portfolio backlink, and sitemap.
