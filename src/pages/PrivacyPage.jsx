import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  MdShield,
  MdLock,
  MdVerifiedUser,
  MdCall,
  MdEventSeat,
  MdReceiptLong,
  MdSecurity
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const HERO_BG = '/assets/images/trisule.jpeg';

const privacyPillars = [
  {
    icon: MdLock,
    title: 'Zero Third-Party Data Selling',
    desc: 'We never sell, rent, trade, or monetize your contact details, order history, or dietary preferences to advertisers, data brokers, or marketing networks.',
    tag: 'Absolute Secrecy',
  },
  {
    icon: MdEventSeat,
    title: 'High-Profile Event Discretion',
    desc: 'For royal weddings, private receptions, and VIP banquets, our live station artisans strictly honor non-disclosure. Guest lists and bespoke menu curation remain confidential.',
    tag: 'Celebration NDA',
  },
  {
    icon: MdSecurity,
    title: 'Direct Concierge Communications',
    desc: 'All WhatsApp orders and bespoke gifting consultations happen directly with Master Proprietor Mr. Ramu Kesharwani and the authorized atelier concierge team.',
    tag: 'End-to-End Trust',
  },
  {
    icon: MdReceiptLong,
    title: 'Encrypted Digital Payments',
    desc: 'We use official NPCI-compliant UPI merchant gateways and direct banking. We never store credit cards, bank account pins, or sensitive financial credentials.',
    tag: 'Safe Settlements',
  },
];

