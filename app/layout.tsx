import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "The Band 263",
  description:
    "Dallas-based Zimbabwean live band bringing Urban Grooves classics and live energy to every stage.",
  icons: {
    icon: "/band.png",
  },
  openGraph: {
    title: "The Band 263",
    description:
      "Dallas-based Zimbabwean live band bringing Urban Grooves classics and live energy to every stage.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
