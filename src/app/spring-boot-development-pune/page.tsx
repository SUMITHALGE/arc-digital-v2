import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone, MessageCircle, Code2, Server, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Spring Boot Development Company in Pune | ARC Digital Solutions",
  description:
    "Expert Spring Boot development company in Pune. REST API development, microservices architecture, Java backend for Pune startups & IT companies. Spring Security, AWS deployment. Free consultation.",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in/spring-boot-development-pune",
  },
  openGraph: {
    title: "Spring Boot Development Company Pune | ARC Digital Solutions",
    description:
      "Top Spring Boot development company in Pune. REST APIs, microservices, Java backend, Spring Security. Serving Hinjewadi, Baner, Kothrud, and all Pune. Free consultation.",
    url: "https://www.arcdigitalsolution.in/spring-boot-development-pune",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "spring boot development company pune",
    "spring boot developer pune",
    "java backend development pune",
    "rest api development pune",
    "microservices development pune",
    "spring boot hinjewadi pune",
    "java developer pune",
  ],
};

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-accent-blue" />,
    title: "REST API Development",
    desc: "Production-grade REST APIs built with Spring Boot — clean design, request validation, error handling, and Swagger/OpenAPI documentation. Essential for Pune IT companies and startups building integrated products.",
  },
  {
    icon: <Server className="w-6 h-6 text-accent-blue" />,
    title: "Microservices Architecture",
    desc: "Scalable microservices designed with Spring Boot and Spring Cloud — service discovery, API Gateway, circuit breakers, and distributed tracing. Ideal for Pune enterprises in Hinjewadi and Baner IT Parks.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent-blue" />,
    title: "Spring Security & Auth",
    desc: "JWT authentication, OAuth2 integration, role-based access control (RBAC), and OWASP-compliant security patterns — protecting your Pune application from modern threats.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "React + Spring Boot Full-Stack",
    desc: "Complete full-stack delivery — React.js/Next.js frontend + Spring Boot backend — as a single integrated product. One team from design to deployment for Pune product companies.",
  },
  {
    icon: <Server className="w-6 h-6 text-accent-blue" />,
    title: "Database Integration",
    desc: "Expert MySQL, PostgreSQL, MongoDB, and Redis integration using Spring Data JPA and Hibernate. Optimized schemas and queries for high-performance Pune applications.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-blue" />,
    title: "Cloud Deployment (AWS / Azure)",
    desc: "Spring Boot deployment on AWS EC2, ECS, or Azure with Docker containerization, CI/CD pipelines, and production-ready DevOps. Complete handover with monitoring and alerting.",
  },
];

const faqs = [
  {
    question: "Does ARC Digital Solutions provide Spring Boot development in Pune?",
    answer:
      "Yes. ARC Digital Solutions is a Spring Boot development company serving Pune and all of Maharashtra. We build REST APIs, microservices, Spring Security implementations, and full-stack React + Spring Boot applications for Pune startups, product companies, and IT firms in Hinjewadi and Baner.",
  },
  {
    question: "What Spring Boot services do you offer to Pune companies?",
    answer:
      "We offer REST API development, microservices architecture, Spring Security implementation, Spring Boot + React full-stack development, database integration (MySQL, PostgreSQL, MongoDB), AWS/Azure deployment, Docker containerization, and CI/CD pipeline setup.",
  },
  {
    question: "How much does Spring Boot development cost in Pune?",
    answer:
      "Spring Boot REST API development in Pune starts from ₹25,000 for simple APIs. Full-stack React + Spring Boot applications start from ₹55,000. Microservices projects are scoped and quoted individually. All initial consultations and quotes are completely free.",
  },
  {
    question: "Can you come to our office in Hinjewadi or Baner for a meeting?",
    answer:
      "Yes. We serve clients across all Pune areas including Hinjewadi, Baner, Kothrud, Viman Nagar, Wakad, Kharadi, and Hadapsar. We can meet in person for project discovery and scoping, or work entirely remotely — whichever you prefer.",
  },
  {
    question: "Do you use Spring Boot for microservices in Pune IT company projects?",
    answer:
      "Yes. We design microservices architectures using Spring Boot, Spring Cloud, Eureka Service Discovery, Spring Cloud Gateway, and Docker. This is a common requirement for Pune's IT companies and SaaS product startups that need scalable, independently deployable services.",
  },
  {
    question: "Can you build a Spring Boot + React full-stack app for my Pune startup?",
    answer:
      "Absolutely. This is one of our core specialties. We deliver complete full-stack applications — React.js or Next.js frontend + Spring Boot REST API backend — with proper authentication, database integration, and cloud deployment for Pune startups.",
  },
];

