import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Smartphone,
  Globe,
  Server,
  Shield,
  Zap,
  RefreshCw,
} from "lucide-react";
import styles from "../services.module.css";

export const metadata: Metadata = {
  title: "Application Development Company Pune & Mumbai | React & Spring Boot Apps | ARC Digital Solutions",
  description:
    "Expert application development company in Pune & Mumbai. React.js, React Native & Spring Boot web and mobile apps. Scalable, secure, API-driven. 100+ apps delivered. Free project estimate — ARC Digital Solutions.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/services/application-development",
    languages: { "en-IN": "https://www.arcdigitalsolution.in/services/application-development" },
  },
  keywords: [
    "application development company pune",
    "app development company mumbai",
    "web application development pune",
    "mobile app development pune",
    "react native app development pune",
    "spring boot application development",
    "custom app development pune",
    "enterprise application development india",
    "react js app development pune",
    "full stack development pune",
  ],
  openGraph: {
    title: "Application Development Company Pune & Mumbai | ARC Digital Solutions",
    description:
      "Custom React.js, React Native & Spring Boot application development in Pune and Mumbai. Scalable, secure, tested. 100+ apps delivered. Free estimate.",
    url: "https://www.arcdigitalsolution.in/services/application-development",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.arcdigitalsolution.in/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Application Development Company in Pune & Mumbai — ARC Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcdigital",
    creator: "@arcdigital",
    title: "Application Development Company Pune & Mumbai | ARC Digital Solutions",
    description:
      "Custom React.js, React Native & Spring Boot apps in Pune and Mumbai. Scalable, API-driven, tested. Free estimate.",
    images: ["https://www.arcdigitalsolution.in/assets/og-image.jpg"],
  },
};

const features = [
  {
    icon: <Globe className="w-6 h-6 text-accent-blue" />,
    title: "React.js & Next.js Web Apps",
    desc: "We build enterprise-grade web applications using React.js and Next.js with server-side rendering, dynamic routing, and optimized Core Web Vitals — delivering sub-2-second load times for Pune and Mumbai users.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-accent-blue" />,
    title: "React Native Mobile Apps",
    desc: "Cross-platform mobile applications for Android and iOS using React Native — one codebase, two platforms, 60% cost reduction compared to native development. Ideal for Pune startups and Mumbai SMEs.",
  },
  {
    icon: <Server className="w-6 h-6 text-accent-blue" />,
    title: "Spring Boot REST API & Backend",
    desc: "Secure, scalable Spring Boot microservices and REST APIs — the backbone of any robust application. We build Java-based backends that handle thousands of concurrent requests for growing Indian businesses.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent-blue" />,
    title: "Security-First Architecture",
    desc: "Every application is built with OWASP Top 10 compliance, JWT authentication, role-based access control (RBAC), and end-to-end encryption — protecting your users and your business data.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "Progressive Web Apps (PWA)",
    desc: "PWAs that work offline, load instantly, and feel like native apps — without App Store distribution. Perfect for Pune and Mumbai businesses looking for app-like experiences without mobile app development costs.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-accent-blue" />,
    title: "Legacy App Modernisation",
    desc: "We migrate legacy PHP, .NET, or outdated Java monoliths to modern React + Spring Boot microservice architectures — reducing tech debt and cutting operational costs by 30–50%.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "Free 30-minute call to understand your business problem, users, and technical requirements.",
  },
  {
    step: "02",
    title: "Requirement Gathering",
    desc: "Detailed documentation of features, user roles, data flows, and third-party integrations needed.",
  },
  {
    step: "03",
    title: "Proposal & Architecture",
    desc: "We present a technology stack recommendation, system architecture diagram, timeline, and fixed quote.",
  },
  {
    step: "04",
    title: "UI/UX Design Phase",
    desc: "Figma wireframes → high-fidelity mockups. You approve every screen before development starts.",
  },
  {
    step: "05",
    title: "Agile Development Sprints",
    desc: "2-week sprint cycles with regular demo calls — you see real progress every 14 days, no surprises.",
  },
  {
    step: "06",
    title: "QA & Testing",
    desc: "Unit testing, integration testing, cross-browser, cross-device, and performance testing. Zero-defect deployment standard.",
  },
  {
    step: "07",
    title: "Deployment & Go-Live",
    desc: "CI/CD pipeline setup, cloud deployment (AWS/Vercel/Railway), domain configuration, and launch monitoring.",
  },
  {
    step: "08",
    title: "Support & Maintenance",
    desc: "Post-launch: 30-day free bug support + optional monthly maintenance plans for updates, security patches, and feature additions.",
  },
];

