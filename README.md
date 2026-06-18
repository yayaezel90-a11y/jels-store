# ZEL CODE AI Operating System UI

Prototype statis untuk brand **ZEL CODE** dari **ZEL TECHNOLOGIES**. File legacy `jels store.html` sudah dihapus karena tidak lagi dipakai.

## File utama

- `index.html` - struktur UI utama ZEL CODE AI Operating System.
- `assets/styles.css` - design system, layout, animasi premium, responsive rules.
- `assets/app.js` - interaksi onboarding, AI thinking panel, agent grid, workspace modules, toast, dan parallax.
- `assets/logo-system.svg` - sistem logo SVG berisi reusable symbols.
- `assets/favicon.svg` - favicon SVG original yang dipakai oleh halaman.

## Logo SVG individual

- `assets/logos/full-logo.svg`
- `assets/logos/icon-only.svg`
- `assets/logos/horizontal-logo.svg`
- `assets/logos/vertical-logo.svg`
- `assets/logos/monochrome.svg`
- `assets/logos/dark-mode.svg`
- `assets/logos/light-mode.svg`
- `assets/logos/favicon.svg`

## Fitur yang sudah ada

- Brand identity ZEL CODE / ZEL TECHNOLOGIES.
- Logo original profesional tanpa emoji.
- Loading experience partikel, neural Z, full logo, dan initialization steps.
- Smart AI thinking progress.
- Command center dengan search bar besar.
- Welcome onboarding.
- Living dashboard, realtime stats, graph animation, glass cards, dan parallax background.
- Workspace system, project operating system, AI memory visualization, advanced agents, collaboration mode, chat conversions, document intelligence, billing, dan admin control center.

## Cara menjalankan

Buka `index.html` langsung di browser, atau jalankan static server lokal:

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.


## Deploy

Project ini static dan siap deploy tanpa build step.

### Vercel

1. Import repository ke Vercel.
2. Framework preset: `Other`.
3. Build command: kosongkan.
4. Output directory: `.`.
5. Deploy.

Konfigurasi cache asset sudah tersedia di `vercel.json`.

### Netlify

1. Import repository ke Netlify.
2. Build command: kosongkan.
3. Publish directory: `.`.
4. Deploy.

Konfigurasi deploy dan cache asset sudah tersedia di `netlify.toml`, `_headers`, dan `_redirects`.

### GitHub Pages

1. Push branch ke GitHub.
2. Aktifkan Pages dari root branch.
3. File `.nojekyll` sudah tersedia supaya static asset tidak diproses Jekyll.

### Local check sebelum deploy

```bash
npm run check
npm run start
```
