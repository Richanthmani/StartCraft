# StarCraft Foods & Services

Industrial catering company landing page with an enquiry form that emails submissions directly to the business owner.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + Framer Motion (`artifacts/starcraft-foods`)
- API: Express 5 + Nodemailer (`artifacts/api-server`)
- No database — enquiries are emailed directly via Gmail SMTP

## Where things live

- `artifacts/starcraft-foods/src/components/ui-sections/` — all page sections (Top, Middle, Bottom, End)
- `artifacts/api-server/src/routes/enquiry.ts` — enquiry email endpoint (`POST /api/enquiry`)
- `attached_assets/generated_images/` — AI-generated hero and section images

## Architecture decisions

- No database: enquiry form submissions are delivered by email to the owner's Gmail inbox; no persistence layer needed.
- Rate limiting on `/api/enquiry`: 5 requests per IP per hour to prevent spam-driven Gmail quota exhaustion.
- Gmail SMTP credentials stored as Replit Secrets (`GMAIL_USER`, `GMAIL_APP_PASSWORD`); recipient address is hardcoded in `enquiry.ts`.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Gmail App Password (not the account password) is required for SMTP auth. Generate at: Google Account → Security → 2-Step Verification → App passwords.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