const faqData = [
  {
    question: "What types of applications does ARC Digital Solutions build in Pune?",
    answer:
      "ARC Digital Solutions builds web applications (React.js, Next.js), REST APIs and backend systems (Spring Boot, Java), cross-platform mobile apps (React Native), Progressive Web Apps (PWAs), and enterprise portals. We serve startups, SMEs, and growing businesses across Pune — including Hinjewadi, Baner, Wakad, and Kharadi IT hubs.",
  },
  {
    question: "How much does custom application development cost in Mumbai?",
    answer:
      "Application development in Mumbai starts from ₹40,000 for simple web apps. Full-stack React + Spring Boot enterprise applications start from ₹1,00,000 depending on complexity, number of modules, and integrations required. React Native mobile apps start from ₹75,000. We provide detailed, fixed-price quotes after a free discovery call.",
  },
  {
    question: "How long does it take to develop a web application?",
    answer:
      "Simple web apps with standard features take 4–6 weeks. Medium-complexity applications (CRMs, portals, dashboards) take 8–16 weeks. Enterprise-scale multi-module applications take 3–6 months. We use 2-week Agile sprints, so you see working software every 14 days throughout the project.",
  },
  {
    question: "Do you build React Native mobile apps in Pune?",
    answer:
      "Yes. ARC Digital Solutions builds cross-platform mobile applications using React Native for Android and iOS. React Native allows us to build one codebase that runs on both platforms — reducing your development cost by up to 60% compared to native development while maintaining near-native performance.",
  },
  {
    question: "Do you provide post-launch application maintenance?",
    answer:
      "Yes. Every application includes 30 days of free bug-fix support post-launch. We also offer ongoing maintenance plans covering security updates, dependency upgrades, performance monitoring, feature additions, and priority bug fixes — starting from ₹8,000/month.",
  },
  {
    question: "Can you modernise our existing legacy application?",
    answer:
      "Absolutely. We have experience migrating legacy PHP, .NET, and older Java applications to modern React.js frontends with Spring Boot microservice backends. Legacy modernisation typically reduces infrastructure costs by 30–50% and improves application performance by 3–5×.",
  },
];

