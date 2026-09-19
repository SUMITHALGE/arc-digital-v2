import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Globe, Code2, Search, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Wakad, Pune | ARC Digital Solutions",
  description:
    "Top web development company in Wakad, Pune. Custom websites, React.js apps, SEO-optimized, mobile-responsive. Serving IT firms & startups in Wakad. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/web-development-company-wakad",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/web-development-company-wakad" },
  },
  keywords: [
    "web development company wakad",
    "website development wakad pune",
    "web developer wakad",
    "website developer wakad",
    "react js development wakad",
    "digital marketing wakad",
    "seo services wakad pune",
    "app development wakad",
  ],
  openGraph: {
    title: "Web Development Company Wakad, Pune | ARC Digital Solutions",
    description:
      "Best web development company in Wakad, Pune. Custom websites, React.js, SEO services for Wakad businesses. Free consultation.",
    url: "https://www.arcdigitalsolution.in/web-development-company-wakad",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://www.arcdigitalsolution.in/assets/og-image.jpg", width: 1200, height: 630, alt: "Web Development Company Wakad Pune — ARC Digital Solutions" }],
  },
  twitter: { card: "summary_large_image", site: "@arcdigital", creator: "@arcdigital", title: "Web Development Company Wakad Pune | ARC Digital Solutions", description: "Custom websites, React.js & SEO for Wakad businesses. Free consultation.", images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"] },
};

const services = [
  { icon: <Globe className="w-6 h-6 text-accent-blue" />, title: "Custom Website Development", desc: "We build fully custom, SEO-optimized websites for Wakad businesses — fast-loading, mobile-first, and designed to generate leads and grow your online presence in Pune's thriving tech suburb." },
  { icon: <Code2 className="w-6 h-6 text-accent-blue" />, title: "React.js & Next.js Apps", desc: "Expert React.js and Next.js development for Wakad startups and IT companies. We deliver web applications with server-side rendering, SEO optimization, and enterprise-grade architecture." },
  { icon: <Search className="w-6 h-6 text-accent-blue" />, title: "SEO Services Wakad", desc: "Rank your Wakad business on Google. Technical SEO, local SEO, Google Maps optimization, and content strategy targeting customers searching for services in Wakad and Pimpri-Chinchwad area." },
  { icon: <Smartphone className="w-6 h-6 text-accent-blue" />, title: "Application Development", desc: "Web and mobile application development for Wakad businesses — React Native apps, Spring Boot APIs, and full-stack solutions that scale with your growing business." },
];

const faqs = [
  { question: "Which is the best web development company in Wakad, Pune?", answer: "ARC Digital Solutions is a leading web development company serving Wakad, Pune. We deliver custom websites, React.js web applications, and SEO services for startups, IT companies, and local businesses in the Wakad-Pimpri-Chinchwad area." },
  { question: "How much does website development cost in Wakad?", answer: "Website development in Wakad, Pune starts from ₹15,000 for basic business websites. Custom React.js or full-stack applications start from ₹40,000. We offer free, no-obligation quotes tailored to your Wakad business requirements." },
  { question: "Do you provide SEO services in Wakad?", answer: "Yes. ARC Digital Solutions provides comprehensive SEO services for Wakad businesses — including local SEO, technical SEO, Google Maps optimization, and content strategy to help you rank for searches like 'services in Wakad Pune'." },
  { question: "How do I get started with a web development project in Wakad?", answer: "Simply WhatsApp or call us at +91 77199 02074 for a free 30-minute discovery call. We'll discuss your requirements, suggest the right technology stack, and provide a detailed proposal with timeline and fixed pricing." },
  { question: "Can you redesign our existing website in Wakad?", answer: "Absolutely. We specialize in website redesign for Wakad businesses — modernizing outdated sites with fast loading, mobile-first design, and improved SEO structure while preserving your existing content and Google rankings." },
];

export default function WakadPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.arcdigitalsolution.in/web-development-company-wakad#business",
        name: "ARC Digital Solutions — Web Development Wakad",
        url: "https://www.arcdigitalsolution.in/web-development-company-wakad",
        image: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        description: "ARC Digital Solutions provides custom website development, React.js applications, and SEO services for businesses in Wakad, Pune.",
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
          { "@type": "ListItem", position: 2, name: "Web Development Pune", item: "https://www.arcdigitalsolution.in/web-development-company-pune" },
          { "@type": "ListItem", position: 3, name: "Web Development Wakad", item: "https://www.arcdigitalsolution.in/web-development-company-wakad" },
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:underline">Home</Link><span>/</span>
            <Link href="/web-development-company-pune" className="hover:underline">Web Development Pune</Link><span>/</span>
            <span className="font-medium text-primary-navy">Wakad</span>
          </nav>

          {/* Hero */}
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold text-accent-blue uppercase tracking-widest mb-4">Web Development Company — Wakad, Pune</span>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-primary-navy mb-6 leading-tight">
              Web Development Company<br />in Wakad, Pune
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
              ARC Digital Solutions is a trusted web development company serving Wakad, Pimpri-Chinchwad, and greater Pune.
              We build custom websites, React.js applications, and run SEO campaigns for startups, IT firms, and local
              businesses in Wakad — helping you rank on Google and generate qualified leads.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Wakad", "Pimpri-Chinchwad", "Hinjawadi", "Baner", "Pune"].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  <MapPin className="w-3 h-3" />{loc}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20web%20development%20in%20Wakad%20Pune" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp Free Consultation
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-accent-blue text-gray-700 hover:text-accent-blue font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> +91 77199 02074
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">Our Services in Wakad, Pune</h2>
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-md transition-shadow">
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-bold font-heading text-primary-navy mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Choose */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-16">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why Wakad Businesses Choose ARC Digital Solutions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["100+ successful website projects delivered", "Dedicated React.js & Spring Boot expertise", "SEO-first development — rank from day one", "Transparent fixed-price project quotes", "30-day free post-launch support", "Local Pune team — easy to communicate"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">FAQ — Web Development in Wakad</h2>
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

          {/* Internal Links */}
          <div className="mb-12">
            <h2 className="text-lg font-bold font-heading text-primary-navy mb-4">Also Serving Nearby Areas</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Web Development Pune", href: "/web-development-company-pune" },
                { label: "Web Development Hinjawadi", href: "/web-development-company-hinjawadi" },
                { label: "Web Development Baner", href: "/web-development-company-baner" },
                { label: "Web Development Pimpri-Chinchwad", href: "/web-development-company-pimpri-chinchwad" },
                { label: "SEO Services Pune", href: "/seo-company-pune" },
                { label: "App Development Pune", href: "/app-development-company-pune" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Ready to Grow Your Wakad Business Online?</h2>
            <p className="text-white/80 mb-6 text-sm">Free consultation with our Pune team. No commitment, no hidden fees.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20a%20Wakad%20business%20looking%20for%20web%20development" target="_blank" rel="noopener noreferrer"
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
