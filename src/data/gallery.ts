import type { ImageMetadata } from 'astro';

import img1 from '../assets/images/carpinteria/1.jpeg';
import img2 from '../assets/images/carpinteria/2.jpeg';
import img3 from '../assets/images/carpinteria/3.jpeg';
import img4 from '../assets/images/carpinteria/4.jpeg';
import img5 from '../assets/images/carpinteria/5.jpeg';
import img6 from '../assets/images/carpinteria/6.jpeg';
import img7 from '../assets/images/carpinteria/7.jpeg';
import img8 from '../assets/images/carpinteria/8.jpeg';
import img9 from '../assets/images/carpinteria/9.jpeg';
import img10 from '../assets/images/carpinteria/10.jpeg';
import img11 from '../assets/images/carpinteria/11.jpeg';
import img12 from '../assets/images/carpinteria/12.jpeg';
import img13 from '../assets/images/carpinteria/13.jpeg';
import img14 from '../assets/images/carpinteria/14.jpeg';
import img15 from '../assets/images/carpinteria/15.jpeg';
import img16 from '../assets/images/carpinteria/16.jpeg';
import img17 from '../assets/images/carpinteria/17.jpeg';
import img18 from '../assets/images/carpinteria/18.jpeg';
import img19 from '../assets/images/carpinteria/19.jpeg';
import img20 from '../assets/images/carpinteria/20.jpeg';
import img21 from '../assets/images/carpinteria/21.jpeg';
import img22 from '../assets/images/carpinteria/22.jpeg';
import img23 from '../assets/images/carpinteria/23.jpeg';
import img24 from '../assets/images/carpinteria/24.jpeg';
import img25 from '../assets/images/carpinteria/25.jpeg';
import img26 from '../assets/images/carpinteria/26.jpeg';
import img27 from '../assets/images/carpinteria/27.jpeg';
import img28 from '../assets/images/carpinteria/28.jpeg';
import img29 from '../assets/images/carpinteria/29.jpeg';
import img30 from '../assets/images/carpinteria/30.jpeg';
import img31 from '../assets/images/carpinteria/31.jpeg';
import img32 from '../assets/images/carpinteria/32.jpeg';

type LocalizedText = { es: string; en: string };
type Category = 'doors' | 'outdoors' | 'stairs' | 'storage' | 'restoration' | 'waterproofing';

const categories: Record<Category, LocalizedText> = {
  doors: { es: 'Puertas a medida', en: 'Bespoke doors' },
  outdoors: { es: 'Pérgolas y exteriores', en: 'Pergolas & outdoor spaces' },
  stairs: { es: 'Escaleras y barandillas', en: 'Stairs & balustrades' },
  storage: { es: 'Armarios y mobiliario', en: 'Wardrobes & furniture' },
  restoration: { es: 'Restauración', en: 'Restoration' },
  waterproofing: { es: 'Impermeabilización', en: 'Waterproofing' },
};

export interface GalleryItem {
  src: ImageMetadata;
  title: LocalizedText;
  category: LocalizedText;
  alt: LocalizedText;
}

function project(src: ImageMetadata, category: Category, es: string, en: string, altEs: string, altEn: string): GalleryItem {
  return { src, category: categories[category], title: { es, en }, alt: { es: altEs, en: altEn } };
}

