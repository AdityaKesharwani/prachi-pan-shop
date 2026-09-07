import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MdLocationOn, MdSchedule, MdCall, MdPhoneIphone, MdWhatsapp, MdContentCopy, MdCheck, MdDirections, MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Prachi+Pan+Bhandar/@23.1923896,79.91418,21z/data=!4m9!1m2!2m1!1sDeendayal+Chowk+Jabalpur!3m5!1s0x3981b1d7812b8699:0x3834b74af9e4f278!8m2!3d23.1923894!4d79.9144777!16s%2Fg%2F11fk3_2sh2?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D';

const contactCards = [
  {
    icon: MdLocationOn,
    title: 'Flagship Atelier Address',
    lines: ['Near Deendayal Chowk,', 'Behind Indian Coffee House,', 'Jabalpur, Madhya Pradesh — 482001'],
    action: { label: 'Open in Maps', url: GOOGLE_MAPS_URL },
    color: 'primary',
  },
  {
    icon: MdSchedule,
    title: 'Tasting Premium Paan House Hours',
    lines: ['Monday – Sunday (Open 365 Days)', '09:00 AM – 10:45 PM IST', 'Walk-ins Welcome • Last Order 10:30 PM'],
    action: null,
    color: 'secondary',
  },
  {
    icon: MdCall,
    title: 'Direct Lines',
    lines: ['+91 92035 30069 (Mr. Ramu)', '+91 77460 34037 (Atelier Desk)'],
    action: { label: 'Call Now', url: 'tel:9203530069' },
    color: 'tertiary',
  },
];

const quickMsgs = [
  'Namaste Ramu ji, I would like to place an order',
  'I want to enquire about custom gift boxes',
  'Interested in Live Paan Station for wedding',
  'What are the paan varieties available today?',
];

