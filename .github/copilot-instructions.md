# GitHub Copilot instructions for Thillaiyappa-Builders

Purpose: Quick, actionable instructions to help an AI coding agent become productive in this repo.

---

## Quick start & common commands ✅
- Install dependencies: `npm install`
- Full-stack dev (recommended): `npm run dev` (runs `server/index.ts` which includes Vite middleware in dev)
- Client-only dev (hot reload on port 5000): `npm run dev:client`
- Build both client & server for production: `npm run build` (runs `script/build.ts`)
- Run production bundle: `npm start` (ensure `NODE_ENV=production` and any required env vars)
- Type-check: `npm run check`
- Apply Drizzle migrations: `npm run db:push` (requires `DATABASE_URL` env var)

---

## Architecture & how pieces fit together 🔧
- Two main runtime components:
  - client/ (Vite + React, Tailwind) — source root at `client/` and aliases: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`
  - server/ (Express + ts) — `server/index.ts` sets up API routes and either serves Vite middleware in dev or static files in production (`serveStatic`).
- Shared types & DB schema live in `shared/schema.ts` (Drizzle schema + Zod insert schema).
- Build steps:
  - `vite build` outputs client to `dist/public` (see `vite.config.ts`)
  - `esbuild` bundles `server/index.ts` into `dist/index.cjs` (see `script/build.ts`). Note: the build script uses an `allowlist` to decide which deps are bundled vs externalized — add server-only dependencies here if you need them bundled for cold-start.
- Dev server behavior: `npm run dev` runs server which, when `NODE_ENV !== 'production'`, creates a Vite middleware with HMR and serves `index.html` dynamically (see `server/vite.ts`).

---

## Project-specific conventions — be explicit ⚠️
- API routes should be prefixed with `/api` and added inside `server/registerRoutes` (`server/routes.ts`). The server logger only prints detailed logs for paths that start with `/api`.
- The default storage implementation is in-memory (`server/storage.ts` using `MemStorage`). To switch to a DB-backed implementation, implement `IStorage` and swap `storage` export.
- Database: schema is canonical in `shared/schema.ts`. Migrations written with `drizzle-kit` and `drizzle.config.ts` consumes `DATABASE_URL`. Do not assume a DB exists in dev (MemStorage is used by default).
- Error behavior: the server error middleware responds with `{ message }` then throws the error — this intentionally surfaces errors in dev and may crash the process.
- Use repo import aliases (`@`, `@shared`, `@assets`) rather than deep relative paths when modifying or adding files.

---

## Useful pointers & examples from the codebase 💡
- Where to edit content:
  - Product data & images: `client/src/lib/data.ts`
  - WhatsApp phone number: `client/src/components/ui/WhatsAppButton.tsx`
  - Theme HSL variables: `client/src/index.css` (look for `@theme` section)
- Add an API endpoint example (recommended pattern):
  - Implement in `server/routes.ts` and use `storage` (e.g. `storage.createUser`) and ensure the path starts with `/api`.
  - Example:
    ```ts
    app.post('/api/users', async (req, res) => {
      const user = await storage.createUser(req.body);
      res.status(201).json(user);
    });
    ```
- When serving client in dev, `server/vite.ts` injects a `?v=<nanoid>` query on `src/main.tsx` to avoid stale caches; be cautious when editing `index.html` (server reloads it each request in dev).

---

## Environment variables & platform notes ⚙️
- PORT — server listens on `process.env.PORT || 3000`. Use `PORT` to override when deploying.
- NODE_ENV — `development` (default) runs Vite middleware; set to `production` for `serveStatic` behavior.
- DATABASE_URL — required by `drizzle.config.ts` and `npm run db:push`.
- REPL_ID — feature flags in `vite.config.ts` enable Replit-specific plugins when present.

---

## Build & production caveats 🔍
- The build script bundles the server into CJS (`dist/index.cjs`) with `minify: true`. If adding native or optional dep, ensure it's supported by `esbuild` or declared in the `allowlist` in `script/build.ts`.
- Production static files are expected at `dist/public` (the `serveStatic` helper throws if missing). Build the client first (`npm run build`) before starting the production server.

---

## What an AI agent should do first (recommended checklist) ✅
- Run `npm install` and `npm run dev` locally to verify dev environment.
- Inspect `server/routes.ts` and `server/storage.ts` to find the right injection points for new APIs.
- Use the aliases (`@`, `@shared`, `@assets`) and follow existing file patterns (component-based UI under `client/src/components/ui`, pages under `client/src/pages`).
- If adding DB logic: update `IStorage` implementation and write migrations using `drizzle-kit` (`npm run db:push` requires `DATABASE_URL`).

---

If anything above is unclear or you'd like snippets for specific tasks (e.g. "Add /api/users endpoints with DB-backed storage"), tell me which area to expand and I will iterate. 

Thanks — ready to update or shorten this to match your preferred style.