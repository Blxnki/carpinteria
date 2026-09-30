import type { ImageMetadata } from 'astro';
import wardrobe from '../assets/images/carpinteria/6.jpeg';
import wardrobeInterior from '../assets/images/carpinteria/16.jpeg';
import pergola from '../assets/images/carpinteria/3.jpeg';
import pergolaRoof from '../assets/images/carpinteria/9.jpeg';
import door from '../assets/images/carpinteria/2.jpeg';
import interiorDoor from '../assets/images/carpinteria/18.jpeg';
import { serviceRoutes } from '../i18n/routes';

export type ServiceKey = keyof typeof serviceRoutes;
export type ServiceCopy = {
  label: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  imageAlt: string;
  detailAlt: string;
  sections: { heading: string; text: string }[];
  checklist: string[];
  faqs: { question: string; answer: string }[];
};
export type ServicePage = {
  key: ServiceKey;
  image: ImageMetadata;
  detailImage: ImageMetadata;
  es: ServiceCopy;
  en: ServiceCopy;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    key: 'furniture', image: wardrobe, detailImage: wardrobeInterior,
    es: {
      label: 'Muebles y armarios a medida',
      title: 'Muebles y armarios a medida en Lanzarote | Rayco Cáceres',
      description: 'Muebles y armarios a medida en Lanzarote. Diseñamos soluciones de almacenaje desde nuestro taller en Arrecife. Consulta tu proyecto con Rayco Cáceres.',
      heading: 'Muebles a medida en Lanzarote',
      intro: 'Un armario que aprovecha el hueco disponible, una estantería que ordena tu salón o un mueble pensado para tu día a día. En nuestro taller de Arrecife trabajamos la carpintería a medida para adaptar cada pieza a tu espacio.',
      imageAlt: 'Armario blanco a medida de la galería de Carpintería Rayco Cáceres',
      detailAlt: 'Distribución interior de un armario con zonas de almacenaje',
      sections: [
        { heading: 'Armarios por dentro y por fuera', text: 'El frente de un armario importa, pero su interior es lo que utilizas cada día. Hablamos contigo sobre lo que necesitas guardar para plantear la distribución de baldas, cajones y espacio para colgar. También valoramos el tipo de apertura y el espacio libre alrededor, especialmente cuando el mueble comparte una habitación con otros elementos.' },
        { heading: 'Un mueble que encaje en tu hogar', text: 'Las medidas, el uso y el acabado se estudian juntos. Podemos partir de una idea, una fotografía de referencia o del hueco que quieres aprovechar. Revisamos contigo las opciones de material y acabado para que la solución tenga sentido con el resto de la estancia y con el uso que va a recibir.' },
        { heading: 'Del primer contacto al presupuesto', text: 'Para empezar, cuéntanos dónde irá el mueble y qué quieres resolver. Una foto del espacio y unas medidas aproximadas ayudan a orientar la conversación; los detalles y las medidas definitivas se concretan antes de fabricar. El presupuesto depende del tamaño, la distribución, los materiales y el trabajo de instalación.' },
      ],
      checklist: ['Fotos del hueco y de la estancia', 'Ancho, alto y fondo aproximados', 'Qué necesitas guardar o colocar', 'Referencias del estilo y acabado que te gustan'],
      faqs: [
        { question: '¿Hacéis armarios y muebles para espacios pequeños?', answer: 'Sí. La carpintería a medida permite estudiar el hueco disponible y la forma de utilizarlo. Envíanos fotos y medidas aproximadas para valorar una distribución y un tipo de apertura adecuados.' },
        { question: '¿Podéis trabajar a partir de una idea o una foto?', answer: 'Sí. Una referencia nos ayuda a entender el estilo que buscas. Después revisamos medidas, uso y materiales para adaptar el diseño a tu espacio.' },
        { question: '¿Cuánto cuesta un mueble a medida?', answer: 'No hay una tarifa única: influyen las dimensiones, los materiales, el acabado, la distribución y la instalación. Con esos datos podemos preparar un presupuesto para tu proyecto.' },
      ],
    },
    en: {
      label: 'Bespoke furniture and wardrobes',
      title: 'Bespoke Furniture & Wardrobes in Lanzarote | Rayco Cáceres',
      description: 'Bespoke furniture and wardrobes in Lanzarote, made from our Arrecife workshop. Discuss storage, finishes and your project with Rayco Cáceres.',
      heading: 'Bespoke furniture in Lanzarote',
      intro: 'A wardrobe that makes the most of an alcove, shelving that brings order to your living room or a piece designed around everyday life. From our workshop in Arrecife, we create carpentry that fits your space.',
      imageAlt: 'White bespoke wardrobe from the Rayco Cáceres carpentry portfolio',
      detailAlt: 'Wardrobe interior with different storage compartments',
      sections: [
        { heading: 'Wardrobes, inside and out', text: 'A wardrobe’s front matters, but its interior is what you use every day. We discuss what you need to store before planning shelves, drawers and hanging space. The opening mechanism and the room around the wardrobe are also part of the design, particularly when it needs to fit alongside other furniture.' },
        { heading: 'Furniture that fits your home', text: 'Dimensions, purpose and finish are considered together. We can start with an idea, a reference photograph or the space you want to use. We discuss material and finish options with you, taking into account the rest of the room and how the furniture will be used.' },
        { heading: 'From your first enquiry to a quote', text: 'Tell us where the piece will go and what you want it to do. Photos and approximate measurements help us start the conversation; final dimensions and details are confirmed before manufacture. Pricing depends on size, internal layout, materials, finish and installation.' },
      ],
      checklist: ['Photos of the space and surrounding room', 'Approximate width, height and depth', 'What you need to store or display', 'Examples of styles and finishes you like'],
      faqs: [
        { question: 'Can you make furniture for small spaces?', answer: 'Yes. Bespoke carpentry lets us consider the available space and how you use it. Send photos and approximate measurements so we can discuss the layout and suitable opening options.' },
        { question: 'Can we start with an idea or a photograph?', answer: 'Yes. A reference helps us understand the look you want. We then consider measurements, materials and everyday use to adapt the design to your space.' },
        { question: 'How much does bespoke furniture cost?', answer: 'There is no single price: dimensions, materials, finish, layout and installation all affect the quote. Share these details so we can price your project.' },
      ],
    },
  },
  {
    key: 'pergolas', image: pergola, detailImage: pergolaRoof,
    es: {
      label: 'Pérgolas de madera y aluminio',
      title: 'Pérgolas en Lanzarote: madera y aluminio | Rayco Cáceres',
      description: 'Pérgolas de madera y aluminio en Lanzarote para patios y terrazas. Consulta diseño, acabados e instalación con Carpintería Rayco Cáceres en Arrecife.',
      heading: 'Pérgolas en Lanzarote',
      intro: 'Convierte el patio o la terraza en un espacio para estar. Realizamos pérgolas de madera y aluminio, estudiando las dimensiones, el acabado y su relación con la vivienda para dar forma a tu proyecto exterior.',
      imageAlt: 'Pérgola de madera en un patio, realizada por Rayco Cáceres',
      detailAlt: 'Detalle de vigas y cubierta de una pérgola de madera',
      sections: [
        { heading: 'Madera o aluminio para tu terraza', text: 'La madera aporta textura y calidez; el aluminio ofrece otra estética y distintas necesidades de cuidado. La elección depende del aspecto que busques, el espacio disponible y el mantenimiento que quieras asumir. Podemos comentar contigo ambas opciones y el acabado, sin decidir únicamente por una fotografía.' },
        { heading: 'Diseñar teniendo en cuenta el exterior', text: 'En una pérgola importan tanto las proporciones como su ubicación. Conviene revisar la exposición al sol, al viento y al ambiente marino, además de los apoyos y la cubierta prevista. Las condiciones del lugar ayudan a definir una solución adecuada; cada instalación necesita valorar el espacio real.' },
        { heading: 'Preparar tu proyecto de pérgola', text: 'Envíanos fotografías del patio o la terraza, medidas aproximadas y una explicación de cómo quieres utilizarlo. Indica si la estructura irá junto a una fachada y si existe una cubierta anterior. Con esa información podemos hablar del diseño, los materiales, los detalles de instalación y el presupuesto.' },
      ],
      checklist: ['Fotos generales del patio o la terraza', 'Medidas y ubicación de los posibles apoyos', 'Preferencia por madera o aluminio', 'Uso previsto y referencias de cubierta o acabado'],
      faqs: [
        { question: '¿Trabajáis pérgolas de madera y de aluminio?', answer: 'Sí, realizamos pérgolas en ambos materiales. La elección se valora según el diseño, las condiciones del lugar y los cuidados que quieras dedicar a la estructura.' },
        { question: '¿Qué mantenimiento necesita una pérgola de madera?', answer: 'Depende de la madera, el acabado y la exposición. Es conveniente revisar su estado y mantener el tratamiento siguiendo las indicaciones del producto utilizado. Comentamos estos cuidados al definir el acabado.' },
        { question: '¿Podéis valorar una pérgola con fotografías?', answer: 'Las fotos y las medidas sirven para una primera orientación. Para concretar el trabajo hay que revisar las características del lugar, los apoyos y los detalles de la estructura.' },
      ],
    },
    en: {
      label: 'Wood and aluminium pergolas',
      title: 'Wood & Aluminium Pergolas in Lanzarote | Rayco Cáceres',
      description: 'Wood and aluminium pergolas in Lanzarote for patios and terraces. Discuss design, finishes and installation with Rayco Cáceres in Arrecife.',
      heading: 'Pergolas in Lanzarote',
      intro: 'Make your patio or terrace a place to spend time. We build wood and aluminium pergolas, considering dimensions, finish and how the structure relates to your home to shape your outdoor project.',
      imageAlt: 'Wooden pergola in a patio, built by Rayco Cáceres',
      detailAlt: 'Detail of timber beams and the roof of a wooden pergola',
      sections: [
        { heading: 'Wood or aluminium for your terrace', text: 'Wood brings warmth and texture; aluminium offers a different appearance and care requirements. The choice depends on the look you want, the space available and the maintenance you are prepared to undertake. We can discuss both options and their finishes with you, looking beyond a reference photograph.' },
        { heading: 'Designing for an outdoor setting', text: 'A pergola’s location matters as much as its proportions. Sun, wind and the coastal environment should be considered alongside the proposed supports and roof. Conditions at the property help shape a suitable solution; each installation needs an assessment of the actual space.' },
        { heading: 'Preparing your pergola project', text: 'Send photographs of your patio or terrace, approximate measurements and a description of how you would like to use it. Tell us whether the structure will sit beside a wall and whether there is an existing roof. These details help us discuss the design, materials, installation and quote.' },
      ],
      checklist: ['General photos of the patio or terrace', 'Measurements and possible support positions', 'Your preference for wood or aluminium', 'How you will use it, plus roof or finish references'],
      faqs: [
        { question: 'Do you work with both wood and aluminium?', answer: 'Yes. We build pergolas in both materials. We discuss the choice based on the design, site conditions and the care you want to give the structure.' },
        { question: 'What maintenance does a wooden pergola need?', answer: 'This depends on the timber, finish and exposure. Inspect its condition and maintain the treatment according to the product instructions. We discuss care when choosing the finish.' },
        { question: 'Can you assess a pergola project from photographs?', answer: 'Photos and measurements are useful for an initial discussion. Site conditions, supports and structural details need to be reviewed before the work is finalised.' },
      ],
    },
  },
  {
    key: 'doors', image: door, detailImage: interiorDoor,
    es: {
      label: 'Puertas de madera',
      title: 'Puertas de madera en Lanzarote | Rayco Cáceres',
      description: 'Puertas de madera en Lanzarote: carpintería a medida e instalación. Consulta opciones para interior y exterior en nuestro taller de Arrecife.',
      heading: 'Puertas de madera en Lanzarote',
      intro: 'Una puerta forma parte de cómo se ve y se utiliza tu casa. Trabajamos puertas de madera e instalaciones de carpintería, adaptando medidas, apertura y acabado al espacio y al uso que necesitas.',
      imageAlt: 'Puerta de madera de diseño contemporáneo de la galería de Rayco Cáceres',
      detailAlt: 'Puerta blanca de interior instalada en una vivienda',
      sections: [
        { heading: 'Puertas de interior y de exterior', text: 'No todas las puertas tienen las mismas necesidades. En el interior importan la distribución, el paso disponible y la continuidad con la decoración. En el exterior también hay que considerar la exposición al sol, la humedad y el acabado protector. Revisamos el uso previsto para valorar materiales y detalles del proyecto.' },
        { heading: 'Medidas, apertura y remates', text: 'Para que una puerta funcione bien no basta con elegir un diseño. El marco, el sentido de apertura, los herrajes y el ajuste al hueco forman parte del trabajo. Si se trata de sustituir una puerta, conviene conocer el estado del marco actual y de los elementos que la rodean antes de definir la instalación.' },
        { heading: 'Cambiar una puerta o recuperar la existente', text: 'También realizamos restauración de madera. Si quieres conservar una puerta, envíanos fotos del conjunto y de las zonas deterioradas para comentar su estado. Cuando buscas una puerta nueva, una referencia del diseño y las medidas aproximadas nos ayudan a preparar la conversación y concretar un presupuesto.' },
      ],
      checklist: ['Fotos de la puerta o del hueco existente', 'Ancho y alto aproximados', 'Uso interior o exterior y sentido de apertura', 'Estado del marco y acabado que buscas'],
      faqs: [
        { question: '¿Podéis sustituir una puerta existente?', answer: 'Sí, realizamos trabajos de instalación de carpintería. Para valorar una sustitución necesitamos revisar las medidas del hueco y el estado del marco, además del diseño de la nueva puerta.' },
        { question: '¿Restauráis puertas de madera?', answer: 'La restauración forma parte de nuestros servicios. La posibilidad de recuperar una puerta depende de su estado; unas fotografías del conjunto y de los daños ayudan a orientar la valoración.' },
        { question: '¿Qué necesito para pedir presupuesto?', answer: 'Indica si es una puerta de interior o exterior, comparte medidas aproximadas y fotos, y cuéntanos el acabado que buscas. Si son varias puertas, indica también la cantidad y las diferencias entre ellas.' },
      ],
    },
    en: {
      label: 'Wooden doors',
      title: 'Wooden Doors in Lanzarote | Rayco Cáceres',
      description: 'Wooden doors in Lanzarote: bespoke carpentry and installation. Discuss interior and exterior door options with our workshop in Arrecife.',
      heading: 'Wooden doors in Lanzarote',
      intro: 'A door is part of how your home looks and works. We make wooden doors and carry out carpentry installations, adapting dimensions, opening direction and finish to your space and needs.',
      imageAlt: 'Contemporary wooden door from the Rayco Cáceres project gallery',
      detailAlt: 'White interior door installed in a home',
      sections: [
        { heading: 'Interior and exterior doors', text: 'Different doors have different requirements. Inside, room layout, clear passage and consistency with the décor all matter. Outside, sunlight, moisture and a protective finish must also be considered. We discuss the intended use before looking at materials and project details.' },
        { heading: 'Measurements, opening direction and fitting', text: 'Choosing a design is only part of making a door work well. The frame, opening direction, hardware and fit are all part of the job. When replacing a door, we need to understand the condition of the existing frame and its surroundings before planning the installation.' },
        { heading: 'Replace a door or restore the original', text: 'We also carry out timber restoration. If you want to keep an existing door, send photos of the whole door and any damaged areas so we can discuss its condition. For a new door, a design reference and approximate measurements help us start the conversation and prepare a quote.' },
      ],
      checklist: ['Photos of the door or existing opening', 'Approximate width and height', 'Interior or exterior use and opening direction', 'Frame condition and your preferred finish'],
      faqs: [
        { question: 'Can you replace an existing door?', answer: 'Yes, we carry out carpentry installations. To assess a replacement we need to review the opening dimensions and frame condition, as well as the design of the new door.' },
        { question: 'Do you restore wooden doors?', answer: 'Restoration is one of our services. Whether a door can be restored depends on its condition; photographs of the whole door and any damage help with an initial assessment.' },
        { question: 'What do I need to request a quote?', answer: 'Tell us whether it is an interior or exterior door, share approximate dimensions and photos, and describe the finish you want. For several doors, include the quantity and any differences between them.' },
      ],
    },
  },
];
