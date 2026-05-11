
---
name: Technical Documentation System
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  sidebar_width: 280px
  content_max_width: 768px
  container_max_width: 1280px
---

## Brand & Style

This design system is engineered for clarity, utility, and developer trust. It prioritizes the "un-designed" aesthetic—where the UI recedes to allow the technical content to lead. Drawing inspiration from high-performance tools like Linear and Stripe, the style is rooted in **Modern Minimalism** with a focus on precision.

The emotional response should be one of "effortless focus." It achieves this through a structured hierarchy, ample negative space, and a restrained use of color. The interface feels lightweight and fast, signaling a product that is as reliable as the documentation it hosts.

## Colors

The palette is anchored by a high-contrast foundation to ensure maximum legibility. 

- **Primary (Engineering Blue):** Used for primary actions, active navigation states, and text links. It is a vibrant, accessible blue that stands out against white backgrounds.
- **Neutrals (Slate Grays):** A sophisticated range of slates is used for structural elements. `#E2E8F0` defines subtle borders, while `#64748B` handles secondary metadata and descriptions.
- **Backgrounds:** Pure white (`#FFFFFF`) is used for the main reading area to reduce eye strain, with a subtle off-white or light gray (`#F8FAFC`) used for sidebars and code block headers to create functional zones.

## Typography

This system uses a dual-font strategy to balance technical precision with reading stamina:

1.  **Navigation & Headers (Geist):** A high-performance sans-serif used for all UI elements, headings, and labels. It provides a clean, "engineered" look that remains legible at small sizes.
2.  **Long-form Content (Source Serif 4):** A refined serif chosen for the main documentation body. Serifs help guide the eye across long lines of text, reducing fatigue during deep technical dives.
3.  **Monospace (JetBrains Mono):** Specifically optimized for code legibility, with distinct character shapes to prevent confusion between `0` and `O` or `l` and `1`.

All headers use a slight negative letter-spacing for a more compact, modern feel. Body text uses a generous 1.6x line height to improve vertical rhythm.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid model**:
- **Sidebar:** A fixed width of 280px on desktop, collapsible on smaller screens.
- **Main Content:** Centered with a maximum reading width of 768px. This "optimal line length" prevents eye strain on ultra-wide monitors.
- **Margins:** A 12-column grid is used for the overall container, but the documentation itself lives within a single-column flow to maintain a linear narrative.

Spacing follows an 8pt grid system. Generous vertical padding (`40px+`) is used between major sections to allow the content to breathe. Breadcrumbs and navigation elements are spaced tightly (`8px-16px`) to indicate functional grouping.

## Elevation & Depth

The design system utilizes **Low-Contrast Outlines** and **Ambient Shadows** to create a sense of organized layers:

- **Level 0 (Base):** The main canvas, using a flat white surface.
- **Level 1 (Navigation/Cards):** Elements like code blocks or search inputs use a subtle 1px border (`#E2E8F0`). 
- **Level 2 (Overlays/Dropdowns):** Components that float above the main UI (like search results or mobile menus) use a soft, highly diffused shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`.

Avoid heavy drop shadows or glows. Depth should feel like physical paper stacked on a desk—subtle and structural.

## Shapes

The design system employs a consistent **8px (0.5rem)** corner radius for almost all components, including:
- Code blocks
- Search inputs
- Callout containers
- Hover states in the sidebar

This "Soft" approach (Level 1) strikes a balance between the clinical feel of sharp corners and the overly casual look of high-radius circles. Small buttons and tags may use a 4px radius to maintain visual weight, but the 8px standard defines the primary aesthetic.

## Components

### Sidebar & Navigation
The sidebar uses a nested tree structure. Inactive items use `text-muted` slate, while active items use `primary-blue` for the text and a subtle light blue background pill. Collapsible sections use a chevron icon that rotates 90 degrees on toggle.

### Code Blocks
Code blocks are presented in a dark-themed container (even in light mode) using a deep navy background (`#0F172A`). This creates a high-contrast "anchor" for the technical content. Syntax highlighting should follow a soft pastel palette to remain legible against the dark background.

### Callout Blocks
- **Info:** Blue left-border, light blue background.
- **Warning:** Amber left-border, light amber background.
- **Tip:** Emerald left-border, light emerald background.
All callouts should use the `label-md` Geist font for the title and `body-md` Source Serif for the description.

