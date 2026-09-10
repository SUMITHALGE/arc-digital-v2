import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Megaphone, Target, TrendingUp, BarChart2, Mail, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Mumbai | ARC Digital Solutions",
  description:
    "Top digital marketing agency in Mumbai. SEO, social media marketing, Google Ads, content marketing, email marketing for Mumbai businesses. Free strategy call — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/digital-marketing-agency-mumbai",
  },
  openGraph: {
    title: "Digital Marketing Agency Mumbai | ARC Digital Solutions",
    description:
      "Best digital marketing agency in Mumbai. SEO, Google Ads, social media, content marketing. Grow your Mumbai business online. Free strategy session.",
    url: "https://www.arcdigitalsolution.in/digital-marketing-agency-mumbai",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "digital marketing agency mumbai",
    "digital marketing company mumbai",
    "online marketing agency mumbai",
    "seo and digital marketing mumbai",
    "google ads agency mumbai",
    "social media marketing mumbai",
    "content marketing mumbai",
    "best digital marketing agency mumbai",
  ],
};

const services = [
  {
    icon: <Target className="w-6 h-6 text-accent-blue" />,
    title: "Google Ads (PPC)",
    desc: "Targeted Google Search and Display campaigns for Mumbai businesses — keyword research, ad copywriting, landing page optimization, and ongoing bid management. We generate leads from day one while optimizing for the lowest cost-per-acquisition.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-blue" />,
    title: "SEO",
    desc: "Organic search growth for Mumbai businesses — technical SEO, local SEO for Mumbai areas, content strategy, and link building. Long-term visibility that compounds over time and reduces dependency on paid ads.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-accent-blue" />,
    title: "Social Media Marketing",
    desc: "Instagram, LinkedIn, and Facebook marketing for Mumbai brands — content creation, community management, paid social campaigns, and influencer collaborations. Build brand awareness and engagement with Mumbai's digitally-active audience.",
  },
  {
    icon: <Megaphone className="w-6 h-6 text-accent-blue" />,
    title: "Content Marketing",
    desc: "Blog posts, case studies, whitepapers, and landing pages — keyword-optimized, Mumbai-market-relevant content that attracts organic traffic and establishes your brand as the go-to authority in your industry.",
  },
  {
    icon: <Mail className="w-6 h-6 text-accent-blue" />,
    title: "Email Marketing",
    desc: "Automated email sequences, newsletters, and lead nurturing campaigns for Mumbai businesses. From welcome series to re-engagement flows — we turn your email list into a revenue-generating asset.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-accent-blue" />,
    title: "Analytics & Reporting",
    desc: "Google Analytics 4, Search Console, and custom dashboards — monthly performance reports with traffic, leads, conversions, and ROI data. Full transparency on every campaign running for your Mumbai business.",
  },
];

const faqs = [
  {
    question: "Which is the best digital marketing agency in Mumbai?",
    answer:
      "ARC Digital Solutions is a top-rated digital marketing agency in Mumbai, helping businesses grow through SEO, Google Ads, social media marketing, and content strategy. We focus on measurable results — more traffic, more leads, more revenue for Mumbai businesses.",
  },
  {
    question: "How much do digital marketing services cost in Mumbai?",
    answer:
      "Digital marketing packages in Mumbai range from ₹15,000/month for basic SEO + social media to ₹60,000+/month for full-service campaigns including Google Ads, SEO, content, and social media. ARC Digital Solutions offers transparent packages starting from ₹15,000/month with clear KPIs and monthly reporting.",
  },
  {
    question: "How long does it take to see results from digital marketing in Mumbai?",
    answer:
      "Google Ads results are immediate — leads start flowing within the first week. SEO results take 2-4 months for initial ranking improvements. Social media brand building shows engagement growth within 30-60 days. We set realistic expectations upfront and report progress monthly.",
  },
  {
    question: "Do you run Google Ads campaigns for Mumbai businesses?",
    answer:
      "Yes. We manage Google Search, Display, Shopping, and YouTube campaigns for Mumbai businesses. We handle everything — keyword research, ad creation, landing page optimization, bid management, and conversion tracking — focused on generating leads at the lowest cost.",
  },
  {
    question: "Can you handle social media marketing for my Mumbai brand?",
    answer:
      "Absolutely. We manage Instagram, LinkedIn, and Facebook for Mumbai businesses — creating content calendars, designing posts, writing captions, running paid social ads, and managing community engagement. We understand Mumbai's urban, cosmopolitan audience and create content that resonates.",
  },
  {
    question: "Do you offer integrated SEO + digital marketing packages for Mumbai?",
    answer:
      "Yes. Our most popular option for Mumbai businesses is an integrated package combining SEO (organic long-term growth) + Google Ads (immediate paid leads) + social media (brand awareness). This multi-channel approach delivers the fastest and most sustainable client acquisition results.",
  },
];

export default function DigitalMarketingMumbaiPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/digital-marketing-agency-mumbai#service",
        serviceType: "Digital Marketing",
        name: "Digital Marketing Agency in Mumbai — ARC Digital Solutions",
        description:
          "Top digital marketing agency in Mumbai. SEO, Google Ads, social media marketing, content strategy, and email marketing for Mumbai businesses.",
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
        url: "https://www.arcdigitalsolution.in/digital-marketing-agency-mumbai",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Digital Marketing Agency Mumbai", item: "https://www.arcdigitalsolution.in/digital-marketing-agency-mumbai" },
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
            <span className="text-primary-navy font-medium">Digital Marketing Agency Mumbai</span>
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
                Digital Marketing Agency — Mumbai
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Digital Marketing Agency in Mumbai
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is a full-service digital marketing agency in Mumbai — helping Mumbai businesses grow online through SEO, Google Ads, social media marketing, and content strategy. We drive real results: more traffic, more leads, more clients.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20digital%20marketing%20in%20Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Free Strategy Call
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
                Why Choose ARC Digital for Marketing in Mumbai?
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "SEO + Google Ads + Social — All Under One Roof",
                  "Mumbai Market Expertise",
                  "Measurable ROI — Not Vanity Metrics",
                  "Transparent Monthly Reporting",
                  "Google-Certified Campaign Management",
                  "Local SEO — Area-Specific Targeting",
                  "Content That Converts Mumbai Visitors",
                  "Free Strategy Session — No Commitment",
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
                Book Free Strategy Call
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Digital Marketing Services in Mumbai
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              We offer a complete digital marketing ecosystem for Mumbai businesses — from getting found on Google to converting visitors into paying clients.
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

        {/* Results */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">Results for Mumbai Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "5x", label: "Lead Generation Growth", desc: "Average increase in qualified leads for Mumbai clients within 90 days" },
              { metric: "Page 1", label: "Google Rankings", desc: "Target keywords consistently ranked on page 1 of Google India" },
              { metric: "3x", label: "Return on Ad Spend", desc: "Average ROAS on Google Ads campaigns for Mumbai businesses" },
            ].map((stat) => (
              <div key={stat.metric} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-accent-blue mb-2">{stat.metric}</div>
                <div className="font-semibold text-primary-navy mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
              FAQs — Digital Marketing in Mumbai
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="border border-gray-200 rounded-xl p-6">
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services & Locations</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Digital Marketing Pune", href: "/digital-marketing-agency-pune" },
              { label: "Digital Marketing Aurangabad", href: "/digital-marketing-agency-chhatrapati-sambhajinagar" },
              { label: "SEO Company Mumbai", href: "/seo-company-mumbai" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
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
            <h2 className="text-2xl font-bold font-heading mb-3">
              Grow Your Mumbai Business Online — Starting Today
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Free strategy session — we&apos;ll audit your current digital presence and show you the fastest path to more clients in Mumbai.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20digital%20marketing%20in%20Mumbai"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />WhatsApp Now
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
