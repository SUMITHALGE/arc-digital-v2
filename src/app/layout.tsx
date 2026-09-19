import type { Metadata, Viewport } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F0E8DC",
};

export const metadata: Metadata = {
  title: {
    default: "ARC Digital Solutions | Web Development Company Mumbai & Pune",
    template: "%s | ARC Digital Solutions",
  },
  description:
    "ARC Digital Solutions — Top web development company in Mumbai & Pune. Custom websites, React.js, Spring Boot, SEO services & digital marketing. 100+ projects delivered. Free consultation.",
  metadataBase: new URL("https://www.arcdigitalsolution.in"),
  keywords: [
    "web development company mumbai",
    "web development company pune",
    "website development company mumbai",
    "website development company pune",
    "web development company chhatrapati sambhajinagar",
    "web development company aurangabad",
    "app development company pune",
    "app development company mumbai",
    "app development company aurangabad",
    "react development mumbai",
    "spring boot development pune",
    "seo company mumbai",
    "seo company pune",
    "seo company aurangabad",
    "digital marketing agency mumbai",
    "digital marketing agency pune",
    "digital marketing agency aurangabad",
    "website redesign mumbai",
    "website redesign pune",
    "web development company wakad",
    "web development company hinjawadi",
    "web development company baner",
    "web development company pimpri chinchwad",
    "app development company pune",
    "application development company pune",
    "ARC Digital Solutions",
    "Sumit Halge",
  ],
  authors: [
    {
      name: "Sumit Halge",
      url: "https://www.arcdigitalsolution.in/about",
    },
  ],
  creator: "Sumit Halge",
  publisher: "ARC Digital Solutions",
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.arcdigitalsolution.in",
    languages: {
      "en-IN": "https://www.arcdigitalsolution.in",
    },
  },
  openGraph: {
    title: "ARC Digital Solutions | Web Development Company Mumbai & Pune",
    description:
      "Expert web development company in Mumbai & Pune. React.js, Spring Boot, custom websites, SEO & digital marketing. Serving 100+ businesses across Maharashtra. Free consultation.",
    url: "https://www.arcdigitalsolution.in",
    siteName: "ARC Digital Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC Digital Solutions — Web Development Company in Mumbai & Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcdigital",
    creator: "@arcdigital",
    title: "ARC Digital Solutions | Web Development Company Mumbai & Pune",
    description:
      "Custom websites, React.js apps, Spring Boot APIs & SEO services in Mumbai & Pune. Free consultation available.",
    images: ["/assets/og-image.jpg"],
  },
  verification: {
    google: "fZzXxlgFrhUQ8xpsxCu21B_KFrMlxtv-7Btr_F8JyoA",
  },
};

// ─── Comprehensive Schema Graph (renders on EVERY page) ──────────────────────
const siteSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.arcdigitalsolution.in/#business",
      name: "ARC Digital Solutions",
      alternateName: "Arc Digital Solution",
      url: "https://www.arcdigitalsolution.in",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.arcdigitalsolution.in/#logo",
        url: "https://www.arcdigitalsolution.in/favicon.svg",
        contentUrl: "https://www.arcdigitalsolution.in/favicon.svg",
        width: 512,
        height: 512,
        caption: "ARC Digital Solutions",
      },
      image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
      description:
        "ARC Digital Solutions is a web development and digital marketing company in Mumbai and Pune, founded by Sumit Halge. We specialize in React.js, Spring Boot, custom website development, SEO services, website redesign, and e-commerce development. Serving startups and SMEs across Maharashtra.",
      founder: {
        "@type": "Person",
        "@id": "https://www.arcdigitalsolution.in/about#sumit-halge",
        name: "Sumit Halge",
        jobTitle: "Founder & Software Engineer",
        url: "https://www.arcdigitalsolution.in/about",
        image: "https://www.arcdigitalsolution.in/testimonials/sumit.png",
        sameAs: [
          "https://www.linkedin.com/in/sumithalge/",
          "https://github.com/sumithalge",
        ],
        knowsAbout: [
          "React.js",
          "Spring Boot",
          "Next.js",
          "SEO",
          "Digital Marketing",
          "Web Development",
          "Java",
          "JavaScript",
          "TypeScript",
        ],
      },
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      ],
      telephone: "+91-7719902074",
      email: "hello@arcdigitalsolution.in",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Credit Card, Bank Transfer",
      areaServed: [
        { "@type": "City", name: "Mumbai", sameAs: "https://www.wikidata.org/wiki/Q1156" },
        { "@type": "City", name: "Pune", sameAs: "https://www.wikidata.org/wiki/Q1538" },
        { "@type": "City", name: "Chhatrapati Sambhajinagar" },
        { "@type": "City", name: "Aurangabad" },
        { "@type": "City", name: "Navi Mumbai" },
        { "@type": "City", name: "Thane" },
        { "@type": "City", name: "Pimpri-Chinchwad" },
        { "@type": "City", name: "Jalna" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development & Digital Marketing Services — Mumbai & Pune",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Custom website development in Mumbai and Pune using React.js and Next.js",
              areaServed: ["Mumbai", "Pune"],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "React.js Development",
              description: "Expert React.js web application development for Mumbai and Pune businesses",
              areaServed: ["Mumbai", "Pune"],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spring Boot Development",
              description: "Spring Boot REST API and microservices development in Mumbai and Pune",
              areaServed: ["Mumbai", "Pune"],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services",
              description: "Search engine optimization for businesses in Mumbai and Pune",
              areaServed: ["Mumbai", "Pune"],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing",
              description: "Digital marketing agency services in Mumbai and Pune",
              areaServed: ["Mumbai", "Pune"],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Redesign",
              description: "Professional website redesign services in Mumbai and Pune",
              areaServed: ["Mumbai", "Pune"],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Development",
              description: "Custom e-commerce website development in India",
              areaServed: ["Mumbai", "Pune", "India"],
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description: "Premium UI/UX design services in Mumbai and Pune",
              areaServed: ["Mumbai", "Pune"],
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "18",
        bestRating: "5",
        worstRating: "1",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      sameAs: [
        "https://www.facebook.com/arcdigitalsolution",
        "https://www.instagram.com/arcdigitalsolution",
        "https://twitter.com/arcdigital",
        "https://www.linkedin.com/company/arcdigitalsolution",
        "https://clutch.co/profile/arc-digital-solutions",
        "https://share.google/fFpALBVM1pFuvoPYl",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.arcdigitalsolution.in/#website",
      url: "https://www.arcdigitalsolution.in",
      name: "ARC Digital Solutions",
      description: "Web Development Company in Mumbai & Pune — React, Spring Boot, SEO",
      publisher: { "@id": "https://www.arcdigitalsolution.in/#business" },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.arcdigitalsolution.in/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Performance: Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="fZzXxlgFrhUQ8xpsxCu21B_KFrMlxtv-7Btr_F8JyoA" />

        {/* Global LocalBusiness + WebSite Schema — injected on EVERY page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchemaGraph) }}
        />

        {/* ── Favicons & App Icons — Full Cross-Platform Suite ── */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${barlowCondensed.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {/* Padding-top to avoid content getting hidden under sticky Navbar */}
        <main className="flex-grow pt-[64px]">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