export default function ContactPage() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact & Visit — Prachi Pan Bhandar, Jabalpur</title>
        <meta name="description" content="Visit Prachi Pan Bhandar near Deendayal Chowk, Jabalpur. Open daily 09:00 AM – 10:45 PM IST. Call +91 92035 30069 or WhatsApp for orders, gift boxes, and live paan catering." />
        <meta property="og:title" content="Contact Prachi Pan Bhandar — Visit Our Jabalpur Premium Paan House" />
        <link rel="canonical" href="https://prachipanbhandar.com/contact" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-surface-container-low)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-2xl)', textAlign: 'center' }}>
          <div className="container-ppb" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 'var(--space-md)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)', animation: 'pulseDot 2s infinite' }} />
                <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>Concierge Desk</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-display-hero" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)', lineHeight: 1.08 }}>
              Find Us in <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--color-tertiary)' }}>Jabalpur.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '560px', lineHeight: 1.7 }}>
              We're open 365 days, 09:00 AM to 10:45 PM IST. Walk in for the full atelier experience, or reach us via WhatsApp, call, or message.
            </motion.p>
          </div>
        </section>

        {/* ── CONTACT CARDS ── */}
        <section style={{ background: 'var(--color-surface)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
          <div className="container-ppb">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    padding: 'var(--space-xl)',
                    borderRadius: 'var(--radius-2xl)',
                    background: 'var(--color-surface-container-lowest)',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex', flexDirection: 'column', gap: 'var(--space-md)',
                    transition: 'var(--transition-cubic)',
                  }}
                  className="contact-info-card"
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `var(--color-${card.color})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <card.icon size={28} color="#fff" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary)' }}>{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>{line}</p>
                    ))}
                  </div>
                  {card.action && (
                    <a href={card.action.url} target={card.action.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-label-ui" style={{ color: `var(--color-${card.color})`, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                      {card.action.label} →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAP & WHATSAPP ── */}
        <section style={{ background: 'var(--color-surface-container-low)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)' }} className="contact-main-grid">

              {/* ── Map Embed ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <h2 className="text-headline-md" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>The Heritage Location</h2>
                <div style={{ borderRadius: 'var(--radius-3xl)', overflow: 'hidden', height: '360px', position: 'relative', boxShadow: 'var(--shadow-float)' }}>
                  <iframe
                    title="Prachi Pan Bhandar Location Map"
                    src="https://maps.google.com/maps?q=23.1923894,79.9144777+(Prachi+Pan+Bhandar)&z=18&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 2 }}>
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-ppb-primary" style={{ padding: '8px 16px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <MdDirections size={18} /> Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Address copy card */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-md) var(--space-lg)', borderRadius: '14px', background: 'var(--color-surface-container-lowest)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <MdLocationOn size={22} color="var(--color-primary)" />
                    <p className="text-body-sm" style={{ color: 'var(--color-on-surface)' }}>Near Deendayal Chowk, Behind Indian Coffee House, Jabalpur MP 482001</p>
                  </div>
                  {/* <button
                    onClick={() => copyToClipboard('Near Deendayal Chowk, Behind Indian Coffee House, Jabalpur, Madhya Pradesh 482001', 'addr')}
                    style={{ padding: '8px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: copied === 'addr' ? 'var(--color-primary)' : 'var(--color-surface-container)', color: copied === 'addr' ? '#fff' : 'var(--color-primary)', transition: 'all 0.25s ease', flexShrink: 0 }}
                    title="Copy address"
                  >
                    {copied === 'addr' ? <MdCheck size={18} /> : <MdContentCopy size={18} />}
                  </button> */}
                </div>
              </div>

              {/* ── WhatsApp Chat Launcher ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <h2 className="text-headline-md" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>WhatsApp Concierge</h2>

                {/* Chat preview */}
                <div style={{ borderRadius: 'var(--radius-2xl)', background: '#f0f2f5', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
                  {/* Header */}
                  <div style={{ background: 'var(--color-primary-container)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>RK</div>
                    <div>
                      <p className="text-subheading-sm" style={{ color: '#fff' }}>Prachi Pan Bhandar</p>
                      <p className="text-body-sm" style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                        Online — Open for orders
                      </p>
                    </div>
                    <FaWhatsapp size={24} color="#fff" style={{ marginLeft: 'auto' }} />
                  </div>
                  {/* Messages */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ padding: '10px 14px', borderRadius: '12px 12px 12px 4px', background: '#fff', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>
                      <p className="text-body-sm" style={{ color: '#111' }}>Namaste! 🙏 Welcome to Prachi Pan Bhandar.</p>
                      <p className="text-body-sm" style={{ color: '#555', marginTop: '4px' }}>I'm Ramu Kesharwani. How may I assist you today?</p>
                    </div>
                    <p className="text-label-caps" style={{ color: 'rgba(0,0,0,0.4)', textAlign: 'center' }}>Choose a quick message:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {quickMsgs.map((msg) => (
                        <a key={msg} href={`https://wa.me/919203530069?text=${encodeURIComponent(msg)}`} target="_blank" rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '12px', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(11,93,59,0.1)', textDecoration: 'none', color: 'var(--color-on-surface)', fontSize: 'var(--fs-body-sm)', transition: 'all 0.2s ease' }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = '#d9fdd3'; e.currentTarget.style.borderColor = '#25D366'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.borderColor = 'rgba(11,93,59,0.1)'; }}
                        >
                          <span>{msg}</span>
                          <FaWhatsapp size={16} color="#25D366" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct action buttons */}
                <a href="https://wa.me/919203530069" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px', borderRadius: '14px', background: '#25D366', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 8px 28px rgba(37,211,102,0.4)', transition: 'all 0.25s ease', animation: 'whatsappPulse 2.5s infinite' }}>
                  <FaWhatsapp size={24} />
                  Start WhatsApp Conversation
                </a>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { icon: MdCall, label: 'Call: 92035 30069', url: 'tel:9203530069', color: 'var(--color-primary)' },
                    { icon: MdPhoneIphone, label: 'Call: 77460 34037', url: 'tel:7746034037', color: 'var(--color-tertiary)' },
                  ].map((btn) => (
                    <a key={btn.url} href={btn.url} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '12px', background: 'var(--color-surface-container-lowest)', color: btn.color, textDecoration: 'none', fontWeight: 600, fontSize: 'var(--fs-label-ui)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'all 0.2s ease', border: `1px solid ${btn.color}40` }}>
                      <btn.icon size={18} />
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Delivery Info ── */}
        <section style={{ background: 'var(--color-primary)', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
          <div className="container-ppb contact-delivery-strip" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-xl)' }}>
            <div>
              <h2 className="text-headline-sm" style={{ color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '6px' }}>City-Wide Home Delivery Available</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-primary-container)' }}>Fresh paans delivered in hygienic vacuum-sealed trays within Jabalpur city — in under 45 minutes.</p>
            </div>
            <a href="https://wa.me/919203530069?text=Namaste%2C%20I%20would%20like%20to%20place%20a%20home%20delivery%20order" target="_blank" rel="noopener noreferrer" className="btn-ppb-gold">
              <FaWhatsapp size={18} /> Order Home Delivery
            </a>
          </div>
        </section>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-main-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .contact-info-card:hover { box-shadow: var(--shadow-card-hover); transform: translateY(-4px); }

        /* Quick message buttons — wrap/shrink on mobile */
        @media (max-width: 480px) {
          .contact-quick-messages {
            flex-direction: column !important;
          }
          .contact-quick-messages button {
            width: 100% !important;
            font-size: 11px !important;
            padding: 10px 14px !important;
            white-space: normal !important;
            text-align: left !important;
          }
        }

        /* Delivery CTA strip */
        @media (max-width: 640px) {
          .contact-delivery-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </>
  );
}
