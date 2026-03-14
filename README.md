# notuser-hello-world

Production-first boilerplate for a personal site using:
- Next.js (App Router) + TypeScript
- PostgreSQL on Railway
- Prisma ORM + migrations + seed
- GitHub -> Railway deployment

This repo is adapted from the official Railway starter:
- `prisma/official-prisma-railway`

## What You Get

- Home page with:
  - `Hello, Udit`
  - `App is running`
  - DB connectivity status
  - row count + latest record text
  - form button to insert a test record
- Health endpoint: `/api/health`
- DB test endpoint: `/api/db-test`
- Simple message API: `/api/messages`
- Prisma migration files committed
- Seed script that inserts `Hello from Railway DB`

## Environment Variables

Create `.env` locally from `.env.example`.

Required:
- `DATABASE_URL` - PostgreSQL connection string

Optional:
- `APP_NAME` - defaults to `notuser-hello-world`

## Local Setup (Zero to Running)

1. Install deps:
```bash
npm install
```

2. Create local env file:
```bash
# macOS/Linux
cp .env.example .env

# Windows (PowerShell)
Copy-Item .env.example .env
```

3. Put your Postgres URL in `.env`:
```bash
DATABASE_URL="postgresql://..."
APP_NAME="notuser-hello-world"
```

4. Generate Prisma client:
```bash
npm run prisma:generate
```

5. Apply committed migrations (same behavior as production):
```bash
npm run migrate:deploy
```

6. Seed DB:
```bash
npm run seed
```

7. Start app:
```bash
npm run dev
```

Open `http://localhost:3000`.

If you later change the Prisma schema and want to create a new migration locally:
```bash
npm run migrate:dev -- --name your_change_name
```

## Railway Deployment (GitHub Integration)

### Services to create

- 1 web service from this repo (`notuser-hello-world`)
- 1 Railway Postgres service in the same project

### Step-by-step

1. Create GitHub repo named `notuser-hello-world`.
2. Push this code to `main`.
3. In Railway, click **New Project** -> **Deploy from GitHub repo**.
4. Select the `notuser-hello-world` repo.
5. In the same Railway project, click **New** -> **Database** -> **PostgreSQL**.
6. Open your web service -> **Variables**.
7. Add:
   - `DATABASE_URL` = reference the Postgres service `DATABASE_URL` variable
   - `APP_NAME` = `notuser-hello-world`
8. Confirm build/start commands:
   - Build: `npm run build`
   - Start: `npm run start`
9. Trigger a deploy (push commit or click redeploy).

## Why This Deploy Is Reliable

- Build command runs:
  1. `prisma generate`
  2. `prisma migrate deploy`
  3. `next build`
- Runtime only runs `next start`
- No hidden postinstall DB provisioning
- Everything is env-driven and explicit

## Production Verification Checklist

After deploy succeeds:

1. Open site URL and confirm:
   - headline shows `Hello, Udit`
   - status shows `App is running`
2. Confirm health endpoint:
   - `GET /api/health` returns `ok: true`
3. Confirm DB endpoint:
   - `GET /api/db-test` returns `ok: true` and row count
4. On home page, add a test message and submit.
5. Refresh page and confirm:
   - row count increased
   - latest record text matches your inserted message
6. Re-open app URL after a minute and confirm data persisted.

## Common Failure Points and Fixes

- Build fails with DB connection error:
  - Ensure web service has `DATABASE_URL` from Railway Postgres.
- Runtime works but DB endpoints fail:
  - Recheck `DATABASE_URL` reference was set on the web service, not locally only.
- Prisma client errors in build:
  - Ensure `npm run build` is used (includes `prisma generate`).
- Migration conflicts:
  - If reusing an old database, inspect `_prisma_migrations` and run a clean database for first deployment.
