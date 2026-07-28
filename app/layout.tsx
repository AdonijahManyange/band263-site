import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theband263.com"),

  title: {
    default: "The Band 263 | Zimbabwean Live Band in Texas",
    template: "%s | The Band 263",
  },

  description:
    "The Band 263 is a Zimbabwean live band based in Texas, bringing Urban Grooves classics and unforgettable live performances to weddings, festivals, churches, corporate events, and private celebrations.",

  keywords: [
    "The Band 263",
    "Zimbabwean Band",
    "Zimbabwean Live Band",
    "Texas Live Band",
    "Dallas Live Band",
    "Afro Fusion Band",
    "Urban Grooves",
    "Wedding Band Texas",
    "Corporate Event Band",
    "Live Entertainment",
    "Zimbabwean Music",
  ],

  openGraph: {
    title: "The Band 263 | Zimbabwean Live Band in Texas",
    description:
      "Zimbabwean live band based in Texas performing Urban Grooves, Afro Fusion, Gospel, and live entertainment for weddings, festivals, churches, and corporate events.",
    url: "https://www.theband263.com",
    siteName: "The Band 263",
    images: [
      {
        url: "/band.png",
        width: 1200,
        height: 630,
        alt: "The Band 263",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Band 263",
    description:
      "Zimbabwean live band based in Texas performing unforgettable live music.",
    images: ["/band.png"],
  },

  alternates: {
    canonical: "https://www.theband263.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",

  name: "The Band 263",

  url: "https://www.theband263.com",

  logo: "https://www.theband263.com/BAND263%20NEW%20BLACK%20LOGO.png",

  image: "https://www.theband263.com/band.png",

  description:
    "Zimbabwean live band based in Texas specializing in Urban Grooves, Afro Fusion, Gospel, weddings, festivals, churches, corporate events, and private celebrations.",

  foundingDate: "2024",

  genre: [
    "Urban Grooves",
    "Afro Fusion",
    "Zimbabwean Music",
    "South African Music",
    "Gospel",
    "African Music",
  ],

  areaServed: {
    "@type": "State",
    name: "Texas",
  },

  sameAs: [
    "https://www.instagram.com/theband263/",
    "https://www.youtube.com/@theband263",
  ],

  member: [
    {
      "@type": "Person",
      name: "Dumisani Manyange",
      jobTitle: "Pianist",
    },
    {
      "@type": "Person",
      name: "Tendekai Mano",
      jobTitle: "Bass Guitarist",
    },
    {
      "@type": "Person",
      name: "Nigel Kutepa",
      jobTitle: "Lead Guitarist",
    },
    {
      "@type": "Person",
      name: "Simbarashe Dembedza",
      jobTitle: "Lead Drummer",
    },
    {
      "@type": "Person",
      name: "Judah Nortey",
      jobTitle: "Drummer",
    },
    {
      "@type": "Person",
      name: "MacDonald Charles",
      jobTitle: "Audio Engineer",
    },
    {
      "@type": "Person",
      name: "Adonijah Manyange",
      jobTitle: "Media Management",
    },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}