### Breadcrumbs
Displayed in `label-sm` Geist. Use a simple `/` or `>` separator in a light gray. Breadcrumbs should remain sticky at the top of the content area during scroll on mobile devices.

### Buttons
Primary buttons are solid `Engineering Blue` with white text. Secondary buttons use a white background with the standard `1px slate border`. All buttons have an 8px radius and a subtle 1px inner highlight for a slightly tactile feel.

---

## Arquitectura Visual de la Wiki

### Estructura base del layout

- **Topbar fija:** marca, campo de búsqueda global y accesos rápidos.
- **Sidebar izquierda:** navegación por dominios (Fundamentos, Arquitectura, Delivery, Práctica Profesional).
- **Contenido central:** ancho controlado para lectura larga (`~768px`).
- **TOC derecha:** índice automático por `h2/h3` para navegación interna.

### Jerarquía de navegación

1. Dominio (macrotema)
2. Documento (concepto o práctica)
3. Secciones internas (teoría, práctica, checklists, decisiones)

### Estructura recomendada para páginas largas

1. **Qué es / Para qué sirve**
2. **Cuándo usarlo / cuándo no**
3. **Implementación práctica**
4. **Errores comunes**
5. **Checklist de adopción**
6. **Relaciones con otros conceptos**

### Relación entre conceptos

Cada artículo debe declarar `related` en frontmatter y renderizar tarjetas de navegación cruzada al final.

## Identidad Visual

### Dirección visual

- Minimalismo técnico, enfoque editorial.
- Alto contraste de lectura, bordes suaves, sombras sutiles.
- Tipografía dual: **Geist** (UI/headers) + **Source Serif 4** (lectura prolongada) + **JetBrains Mono** (código).

### Tokens activos

- Paleta principal azul ingeniería.
- Neutros tipo slate para estructura y metadatos.
- Callouts semánticos: info/tip/warning/danger.

## Componentes Reutilizables

Componentes base implementados en React y disponibles para MDX:

- `Callout`
- `Checklist`
- `ComparisonTable`
- `Tabs`

Componentes de navegación/layout (Astro):

- `Sidebar`
- `Breadcrumbs`
- `TableOfContents`
- `NavCards`

## Experiencia de Usuario

### Reglas UX

- Navegación persistente por categorías.
- TOC automático para orientación en artículos extensos.
- Metadatos visibles: nivel (`basico/intermedio/avanzado`) y categoría.
- Sección “Lecturas recomendadas” por artículo (`related`).

### Búsqueda

- En esta iteración: input reservado en topbar.
- Siguiente iteración: índice local con Pagefind o Fuse.js + comando rápido (`Cmd/Ctrl + K`).

## Organización de Contenido

### Taxonomía principal

- `fundamentos/`
- `arquitectura/`
- `delivery/`
- `practica-profesional/`

### Convenciones de nombres

- Slugs en `kebab-case`.
- Carpetas por dominio.
- Frontmatter obligatorio:
  - `title`
  - `description`
  - `order`
  - `category`
  - `level`
  - `tags`
  - `related`
  - `updatedAt`

### Plantilla estándar de artículo

```mdx
---
title: Nombre
description: Descripción breve
order: 999
category: fundamentos
level: intermedio
tags: [tag1, tag2]
related: []
updatedAt: 2026-05-11
---

## Qué es
## Cuándo usar
## Implementación
## Checklist
## Referencias cruzadas
```

## Diseño Técnico y Stack

### Opción elegida: Astro + MDX + React

**Por qué encaja para esta wiki**

- Excelente rendimiento estático.
- Flujo natural para `.md/.mdx`.
- Permite componentes React reutilizables sin convertir todo el sitio en SPA.
- Escala bien para documentación estructurada.

### Comparación resumida

- **Docusaurus:** fuerte en docs enterprise y versionado; más acoplado al ecosistema propio y estilo reconocible.
- **Nextra:** muy rápido para docs en Next.js; útil si necesitas features de app fullstack de Next.
- **Astro:** mejor balance para wiki editorial + componentes UI aislados + rendimiento estático.
- **MkDocs:** simple y sólido para documentación clásica; menos flexible para UX avanzada personalizada.
- **GitBook:** excelente experiencia out-of-the-box; menor control técnico y dependencia de plataforma.
- **Notion/Obsidian Publish:** ideales para velocidad de publicación personal; menor control fino de arquitectura frontend.

### Recomendación final

Para este proyecto (wiki profesional, escalable y con identidad propia), **Astro** es la mejor base.
