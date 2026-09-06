import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaCube } from 'react-icons/fa';
import { MdStar, MdAutoAwesome } from 'react-icons/md';

const showcaseItems = [
  {
    id: 'sada',
    title: 'Sada Paan',
    subtitle: 'Crisp Betel Leaf with Kattha, Chuna & Elaichi',
    image: '/assets/images/sadapan.jpg',
    leaf: 'Tender Fresh Betel Leaf',
    aroma: 'Cardamom Seeds & Digestive Spices',
    garnish: 'Authentic Kattha & Lime Paste',
    whatsappMsg: 'Hello Ramu ji, I wish to inquire about the Sada Paan',
    badge: 'Popular Classic 3D',
    color: '#2E7D32',
  },
  {
    id: 'meetha',
    title: 'Special Meetha Paan',
    subtitle: 'Rich Damask Gulkand, Sweet Coconut & Silver Varak',
    image: '/assets/images/special-meetha-paan.jpg',
    leaf: 'Calcutta Mitha Leaf',
    aroma: 'Royal Rose Extract & Sweet Fennel',
    garnish: 'Pure Chandi Vark & Candied Nuts',
    whatsappMsg: 'Hello Ramu ji, I wish to inquire about the Special Meetha Paan',
    badge: 'Best Seller 3D',
    color: '#D4AF37',
  },
  {
    id: 'chaman',
    title: 'Chatni Chaman Paan',
    subtitle: 'Infused with Signature Chaman Bahar Chutney',
    image: '/assets/images/chatni-chaman-bahar.jpg',
    leaf: 'Aromatic Betel Leaf',
    aroma: 'Herbal Essence & Natural Oils',
    garnish: 'Special Chaman Bahar Sauce',
    whatsappMsg: 'Hello Ramu ji, I wish to inquire about the Chatni Chaman Bahar Paan',
    badge: 'House Special 3D',
    color: '#C0392B',
  },
  {
    id: 'tobacco',
    title: 'Tobacco Paan',
    subtitle: 'Traditional Aged Tobacco Blend for Connoisseurs',
    image: '/assets/images/tambcoo-pan.jpg',
    leaf: 'Dark Rich Betel Leaf',
    aroma: 'Aromatic Tobacco & Spiced Nut',
    garnish: 'Fine Betel Nut & Clove Blend',
    whatsappMsg: 'Hello Ramu ji, I wish to inquire about the Tobacco Paan',
    badge: 'Connoisseur Special 3D',
    color: '#8B4513',
  },
];

export default function Section3DShowcase() {
  const [selectedId, setSelectedId] = useState('sada');
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const currentItem = showcaseItems.find((item) => item.id === selectedId) || showcaseItems[0];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; // tilt angle
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #022315 0%, #063A23 50%, #0B5D3B 100%)',
        color: '#fff',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-3xl)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting rings */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-ppb" style={{ position: 'relative', zIndex: 2 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-2xl) auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(212,175,55,0.15)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: '#F4D03F',
            }}
          >
            <FaCube size={14} className="animate-spin-slow" />
            <span className="text-label-caps" style={{ color: '#F4D03F' }}>Interactive 3D Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-headline-lg"
            style={{ color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1.15 }}
          >
            Explore <span style={{ color: '#F4D03F', fontStyle: 'italic' }}>3D Royal Paan</span> Creations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-md"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Move your cursor over the card to experience real 3D depth, layered ingredients, and royal craftsmanship.
          </motion.p>

          {/* Interactive 3D Selector Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: 'var(--space-md)' }}>
            {showcaseItems.map((item) => {
              const active = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    border: active ? '1px solid #F4D03F' : '1px solid rgba(255,255,255,0.15)',
                    background: active ? '#F4D03F' : 'rgba(255,255,255,0.06)',
                    color: active ? '#042D1C' : '#fff',
                    fontWeight: active ? 700 : 500,
                    fontSize: 'var(--fs-label-ui)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: active ? '0 4px 20px rgba(244,208,63,0.35)' : 'none',
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3D Stage ── */}
        <div className="perspective-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, scale: 0.92, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.92, rotateY: 15 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                width: '100%',
                maxWidth: '900px',
                // borderRadius: 'var(--radius-3xl)',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(244,208,63,0.25)',
                padding: 'clamp(1rem, 4vw, var(--space-2xl))',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(244,208,63,0.15)',
                transformStyle: 'preserve-3d',
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
                cursor: 'pointer',
              }}
              className="card-3d-wrapper"
            >
              <div className="showcase-inner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-2xl)', alignItems: 'center' }}>

                {/* 3D Visual Box */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', transformStyle: 'preserve-3d', transform: 'translateZ(40px)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,35,21,0.85) 0%, transparent 60%)' }} />

                  {/* Floating 3D Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: 'rgba(4,45,28,0.9)',
                      border: '1px solid rgba(244,208,63,0.4)',
                      color: '#F4D03F',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      transform: 'translateZ(70px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    }}
                  >
                    {currentItem.badge}
                  </div>

                  {/* Ask for Price Badge Floating in 3D */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
                      color: '#042D1C',
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      fontSize: 'var(--fs-subheading-sm)',
                      fontWeight: 800,
                      transform: 'translateZ(80px)',
                      boxShadow: '0 8px 24px rgba(212,175,55,0.5)',
                    }}
                  >
                    Ask for Price
                  </div>
                </div>

                {/* 3D Details Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}>
                  <div>
                    <span className="text-label-caps" style={{ color: '#F4D03F', letterSpacing: '0.15em' }}>3D Master Creation</span>
                    <h3 className="text-headline-md" style={{ color: '#fff', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                      {currentItem.title}
                    </h3>
                    <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '6px' }}>
                      {currentItem.subtitle}
                    </p>
                  </div>

                  {/* Ingredient specs in 3D */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '12px' }}>
                      <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Betel Leaf:</span>
                      <span className="text-body-sm" style={{ color: '#fff', fontWeight: 600, marginLeft: 'auto' }}>{currentItem.leaf}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '12px' }}>
                      <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Signature Infusion:</span>
                      <span className="text-body-sm" style={{ color: '#fff', fontWeight: 600, marginLeft: 'auto' }}>{currentItem.aroma}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '12px' }}>
                      <span className="text-body-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Royal Garnish:</span>
                      <span className="text-body-sm" style={{ color: '#F4D03F', fontWeight: 600, marginLeft: 'auto' }}>{currentItem.garnish}</span>
                    </div>
                  </div>

                  {/* WhatsApp Price Inquiry CTA */}
                  <a
                    href={`https://wa.me/919203530069?text=${encodeURIComponent(currentItem.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '16px 28px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 'var(--fs-subheading-sm)',
                      boxShadow: '0 10px 30px rgba(37,211,102,0.4)',
                      transition: 'all 0.3s ease',
                      transform: 'translateZ(60px)',
                    }}
                  >
                    <FaWhatsapp size={22} />
                    Inquire Price for {currentItem.title}
                  </a>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .showcase-inner-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 375px) {
          .card-3d-wrapper {
            border-radius: var(--radius-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
}
