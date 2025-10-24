# Intangible Partners — NEO-ULTRA-MAX

**Maximum** upgrade: GPU **WebGL hero** (react-three-fiber), animated metrics, markdown blog & case studies,
router pages, consent/GA, Netlify Forms. Base set for GitHub Pages: `/Intangible-Partners/`.

## Run
```bash
npm install
npm run dev
```

## Deploy
```bash
npm run deploy
```
Then GitHub → Settings → Pages → Source: `gh-pages`.

## Use your logo
Replace `src/assets/logo.svg` with your actual logo (same filename).

## Blog & case studies (Markdown CMS)
- Write posts in `content/blog/*.md` and case studies in `content/case-studies/*.md`.
- Frontmatter supports: `title`, `date`, `summary`, and for cases `metric`.
- Vite `import.meta.glob` + `gray-matter` load content at build time.

## Optional: Notion/Sanity
- Replace the markdown loader in `src/utils/markdown.js` with a fetcher that hits your Notion API or Sanity GROQ query.
- Populate `posts`/`cases` by mapping API results to `{ slug, title, date, summary/content }`.
