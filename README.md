# Transportes Lombardia - Next.js + Cloudflare

Migracion estatica del sitio de Transportes Lombardia a Next.js, preparada para Cloudflare Pages.

## Desarrollo

```bash
npm install
npm run dev
```

## Build para Cloudflare Pages

```bash
npm run build
```

Configuracion recomendada en Cloudflare Pages:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: `24`

## Decisiones para el plan gratuito de Cloudflare

- `output: "export"` genera HTML/CSS/JS estatico, por lo que no hay Pages Functions ni Workers por visita.
- Las llamadas `fetch("header.html")` y `fetch("footer.html")` fueron reemplazadas por componentes React compartidos.
- Las imagenes viven en `public/img` con variantes responsivas generadas localmente para reducir transferencia.
- `_headers` aplica cache largo a assets versionados de Next y cache razonable a imagenes.
- `_redirects` conserva las URLs antiguas `.html` con redireccion 301 a rutas limpias.

Cloudflare Pages Free contempla, entre otros limites publicados, 500 builds mensuales, 20 minutos por build, 20.000 archivos por sitio y 25 MiB por asset individual. Este proyecto queda muy por debajo de esos limites.
