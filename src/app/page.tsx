"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Ship, Plane, Truck, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
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
              <Link href="/services" className="btn btn-solid">Explore Services</Link>
              <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
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

      {/* Brief About Preview */}
      <section className={`section ${styles.visionSection}`}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Target size={50} color="var(--secondary)" style={{ margin: '0 auto 2rem' }} />
            <h2 className="section-title" style={{ left: '0', transform: 'none' }}>Defining Excellence in Logistics</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We seamlessly visualize quality intellectual capital with superior collaboration. Our vision is to be the leading Asia-based logistics service provider, delivering excellence across all major trade routes.
            </p>
            <Link href="/about" className="btn btn-primary">
              Discover MAS Logistics <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={`section ${styles.services}`}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
          >
            <h2 className="section-title" style={{ margin: 0, left: 0, transform: 'none' }}>Our Premium Services</h2>
            <Link href="/services" className={styles.learnMore}>View All Services <ArrowRight size={18} /></Link>
          </motion.div>

          <div className={styles.serviceLayout} style={{ gap: '4rem' }}>
            {[
              {
                title: "Ocean Freight",
                img: "/images/sea.png",
                icon: <Ship size={30} />,
                desc: "LCL consolidation, Dry container, Reefer, Open Top, Flat Rack, Heavy oversized cargo."
              },
              {
                title: "Air Freight",
                img: "/images/sky.png",
                icon: <Plane size={30} />,
                desc: "Strategic alliances with prime carriers for total solutions in sea-air, air-sea, and air-air services."
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
                <div className={styles.serviceImage} style={{ height: '350px' }}>
                  <Image src={service.img} alt={service.title} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.serviceOverlay}>
                    <div className={styles.serviceIconWrap}>{service.icon}</div>
                  </div>
                </div>
                <div className={styles.serviceInfo}>
                  <h3 style={{ fontSize: '2rem' }}>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link href="/services" className={styles.learnMore}>Learn More <span>→</span></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Preview */}
      <section className={`section`} style={{ background: 'var(--primary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2 }}>
           <Image src="/images/hero.png" alt="Industry Background" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title" style={{ left: 0, transform: 'none', color: '#fff' }}>Industry Specific Solutions</motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 3rem' }}>
              From high-tech electronics to delicate fashion logistics, we provide tailored supply chain solutions for 8 major industries worldwide.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/industry" className="btn btn-solid" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Explore Industry Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
