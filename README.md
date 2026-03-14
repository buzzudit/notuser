# notuser

Minimal, production-first starter for GitHub + Railway:
- Next.js (TypeScript, App Router)
- PostgreSQL
- Prisma ORM (migration + seed)

Live deployment:
- https://notuser-production.up.railway.app

## App behavior

Home page shows:
- `Hello, Udit`
- `App is running`
- database row count and latest message
- form to insert a message

Endpoints:
- `/api/health`
- `/api/db-test`
- `/api/messages`

## Environment variables

Required:
- `DATABASE_URL`

Optional:
- `APP_NAME` (default: `notuser`)

See `.env.example`.

## Local setup

1. Install dependencies:
```bash
npm install
```

2. Create env file:
```bash
# macOS/Linux
cp .env.example .env

# Windows PowerShell
Copy-Item .env.example .env
```

3. Set values in `.env`:
```bash
DATABASE_URL="postgresql://..."
APP_NAME="notuser"
```

4. Apply committed migrations:
```bash
npm run migrate:deploy
```

5. Seed database:
```bash
npm run seed
```

6. Run app:
```bash
npm run dev
```

## Railway deploy

1. Push this repo to GitHub.
2. In Railway: `New Project` -> `Deploy from GitHub Repo`.
3. Add PostgreSQL service in the same Railway project.
4. In web service variables set:
   - `DATABASE_URL` = reference Postgres `DATABASE_URL`
   - `APP_NAME` = `notuser`
5. Deploy with:
   - Build command: `npm run build`
   - Start command: `npm run start`

Current scripts:
- `build`: `prisma generate && next build`
- `start`: `prisma migrate deploy && next start`

This avoids build-time DB connectivity failures and runs migrations when the service starts in Railway's runtime network.

## Verify production

1. Open `/` and confirm headline/status render.
2. Open `/api/health` and confirm `ok: true`.
3. Open `/api/db-test` and confirm DB connectivity.
4. Insert a message from `/` and verify row count/latest message update.
