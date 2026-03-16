# AGENTS.md

## Working Preference
- Follow Spec-Driven Development (SDD) for product and content work in this repo.

## SDD Expectations
- Start from a clear story spec before implementation.
- Keep scope, acceptance criteria, and definition of done explicit for each meaningful change.
- Use the Linear "SDD Story Template" for every new or updated story: https://linear.app/buzzudit/document/sdd-story-template-2d5b4fa02ad7
- Prefer tightening the spec first when a request is ambiguous, especially for homepage messaging, portfolio positioning, blog presentation, and release work.
- Implement against the agreed spec rather than improvising net-new product direction.
- Preserve the existing visual language unless a spec explicitly calls for broader design change.

## Delivery
- Reuse existing components, data structures, and styling patterns where possible.
- Keep changes production-ready, responsive, and maintainable.
- Validate work locally with `lint` and `build` before considering a story complete.
- Use repo-native PDF extraction support for appraisal/doc review when needed: `npm run pdf:extract` (optionally `npm run pdf:extract -- <inputPath> <outputPath>`).
- Do not deploy with Athena Artifactory.
- When suggesting possible next steps near the end of a response, include one recommended next step and why.
- When suggesting a next step near the end of a response, also recommend which model is most appropriate for that step.
