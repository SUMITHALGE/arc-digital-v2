"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const servicesList = [
  {
    title: "Website Development",
    href: "/services/website-development",
    desc: "SEO-first, speed-optimized custom websites.",
  },
  {
    title: "Website Redesign",
    href: "/services/website-redesign",
    desc: "Modernize styling, UX, and conversion rates.",
  },
  {
    title: "SEO Services",
    href: "/services/seo-services",
    desc: "Dominate search rankings and attract leads.",
  },
  {
    title: "Application Development",
    href: "/services/application-development",
    desc: "Scalable mobile & web apps that drive engagement.",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Arc Digital Solution">
          <span className={styles.logoArc}>ARC</span>
          <span className={styles.logoDivider} aria-hidden="true" />
          <span className={styles.logoSub}>Digital<br />Solution</span>
        </Link>


        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {/* Services Dropdown */}
          <div className={styles.dropdownWrapper}>
            <button className={styles.dropdownTrigger}>
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className={styles.dropdownMenu}>
              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={styles.dropdownItem}
                >
                  <span className={styles.dropdownItemTitle}>{service.title}</span>
                  <span className={styles.dropdownItemDesc}>{service.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/work" className={styles.navLink}>
            Work
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/faq" className={styles.navLink}>
            FAQ
          </Link>
          <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            Contact
          </a>
        </nav>

        {/* CTA Start Project */}
        <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
          Start Project
        </a>

        {/* Mobile Toggle Hamburger */}
        <button
          className={styles.menuBtn}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <button
          onClick={toggleServices}
          className={styles.mobileDropdownTrigger}
        >
          Services <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
        </button>

        {servicesOpen && (
          <div className={styles.mobileSubMenu}>
            {servicesList.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={styles.mobileSubNavLink}
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}

        <Link href="/work" className={styles.mobileNavLink}>
          Work
        </Link>
        <Link href="/about" className={styles.mobileNavLink}>
          About
        </Link>
        <Link href="/faq" className={styles.mobileNavLink}>
          FAQ
        </Link>
        <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions" target="_blank" rel="noopener noreferrer" className={styles.mobileNavLink}>
          Contact
        </a>

        <a href="https://wa.me/917719902074?text=Hi%2C%20I%27d%20like%20to%20start%20a%20project%20with%20Arc%20Digital%20Solutions" target="_blank" rel="noopener noreferrer" className={styles.mobileCta}>
          Start Project
        </a>
      </div>
    </header>
  );
}
