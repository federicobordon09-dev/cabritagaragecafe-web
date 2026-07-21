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
  pedidosYaUrl: "https://www.pedidosya.com.ar/restaurantes/mendoza/cabrita-garage-cafe",
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
    id: "alfajor",
    name: "Alfajor de Pistacho",
    description: "Alfajor artesanal con pistacho. La joya de nuestra pastelería.",
    badge: "🥇 Top",
    image: null,
  },
  {
    id: "cookies",
    name: "Cookies",
    description: "Tres variedades: chocolate brownie, chocolate clásica y pistacho. Crocantes por fuera, suaves por dentro.",
    badge: "🍪 Variedad",
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
    ],
  },
  {
    id: "pasteleria",
    name: "Pastelería",
    items: [
      { name: "Cookie chocolate brownie", description: "Intensa, húmeda, irresistible.", price: "$3.000" },
      { name: "Cookie Chocolate", description: "La clásica de siempre, crocante por fuera, suave por dentro.", price: "$3.100" },
      { name: "Cookie de Pistacho", description: "Sutil, elegante, con pistacho.", price: "$2.900" },
      { name: "Budín banana", description: "Húmedo y con el dulzor justo de la banana.", price: "$3.800" },
      { name: "Budín de Limón", description: "Cítrico, fresco, glaseado.", price: "$3.800" },
      { name: "Carrot Budín", description: "Especiado y con trocitos de nuez.", price: "$3.800" },
      { name: "Babka", description: "Trenzada de chocolate y canela.", price: "$3.200" },
      { name: "Muffins arándanos", description: "Esponjosos con arándanos naturales.", price: "$3.800" },
      { name: "Muffins DDL y Pistacho", description: "Dulce de leche y pistacho, la combinación perfecta.", price: "$3.400" },
      { name: "Tartitas de limón", description: "Base quebrada con crema de limón.", price: "$3.000" },
      { name: "Blondie de Pistacho", description: "El hermano rubio del brownie, con pistacho.", price: "$6.000" },
      { name: "Alfajor de Pistacho", description: "Alfajor artesanal con pistacho, nuestra joya.", price: "$6.000" },
      { name: "Alfajor de maní", description: "Clásico argentino con maní.", price: "$3.000" },
      { name: "Alfajor de Maicena", description: "El tradicional, con maicena y dulce de leche.", price: "$4.000" },
      { name: "Roll NY", description: "Estilo Nueva York, cremoso y canela.", price: "$1.200" },
      { name: "Scon de Queso Keto", description: "Scon de queso bajo en carbohidratos. Ideal para cuidarse.", price: "$5.000" },
    ],
  },
  {
    id: "brunch",
    name: "Desayunos & Brunch",
    items: [
      { name: "Avocado en Pan de Chipa", description: "Palta fresca sobre pan de chipá artesanal.", price: "$7.500" },
      { name: "Avocado en Medialuna", description: "Nuestra medialuna estrella con palta.", price: "$6.000" },
      { name: "Bagel lomito cheddar y huevo", description: "Bagel artesanal con lomito, cheddar fundido y huevo.", price: "$7.000" },
      { name: "Avocado toast", description: "Una tostada con palta y toppings.", price: "$5.500" },
    ],
  },
  {
    id: "panaderia",
    name: "Panadería",
    items: [
      { name: "Medialunas", description: "Nuestro ícono. Hojaldradas, doradas, recién horneadas." },
      { name: "Chipás", description: "Pão de queijo artesanal. Probá el de Roquefort." },
      { name: "Croissants", description: "Mantequilla, laminado, perfecto." },
      { name: "Cinnamon Roll", description: "Rol de canela esponjoso con glaseado." },
    ],
  },
  {
    id: "mayorista",
    name: "Mayorista",
    items: [
      { name: "Chipá", description: "Precio por unidad.", price: "$1.050" },
      { name: "Medialuna", description: "Precio por unidad.", price: "$1.100" },
      { name: "Medialuna Cocinada", description: "Precio por unidad.", price: "$1.300" },
      { name: "Tortita", description: "Precio por unidad.", price: "$470" },
      { name: "Ciabatta", description: "Precio por unidad.", price: "$800" },
      { name: "Baguetín", description: "Precio por unidad.", price: "$750" },
      { name: "Campo de molde", description: "Precio por unidad.", price: "$3.000" },
      { name: "Campo 1,25kg", description: "Precio por unidad.", price: "$4.000" },
      { name: "Pan de Campo", description: "Precio por unidad.", price: "$3.600" },
      { name: "Pan semillas", description: "Precio por unidad.", price: "$4.600" },
      { name: "Pan Lactal", description: "Precio por unidad.", price: "$5.500" },
      { name: "Focaccia 1kg", description: "Precio por unidad.", price: "$5.500" },
      { name: "Prepizza", description: "Precio por unidad.", price: "$1.150" },
      { name: "Pan 100% integral", description: "Precio por unidad.", price: "$5.100" },
      { name: "Pan de Chocolate", description: "Precio por unidad.", price: "$2.000" },
      { name: "Croissant 115gr", description: "Precio por unidad.", price: "$1.200" },
      { name: "Roll de Canela", description: "Precio por unidad.", price: "$1.450" },
      { name: "Roll NY", description: "Precio por unidad.", price: "$400" },
      { name: "Danesa", description: "Precio por unidad.", price: "$1.100" },
      { name: "Danesa Cocinada", description: "Precio por unidad.", price: "$1.500" },
      { name: "Fosforito", description: "Precio por unidad.", price: "$1.100" },
      { name: "Palmerita", description: "Precio por unidad.", price: "$550" },
      { name: "Bagel", description: "Precio por unidad.", price: "$1.300" },
      { name: "Pionono", description: "Precio por unidad.", price: "$821" },
      { name: "Granola x 1kg", description: "Precio por unidad.", price: "$40.000" },
      { name: "Cookie", description: "Precio por unidad (pastelería mayorista).", price: "$2.200" },
      { name: "Budín", description: "Precio por unidad (pastelería mayorista).", price: "$1.500" },
      { name: "Alfajor Pistacho", description: "Precio por unidad (pastelería mayorista).", price: "$4.900" },
      { name: "Scon Keto Parmesano", description: "Precio por unidad (pastelería mayorista).", price: "$4.500" },
      { name: "Pan de Chipa", description: "Precio por unidad (pastelería mayorista).", price: "$2.100" },
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
    q: "¿Tienen opciones veganas?",
    a: "Tenemos opciones veganas disponibles. Consultanos por WhatsApp para conocer la variedad del día.",
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
    q: "¿Tienen opciones saladas para desayunar?",
    a: "Sí, tenemos Avocado en Pan de Chipa, Avocado en Medialuna, Bagel de lomito cheddar y huevo, y Avocado toast. Consultanos por WhatsApp por disponibilidad.",
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

export const PRICE_RANGE = {
  medialunasDesde: "$1.100/u (mayorista)",
  cafeDesde: "$3.400",
} as const;

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
