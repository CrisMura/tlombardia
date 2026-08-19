export const site = {
  name: "Transportes Lombardía",
  shortName: "TLombardía",
  url: "https://www.tlombardia.cl",
  phone: "+56 9 7808 1743",
  secondaryPhone: "+56 32 311 6941",
  email: "contacto@tlombardia.cl",
  whatsapp: "https://wa.me/56978081743",
  analyticsId: "G-3PQH38FNTR"
};

export const navItems = [
  { label: "Inicio", href: "/", key: "inicio" },
  { label: "Nuestra Empresa", href: "/nuestra-empresa/", key: "nuestra-empresa" },
  { label: "Viajes Especiales", href: "/viajes-especiales/", key: "viajes-especiales" },
  { label: "Transfer Aeropuerto", href: "/transfer-aeropuerto/", key: "transfer-aeropuerto" },
  { label: "Turismo", href: "/turismo/", key: "turismo" },
  { label: "Trabaja con Nosotros", href: "/trabaja-con-nosotros/", key: "trabaja-con-nosotros" }
];

export const stats = [
  { number: "+20", label: "Años de Experiencia" },
  { number: "24/7", label: "Atención Operativa" },
  { number: "+500", label: "Clientes Atendidos" },
  { number: "100%", label: "Compromiso de Servicio" }
];

export const imageMap = {
  aeropuerto: "aeropuerto1",
  celebraciones: "celebraciones",
  convenio: "convenio_emp",
  graduaciones: "graduaciones",
  homeCostaMatrimonio: "home-costa-matrimonio",
  homeValparaisoIglesia: "home-valparaiso-iglesia",
  homeValparaisoMatrimonio: "home-valparaiso-matrimonio",
  homeVinaInvitados: "home-vina-invitados",
  homeVinaPlaya: "home-vina-playa",
  home: "index1",
  matrimonios: "matri1",
  mision: "mision",
  turismoRutaCosta: "turismo-ruta-costa",
  turismoRutaPatrimonial: "turismo-ruta-patrimonial",
  turismoRutaPoetas: "turismo-ruta-poetas",
  turismoRutaVino: "turismo-ruta-vino",
  valores: "valores",
  vision: "vision",
  viajes: "viajes_especiales5"
} as const;

export type ImageKey = keyof typeof imageMap;

export const homeHeroImages = [
  "home",
  "homeValparaisoMatrimonio",
  "homeVinaInvitados",
  "homeCostaMatrimonio",
  "homeValparaisoIglesia",
  "homeVinaPlaya"
] as const satisfies readonly ImageKey[];

export type ServiceCard = {
  title: string;
  description: string;
  href?: string;
  image?: ImageKey;
  marker?: string;
};

export const homeServices: ServiceCard[] = [
  {
    title: "Transfer Aeropuerto",
    description:
      "Servicio de recogida y traslado al Aeropuerto de Santiago desde la V Región costa, con seguimiento de vuelo, confianza y puntualidad garantizada para tu viaje de negocios, vacaciones o relajo. Disponible 24/7 programados.",
    href: "/transfer-aeropuerto/",
    image: "aeropuerto"
  },
  {
    title: "Viajes Especiales",
    description:
      "Organización de traslado para eventos tales como matrimonios, novios o invitados, conciertos, teatros, convenios empresas y viajes corporativos.",
    href: "/viajes-especiales/",
    image: "viajes"
  },
  {
    title: "Turismo",
    description:
      "Rutas turísticas personalizadas, circuitos por la V Región, escapadas de fin de semana, viajes grupales, parejas o familias.",
    href: "/turismo/",
    marker: "CL"
  }
];

