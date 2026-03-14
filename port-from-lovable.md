# Porting Guide: Lovable -> notuser Next.js Architecture

This document captures the proven process used to port a Lovable React+Vite UI into this repo's Next.js App Router architecture.

Use this as an execution playbook for future Lovable screens/components.

## 1. Goals and constraints

- Keep backend behavior unchanged (`app/api/*`, Prisma, DB schema).
- Port UI only.
- Preserve route slugs unless explicitly changed.
- Make code production-deployable on Railway.

## 2. Source and target architecture

### Typical Lovable source

- Vite + React Router
- `src/pages/*`
- `src/components/*`
- `src/data/*`
- `src/services/*`
- Tailwind + shadcn-style utilities/components

### Target in this repo

- Next.js App Router pages in `app/**/page.tsx`
- Shared UI in `components/site/*`
- Content/navigation/API wrappers in `lib/site/*`
- Styling in `app/globals.css` + Tailwind config

## 3. Mapping rules (repeatable)

### Routes

- `src/pages/Index.tsx` -> `app/page.tsx`
- `src/pages/<Name>.tsx` -> `app/<slug>/page.tsx`
- `src/pages/NotFound.tsx` -> `app/not-found.tsx`

### Navigation

- Replace `react-router-dom`:
  - `Link` -> `next/link`
  - `useLocation()` -> `usePathname()` from `next/navigation`
  - Router definitions removed (file-system routing handles this)

### Data and services

- Move static content to `lib/site/content.ts`.
- Move nav model to `lib/site/navigation.ts`.
- Keep API wrapper in `lib/site/api.ts`.
- Keep endpoint assumptions close to service types.

### Components

- Route-independent UI goes under `components/site/*`.
- Components using hooks/animations/events must include `"use client"`.
- Prefer thin page files that compose shared components.

## 4. Client/server boundaries

Use `"use client"` when component/page needs:
- `useState`, `useEffect`, or browser APIs
- `framer-motion`
- `next/navigation` client hooks
- toast notifications (`sonner`)

Server components can remain default for static-only pages/components.

## 5. Tailwind setup required in this repo

Required files:
- `tailwind.config.ts`
- `postcss.config.mjs`
- `app/globals.css` with:
  - `@tailwind base; @tailwind components; @tailwind utilities;`
  - design tokens and base styles

Required deps:
- `tailwindcss`
- `postcss`
- `autoprefixer`
- plus UI deps used by imported components (`framer-motion`, `lucide-react`, `sonner`, etc.)

## 6. API contract policy (do not drift)

Only use existing endpoints unless explicitly approved:
- `GET /api/health`
- `GET /api/db-test`
- `GET /api/messages`
- `POST /api/messages`

Do not introduce:
- new backend endpoints
- auth coupling
- Prisma schema changes

## 7. Porting workflow (step-by-step)

1. Clone/open Lovable output and inspect:
   - `src/pages`, `src/components`, `src/data`, `src/services`, `src/index.css`
2. Extract only needed pieces (avoid importing entire shadcn trees by default).
3. Set up/verify Tailwind and global tokens in target repo.
4. Port shared layout/components first (`Header`, `Footer`, `PageLayout`, primitives).
5. Port data/service modules.
6. Port each page route into `app/<slug>/page.tsx`.
7. Replace router APIs (`react-router-dom`) with Next equivalents.
8. Run `npm run lint`.
9. Run `npm run build` with `DATABASE_URL` set locally if needed.
10. Deploy via Railway (`railway up`) and smoke test.

## 8. Production readiness checklist

- `npm run lint` passes.
- `npm run build` passes.
- All required routes return 200.
- `/api/health` returns `ok: true` in production.
- No backend/API route changes unless intentionally requested.
- Commit pushed to `main` after successful deploy.

## 9. Known pitfalls and fixes

### Build fails: missing `DATABASE_URL`

Cause:
- Prisma config requires `DATABASE_URL` at build time.

Fix:
- Set env before local build, e.g. in PowerShell:
  - `$env:DATABASE_URL='postgresql://user:pass@localhost:5432/db'; npm run build`

### SWC warning: version mismatch

Observed warning:
- `@next/swc-win32-x64-msvc` may lag patch version vs `next`.

Impact:
- Warning only in current setup; build/deploy still succeeds.

Action:
- Monitor in dependency updates; do not block UI port on this warning.

### Git index lock from parallel git commands

Cause:
- Running `git add` and `git commit` in parallel.

Fix:
- Run git mutation commands sequentially.

## 10. Recommended conventions for future ports

- Keep new shared UI inside `components/site/` unless creating a clearly separate domain.
- Keep placeholders explicit (`TODO_CONTENT_*`) to decouple structure from copy.
- Keep API usage centralized in `lib/site/api.ts`.
- Avoid importing unused generated UI kits; port minimal, needed components only.
- Validate on Railway after each significant UI milestone, not just locally.

