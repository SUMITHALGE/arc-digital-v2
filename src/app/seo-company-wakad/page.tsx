import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Search, TrendingUp, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Company in Wakad, Pune | ARC Digital Solutions",
  description:
    "Top SEO company in Wakad, Pune. Local SEO, Google Maps optimization, technical SEO for Wakad businesses & IT companies. Free SEO audit — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/seo-company-wakad",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/seo-company-wakad" },
  },
  keywords: ["seo company wakad", "seo services wakad pune", "local seo wakad", "google ranking wakad", "digital marketing wakad pune", "seo agency wakad"],
  openGraph: {
    title: "SEO Company Wakad, Pune | ARC Digital Solutions",
    description: "Best SEO services in Wakad. Local SEO, Google Maps, technical SEO for Wakad businesses. Free audit.",
    url: "https://www.arcdigitalsolution.in/seo-company-wakad",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://www.arcdigitalsolution.in/assets/og-image.jpg", width: 1200, height: 630, alt: "SEO Company Wakad Pune — ARC Digital Solutions" }],
  },
  twitter: { card: "summary_large_image", site: "@arcdigital", creator: "@arcdigital", title: "SEO Company Wakad Pune | ARC Digital Solutions", description: "Local SEO & Google ranking for Wakad businesses. Free audit.", images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"] },
};

const services = [
  { icon: <MapPin className="w-6 h-6 text-accent-blue" />, title: "Local SEO Wakad", desc: "Rank your Wakad business in Google Maps and local search results. Google Business Profile optimization, local citations across 50+ India directories, and NAP consistency to dominate searches for 'services in Wakad'." },
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "Technical SEO Audit", desc: "Full technical SEO audit for your Wakad website — Core Web Vitals, crawlability, indexability, page speed, structured data, and mobile optimization. We fix every issue that's preventing Google from ranking your site." },
  { icon: <TrendingUp className="w-6 h-6 text-accent-blue" />, title: "Keyword Research & On-Page SEO", desc: "Targeted keyword research for Wakad and Pimpri-Chinchwad markets. On-page optimization of title tags, meta descriptions, headers, and content — all aligned to how your Wakad customers actually search on Google." },
  { icon: <BarChart2 className="w-6 h-6 text-accent-blue" />, title: "Monthly SEO Reporting", desc: "Transparent monthly reports showing keyword rankings, organic traffic growth, Google Maps visibility, and conversion data — so you know exactly what your SEO investment is delivering for your Wakad business." },
];

const faqs = [
  { question: "Is there an SEO company that serves Wakad, Pune?", answer: "Yes. ARC Digital Solutions provides SEO services for businesses in Wakad, Pimpri-Chinchwad, and greater Pune. We specialize in local SEO, Google Maps optimization, technical SEO, and content strategy for Wakad-based startups, IT companies, and local businesses." },
  { question: "How much do SEO services cost in Wakad, Pune?", answer: "Local SEO for Wakad businesses starts from ₹8,000/month. Full technical + content + link-building SEO packages start from ₹15,000/month. All plans include monthly ranking reports and transparent deliverables. No hidden fees." },
  { question: "How long does it take to rank on Google in Wakad?", answer: "For local Wakad keywords (e.g., 'gym in Wakad', 'web developer in Wakad'), initial improvements are visible in 4–8 weeks. Google Maps visibility improves within 4–6 weeks. Ranking in top 3 for competitive terms takes 3–6 months of consistent SEO work." },
  { question: "What is local SEO and why does my Wakad business need it?", answer: "Local SEO optimizes your business to appear when people nearby search for your services on Google. For a Wakad business, this means appearing when someone searches 'dentist in Wakad', 'web developer Wakad Pune', or 'restaurants near Wakad'. It drives highly qualified, location-specific customers to your business." },
  { question: "Do you also handle Google Business Profile (GMB) for Wakad businesses?", answer: "Yes. Google Business Profile (formerly GMB) optimization is a core part of our local SEO service. We set up, verify, and optimize your profile with accurate business info, photos, posts, and regular updates — driving more visibility and calls from Wakad and Pimpri-Chinchwad area customers." },
];

export default function SeoWakadPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.arcdigitalsolution.in/seo-company-wakad#business",
        name: "ARC Digital Solutions — SEO Company Wakad",
        url: "https://www.arcdigitalsolution.in/seo-company-wakad",
        image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        description: "ARC Digital Solutions provides local SEO, technical SEO, and Google Maps optimization for businesses in Wakad, Pune.",
        telephone: "+91-7719902074",
        email: "hello@arcdigitalsolution.in",
        address: { "@type": "PostalAddress", addressLocality: "Wakad", addressRegion: "Maharashtra", postalCode: "411057", addressCountry: "IN" },
        areaServed: [{ "@type": "City", name: "Wakad" }, { "@type": "City", name: "Pimpri-Chinchwad" }, { "@type": "City", name: "Pune" }],
        parentOrganization: { "@id": "https://www.arcdigitalsolution.in/#business" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "SEO Company Pune", item: "https://www.arcdigitalsolution.in/seo-company-pune" },
          { "@type": "ListItem", position: 3, name: "SEO Company Wakad", item: "https://www.arcdigitalsolution.in/seo-company-wakad" },
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
            <Link href="/seo-company-pune" className="hover:underline">SEO Company Pune</Link><span>/</span>
            <span className="font-medium text-primary-navy">Wakad</span>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-widest mb-4">SEO Company — Wakad, Pune</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-primary-navy mb-6 leading-tight">
              SEO Company in Wakad, Pune
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              ARC Digital Solutions is a data-driven SEO company serving Wakad, Pimpri-Chinchwad, and Pune.
              We help Wakad businesses rank higher on Google, get more Google Maps visibility, and generate
              consistent organic leads — with transparent monthly reporting and proven, ethical SEO strategies.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Wakad", "Pimpri-Chinchwad", "Hinjawadi", "Baner", "Pune"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  <MapPin className="w-3 h-3" />{loc}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20a%20free%20SEO%20audit%20for%20my%20Wakad%20business" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> Get Free SEO Audit
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-accent-blue text-gray-700 hover:text-accent-blue font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> +91 77199 02074
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">Our SEO Services in Wakad</h2>
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-bold font-heading text-primary-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Wakad Businesses Trust ARC Digital for SEO</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Google Maps + local pack optimization", "Ethical, Google-compliant link building", "Monthly transparent ranking reports", "No long-term contracts — month-to-month", "Technical + content + local SEO combined", "100+ businesses ranked across Maharashtra"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">FAQ — SEO in Wakad, Pune</h2>
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
            <h2 className="text-lg font-bold font-heading text-primary-navy mb-4">Related SEO Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "SEO Company Pune", href: "/seo-company-pune" },
                { label: "SEO Company Hinjawadi", href: "/seo-company-hinjawadi" },
                { label: "SEO Company Mumbai", href: "/seo-company-mumbai" },
                { label: "Web Development Wakad", href: "/web-development-company-wakad" },
                { label: "SEO Services", href: "/services/seo-services" },
                { label: "Digital Marketing Pune", href: "/digital-marketing-agency-pune" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Get a Free SEO Audit for Your Wakad Business</h2>
            <p className="text-white/80 mb-6 text-sm">Find out exactly why your Wakad competitors are outranking you — and how to fix it.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20a%20free%20SEO%20audit%20for%20my%20Wakad%20Pune%20business" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> Free SEO Audit on WhatsApp
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
