import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Globe, Code2, Search, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Pimpri-Chinchwad | ARC Digital Solutions",
  description:
    "Leading web development company in Pimpri-Chinchwad. Custom websites, React.js, e-commerce & SEO for Pimpri-Chinchwad businesses & manufacturers. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-pimpri-chinchwad",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/web-development-company-pimpri-chinchwad" },
  },
  keywords: [
    "web development company pimpri chinchwad",
    "website development pimpri chinchwad",
    "web developer pimpri",
    "website developer chinchwad",
    "digital marketing pimpri chinchwad",
    "seo services pimpri chinchwad",
    "ecommerce development pimpri chinchwad",
    "manufacturing company website pimpri",
  ],
  openGraph: {
    title: "Web Development Company Pimpri-Chinchwad | ARC Digital Solutions",
    description: "Web development for Pimpri-Chinchwad manufacturers, SMEs & businesses. React.js, e-commerce, SEO. Free consultation.",
    url: "https://www.arcdigitalsolution.in/web-development-company-pimpri-chinchwad",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://www.arcdigitalsolution.in/assets/og-image.jpg", width: 1200, height: 630, alt: "Web Development Company Pimpri-Chinchwad — ARC Digital Solutions" }],
  },
  twitter: { card: "summary_large_image", site: "@arcdigital", creator: "@arcdigital", title: "Web Development Company Pimpri-Chinchwad | ARC Digital Solutions", description: "Websites for PCMC manufacturers, SMEs & startups. Free consultation.", images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"] },
};

const services = [
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "Manufacturing & Industrial Websites", desc: "Professional websites for Pimpri-Chinchwad manufacturers, auto component companies, and industrial SMEs — with product catalogs, enquiry forms, and B2B lead generation features designed for PCMC's manufacturing economy." },
  { icon: <ShoppingCart className="w-6 h-6 text-accent-blue" />, title: "E-Commerce Development", desc: "Custom e-commerce websites for Pimpri-Chinchwad retailers and wholesale businesses — full product management, payment gateway integration (Razorpay, PayU), and SEO optimization to sell online across Pune and India." },
  { icon: <Code2 className="w-6 h-6 text-accent-blue" />, title: "React.js Web Applications", desc: "Enterprise web applications for PCMC businesses — employee portals, inventory management dashboards, customer self-service portals built with React.js and Spring Boot for scalable, secure performance." },
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "Local SEO Pimpri-Chinchwad", desc: "SEO for Pimpri-Chinchwad businesses — targeting PCMC area searches, Google Maps optimization, and B2B search terms that help local manufacturers and service companies get found by Pune buyers." },
];

const faqs = [
  { question: "Which web development company serves Pimpri-Chinchwad (PCMC)?", answer: "ARC Digital Solutions provides web development services for businesses in Pimpri-Chinchwad (PCMC) — including manufacturers, auto companies, retail shops, and IT startups. We build custom websites, React.js applications, and e-commerce stores that generate real leads." },
  { question: "How much does a website cost for a manufacturing company in Pimpri-Chinchwad?", answer: "A professional website for a manufacturing company in Pimpri-Chinchwad starts from ₹20,000. This includes a product catalog, inquiry form, company profile, and basic SEO. Custom portals with inventory management start from ₹60,000. All pricing is fixed and transparent." },
  { question: "Can you build an e-commerce website for our Pimpri-Chinchwad business?", answer: "Yes. We build custom e-commerce websites for Pimpri-Chinchwad businesses — with product management, Razorpay/PayU payment integration, order tracking, and SEO to help you sell products to buyers across Pune, Maharashtra, and India. E-commerce starts from ₹35,000." },
  { question: "Do you provide digital marketing for PCMC businesses?", answer: "Yes. ARC Digital Solutions provides SEO, Google Ads, and social media marketing for Pimpri-Chinchwad businesses. Local SEO targeting PCMC area searches starts from ₹8,000/month, with transparent monthly reporting on rankings and traffic growth." },
  { question: "How quickly can you build a website for my Pimpri-Chinchwad company?", answer: "Standard business websites for Pimpri-Chinchwad companies are delivered in 2–4 weeks. E-commerce stores take 3–6 weeks. We provide a detailed timeline before starting and communicate progress every week — no surprises." },
];

export default function PimpriChinchwadPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.arcdigitalsolution.in/web-development-company-pimpri-chinchwad#business",
        name: "ARC Digital Solutions — Web Development Pimpri-Chinchwad",
        url: "https://www.arcdigitalsolution.in/web-development-company-pimpri-chinchwad",
        image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        description: "ARC Digital Solutions provides website development, e-commerce, and SEO services for manufacturing companies, SMEs, and businesses in Pimpri-Chinchwad (PCMC), Pune.",
        telephone: "+91-7719902074",
        email: "hello@arcdigitalsolution.in",
        address: { "@type": "PostalAddress", addressLocality: "Pimpri-Chinchwad", addressRegion: "Maharashtra", postalCode: "411018", addressCountry: "IN" },
        areaServed: [{ "@type": "City", name: "Pimpri-Chinchwad" }, { "@type": "City", name: "Pimpri" }, { "@type": "City", name: "Chinchwad" }, { "@type": "City", name: "Pune" }],
        parentOrganization: { "@id": "https://www.arcdigitalsolution.in/#business" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Web Development Pune", item: "https://www.arcdigitalsolution.in/web-development-company-pune" },
          { "@type": "ListItem", position: 3, name: "Web Development Pimpri-Chinchwad", item: "https://www.arcdigitalsolution.in/web-development-company-pimpri-chinchwad" },
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
            <span className="font-medium text-primary-navy">Pimpri-Chinchwad</span>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-widest mb-4">Web Development Company — Pimpri-Chinchwad (PCMC), Pune</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-primary-navy mb-6 leading-tight">
              Web Development Company<br />in Pimpri-Chinchwad
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              ARC Digital Solutions delivers professional websites, e-commerce stores, and React.js applications for
              manufacturers, SMEs, retailers, and IT businesses in Pimpri-Chinchwad (PCMC). We help PCMC businesses
              establish strong online presences, rank on Google, and generate qualified B2B and B2C leads.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Pimpri-Chinchwad", "PCMC", "Wakad", "Hinjawadi", "Pune"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  <MapPin className="w-3 h-3" />{loc}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Pimpri-Chinchwad" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Free Consultation
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-accent-blue text-gray-700 hover:text-accent-blue font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> +91 77199 02074
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">Our Services for Pimpri-Chinchwad Businesses</h2>
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-bold font-heading text-primary-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why PCMC Businesses Choose ARC Digital Solutions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Manufacturing & industrial website specialists", "E-commerce with India payment gateways", "Local SEO targeting PCMC buyer searches", "Fixed pricing — no surprise billing", "Bilingual support: English & Marathi client communication", "100+ projects delivered across Maharashtra"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">FAQ — Web Development in Pimpri-Chinchwad</h2>
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
                { label: "Web Development Wakad", href: "/web-development-company-wakad" },
                { label: "App Development Pune", href: "/app-development-company-pune" },
                { label: "SEO Services Pune", href: "/seo-company-pune" },
                { label: "Website Redesign Pune", href: "/website-redesign-pune" },
                { label: "E-Commerce Development", href: "/services/website-development" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Ready to Take Your PCMC Business Online?</h2>
            <p className="text-white/80 mb-6 text-sm">Free consultation for Pimpri-Chinchwad businesses. Fixed pricing, guaranteed delivery.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20a%20Pimpri-Chinchwad%20business%20looking%20for%20web%20development" target="_blank" rel="noopener noreferrer"
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
