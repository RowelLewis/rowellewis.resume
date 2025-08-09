# Portfolio Resume App

A modern, accessible resume site built with React, TypeScript, and Vite. It supports dark/light mode and includes print styles for easy PDF export.

## Features

- React + TypeScript + Vite for fast DX
- Semantic, accessible structure (landmarks and headings)
- Dark/light theme via prefers-color-scheme
- Print-optimized CSS with a Download PDF button (window.print)
- Unit tests with Vitest + React Testing Library + jest-dom

## Scripts

- Dev server: `npm run dev`
- Type check + build: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint`
- Tests (watch): `npm test`
- Tests (CI): `npm run test:run`

## Testing Stack

Configured Vitest to run in a jsdom environment with jest-dom matchers and automatic cleanup.

- Vitest config lives in `vite.config.ts` (test.environment='jsdom', test.globals=true, setup file)
- Test setup imports `@testing-library/jest-dom/vitest` in `src/setupTests.ts`
- Example tests in `src/components/Resume.test.tsx` and `src/App.test.tsx`

## Print to PDF

Click the “Download PDF” button in the footer or use your browser’s print dialog.

Suggested print settings:

- Destination: Save as PDF
- Margins: Default or None
- Background graphics: Enabled (for theme accents)

## Project Structure

- `src/types/resume.ts` — Type definitions
- `src/data/resume.ts` — Resume content
- `src/components/Resume.tsx` — Main resume UI
- `src/App.tsx` — App entry
- `src/index.css`, `src/App.css` — Theme and print styles

## Requirements

- Node 18+ recommended

## Troubleshooting

- If tests fail due to multiple elements found, scope queries with `within` or use `getAllBy*`.
- If jest-dom matchers are missing, confirm `src/setupTests.ts` is referenced in `vite.config.ts` test.setupFiles.

---

Made with React and a sprinkle of TypeScript magic.
