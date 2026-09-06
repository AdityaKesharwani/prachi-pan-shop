import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose, MdChevronLeft, MdChevronRight, MdZoomIn } from 'react-icons/md';
import { galleryItems, galleryCategories } from '../data/galleryData';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.45 } }),
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.2 } },
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null); // index in filtered array

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeFilter);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((p) => (p - 1 + filtered.length) % filtered.length);
  const nextImg = () => setLightbox((p) => (p + 1) % filtered.length);

  // Keyboard nav
  React.useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  return (
    <>
      <Helmet>
        <title>Gallery — The Craft Vault | Prachi Pan Bhandar</title>
        <meta name="description" content="Explore Prachi Pan Bhandar's gallery — artisan craft photography, botanical ingredients, signature paan creations, and the luxury Premium Paan House in Jabalpur." />
        <meta property="og:title" content="Gallery — Craft Vault | Prachi Pan Bhandar" />
        <link rel="canonical" href="https://prachipanbhandar.com/gallery" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-surface)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-2xl)', textAlign: 'center' }}>
          <div className="container-ppb" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-md)' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'var(--color-surface-container)', marginBottom: 'var(--space-sm)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-secondary)', animation: 'pulseDot 2s infinite' }} />
                <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>The Craft Vault</span>
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-display-hero" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)', lineHeight: 1.08 }}>
              Artisan <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--color-tertiary)' }}>Gallery</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '560px', lineHeight: 1.7 }}>
              A curated visual archive of craftsmanship, ingredients, and the luxury boutique experience at Prachi Pan Bhandar.
            </motion.p>

            {/* Filter bar */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginTop: 'var(--space-md)' }} className="gallery-filter-row">
              {galleryCategories.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    border: activeFilter === id ? 'none' : '1px solid var(--color-outline-variant)',
                    cursor: 'pointer',
                    fontSize: 'var(--fs-label-caps)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'all 0.25s ease',
                    background: activeFilter === id ? 'var(--color-primary-container)' : 'transparent',
                    color: activeFilter === id ? '#fff' : 'var(--color-on-surface-variant)',
                    boxShadow: activeFilter === id ? '0 8px 20px -6px rgba(11,93,59,0.3)' : 'none',
                    whiteSpace: 'nowrap',
                  }}
                  className="gallery-filter-btn"
                >
                  {label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── MASONRY GRID ── */}
        <section style={{ background: '#fafffe', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ columns: '3', columnGap: '20px' }}
                className="gallery-columns"
              >
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ breakInside: 'avoid', marginBottom: '20px', borderRadius: '20px', overflow: 'hidden', position: 'relative', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                    onClick={() => openLightbox(i)}
                    className="gallery-item-wrap"
                  >
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={item.image}
                        alt={item.alt || item.title}
                        loading="lazy"
                        style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.6s ease' }}
                        className="gallery-img"
                      />
                      {/* Overlay */}
                      <div className="gallery-overlay" style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,68,41,0.9) 0%, transparent 60%)',
                        opacity: 0, transition: 'opacity 0.35s ease',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                        padding: '24px', gap: '6px',
                      }}>
                        <div style={{ position: 'absolute', top: '16px', right: '16px', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <MdZoomIn size={22} color="#fff" />
                        </div>
                        <span style={{ padding: '3px 10px', borderRadius: '6px', background: 'var(--color-tertiary-container)', color: 'var(--color-on-tertiary-fixed)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', alignSelf: 'flex-start' }}>{item.category}</span>
                        <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.3 }}>{item.title}</h3>
                        <p style={{ color: 'var(--color-primary-fixed-dim)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.55 }}>{item.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: 'var(--space-3xl)', color: 'var(--color-on-surface-variant)' }}>
                <p className="text-headline-sm">No items in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        <AnimatePresence>
          {lightbox !== null && filtered[lightbox] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0, zIndex: 99999,
                background: 'rgba(10, 18, 14, 0.96)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '20px',
              }}
              onClick={closeLightbox}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                style={{ position: 'absolute', top: '20px', right: '20px', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <MdClose size={24} />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <MdChevronLeft size={30} />
              </button>

              {/* Image */}
              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filtered[lightbox].image}
                  alt={filtered[lightbox].alt || filtered[lightbox].title}
                  style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '16px' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: '#fff' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-tertiary-fixed)' }}>{filtered[lightbox].category}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600 }}>{filtered[lightbox].title}</h3>
                  <p style={{ color: 'var(--color-primary-fixed-dim)', fontSize: 'var(--fs-body-sm)', lineHeight: 1.6 }}>{filtered[lightbox].subtitle}</p>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '4px' }}>{lightbox + 1} / {filtered.length}</span>
                </div>
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <MdChevronRight size={30} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .gallery-item-wrap:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-item-wrap:hover .gallery-img { transform: scale(1.05); }

        /* Masonry columns responsive */
        .gallery-columns { columns: 3; column-gap: 20px; }
        @media (max-width: 1023px) { .gallery-columns { columns: 2 !important; } }
        @media (max-width: 539px)  { .gallery-columns { columns: 1 !important; } }

        /* Filter buttons — scroll on mobile */
        .gallery-filter-row {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          flex-wrap: nowrap !important;
          justify-content: flex-start !important;
          padding-bottom: 4px;
          width: 100%;
        }
        .gallery-filter-row::-webkit-scrollbar { display: none; }
        @media (min-width: 640px) {
          .gallery-filter-row {
            flex-wrap: wrap !important;
            justify-content: center !important;
            overflow-x: visible;
          }
        }
        @media (max-width: 480px) {
          .gallery-filter-btn {
            padding: 7px 14px !important;
            font-size: 10px !important;
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  );
}
