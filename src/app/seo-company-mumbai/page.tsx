import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, BarChart2, Search, TrendingUp, Star, Globe, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Company in Mumbai | ARC Digital Solutions",
  description:
    "Top SEO company in Mumbai. Technical SEO, local SEO, content strategy, Google ranking for Mumbai businesses. Proven results. Free SEO audit — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/seo-company-mumbai",
  },
  openGraph: {
    title: "SEO Company Mumbai | ARC Digital Solutions",
    description:
      "Best SEO company in Mumbai. Technical SEO, local SEO, on-page & off-page optimization. Get your Mumbai business to page 1 on Google. Free audit.",
    url: "https://www.arcdigitalsolution.in/seo-company-mumbai",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "seo company mumbai",
    "seo agency mumbai",
    "seo services mumbai",
    "best seo company in mumbai",
    "local seo mumbai",
    "google ranking mumbai",
    "digital marketing seo mumbai",
    "technical seo mumbai",
    "seo expert mumbai",
  ],
};

const services = [
  {
    icon: <Search className="w-6 h-6 text-accent-blue" />,
    title: "Technical SEO",
    desc: "Complete technical SEO audit and implementation for Mumbai businesses — site speed optimization, Core Web Vitals, structured data (Schema.org), XML sitemaps, canonical tags, and crawlability fixes. We ensure Google can index and rank your site efficiently.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-accent-blue" />,
    title: "Local SEO Mumbai",
    desc: "Dominate Google Maps and local search results across Mumbai — Andheri, Bandra, Borivali, Thane, Navi Mumbai. Google Business Profile optimization, local citations, NAP consistency, and review strategy to bring walk-in and call-in clients to your Mumbai business.",
  },
  {
    icon: <FileText className="w-6 h-6 text-accent-blue" />,
    title: "On-Page SEO & Content",
    desc: "Keyword research targeting Mumbai's search intent, on-page optimization of all pages — title tags, meta descriptions, header structure, internal linking, and SEO-rich content that Google rewards with higher rankings.",
  },
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Off-Page SEO & Link Building",
    desc: "High-authority backlink acquisition from Indian and global websites relevant to your Mumbai business niche. Guest posts, digital PR, business directory submissions, and citation building for sustained ranking growth.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
    title: "E-Commerce SEO Mumbai",
    desc: "Specialized SEO for e-commerce businesses in Mumbai — product page optimization, category SEO, schema markup for products, conversion rate optimization, and rank tracking for high-intent buying keywords.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-accent-blue" />,
    title: "SEO Reporting & Analytics",
    desc: "Monthly SEO performance reports with keyword ranking positions, organic traffic data, conversion tracking, and competitor analysis. Full transparency — you always know exactly what we're doing and why.",
  },
];

const faqs = [
  {
    question: "Which is the best SEO company in Mumbai?",
    answer:
      "ARC Digital Solutions is a top-rated SEO company in Mumbai, delivering measurable results — higher Google rankings, more organic traffic, and increased leads for Mumbai businesses. We specialize in technical SEO, local SEO, and content-led strategies tailored to Mumbai's competitive market.",
  },
  {
    question: "How much do SEO services cost in Mumbai?",
    answer:
      "SEO services in Mumbai typically range from ₹8,000/month for basic local SEO to ₹30,000+/month for comprehensive technical + content + link building campaigns. At ARC Digital Solutions, packages start from ₹10,000/month with transparent deliverables and monthly reporting.",
  },
  {
    question: "How long does it take to rank on Google in Mumbai?",
    answer:
      "For local Mumbai keywords with moderate competition, initial ranking improvements are typically seen in 2-3 months. Ranking in the top 3 positions for competitive keywords takes 4-8 months of consistent SEO work. Local SEO for Google Maps/Pack can show results faster — often within 4-6 weeks.",
  },
  {
    question: "Do you provide local SEO for businesses in specific Mumbai areas?",
    answer:
      "Yes. We specialize in hyper-local SEO for specific Mumbai areas — Andheri, Bandra, Borivali, Juhu, Worli, Thane, Navi Mumbai, and all suburbs. If you want to rank for 'restaurant in Andheri' or 'salon in Bandra', we know exactly how to get you there.",
  },
  {
    question: "Do you offer a free SEO audit for Mumbai websites?",
    answer:
      "Yes. We offer a free comprehensive SEO audit for Mumbai businesses — covering technical health, keyword opportunities, competitor analysis, and quick wins. Contact us via WhatsApp or call to get your free audit within 24 hours.",
  },
  {
    question: "Can SEO help my Mumbai startup get more leads?",
    answer:
      "Absolutely. SEO is one of the highest-ROI marketing channels for Mumbai startups — organic traffic is free and compounds over time. We focus on keywords your ideal customers are already searching, bringing qualified leads who are ready to buy.",
  },
];

