# Portfolio Resume App

A modern, accessible resume site built with React, TypeScript, Tailwind CSS v4, and shadcn/ui, powered by Vite. It supports dark/light mode and includes print styles for easy PDF export.

## Features

- React + TypeScript + Vite for fast DX
- Tailwind CSS v4 with the official @tailwindcss/vite plugin
- shadcn/ui components (Button, Card, Badge, Separator)
- Semantic, accessible structure (landmarks and headings)
- Print-optimized CSS with a Download PDF button (window.print)
- Unit tests with Vitest + React Testing Library + jest-dom

## Scripts

- Dev server: `npm run dev`
- Type check + build: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint`
- Tests (watch): `npm test`
- Tests (CI): `npm run test:run`

## Tech Notes

- Tailwind is configured via the Vite plugin and a single `@import "tailwindcss";` in `src/index.css`. See Tailwind docs: https://tailwindcss.com/docs/installation/using-vite
- Path alias `@/*` maps to `./src/*` (tsconfig + Vite resolve) for shadcn imports.
- shadcn/ui initialized with the CLI; components live under `src/components/ui/*`. Docs: https://ui.shadcn.com/docs/installation/vite

## Structure

- `src/types/resume.ts` — Type definitions
- `src/data/resume.ts` — Resume content
- `src/components/Resume.tsx` — Main resume UI (Tailwind + shadcn)
- `src/components/ui/*` — shadcn/ui components
- `src/App.tsx` — App entry
- `src/index.css`, `src/App.css` — Base + print styles

## Print to PDF

Click the “Download PDF” button in the footer or use your browser’s print dialog.

Suggested print settings:

- Destination: Save as PDF
- Margins: Default or None
- Background graphics: Enabled (for theme accents)

## Requirements

- Node 18+ recommended

## Troubleshooting

- If Tailwind classes don’t apply, confirm the `@tailwindcss/vite` plugin is in `vite.config.ts` and `@import "tailwindcss";` exists in `src/index.css`.
- If path alias `@` fails in `vite.config.ts`, ensure Node types are enabled in `tsconfig.node.json` and the alias uses `fileURLToPath(new URL('./src', import.meta.url))`.
- If tests fail due to multiple elements found, scope queries with `within` or use `getAllBy*`.
