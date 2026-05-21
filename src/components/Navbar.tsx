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
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-primary-navy"
          >
            {/* Custom stylized 'A' matching Arc Digital Solutions branding */}
            <path
              d="M15 85 L45 15 C47 11 53 11 55 15 L85 85"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33 60 C40 45, 60 45, 67 60"
              stroke="var(--accent-blue)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <circle cx="50" cy="35" r="8" fill="var(--accent-yellow)" />
          </svg>
          <div className={styles.logoText}>
            <span>Arc Digital</span>
            <span className={styles.logoSub}>Solutions</span>
          </div>
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
          <Link href="/process" className={styles.navLink}>
            Process
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/faq" className={styles.navLink}>
            FAQ
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* CTA Start Project */}
        <Link href="/contact" className={styles.ctaBtn}>
          Start Project
        </Link>

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
        <Link href="/process" className={styles.mobileNavLink}>
          Process
        </Link>
        <Link href="/about" className={styles.mobileNavLink}>
          About
        </Link>
        <Link href="/faq" className={styles.mobileNavLink}>
          FAQ
        </Link>
        <Link href="/contact" className={styles.mobileNavLink}>
          Contact
        </Link>

        <Link href="/contact" className={styles.mobileCta}>
          Start Project
        </Link>
      </div>
    </header>
  );
}
