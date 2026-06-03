# Add Lab Idea Pages

Status: done
Area: site-content
Owner: Udit Khandelwal
Test Level: Level 2 - low-risk public site content change with lint and build verification

## Story

As a portfolio visitor, I want to explore more lab idea pages so I can understand the product bets, experiments, and lessons behind Udit's AI workflow practice.

## Scope

Add four new idea entries under `/lab`:

- AI-DLC Navigator
- Automat
- Multi-Agent
- Speclite

## Acceptance Criteria

- `/lab` lists the four new ideas alongside the existing Bithub idea.
- `/lab/ai-dlc-navigator`, `/lab/automat`, `/lab/multi-agent`, and `/lab/speclite` render through the existing lab detail route.
- Each idea includes complete lab content for context, hypothesis, experiment frame, result, learning, tested assumptions, features, signals, next questions, metrics, tags, source URL, and thumbnail.
- Public metadata and sitemap entries are covered by the existing `trials` data flow.
- New thumbnails follow the existing lab asset pattern and render in card and detail views.

## Spec Delta

### Added

- Four public lab idea pages backed by `data/trials.ts`.
- Four lab thumbnail assets under `public/images/lab/`.
- This local Markdown story for later Linear migration while Linear is unavailable.

### Changed

- The lab index content set expands from one idea to five ideas.

### Removed

- Nothing.

## Definition of Done

- Content is implemented using the existing lab data model and components.
- No unrelated user changes are reverted.
- `npm run lint` passes.
- `npm run build` passes or any blocker is recorded with fallback evidence.

## Done Evidence

- Added four new trial entries in `data/trials.ts`: `ai-dlc-navigator`, `automat`, `multi-agent`, and `speclite`.
- Added four matching SVG thumbnails in `public/images/lab/`.
- Replaced the repeated lab learning graphic sentence with per-idea `learningSignal` content.
- Verified `/lab/[slug]` static generation via `npm run build`; build output listed `/lab/ai-dlc-navigator`, `/lab/automat`, and two additional lab paths beyond Bithub.
- Ran `npm run lint` successfully after the initial content add and after the learning-signal refinement.
- Ran `npm run build` successfully after the initial content add and after the learning-signal refinement.
- Residual risk: build reports an existing Next.js workspace-root warning because both `/Users/ukhandelwal/CascadeProjects/package-lock.json` and `/Users/ukhandelwal/CascadeProjects/notuser/package-lock.json` exist. The warning did not block compilation.
