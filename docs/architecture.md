# notuser Architecture (Current)

## 1. System overview

`notuser` is a **Next.js App Router** application with:
- UI-first multi-page frontend (ported from Lovable output)
- Existing Prisma + PostgreSQL backend access via Next route handlers
- Railway production deployment

Current architecture intentionally keeps backend behavior stable while replacing the site UI layer.

## 2. Runtime stack

- Framework: Next.js 15 (App Router, TypeScript)
- UI: React 19, Tailwind CSS, Framer Motion, Lucide, Sonner
- Data layer: Prisma Client + PostgreSQL
- Hosting: Railway

## 3. Top-level structure

- `app/`
  - Route pages and API route handlers
- `components/site/`
  - Reusable site UI primitives and layout
- `lib/site/`
  - Site content, navigation config, API service wrappers
- `lib/prisma.ts`
  - Prisma client singleton
- `prisma/`
  - Schema and migrations

## 4. Routing model

### UI routes (App Router pages)

- `/` -> `app/page.tsx`
- `/resume` -> `app/resume/page.tsx`
- `/portfolio` -> `app/portfolio/page.tsx`
- `/blog` -> `app/blog/page.tsx`
- `/contact` -> `app/contact/page.tsx`
- `/circle` -> `app/circle/page.tsx`
- Fallback -> `app/not-found.tsx`

### API routes (preserved backend contract)

- `GET /api/health` -> `app/api/health/route.ts`
- `GET /api/db-test` -> `app/api/db-test/route.ts`
- `GET /api/messages`, `POST /api/messages` -> `app/api/messages/route.ts`

## 5. UI composition

### Layout

- `app/layout.tsx` imports global styles and mounts `Providers`.
- `components/site/layout/PageLayout.tsx` wraps each page with:
  - `Header`
  - route body (`main`)
  - `Footer`

### Shared UI

- `AIWorkspace`: prompt input and starter actions
- `StatusIndicator`: checks `/api/health` client-side
- `SectionShell`, `ContentCard`: reusable section/card primitives

### Content and nav config

- `lib/site/content.ts`: placeholder content and section data
- `lib/site/navigation.ts`: canonical nav items for header/footer

## 6. Data flow

### Frontend service layer

`lib/site/api.ts` is the UI-only fetch wrapper and the single client API boundary:
- `api.getHealth()`
- `api.getDbTest()`
- `api.getMessages()`
- `api.postMessage(message)`

This keeps UI code portable and prevents endpoint calls from being scattered across components.

### Backend flow

API route handlers call Prisma (`lib/prisma.ts`) which uses `DATABASE_URL` and PostgreSQL.

## 7. Styling system

- Tailwind enabled via `tailwind.config.ts` + `postcss.config.mjs`
- Global theme tokens and base rules in `app/globals.css`
- Motion and micro-interactions handled with Framer Motion in client components

## 8. Deployment architecture (Railway)

- Project: `notuser`
- Environment: `production`
- Service: `notuser`
- Public URL: `https://notuser-production.up.railway.app`

Build/start scripts:
- `build`: `prisma generate && next build`
- `start`: `prisma migrate deploy && next start`

Required env:
- `DATABASE_URL`
- `APP_NAME` (optional default available)

## 9. Operational notes

- UI pages are mostly client components due to motion/interactivity.
- API/backend contract is unchanged from the pre-port architecture.
- Content is placeholder-heavy by design and should be replaced incrementally without structural refactors.
- The architecture supports route-by-route UX/content iteration while keeping deploy behavior stable.
