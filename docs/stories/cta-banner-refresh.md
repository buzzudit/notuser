# CTA banner refresh for homepage and shared callouts

## Summary
Redesign the homepage blue conversation banner and the matching CTA banners used on other pages so they feel more intentional, premium, and visually layered while staying inside the current notuser palette and typography system.

## Problem
The current CTA banners communicate the right message, but the visual treatment is too flat and generic. The homepage blue banner and the other callout sections do not feel distinctive enough for the rest of the site's visual language.

## Desired outcome
The homepage CTA and the shared CTA banners on other pages should use a stronger, gradient-driven composition with subtle structure, better hierarchy, and more deliberate action styling while preserving the site's existing blue family, fonts, and overall tone.

## In scope
- Redesign the homepage conversation banner near the bottom of `/`.
- Apply the same visual language to the shared CTA banners used on other pages.
- Keep the redesign within the existing blue theme neighborhood and current font stack.
- Improve action hierarchy so the primary CTA is clearly strongest and secondary actions remain readable.
- Preserve responsive behavior across mobile and desktop.

## Out of scope
- Rewriting the broader page layout around the banners.
- Introducing a new brand palette or font family.
- Changing role-intent context banners that serve a different purpose.
- Adding motion-heavy effects or dependencies.

## Acceptance criteria
1. The homepage blue banner uses a more layered, premium visual treatment inspired by the reference direction.
2. Shared CTA banners on the other pages adopt the same visual system for consistency.
3. The redesign stays in the neighborhood of the existing site blues and uses the current site fonts.
4. CTA hierarchy is clear across primary, secondary, and optional tertiary actions.
5. Banners remain readable and responsive across breakpoints.
6. No layout regressions are introduced in the sections that host these banners.
7. `lint` and `build` pass.

## Definition of done
- A reusable CTA/banner component carries the refreshed styling.
- Homepage CTA uses the shared component instead of a one-off block.
- Blog, portfolio, and circle CTA sections inherit the refreshed treatment.
- Story documentation is added.
- Local `lint` and `build` pass.
