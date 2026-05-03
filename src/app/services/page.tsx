"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck } from "lucide-react";
import Image from "next/image";
import styles from "../page.module.css";

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className={styles.main}>
      <div style={{ paddingTop: "120px", paddingBottom: "60px", textAlign: "center" }} className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-gradient">Services</span>
        </motion.h1>
      </div>

      {/* Services */}
      <section className={`section ${styles.services}`} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.serviceLayout}>
            {[
              {
                title: "Ocean Freight",
                img: "/images/sea.png",
                icon: <Ship size={30} />,
                desc: "LCL consolidation, Dry container, Reefer, Open Top, Flat Rack, Heavy oversized cargo, and dangerous goods. Handling letter of credits and certificates of origin."
              },
              {
                title: "Air Freight",
                img: "/images/sky.png",
                icon: <Plane size={30} />,
                desc: "Strategic alliances with prime carriers for total solutions in sea-air, air-sea, and air-air services. Fast, safe door-to-door delivery globally."
              },
              {
                title: "Inland Transportation",
                img: "/images/land.png",
                icon: <Truck size={30} />,
                desc: "FTL and LTL services with complete infrastructure at all border points. Includes finished goods distribution, Pick & Pack, and Merge in transit."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                className={styles.serviceCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 50 } }
                }}
              >
                <div className={styles.serviceImage}>
                  <Image src={service.img} alt={service.title} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.serviceOverlay}>
                    <div className={styles.serviceIconWrap}>{service.icon}</div>
                  </div>
                </div>
                <div className={styles.serviceInfo}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="/contact" className={styles.learnMore}>Get a Quote <span>→</span></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added & Warehouse Services */}
      <section className={`section ${styles.valueAdded}`}>
        <div className="container">
           <motion.div 
            className={styles.grid2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.infoBlock}>
              <h3>Warehouse Services</h3>
              <p>MAS Logistics offers complete warehousing solutions. Right from ensuring adequate space to cargo pick-up and delivery anywhere in India, ensuring a seamless process for the client. Palletized, slip-sheeted, and scientifically executed.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.infoBlock}>
              <h3>Insurance Coverage</h3>
              <p>We provide the owner of the cargo financial protection against all risks of physical loss or damage from any external cause. Unlimited access to top cargo carriers with International Property and Liability coverage.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.infoBlock}>
              <h3>Packaging & Palletization</h3>
              <p>State-of-the-art packing and custom crating processes. Utilizing prefabricated boxes, wood crates, and internal dunnage for hazardous materials. All crates are fumigated to prevent damages.</p>
            </motion.div>
             <motion.div variants={fadeInUp} className={styles.infoBlock}>
              <h3>Shipment Tracking & Visibility</h3>
              <p>As part of the e-freight Suite™ product, we provide a window to your current shipment tracking. Get ETA, location, vessel numbers, and proof of delivery instantly.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
