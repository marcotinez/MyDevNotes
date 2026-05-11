# MyWiki - Engineering Knowledge Base

Wiki técnica construida con Astro para documentar buenas prácticas de ingeniería de software.

## Stack

- Astro 6
- MDX
- React (componentes reutilizables en artículos)

## Estructura

- `src/content/docs/`: artículos de la wiki (`.mdx`)
- `src/pages/wiki/`: rutas de documentación
- `src/components/wiki/`: componentes de UI y bloques MDX
- `src/config/wiki.ts`: sidebar y jerarquía principal
- `DESIGN.md`: lineamientos de diseño/arquitectura documental

## Scripts

```bash
npm install
npm run dev
npm run build
```

Nota: en este entorno se está usando `ASTRO_TELEMETRY_DISABLED=1` para evitar escritura fuera del workspace durante build.
