import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://otsy.ge"),
  title: "OtsY — Tbilisi Cuisine",
  description:
    "Tbilisi cuisine created with passion and a contemporary vision of Chef de cuisine Giorgi Ninua. OtsY offers an unforgettable culinary experience inspired by and delivered in the atmospheric old town of Tbilisi.",
  keywords: [
    "OtsY",
    "Tbilisi restaurant",
    "Georgian cuisine",
    "fine dining Tbilisi",
    "contemporary Georgian food",
    "Chef Giorgi Ninua",
    "old town Tbilisi restaurant",
  ],
  openGraph: {
    title: "OtsY — Tbilisi Cuisine",
    description:
      "Contemporary Georgian cuisine by Chef Giorgi Ninua in the heart of old Tbilisi.",
    type: "website",
    locale: "en_US",
    siteName: "OtsY",
    images: [
      {
        url: "/images/419208437_17954574227719100_8625329902175172305_n.jpg",
        width: 1200,
        height: 630,
        alt: "OtsY restaurant dining hall in Tbilisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OtsY — Tbilisi Cuisine",
    description:
      "Contemporary Georgian cuisine by Chef Giorgi Ninua in the heart of old Tbilisi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "OtsY",
  alternateName: "OtsY Tbilisi Cuisine",
  description:
    "Tbilisi cuisine created with passion and a contemporary vision of Chef de cuisine Giorgi Ninua.",
  servesCuisine: "Georgian",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tbilisi",
    addressRegion: "Tbilisi",
    addressCountry: "GE",
    streetAddress: "Old Town",
  },
  telephone: "+995500502020",
  email: "hello@otsy.ge",
  url: "https://otsy.ge",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "23:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/otsy20/",
    "https://www.facebook.com/OtsY20/",
    "https://www.tripadvisor.com/Restaurant_Review-g294195-d23889554-Reviews-Otsy-Tbilisi.html",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise-overlay min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
