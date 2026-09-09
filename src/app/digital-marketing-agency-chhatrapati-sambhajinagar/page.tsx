import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, BarChart3, Globe, Search, Star, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Chhatrapati Sambhajinagar | Aurangabad | ARC Digital Solutions",
  description:
    "Best digital marketing agency in Chhatrapati Sambhajinagar (Aurangabad). SEO, social media marketing, Google Ads, content marketing for CSN businesses. Free consultation — ARC Digital Solutions.",
  alternates: { canonical: "https://www.arcdigitalsolution.in/digital-marketing-agency-chhatrapati-sambhajinagar" },
  openGraph: {
    title: "Digital Marketing Agency Chhatrapati Sambhajinagar | ARC Digital Solutions",
    description: "Top digital marketing agency in Chhatrapati Sambhajinagar (Aurangabad). SEO, social media, Google Ads & content marketing. Free consultation.",
    url: "https://www.arcdigitalsolution.in/digital-marketing-agency-chhatrapati-sambhajinagar",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "digital marketing agency chhatrapati sambhajinagar", "digital marketing aurangabad",
    "social media marketing aurangabad", "google ads aurangabad", "facebook ads aurangabad",
    "online marketing aurangabad", "digital marketing company aurangabad",
    "instagram marketing aurangabad", "content marketing aurangabad",
    "best digital marketing agency aurangabad", "seo and digital marketing aurangabad",
  ],
};

const services = [
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "Search Engine Optimization (SEO)", desc: "Get your business to page 1 of Google for searches in Chhatrapati Sambhajinagar. Local SEO, on-page optimization, content strategy, and link building — organic traffic that keeps growing month after month without ad spend." },
  { icon: <BarChart3 className="w-6 h-6 text-accent-blue" />, title: "Google Ads (PPC)", desc: "Targeted Google Ads campaigns for Chhatrapati Sambhajinagar businesses — appearing at the top of Google searches instantly. We manage your budget, keywords, ad copy, and landing pages to maximize leads at minimum cost." },
  { icon: <Star className="w-6 h-6 text-accent-blue" />, title: "Social Media Marketing", desc: "Grow your brand on Instagram, Facebook, and LinkedIn in the Chhatrapati Sambhajinagar market. Content creation, posting schedules, community management, and paid social campaigns targeting local audiences." },
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "Google Business Profile Management", desc: "Your Google Business Profile is your most powerful free marketing tool in CSN. We optimize and manage your GBP — photos, posts, Q&A, review responses — to maximize visibility on Google Maps and local search." },
  { icon: <Zap className="w-6 h-6 text-accent-blue" />, title: "Content Marketing", desc: "High-quality, SEO-optimized content for Chhatrapati Sambhajinagar businesses — blog posts, service pages, case studies, and landing pages that rank on Google and convert readers into customers." },
  { icon: <BarChart3 className="w-6 h-6 text-accent-blue" />, title: "Analytics & Reporting", desc: "Complete transparency with monthly reports — Google Analytics, Search Console, ad performance, keyword rankings, and conversion tracking. You always know exactly what your digital marketing investment is delivering." },
];

const faqs = [
  { question: "Is there a digital marketing agency in Chhatrapati Sambhajinagar?", answer: "ARC Digital Solutions provides professional digital marketing services for businesses in Chhatrapati Sambhajinagar (Aurangabad). We specialize in SEO, social media marketing, Google Ads, and content marketing for the CSN and Marathwada market — helping local businesses grow their online presence and get genuine customers." },
  { question: "How much does digital marketing cost in Aurangabad?", answer: "Digital marketing packages for Chhatrapati Sambhajinagar businesses start from ₹10,000/month for basic social media management. SEO + Social Media packages start from ₹18,000/month. Full digital marketing (SEO + Ads + Social + Content) starts from ₹25,000/month. Free consultation available." },
  { question: "How fast can I get results from digital marketing in Chhatrapati Sambhajinagar?", answer: "Google Ads deliver leads within days of launch. Social media campaigns show engagement within 2-4 weeks. SEO results in Chhatrapati Sambhajinagar typically appear in 2-4 months (faster than in Mumbai/Pune due to lower competition). We provide monthly reports tracking all KPIs." },
  { question: "Do you manage Instagram and Facebook marketing in Aurangabad?", answer: "Yes. We manage social media marketing for Aurangabad and CSN businesses — content creation (Marathi + English), daily/weekly posting schedules, stories, reels, community management, and paid social ad campaigns targeting the Marathwada audience." },
  { question: "Can you run Google Ads for my business in Chhatrapati Sambhajinagar?", answer: "Yes. We create and manage Google Search Ads, Display Ads, and Google Maps Ads for CSN businesses. We handle keyword research, ad copy, bid management, landing page optimization, and conversion tracking — maximizing your ROI from every rupee spent." },
];

