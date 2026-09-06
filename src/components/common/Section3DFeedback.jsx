import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdStar, MdChevronLeft, MdChevronRight, MdFormatQuote, MdVerified } from 'react-icons/md';
import { reviews } from '../../data/reviewsData';

export default function Section3DFeedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const currentReview = reviews[activeIndex];

  return (
    <section
      style={{
        width: '100%',
        background: 'linear-gradient(180deg, #022315 0%, #053621 100%)',
        color: '#fff',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-4xl)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glowing ring */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-ppb" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto var(--space-2xl) auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-xs)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              background: 'rgba(212,175,55,0.15)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: '#F4D03F',
            }}
          >
            <MdVerified size={16} />
            <span className="text-label-caps" style={{ color: '#F4D03F' }}>
              Distinguished Guests
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-headline-lg"
            style={{ color: '#fff', fontFamily: 'var(--font-display)', marginTop: '8px' }}
          >
            Connoisseur <span style={{ color: '#F4D03F', fontStyle: 'italic' }}>3D Praise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-md"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Cherished by connoisseurs, event planners, and prominent families across Madhya Pradesh.
          </motion.p>
        </div>

        {/* ── 3D Stage Container ── */}
        <div
          className="perspective-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '340px',
            paddingLeft: '56px',
            paddingRight: '56px',
          }}
        >
          {/* Left Nav Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous Review"
            style={{
              position: 'absolute',
              left: '10px',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(244,208,63,0.4)',
              color: '#F4D03F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
          >
            <MdChevronLeft size={28} />
          </button>

          {/* Right Nav Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Review"
            style={{
              position: 'absolute',
              right: '10px',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(244,208,63,0.4)',
              color: '#F4D03F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
          >
            <MdChevronRight size={28} />
          </button>

          {/* 3D Animated Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, scale: 0.88, rotateY: 25, z: -100 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
              exit={{ opacity: 0, scale: 0.88, rotateY: -25, z: -100 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                width: '100%',
                maxWidth: '720px',
                borderRadius: 'var(--radius-3xl)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(244, 208, 63, 0.3)',
                padding: 'clamp(1rem, 4vw, var(--space-2xl))',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.6), 0 0 30px rgba(244, 208, 63, 0.15)',
                transformStyle: 'preserve-3d',
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
                cursor: 'grab',
                position: 'relative',
              }}
              className="card-3d-wrapper"
            >
              {/* Background 3D Quote Mark Icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  color: 'rgba(244, 208, 63, 0.12)',
                  pointerEvents: 'none',
                  transform: 'translateZ(20px)',
                }}
              >
                <MdFormatQuote size={90} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', transformStyle: 'preserve-3d' }}>
                
                {/* 5-Star Rating in 3D */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', transform: 'translateZ(50px)' }}>
                  {Array(currentReview.rating).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                    >
                      <MdStar size={22} color="#F4D03F" />
                    </motion.div>
                  ))}
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginLeft: '8px', fontWeight: 600 }}>
                    VERIFIED PATRON REVIEW
                  </span>
                </div>

                {/* Review Text */}
                <p
                  className="text-headline-sm feedback-review-text"
                  style={{
                    color: '#fff',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    fontWeight: 300,
                    transform: 'translateZ(60px)',
                  }}
                >
                  {currentReview.text}
                </p>

                {/* Author Info & Avatar Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginTop: 'var(--space-md)',
                    paddingTop: 'var(--space-md)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    transform: 'translateZ(70px)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
                      color: '#042D1C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      boxShadow: '0 4px 16px rgba(244,208,63,0.4)',
                      flexShrink: 0,
                    }}
                  >
                    {currentReview.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-subheading-sm" style={{ color: '#fff', display: 'block', fontWeight: 700 }}>
                      {currentReview.name}
                    </span>
                    <span className="text-body-sm" style={{ color: '#F4D03F', opacity: 0.9 }}>
                      {currentReview.location}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: 'var(--space-xl)' }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: activeIndex === i ? '28px' : '10px',
                height: '10px',
                borderRadius: '9999px',
                background: activeIndex === i ? '#F4D03F' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 480px) {
          .feedback-review-text {
            font-size: 18px !important;
            line-height: 1.55 !important;
          }
        }
        @media (max-width: 360px) {
          .feedback-review-text {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
