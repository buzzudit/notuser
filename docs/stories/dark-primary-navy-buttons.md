# Dark mode primary button navy alignment

## Summary
Use the same navy blue from dark-mode AI banners for primary CTA buttons in dark mode, with white button text.

## Problem
Dark mode currently uses a brighter brand blue for primary controls while AI banners use a deeper navy. The CTA buttons should match the banner navy without changing primary-colored text, badges, links, rings, or other non-button elements.

## Desired outcome
Primary CTA buttons in dark mode use the dark banner navy and keep white text for contrast. Light mode and non-button primary surfaces remain unchanged.

## In scope
- Add a scoped dark-mode CTA button treatment.
- Preserve existing light-mode primary button colors.
- Preserve existing dark-mode primary text, badge, ring, and link colors.
- Keep the existing banner navy tokens unchanged.

## Out of scope
- Redesigning buttons.
- Changing banner gradients.
- Changing route content, sitemap, robots, redirects, or metadata.

## Acceptance criteria
1. Dark-mode primary CTA buttons use the same value as dark-mode `--banner-blue-start`.
2. Dark-mode primary CTA button text is white.
3. Light-mode primary button color remains unchanged.
4. Non-button `text-primary`, badges, rings, and links keep the existing dark-mode primary token.
5. `lint` and `build` pass.

## Definition of done
- Dark-mode CTA styling is scoped to primary CTA buttons.
- Story documentation is added.
- Local `lint` and `build` pass.
