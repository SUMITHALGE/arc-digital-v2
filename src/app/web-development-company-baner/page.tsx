import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Globe, Code2, Search, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Baner, Pune | ARC Digital Solutions",
  description:
    "Top web development company in Baner, Pune. Premium websites, React.js, SEO services for Baner startups, restaurants & businesses. Modern design, fast delivery. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-baner",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/web-development-company-baner" },
  },
  keywords: [
    "web development company baner",
    "website development baner pune",
    "web developer baner",
    "website developer baner pune",
    "react development baner",
    "seo services baner pune",
    "digital marketing baner",
    "web design baner pune",
  ],
  openGraph: {
    title: "Web Development Company Baner, Pune | ARC Digital Solutions",
    description: "Premium website development for Baner businesses. React.js, modern design, SEO optimization. Free consultation.",
    url: "https://www.arcdigitalsolution.in/web-development-company-baner",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://www.arcdigitalsolution.in/assets/og-image.jpg", width: 1200, height: 630, alt: "Web Development Company Baner Pune — ARC Digital Solutions" }],
  },
  twitter: { card: "summary_large_image", site: "@arcdigital", creator: "@arcdigital", title: "Web Development Company Baner Pune | ARC Digital Solutions", description: "Premium websites & SEO for Baner businesses. Free consultation.", images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"] },
};

const services = [
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "Premium Website Development", desc: "High-converting, beautifully designed websites for Baner businesses — from corporate portals and SaaS products to restaurant websites and boutique e-commerce stores. Every site is mobile-first, SEO-ready, and fast." },
  { icon: <Code2 className="w-6 h-6 text-accent-blue" />, title: "React.js Development", desc: "Expert React.js web applications for Baner's growing startup ecosystem. We build interactive, data-driven web apps that scale with your business and deliver a premium user experience." },
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "Local SEO Baner", desc: "Rank your Baner business on Google Maps and organic search. Local SEO targeting Baner, Balewadi, and the Pune Northwest corridor — optimizing Google Business Profile, citations, and on-page SEO." },
  { icon: <Palette className="w-6 h-6 text-accent-blue" />, title: "UI/UX & Website Redesign", desc: "Transform your outdated Baner business website with a premium redesign — modern typography, smooth animations, optimized UX, and conversion-focused design that turns visitors into customers." },
];

const faqs = [
  { question: "Which is the best web development company in Baner, Pune?", answer: "ARC Digital Solutions is a top-rated web development company serving Baner, Balewadi, and the Pune Northwest area. We deliver custom websites, React.js apps, and SEO services with transparent pricing and measurable results." },
  { question: "How much does website development cost in Baner, Pune?", answer: "Website development in Baner starts from ₹15,000 for simple business websites. React.js applications start from ₹40,000. E-commerce websites with product management start from ₹35,000. All prices are fixed, with no hidden charges." },
  { question: "Do you design websites for restaurants and boutiques in Baner?", answer: "Yes. We build beautiful, conversion-optimized websites for restaurants, cafes, boutiques, fitness studios, and service businesses in Baner — with online booking integration, menu pages, gallery sections, and local SEO optimization for Baner searches." },
  { question: "Can you help my Baner business rank on Google?", answer: "Absolutely. Our local SEO service for Baner businesses covers Google Business Profile optimization, local citations, on-page SEO, and content strategy — targeting searches like 'best restaurant in Baner', 'gym in Baner Pune', or 'services near Baner Road'." },
  { question: "How long does website development take in Baner?", answer: "Standard business websites take 2–3 weeks. E-commerce stores take 3–5 weeks. Custom React.js web applications take 4–10 weeks. We provide a detailed timeline upfront and use 2-week Agile sprints for larger projects." },
];

export default function BanerPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.arcdigitalsolution.in/web-development-company-baner#business",
        name: "ARC Digital Solutions — Web Development Baner",
        url: "https://www.arcdigitalsolution.in/web-development-company-baner",
        image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        description: "ARC Digital Solutions provides premium website development, React.js applications, and local SEO services for businesses in Baner, Pune.",
        telephone: "+91-7719902074",
        email: "hello@arcdigitalsolution.in",
        address: { "@type": "PostalAddress", addressLocality: "Baner", addressRegion: "Maharashtra", postalCode: "411045", addressCountry: "IN" },
        areaServed: [{ "@type": "City", name: "Baner" }, { "@type": "City", name: "Balewadi" }, { "@type": "City", name: "Pune" }],
        parentOrganization: { "@id": "https://www.arcdigitalsolution.in/#business" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Web Development Pune", item: "https://www.arcdigitalsolution.in/web-development-company-pune" },
          { "@type": "ListItem", position: 3, name: "Web Development Baner", item: "https://www.arcdigitalsolution.in/web-development-company-baner" },
        ],
      },
      { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <div className="min-h-screen bg-[var(--color-cream)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:underline">Home</Link><span>/</span>
            <Link href="/web-development-company-pune" className="hover:underline">Web Development Pune</Link><span>/</span>
            <span className="font-medium text-primary-navy">Baner</span>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-widest mb-4">Web Development Company — Baner, Pune</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-primary-navy mb-6 leading-tight">
              Web Development Company<br />in Baner, Pune
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              ARC Digital Solutions builds premium websites and React.js applications for businesses in Baner, Balewadi,
              and the Pune Northwest corridor. From startups and tech companies to restaurants, boutiques, and service
              businesses — we create digital experiences that rank on Google and convert visitors into customers.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Baner", "Balewadi", "Hinjawadi", "Wakad", "Pune"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  <MapPin className="w-3 h-3" />{loc}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Baner%20Pune" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Free Consultation
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-accent-blue text-gray-700 hover:text-accent-blue font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> +91 77199 02074
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">Our Web Development Services in Baner</h2>
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-bold font-heading text-primary-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Baner Businesses Trust ARC Digital Solutions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Premium design for discerning Baner clients", "Local SEO targeting Baner + surrounding areas", "Fast turnaround — 2–4 weeks for most sites", "Fixed transparent pricing, no hidden costs", "Mobile-first, Google Core Web Vitals optimized", "Post-launch support and maintenance available"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">FAQ — Web Development in Baner</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}<span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-bold font-heading text-primary-navy mb-4">Also Serving Nearby Pune Areas</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Web Development Pune", href: "/web-development-company-pune" },
                { label: "Web Development Hinjawadi", href: "/web-development-company-hinjawadi" },
                { label: "Web Development Wakad", href: "/web-development-company-wakad" },
                { label: "Website Redesign Pune", href: "/website-redesign-pune" },
                { label: "SEO Services Pune", href: "/seo-company-pune" },
                { label: "App Development Pune", href: "/app-development-company-pune" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Ready to Build Your Baner Business Online?</h2>
            <p className="text-white/80 mb-6 text-sm">Free consultation. No commitment. Premium quality guaranteed.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20a%20Baner%20business%20looking%20for%20web%20development" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30">
                <Phone className="w-4 h-4" /> Call: +91 77199 02074
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
