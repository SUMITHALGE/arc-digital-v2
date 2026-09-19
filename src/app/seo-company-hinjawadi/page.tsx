import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Search, TrendingUp, BarChart2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Company in Hinjawadi, Pune | ARC Digital Solutions",
  description:
    "Leading SEO company in Hinjawadi IT Park, Pune. B2B SEO, technical SEO & Google ranking for IT companies & startups in Hinjawadi. Free SEO audit — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/seo-company-hinjawadi",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/seo-company-hinjawadi" },
  },
  keywords: ["seo company hinjawadi", "seo services hinjawadi pune", "b2b seo hinjawadi", "google ranking hinjawadi IT park", "digital marketing hinjawadi", "seo agency hinjawadi pune"],
  openGraph: {
    title: "SEO Company Hinjawadi, Pune | ARC Digital Solutions",
    description: "B2B SEO & technical SEO for IT companies and startups in Hinjawadi IT Park, Pune. Free audit.",
    url: "https://www.arcdigitalsolution.in/seo-company-hinjawadi",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://www.arcdigitalsolution.in/assets/og-image.jpg", width: 1200, height: 630, alt: "SEO Company Hinjawadi Pune — ARC Digital Solutions" }],
  },
  twitter: { card: "summary_large_image", site: "@arcdigital", creator: "@arcdigital", title: "SEO Company Hinjawadi Pune | ARC Digital Solutions", description: "B2B SEO for Hinjawadi IT companies. Free audit.", images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"] },
};

const services = [
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "B2B SEO for IT Companies", desc: "Specialized B2B SEO strategy for Hinjawadi IT companies — targeting decision-makers, enterprise buyers, and procurement leads searching for software services, development companies, and IT solutions in Pune." },
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "Technical SEO for SaaS Startups", desc: "Comprehensive technical SEO for Hinjawadi SaaS products — schema markup, Core Web Vitals, crawlability, structured data for product pages, pricing pages, and feature landing pages that convert enterprise buyers." },
  { icon: <TrendingUp className="w-6 h-6 text-accent-blue" />, title: "Content & Thought Leadership SEO", desc: "Content strategy that positions your Hinjawadi company as an industry authority — blog posts, case studies, comparison articles, and whitepapers that rank for high-intent B2B searches and earn organic enterprise leads." },
  { icon: <BarChart2 className="w-6 h-6 text-accent-blue" />, title: "Competitor SEO Analysis", desc: "In-depth analysis of how Hinjawadi IT competitors are ranking — keyword gaps, backlink opportunities, content angles, and technical advantages — giving your company a clear path to outrank them on Google." },
];

const faqs = [
  { question: "Which SEO company serves IT companies in Hinjawadi IT Park, Pune?", answer: "ARC Digital Solutions provides B2B SEO services for IT companies, SaaS startups, and tech firms in Hinjawadi IT Park, Pune. We specialize in enterprise-grade content SEO, technical SEO audits, and link-building strategies that help Hinjawadi companies rank for high-value B2B search terms and attract enterprise clients." },
  { question: "How is B2B SEO different from regular SEO for Hinjawadi IT companies?", answer: "B2B SEO targets business decision-makers instead of consumers. For Hinjawadi IT companies, this means ranking for searches like 'custom software development company India', 'React.js development agency Pune', or 'enterprise web app development'. The content strategy, keyword selection, and link-building approach are tailored for longer B2B sales cycles and enterprise buyer intent." },
  { question: "How much does SEO cost for an IT company in Hinjawadi?", answer: "B2B SEO for Hinjawadi IT companies starts from ₹15,000/month for foundational technical and content SEO. Enterprise-level campaigns with aggressive link building and content production start from ₹30,000/month. All plans include monthly ranking reports, keyword tracking, and transparent deliverables." },
  { question: "Can SEO help our Hinjawadi startup get inbound enterprise clients?", answer: "Yes. SEO is one of the most cost-effective channels for Hinjawadi SaaS startups and IT companies to generate inbound B2B leads. By ranking for the right keywords, publishing authoritative content, and appearing in Google for enterprise buyer queries, your company becomes visible to decision-makers actively searching for solutions like yours." },
  { question: "How long before our Hinjawadi IT company sees SEO results?", answer: "Technical fixes and on-page SEO improvements are visible in Google Search Console within 2–4 weeks. Organic ranking improvements for B2B keywords typically show within 3–5 months. Significant traffic growth and lead generation from SEO is typically measurable at the 6-month mark for competitive B2B terms." },
];

