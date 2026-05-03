"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../page.module.css";

export default function IndustryPage() {
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
          Industry <span className="text-gradient">Solutions</span>
        </motion.h1>
      </div>

      {/* Industry Solutions */}
      <section className={`section ${styles.industries}`} style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className={styles.grid4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Auto", desc: "Specializing in the secure transport of automotive parts and finished vehicles globally, ensuring just-in-time delivery for manufacturers.", img: "/images/industry_auto.png" },
              { title: "Lifestyle & Fashions", desc: "Delivering pristine logistics for the fashion industry, maintaining product integrity from warehouse to the retail shelf.", img: "/images/industry_fashion.png" },
              { title: "Medical Supplies", desc: "Temperature-controlled, highly secure logistics for pharmaceuticals and medical devices, strictly adhering to global compliance.", img: "/images/industry_medical.png" },
              { title: "Energy & Power", desc: "Heavy-lift freight solutions tailored for wind turbines, solar panels, and large-scale power generation equipment.", img: "/images/industry_energy.png" },
              { title: "Hightech", desc: "Ultra-secure and shock-absorbent transportation for sensitive electronics, servers, and high-value technological components.", img: "/images/industry_hightech.png" },
              { title: "FMCG", desc: "Rapid, high-volume distribution networks designed to keep fast-moving consumer goods flowing efficiently to markets worldwide.", img: "/images/industry_fmcg.png" },
              { title: "Retail", desc: "End-to-end supply chain visibility and dynamic routing to ensure retail shelves are constantly stocked with the latest merchandise.", img: "/images/industry_retail.png" },
              { title: "Plant & Machinery", desc: "Turnkey project logistics for massive industrial relocations and heavy machinery transport, handled by seasoned experts.", img: "/images/industry_machinery.png" }
            ].map((industry, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }} 
                className={styles.industryCard}
              >
                <div className={styles.industryImage}>
                  <Image src={industry.img} alt={industry.title} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.industryImageOverlay}></div>
                </div>
                <div className={styles.industryInner}>
                  <span>0{i+1}</span>
                  <h4>{industry.title}</h4>
                  <p>{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
