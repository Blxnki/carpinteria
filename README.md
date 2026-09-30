# Carpintería Rayco Cáceres

Web estática bilingüe (español e inglés) para una carpintería familiar en Lanzarote, creada con Astro 6 y Tailwind CSS 4.

## Desarrollo

Requiere Node.js 22.12 o posterior.

- `npm ci`: instala las dependencias fijadas en el lockfile.
- `npm run dev`: abre el servidor de desarrollo en http://localhost:4321.
- `npm run build`: genera la web lista para publicar en `dist/`.
- `npm run preview`: permite revisar la versión de producción.

## Contenido

- `src/data/company.ts`: nombre, teléfono, email y dirección.
- `src/data/gallery.ts`: las 32 fotografías con títulos, categorías y descripciones en ambos idiomas.
- `src/data/services.ts` y `src/i18n/ui.ts`: servicios y textos compartidos.
- `src/data/testimonials.ts`: testimonios existentes.
- `src/styles/global.css`: colores, tipografía y estilos compartidos.

Las páginas principales están en `/` y `/en/`. Cada idioma conserva sus páginas legales.

## Diseño y rendimiento

Las fotos se convierten a WebP durante el build y ofrecen tamaños adaptados a la pantalla. La portada tiene prioridad de carga; las imágenes inferiores se cargan de forma diferida. La galería muestra seis proyectos inicialmente y permite consultar las 32 fotografías con un visor nativo, flechas y Escape. Sin JavaScript, quedan disponibles los enlaces a todas las fotos.

La web genera HTML estático y sólo usa JavaScript para el menú móvil, la elección de tema y la galería. Utiliza fuentes del sistema, sin peticiones a servicios de tipografía externos. Incluye modo oscuro, estilos para movimiento reducido y navegación por teclado.

Los botones de presupuesto abren el cliente de correo; las llamadas y la dirección usan enlaces directos al teléfono y Google Maps.

## Publicación

Configura el dominio real en `site` dentro de `astro.config.mjs` antes de publicar: el proyecto conserva el dominio de ejemplo original. Este valor se utiliza en el sitemap, los enlaces canónicos y las tarjetas para compartir. Publica el contenido de `dist/` en un alojamiento estático.