export default function SpringBootPunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.arcdigitalsolution.in/spring-boot-development-pune#service",
        serviceType: "Spring Boot Development",
        name: "Spring Boot Development Company in Pune — ARC Digital Solutions",
        description:
          "Expert Spring Boot development company in Pune. REST APIs, microservices, Spring Security, React + Spring Boot full-stack for Pune startups and enterprises. Serving Hinjewadi, Baner, Kothrud, and all of Pune.",
        provider: {
          "@type": "Organization",
          "@id": "https://www.arcdigitalsolution.in/#business",
          name: "ARC Digital Solutions",
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "Place", name: "Hinjewadi" },
          { "@type": "Place", name: "Baner" },
          { "@type": "Place", name: "Kothrud" },
          { "@type": "City", name: "Pimpri-Chinchwad" },
          { "@type": "State", name: "Maharashtra" },
        ],
        url: "https://www.arcdigitalsolution.in/spring-boot-development-pune",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcdigitalsolution.in" },
          { "@type": "ListItem", position: 2, name: "Spring Boot Development Pune", item: "https://www.arcdigitalsolution.in/spring-boot-development-pune" },
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
        {/* Hero Section */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-navy font-medium">Spring Boot Development Pune</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Pune", "Hinjewadi", "Baner", "Kothrud", "Maharashtra"].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                  >
                    <MapPin className="w-3 h-3" />
                    {loc}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent-blue uppercase tracking-wider">
                Spring Boot Development Company — Pune
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-navy mt-2 mb-4 leading-tight">
                Spring Boot Development Company in Pune
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ARC Digital Solutions is a specialized Spring Boot development company serving Pune, Hinjewadi, Baner, and all of Maharashtra. We build enterprise-grade REST APIs, microservices, and React + Spring Boot full-stack applications — partnering with Pune&apos;s most ambitious startups and IT companies to power their digital products.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20Spring%20Boot%20development%20in%20Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Free Consultation
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

            {/* Quick Info Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary-navy mb-6">
                Why Pune Companies Choose ARC Digital for Spring Boot
              </h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Dedicated Spring Boot & Java Expertise",
                  "React.js + Spring Boot Full-Stack Delivery",
                  "Spring Security, JWT, OAuth2",
                  "Microservices with Spring Cloud",
                  "AWS / Azure Cloud Deployment",
                  "Docker & CI/CD Pipeline Setup",
                  "Serving Hinjewadi, Baner, Kothrud & All Pune",
                  "Free Technical Consultation & Scoping",
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
                Request a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-2">
              Our Spring Boot Services in Pune
            </h2>
            <p className="text-gray-600 mb-10 text-base leading-relaxed max-w-3xl">
              From simple REST APIs to enterprise microservices systems, we deliver production-ready Spring Boot solutions tailored for Pune&apos;s dynamic tech ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold font-heading text-primary-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
            Spring Boot Tech Stack — Pune Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Spring Boot 3.x", "Spring Security", "Spring Data JPA", "Spring Cloud",
              "Hibernate ORM", "REST / GraphQL", "MySQL / PostgreSQL", "MongoDB",
              "Redis", "Docker", "AWS / Azure", "Swagger / OpenAPI",
              "JUnit 5", "Mockito", "Maven / Gradle", "CI/CD (GitHub Actions)",
            ].map((tech) => (
              <div key={tech} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 text-center">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary-navy mb-8">
              FAQs — Spring Boot Development in Pune
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
              { label: "Spring Boot Development Mumbai", href: "/spring-boot-development-mumbai" },
              { label: "React Development Pune", href: "/react-development-pune" },
              { label: "Web Development Pune", href: "/web-development-company-pune" },
              { label: "Web Development Mumbai", href: "/web-development-company-mumbai" },
              { label: "Website Development Services", href: "/services/website-development" },
              { label: "SEO Services Pune", href: "/seo-company-pune" },
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
        </section>

        {/* CTA */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold font-heading mb-3">
              Start Your Spring Boot Project in Pune Today
            </h2>
            <p className="text-white/80 mb-6 text-sm max-w-xl mx-auto">
              Get a free consultation and technical scoping for your Spring Boot project.
              ARC Digital Solutions — your Spring Boot development partner in Pune, Maharashtra.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/917719902074?text=Hi%2C%20I%27m%20looking%20for%20Spring%20Boot%20development%20in%20Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Now
              </a>
              <a
                href="tel:+917719902074"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/30"
              >
                <Phone className="w-4 h-4" />
                Call: +91 77199 02074
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
