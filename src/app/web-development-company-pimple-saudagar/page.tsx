import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Globe, Code2, Search, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Pimple Saudagar, Pune | ARC Digital Solutions",
  description:
    "Trusted web development company in Pimple Saudagar, Pune. Custom websites, React.js apps, local SEO for Pimple Saudagar businesses & startups. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-pimple-saudagar",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/web-development-company-pimple-saudagar" },
  },
  keywords: ["web development company pimple saudagar", "website development pimple saudagar", "web developer pimple saudagar pune", "seo pimple saudagar", "digital marketing pimple saudagar"],
  openGraph: {
    title: "Web Development Company Pimple Saudagar, Pune | ARC Digital Solutions",
    description: "Custom websites & SEO for Pimple Saudagar businesses. React.js, mobile-first, fast delivery. Free consultation.",
    url: "https://www.arcdigitalsolution.in/web-development-company-pimple-saudagar",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://www.arcdigitalsolution.in/assets/og-image.jpg", width: 1200, height: 630, alt: "Web Development Company Pimple Saudagar Pune — ARC Digital Solutions" }],
  },
  twitter: { card: "summary_large_image", site: "@arcdigital", creator: "@arcdigital", title: "Web Development Pimple Saudagar Pune | ARC Digital Solutions", description: "Custom websites & SEO for Pimple Saudagar. Free consultation.", images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"] },
};

const services = [
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "Custom Website Development", desc: "Professional websites for Pimple Saudagar businesses — real estate agents, coaching institutes, clinics, retail shops, and startups. SEO-optimized, mobile-first, and designed to generate local leads." },
  { icon: <Code2 className="w-6 h-6 text-accent-blue" />, title: "React.js Web Applications", desc: "Modern, fast web applications for Pimple Saudagar businesses. Built with React.js and Next.js — perfect for businesses that need interactive features, booking systems, or customer portals." },
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "Local SEO Pimple Saudagar", desc: "Rank your Pimple Saudagar business on Google. Google Maps optimization, local citations, and content SEO targeting customers searching for services near Pimple Saudagar, Pimpri, and Wakad." },
  { icon: <Smartphone className="w-6 h-6 text-accent-blue" />, title: "Website Redesign", desc: "Modernize your outdated Pimple Saudagar business website. Faster loading, mobile-friendly, better SEO — without losing your existing Google rankings. Complete redesign from ₹20,000." },
];

const faqs = [
  { question: "Is there a web development company serving Pimple Saudagar, Pune?", answer: "Yes. ARC Digital Solutions provides web development and digital marketing services for businesses in Pimple Saudagar, Pimpri-Chinchwad, and greater Pune. We build custom websites, React.js applications, and run local SEO campaigns that help Pimple Saudagar businesses get found on Google." },
  { question: "What types of businesses in Pimple Saudagar do you work with?", answer: "We work with all types of Pimple Saudagar businesses — real estate agencies, coaching institutes, medical clinics, restaurants, retail stores, IT startups, and service businesses. Every project gets a customized approach tailored to your industry and local audience." },
  { question: "How much does a website cost in Pimple Saudagar?", answer: "Basic business websites for Pimple Saudagar businesses start from ₹12,000. SEO-optimized sites with enquiry forms and Google Maps integration start from ₹18,000. React.js custom applications start from ₹40,000. Free quote available on WhatsApp." },
  { question: "Can you do local SEO for my Pimple Saudagar shop or service?", answer: "Absolutely. Our local SEO for Pimple Saudagar covers Google Business Profile setup and optimization, local citations on India directories, on-page SEO, and content targeting Pimple Saudagar area searches — so customers near you can easily find your business." },
  { question: "Do you provide ongoing website maintenance for Pimple Saudagar businesses?", answer: "Yes. We offer monthly website maintenance packages from ₹3,000/month — covering security updates, content edits, speed optimization, and technical support. All Pimple Saudagar clients get 30-day free support after project delivery." },
];

export default function PimpleSaudagarPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.arcdigitalsolution.in/web-development-company-pimple-saudagar#business",
        name: "ARC Digital Solutions — Web Development Pimple Saudagar",
        url: "https://www.arcdigitalsolution.in/web-development-company-pimple-saudagar",
        image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        description: "ARC Digital Solutions provides custom website development and local SEO for businesses in Pimple Saudagar, Pune.",
        telephone: "+91-7719902074",
        email: "hello@arcdigitalsolution.in",
        address: { "@type": "PostalAddress", addressLocality: "Pimple Saudagar", addressRegion: "Maharashtra", postalCode: "411027", addressCountry: "IN" },
        areaServed: [{ "@type": "City", name: "Pimple Saudagar" }, { "@type": "City", name: "Pimpri-Chinchwad" }, { "@type": "City", name: "Pune" }],
        parentOrganization: { "@id": "https://www.arcdigitalsolution.in/#business" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Web Development Pune", item: "https://www.arcdigitalsolution.in/web-development-company-pune" },
          { "@type": "ListItem", position: 3, name: "Web Development Pimple Saudagar", item: "https://www.arcdigitalsolution.in/web-development-company-pimple-saudagar" },
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
            <span className="font-medium text-primary-navy">Pimple Saudagar</span>
          </nav>

          <div className="mb-14">
            <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-widest mb-4">Web Development Company — Pimple Saudagar, Pune</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-primary-navy mb-6 leading-tight">
              Web Development Company<br />in Pimple Saudagar, Pune
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              ARC Digital Solutions helps Pimple Saudagar businesses build a powerful online presence — custom websites,
              React.js applications, and local SEO campaigns that put your business in front of Pimple Saudagar and
              Pimpri-Chinchwad customers searching on Google.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Pimple Saudagar", "Pimpri-Chinchwad", "Wakad", "Ravet", "Pune"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  <MapPin className="w-3 h-3" />{loc}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Pimple%20Saudagar" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Free Consultation
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-accent-blue text-gray-700 hover:text-accent-blue font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> +91 77199 02074
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">Our Services in Pimple Saudagar</h2>
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-bold font-heading text-primary-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">What Makes ARC Digital Different</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Custom-built — no templates, no page builders", "Local SEO from day one — rank in Pimple Saudagar", "30-day free support after launch", "Clear timelines, fixed prices", "Mobile-first responsive designs", "Ongoing maintenance plans available"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">FAQ — Web Development in Pimple Saudagar</h2>
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
            <h2 className="text-lg font-bold font-heading text-primary-navy mb-4">Explore More Pune Area Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Web Development Pune", href: "/web-development-company-pune" },
                { label: "Web Development Wakad", href: "/web-development-company-wakad" },
                { label: "Web Development Pimpri-Chinchwad", href: "/web-development-company-pimpri-chinchwad" },
                { label: "SEO Services Pune", href: "/seo-company-pune" },
                { label: "App Development Pune", href: "/app-development-company-pune" },
                { label: "Website Redesign Pune", href: "/website-redesign-pune" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Grow Your Pimple Saudagar Business Online</h2>
            <p className="text-white/80 mb-6 text-sm">Free consultation. Affordable pricing. Guaranteed quality.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20from%20Pimple%20Saudagar%20and%20need%20a%20website" target="_blank" rel="noopener noreferrer"
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
