"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Ship, Plane, Truck, Globe, MapPin, Award, CheckCircle2, ShieldCheck, Box, Eye, HeartHandshake, Lightbulb, Scale, Target, Lock } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  const containerRef = useRef(null);

  const heroImages = [
    "/images/hero-ai.png",
    "/images/hero-ai-2.png",
    "/images/hero-ai-3.png",
    "/images/hero-ai-4.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Smooth scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax for Hero
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
    <main className={styles.main} ref={containerRef}>
      {/* Scroll Progress Bar */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div className={styles.heroBackground} style={{ y, opacity }}>
          <div className={styles.kenBurnsWrapper}>
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.15 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  opacity: { duration: 2, ease: "easeInOut" },
                  scale: { duration: 8, ease: "linear" }
                }}
                className={styles.heroImageContainer}
              >
                <Image 
                  src={heroImages[currentImageIndex]} 
                  alt="MAS Logistics Hero" 
                  fill 
                  priority
                  className={styles.heroImage}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={styles.heroOverlay}></div>
        </motion.div>
        
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={styles.heroText}
          >
            <motion.span variants={fadeInUp} className={styles.heroSubtitle}>PREMIUM GLOBAL LOGISTICS</motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Engineering The <br /> <span className="text-gradient">Future Of Freight</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              MAS is India’s leading provider of freight forwarding and supply chain management services. Experience unparalleled efficiency and reliability across the globe.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.heroActions}>
              <a href="#services" className="btn btn-solid">Explore Services</a>
              <a href="#contact" className="btn btn-primary">Get a Quote</a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className={`section ${styles.visionSection}`}>
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

      {/* Services */}
      <section id="services" className={`section ${styles.services}`}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Comprehensive Services
          </motion.h2>

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
                  <a href="#contact" className={styles.learnMore}>Learn More <span>→</span></a>
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
      
      {/* Why Choose Us */}
      <section id="about" className={`section ${styles.whyChooseUs}`}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why Choose MAS Logistics
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

      {/* Industry Solutions */}
      <section id="industries" className={`section ${styles.industries}`}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Industry Solutions
          </motion.h2>

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
