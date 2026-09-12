# Ficha Uchi — Website

A multi-page Vite + React + TypeScript + Tailwind site for Ficha Uchi.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Before launching for real

1. **Replace placeholder images.** Every image under `public/images/` is a
   generated abstract placeholder, not a photograph — see
   `public/images/README.md`.
2. **Verify all figures.** Impact numbers, timeline dates, and campaign
   totals in `src/data/*.ts` are placeholders. Anything not yet verified is
   flagged with `verified: false` or a `PLACEHOLDER` comment.
3. **Replace team, story, and partner content.** `src/data/team.ts` and
   `src/data/stories.ts` contain clearly-marked structural placeholders —
   swap in real names, bios, and consented stories.
4. **Wire up a backend.** `src/lib/forms.ts` (volunteer/partner/contact
   forms) and `src/lib/payments.ts` (campaign support) are the two
   integration points — currently they simulate submission honestly rather
   than pretending to send data anywhere.
5. **Verify contact details, social handles, and domain** in
   `src/data/site.ts` and `src/components/Seo.tsx`.

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, Gallery, forms, cards, etc.)
  data/         Placeholder content — the single place to edit copy/figures
  lib/          Backend/payment integration points
  pages/        One file per route
  types/        Shared TypeScript data model
public/images/  Placeholder imagery, organized by section
```

Routes: `/`, `/about`, `/impact`, `/work` (+ `/work/uniforms`,
`/work/community`, `/work/youth`), `/stories` (+ `/stories/:slug`),
`/gallery`, `/campaigns` (+ `/campaigns/:slug`), `/get-involved`,
`/volunteer`, `/partners`, `/team`, `/contact`, `/transparency`,
`/timeline`, and a custom 404.
# ficha-uchi
