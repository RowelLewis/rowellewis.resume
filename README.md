# rowellewis.resume

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

## Deploy to GitHub Pages

To deploy this site to GitHub Pages:

1. **Set the base path in Vite config**
	- In `vite.config.ts`, add:
	  ```js
	  base: '/rowellewis.resume/',
	  ```
	  (If your repo name changes, update the path accordingly.)

2. **Build the app**
	```bash
	npm run build
	```

3. **Push the build to GitHub Pages**
	- Use the official GitHub Pages workflow, or a tool like `gh-pages`:
	  ```bash
	  npm install --save-dev gh-pages
	  npx gh-pages -d dist
	  ```
	- Or, set up GitHub Actions using the workflow from the [Vite docs](https://vitejs.dev/guide/static-deploy.html#github-pages).

4. **Enable GitHub Pages**
	- Go to your repo’s Settings > Pages.
	- Set the source to the `gh-pages` branch (or the branch your workflow uses).

5. **Visit your site**
	- Your app will be live at:
	  `https://rowellewis.github.io/rowellewis.resume/`

## Contact

LinkedIn: https://www.linkedin.com/in/rowellewis