const policyClauses = [
  {
    title: '1. What Information We Receive & Why',
    text: 'When you place an order, book a live paan station, or request home delivery in Jabalpur, we collect your name, contact number, delivery destination, and bespoke confectionery preferences. This information is utilized solely to handcraft and deliver your artisanal betel creations fresh and on schedule.',
  },
  {
    title: '2. Custom Gifting & Recipient Confidentiality',
    text: 'When ordering velvet-lined gift hampers for festivals, family milestones, or corporate patrons, recipient addresses and personalized greeting notes are handled with utmost discretion. They are never added to mass telemarketing lists.',
  },
  {
    title: '3. Digital Browsing & Analytics',
    text: 'Our website operates on modern static architecture. We do not employ intrusive tracking pixels or behavioural cross-site tracking cookies. Basic anonymous performance metrics help us ensure rapid loading speeds and bilingual accessibility for Jabalpur residents and worldwide visitors.',
  },
  {
    title: '4. Data Retention & Patron Deletion Requests',
    text: 'You may at any time request the permanent removal of your contact information from our direct order logs by simply messaging our WhatsApp concierge desk. Requests are acknowledged and executed within 24 hours.',
  },
  {
    title: '5. Direct Custodian Accountability',
    text: 'The privacy protocol of Prachi Pan Bhandar is supervised directly by Master Proprietor Mr. Ramu Kesharwani. If you have any questions regarding how your details are protected, reach our direct helpline anytime.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Protocol & Royal Discretion — Prachi Pan Bhandar</title>
        <meta
          name="description"
          content="Review the Privacy Protocol and patron confidentiality commitment of Prachi Pan Bhandar, Jabalpur. 100% confidential orders, event discretion, and zero data selling."
        />
        <meta property="og:title" content="Privacy Protocol — Prachi Pan Bhandar" />
        <link rel="canonical" href="https://prachipanbhandar.com/privacy" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'var(--color-surface, #effdf3)' }}>
        
        {/* ── 1. HERO SECTION ── */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#041a10',
            paddingTop: 'var(--space-3xl)',
            paddingBottom: 'var(--space-3xl)',
          }}
        >
          {/* Background image & atmospheric gradients */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
              src={HERO_BG}
              alt="Atelier Background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.45) contrast(1.2)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(2, 24, 14, 0.94) 0%, rgba(4, 36, 22, 0.85) 50%, rgba(2, 24, 14, 0.98) 100%)',
              }}
            />
          </div>

          <div
            className="container-ppb"
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Pill */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 18px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(233, 193, 120, 0.4)',
                  backdropFilter: 'blur(12px)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <MdShield color="#e9c178" size={16} />
                <span
                  className="text-label-caps"
                  style={{ color: '#ffdea5', letterSpacing: '0.18em', fontWeight: 700, fontSize: '11px' }}
                >
                  SACRED TRUST & PATRON CONFIDENTIALITY
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display, Playfair Display)',
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.15,
                maxWidth: '860px',
              }}
            >
              Royal Discretion & <br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#ffdea5',
                  textShadow: '0 0 25px rgba(255,222,165,0.4)',
                }}
              >
                Patron Privacy
              </span>{' '}
              Protocol.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg"
              style={{
                color: 'rgba(209, 250, 229, 0.9)',
                maxWidth: '680px',
                marginTop: 'var(--space-md)',
                lineHeight: 1.7,
              }}
            >
              At Prachi Pan Bhandar, hospitality is grounded in honour. Whether you visit our tasting boutique or book our live stations for grand celebrations, your privacy is guarded with uncompromising royal integrity.
            </motion.p>
          </div>
        </section>

        {/* ── 2. FOUR PILLARS OF DISCRETION ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb">
            <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                FOUNDATIONAL COMMITMENTS
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                How Your Trust Is Protected
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', marginTop: '6px' }}>
                Four unwavering standards governing every interaction at our atelier and digital concierge desk.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 'var(--space-lg)' }}>
              {privacyPillars.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                    borderRadius: '20px',
                    padding: 'var(--space-xl)',
                    boxShadow: '0 10px 30px -8px rgba(11,93,59,0.08)',
                    border: '1px solid rgba(11,93,59,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        backgroundColor: 'var(--color-surface-container, #e3f1e7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary, #004429)',
                        marginBottom: 'var(--space-md)',
                      }}
                    >
                      <p.icon size={28} />
                    </div>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-tertiary-container, #684c0d)',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {p.tag}
                    </span>
                    <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, marginBottom: '8px' }}>
                      {p.title}
                    </h3>
                    <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. DETAILED POLICY ARTICLES ── */}
        <section style={{ backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb" style={{ maxWidth: '880px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                FORMAL DISCLOSURE
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                Protocol Clauses & Disclosures
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', marginTop: '6px' }}>
                Effective Date: 2025 • Governed under the jurisdiction of Jabalpur, Madhya Pradesh.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {policyClauses.map((clause, idx) => (
                <div
                  key={clause.title}
                  style={{
                    backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                    borderRadius: '16px',
                    padding: 'var(--space-xl)',
                    boxShadow: '0 4px 16px rgba(11,93,59,0.04)',
                    border: '1px solid rgba(11,93,59,0.06)',
                  }}
                >
                  <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, marginBottom: '8px' }}>
                    {clause.title}
                  </h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.7, margin: 0 }}>
                    {clause.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Custodian Sign-off Card */}
            <div
              style={{
                marginTop: 'var(--space-2xl)',
                padding: 'var(--space-2xl)',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #004429 0%, #0b5d3b 100%)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
                boxShadow: '0 16px 36px -8px rgba(0,68,41,0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MdVerifiedUser size={26} color="#ffdea5" />
                </div>
                <div>
                  <span className="text-label-caps" style={{ color: '#ffdea5', letterSpacing: '0.15em' }}>
                    DIRECT GRIEVANCE & CUSTODIAN DESK
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', margin: 0 }}>
                    Mr. Ramu Kesharwani
                  </h4>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.65, fontSize: 'var(--fs-body-md)', margin: 0 }}>
                If you ever wish to inquire about your stored delivery preferences or request data erasure, our direct line is always open. Your peace of mind is our highest benchmark.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: 'var(--space-xs)' }}>
                <a
                  href="https://wa.me/919203530069?text=Namaste%20Ramu%20ji,%20I%20have%20an%20enquiry%20regarding%20the%20Privacy%20Protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ppb-gold"
                  style={{ textDecoration: 'none' }}
                >
                  <FaWhatsapp size={18} /> WhatsApp Concierge Desk
                </a>
                <a
                  href="tel:9203530069"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 'var(--fs-subheading-sm)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <MdCall size={18} /> +91 92035 30069
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