export default function SeoMumbaiPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/seo-company-mumbai#service",
        serviceType: "SEO Services",
        name: "SEO Company in Mumbai — ARC Digital Solutions",
        description:
          "Top SEO company in Mumbai offering technical SEO, local SEO, content strategy, and link building for Mumbai businesses. Get to page 1 on Google.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/seo-company-mumbai",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "SEO Company Mumbai", item: "https://www.arcdigitalsolution.in/seo-company-mumbai" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAF8]">
        {/* Hero */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">SEO Company Mumbai</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Mumbai", "Navi Mumbai", "Thane", "Maharashtra"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" />{loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
                SEO Company — Mumbai
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                SEO Company in Mumbai
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is a results-driven SEO company in Mumbai. We help Mumbai businesses rank higher on Google, attract more organic traffic, and convert visitors into paying clients — through technical SEO, local SEO, content strategy, and link building.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20SEO%20services%20in%20Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Free SEO Audit
                </a>
                <a
                  href="tel:+917719902074"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 77199 02074
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">
                Why Choose ARC Digital for SEO in Mumbai?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Free SEO Audit — Within 24 Hours",
                  "Technical SEO + Core Web Vitals",
                  "Local SEO for Mumbai Areas",
                  "Transparent Monthly Reporting",
                  "Google Business Profile Optimization",
                  "High-Authority Link Building",
                  "Keyword Research — Mumbai Market",
                  "Proven ROI — Measurable Results",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors"
              >
                Request Free SEO Audit
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Our SEO Services in Mumbai
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              From technical foundations to content and links — we handle every aspect of SEO to get your Mumbai business ranking on page 1.
            </p>
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

        {/* Pricing */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">SEO Packages for Mumbai Businesses</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Transparent monthly pricing — no lock-in contracts. Cancel anytime.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Local SEO", price: "₹10,000/mo", features: ["Google Business Optimization", "5 Local Keywords", "On-Page SEO (5 pages)", "Monthly Report", "Citation Building"] },
              { name: "Growth SEO", price: "₹20,000/mo", features: ["Everything in Local", "15 Target Keywords", "Content Creation (2 blogs/mo)", "Link Building (5 links/mo)", "Competitor Analysis"], highlight: true },
              { name: "Enterprise SEO", price: "₹35,000/mo", features: ["Everything in Growth", "30+ Keywords", "Technical SEO Overhaul", "10+ Links/mo", "Weekly Reports + Calls"] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.highlight ? "border-accent-blue bg-blue-50" : "border-gray-200 bg-white"}`}>
                <h3 className="text-lg font-bold font-heading text-primary-navy mb-1">{plan.name}</h3>
                <p className={`text-3xl font-bold mb-6 ${plan.highlight ? "text-accent-blue" : "text-primary-navy"}`}>{plan.price}</p>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20interested%20in%20SEO%20services%20in%20Mumbai"
                  target="_blank" rel="noopener noreferrer"
                  className={`mt-6 block text-center px-4 py-3 font-semibold rounded-xl transition-colors ${plan.highlight ? "bg-accent-blue text-white hover:bg-blue-700" : "bg-primary-navy text-white hover:bg-blue-900"}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">Results We&apos;ve Delivered</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { metric: "3x", label: "Organic Traffic Increase", desc: "Average organic traffic growth for Mumbai clients within 6 months" },
                { metric: "Top 3", label: "Google Rankings", desc: "Most target keywords ranked in top 3 positions on Google India" },
                { metric: "40%", label: "More Leads", desc: "Average increase in qualified leads from organic search for Mumbai businesses" },
              ].map((stat) => (
                <div key={stat.metric} className="border border-gray-100 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent-blue mb-2">{stat.metric}</div>
                  <div className="font-semibold text-primary-navy mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
            Frequently Asked Questions — SEO in Mumbai
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border border-gray-200 rounded-xl p-6 bg-white">
                <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services & Locations</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "SEO Company Pune", href: "/seo-company-pune" },
              { label: "SEO Company Aurangabad", href: "/seo-company-chhatrapati-sambhajinagar" },
              { label: "Digital Marketing Mumbai", href: "/digital-marketing-agency-mumbai" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "SEO Services", href: "/services/seo-services" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold font-heading mb-3">
              Ready to Rank #1 in Mumbai?
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free SEO audit for your Mumbai business — we&apos;ll show you exactly what&apos;s holding you back from Google page 1 and how to fix it.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20SEO%20services%20in%20Mumbai"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />WhatsApp for Free Audit
              </a>
              <a
                href="tel:+917719902074"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
              >
                <Phone className="w-4 h-4" />Call: +91 77199 02074
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
