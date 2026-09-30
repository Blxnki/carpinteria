# Carpintería Rayco Cáceres

Web estática bilingüe (español e inglés) para una carpintería familiar en Lanzarote, creada con Astro 7 y Tailwind CSS 4.

## Desarrollo

Requiere Node.js 22.19 o posterior. Se recomienda Node.js 24 LTS.

- `npm ci`: instala las dependencias fijadas en el lockfile.
- `npm run dev`: abre el servidor de desarrollo en http://localhost:4321.
- `npm run build`: genera la web lista para publicar en `dist/`.
- `npm run preview`: permite revisar la versión de producción.

## Contenido

- `src/data/company.ts`: nombre, teléfono, email, dirección, horario, ficha de Maps y redes sociales. Mantener estos datos coherentes con el Perfil de Empresa de Google.
- `src/data/gallery.ts`: las 32 fotografías con títulos, categorías y descripciones en ambos idiomas.
- `src/data/services.ts` y `src/i18n/ui.ts`: servicios y textos compartidos.
- `src/data/service-pages.ts`: contenido y fotografías de las páginas de muebles, pérgolas y puertas, en ambos idiomas.
- `src/i18n/routes.ts`: parejas de URLs en español e inglés, compartidas por las etiquetas hreflang y el selector de idioma.
- `src/components/Testimonials.astro`: enlace a las opiniones reales y actualizadas de Google; no muestra citas ni puntuaciones estáticas.
- `src/styles/global.css`: colores, tipografía y estilos compartidos.

Las páginas principales están en `/` y `/en/`. Cada idioma conserva sus páginas legales.

## Diseño y rendimiento

Las fotos se convierten a WebP durante el build y ofrecen tamaños adaptados a la pantalla. La portada tiene prioridad de carga; las imágenes inferiores se cargan de forma diferida. La galería muestra seis proyectos inicialmente y permite consultar las 32 fotografías con un visor nativo, flechas y Escape. Sin JavaScript, quedan disponibles los enlaces a todas las fotos.

La web genera HTML estático y sólo usa JavaScript para el menú móvil, la elección de tema y la galería. Utiliza fuentes del sistema, sin peticiones a servicios de tipografía externos. Incluye modo oscuro, estilos para movimiento reducido y navegación por teclado.

Los botones de presupuesto abren el cliente de correo; las llamadas y la dirección usan enlaces directos al teléfono y Google Maps.

## SEO y seguimiento

La portada se centra en carpintería de madera en Lanzarote. Cada servicio tiene una página con contenido propio, preguntas frecuentes, fotos y enlaces internos. Se generan títulos, descripciones, canonical, hreflang y datos estructurados de negocio local, servicio y navegación. La página 404 lleva `noindex`. Las imágenes se sirven en WebP y las preguntas funcionan sin JavaScript.

El sitemap se genera en cada build: `https://carpinteriaraycocaceres.com/sitemap-index.xml`. La verificación pública de Google Search Console está en `src/layouts/BaseLayout.astro`; conservarla después de verificar la propiedad de prefijo `https://carpinteriaraycocaceres.com/`.

En Search Console, revisar indexación, consultas, impresiones y clics una vez que Google tenga datos. Al añadir un servicio, completar ambos idiomas y su pareja en `routes.ts`; no crear copias de una misma página cambiando sólo el municipio. Al publicar proyectos, usar fotos propias y describir únicamente trabajos y ubicaciones confirmados.

Mantener el horario y los servicios de Maps al día, publicar fotos de trabajos reales y responder a las reseñas. Invitar a todos los clientes a compartir su experiencia sin incentivos ni filtros según la valoración. La web enlaza a la ficha de Google sin widgets externos ni marcado de estrellas de reseñas del propio negocio. Estas mejoras no garantizan una posición concreta.

## Publicación

El dominio de producción es `https://carpinteriaraycocaceres.com`, configurado en `astro.config.mjs` y `public/robots.txt`. Se utiliza en el sitemap, los enlaces canónicos y las tarjetas para compartir. Si cambia el dominio, actualiza ambos archivos.

Hostinger está conectado a la rama `main` de GitHub con despliegue automático. Compila con `npm run build` y publica el contenido de `dist/`. El entorno de compilación debe cumplir el requisito de Node.js indicado arriba.

Antes de integrar cambios de dependencias, ejecuta `npm ci`, `npm audit` y `npm run build`. Actualiza y sube juntos `package.json` y `package-lock.json`.
