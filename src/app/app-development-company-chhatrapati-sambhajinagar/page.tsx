import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Smartphone, Code2, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "App Development Company in Chhatrapati Sambhajinagar | Mobile App Developer Aurangabad | ARC Digital Solutions",
  description:
    "Best app development company in Chhatrapati Sambhajinagar (Aurangabad). iOS, Android & React Native mobile apps, web apps & e-commerce for CSN businesses. Free consultation — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/app-development-company-chhatrapati-sambhajinagar",
  },
  openGraph: {
    title: "App Development Company Chhatrapati Sambhajinagar | ARC Digital Solutions",
    description: "Mobile app development company in Chhatrapati Sambhajinagar (Aurangabad). iOS, Android, React Native & web apps. Free consultation.",
    url: "https://www.arcdigitalsolution.in/app-development-company-chhatrapati-sambhajinagar",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "app development company chhatrapati sambhajinagar",
    "mobile app development aurangabad",
    "app developer aurangabad",
    "mobile app developer chhatrapati sambhajinagar",
    "android app development aurangabad",
    "ios app development aurangabad",
    "react native development aurangabad",
    "web app development aurangabad",
    "software development company aurangabad",
    "it company aurangabad",
    "best app development company aurangabad",
  ],
};

const services = [
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "React Native Mobile Apps",
    desc: "Cross-platform apps for iOS and Android — one codebase, two platforms. Perfect for Chhatrapati Sambhajinagar businesses wanting to reach customers on their phones without the cost of two separate native apps.",
  },
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "Progressive Web Apps (PWA)",
    desc: "Web apps that work like mobile apps — offline access, push notifications, installable on home screen. An affordable solution for Aurangabad businesses wanting mobile presence without App Store complexity.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "Custom Web Applications",
    desc: "Business-specific web applications — booking systems, inventory management, customer portals, and billing software. We build custom web tools that automate your Chhatrapati Sambhajinagar business operations.",
  },
  {
    icon: <Star className="w-6 h-6 text-accent-blue" />,
    title: "E-Commerce Mobile App",
    desc: "Mobile shopping apps for your CSN business — product listings, cart, Razorpay/UPI payments, order tracking, and push notifications. Reach Marathwada customers on their phones and grow your sales.",
  },
];

const faqs = [
  {
    question: "Is there an app development company in Chhatrapati Sambhajinagar?",
    answer: "ARC Digital Solutions serves Chhatrapati Sambhajinagar (Aurangabad) with professional mobile app development services. While we are based in Maharashtra, we work remotely with CSN businesses via WhatsApp, video calls, and shared project boards — delivering high-quality apps with regular updates and demos.",
  },
  {
    question: "How much does app development cost in Aurangabad?",
    answer: "A basic React Native app starts from ₹40,000-50,000. A full-featured app with backend, payments, and admin panel costs ₹80,000-1,50,000+. For Chhatrapati Sambhajinagar businesses, we offer competitive pricing and flexible payment schedules. All quotes are free.",
  },
  {
    question: "Can you build a mobile app for my business in Chhatrapati Sambhajinagar?",
    answer: "Yes. We've built apps for businesses across Maharashtra including Marathwada region. Whether you need a service booking app, product catalog, delivery tracking, or customer loyalty app — we build it remotely with excellent communication throughout.",
  },
  {
    question: "Do you develop Android apps for Aurangabad businesses?",
    answer: "Yes. We build Android apps using React Native that are published on Google Play Store. We handle everything — development, testing, store listing, screenshots, and submission. Your app will be live on the Play Store within weeks.",
  },
  {
    question: "Can you build a Marathi language app for Chhatrapati Sambhajinagar?",
    answer: "Yes. We can build apps with Marathi language support — Marathi UI text, Devanagari fonts, and Marathi content management. This is especially useful for apps targeting the local Marathwada market where Marathi is the primary language.",
  },
];

export default function AppDevCSNPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/app-development-company-chhatrapati-sambhajinagar#service",
        serviceType: "Mobile App Development",
        name: "App Development Company in Chhatrapati Sambhajinagar — ARC Digital Solutions",
        description: "Mobile app development company serving Chhatrapati Sambhajinagar (Aurangabad). React Native, iOS, Android, web apps for CSN businesses.",
        provider: { "@type": "Organization", "@id": "https://www.arcdigitalsolution.in/#business", name: "ARC Digital Solutions" },
        areaServed: [
          { "@type": "City", name: "Chhatrapati Sambhajinagar" },
          { "@type": "City", name: "Aurangabad" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/app-development-company-chhatrapati-sambhajinagar",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "App Development Chhatrapati Sambhajinagar", item: "https://www.arcdigitalsolution.in/app-development-company-chhatrapati-sambhajinagar" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <div className="min-h-screen bg-[#FAFAF8]">
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">App Development Company Chhatrapati Sambhajinagar</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Chhatrapati Sambhajinagar", "Aurangabad", "Jalna", "Marathwada"].map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" />{loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">App Development Company — Chhatrapati Sambhajinagar</span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                App Development Company in Chhatrapati Sambhajinagar
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions builds mobile apps, web applications, and e-commerce platforms for businesses in Chhatrapati Sambhajinagar (Aurangabad). iOS, Android, React Native, and PWA — affordable, high-quality, delivered on time.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20app%20development%20in%20Chhatrapati%20Sambhajinagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                  <MessageCircle className="w-4 h-4" />WhatsApp Free Consultation
                </a>
                <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white font-semibold rounded-xl transition-colors">
                  <Phone className="w-4 h-4" />+91 77199 02074
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Why ARC Digital for App Dev in CSN?</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "iOS + Android from a Single Codebase",
                  "Affordable Pricing for CSN Businesses",
                  "Marathi Language App Support",
                  "UPI & Razorpay Payment Integration",
                  "Regular WhatsApp Updates Throughout",
                  "Play Store & App Store Submission Handled",
                  "Post-Launch Support & Maintenance",
                  "Free Consultation — No Commitment",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 block text-center px-4 py-3 bg-primary-navy text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors">Request a Free Quote</a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">App Development Services for CSN Businesses</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">Professional digital solutions for businesses in Chhatrapati Sambhajinagar — apps that work, look great, and bring you customers.</p>
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
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">FAQ — App Development in Chhatrapati Sambhajinagar</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="border border-gray-200 rounded-xl p-6 bg-white">
                <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}<span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services & Locations</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Web Development Aurangabad", href: "/web-development-company-chhatrapati-sambhajinagar" },
              { label: "SEO Services Aurangabad", href: "/seo-company-chhatrapati-sambhajinagar" },
              { label: "App Development Pune", href: "/app-development-company-pune" },
              { label: "App Development Mumbai", href: "/app-development-company-mumbai" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors">{link.label}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">Start Your App Project in Chhatrapati Sambhajinagar</h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">Free consultation. WhatsApp us your idea and we&apos;ll give you a detailed plan and quote within 24 hours. No commitment required.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20app%20development%20in%20Chhatrapati%20Sambhajinagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="w-4 h-4" />WhatsApp Now
              </a>
              <a href="tel:+917719902074" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30">
                <Phone className="w-4 h-4" />Call: +91 77199 02074
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
