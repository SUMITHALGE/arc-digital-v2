import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal"],
});


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
      <body
        className={`${inter.variable} ${barlowCondensed.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {/* Padding-top to avoid content getting hidden under sticky Navbar */}
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
