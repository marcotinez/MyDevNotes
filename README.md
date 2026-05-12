# MyDevNotes

Wiki publica y cuaderno tecnico personal sobre informatica e ingenieria de software.

MyDevNotes reune ideas, conceptos y decisiones tecnicas que sirven como referencia para estudiar, revisar fundamentos y apoyar proyectos actuales y futuros. No busca ser una enciclopedia completa; busca ser util, clara y facil de mantener.

## Que encontraras

- Una seccion de inicio con la introduccion de la wiki, su mapa general y el stack que la sostiene.
- Una estructura organizada por dominios, no por notas sueltas.
- Contenido escrito en MDX para mantener el flujo editorial simple.
- Una sidebar que crece automaticamente a partir de la configuracion de dominios y de los archivos existentes.

## Estructura del proyecto

```text
src/
  components/
    global/                 # navbar, sidebar y footer
    home/                   # contenido de la portada
  config/
    sidebar.ts              # dominios de la sidebar y carpetas asociadas
  layouts/
    DocsPageLayout.astro    # layout de lectura para documentos
    HomeLayout.astro        # layout general del sitio
  pages/
    index.astro            # home
    inicio.astro           # entrada a la seccion inicial
    inicio/                # bienvenida, vision general y stack
    fundamentos/           # primer dominio con contenido real
  styles/
    wiki.css               # estilos de lectura y bloques de codigo
  templates/
    wiki-page-template.mdx # base reutilizable para nuevas paginas
DESIGN.md                  # lineamientos visuales y de producto
Dockerfile                 # build y despliegue del sitio estatico
```

## Como esta organizada la wiki

La navegacion se agrupa por dominios. La seccion `Inicio` explica el proyecto y el resto de dominios esta pensado para crecer con contenido tecnico como:

- Fundamentos
- Arquitectura
- DDD
- Backend Engineering
- Frontend Engineering
- Testing
- DevOps & Infra
- Documentacion Tecnica

La lista completa de dominios vive en [src/config/sidebar.ts](/home/marcotinez/Projects/Personal/MyDevNotes/src/config/sidebar.ts).

## Como agregar contenido

### 1. Registrar o ajustar un dominio

Edita [sidebar.ts](/home/marcotinez/Projects/Personal/MyDevNotes/src/config/sidebar.ts) y define:

- `title`: nombre visible del dominio
- `icon`: icono de Material Symbols
- `pagesDir`: carpeta dentro de `src/pages` que consumira la sidebar
- `href`: opcional; ruta asociada al dominio

### 2. Crear la carpeta del dominio

Ejemplo:

```text
src/pages/arquitectura/
```

Si la carpeta no existe o no tiene documentos validos, el dominio no aparece en la sidebar.

### 3. Crear documentos MDX

Usa como base [wiki-page-template.mdx](/home/marcotinez/Projects/Personal/MyDevNotes/src/templates/wiki-page-template.mdx) y define al menos:

```mdx
---
navOrder: 1
navLabel: "Titulo de navegacion"
---
```

- `navOrder` controla el orden dentro del dominio.
- `navLabel` define el texto que aparece en la sidebar.

Con eso, la pagina pasa a formar parte de la navegacion automaticamente.

## Stack

- `Astro`: estructura del sitio, rutas y renderizado ligero
- `MDX / Markdown`: escritura de contenido tecnico
- `React`: componentes reutilizables en la home y bloques interactivos
- `Tailwind CSS`: sistema visual y utilidades de estilo
- `Docker`: build y despliegue del sitio estatico

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue

El proyecto incluye un [Dockerfile](/home/marcotinez/Projects/Personal/MyDevNotes/Dockerfile) que:

- construye el sitio con Astro
- copia `dist/`
- sirve el resultado como sitio estatico
- expone el puerto `8686`

## Filosofia

- Claridad antes que volumen
- Notas utiles antes que teoria aislada
- Estructura por dominios para crecer sin perder orden
- Herramientas simples para que escribir contenido sea mas importante que pelear con la plataforma
