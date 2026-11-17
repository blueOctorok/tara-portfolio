# Tara Andow portfolio

A new chat can start here.

## What it is

A one-page portfolio for Tara Andow, project manager in Cleveland. Construction coordination, commercial real estate, and operations. The page is an architectural section, not a software case-study site: sheet numbers, a plumbline through the jobs, dusk and black surfaces from her palette.

She has seen blahablast-v4. This site does not reuse that layout, type, green accent, letter-by-letter name, tool ticker, or pointer spotlight.

## Where things live

- `src/app/page.tsx` only renders `HomePage`. `src/components/home-page.tsx` lists the sections.
- `src/content/profile.ts` holds the bio, contact, competencies, tools, and credentials.
- `src/content/work.ts` holds the current roles, the four proof numbers, the four sheets, and the job path. Every figure is from the resume. Do not invent a metric.
- `src/app/globals.css` holds the colors, the type, and the motion. Hero motion is timed (crop marks, name wipe, drifting light). Everything below the fold is scroll-driven (`rise-in`, `plumbline`, `mark`) inside `@supports` and a reduced-motion check. A parent of a scroll-driven element must use `overflow-clip`, never `overflow-hidden`.
- The four swatches (`#18122B`, `#393053`, `#443C68`, `#635985`) are surfaces and rules. Body text is a lighter lavender from the same hue, because the swatches fail contrast on black.
- `public/tara-andow-resume.pdf` is the file the site links to. The original PDF stays in the project root.

## Run it

```bash
npm install
npm run dev
```

`npm run build` and `npm run lint` should both pass before a deploy. Hosting target is Vercel. No adapter is required for this app.

The code is on `main` at https://github.com/blueOctorok/tara-portfolio. It is not on Vercel yet.

## Waiting on Tara

- Photographs. The sheets are type only, on purpose, until there are real pictures of Churchill Towers, Bedford Place, the St. James campus, or The 9. Do not drop in stock photos of other buildings.
- Whether both current roles (One Constructive and ICON Cowork, both June 2026) should stay equal.
- Whether the phone number should stay on the page. It is on the resume, so it is on the site.
- A domain, if this should leave the default Vercel address. `metadataBase` in `src/app/layout.tsx` is unset until that exists.

## Suggested, not built

- Real photography in the four sheets. That is the change that would move the page the most.
