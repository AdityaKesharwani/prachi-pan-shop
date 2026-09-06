import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { MdAutoAwesome, MdCall } from 'react-icons/md';
import LanguageSelector from '../common/LanguageSelector';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/experience', label: 'Experience' },
  { to: '/branches', label: 'Branches' },
  { to: '/contact', label: 'Contact' },
];

const LOGO_DARK = '/assets/images/logo-dark.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1000,
          background: scrolled
            ? 'rgba(2, 35, 21, 0.96)'
            : 'rgba(4, 45, 28, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(212, 175, 55, 0.35)'
            : '1px solid rgba(212, 175, 55, 0.15)',
          boxShadow: scrolled
            ? '0 8px 24px -4px rgba(0, 0, 0, 0.4)'
            : '0 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div
          className="container-ppb"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
            gap: '0.5rem',
          }}
        >
          {/* ── Brand Logo ── */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
              flexShrink: 0,
              minWidth: 0,
            }}
            className="nav-logo-gap"
          >
            <img
              src={LOGO_DARK}
              alt="Prachi Pan Bhandar Royal Crest"
              className="nav-logo-img"
              style={{
                height: '46px',
                width: '46px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid rgba(212, 175, 55, 0.5)',
                boxShadow: '0 0 12px rgba(212, 175, 55, 0.25)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  className="text-headline-sm"
                  style={{
                    color: '#fff',
                    lineHeight: 1,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.04em',
                  }}
                >
                  PRACHI PAN
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
                    color: '#042D1C',
                    letterSpacing: '0.08em',
                  }}
                  className="nav-bhandar-badge"
                >
                  BHANDAR
                </span>
              </div>
              <span
                className="text-label-caps nav-tagline"
                style={{
                  color: 'rgba(244, 208, 63, 0.9)',
                  marginTop: '4px',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                }}
              >
                Artisan Confectionery • Est. Jabalpur
              </span>
            </div>
          </Link>

          {/* ── Desktop Fixed Nav ── */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '5px 8px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            className="nav-desktop"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontSize: 'var(--fs-subheading-sm)',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#042D1C' : 'rgba(255, 255, 255, 0.85)',
                  background: isActive
                    ? 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)'
                    : 'transparent',
                  boxShadow: isActive ? '0 4px 14px rgba(244,208,63,0.3)' : 'none',
                  transition: 'all 0.25s ease',
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ── Action Buttons ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="https://wa.me/919203530069"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#fff',
                padding: '9px 20px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: 'var(--fs-label-ui)',
                fontWeight: 700,
                boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                transition: 'all 0.25s ease',
              }}
              className="btn-call-nav"
            >
              <FaWhatsapp size={18} />
              <span className="call-text">Order WhatsApp</span>
            </a>

            {/* 🌐 Language Switcher (ENG / HIN) 🌐 */}
            <span className="nav-lang-selector">
              <LanguageSelector />
            </span>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                padding: '10px',
                color: '#fff',
                borderRadius: '50%',
                transition: 'all 0.25s ease',
              }}
              className="nav-hamburger"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mobile-drawer open"
            style={{
              position: 'fixed',
              top: '84px',
              left: '16px',
              right: '16px',
              background: 'rgba(2, 35, 21, 0.96)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              borderRadius: 'var(--radius-3xl)',
              border: '1px solid rgba(244, 208, 63, 0.3)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              zIndex: 999,
              padding: '1.5rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#042D1C' : '#fff',
                  background: isActive
                    ? 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)'
                    : 'rgba(255,255,255,0.06)',
                  boxShadow: isActive
                    ? '0 6px 20px rgba(244,208,63,0.35)'
                    : 'none',
                  transition: 'all 0.2s ease',
                })}
              >
                <span>{label}</span>
                <MdAutoAwesome size={16} opacity={0.6} />
              </NavLink>
            ))}

            <div
              style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <a
                href="https://wa.me/919203530069"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px',
                  borderRadius: '9999px',
                  background: '#25D366',
                  color: '#fff',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
                }}
              >
                <FaWhatsapp size={20} />
                Order on WhatsApp
              </a>

              <a
                href="tel:9203530069"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.12)',
                  color: '#F4D03F',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(244,208,63,0.3)',
                }}
              >
                <MdCall size={18} />
                Call: +91 92035 30069
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .nav-hamburger { display: none !important; }
        }
        /* Hide WA button on mobile — drawer has it */
        @media (max-width: 768px) {
          .call-text { display: none; }
          .btn-call-nav { display: none !important; }
        }
        /* Hide language selector on small screens */
        @media (max-width: 480px) {
          .nav-lang-selector { display: none !important; }
        }
        @media (max-width: 390px) {
          .nav-tagline { display: none !important; }
          .nav-logo-gap { gap: 0.5rem !important; }
        }
        @media (max-width: 360px) {
          .nav-bhandar-badge { display: none !important; }
          .nav-logo-img { height: 36px !important; width: 36px !important; }
        }
        .btn-call-nav:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }
      `}</style>
    </>
  );
}
