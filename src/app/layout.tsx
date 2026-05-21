import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Arc Digital Solutions | Premium Web Design & SEO Services",
  description:
    "Arc Digital Solutions builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
  metadataBase: new URL("https://arcdigitalsolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arc Digital Solutions | Premium Web Design & SEO Services",
    description:
      "Arc Digital Solutions builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
    url: "https://arcdigitalsolutions.com",
    siteName: "Arc Digital Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc Digital Solutions | Premium Web Design & SEO Services",
    description:
      "Arc Digital Solutions builds fast, premium, and SEO-first websites designed to drive traffic, convert leads, and generate real business growth.",
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
        className={`${outfit.variable} ${plusJakartaSans.variable} antialiased min-h-screen flex flex-col`}
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
