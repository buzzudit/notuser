# Personalization disclosure page and footer link

## Summary
Add a lightweight disclosure page that explains how `ukr` personalization works, and link to it from the footer as a low-emphasis tertiary link.

## Problem
The site now supports hiring-intent personalization through `ukr` links and a first-party cookie, but visitors do not yet have a simple, visible explanation of what is happening or how to opt out.

## Desired outcome
Visitors can open `/about-personalization` from the footer and quickly understand how the personalization works, what is stored, how long it lasts, what it is used for, and what it does not do.

## In scope
- New indexable route at `/about-personalization`.
- Plain-language explanation of `ukr` links and the first-party cookie.
- Disclosure of stored context, 60-day duration, on-site-only purpose, and no third-party sharing or cross-site tracking.
- Simple opt-out guidance via clearing cookies.
- Footer link labeled `About personalization` placed after the rights text.

## Out of scope
- Cookie banner or consent modal.
- Preference center or granular controls.
- Tracking, analytics, or advertising changes.
- Localization.

## Acceptance criteria
1. Footer shows `All rights reserved.` followed by an `About personalization` link.
2. Clicking the link opens `/about-personalization`.
3. The page explains how `ukr` links work, that a first-party cookie is set, what data is stored, that it lasts 60 days, and that it is used only for on-site personalization.
4. The page clearly states there is no third-party sharing or cross-site tracking.
5. The page explains how to opt out by clearing cookies.
6. The page is indexable and uses accessible, semantic structure.
7. Footer styling remains visually consistent and low-emphasis.
8. `lint` and `build` pass.

## Definition of done
- Disclosure page is implemented and uses the site layout.
- Footer tertiary link is added without visual regression.
- Copy is simple, clear, and aligned with the site voice.
- Local `lint` and `build` pass.
