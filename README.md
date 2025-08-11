# rowellewis.dev

This repository contains my resume website. It’s a simple, fast, and print‑friendly page that presents my experience and skills.

## View

- Open the live site (if deployed) or run locally.
- To save a PDF, use your browser’s Print dialog and choose “Save as PDF”.

Suggested print settings:
- Destination: Save as PDF
- Margins: Default or None
- Background graphics: Enabled (for subtle accents)

## Update content

All resume content lives in a single file:
- `src/data/resume.ts`

Edit these fields to update the site:
- `name`, `summary`
- `experience` (title, company, dates, bullets)
- `skills` (arrays for quick edits)
- `education`
- Optional `links` (e.g., GitHub/LinkedIn)

## Run locally (optional)

If you want to preview changes locally:

```bash
npm install
npm run dev
```

Build for deployment:

```bash
npm run build
npm run preview
```

## Notes

- The site is optimized for printing; the sidebar and controls are hidden in the PDF.
- The favicon and web app icons are included under `public/`.

## Contact

LinkedIn: https://www.linkedin.com/in/rowellewis