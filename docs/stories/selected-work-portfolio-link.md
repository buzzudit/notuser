# Selected Work portfolio link placement

## Summary
Add a second "View full portfolio" link at the bottom of the homepage Selected Work section while preserving the existing top link.

## Problem
The Selected Work section currently exposes the full portfolio route only before the case-study previews. Visitors who finish scanning the selected work need the same action at the bottom of the section.

## Desired outcome
The homepage Selected Work section shows "View full portfolio" above and below the case-study previews using the existing link style.

## In scope
- Keep the existing top portfolio link.
- Add a matching bottom portfolio link after the selected case-study previews.
- Preserve the existing Selected Work layout, copy, and visual language.

## Out of scope
- Changing portfolio page content.
- Redesigning case-study cards.
- Changing homepage section ordering or messaging.

## Acceptance criteria
1. The Selected Work section renders a "View full portfolio" link above the previews.
2. The Selected Work section renders a "View full portfolio" link below the previews.
3. Both links point to `/portfolio`.
4. Existing responsive layout and styling patterns are preserved.
5. `lint` and `build` pass.

## Definition of done
- Homepage markup includes the second portfolio link.
- Story documentation is added.
- Local `lint` and `build` pass.
