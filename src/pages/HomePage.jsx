import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdArrowForward, MdCall, MdSpa, MdRestaurantMenu, MdStore, MdPinDrop, MdChat, MdStar, MdPhoneInTalk, MdEco, MdLocalFlorist, MdFlare, MdVerified, MdWorkspacePremium } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { signatureItems } from '../data/menuData';
import { reviews, trustStats, pillars } from '../data/reviewsData';
import MenuCard from '../components/common/MenuCard';
import Section3DShowcase from '../components/common/Section3DShowcase';
import Section3DFeedback from '../components/common/Section3DFeedback';

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSulg9I5iSikM9xWDdXgBp05iPlQtI5N7WN5vRG-N1Mb0Sfg0jr_wyOloTNfagOvvRJIiMrSuS-RLSCwFEZEP-25Tql2Q9wNKizZYYeXjPT2R_yYEvxx5OwaN5vgOox_obyeKDM_RZWIqfq6RaUbwY1TFTEbugdapzsSBYwtx-ryCnhBjaE1CRh7FhJUqfKUqGboDefCGfB4Sl5kp_JWWBizhIl1lnygMdM7Z2Gwnz_OgFiuUonm_glg';
const BOUTIQUE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD96PwCZpOzNsyGli9klzpzMsnqynWX8LyFA-JXWPEubh_ycB5ATlWPvwyVjkJehHZAhtw6CrF5Z8coa9I_1S8jrSdhLdDzRkaoeg9TMvHQh1-Y7uyIxC30MktgluCe3_OCjtfgusv1QmcZD9lAzYLISt4d_wMSQt7fZjerY2mDwC3M7GOcgSO57vQZOZXXd9VyRnsmplgpX8wreVnQZ7Qpqzg2NdECjL7yvmDs9AThnEOQWhrPumROkQ';
const MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdAZgA_QPcUJoJnfHDu_t-PMR06swLaOZs_5T3l7weT7PnWro6ZMW07JVxhnlI2obDPA5DKzKEFR02B93d_E6SrBHynN82_eWt1FxbVFxXygJmra9UmtH_oLvcMPejufU1JjYIy2QMeyRpliDOymU6tuAn-0znny0lZsBnAYuE1F7SuaK2SFkVSQ1GKkPB6d6bjrAN9P2zOxaHb5FPhEoDls8ewKxUoY6G9zIeiR8TmjgS5HaFlGpZRQ';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const iconMap = { eco: MdEco, local_florist: MdLocalFlorist, flare: MdFlare, verified: MdVerified };

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Prachi Pan Bhandar — Artisan Confectionery, Jabalpur</title>
        <meta name="description" content="Experience the finest artisanal paan in Jabalpur. 100% tobacco-free, pure Damask gulkand, edible silver vark. Visit near Deendayal Chowk or order on WhatsApp." />
        <meta property="og:title" content="Prachi Pan Bhandar — Sacred Traditions Reimagined" />
        <meta property="og:description" content="Luxury artisanal paan crafted by Mr. Ramu Kesharwani. Pure botanicals, edible gold & silver vark. Jabalpur's premier paan atelier." />
        <meta property="og:image" content={HERO_IMG} />
        <link rel="canonical" href="https://prachipanbhandar.com/" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

        {/* ═══════════════════════════════════
            HERO SECTION (RESTORED ORIGINAL)
        ═══════════════════════════════════ */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #ffffff 0%, #effdf3 50%, #e9f7ed 100%)',
            paddingTop: 'var(--space-2xl)',
            paddingBottom: 'var(--space-3xl)',
          }}
        >
          {/* Ambient glows */}
          <div className="glow-orb glow-orb-primary" style={{ width: '380px', height: '380px', top: '-120px', left: '-120px' }} />
          <div className="glow-orb glow-orb-secondary" style={{ width: '500px', height: '500px', top: '30%', right: '-100px' }} />

          <div className="container-ppb" style={{ paddingTop: 'var(--space-xl)' }}>
            <div className="hero-grid">
              {/* ── Left: Copy ── */}
              <motion.div
                initial="hidden" animate="visible" variants={stagger}
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', zIndex: 1 }}
                className="hero-col-text"
              >
                {/* Eyebrow */}
                <motion.div variants={fadeUp}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '6px 16px', borderRadius: '9999px',
                    background: 'rgba(221,236,226,0.85)', backdropFilter: 'blur(12px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-secondary)', animation: 'pulseDot 2s infinite' }} />
                    <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>
                      Sacred Heritage • Jabalpur Confectionery Atelier
                    </span>
                  </div>
                </motion.div>

                {/* H1 */}
                <motion.h1 variants={fadeUp} className="text-display-hero" style={{ color: 'var(--color-primary)', lineHeight: 1.08, fontFamily: 'var(--font-display)' }}>
                  Sacred Traditions,{' '}
                  <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--color-tertiary)' }}>Reimagined for the</span>{' '}
                  Modern Connoisseur.
                </motion.h1>

                <motion.p variants={fadeUp} className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '540px', lineHeight: 1.7 }}>
                  Curated botanical indulgence rooted in timeless Ayurvedic craftsmanship. Perfected with pure Damask gulkand, natural rose distillation, and edible royal silver vark under the visionary direction of{' '}
                  <strong style={{ color: 'var(--color-on-surface)', fontWeight: 600 }}>Mr. Ramu Kesharwani</strong>.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-md)' }}>
                  <Link to="/menu" className="btn-ppb-primary">
                    <span>Explore Artisanal Menu</span>
                    <MdArrowForward size={20} />
                  </Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <a
                      href="https://wa.me/919203530069?text=Namaste%20Prachi%20Pan%20Bhandar%2C%20I%20would%20like%20to%20place%20an%20artisanal%20order"
                      target="_blank" rel="noopener noreferrer"
                      className="btn-ppb-outline"
                    >
                      <FaWhatsapp size={20} />
                      WhatsApp Atelier
                    </a>
                    <a href="tel:9203530069" className="btn-icon-circle" title="Call Direct" style={{
                      padding: 'var(--space-md)', borderRadius: '9999px',
                      background: 'var(--color-surface-container-high)', color: 'var(--color-primary)',
                      display: 'flex', alignItems: 'center', textDecoration: 'none',
                      transition: 'all 0.25s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                      <MdCall size={20} />
                    </a>
                  </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div variants={fadeUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)', paddingTop: 'var(--space-lg)' }} className="hero-trust-grid">
                  {trustStats.map((stat) => (
                    <div key={stat.label} style={{
                      display: 'flex', flexDirection: 'column', gap: '4px',
                      padding: 'var(--space-sm)', borderRadius: '12px',
                      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}>
                      <span className="text-headline-sm" style={{ color: `var(--color-${stat.color})`, fontWeight: 700 }}>
                        {stat.value}
                      </span>
                      <span className="text-label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* ── Right: Hero Image ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="hero-col-img"
              >
                <div className="img-card-hero img-zoom-wrapper" style={{ width: '100%', maxWidth: '480px' }}>
                  <img src={HERO_IMG} alt="Cinematic Shiva Bholenath tranquil bronze statue surrounded by mystical emerald smoke" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="gradient-primary-overlay" style={{ position: 'absolute', inset: 0 }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '4px', color: '#fff' }}>
                    <span className="text-label-caps" style={{ color: 'var(--color-tertiary-fixed)' }}>The Divine Origin</span>
                    <p className="text-headline-sm" style={{ fontWeight: 300, lineHeight: 1.4 }}>
                      "Where sacred botanical purity honors centuries of regal Indian hospitality."
                    </p>
                    <span className="text-body-sm" style={{ color: 'var(--color-primary-fixed-dim)', marginTop: '4px' }}>
                      Revered by seekers • Handcrafted in Jabalpur
                    </span>
                  </div>
                </div>
                {/* Float card */}
                <div style={{
                  position: 'absolute', bottom: '-20px', left: '-20px',
                  background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
                  padding: 'var(--space-md)', borderRadius: '16px',
                  boxShadow: 'var(--shadow-float)', display: 'flex', alignItems: 'center',
                  gap: 'var(--space-sm)', maxWidth: '280px', zIndex: 10,
                }} className="hero-float-card">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MdSpa size={26} color="var(--color-primary)" />
                  </div>
                  <div>
                    <span className="text-subheading-sm" style={{ color: 'var(--color-on-surface)', display: 'block' }}>Certified Silver Vark</span>
                    <span className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)' }}>Lab-tested edible chandi &amp; 24k gold leaf perfection</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            3D ROYAL PAAN SHOWCASE
        ═══════════════════════════════════ */}
        <Section3DShowcase />

        {/* ═══════════════════════════════════
            FOUNDER & REAL SHOP HERITAGE
        ═══════════════════════════════════ */}
        <section style={{ width: '100%', background: 'var(--color-surface)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb">
            <div className="hero-grid">
              <div className="hero-col-text" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-tertiary)' }}>
                  <MdWorkspacePremium size={20} />
                  <span className="text-label-caps">The Custodian of Craft</span>
                </div>
                <h2 className="text-headline-lg" style={{ color: 'var(--color-primary)', lineHeight: 1.2, fontFamily: 'var(--font-display)' }}>
                  The Vision of Mr. Ramu Kesharwani
                </h2>
                <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>
                  For decades, Jabalpur knew paan as a street corner indulgence. Mr. Ramu Kesharwani set out to rewrite this narrative, elevating age-old Banarasi and Magahi leaf rituals into an authentic, hygienic, fine-dining botanical dessert.
                </p>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface)', lineHeight: 1.7 }}>
                  Every single betel leaf is hand-selected at dawn, bathed in purified water, and dressed exclusively with naturally matured rose-petal gulkand, slow-roasted fragrant fennel seeds, Mysore cardamom, and real silver foils.
                </p>
                <div style={{ padding: 'var(--space-md)', borderRadius: '16px', background: 'var(--color-surface-container-low)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <MdPinDrop size={20} />
                  </div>
                  <div>
                    <span className="text-subheading-sm" style={{ color: 'var(--color-primary)', display: 'block' }}>Flagship Heritage Location</span>
                    <span className="text-body-md" style={{ color: 'var(--color-on-surface)', display: 'block' }}>Near Deendayal Chowk, Behind Indian Coffee House, Jabalpur (M.P.)</span>
                    <span className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', marginTop: '4px', display: 'block' }}>A sanctuary of hygiene, fragrance, and royal comfort.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)', paddingTop: '8px' }} className="founder-stats-row">
                  {[['100%', 'Natural Botanicals', 'tertiary'], ['Hygiene 5★', 'Clean-Room Assembly', 'primary'], ['Royal Taste', 'Palace-Grade Gulkand', 'secondary']].map(([val, lbl, col]) => (
                    <React.Fragment key={lbl}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="text-headline-sm" style={{ color: `var(--color-${col})`, fontWeight: 700 }}>{val}</span>
                        <span className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{lbl}</span>
                      </div>
                      {lbl !== 'Palace-Grade Gulkand' && <div style={{ width: '1px', height: '40px', background: 'var(--color-surface-container-high)' }} />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Real Shop Image Showcase */}
              <div style={{ position: 'relative' }} className="hero-col-img">
                <div style={{ borderRadius: 'var(--radius-3xl)', overflow: 'hidden', aspectRatio: '16/11', boxShadow: 'var(--shadow-float)' }} className="img-zoom-wrapper">
                  <img src="/assets/images/real/shop-front.jpg" alt="Real photo of Prachi Pan Bhandar Jabalpur flagship shop with green neon sign and Bholenath frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="gradient-dark-overlay" style={{ position: 'absolute', inset: 0 }} />
                  <div style={{ position: 'absolute', bottom: 'var(--space-lg)', left: 'var(--space-lg)', right: 'var(--space-lg)', color: '#fff' }}>
                    <span className="text-label-caps" style={{ color: 'var(--color-tertiary-fixed)' }}>Authentic Jabalpur Atelier</span>
                    <p className="text-subheading-lg" style={{ fontWeight: 300, marginTop: '4px' }}>Real view of Prachi Pan Bhandar at Deendayal Chowk.</p>
                  </div>
                </div>
                {/* Review card */}
                <div style={{
                  position: 'absolute', bottom: '-32px', right: '16px',
                  background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)',
                  padding: 'var(--space-md)', borderRadius: '16px',
                  boxShadow: 'var(--shadow-float)', maxWidth: '320px',
                  display: 'flex', flexDirection: 'column', gap: '6px',
                }} className="founder-review-card">
                  <div style={{ display: 'flex', gap: '4px', color: 'var(--color-tertiary-container)' }}>
                    {Array(5).fill(0).map((_, i) => <MdStar key={i} size={18} />)}
                  </div>
                  <p className="text-body-sm" style={{ color: 'var(--color-on-surface)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    "Prachi Pan Bhandar changed our entire perspective on paan. Clean, exquisite flavors, and the warmth of Ramu ji makes every visit divine."
                  </p>
                  <span className="text-label-caps" style={{ color: 'var(--color-primary)', marginTop: '4px' }}>– Dr. Amitav Verma, Jabalpur</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            SIGNATURE MENU SHOWCASE
        ═══════════════════════════════════ */}
        <section id="signature-creations" style={{ width: '100%', background: 'var(--color-surface-container-low)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '540px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}>
                  <MdRestaurantMenu size={18} />
                  <span className="text-label-caps">Artisanal Masterpieces</span>
                </div>
                <h2 className="text-headline-lg" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
                  Signature Royal Curations
                </h2>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                  Each paan is individually assembled upon order, combining pristine leaf origins with precious confectionery notes.
                </p>
              </div>
              <Link to="/menu" className="btn-ppb-outline" style={{ flexShrink: 0 }}>
                View Full Menu <MdArrowForward size={18} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
              {signatureItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            4 PILLARS OF BOTANICAL ALCHEMISTRY
        ═══════════════════════════════════ */}
        <section style={{ width: '100%', background: 'var(--color-surface)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>Purity in Every Fold</span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-display)' }}>The 4 Pillars of Botanical Alchemistry</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                Discover why each creation at Prachi Pan Bhandar is unmatched in freshness, aroma, and digestive harmony.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
              {pillars.map((p) => {
                const Icon = iconMap[p.icon] || MdVerified;
                return (
                  <div key={p.step} className="pillar-card" style={{
                    display: 'flex', flexDirection: 'column', padding: 'var(--space-xl)',
                    borderRadius: 'var(--radius-2xl)', background: 'var(--color-surface-container-low)',
                    gap: 'var(--space-md)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'background 0.25s ease',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        width: '48px', height: '48px', borderRadius: '12px',
                        background: 'var(--color-surface-container-highest)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--color-primary)', fontFamily: 'var(--font-display)',
                        fontSize: 'var(--fs-headline-sm)', fontWeight: 700,
                      }}>{p.step}</span>
                      <Icon size={28} color={`var(--color-${p.iconColor})`} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary)' }}>{p.title}</h3>
                      <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}>{p.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            BOUTIQUE & CONTACT DESTINATION
        ═══════════════════════════════════ */}
        <section style={{ width: '100%', background: 'var(--color-surface-container)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb">
            <div className="hero-grid">
              {/* Info */}
              <div className="hero-col-text" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}>
                  <MdStore size={20} />
                  <span className="text-label-caps">The Heritage Landmark</span>
                </div>
                <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-display)' }}>
                  Visit the Premium Paan House in Jabalpur
                </h2>
                <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>
                  Located at the cultural nexus of Jabalpur, our tranquil boutique offers a warm, air-conditioned seating enclave where you can experience freshly crafted paans, exotic botanical mukhwas, and signature festive boxes.
                </p>
                <div className="boutique-info-grid">
                  {[
                    { icon: 'location_on', label: 'The Atelier Address', desc: 'Near Deendayal Chowk, Behind Indian Coffee House,\nJabalpur, Madhya Pradesh', color: 'primary' },
                    { icon: 'schedule', label: 'Tasting Premium Paan House Hours', desc: 'Monday – Sunday\n09:00 AM – 10:45 PM IST\nOpen 365 Days', color: 'tertiary' },
                  ].map((card) => (
                    <div key={card.label} style={{
                      padding: 'var(--space-lg)', borderRadius: '16px',
                      background: 'var(--color-surface-container-lowest)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      display: 'flex', flexDirection: 'column', gap: '8px',
                    }}>
                      <MdPinDrop size={24} color={`var(--color-${card.color})`} />
                      <span className="text-subheading-sm" style={{ color: 'var(--color-on-surface)' }}>{card.label}</span>
                      <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', whiteSpace: 'pre-line', lineHeight: 1.65 }}>{card.desc}</p>
                    </div>
                  ))}
                </div>
                {/* Direct line card */}
                <div style={{
                  padding: 'var(--space-lg)', borderRadius: '16px', background: 'var(--color-primary)',
                  color: '#fff', display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                  justifyContent: 'space-between', gap: 'var(--space-md)',
                  boxShadow: 'var(--shadow-float)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>RK</div>
                    <div>
                      <span className="text-subheading-sm" style={{ display: 'block' }}>Mr. Ramu Kesharwani</span>
                      <span className="text-body-sm" style={{ color: 'var(--color-on-primary-container)' }}>Master Proprietor & Artisan</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <a href="tel:9203530069" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '9999px', background: '#fff', color: 'var(--color-primary)', textDecoration: 'none', fontSize: 'var(--fs-label-ui)', fontWeight: 600 }}>
                      <MdCall size={18} /> 92035 30069
                    </a>
                    <a href="tel:7746034037" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '9999px', background: 'var(--color-primary-container)', color: '#fff', textDecoration: 'none', fontSize: 'var(--fs-label-ui)', fontWeight: 600 }}>
                      77460 34037
                    </a>
                  </div>
                </div>
              </div>

              {/* Map/Image */}
              <div className="hero-col-img" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ borderRadius: 'var(--radius-3xl)', overflow: 'hidden', height: '320px', position: 'relative', boxShadow: 'var(--shadow-float)' }}>
                  <img src={MAP_IMG} alt="Deendayal Chowk location" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,68,41,0.8) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'var(--space-lg)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <div style={{ color: '#fff' }}>
                      <span className="text-subheading-lg" style={{ fontWeight: 600, display: 'block' }}>Deendayal Chowk Atelier</span>
                      <span className="text-body-sm" style={{ color: 'var(--color-primary-fixed-dim)' }}>Jabalpur's Premier Paan Destination</span>
                    </div>
                    <a href="https://www.google.com/maps/place/Prachi+Pan+Bhandar/@23.1923896,79.91418,21z/data=!4m9!1m2!2m1!1sDeendayal+Chowk+Jabalpur!3m5!1s0x3981b1d7812b8699:0x3834b74af9e4f278!8m2!3d23.1923894!4d79.9144777!16s%2Fg%2F11fk3_2sh2?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-ppb-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                      Navigate
                    </a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-md)', borderRadius: '12px', background: 'var(--color-surface-container-lowest)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <MdPhoneInTalk size={24} color="var(--color-secondary)" />
                    <div>
                      <span className="text-subheading-sm" style={{ color: 'var(--color-on-surface)', display: 'block' }}>City-Wide Express Delivery</span>
                      <span className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)' }}>Hygienic vacuum-sealed trays delivered in under 45 mins</span>
                    </div>
                  </div>
                  <a href="https://wa.me/919203530069?text=Namaste%2C%20I%20would%20like%20to%20place%20an%20urgent%20home%20delivery%20order" target="_blank" rel="noopener noreferrer" className="text-label-ui" style={{ color: 'var(--color-primary)', textDecoration: 'none', flexShrink: 0 }}>
                    Order Home →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            3D REVIEWS & CUSTOMER PRAISE SECTION
        ═══════════════════════════════════ */}
        <Section3DFeedback />

        {/* ═══════════════════════════════════
            VIP CTA BANNER
        ═══════════════════════════════════ */}
        <section style={{ width: '100%', background: 'var(--color-primary)', color: '#fff', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)', position: 'relative', overflow: 'hidden' }}>
          <div className="glow-orb" style={{ width: '320px', height: '320px', right: '-80px', bottom: '-80px', background: 'rgba(120,217,169,0.15)' }} />
          <div className="container-ppb" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-2xl)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '540px' }}>
                <span className="text-label-caps" style={{ color: 'var(--color-tertiary-fixed)' }}>Wedding Curation & Bespoke Events</span>
                <h2 className="text-headline-lg" style={{ color: '#fff', lineHeight: 1.2, fontFamily: 'var(--font-display)' }}>
                  Elevate Your Celebrations with Royal Live Paan Stations
                </h2>
                <p className="text-body-md" style={{ color: 'var(--color-on-primary-container)', lineHeight: 1.7 }}>
                  From grand weddings to executive dinners, invite Mr. Ramu Kesharwani's master artisans to set up an authentic royal Paandan live station.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', alignItems: 'center' }} className="vip-cta-actions">
                <a href="https://wa.me/919203530069?text=Namaste%20Ramu%20ji%2C%20I%20wish%20to%20enquire%20about%20a%20Live%20Paan%20Catering%20Station" target="_blank" rel="noopener noreferrer" className="btn-ppb-gold">
                  <FaWhatsapp size={20} />
                  Book Live Atelier Catering
                </a>
                <a href="tel:9203530069" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--fs-subheading-sm)', backdropFilter: 'blur(8px)', transition: 'all 0.25s ease' }}>
                  <MdPhoneInTalk size={20} />
                  Call: +91 92035 30069
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-2xl);
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 7fr 5fr;
          }
        }
        .hero-float-card { display: flex; }
        @media (max-width: 767px) {
          .hero-float-card { display: none; }
          .founder-review-card { display: none; }
        }
        /* Trust badges — compact on tiny screens */
        @media (max-width: 360px) {
          .hero-trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
        /* Boutique info grid */
        .boutique-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }
        @media (max-width: 540px) {
          .boutique-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
        /* VIP CTA banner */
        @media (max-width: 540px) {
          .vip-cta-actions {
            width: 100%;
            flex-direction: column;
          }
          .vip-cta-actions a {
            width: 100%;
            justify-content: center;
          }
        }
        .pillar-card:hover { background: var(--color-surface-container) !important; }
        /* Founder stats row */
        @media (max-width: 480px) {
          .founder-stats-row {
            flex-wrap: wrap;
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </>
  );
}
