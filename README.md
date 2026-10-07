# Areeba Khaliq

Personal portfolio. React, TypeScript and Tailwind, built with Vite.

All the text lives in `src/data.ts`. `src/App.tsx` lays it out, and `src/components/` holds the section helpers and the two figures.

```
npm install
npm run dev      # local server
npm run build    # output in dist/
```

The build uses a relative base path, so it works on Vercel and on GitHub Pages. Pushing to `main` deploys to GitHub Pages through `.github/workflows/pages.yml`, once Pages is set to the "GitHub Actions" source in the repo settings.
