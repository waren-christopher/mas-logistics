"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "../page.module.css";
import React, { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
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
          Contact <span className="text-gradient">Us</span>
        </motion.h1>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* Contact Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>Global Headquarters</h3>
                
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <MapPin color="var(--secondary)" />
                  <div>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>Address</h4>
                    <p style={{ color: 'var(--text-muted)' }}>123 Logistics Avenue, Freight District<br/>New Mumbai, MH 400001, India</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Phone color="var(--secondary)" />
                  <div>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>Phone</h4>
                    <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Mail color="var(--secondary)" />
                  <div>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-muted)' }}>contact@maslogistics.com</p>
                  </div>
                </div>
              </div>

              <div className="glass" style={{ padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Business Hours</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Saturday: 9:00 AM - 2:00 PM</p>
                <p style={{ color: 'var(--text-muted)' }}>Sunday: Closed (24/7 Tracking Available)</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="glass"
              style={{ padding: '3rem', borderRadius: '12px' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Send us a message</h3>
              
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--secondary)' }}>
                  <Send size={50} style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.5rem' }}>Message Sent!</h4>
                  <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>First Name</label>
                      <input required type="text" style={{ width: '100%', padding: '0.8rem', background: 'rgba(5,5,5,0.5)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Last Name</label>
                      <input required type="text" style={{ width: '100%', padding: '0.8rem', background: 'rgba(5,5,5,0.5)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }} />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email Address</label>
                    <input required type="email" style={{ width: '100%', padding: '0.8rem', background: 'rgba(5,5,5,0.5)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Service of Interest</label>
                    <select style={{ width: '100%', padding: '0.8rem', background: 'rgba(5,5,5,0.5)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }}>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="land">Inland Transportation</option>
                      <option value="warehouse">Warehousing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                    <textarea required rows={5} style={{ width: '100%', padding: '0.8rem', background: 'rgba(5,5,5,0.5)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px', resize: 'none' }}></textarea>
                  </div>

                  <button type="submit" className="btn btn-solid" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1rem' }} disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
