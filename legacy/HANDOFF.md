# Handoff - Landing Modular B2B

Ruta del proyecto:
`C:\Users\morer\OneDrive\Documentos\New project`

## Estado actual
- Base modular lista y estable.
- Animaciones SVG optimizadas con scroll.
- CSS/HTML limpiados de clases redundantes.
- Formularios y CTA consolidados para CRO.
- Assets locales (imagenes y fuentes) ya descargados.

## Como correr en local
Desde la carpeta del proyecto:
```
python -m http.server 5500
```
Luego abrir:
`http://localhost:5500`

## Arquitectura de archivos (resumen)
- `index.html`: Plantillas HTML por rubro (12 templates) + estructura global.
- `styles.css`: Estilos globales, layout, componentes, themes, motion prefs.
- `scripts.js`: Entry point (solo llama `init()`).
- `main.js`: Bootstrap UI, switching de rubros, listeners, init Hero SVG.
- `data.js`: Contenido por rubro (copy, paletas, tipografias, imagenes).
- `renderers.js`: Render dinamico (textos, listas, cards, stats, images).
- `workflow.js`: Scrollytelling SVG para workflows (optimizado).
- `hero-animator.js`: Animacion SVG del Hero (scroll sync con CSS vars).
- `utils.js`: Helpers compartidos.

## Donde editar contenido
- Copys, paletas, tipografias y assets: `data.js` (objeto `PROFESSIONS`).
- Copy del formulario: `data.js` -> `SHARED_COPY.form`.

## CTA y formulario (CRO)
- CTA principal: ancla a `#contacto` (formulario).
- Formulario: solo Nombre + Email.
- Canal secundario: solo en footer (link mailto/whatsapp simple).

## Hero SVG (scroll)
- Contenedor: `data-hero-svg` dentro de cada hero.
- Animacion: `hero-animator.js`, usa `--progress` y `--path-length`.
- Accesibilidad: `@media (prefers-reduced-motion: reduce)` en CSS.

## Workflow SVG (scroll)
- Controlador: `workflow.js`, cache de puntos/paths/lengths.
- Usa IntersectionObserver para reducir trabajo fuera de viewport.

## Assets locales
- Imagenes: `assets/images/<rubro>/` con variantes 640/1200 (avif/webp/jpg).
- Fuentes: `assets/fonts/` (Fraunces, Space Grotesk, Manrope en WOFF2).

## Notas para el proximo equipo
- Mantener SVGs ligeros (<10KB).
- Si cambian el Hero SVG, ajustar el path en `hero-animator.js`.
- Si agregan rubros, replicar el template y agregar data en `data.js`.
- No hay backend. Formularios son HTML basico.
