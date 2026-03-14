# Design System Catalog

This document catalogs the current design language and reusable UI patterns in this repository.

## 1. Design language

### Visual direction
- Premium minimal, dark-first canvas.
- High-contrast typography with warm accent highlights.
- Card-driven information architecture with lightweight borders and depth.

### Core tokens (`app/globals.css`)
- Color tokens:
  - `--background`, `--foreground`
  - `--card`, `--card-foreground`
  - `--primary`, `--primary-foreground`
  - `--secondary`, `--secondary-foreground`
  - `--muted`, `--muted-foreground`
  - `--accent`, `--accent-foreground`
  - `--destructive`, `--destructive-foreground`
  - `--border`, `--input`, `--ring`
- Shape tokens:
  - `--radius` with derived Tailwind radius values.
- Atmosphere/elevation:
  - `--gradient-accent`
  - `--shadow-glow`
  - `--surface-elevated`, `--text-tertiary`

### Typography
- Sans: `Inter`
- Mono: `JetBrains Mono`
- Mono used for metadata labels, status tags, and micro UI copy.

### Motion and accessibility
- Scroll behavior and reduced-motion safety rules are defined globally.
- Focus-visible ring is standardized (`outline-primary`).
- Component-level motion uses Framer Motion for subtle transitions (entry, hover, tap).

## 2. Layout architecture

### Shell
- `components/site/layout/PageLayout.tsx`
  - Fixed header, content area, footer.
- `components/site/layout/Header.tsx`
  - Responsive nav with active route states and mobile drawer.
- `components/site/layout/Footer.tsx`
  - Compact utility nav and copyright.

### Section framing
- `components/site/SectionShell.tsx`
  - Reusable section wrapper with reveal animation.
- Section primitives:
  - `SectionLabel`, `SectionHeading`, `SectionDescription`.

## 3. Foundation components (`components/site`)

### Content and structure
- `ContentCard`: neutral card wrapper with optional hover lift.
- `TagList`: compact metadata tags.
- `MetricsStrip`: compact KPI strip for portfolio/case studies.
- `Timeline`, `ExperienceTimeline`: chronological storytelling blocks.
- `QuoteBlock`: testimonial/quote emphasis.
- `ImageGallery`: image placeholders/gallery tiles.

### Portfolio and case study
- `ProjectCard`, `ProjectGrid`
- `CaseStudyHero`
- `CaseStudySection`

### Blog
- `BlogCard`, `BlogGrid`
- `ReadingProgressBar`

### Contact and conversion
- `CallToAction`
- `ContactForm`
- `ContactReasons`
- `SocialLinks`
- `DownloadButton`

### Capability and narrative blocks
- `FeatureCard`, `FeatureGrid`
- `SkillGrid`
- `ImpactStats`
- `AIWorkflowCards`

### Interactive assistant UX
- `AIWorkspace`
- `PromptExamples`
- `StatusIndicator`

## 4. AI UX pattern catalog (`components/ai`)

These patterns represent AI-first interactions beyond chat:

1. `AISuggestionChips`
   - Context-aware quick actions for intent acceleration.
2. `AIInsightHighlight`
   - High-salience extracted insight callout.
3. `AIGuidedNavigator`
   - Guided anchors/navigation for long-form workflows.
4. `AISummaryPanel`
   - AI-generated summary + key bullet extraction.
5. `AIThinkingPrompts`
   - Reflection and analysis prompts.
6. `AIWorkflowHelper`
   - Input/output framing for workflow-stage assistance.
7. `AIInsightsPanel`
   - Multi-card insights/pattern synthesis.
8. `AIPatternExplorer`
   - Interactive pattern chooser with usage rationale.
9. `AIInlineActions`
   - Micro-actions embedded in context for immediate next steps.

## 5. Pattern usage map by page

### Home (`app/page.tsx`)
- Hero + trust strip
- Project and blog previews
- Feature grid
- Workflow and impact narrative
- CTA block

### Portfolio index (`app/portfolio/page.tsx`)
- `ProjectGrid`
- AI patterns:
  - `AIGuidedNavigator`
  - `AIInsightsPanel`

### Case study (`app/portfolio/[slug]/page.tsx`)
- `CaseStudyHero` + section narrative
- AI patterns:
  - `AISummaryPanel`
  - `AIGuidedNavigator`
  - `AISuggestionChips`
  - `AIWorkflowHelper`
  - `AIInsightHighlight`
  - `AIInlineActions`

### Blog index (`app/blog/page.tsx`)
- `BlogGrid`
- AI patterns:
  - `AISuggestionChips`
  - `AIInsightsPanel`

### Blog post (`app/blog/[slug]/page.tsx`)
- Hero metadata + thumbnail + article sections
- `ReadingProgressBar`
- AI patterns:
  - `AISummaryPanel`
  - `AIInsightHighlight`
  - `AIThinkingPrompts`
  - `AIInlineActions`

### Circle (`app/circle/page.tsx`)
- Prompt playground + AI workflow education
- AI patterns:
  - `AISuggestionChips`
  - `AIWorkflowHelper`
  - `AIPatternExplorer`

### Resume (`app/resume/page.tsx`)
- Impact, achievements, timeline, skill and education grids.

### Contact (`app/contact/page.tsx`)
- Reasons list, contact form, social actions.

## 6. Data and content model

### Content/data modules (`data/*`)
- `projects.ts`: portfolio and case-study data.
- `blog.ts`: live blog content, metadata, thumbnails, slug resolution.
- `skills.ts`: capability categories and impact stats.
- `experience.ts`: profile, timeline, achievements, education.
- `site.ts`: home/circle/contact UX copy and prompt seeds.

### Blog URL compatibility
- Canonical in-app post route: `/blog/[slug]`.
- Legacy compatibility route: `/post/[slug]` -> redirects to canonical slug.
- Legacy slug map is handled in `data/blog.ts` (`resolveBlogSlug`).

## 7. Styling and implementation conventions

- Use existing tokens and utility classes; avoid ad-hoc colors.
- Prefer `rounded-xl`, border-based hierarchy, and muted backgrounds for secondary blocks.
- Metadata uses mono + uppercase micro labels.
- Keep hover/motion subtle and purposeful.
- New patterns should compose into existing section/card architecture before adding new layout primitives.
