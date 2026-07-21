export type MenuItem = {
  name: string;
  description: string;
  price?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: readonly MenuItem[];
};

export type BusinessSchema = {
  "@context": string;
  "@type": string[];
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  image: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  servesCuisine: string[];
  priceRange: string;
  aggregateRating: {
    "@type": string;
    ratingValue: string;
    bestRating: string;
    ratingCount: string;
  };
  sameAs: string[];
  currenciesAccepted: string;
  paymentAccepted: string[];
};