export default function ApplicationDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/services/application-development#service",
        serviceType: "Application Development",
        name: "Application Development Services — Pune & Mumbai",
        description:
          "Custom web and mobile application development company in Pune and Mumbai. We build React.js web apps, React Native mobile apps, Spring Boot REST APIs, and enterprise portals for startups and SMEs across Maharashtra.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
          url: "https://www.arcdigitalsolution.in",
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Pimpri-Chinchwad" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "State", name: "Maharashtra" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Application Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "React.js Web Application Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "React Native Mobile App Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spring Boot REST API Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Progressive Web App Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legacy Application Modernisation" } },
          ],
        },
        url: "https://www.arcdigitalsolution.in/services/application-development",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.arcdigitalsolution.in/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Application Development",
            item: "https://www.arcdigitalsolution.in/services/application-development",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className={styles.servicesPage}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary-navy transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">Application Development</span>
          </nav>

          {/* Back button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent-blue font-semibold mb-8 hover:text-primary-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7">
              <span className={styles.label}>Application Development Company — Pune & Mumbai</span>
              <h1 className={styles.title}>Application Development</h1>
              <p className={styles.subtitle}>
                Your business idea deserves a robust, scalable digital product. ARC Digital Solutions is a
                full-stack application development company in Pune and Mumbai — building React.js web apps,
                React Native mobile applications, and Spring Boot microservices for startups, SMEs, and
                enterprises across Maharashtra. From MVP to enterprise scale, we engineer applications
                that perform, convert, and grow with your business.
              </p>

              {/* Location signals */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["Pune", "Mumbai", "Hinjawadi", "Pimpri-Chinchwad", "Navi Mumbai", "Maharashtra"].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                  >
                    <MapPin className="w-3 h-3" />
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-5 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold font-heading mb-6 text-primary-navy">What You Get</h2>
              <ul className="flex flex-col gap-4 mb-8">
                {[
                  "React.js / React Native / Spring Boot Stack",
                  "OWASP Security-First Architecture",
                  "Agile Development (2-week Sprints)",
                  "CI/CD Deployment Pipeline",
                  "30-Day Free Post-Launch Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Application%20Development%20in%20Pune%2FMumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceCta}
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Get Free Quote on WhatsApp
                </a>
                <a
                  href="/contact"
                  className="text-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors"
                >
                  Send Us a Message
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-16 mb-16">
            <h2 className="col-span-full text-2xl font-bold font-heading text-primary-navy mb-2">
              Our Application Development Services in Pune & Mumbai
            </h2>
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold font-heading mb-3 text-primary-navy">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Service Process Journey */}
          <div className="border-t border-gray-200 pt-16 mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-3">
              Our Application Development Process
            </h2>
            <p className="text-gray-500 text-sm mb-10">
              A proven 8-step delivery framework that gives you visibility, control, and confidence at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-accent-blue hover:shadow-md transition-all"
                >
                  <span className="text-4xl font-black font-heading text-blue-50 absolute top-4 right-4 leading-none select-none">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold font-heading text-primary-navy mb-2 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Stats */}
          <div className="border-t border-gray-200 pt-16 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "100+", label: "Applications Delivered" },
                { value: "4.9★", label: "Average Client Rating" },
                { value: "30 Days", label: "Free Post-Launch Support" },
                { value: "2-Week", label: "Agile Sprint Cycles" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <p className="text-2xl font-black font-heading text-accent-blue">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-gray-200 pt-16 mb-16">
            <h2 className="text-2xl font-bold font-heading text-primary-navy mb-8">
              Frequently Asked Questions — Application Development in Pune & Mumbai
            </h2>
            <div className="flex flex-col gap-4">
              {faqData.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6 group"
                >
                  <summary className="font-semibold text-primary-navy cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-accent-blue text-xl font-light flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="border-t border-gray-200 pt-12 mb-12">
            <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Website Development Mumbai", href: "/services/website-development" },
                { label: "SEO Services Pune", href: "/services/seo-services" },
                { label: "App Development Pune", href: "/app-development-company-pune" },
                { label: "App Development Mumbai", href: "/app-development-company-mumbai" },
                { label: "Spring Boot Development Pune", href: "/spring-boot-development-pune" },
                { label: "React Development Pune", href: "/react-development-pune" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-accent-blue hover:bg-blue-50 hover:border-accent-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">
              Ready to Build Your Application in Pune or Mumbai?
            </h2>
            <p className="text-white/80 mb-6 text-sm">
              Get a free discovery call and project estimate — no commitment required.
              ARC Digital Solutions serves businesses across Pune, Mumbai, Pimpri-Chinchwad, Navi Mumbai, and Thane.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20an%20application%20development%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Now
              </a>
              <a
                href="tel:+917719902074"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
              >
                <Phone className="w-4 h-4" />
                Call Us: +91 77199 02074
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
