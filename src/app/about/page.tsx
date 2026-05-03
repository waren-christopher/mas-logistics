"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Box, Eye, ShieldCheck, HeartHandshake, Scale, Lock, Award, Globe, MapPin } from "lucide-react";
import styles from "../page.module.css";

export default function AboutPage() {
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
          About <span className="text-gradient">MAS Logistics</span>
        </motion.h1>
      </div>

      {/* Vision & Mission */}
      <section id="vision" className={`section ${styles.visionSection}`} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.visionGrid}>
            <motion.div 
              className={styles.visionCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className={styles.visionIcon}><Target size={40} /></div>
              <h2>Our Vision</h2>
              <p>To be the leading Asia based logistics service provider, delivering excellence across all major trade routes.</p>
            </motion.div>
            
            <motion.div 
              className={styles.visionCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const } }
              }}
            >
              <div className={styles.visionIcon}><Lightbulb size={40} /></div>
              <h2>Our Mission</h2>
              <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital with superior collaboration.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`section ${styles.coreValues}`}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>

          <motion.div 
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { icon: <Box />, title: "Value Creations", desc: "We create real value for clients, employees, and shareholders." },
              { icon: <Eye />, title: "Openness", desc: "True openness and transparency throughout our company." },
              { icon: <ShieldCheck />, title: "Integrity", desc: "Built on integrity with clear ethical guidelines strictly enforced." },
              { icon: <HeartHandshake />, title: "Trustworthiness", desc: "Developing trust amongst our clients and employees." },
              { icon: <Scale />, title: "Compliance", desc: "Adhering to environmental policies and business confidentiality." },
              { icon: <Lock />, title: "Commitment", desc: "Committed to the success of our clients and fully dedicated to all projects." },
              { icon: <Award />, title: "Excellence", desc: "Practicing a continuous process of improvement and innovation." }
            ].map((val, i) => (
              <motion.div key={i} variants={fadeInUp} className={styles.valueItem}>
                <div className={styles.valueIcon}>{val.icon}</div>
                <div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whyChooseUs}`}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Choose Us
          </motion.h2>
          
          <motion.div 
            className={styles.grid3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Globe size={40} />,
                title: "GLOBAL PRESENCE",
                desc: "In every MAS Office around the world, we have local people who speak the local language."
              },
              {
                icon: <MapPin size={40} />,
                title: "GOODS TRACKING SUPPORT",
                desc: "Our hands-on services and strategic solutions are extensive and customised to meet customers’ need."
              },
              {
                icon: <Award size={40} />,
                title: "COMMITTED FOR EXCELLENCE",
                desc: "MAS committed to provide excellent quality service to our customers by earning their trust and confidence."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className={`glass ${styles.featureCard}`}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
