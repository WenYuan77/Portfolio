# Wen Yuan — Portfolio

A single-page, dependency-free portfolio site. Plain HTML, CSS, and JavaScript; no build step.

## Files

- `index.html` — all content (hero, selected work, experience, capabilities, analytics, background, contact)
- `assets/css/style.css` — design tokens (colors, type, spacing) at the top, then component styles
- `assets/js/main.js` — theme toggle, active nav highlighting, copy-email button
- `assets/Wen_Yuan_Resume.pdf` — **add your PDF here**; the "Résumé" links point to this path

## Run locally

```bash
cd "Portfolio"
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

- **GitHub Pages**: push this folder to a repo (e.g. `WenYuan77.github.io`), then Settings → Pages → deploy from `main` / root.
- **Vercel / Netlify**: drag-and-drop the folder, or connect the repo. No build command, output directory is the root.

## Editing

- Colors and fonts live in the `:root` block of `assets/css/style.css`. Light-mode values are in the two blocks right below it; keep them in sync.
- The cool accent marks AI-engineering work; the amber accent is reserved for the data-analytics track.
- The hero trace panel is an illustrative sample, labeled as such. Replace the lines if you want a real trace.
