import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // initial check

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '88px',
            right: '22px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#042D1C',
            backgroundImage: 'linear-gradient(135deg, #0B462C 0%, #042D1C 100%)',
            color: '#F4D03F',
            border: hovered ? '1.5px solid #F4D03F' : '1.5px solid rgba(244, 208, 63, 0.45)',
            boxShadow: hovered
              ? '0 8px 24px rgba(4, 45, 28, 0.7), 0 0 15px rgba(244, 208, 63, 0.5)'
              : '0 6px 20px rgba(4, 45, 28, 0.5), 0 0 8px rgba(244, 208, 63, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 9999,
            outline: 'none',
            backdropFilter: 'blur(8px)',
            transition: 'border 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease',
            transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          }}
        >
          <motion.div
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <FaArrowUp size={18} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
