import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall, MdArrowForward } from 'react-icons/md';
import { menuItems, menuCategories } from '../data/menuData';

const CANVAS_BG = '/assets/images/fresh-leaves.png';

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.06, duration: 0.4 } }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category.includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Our Artisanal Menu — Prachi Pan Bhandar</title>
        <meta name="description" content="Explore Prachi Pan Bhandar's artisanal paan menu. Meetha, Banarasi, Kesar, Chocolate, Maghai, Fire & Ice — 100% tobacco-free, handcrafted on order." />
        <meta property="og:title" content="Artisanal Paan Menu — Prachi Pan Bhandar, Jabalpur" />
        <link rel="canonical" href="https://prachipanbhandar.com/menu" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)', background: 'var(--color-surface)' }}>
          <div className="container-ppb" style={{ textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'var(--color-surface-container-low)', border: '1px solid rgba(11,93,59,0.1)', marginBottom: 'var(--space-lg)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', animation: 'pulseDot 2s infinite' }} />
                <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>THE PRAACHI SELECTION</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 600, color: '#0a1f15', letterSpacing: '-0.02em', lineHeight: 1.08, marginBottom: 'var(--space-md)' }}>
              Pick Your <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--color-primary)' }}>Paan.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-body-lg" style={{ color: 'rgba(11,93,59,0.7)', maxWidth: '600px', margin: '0 auto var(--space-xl)', lineHeight: 1.7 }}>
              Classic favourites and signature creations prepared with care. Handcrafted on authentic Calcutta &amp; Magahi betel leaves with botanical purity.
            </motion.p>
            {/* Trust bar */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '24px', padding: '12px 32px', borderRadius: '16px', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(11,93,59,0.08)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              {['100% Tobacco Free', 'Pure Chandi Varak', 'Freshly Made Upon Order'].map((txt, i) => (
                <div key={txt} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {i > 0 && <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(11,93,59,0.2)' }} />}
                  <span style={{ color: 'rgba(11,93,59,0.75)', fontSize: 'var(--fs-label-ui)', fontWeight: 600 }}>✦ {txt}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FILTER BAR ── */}
        <section style={{ background: 'var(--color-surface)', paddingBottom: 'var(--space-lg)' }}>
          <div className="container-ppb" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px', borderRadius: '9999px', background: 'rgba(11,93,59,0.05)', border: '1px solid rgba(11,93,59,0.1)', gap: '4px' }} className="menu-filter-bar">
              {menuCategories.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'var(--fs-label-caps)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    background: activeFilter === id ? 'var(--color-primary-container)' : 'transparent',
                    color: activeFilter === id ? '#fff' : 'rgba(11,93,59,0.7)',
                    boxShadow: activeFilter === id ? '0 10px 20px -5px rgba(11,93,59,0.3)' : 'none',
                    whiteSpace: 'nowrap',
                  }}
                  className="menu-filter-btn"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── MENU GRID ── */}
        <section style={{ background: '#ffffff', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            {/* Mobile swipe note */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)', color: 'rgba(11,93,59,0.6)', fontSize: 'var(--fs-body-sm)' }} className="mobile-only">
              <span>Swipe to explore all {filtered.length} blends</span>
              <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Swipe →</span>
            </div>

            {/* Grid */}
            <motion.div
              layout
              className="menu-items-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => {
                  const isUnstock = item.inStock === false;
                  return (
                    <motion.article
                      key={item.id}
                      layout
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        borderRadius: '24px',
                        background: isUnstock ? '#f8f9fa' : '#fff',
                        border: isUnstock ? '1.5px solid rgba(220, 38, 38, 0.35)' : '1px solid rgba(11,93,59,0.1)',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(11,93,59,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        opacity: isUnstock ? 0.68 : 1,
                        filter: isUnstock ? 'grayscale(0.35)' : 'none',
                        position: 'relative',
                      }}
                      className="menu-page-card"
                      whileHover={isUnstock ? {} : { y: -8, boxShadow: '0 24px 48px -12px rgba(11,93,59,0.16)' }}
                    >
                      {/* Image */}
                      <div style={{ position: 'relative', height: '260px', overflow: 'hidden', background: 'rgba(11,93,59,0.05)' }}>
                        <img src={item.image} alt={item.name} loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                          className="menu-page-img"
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', opacity: 0.85 }} />
                        
                        {/* Out of Stock Overlay Banner */}
                        {isUnstock && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%) rotate(-6deg)',
                              background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                              color: '#ffffff',
                              padding: '8px 24px',
                              borderRadius: '12px',
                              fontWeight: 900,
                              fontSize: '14px',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              boxShadow: '0 8px 24px rgba(220,38,38,0.5)',
                              zIndex: 10,
                              border: '2px solid #ffffff',
                            }}
                          >
                            OUT OF STOCK
                          </div>
                        )}

                        {/* Badges */}
                        <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap', zIndex: 3 }}>
                          <span style={{ padding: '6px 14px', borderRadius: '9999px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: isUnstock ? '#DC2626' : 'var(--color-primary)' }}>
                            {isUnstock ? 'Out of Stock' : item.label}
                          </span>
                          <span style={{ padding: '4px 12px', borderRadius: '9999px', background: 'rgba(11,93,59,0.9)', color: '#fff', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Item {item.itemNo}</span>
                        </div>

                        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 3 }}>
                          <span style={{
                            padding: '6px 14px',
                            borderRadius: '9999px',
                            background: isUnstock ? 'rgba(220, 38, 38, 0.9)' : 'rgba(11,93,59,0.85)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                            fontSize: 'var(--fs-body-sm)',
                            fontWeight: 700,
                          }}>
                            {isUnstock ? 'Out of Stock' : item.price}
                          </span>
                        </div>

                        {/* Name overlay */}
                        <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px', color: '#fff', zIndex: 3 }}>
                          {item.leafType && <p style={{ fontSize: '10px', fontWeight: 500, color: isUnstock ? 'rgba(252,165,165,1)' : 'rgba(166,240,199,1)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>{item.leafType}</p>}
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>{item.name}</h3>
                        </div>
                      </div>

                      {/* Body */}
                      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                        <p className="text-body-md" style={{ color: isUnstock ? 'rgba(100,100,100,0.8)' : 'rgba(11,93,59,0.7)', lineHeight: 1.65 }}>{item.description}</p>
                        {item.tags && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {item.tags.map((t) => (
                              <span key={t} style={{ padding: '3px 10px', borderRadius: '9999px', background: isUnstock ? '#E5E7EB' : 'var(--color-surface-container-low)', color: 'var(--color-on-surface-variant)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t}</span>
                            ))}
                          </div>
                        )}
                        <div style={{ borderTop: '1px solid rgba(11,93,59,0.1)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--fs-label-caps)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: isUnstock ? '#DC2626' : 'var(--color-primary)' }}>
                            <span>{isUnstock ? 'Currently Unavailable' : 'Explore Formulation'}</span>
                            <MdArrowForward size={16} />
                          </div>
                          {isUnstock ? (
                            <a
                              href={`https://wa.me/919203530069?text=${encodeURIComponent(item.whatsappMsg)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-body-sm"
                              style={{ color: '#DC2626', textDecoration: 'none', fontWeight: 700 }}
                            >
                              Inquire Stock
                            </a>
                          ) : (
                            <a href={`tel:9203530069`} className="text-body-sm" style={{ color: 'rgba(11,93,59,0.6)', textDecoration: 'none', fontWeight: 500 }}>Order Fresh</a>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: 'var(--space-3xl)', color: 'var(--color-on-surface-variant)' }}>
                <p className="text-headline-sm">No items found for this filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section style={{ background: 'var(--color-primary-container)', padding: 'var(--space-3xl) 0' }}>
          <div className="container-ppb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-xl)' }}>
            <div>
              <h2 className="text-headline-md" style={{ color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>Can't Find Your Favourite?</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-primary-container)' }}>We create custom paan blends. Message us directly to design your perfect paan.</p>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }} className="menu-cta-actions">
              <a href="https://wa.me/919203530069?text=Namaste%2C%20I%20would%20like%20a%20custom%20paan%20blend" target="_blank" rel="noopener noreferrer" className="btn-ppb-gold">
                <FaWhatsapp size={18} /> Custom Order
              </a>
              <a href="tel:9203530069" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '9999px', background: 'rgba(255,255,255,0.15)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--fs-subheading-sm)' }}>
                <MdCall size={18} /> Call Now
              </a>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .menu-page-card:hover .menu-page-img { transform: scale(1.06); }
        .mobile-only { display: none; }
        @media (max-width: 768px) { .mobile-only { display: flex !important; } }

        /* Filter bar — horizontal scroll on mobile */
        .menu-filter-bar {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 4px;
          justify-content: flex-start;
        }
        .menu-filter-bar::-webkit-scrollbar { display: none; }
        @media (min-width: 640px) {
          .menu-filter-bar {
            justify-content: center;
            overflow-x: visible;
          }
        }
        @media (max-width: 480px) {
          .menu-filter-btn {
            padding: 7px 16px !important;
            font-size: 10px !important;
            white-space: nowrap;
          }
        }

        /* Menu grid */
        .menu-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        @media (max-width: 480px) {
          .menu-items-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* CTA banner */
        @media (max-width: 540px) {
          .menu-cta-actions {
            width: 100%;
            flex-direction: column;
          }
          .menu-cta-actions a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
