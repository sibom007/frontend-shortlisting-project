# MERN Frontend Shortlisting Project

SaaS-style landing page (Figma-based design) plus auth and dashboard with JSONPlaceholder API integration.

---

## Setup

**Prerequisites:** Node.js 18+ (or Bun)

```bash
# Install dependencies
bun install
# or: npm install / pnpm install / yarn

# Run development server
bun run dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Build for production:**

```bash
bun run build
bun run start
```

No environment variables are required for the current API usage (login and users proxy to JSONPlaceholder).

---

## Features Checklist

- **Part A — Landing**
  - [x] Homepage with sections: Navbar, Hero, Back Overlay, Feature Boxes, Guide & Help, Companies, Free to Join, Get in Touch, Footer
  - [x] Layout, typography, and section order aligned with provided Figma concept
  - [x] Button and input hover + focus states

- **Part B — Auth**
  - [x] `/login` page with email/password form
  - [x] Fake auth (validates against JSONPlaceholder users; demo password `123456`)
  - [x] Token stored (HTTP-only cookie)
  - [x] Logout clears token and redirects
  - [ ] `/signup` (optional; not implemented)
  - [x] Dashboard route protection via middleware (logic in `src/proxy.ts`; not wired as Next.js middleware)

- **Part C — Dashboard & API**
  - [x] `/dashboard` — total users, companies count, derived stats, charts
  - [x] `/users` — table, search (name/email), sort (A–Z / Z–A), client-side pagination
  - [x] `/settings` — profile form (display name), light/dark theme toggle; both persisted in localStorage
  - [x] API: JSONPlaceholder users used via `/api/login` (GET for users, POST for login)
  - [x] Loading and error states on dashboard and users
  - [x] User detail (modal or dedicated route) — not implemented

- **Quality**
  - [x] Reusable UI: Button, Input, Card, Form, Label, Skeleton, Switch, etc.
  - [x] Empty / loading / error states
  - [x] Semantic HTML, keyboard usage, visible focus states
  - [x] Table overflow handled with `overflow-x-auto` on users page

---

## Screenshots

_(Add screenshots here for submission.)_

| Page        | Description        |
|------------|--------------------|
| Homepage   | Landing sections   |
| Login      | Login form         |
| Dashboard  | Summary + charts   |
| Users      | Table, search, sort, pagination |
| Settings   | Profile + theme    |

---

## Decisions / Tradeoffs

- **Auth storage:** The spec suggested storing the token in `localStorage`. This app uses an **HTTP-only cookie** for the auth token so it is not readable by client JS (better for XSS). Tradeoff: does not literally match “store token in localStorage.”

- **Route protection:** Redirect logic for protected routes lives in `src/proxy.ts` but is **not** connected to Next.js middleware (no `middleware.ts` calling it). So `/dashboard`, `/users`, and `/settings` are currently reachable without logging in. To enforce protection, add a root `middleware.ts` that imports and invokes the proxy (or inlines the logic).

- **Users API path:** User list is fetched via `GET /api/login` (same route as POST login) to keep one API route that already had access to JSONPlaceholder. Alternatively, a dedicated `/api/users` route could be added.

- **Landing layout:** Some spacing uses fixed values (e.g. `px-41.25`) to align with the Figma layout; on very small viewports this may cause horizontal scroll. Responsive tweaks can be added if needed.

- **Signup / user detail:** Signup and user detail (modal or `/users/[id]`) were deprioritized to meet the core scope; both are good next steps.

---

## Project structure (overview)

- `src/app/` — Next.js App Router: `page.tsx` (home), `login/`, `dashboard/`, `users/`, `settings/`, `api/login/`
- `src/components/ui/` — Reusable UI (button, input, card, form, etc.)
- `src/feature/` — Feature-specific code: `landing/`, `auth/`, `dashboard/`, `users/`, `setting/`, `shared/`
- `src/lib/` — Provider, utils
- `src/types/` — Shared TypeScript types and Zod schemas

---


---

## Demo & deployment

- **Live deployment:** _([Live link](https://frontend-shortlisting-project.vercel.app))_
- **Screen recording:** _([Video link](https://drive.google.com/file/d/1SZpQpjfMtRxTXYyyJGO6cbiK6yfSusrT/view?usp=sharing))_
