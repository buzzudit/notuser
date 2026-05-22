# Home mobile hero and AI Briefing spacing

## Summary
Adjust the homepage mobile hero so the portrait has stronger presence and the hero and AI Briefing sections have proper vertical breathing room.

## Problem
On mobile, the profile portrait is capped too small, the hero CTA row sits too close to the bottom of the first section, and the AI Briefing banner starts too close to the top of the second section. Desktop spacing is intentional and should remain unchanged.

## Desired outcome
The homepage mobile hero shows a larger portrait, the first section has breathing room after the CTAs, and the second section has breathing room before AI Briefing. Desktop layout and spacing stay unchanged.

## In scope
- Increase the mobile hero portrait size.
- Add mobile-only bottom padding after the hero CTAs.
- Add mobile-only top padding before the homepage AI Briefing banner.
- Preserve existing copy, routes, components, colors, and desktop layout.

## Out of scope
- Redesigning the homepage hero.
- Changing desktop hero image sizing or section spacing.
- Changing AI Briefing behavior or content.
- Changing SEO, sitemap, robots, redirects, or metadata.

## Acceptance criteria
1. The homepage profile portrait is larger on mobile.
2. The first section has visible breathing room after the CTA row on mobile.
3. The second section has visible breathing room before AI Briefing on mobile.
4. Desktop hero image and AI Briefing spacing remain unchanged at `md` and above.
5. Existing visual language and component structure are preserved.
6. `lint` and `build` pass.

## Definition of done
- Homepage mobile-only classes are updated.
- Story documentation is added.
- Local `lint` and `build` pass.
