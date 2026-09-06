import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdSpa, MdLocalFlorist, MdFitnessCenter, MdArrowForward } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const EXPERIENCE_BG = '/assets/images/luxury-experience.png';
const LEAF_IMG = '/assets/images/fresh-leaves.png';
const ARTISAN_IMG = '/assets/images/real/2pan.jpg';
const ROYAL_IMG = '/assets/images/royal-banarasi.png';

const sensoryMoments = [
  {
    icon: MdSpa,
    title: 'The First Sight',
    desc: 'Glistening fresh Calcutta leaves, dressed in silver vark and edible flowers, arranged on black marble serving platters.',
    color: 'primary',
  },
  {
    icon: MdLocalFlorist,
    title: 'The First Breath',
    desc: 'The perfume of Kashmiri saffron meets wild Damask rose as Mr. Ramu unfolds each leaf with artisanal reverence.',
    color: 'secondary',
  },
  {
    icon: MdFitnessCenter,
    title: 'The First Fold',
    desc: 'Watch centuries of technique in a single fluid motion — the Awadhi triangular fold, sealed with loving precision.',
    color: 'tertiary',
  },
];

const steps = [
  {
    num: '01',
    title: 'The Selection',
    desc: 'Each morning, Mr. Ramu personally selects only the most pristine betel leaves — inspecting for colour, suppleness, and fragrance before a single one passes into the atelier.',
    img: LEAF_IMG,
  },
  {
    num: '02',
    title: 'The Preparation',
    desc: 'Selected leaves are bathed in multiple stages of filtered mountain water. Botanical extracts and Ayurvedic infusions are added in precise measurements — a process perfected over decades.',
    img: ARTISAN_IMG,
  },
  {
    num: '03',
    title: 'The Composition',
    desc: 'Each filling is meticulously layered — slow-macerated Damask gulkand, freshly crushed Mysore cardamom, fragrant fennel — the same order, the same touch, every time.',
    img: ROYAL_IMG,
  },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }) };

export default function ExperiencePage() {
  return (
    <>
      <Helmet>
        <title>The Luxury Experience — Prachi Pan Bhandar</title>
        <meta name="description" content="Discover the sensory luxury experience at Prachi Pan Bhandar. The art of paan crafting, botanical ingredients, and the artisan process by Mr. Ramu Kesharwani." />
        <meta property="og:title" content="The Luxury Paan Experience — Prachi Pan Bhandar" />
        <link rel="canonical" href="https://prachipanbhandar.com/experience" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

        {/* ── CINEMATIC HERO ── */}
        <section style={{ position: 'relative', height: '90vh', minHeight: '560px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
          <img src={EXPERIENCE_BG} alt="Luxury paan experience at Prachi Pan Bhandar" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,20,10,0.95) 0%, rgba(0,20,10,0.5) 50%, rgba(0,20,10,0.1) 100%)' }} />
          <div className="container-ppb" style={{ position: 'relative', zIndex: 1, paddingBottom: 'var(--space-3xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', marginBottom: 'var(--space-md)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-tertiary-fixed)', animation: 'pulseDot 2s infinite' }} />
                <span className="text-label-caps" style={{ color: 'var(--color-tertiary-fixed)' }}>Sensory Indulgence</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, maxWidth: '820px' }}>
              Where Every Sense Becomes a <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--color-tertiary-fixed)' }}>Ritual.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-body-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', lineHeight: 1.7 }}>
              At Prachi Pan Bhandar, the experience begins the moment you step inside — fragrant air, the soft sound of leaf preparation, the warm hospitality of Ramu ji.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Link to="/contact" className="btn-ppb-gold" style={{ alignSelf: 'flex-start' }}>
                Plan Your Visit <MdArrowForward size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── 3 SENSORY MOMENTS ── */}
        <section style={{ background: 'var(--color-surface)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '8px' }}>Three Moments of Revelation</span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>The Sensory Journey</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
              {sensoryMoments.map((m, i) => (
                <motion.div key={m.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  style={{ padding: 'var(--space-xl)', borderRadius: 'var(--radius-2xl)', background: 'var(--color-surface-container-low)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'var(--transition-base)' }}
                >
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `var(--color-${m.color})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <m.icon size={28} color="#fff" />
                  </div>
                  <div>
                    <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>{m.title}</h3>
                    <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <section style={{ background: 'var(--color-surface-container-low)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>The Artisan Process</span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>From Leaf to Legend</h2>
            </div>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)', alignItems: 'center' }}
                className="experience-step-grid"
              >
                {/* Text side */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', order: i % 2 === 0 ? 1 : 2 }} className={`step-text ${i % 2 !== 0 ? 'step-text-right' : ''}`}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <span style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, flexShrink: 0 }}>{step.num}</span>
                    <h3 className="text-headline-md" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                  </div>
                  <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
                {/* Image side */}
                <div style={{ order: i % 2 === 0 ? 2 : 1 }} className="step-img-wrap">
                  <div style={{ borderRadius: 'var(--radius-3xl)', overflow: 'hidden', aspectRatio: '16/9', boxShadow: 'var(--shadow-float)' }} className="img-zoom-wrapper">
                    <img src={step.img} alt={step.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── VIP BOOKING ── */}
        <section style={{ background: 'var(--color-primary)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)', position: 'relative', overflow: 'hidden' }}>
          <div className="glow-orb" style={{ width: '500px', height: '400px', right: '-100px', top: '-100px', background: 'rgba(120,217,169,0.15)' }} />
          <div className="container-ppb" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
            <span className="text-label-caps" style={{ color: 'var(--color-tertiary-fixed)' }}>Private & Corporate</span>
            <h2 className="text-headline-lg" style={{ color: '#fff', fontFamily: 'var(--font-display)', maxWidth: '600px' }}>
              Book a Private Paan Atelier Experience
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-on-primary-container)', maxWidth: '520px', lineHeight: 1.7 }}>
              Host a live artisan station at your wedding, corporate event, or private celebration. Mr. Ramu personally leads each session with the mastery of a true hereditary craft.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', justifyContent: 'center' }} className="experience-cta-actions">
              <a href="https://wa.me/919203530069?text=Namaste%20Ramu%20ji%2C%20I%20would%20like%20to%20book%20a%20Private%20Paan%20Experience" target="_blank" rel="noopener noreferrer" className="btn-ppb-gold">
                <FaWhatsapp size={18} /> Book Private Experience
              </a>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '9999px', background: 'rgba(255,255,255,0.12)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--fs-subheading-sm)', backdropFilter: 'blur(8px)' }}>
                View Contact Details
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        /* Step grid — 2-col at tablet, 1-col on mobile */
        @media (min-width: 768px) {
          .experience-step-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 767px) {
          .step-text { order: 1 !important; }
          .step-img-wrap { order: 2 !important; }
          .step-text-right { order: 1 !important; }
        }

        /* Hero padding on small screens */
        @media (max-width: 480px) {
          .experience-hero-content {
            padding-bottom: var(--space-2xl) !important;
          }
        }

        /* VIP CTA section actions */
        @media (max-width: 540px) {
          .experience-cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .experience-cta-actions a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
