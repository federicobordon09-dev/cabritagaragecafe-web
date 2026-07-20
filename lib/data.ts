export const BUSINESS = {
  name: "Cabrita Garage Café",
  shortName: "Cabrita",
  tagline: "El garage de las mejores medialunas de Mendoza",
  description:
    "Café de especialidad, chipás artesanales y panadería recién horneada en el corazón del centro de Mendoza.",
  phone: "+542617176679",
  phoneDisplay: "+54 261 717-6679",
  instagram: "cabritacafegarage",
  instagramUrl: "https://instagram.com/cabritacafegarage",
  googleMapsUrl: "https://maps.google.com/?q=Cabrita+Garage+Café+Av+Belgrano+1184+Mendoza",
  pedidosYaUrl: "https://pedidosya.com.ar",
  whatsappMessage: "¡Hola Cabrita! Quiero hacer un pedido 🥐☕",
} as const;

export const LOCATIONS = [
  {
    name: "Cabrita Garage Café — Belgrano",
    address: "Av. Belgrano 1184",
    city: "Ciudad de Mendoza",
    province: "Mendoza",
    zip: "M5500",
    coordinates: { lat: -32.8878, lng: -68.8497 },
    isVerified: true,
  },
  {
    name: "Cabrita Garage Café — Beltrán",
    address: "Beltrán y Juan B. Justo",
    city: "Mendoza",
    province: "Mendoza",
    coordinates: null,
    isVerified: false,
    note: "Dirección exacta no verificada",
  },
] as const;

export const SCHEDULE = {
  weekdays: { days: "Lunes a Viernes", hours: "09:00 – 20:30" },
  saturday: { days: "Sábado", hours: "09:00 – 14:00" },
  sunday: { days: "Domingo", hours: "09:00 – 14:00" },
} as const;

export const PRODUCTS = [
  {
    id: "medialunas",
    name: "Medialunas",
    description: "Nuestro producto estrella. Descritas como las mejores de Mendoza. Hojaldradas, doradas, recién horneadas.",
    badge: "⭐ Favoritas",
    image: null,
  },
  {
    id: "chipas",
    name: "Chipás",
    description: "Pão de queijo artesanal con variante Roquefort. Considerados los mejores de la ciudad por su frescura y sabor.",
    badge: "⭐ Imperdibles",
    image: null,
  },
  {
    id: "cafe",
    name: "Café de Especialidad",
    description: "Espresso, latte y más. Café de primera calidad con muy buena ejecución. El complemento perfecto.",
    badge: "☕ Especialidad",
    image: null,
  },
  {
    id: "scones",
    name: "Scones",
    description: "Recién horneados, con esa textura única que solo la panadería artesanal logra.",
    badge: null,
    image: null,
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "El maridaje ideal con un café recién hecho. Crocantes por fuera, suaves por dentro.",
    badge: null,
    image: null,
  },
  {
    id: "vegano",
    name: "Opciones Veganas",
    description: "Cookies, brownies y más opciones veganas y sin gluten. Para que nadie se quede sin probar.",
    badge: "🌱 Sin gluten",
    image: null,
  },
] as const;

export const MENU_CATEGORIES = [
  {
    id: "cafes",
    name: "Cafés",
    items: [
      { name: "Espresso", description: "Café de especialidad en su forma más pura." },
      { name: "Latte", description: "Suave y cremoso, ideal para cualquier momento." },
      { name: "Café filtrado", description: "Método de extracción lenta para sabores más complejos." },
    ],
  },
  {
    id: "panaderia",
    name: "Panadería",
    items: [
      { name: "Medialunas", description: "Nuestro ícono. Hojaldradas, doradas, recién horneadas." },
      { name: "Chipás", description: "Pão de queijo artesanal. Probá el de Roquefort." },
      { name: "Croissants", description: "Mantequilla, laminado, perfecto." },
      { name: "Scones", description: "Clásicos ingleses con un toque mendocino." },
      { name: "Cookies", description: "Crocantes por fuera, suaves por dentro." },
      { name: "Cinnamon Roll", description: "Rol de canela esponjoso con glaseado." },
    ],
  },
  {
    id: "brunch",
    name: "Desayunos & Brunch",
    items: [
      { name: "Avocado Toast", description: "Palta, jamón y queso sobre pan artesanal." },
      { name: "Sándwich de Chipá", description: "Chipá relleno, una experiencia única." },
      { name: "Tostadas", description: "Pan artesanal con toppings del día." },
    ],
  },
  {
    id: "veganos",
    name: "Veganos & Sin Gluten",
    items: [
      { name: "Cookies Veganas", description: "Todo el sabor, sin ingredientes de origen animal." },
      { name: "Brownies Veganos", description: "Húmedos, chocolatosos, 100% vegetales." },
      { name: "Opciones sin gluten", description: "Consultá por nuestra variedad disponible." },
    ],
  },
  {
    id: "deli",
    name: "Deli",
    items: [
      { name: "Sándwich de Jamón y Pera", description: "Cuando hay pan disponible. Preguntanos antes." },
      { name: "Ensalada Vegana", description: "Fresca, colorida, nutritiva." },
    ],
  },
] as const;

