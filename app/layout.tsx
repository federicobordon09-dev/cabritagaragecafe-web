import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const schema = localBusinessSchema();

const baseUrl = "https://cabritagaragecafe-web.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F0E6",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Cabrita Garage Café | Las mejores medialunas y chipás de Mendoza",
  description:
    "Café de especialidad, chipás artesanales y panadería recién horneada en el centro de Mendoza. Take away y delivery. ¡Visitá nuestro garage!",
  keywords: [
    "café de especialidad mendoza",
    "cafetería mendoza centro",
    "mejores medialunas mendoza",
    "chipás mendoza",
    "café belgrano 1184",
    "brunch mendoza",
    "cabrita café mendoza",
    "take away mendoza",
  ],
  authors: [{ name: "Cabrita Garage Café" }],
  openGraph: {
    title: "Cabrita Garage Café — Café de especialidad en el corazón de Mendoza",
    description:
      "Medialunas, chipás y café de especialidad recién hecho. Conocé el garage que enamora al centro de Mendoza.",
    url: baseUrl,
    siteName: "Cabrita Garage Café",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/img/imagen_del_local_fuera.webp",
        width: 1200,
        height: 630,
        alt: "Cabrita Garage Café — Café de especialidad en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabrita Garage Café — Café de especialidad en Mendoza",
    description:
      "Medialunas, chipás y café de especialidad recién hecho. El garage que enamora al centro de Mendoza.",
    images: ["/img/imagen_del_local_fuera.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
