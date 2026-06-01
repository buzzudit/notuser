# Lovable Prompt: AI-First notuser.com UI (Vite-First, Next-Portable)

Copy everything below into Lovable:

```text
Build a premium-minimal, AI-first multi-page UI for notuser.com.

Important context:
- You can generate React + Vite style output, but this must be portable into an existing Next.js App Router codebase with minimal disruption.
- Treat this as front-end only. Do NOT generate backend/database/auth systems.
- Existing backend endpoints already exist and must be reused exactly as-is.

Primary objective:
- Produce a production-quality UI architecture and components that can be migrated route-by-route into Next.js `app/` without rewriting component logic.

Route requirements (preserve exact public slugs):
1) `/`
2) `/resume`
3) `/portfolio`
4) `/blog`
5) `/contact`
6) `/circle`

Visual direction:
- Premium minimal (clean, refined, conversion-oriented, high readability).
- Avoid flashy/neon sci-fi aesthetics.
- Use restrained motion and subtle interaction polish.

AI-first UX requirements across routes:
- Clear primary AI workspace entry (hero-level CTA and contextual entry points).
- Guided prompt starters and example workflows.
- Trust/status indicators (system reliability, response quality cues, proof points).
- Proof sections: portfolio/blog/case-outcome style credibility content.
- Conversion-oriented contact flow with clear next step.
- If content is unknown, use clearly marked placeholders like `TODO_CONTENT_*`.

Build process (must happen in this order in one run):
Phase 1: Information architecture and route scaffolding.
Phase 2: Shared design tokens + reusable component system.
Phase 3: Page implementations + responsive and accessibility polish.
Phase 4: Portability report with explicit Next.js migration map.

Code architecture (strict):
- TypeScript throughout.
- Use this separation:
  - `pages/` = route-level containers
  - `components/` = reusable UI units
  - `data/` = static content/config
  - `services/` = API calls only
- Keep API calls behind a small fetch wrapper layer in `services/`.
- Keep business logic out of page files where possible.

API integration constraints (strict):
- Use only these endpoints:
  - `GET /api/health`
  - `GET /api/db-test`
  - `GET /api/messages`
  - `POST /api/messages`
- Document response-shape assumptions inline near the service types.
- No extra endpoints.
- No schema mutations.
- No auth coupling.

Known response assumptions to encode in service types:
- `GET /api/health` -> `{ ok: boolean; appName: string; environment: string }`
- `GET /api/db-test` success -> `{ ok: true; totalCount: number; latestMessage: string | null }`
- `GET /api/db-test` failure -> `{ ok: false; error: string }`
- `GET /api/messages` -> `Array<{ id: number; message: string; createdAt: string }>`
- `POST /api/messages` success -> `{ id: number; message: string; createdAt: string }`
- `POST /api/messages` failure -> `{ ok: false; error: string }`

Portability constraints (critical):
- Avoid Vite lock-in beyond bootstrap files.
- Do NOT rely on Vite-only patterns in reusable app code (for example `import.meta.glob` app-wide assumptions).
- Keep routing/page logic easy to remap to Next `app/<segment>/page.tsx`.
- Keep styling portable:
  - Tailwind and/or lightweight component primitives are allowed.
  - Avoid hard coupling to tooling-specific runtime behavior.
- No global state approach that depends on Vite plugin magic.

Accessibility + responsive requirements:
- Semantic landmarks, proper heading hierarchy, keyboard navigability, visible focus states.
- Mobile-first behavior for all routes.
- Respect reduced-motion preferences.

Required final deliverables format:
1) Short architecture summary.
2) File tree.
3) Implemented code for routes, shared components, data, services, and styles.
4) Dependency list (explicit).
5) Verification checklist showing:
   - all 6 required routes implemented,
   - all API usage only through `services/`,
   - accessibility and responsive checks completed.
6) A final **Next.js Port Map** table with columns:
   - `Vite file`
   - `Target Next.js file`
   - `Why mapping is safe`
   - `Any adaptation needed`

Next.js Port Map requirements:
- Map route files to:
  - `/` -> `app/page.tsx`
  - `/resume` -> `app/resume/page.tsx`
  - `/portfolio` -> `app/portfolio/page.tsx`
  - `/blog` -> `app/blog/page.tsx`
  - `/contact` -> `app/contact/page.tsx`
  - `/circle` -> `app/circle/page.tsx`
- Map shared styles/tokens to `app/globals.css` and component-level styles.
- Map service layer as reusable in Next client components with minimal/no changes.
- Explicitly call out navigation/state assumptions and required adaptation steps.

Quality bar:
- This should look intentional, modern, and conversion-ready.
- Avoid generic template feel.
- Keep component interfaces clean and migration-friendly.
```