export const REVIEWS = [
  {
    text: "Las mejores medialunas de Mendoza. El lugar es chiquito pero el sabor es gigante. Imperdible.",
    author: "Wanderlog",
    rating: 5,
  },
  {
    text: "Los chipás son los mejores de la ciudad, especialmente el de Roquefort. La atención es increíble.",
    author: "InMendoza",
    rating: 5,
  },
  {
    text: "Excelente café de especialidad. El personal te recomienda con tanto amor que querés probar todo.",
    author: "Google Reviews",
    rating: 5,
  },
  {
    text: "Un garaje convertido en el lugar más acogedor para desayunar. La vereda tiene nombre propio.",
    author: "TripAdvisor",
    rating: 5,
  },
  {
    text: "Tienen opciones veganas riquísimas. Las cookies y brownies son espectaculares.",
    author: "HappyCow",
    rating: 5,
  },
  {
    text: "El cinnamon roll es MUST. El café de especialidad muy bien ejecutado. Volvemos cada vez que venimos a Mendoza.",
    author: "Wanderlog",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    q: "¿Dónde queda Cabrita Garage Café?",
    a: "Estamos en Av. Belgrano 1184, Ciudad de Mendoza. También tenemos sucursal en Beltrán y Juan B. Justo.",
  },
  {
    q: "¿Cuáles son sus horarios?",
    a: "Lunes a viernes de 09:00 a 20:30 hs. Sábados y domingos de 09:00 a 14:00 hs.",
  },
  {
    q: "¿Tienen opciones veganas o sin gluten?",
    a: "Sí, contamos con productos veganos y opciones sin gluten: cookies, brownies y más. Consultanos por la variedad disponible.",
  },
  {
    q: "¿Qué producto no puedo dejar de probar?",
    a: "Nuestras medialunas y los chipás (especialmente el de Roquefort) son los favoritos de la casa.",
  },
  {
    q: "¿Hacen delivery?",
    a: "Sí, podés pedir por PedidosYa o escribirnos por WhatsApp para retiro o envío.",
  },
  {
    q: "¿Puedo sentarme a consumir en el local?",
    a: "El espacio es pequeño y estilo garage, ideal para take-away. Pero tenemos vereda para disfrutar sin apuro.",
  },
  {
    q: "¿Aceptan mascotas?",
    a: "Sí, somos pet-friendly en la vereda. Traé a tu compañero de cuatro patas.",
  },
  {
    q: "¿Tienen menú para eventos o pedidos grandes?",
    a: "Sí, escribinos por WhatsApp para coordinar pedidos especiales y eventos.",
  },
  {
    q: "¿El sándwich de jamón y pera está siempre?",
    a: "No siempre, depende de la disponibilidad de pan. Te recomendamos consultar antes de ir.",
  },
  {
    q: "¿Venden por mayor o para empresas?",
    a: "Consultanos por WhatsApp para pedidos especiales y por mayor.",
  },
  {
    q: "¿Tienen wifi o espacio de trabajo?",
    a: "El local es pequeño y enfocado en take-away. No es un espacio de coworking.",
  },
  {
    q: "¿Cómo puedo dejar una reseña?",
    a: "Buscá 'Cabrita Garage Café' en Google y dejá tu opinión. ¡Nos ayuda un montón!",
  },
] as const;

export const EVENTS = [
  {
    title: "Vermutarde en Cabrita",
    description:
      "Evento de vermut, música y buena onda. Seguinos en Instagram para conocer las próximas fechas.",
    date: "Próximamente",
    image: null,
  },
  {
    title: "Pop-ups & Lanzamientos",
    description:
      "Participamos de la escena cafetalera local con colaboraciones y ediciones limitadas.",
    date: "Todo el año",
    image: null,
  },
] as const;
