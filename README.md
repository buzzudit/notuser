Here is a **clean corrected README** using the repo name **`notuser`** instead of `notuser-hello-world`. I also simplified a few sections and removed references that could confuse deployment.

---

# notuser

Production-first boilerplate for my personal site using:

* Next.js (App Router) + TypeScript
* PostgreSQL on Railway
* Prisma ORM with migrations and seed
* GitHub → Railway deployment pipeline

This project is adapted from the official Railway starter:

`prisma/official-prisma-railway`

The purpose of this repo is to establish a **working production pipeline before real development begins**.

---

# What This App Does

The app intentionally stays simple to verify infrastructure.

Home page shows:

* **Hello, Udit**
* **App is running**
* Database connectivity section
* Total row count
* Latest record text
* Form to insert a test record

API endpoints included:

```
/api/health
/api/db-test
/api/messages
```

The database contains a simple `Message` table seeded with:

```
Hello from Railway DB
```

---

# Environment Variables

Create `.env` locally from `.env.example`.

Required:

```
DATABASE_URL
```

Optional:

```
APP_NAME=notuser
```

---

# Local Setup

### 1 Install dependencies

```
npm install
```

### 2 Create env file

macOS / Linux

```
cp .env.example .env
```

Windows PowerShell

```
Copy-Item .env.example .env
```

### 3 Configure database

Edit `.env`:

```
DATABASE_URL="postgresql://..."
APP_NAME="notuser"
```

---

### 4 Generate Prisma client

```
npm run prisma:generate
```

---

### 5 Apply migrations

```
npm run migrate:deploy
```

---

### 6 Seed database

```
npm run seed
```

---

### 7 Start development server

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

### Creating future migrations

If the Prisma schema changes:

```
npm run migrate:dev -- --name change_name
```

---

# Railway Deployment

This repository is intended to deploy through **GitHub → Railway integration**.

## Services required

Inside one Railway project create:

```
1 Web service (this repo)
1 PostgreSQL database
```

---

# Deployment Steps

### 1 Push repository to GitHub

Repo name:

```
notuser
```

Push your local project.

---

### 2 Create Railway project

In Railway:

```
New Project
Deploy from GitHub Repo
```

Select:

```
notuser
```

---

### 3 Add PostgreSQL

Inside the same Railway project:

```
New → Database → PostgreSQL
```

---

### 4 Configure environment variables

Open the web service → **Variables**

Add:

```
DATABASE_URL = reference the Railway Postgres DATABASE_URL
APP_NAME = notuser
```

---

### 5 Confirm build settings

Railway should use:

Build

```
npm run build
```

Start

```
npm run start
```

---

### 6 Deploy

Push a commit or click **Redeploy**.

Railway will:

1. Install dependencies
2. Run `prisma generate`
3. Run `prisma migrate deploy`
4. Build Next.js
5. Start the app

---

# Production Verification

After deployment:

### Check the app

Open the Railway URL.

Confirm:

```
Hello, Udit
App is running
```

---

### Health endpoint

```
GET /api/health
```

Should return:

```
{ ok: true }
```

---

### Database endpoint

```
GET /api/db-test
```

Should return:

* ok: true
* row count
* latest message

---

### Insert record test

On the home page:

1. Enter a test message
2. Submit
3. Confirm:

   * row count increases
   * latest message updates

Refresh the page to confirm persistence.

---

# Why This Setup Is Reliable

The build process performs:

```
prisma generate
prisma migrate deploy
next build
```

Runtime only runs:

```
next start
```

There are:

* no hidden DB provisioning scripts
* no runtime migrations
* no external services required

Everything is **environment-variable driven**.

---

# Common Failure Fixes

### Build fails with DB connection error

Ensure the **web service** has:

```
DATABASE_URL
```

referencing the Railway Postgres service.

---

### DB endpoints fail but site loads

Confirm the variable is set on the **web service**, not just locally.

---

### Prisma client errors

Run:

```
npm run prisma:generate
```

or redeploy.

---

### Migration conflict

If deploying against an old database:

```
drop database
```

or use a fresh Railway Postgres instance.

---