export default function DigitalMarketingCSNPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": "https://www.arcdigitalsolution.in/digital-marketing-agency-chhatrapati-sambhajinagar#service", serviceType: "Digital Marketing", name: "Digital Marketing Agency in Chhatrapati Sambhajinagar — ARC Digital Solutions", description: "Best digital marketing agency serving Chhatrapati Sambhajinagar. SEO, Google Ads, social media marketing, content marketing for CSN businesses.", provider: { "@type": "Organization", "@id": "https://www.arcdigitalsolution.in/#business", name: "ARC Digital Solutions" }, areaServed: [{ "@type": "City", name: "Chhatrapati Sambhajinagar" }, { "@type": "City", name: "Aurangabad" }, { "@type": "State", name: "Maharashtra" }], url: "https://www.arcdigitalsolution.in/digital-marketing-agency-chhatrapati-sambhajinagar" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" }, { "@type": "ListItem", position: 2, name: "Digital Marketing Agency Chhatrapati Sambhajinagar", item: "https://www.arcdigitalsolution.in/digital-marketing-agency-chhatrapati-sambhajinagar" }] },
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
            <span className="text-primary-navy font-medium">Digital Marketing Agency Chhatrapati Sambhajinagar</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Chhatrapati Sambhajinagar", "Aurangabad", "Jalna", "Marathwada"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"><MapPin className="w-3 h-3" />{loc}</span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">Digital Marketing Agency — Chhatrapati Sambhajinagar</span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">Digital Marketing Agency in Chhatrapati Sambhajinagar</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions helps businesses in Chhatrapati Sambhajinagar (Aurangabad) grow online. SEO, Google Ads, social media marketing, content creation — digital strategies built for the Marathwada market that bring genuine customers to your door.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20digital%20marketing%20in%20Chhatrapati%20Sambhajinagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp Free Consultation</a>
                <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors"><Phone className="w-4 h-4" />+91 77199 02074</a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why ARC Digital for Marketing in CSN?</h2>
              <ul className="flex flex-col gap-4">
                {["SEO + Google Ads + Social Media — All in One", "Marathi + English Content Creation", "Google Business Profile Management", "Local Market Understanding — Marathwada", "Monthly Reports — Full Transparency", "No Lock-In Contracts — Month to Month", "WhatsApp Support — Always Available", "Free Consultation & Strategy Session"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors">Get Free Consultation</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">Digital Marketing Services in Chhatrapati Sambhajinagar</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">Complete digital marketing for CSN businesses — from getting found on Google to growing your social media following.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">FAQ — Digital Marketing in Chhatrapati Sambhajinagar</h2>
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
              { label: "SEO Services Aurangabad", href: "/seo-company-chhatrapati-sambhajinagar" },
              { label: "Web Development Aurangabad", href: "/web-development-company-chhatrapati-sambhajinagar" },
              { label: "App Development Aurangabad", href: "/app-development-company-chhatrapati-sambhajinagar" },
              { label: "Digital Marketing Mumbai", href: "/digital-marketing-agency-mumbai" },
              { label: "Digital Marketing Pune", href: "/digital-marketing-agency-pune" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Grow Your Business Digitally in Chhatrapati Sambhajinagar</h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">Free digital marketing consultation for your CSN business. We&apos;ll create a custom strategy to get you more customers from Google, Instagram, and Facebook — within your budget.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20digital%20marketing%20in%20Chhatrapati%20Sambhajinagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp Now</a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"><Phone className="w-4 h-4" />Call: +91 77199 02074</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
