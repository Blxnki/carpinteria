export const serviceRoutes = {
  furniture: { es: '/muebles-a-medida-lanzarote/', en: '/en/bespoke-furniture-lanzarote/' },
  pergolas: { es: '/pergolas-lanzarote/', en: '/en/pergolas-lanzarote/' },
  doors: { es: '/puertas-madera-lanzarote/', en: '/en/wooden-doors-lanzarote/' },
} as const;

const pagePairs = [
  { es: '/', en: '/en/' },
  { es: '/aviso-legal/', en: '/en/legal-notice/' },
  { es: '/politica-privacidad/', en: '/en/privacy-policy/' },
  ...Object.values(serviceRoutes),
];

export function getLocalizedRoutes(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  return pagePairs.find(pair => Object.values(pair).some(route => (route.replace(/\/$/, '') || '/') === path));
}
