"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Ship } from "lucide-react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Industry Solutions", path: "#industries" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Ship className={styles.logoIcon} />
          <span>MAS Logistics</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <a href="#track" className={`btn btn-primary ${styles.trackBtn}`}>
            Track Shipment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.nav
          className={styles.mobileNav}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#track"
            className="btn btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ width: "fit-content", margin: "1rem auto", display: "block" }}
          >
            Track Shipment
          </a>
        </motion.nav>
      )}
    </motion.header>
  );
}