export const companyCards: ServiceCard[] = [
  {
    title: "Misión",
    description:
      "Brindar soluciones de transporte de pasajeros seguras, eficientes y personalizadas, ofreciendo experiencias de viaje de alta calidad mediante un servicio confiable, puntual y profesional, adaptado a las necesidades de cada cliente en sus traslados.",
    image: "mision"
  },
  {
    title: "Visión",
    description:
      "Ser una empresa líder en servicios de transporte y turismo en Chile, reconocida por su excelencia operativa, compromiso con los clieentes, innovación en el servicio y capacidad de generar experiencias de viaje cómodas, seguras y memorables.",
    image: "vision"
  },
  {
    title: "Valores",
    description:
      "Compromiso: Trabajamos con responsabilidad y dedicación para cumplir cada servicio con seguridad y excelencia. Seguridad: Priorizamos el bienestar de nuestros pasajeros mediante protocolos, conducción profesional y una flota en óptimas condiciones. Calidad de Servicio: Buscamos superar las expectativas de nuestros clientes entregando atención cercana, eficiente y personalizada. Confianza: Construimos relaciones duraderas basadas en la transparencia, el respeto y el cumplimiento de nuestros compromisos. Profesionalismo: Contamos con un equipo humano capacitado y orientado a entregar una experiencia de transporte de alto nivel.",
    image: "valores"
  }
];

export const specialTripsCards: ServiceCard[] = [
  {
    title: "Matrimonios",
    description:
      "Servicio de transporte exclusivo para novios, familiares e invitados. Flota de vehículos premium para tu gran día.",
    image: "matrimonios"
  },
  {
    title: "Conciertos y Eventos",
    description:
      "Traslado de grupos para eventos musicales, festivales y conferencias. Coordinamos logística para grupos grandes.",
    image: "viajes"
  },
  {
    title: "Convenios Empresas",
    description:
      "Servicios corporativos: transporte de personal, eventos de empresa, capacitaciones y reuniones fuera de oficina.",
    image: "convenio"
  },
  {
    title: "Graduaciones",
    description:
      "Celebraciones de graduación con transporte exclusivo para familias y grupos de amigos.",
    image: "graduaciones"
  },
  {
    title: "Eventos Deportivos",
    description:
      "Transporte para equipos deportivos, barras y aficionados que asisten a competencias o encuentros especiales.",
    marker: "GO"
  },
  {
    title: "Fiestas y Celebraciones",
    description:
      "Traslado seguro para fiestas de fin de año, cumpleaños, actividades familiares, carrete seguro.",
    image: "celebraciones"
  }
];

export const airportCards: ServiceCard[] = [
  {
    title: "Traslado al Aeropuerto",
    description:
      "Te llevamos desde tu hotel, casa u oficina directamente al terminal nacional o internacional del Aeropuerto Arturo Merino Benítez de Santiago. Llega sin estrés.",
    marker: "OUT"
  },
  {
    title: "Recogida en Aeropuerto",
    description:
      "Te esperamos en los arrivals con un cartel personalizado con tu nombre. También podemos coordinar tu llegada via whatsapp de forma más privada. Traslado hacia tu destino.",
    marker: "IN"
  },
  {
    title: "Seguimiento de Vuelos",
    description:
      "Monitoreamos tu vuelo en tiempo real para ajustar la hora de recogida y evitar esperas innecesarias.",
    marker: "ETA"
  },
  {
    title: "Puntualidad Garantizada",
    description:
      "Calculamos el tiempo necesario para que llegues con tranquilidad a tu vuelo. Tu tiempo es importante.",
    marker: "24"
  },
  {
    title: "Grupos y Familias",
    description:
      "Flota de vans y buses para familias numerosas o grupos. Equipaje incluido en el servicio.",
    marker: "VIP"
  },
  {
    title: "Atención 24/7",
    description:
      "Servicio disponible todos los días del año, incluyendo festivos y horarios nocturnos (previa programación).",
    marker: "365"
  }
];

