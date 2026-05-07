# AI banner refresh across shared AI surfaces

## Summary
Apply the refreshed blue banner visual language to the site's AI-facing sections so AI Briefing and the related AI helper areas feel consistent with the newer CTA treatment.

## Problem
The AI sections still use older neutral card treatments, so the visual system now splits between upgraded CTA banners and plain AI cards. That weakens consistency and makes the AI surfaces feel less intentional.

## Desired outcome
All major AI helper sections should use a shared banner treatment that feels related to the new CTA banners while still keeping the workspace readable and usable.

## Spec delta
- Darken the shared blue AI banner gradient to improve contrast with white text.
- Increase white text opacity for banner descriptions, helper text, suggestions, loading states, and AI response labels.
- Keep the same shared banner component and page placements.
- Move the shared banner gradient, overlays, and section wash into named CSS tokens/classes so AI and CTA banners use the same source of truth.
- Align the site primary blue token with the shared banner blue instead of keeping the older pale blue primary color.
- Keep the hydrated theme provider aligned with those tokens so runtime theme application does not undo the global CSS.
- Keep dark mode explicitly covered with accessible primary/accent foregrounds.
- Use separate banner-blue tokens so dark-mode AI banners can use a navy gradient without making primary controls too dark.
- Render generated AI answer links as white inside banner-tone AI workspaces so light-mode banners do not inherit primary-blue links.

## In scope
- Refresh the homepage AI Briefing section.
- Apply the same banner system to the major AI helper surfaces on blog, resume, portfolio, case-study detail, blog detail, and circle.
- Update the AI workspace styling as needed for readability inside banner contexts.
- Keep the redesign within the existing palette and typography.

## Out of scope
- Rewriting AI prompts or response behavior.
- Changing the role-intent context banners.
- Introducing new AI capabilities or data sources.

## Acceptance criteria
1. AI Briefing on the homepage uses the refreshed banner style.
2. Other major AI helper sections use the same visual system for consistency.
3. Inputs, helper text, suggestions, and AI responses remain readable inside the new banner treatment.
4. Layouts remain responsive across desktop and mobile.
5. `lint` and `build` pass.
6. The shared AI banner gradient is dark enough that white banner text has stronger contrast than the previous light-blue treatment.
7. AI banners and shared CTA banners use the same tokenized blue banner visual system.
8. Runtime theme hydration preserves the shared banner and primary blue tokens in both light and dark mode.
9. In dark mode, AI banners render with a navy background gradient.
10. Links inside AI banner responses render white with a visible underline.

## Definition of done
- A reusable AI banner wrapper exists.
- Shared AI sections use the wrapper instead of plain neutral cards.
- AIWorkspace supports the banner context cleanly.
- Story documentation is added.
- Local `lint` and `build` pass.
