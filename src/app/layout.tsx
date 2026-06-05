import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal"],
  display: "swap",
  preload: false, // only used in logo, not critical
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F0E8DC",
};

export const metadata: Metadata = {
  title: "Arc Digital Solution | Premium Web Design & SEO Services",
  description:
    "Arc Digital Solution builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
  metadataBase: new URL("https://arcdigitalsolution.in"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arc Digital Solution | Premium Web Design & SEO Services",
    description:
      "Arc Digital Solution builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
    url: "https://arcdigitalsolution.in",
    siteName: "Arc Digital Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc Digital Solution | Premium Web Design & SEO Services",
    description:
      "Arc Digital Solution builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to image CDNs for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} ${barlowCondensed.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {/* Padding-top to avoid content getting hidden under sticky Navbar */}
        <main className="flex-grow pt-[64px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
