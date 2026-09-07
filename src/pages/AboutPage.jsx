import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MdVerified,
  MdEco,
  MdWorkspacePremium,
  MdStar,
  MdArrowForward,
  MdLocationOn,
  MdCall,
  MdAccessTime,
  MdMap,
  MdGrade,
  MdLocalFlorist,
  MdHistoryEdu,
  MdHandshake,
  MdNearMe,
  MdStorefront,
  MdSupportAgent,
  MdShield,
  MdAutoAwesome
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const HERO_BG = '/assets/images/trisule.jpeg';
const SHOP_FRONT_IMG = '/assets/images/real/shop-front.jpg';
const SHOP_INSIDE_IMG = '/assets/images/real/shop-inside.jpg';
const PAAN_PLATTER_IMG = '/assets/images/real/paan-platter-real.jpg';
const INGREDIENTS_IMG = '/assets/images/ingredients.png';

// SVG Betel Leaf particle for floating animation
const PaanLeafSvg = ({ color = '#10b981', size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.35))' }}>
    <path d="M20 2 C28 9, 38 18, 38 29 C38 38, 29 44, 20 44 C11 44, 2 38, 2 29 C2 18, 12 9, 20 2 Z" fill={color} fillOpacity="0.88" stroke="#a7f3d0" strokeWidth="0.8" />
    <path d="M20 3 C20 16, 20 32, 20 42" stroke="#d1fae5" strokeWidth="1.1" strokeLinecap="round" />
    <path d="M20 14 Q28 17, 33 22" stroke="#d1fae5" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.7" />
    <path d="M20 14 Q12 17, 7 22" stroke="#d1fae5" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.7" />
    <path d="M20 24 Q29 27, 34 32" stroke="#d1fae5" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.7" />
    <path d="M20 24 Q11 27, 6 32" stroke="#d1fae5" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.7" />
    <path d="M20 33 Q26 36, 30 40" stroke="#d1fae5" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.5" />
    <path d="M20 33 Q14 36, 10 40" stroke="#d1fae5" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>
);

