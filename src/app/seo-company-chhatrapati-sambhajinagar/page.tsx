import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Search, Globe, BarChart3, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Company in Chhatrapati Sambhajinagar | SEO Services Aurangabad | ARC Digital Solutions",
  description:
    "Best SEO company in Chhatrapati Sambhajinagar (Aurangabad). Local SEO, Google rankings, on-page SEO & Google Business Profile optimization for CSN businesses. Free SEO audit — ARC Digital Solutions.",
  alternates: { canonical: "https://www.arcdigitalsolution.in/seo-company-chhatrapati-sambhajinagar" },
  openGraph: {
    title: "SEO Company Chhatrapati Sambhajinagar | ARC Digital Solutions",
    description: "Top SEO company in Chhatrapati Sambhajinagar (Aurangabad). Local SEO, on-page, off-page & Google Business optimization. Free audit.",
    url: "https://www.arcdigitalsolution.in/seo-company-chhatrapati-sambhajinagar",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "seo company in chhatrapati sambhajinagar", "seo services aurangabad", "seo company aurangabad",
    "local seo aurangabad", "google ranking aurangabad", "digital marketing aurangabad",
    "seo expert aurangabad", "google business profile aurangabad", "website seo chhatrapati sambhajinagar",
    "seo agency aurangabad", "best seo company aurangabad",
  ],
};

const services = [
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "Local SEO — Rank in Aurangabad / CSN", desc: "We optimize your website and Google Business Profile to appear at the top of Google searches for your services in Chhatrapati Sambhajinagar. Local SEO means real customers in your city finding you — not generic visitors from anywhere." },
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "On-Page SEO", desc: "We optimize every element of your website — title tags, meta descriptions, heading structure, keyword placement, image alt texts, internal linking, page speed, and schema markup — making your site irresistible to Google's algorithm." },
  { icon: <BarChart3 className="w-6 h-6 text-accent-blue" />, title: "Google Business Profile Optimization", desc: "Your Google Business Profile is often the first thing potential customers see. We optimize your GBP — photos, categories, services, Q&A, posts, and review strategy — to maximize your visibility in Google Maps and local search results." },
  { icon: <Star className="w-6 h-6 text-accent-blue" />, title: "Technical SEO & Website Audit", desc: "We audit your website for technical SEO issues — crawl errors, broken links, duplicate content, slow page speed, mobile-friendliness, Core Web Vitals, and indexing problems — then fix everything that's holding your rankings back." },
];

const faqs = [
  { question: "Is there an SEO company in Chhatrapati Sambhajinagar?", answer: "ARC Digital Solutions provides professional SEO services for businesses in Chhatrapati Sambhajinagar (Aurangabad) and across Marathwada. We specialize in local SEO — helping CSN businesses rank on Google for searches in their city and surrounding areas." },
  { question: "How much does SEO cost in Aurangabad?", answer: "SEO services for Chhatrapati Sambhajinagar businesses start from ₹8,000/month for local SEO (Google rankings for local searches). Full SEO packages including content creation and link building range from ₹15,000-25,000/month. We offer free SEO audits before any commitment." },
  { question: "How long does it take to rank on Google in Chhatrapati Sambhajinagar?", answer: "For local searches in Chhatrapati Sambhajinagar, you can typically see results in 2-4 months as competition is lower than Mumbai or Pune. National keywords take 6-12 months. We provide monthly ranking reports so you always know your progress." },
  { question: "Can you optimize my Google Business Profile in Aurangabad?", answer: "Yes. Google Business Profile (formerly Google My Business) optimization is one of our most impactful services for Aurangabad businesses. A well-optimized GBP can get your business appearing on Google Maps and local search results within weeks, driving walk-in customers and calls." },
  { question: "Do you provide SEO for Marathi-language content?", answer: "Yes. We create SEO-optimized content in both English and Marathi for businesses in Chhatrapati Sambhajinagar targeting local Marathwada audiences. Marathi content often has significantly less competition, making it easier to rank quickly." },
];

export default function SEOCSNPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": "https://www.arcdigitalsolution.in/seo-company-chhatrapati-sambhajinagar#service", serviceType: "SEO Services", name: "SEO Company in Chhatrapati Sambhajinagar — ARC Digital Solutions", description: "Best SEO company serving Chhatrapati Sambhajinagar (Aurangabad). Local SEO, on-page optimization, Google Business Profile, and technical SEO.", provider: { "@type": "Organization", "@id": "https://www.arcdigitalsolution.in/#business", name: "ARC Digital Solutions" }, areaServed: [{ "@type": "City", name: "Chhatrapati Sambhajinagar" }, { "@type": "City", name: "Aurangabad" }, { "@type": "State", name: "Maharashtra" }], url: "https://www.arcdigitalsolution.in/seo-company-chhatrapati-sambhajinagar" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" }, { "@type": "ListItem", position: 2, name: "SEO Company Chhatrapati Sambhajinagar", item: "https://www.arcdigitalsolution.in/seo-company-chhatrapati-sambhajinagar" }] },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <div className="min-h-screen bg-[#FAFAF8]">
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">SEO Company Chhatrapati Sambhajinagar</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Chhatrapati Sambhajinagar", "Aurangabad", "Marathwada", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"><MapPin className="w-3 h-3" />{loc}</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">SEO Company — Chhatrapati Sambhajinagar</span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">SEO Company in Chhatrapati Sambhajinagar</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions helps businesses in Chhatrapati Sambhajinagar (Aurangabad) rank on Google and get genuine customers. Local SEO, on-page optimization, Google Business Profile, and technical SEO — strategies that work in the CSN and Marathwada market.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20SEO%20services%20in%20Chhatrapati%20Sambhajinagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp for Free SEO Audit</a>
                <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors"><Phone className="w-4 h-4" />+91 77199 02074</a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why ARC Digital for SEO in CSN?</h2>
              <ul className="flex flex-col gap-4">
                {["Free Website SEO Audit Before Starting", "Local SEO — Rank for CSN Searches", "Google Business Profile Optimization", "Marathi + English Content Strategy", "Monthly Ranking & Traffic Reports", "On-Page + Technical SEO Included", "Transparent Pricing — No Lock-In", "WhatsApp Support Throughout"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors">Get Free SEO Audit</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">SEO Services for Chhatrapati Sambhajinagar Businesses</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">Get your business found on Google in Chhatrapati Sambhajinagar — genuine traffic, genuine clients.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold font-heading text-primary-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">FAQ — SEO in Chhatrapati Sambhajinagar</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border border-gray-200 rounded-xl p-6 bg-white">
                <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">{faq.question}<span className="text-accent-blue text-xl font-light flex-shrink-0">+</span></summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services & Locations</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Digital Marketing Aurangabad", href: "/digital-marketing-agency-chhatrapati-sambhajinagar" },
              { label: "Web Development Aurangabad", href: "/web-development-company-chhatrapati-sambhajinagar" },
              { label: "SEO Services Pune", href: "/seo-company-pune" },
              { label: "SEO Services Mumbai", href: "/seo-company-mumbai" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Get Your Business on Page 1 of Google in CSN</h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">Free SEO audit for your Chhatrapati Sambhajinagar business. We&apos;ll identify exactly what&apos;s stopping you from ranking and how to fix it — no commitment required.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20a%20free%20SEO%20audit%20for%20my%20business%20in%20Chhatrapati%20Sambhajinagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp for Free SEO Audit</a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"><Phone className="w-4 h-4" />Call: +91 77199 02074</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
