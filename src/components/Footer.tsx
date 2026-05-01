import Link from "next/link";
import { MapPin, Phone, Mail, Ship } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo}>
            <Ship className={styles.logoIcon} />
            <span>MAS Logistics</span>
          </Link>
          <p className={styles.description}>
            MAS is one of India's leading providers of freight forwarding and supply chain management services. We provide transportation and logistics solutions globally.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#industries">Industry Solutions</Link></li>
            <li><Link href="#track">Track Shipment</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Industry Solutions</h3>
          <ul className={styles.linkList}>
            <li><Link href="#industries">Auto & Automotive</Link></li>
            <li><Link href="#industries">Lifestyle & Fashions</Link></li>
            <li><Link href="#industries">Medical Supplies</Link></li>
            <li><Link href="#industries">Energy & Power generation</Link></li>
            <li><Link href="#industries">Plant & Machinery</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin className={styles.contactIcon} />
              <span>#37/23A, Periyar Nagar, TVT<br />Chennai - 600019, TN, India</span>
            </li>
            <li>
              <Phone className={styles.contactIcon} />
              <span>+91 44 4203 4201<br />+91 44 2573 0541</span>
            </li>
            <li>
              <Mail className={styles.contactIcon} />
              <span>info@maslogistics.co.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MAS Logistics. All Rights Reserved. Designed with premium aesthetics.</p>
        </div>
      </div>
    </footer>
  );
}