export default function SeoHinjawadiPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.arcdigitalsolution.in/seo-company-hinjawadi#business",
        name: "ARC Digital Solutions — SEO Company Hinjawadi",
        url: "https://www.arcdigitalsolution.in/seo-company-hinjawadi",
        image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        description: "ARC Digital Solutions provides B2B SEO, technical SEO, and content strategy for IT companies and startups in Hinjawadi IT Park, Pune.",
        telephone: "+91-7719902074",
        email: "hello@arcdigitalsolution.in",
        address: { "@type": "PostalAddress", addressLocality: "Hinjawadi", addressRegion: "Maharashtra", postalCode: "411057", addressCountry: "IN" },
        areaServed: [{ "@type": "City", name: "Hinjawadi" }, { "@type": "City", name: "Wakad" }, { "@type": "City", name: "Pune" }],
        parentOrganization: { "@id": "https://www.arcdigitalsolution.in/#business" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "SEO Company Pune", item: "https://www.arcdigitalsolution.in/seo-company-pune" },
          { "@type": "ListItem", position: 3, name: "SEO Company Hinjawadi", item: "https://www.arcdigitalsolution.in/seo-company-hinjawadi" },
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
            <span className="font-medium text-primary-navy">Hinjawadi</span>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-widest mb-4">SEO Company — Hinjawadi IT Park, Pune</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-primary-navy mb-6 leading-tight">
              SEO Company in Hinjawadi, Pune
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              ARC Digital Solutions delivers specialized B2B SEO for IT companies, SaaS startups, and tech firms in
              Hinjawadi IT Park, Pune. We help Hinjawadi businesses rank for enterprise buyer searches, build domain
              authority, and generate consistent inbound leads from organic Google traffic.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Hinjawadi IT Park", "Wakad", "Baner", "Pimpri-Chinchwad", "Pune"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  <MapPin className="w-3 h-3" />{loc}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20a%20free%20SEO%20audit%20for%20my%20Hinjawadi%20IT%20company" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> Get Free SEO Audit
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-accent-blue text-gray-700 hover:text-accent-blue font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> +91 77199 02074
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">Our SEO Services for Hinjawadi IT Companies</h2>
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-bold font-heading text-primary-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Hinjawadi IT Companies Choose ARC Digital for SEO</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Deep understanding of IT & SaaS B2B buying cycles", "Technical SEO expertise for complex web apps", "Content strategy targeting enterprise decision-makers", "Transparent monthly KPI reporting", "No long-term lock-in — month-to-month plans", "Proven track record across Maharashtra IT sector"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">FAQ — SEO for Hinjawadi IT Companies</h2>
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
            <h2 className="text-lg font-bold font-heading text-primary-navy mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "SEO Company Pune", href: "/seo-company-pune" },
                { label: "SEO Company Wakad", href: "/seo-company-wakad" },
                { label: "SEO Company Mumbai", href: "/seo-company-mumbai" },
                { label: "Web Development Hinjawadi", href: "/web-development-company-hinjawadi" },
                { label: "React Development Pune", href: "/react-development-pune" },
                { label: "Digital Marketing Pune", href: "/digital-marketing-agency-pune" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Ready to Rank Your Hinjawadi IT Company on Google?</h2>
            <p className="text-white/80 mb-6 text-sm">Free SEO audit for Hinjawadi IT companies. No commitment, full transparency.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20a%20Hinjawadi%20IT%20company%20and%20need%20B2B%20SEO" target="_blank" rel="noopener noreferrer"
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