const leafColors = ['#10b981', '#059669', '#34d399', '#047857', '#6ee7b7', '#2d6a4f'];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Our Story & Heritage — Prachi Pan Bhandar</title>
        <meta name="description" content="Discover the royal Banarasi paan heritage and 100% tobacco-free botanical purity at Prachi Pan Bhandar, curated under Mr. Ramu Kesharwani in Jabalpur." />
        <meta property="og:title" content="Our Story & Heritage — Prachi Pan Bhandar" />
        <link rel="canonical" href="https://prachipanbhandar.com/about" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'var(--color-surface, #effdf3)' }}>

        {/* ── 1. HERO SECTION (Lord Shiva & Trishul Background + Floating Paan Leaves) ── */}
        <section
          className="about-hero-section"
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            minHeight: '773px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#041a10',
          }}
        >
          {/* Background Image Layer */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
              src={HERO_BG}
              alt="Bholenath Trishul background"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.68) contrast(1.12)',
              }}
            />
            {/* Multi-layered cinematic gradient overlays for crystal clear typography */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(2, 24, 14, 0.92) 0%, rgba(4, 36, 22, 0.72) 50%, rgba(2, 24, 14, 0.95) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 20%, #02180e 92%)',
              }}
            />
          </div>

          {/* 🍃 Dynamic Floating Paan Leaf Particles 🍃 */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}>
            {Array.from({ length: 24 }).map((_, i) => {
              const size = 16 + (i % 5) * 4;
              const left = (i * 4.2) + (i % 3) * 1.5;
              const color = leafColors[i % leafColors.length];
              const duration = 9 + (i % 5) * 2;
              const delay = (i * 0.4) % 6;

              return (
                <motion.div
                  key={i}
                  initial={{ y: '110vh', x: 0, opacity: 0, rotate: 0, scale: 0.8 }}
                  animate={{
                    y: ['110vh', '-10vh'],
                    x: [0, i % 2 === 0 ? 35 : -35, 0],
                    opacity: [0, 0.85, 0.85, 0],
                    rotate: [0, i % 2 === 0 ? 280 : -280],
                    scale: [0.8, 1.1, 0.9],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay,
                  }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: `${left}%`,
                  }}
                >
                  <PaanLeafSvg color={color} size={size} />
                </motion.div>
              );
            })}
          </div>

          {/* Central Hero Content */}
          <div
            className="container-ppb"
            style={{
              position: 'relative',
              zIndex: 20,
              width: '100%',
              paddingTop: 'var(--space-3xl)',
              paddingBottom: 'var(--space-3xl)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Eyebrow Pill */}
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
                  boxShadow: '0 0 20px rgba(233, 193, 120, 0.15)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#e9c178',
                    boxShadow: '0 0 10px #e9c178',
                    animation: 'pulseDot 2s infinite',
                  }}
                />
                <span
                  className="text-label-caps"
                  style={{ color: '#ffdea5', letterSpacing: '0.2em', fontWeight: 700, fontSize: '11px' }}
                >
                  JAI BHOLENATH • ROYAL HERITAGE
                </span>
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display, Playfair Display)',
                fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                maxWidth: '900px',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              }}
            >
              Where Sacred Tradition <br />
              Meets{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#ffdea5',
                  textShadow: '0 0 25px rgba(255,222,165,0.4)',
                }}
              >
                Royal Atelier
              </span>{' '}
              Craft.
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
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              }}
            >
              In the divine grace of Lord Shiva and royal Banarasi tradition, Mr. Ramu Kesharwani established Prachi Pan Bhandar in Jabalpur — creating a sanctuary of 100% tobacco-free botanical purity.
            </motion.p>

            {/* Badges Mosaic */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                paddingTop: 'var(--space-md)',
              }}
            >
              <div style={mosaicBadgeStyle}>
                <MdVerified color="#e9c178" size={15} />
                <span>100% Tobacco Free</span>
              </div>
              <div style={mosaicBadgeStyle}>
                <MdLocationOn color="#e9c178" size={15} />
                <span>Est. Jabalpur</span>
              </div>
              <div style={mosaicBadgeStyle}>
                <MdWorkspacePremium color="#e9c178" size={15} />
                <span>25+ Years Devotion</span>
              </div>
            </motion.div>

            {/* Feature Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                width: '100%',
                maxWidth: '860px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: 'var(--space-md)',
                marginTop: 'var(--space-xl)',
              }}
            >
              {/* Card 1: Authentic Shop Front */}
              <div style={heroHighlightCardStyle}>
                <img
                  src={SHOP_FRONT_IMG}
                  alt="Authentic Shop Front"
                  style={{ width: '76px', height: '76px', borderRadius: '14px', objectFit: 'cover' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#e9c178', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    DEENDAYAL CHOWK
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, margin: '2px 0 0' }}>
                    Authentic Shop Front
                  </h3>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', margin: '2px 0 0' }}>
                    Jabalpur's premier paan landmark
                  </p>
                </div>
              </div>

              {/* Card 2: Air-Conditioned Premium Paan House */}
              <div style={heroHighlightCardStyle}>
                <img
                  src={SHOP_INSIDE_IMG}
                  alt="Air-Conditioned Premium Paan House"
                  style={{ width: '76px', height: '76px', borderRadius: '14px', objectFit: 'cover' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#e9c178', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    HYGIENIC ATELIER
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, margin: '2px 0 0' }}>
                    Air-Conditioned Premium Paan House
                  </h3>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', margin: '2px 0 0' }}>
                    Pure botanical craftsmanship
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. STORY & PHILOSOPHY SECTION ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="story-grid-layout">
              {/* Left Image Showcase */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 36px -8px rgba(11,93,59,0.15)',
                    aspectRatio: '4/5',
                    maxHeight: '520px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={PAAN_PLATTER_IMG}
                    alt="Royal artisanal paan presentation with gold vark and Damask rose petals"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(2, 24, 14, 0.75) 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span className="text-label-caps" style={{ color: 'var(--color-primary, #004429)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Pure Edible Gold & Silver Leaf
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Editorial Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'var(--color-surface-container, #e3f1e7)', width: 'fit-content' }}>
                  <MdVerified color="var(--color-primary, #004429)" size={16} />
                  <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    THE PHILOSOPHY
                  </span>
                </div>

                <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display, Playfair Display)', lineHeight: 1.2 }}>
                  A Local Name With A Personal Touch.
                </h2>

                <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.7 }}>
                  Prachi Pan Bhandar is built around the timeless culture of paan, meticulous attention to preparation, and an authentically welcoming local experience in Jabalpur. We elevate a centuries-old cultural tradition into an exquisite modern culinary indulgence—free from adulterants, tobacco, or artificial essences, preserving the true medicinal and sensory majesty of the betel leaf.
                </p>

                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.7 }}>
                  Each leaf is hand-bathed in filtered mountain spring waters, cured in moist mulmul fabric, and dressed with hand-rolled natural gulkand prepared under open sun from wild Indian Damask roses. Our secret spice formulations respect Ayurvedic digestive balance while indulging the most discerning palate.
                </p>

                {/* Master Artisan Citation */}
                <div
                  style={{
                    padding: 'var(--space-lg)',
                    borderRadius: '16px',
                    backgroundColor: 'var(--color-surface-container-low, #e9f7ed)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-md)',
                    marginTop: 'var(--space-xs)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-container, #0b5d3b)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MdWorkspacePremium size={26} />
                  </div>
                  <div>
                    <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      Confectionery Leadership
                    </span>
                    <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, margin: '2px 0' }}>
                      Master Proprietor: Mr. Ramu Kesharwani
                    </h3>
                    <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant, #404942)', margin: 0 }}>
                      Custody of over two decades of Awadhi and Banarasi gastronomic craft in Central India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. OWNER SECTION (Mr. Ramu Kesharwani Monogram Profile) ── */}
        <section style={{ backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div
              style={{
                borderRadius: '24px',
                backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                padding: 'var(--space-2xl)',
                boxShadow: '0 12px 36px -6px rgba(11,93,59,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)', alignItems: 'center' }} className="owner-grid-layout">
                {/* Monogram Emblem */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      position: 'relative',
                      width: '260px',
                      height: '260px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #004429 0%, #0b5d3b 50%, #27332d 100%)',
                      padding: '12px',
                      boxShadow: '0 16px 40px rgba(0,68,41,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Golden halo ornament */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '8px',
                        borderRadius: '50%',
                        border: '1px dashed rgba(233,193,120,0.5)',
                        pointerEvents: 'none',
                      }}
                    />
                    <div style={{ textAlign: 'center', color: '#ffffff', zIndex: 10 }}>
                      <MdEco color="#ffdea5" size={32} />
                      <div style={{ fontFamily: 'var(--font-display, Playfair Display)', fontSize: '46px', fontWeight: 700, lineHeight: 1, color: '#ffffff', letterSpacing: '-0.02em', margin: '4px 0' }}>
                        RK
                      </div>
                      <span className="text-label-caps" style={{ color: '#ffdea5', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '10px', display: 'block' }}>
                        RAMU KESHARWANI
                      </span>
                      <span style={{ fontSize: '11px', color: '#8dd6ab', marginTop: '2px', display: 'block' }}>
                        Master Confectioner
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio & Quotation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  <div>
                    <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      THE CUSTODIAN OF CRAFT
                    </span>
                    <h3 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', margin: '4px 0 2px' }}>
                      Mr. Ramu Kesharwani
                    </h3>
                    <p className="text-subheading-sm" style={{ color: 'var(--color-secondary, #006c48)', margin: 0 }}>
                      Founder & Master Proprietor, Prachi Pan Bhandar
                    </p>
                  </div>

                  {/* Quote Box */}
                  <blockquote
                    style={{
                      padding: 'var(--space-lg)',
                      borderRadius: '16px',
                      backgroundColor: 'var(--color-surface-container-high, #ddece2)',
                      fontStyle: 'italic',
                      fontFamily: 'var(--font-display, Playfair Display)',
                      fontSize: '1.15rem',
                      lineHeight: 1.5,
                      color: 'var(--color-on-surface, #121e18)',
                      margin: 0,
                      position: 'relative',
                    }}
                  >
                    “Every fold is an expression of reverence. Paan is not merely an after-meal palate cleanser—it is a sacred ritual of hospitality that connects people, generations, and memories.”
                  </blockquote>

                  {/* Milestones Pills */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '10px', paddingTop: '4px' }}>
                    <div style={ownerPillStyle}>
                      <MdWorkspacePremium color="var(--color-primary, #004429)" size={18} />
                      <span>25+ Years Devotion</span>
                    </div>
                    <div style={ownerPillStyle}>
                      <MdShield color="var(--color-primary, #004429)" size={18} />
                      <span>100% Chemical-Free</span>
                    </div>
                    <div style={ownerPillStyle}>
                      <MdVerified color="var(--color-primary, #004429)" size={18} />
                      <span>Pure Edible Varak</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. BRAND VALUES SECTION (4 CORNERSTONES) ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-3xl)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                OUR CORNERSTONES
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)' }}>
                Artisanal Values We Hold Sacred
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)' }}>
                Each betel creation leaving our marble counter is an ode to ancient culinary discipline, uncompromising pure ingredients, and heartfelt care.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
              {/* Card 1: Quality */}
              <div style={valueCardStyle}>
                <div>
                  <div style={valueIconBoxStyle('#a8f3c6', '#004429')}>
                    <MdGrade size={24} />
                  </div>
                  <h3 className="text-headline-sm" style={{ color: 'var(--color-primary, #004429)', marginBottom: '8px' }}>
                    Quality
                  </h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                    Single-origin Calcutta and Magahi betel leaves, hand-sorted at dawn and cleansed in multi-filtered waters.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary, #004429)', fontWeight: 600, fontSize: '14px', marginTop: '16px' }}>
                  <span>Hand-Selected Leaf</span>
                  <MdArrowForward size={16} />
                </div>
              </div>

              {/* Card 2: Freshness */}
              <div style={valueCardStyle}>
                <div>
                  <div style={valueIconBoxStyle('#91f3c1', '#006c48')}>
                    <MdLocalFlorist size={24} />
                  </div>
                  <h3 className="text-headline-sm" style={{ color: 'var(--color-primary, #004429)', marginBottom: '8px' }}>
                    Freshness
                  </h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                    Freshly assembled upon order. Rose petals slow-macerated under natural sunlight in porcelain jars.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-secondary, #006c48)', fontWeight: 600, fontSize: '14px', marginTop: '16px' }}>
                  <span>Sun-Cured Gulkand</span>
                  <MdArrowForward size={16} />
                </div>
              </div>

              {/* Card 3: Tradition */}
              <div style={valueCardStyle}>
                <div>
                  <div style={valueIconBoxStyle('#ffdea5', '#684c0d')}>
                    <MdHistoryEdu size={24} />
                  </div>
                  <h3 className="text-headline-sm" style={{ color: 'var(--color-primary, #004429)', marginBottom: '8px' }}>
                    Tradition
                  </h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                    Authentic Banarasi recipes, Mysore green cardamom, and fragrant royal spices preserved through generations.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-tertiary-container, #684c0d)', fontWeight: 600, fontSize: '14px', marginTop: '16px' }}>
                  <span>Banarasi Heritage</span>
                  <MdArrowForward size={16} />
                </div>
              </div>

              {/* Card 4: Hospitality */}
              <div style={valueCardStyle}>
                <div>
                  <div style={valueIconBoxStyle('#8dd6ab', '#002111')}>
                    <MdHandshake size={24} />
                  </div>
                  <h3 className="text-headline-sm" style={{ color: 'var(--color-primary, #004429)', marginBottom: '8px' }}>
                    Hospitality
                  </h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                    Unwavering warmth and courteous personal service rooted in the timeless Indian ethos of Atithi Devo Bhava.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary, #004429)', fontWeight: 600, fontSize: '14px', marginTop: '16px' }}>
                  <span>Atithi Devo Bhava</span>
                  <MdArrowForward size={16} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. CONVERGENCE SECTION (OLD SOUL. NEW EXPERIENCE.) ── */}
        <section style={{ backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-3xl)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                CONVERGENCE
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)' }}>
                Old Soul. New Experience.
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)' }}>
                How we bridge ancestral Awadhi culinary alchemy with 21st-century luxury dining standards.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="convergence-grid-layout">
              {/* Left: The Ancestral Soul */}
              <div style={convergenceCardStyle}>
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={PAAN_PLATTER_IMG}
                    alt="Ancestral betel recipes on marble platter"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'rgba(239,253,243,0.92)' }}>
                    <span className="text-label-caps" style={{ color: 'var(--color-primary, #004429)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      THE ANCESTRAL SOUL
                    </span>
                  </div>
                </div>
                <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h3 className="text-headline-md" style={{ color: 'var(--color-primary, #004429)', marginBottom: '8px' }}>
                      Classical Betel Alchemy
                    </h3>
                    <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                      Recreating the Awadhi nawabi courts where handmade brass pestles, wild damask gulkand, natural khus distillates, and intricate triangular leaf-folding artistry reigned supreme. Every recipe is a preservation of centuries-old oral culinary secrets.
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px' }}>
                    <span style={convergencePillStyle}>Handmade Brass Pestles</span>
                    <span style={convergencePillStyle}>Sun-Macerated Gulkand</span>
                    <span style={convergencePillStyle}>Nawabi Folding</span>
                  </div>
                </div>
              </div>

              {/* Right: The Contemporary Expression */}
              <div style={convergenceCardStyle}>
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={SHOP_INSIDE_IMG}
                    alt="High end Premium Paan House vitrine presentation"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'var(--color-primary-container, #0b5d3b)', color: '#ffffff' }}>
                    <span className="text-label-caps" style={{ color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      THE CONTEMPORARY EXPRESSION
                    </span>
                  </div>
                </div>
                <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h3 className="text-headline-md" style={{ color: 'var(--color-primary, #004429)', marginBottom: '8px' }}>
                      Atelier Gastronomy
                    </h3>
                    <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                      Redefined for modern lifestyles: velvet jewelry-box gifting hampers, ISO-grade hygienic preparation inside climate-controlled vitrines, artisanal single-origin Belgian dark chocolate infusions, and cold-chain freshness preservation.
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px' }}>
                    <span style={convergencePillStyleGold}>Velvet Box Packaging</span>
                    <span style={convergencePillStyleGold}>Hygienic Clean Vitrine</span>
                    <span style={convergencePillStyleGold}>Chocolate Fusions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. LOCATION & CONTACT STORY SECTION ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="location-grid-layout">
              {/* Left Location Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'var(--color-surface-container, #e3f1e7)', width: 'fit-content' }}>
                  <MdNearMe color="var(--color-primary, #004429)" size={16} />
                  <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    OUR HOME IN JABALPUR
                  </span>
                </div>

                <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)' }}>
                  Near Deendayal Chowk, Behind Indian Coffee House
                </h2>

                <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.7 }}>
                  Conveniently situated in the bustling heart of Jabalpur, our warm, brass-trimmed boutique is designed as a calm, contemplative oasis where guests gather after meals to savor delicate craftsmanship.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
                  <div style={locationBoxStyle}>
                    <MdStorefront color="var(--color-primary, #004429)" size={24} />
                    <div>
                      <span className="text-subheading-sm" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, display: 'block' }}>
                        Boutique Visiting Hours
                      </span>
                      <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)' }}>
                        Open Everyday: 09:00 AM – 10:45 PM (365 Days a Year)
                      </span>
                    </div>
                  </div>

                  <div style={locationBoxStyle}>
                    <MdSupportAgent color="var(--color-primary, #004429)" size={24} />
                    <div>
                      <span className="text-subheading-sm" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, display: 'block' }}>
                        Direct Atelier Hotlines
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '4px' }}>
                        <a href="tel:9203530069" style={{ color: 'var(--color-secondary, #006c48)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                          <MdCall size={16} /> +91 92035 30069
                        </a>
                        <a href="tel:7746034037" style={{ color: 'var(--color-secondary, #006c48)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                          <MdCall size={16} /> +91 77460 34037
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
                  <a
                    href="https://maps.google.com/?q=Deendayal+Chowk+Behind+Indian+Coffee+House+Jabalpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ppb-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <MdMap size={18} /> Get Google Directions
                  </a>
                  <a
                    href="https://wa.me/919203530069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ppb-outline"
                    style={{ textDecoration: 'none' }}
                  >
                    <FaWhatsapp size={18} /> WhatsApp Concierge
                  </a>
                </div>
              </div>

              {/* Right Location Visual */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', height: '360px', position: 'relative', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
                <img
                  src={SHOP_FRONT_IMG}
                  alt="Prachi Pan Bhandar Shop Front Deendayal Chowk Jabalpur"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,68,41,0.85) 100%)' }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  <MdLocationOn color="var(--color-primary, #004429)" size={20} />
                  <span className="text-subheading-sm" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700 }}>
                    Jabalpur Atelier Location
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CALL TO ACTION SECTION ── */}
        <section
          style={{
            backgroundColor: 'var(--color-primary, #004429)',
            color: '#ffffff',
            paddingTop: 'var(--space-4xl)',
            paddingBottom: 'var(--space-4xl)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="container-ppb"
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(233,193,120,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <MdStar color="#ffdea5" size={28} />
            </div>

            <span className="text-label-caps" style={{ color: '#ffdea5', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>
              AN INVITATION TO SPLENDOR
            </span>

            <h2 className="text-headline-lg" style={{ color: '#ffffff', fontFamily: 'var(--font-display)', maxWidth: '680px', marginBottom: '16px' }}>
              Come For The Paan. <br />
              Stay For The Experience.
            </h2>

            <p className="text-body-lg" style={{ color: 'rgba(209, 250, 229, 0.9)', maxWidth: '580px', marginBottom: 'var(--space-xl)', lineHeight: 1.7 }}>
              Visit our Premium Paan House behind Indian Coffee House or connect directly with Mr. Ramu Kesharwani for bespoke wedding gifting hampers and VIP hospitality counters.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', itemsCenter: 'center', justifyContent: 'center', gap: '14px' }}>
              <Link to="/menu" className="btn-ppb-gold" style={{ textDecoration: 'none' }}>
                Explore Royal Menu
              </Link>
              <Link to="/contact" className="btn-ppb-outline" style={{ textDecoration: 'none', color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}>
                Contact Us
              </Link>
              <a
                href="https://wa.me/919203530069"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <FaWhatsapp size={18} /> WhatsApp Mr. Ramu
              </a>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        @media (min-width: 900px) {
          .story-grid-layout { grid-template-columns: 1fr 1fr !important; }
          .owner-grid-layout { grid-template-columns: 280px 1fr !important; }
          .convergence-grid-layout { grid-template-columns: 1fr 1fr !important; }
          .location-grid-layout { grid-template-columns: 1fr 1fr !important; }
        }

        /* Hero section height — reduced on mobile */
        @media (max-width: 767px) {
          .about-hero-section {
            min-height: 600px !important;
          }
        }
        @media (max-width: 480px) {
          .about-hero-section {
            min-height: 520px !important;
          }
        }

        /* Floating highlight cards row — wrap on mobile */
        @media (max-width: 640px) {
          .about-hero-highlights {
            flex-direction: column !important;
            gap: var(--space-md) !important;
          }
        }

        /* Value cards grid */
        @media (max-width: 480px) {
          .about-value-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

// ── Reusable Component Inline Styles ──

const mosaicBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 14px',
  borderRadius: '9999px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  color: '#a8f3c6',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const heroHighlightCardStyle = {
  backgroundColor: 'rgba(2, 24, 14, 0.65)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '16px',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
};

const ownerPillStyle = {
  padding: '10px 14px',
  borderRadius: '12px',
  backgroundColor: 'var(--color-surface-container, #e3f1e7)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--color-on-surface, #121e18)',
};

const valueCardStyle = {
  padding: 'var(--space-xl)',
  borderRadius: '20px',
  backgroundColor: 'var(--color-surface-container-low, #e9f7ed)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const valueIconBoxStyle = (bg, color) => ({
  width: '48px',
  height: '48px',
  borderRadius: '14px',
  backgroundColor: bg,
  color: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
});

const convergenceCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  overflow: 'hidden',
  backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
};

const convergencePillStyle = {
  padding: '6px 12px',
  borderRadius: '9999px',
  backgroundColor: 'var(--color-surface-container, #e3f1e7)',
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--color-primary, #004429)',
};

const convergencePillStyleGold = {
  padding: '6px 12px',
  borderRadius: '9999px',
  backgroundColor: 'var(--color-secondary-container, #91f3c1)',
  fontSize: '12px',
  fontWeight: 600,
  color: 'var(--color-on-secondary-container, #00714b)',
};

const locationBoxStyle = {
  padding: '16px',
  borderRadius: '14px',
  backgroundColor: 'var(--color-surface-container, #e3f1e7)',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
};

