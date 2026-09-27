# tunevia.com

Marketing site for Tunevia, the music distribution and publishing service built and operated by ANS Music.

Next.js 16 (App Router), Tailwind v4, deployed as a standalone Docker image on Coolify (port 3000).

## Develop

```bash
npm ci
npm run dev
```

## Where things live

- `src/data/site.ts`: every word of copy, plans, feature matrix, FAQ and the store list. Edit here, not in components.
- `src/app/*`: one folder per route. Legal pages use `src/components/site/legal.tsx`.
- `src/components/site/*`: header, footer, home sections, shared primitives.
- `public/dsp/*.svg`: store logos (from `@akashsarker/dsp-icons`, vendored).

## Rules for copy

Only verified claims. No artist counts, store counts, delivery-time or support-hour promises unless they are plan terms stated in `site.ts`. Calls to action lead to `/contact`; accounts are opened by the team over email.

## Deploy

Coolify builds the `Dockerfile` on the `main` branch. `/distribution-partners` redirects to `/stores`; `/login` and `/signup` redirect to `/contact`.