export const tourismCards: ServiceCard[] = [
  {
    title: "Ruta Patrimonial",
    description:
      "La ciudad de Valparaíso, cuyos orígenes se remontan al siglo XVI, es nuestra ciudad puerto, Patrimonio de la Humanidad y sede del Poder Legislativo, acompañado por Viña del Mar, su Reloj de Flores y su anfiteatro, terminando por la Capital Gastronómica que es Con Con.\n**Itinerario**: Muelle Prat, Plaza Sotomayor, Iglesia La Matriz, Paseo 21 de Mayo, Las Torpederas, Playa Ancha, Laguna Verde, La Sebastiana, Camino Cintura, Cerro Bellavista, Centro Valparaiso, Cerro Baron, Caleta Portales.\n**Duración**: 4 horas (incluye 1 hora de colación).\n**Mínimo**: 3 pasajeros.",
    image: "turismoRutaPatrimonial",
    marker: "RUT"
  },
  {
    title: "Ruta del Vino, Valle de Casablanca",
    description:
      "Iniciamos nuestro recorrido en el Santuario de Lo Vásquez, mostrando la arquitectura de esta imponente iglesia escondida entre los valles. Continuamos por Casablanca en un recorrido por la ciudad y seguimos en ruta hacia los hermosos valles y viñedos. Visitamos Viña Mar e Indómita. Cliente puede elegir otra opción.\n**Itinerario**: Santuario Lo Vásquez, visita a la ciudad de Casablanca, visita a 2 viñedos. Opcional, almuerzo en restaurant de viñedos por cuenta del pasajero.\n**Duración**: 4 horas aproximadamente.\n**Mínimo**: 3 pasajeros.",
    image: "turismoRutaVino",
    marker: "MAR"
  },
  {
    title: "Ruta de los Poetas, Litoral Central",
    description:
      "Iniciamos nuestro recorrido por Casablanca, ciudad de los Valles, siguiendo por Algarrobo y su encanto. El Quisco e Isla Negra nuestra detención obligada para visitar una de las casas predilectas de nuestro poeta Pablo Neruda (ahora Casa-Museo), lugar donde junto al mar y la tranquilidad de la zona inspiro para escribir muchas de sus obras.\n**Itinerario**: Casablanca, Algarrobo, El Quisco, El Tabo, Isla Negra.\n**Duración**: 6 horas aproximadamente.\n**Mínimo**: 3 personas.",
    image: "turismoRutaPoetas",
    marker: "VIN"
  },
  {
    title: "Ruta de la Costa",
    description:
      "Iniciamos nuestro recorrido por el borde costero de Valparaíso, Viña del Mar y Con Con. La ruta de la costa, comienza a construirse en 1917, donde llegaremos a Quintero, donde corsarios y piratas dieron vida a interesantes historias. Horcón, quizás el lugar más místico y típico de la zona, con su Puente de los Deseos, donde también encontraremos a sus pescadores y artesanos. Maitencillo y Cachagua, que destacan pos sus casas y playas que atraen surfistas, finalizando en Zapallar, donde sus construcciones al estilo europeo y cuidado jardines aparecen en medio de frondosos bosques que llegan hasta la playa.\n**Itinerario**: Valparaiso, Viña del Mar, Con Con Costa, Quintero, Horcon, Maitencillo, Cachagua, Zapallar.\n**Duración**: 6 horas aproximadamente.\n**Mínimo**: 3 personas.",
    image: "turismoRutaCosta",
    marker: "ADV"
  },
  {
    title: "Tours Culturales",
    description:
      "Rutas por ciudades patrimoniales, museos y lugares históricos de Chile.",
    marker: "CUL"
  },
  {
    title: "Viajes Familiares",
    description:
      "Paquetes diseñados para familias. Seguridad, comodidad y entretenimiento para todos.",
    marker: "FAM"
  }
];

export const jobsCards: ServiceCard[] = [
  {
    title: "Sueldos Competitivos",
    description:
      "Ofrecemos remuneraciones atractivas y puntuales. Tu trabajo merece una recompensa justa.",
    marker: "$"
  },
  {
    title: "Flexibilidad de Horarios",
    description:
      "Adaptamos los turnos a tus necesidades para cuidar el balance entre trabajo y vida personal.",
    marker: "HR"
  },
  {
    title: "Flota Moderna",
    description:
      "Trabajamos con vehículos nuevos y bien mantenidos. Comodidad y seguridad garantizada.",
    marker: "BUS"
  },
  {
    title: "Oportunidades de Crecimiento",
    description:
      "Promovemos el desarrollo profesional dentro de la empresa, con ascensos y capacitación.",
    marker: "UP"
  },
  {
    title: "Buen Ambiente Laboral",
    description:
      "Equipo de trabajo colaborativo y respetuoso. Nos preocupamos por el bienestar de todos.",
    marker: "EQ"
  },
  {
    title: "Beneficios y Seguros",
    description:
      "Contamos con seguros y beneficios adicionales para nuestros colaboradores.",
    marker: "OK"
  }
];