// A selection of six projects leads the gallery; all other photographs remain available.
export const GALLERY_DATA: GalleryItem[] = [
  project(img3, 'outdoors', 'Un lugar a la sombra', 'A place in the shade', 'Pérgola de madera instalada en un espacio exterior.', 'Timber pergola installed in an outdoor space.'),
  project(img6, 'storage', 'Orden, hecho a medida', 'Order, made to measure', 'Armario blanco a medida con puertas y cajones.', 'Bespoke white wardrobe with doors and drawers.'),
  project(img31, 'stairs', 'Peldaños que flotan', 'Floating steps', 'Escalera con peldaños de madera de aspecto flotante.', 'Staircase with floating timber steps.'),
  project(img2, 'doors', 'Una entrada contemporánea', 'A contemporary entrance', 'Puerta de madera de diseño moderno.', 'Wooden door with a contemporary design.'),
  project(img19, 'outdoors', 'La calidez de la madera', 'The warmth of timber', 'Techo revestido con madera y vigas vistas.', 'Timber ceiling with exposed beams.'),
  project(img28, 'doors', 'Geometría en madera', 'Geometry in wood', 'Puerta de madera con un diseño geométrico.', 'Wooden door with a geometric pattern.'),
  project(img1, 'doors', 'El carácter de lo clásico', 'Classic character', 'Puerta de madera de estilo clásico con molduras.', 'Classic wooden door with decorative mouldings.'),
  project(img4, 'outdoors', 'Sombra en aluminio', 'Shade in aluminium', 'Pérgola exterior con estructura de aluminio.', 'Outdoor pergola with an aluminium frame.'),
  project(img5, 'stairs', 'Madera y transparencia', 'Timber & transparency', 'Escalera de madera con barandilla de vidrio.', 'Timber staircase with a glass balustrade.'),
  project(img7, 'waterproofing', 'Protección desde la base', 'Protection from the ground up', 'Trabajo de impermeabilización en una superficie exterior.', 'Waterproofing work on an outdoor surface.'),
  project(img8, 'storage', 'Madera tras el cristal', 'Wood behind glass', 'Armario de madera con puertas acristaladas.', 'Wooden cabinet with glazed doors.'),
  project(img9, 'outdoors', 'Un techo para disfrutar', 'A roof for outdoor living', 'Pérgola con cubierta de madera.', 'Pergola with a timber roof.'),
  project(img10, 'storage', 'Blanco con un toque azul', 'White with a touch of blue', 'Armario blanco con detalles azules.', 'White wardrobe with blue details.'),
  project(img11, 'restoration', 'Una nueva vida', 'A new lease of life', 'Mueble de madera restaurado.', 'Restored wooden furniture.'),
  project(img12, 'restoration', 'Conservar el carácter', 'Preserving character', 'Puerta de madera restaurada.', 'Restored wooden door.'),
  project(img13, 'storage', 'Espacio que se desliza', 'Space that slides', 'Armario con puertas correderas.', 'Wardrobe with sliding doors.'),
  project(img14, 'outdoors', 'Vivir el exterior', 'Outdoor living', 'Pérgola instalada en una zona exterior.', 'Pergola installed in an outdoor area.'),
  project(img15, 'storage', 'Cada cosa en su lugar', 'Everything in its place', 'Estantería blanca con compartimentos abiertos.', 'White shelving with open compartments.'),
  project(img16, 'storage', 'Espacio bien pensado', 'Thoughtful storage', 'Interior de un armario con espacio de almacenamiento organizado.', 'Wardrobe interior with organised storage space.'),
  project(img17, 'waterproofing', 'Un acabado protegido', 'A protected finish', 'Superficie exterior durante un trabajo de impermeabilización.', 'Outdoor surface during waterproofing work.'),
  project(img18, 'doors', 'La sencillez del blanco', 'The simplicity of white', 'Puerta blanca instalada en un interior.', 'White door installed indoors.'),
  project(img20, 'stairs', 'Un recorrido en madera', 'A path in timber', 'Barandilla de madera instalada junto a una escalera.', 'Timber balustrade installed alongside a staircase.'),
  project(img21, 'doors', 'Continuidad entre espacios', 'Connecting spaces', 'Puertas de madera instaladas en un interior.', 'Wooden doors installed indoors.'),
  project(img22, 'storage', 'Un vestidor a tu medida', 'A dressing room for you', 'Vestidor blanco con módulos abiertos de almacenamiento.', 'White walk-in wardrobe with open storage units.'),
  project(img23, 'outdoors', 'Luz y sombra', 'Light & shade', 'Pérgola blanca en un espacio exterior.', 'White pergola in an outdoor space.'),
  project(img24, 'doors', 'Dejar pasar la luz', 'Letting the light in', 'Puerta de madera con paneles de vidrio.', 'Wooden door with glass panels.'),
  project(img25, 'storage', 'Madera que organiza', 'Timber storage', 'Armario de madera con puertas a medida.', 'Wooden wardrobe with bespoke doors.'),
  project(img26, 'stairs', 'Unir alturas', 'Connecting levels', 'Escalera de madera instalada en un interior.', 'Timber staircase installed indoors.'),
  project(img27, 'storage', 'El detalle está dentro', 'The detail is inside', 'Distribución interior de un armario a medida.', 'Interior layout of a bespoke wardrobe.'),
  project(img29, 'outdoors', 'Una estructura ligera', 'A light structure', 'Pérgola con estructura de aluminio instalada en el exterior.', 'Aluminium-framed pergola installed outdoors.'),
  project(img30, 'doors', 'Líneas horizontales', 'Horizontal lines', 'Puerta de madera con un diseño de líneas horizontales.', 'Wooden door with a horizontal-line design.'),
  project(img32, 'doors', 'El contraste de lo oscuro', 'Dark contrasts', 'Puertas de madera con acabado oscuro.', 'Wooden doors with a dark finish.'),
];
