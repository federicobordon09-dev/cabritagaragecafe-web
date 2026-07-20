import type { BusinessSchema } from "./types";
import { BUSINESS, LOCATIONS, SCHEDULE } from "./data";

function openingHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "14:00",
    },
  ];
}

export function localBusinessSchema(): BusinessSchema {
  const verifiedLocation = LOCATIONS.find((l) => l.isVerified)!;

  return {
    "@context": "https://schema.org",
    "@type": ["CafeOrCoffeeShop", "Bakery", "LocalBusiness"],
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: "https://cabritagaragecafe-web.vercel.app",
    telephone: BUSINESS.phone,
    email: "",
    image: "https://cabritagaragecafe-web.vercel.app/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: verifiedLocation.address,
      addressLocality: verifiedLocation.city,
      addressRegion: verifiedLocation.province,
      postalCode: verifiedLocation.zip,
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: verifiedLocation.coordinates!.lat,
      longitude: verifiedLocation.coordinates!.lng,
    },
    openingHoursSpecification: openingHoursSpecification(),
    servesCuisine: ["Coffee", "Bakery", "Vegan", "Pastry"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "302",
    },
    sameAs: [BUSINESS.instagramUrl],
    currenciesAccepted: "ARS",
    paymentAccepted: ["Cash", "Mercado Pago", "Credit Card"],
  };
}
