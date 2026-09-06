import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Took a Paan Break | Prachi Pan Bhandar</title>
        <meta name="description" content="Page not found. Head back to Prachi Pan Bhandar's home page or explore our artisanal paan menu." />
      </Helmet>
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: 'var(--color-surface)', textAlign: 'center', padding: '2rem',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(141,214,171,0.2) 0%, transparent 70%)',
      }}>
        {/* Big 404 */}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem, 20vw, 14rem)', fontWeight: 700, color: 'var(--color-surface-container-highest)', lineHeight: 1, marginBottom: '-0.5rem', userSelect: 'none' }}>
          404
        </div>
        {/* Leaf emoji */}
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem', animation: 'floatUp 3s ease-in-out infinite' }}>🌿</div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'var(--color-surface-container)', marginBottom: '1rem' }}>
          <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>Oops — Paan Break!</span>
        </div>

        <h1 className="text-headline-lg" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)', maxWidth: '520px', marginBottom: '1rem' }}>
          This page took a paan break and wandered off.
        </h1>
        <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '440px', lineHeight: 1.7, marginBottom: '2rem' }}>
          No worries — head back and explore our artisanal creations, or WhatsApp Mr. Ramu directly.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn-ppb-primary">
            Return to Atelier <MdArrowForward size={20} />
          </Link>
          <a href="https://wa.me/919203530069" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 24px', borderRadius: '9999px', background: '#25D366',
            color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--fs-subheading-sm)',
            boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
          }}>
            <FaWhatsapp size={20} /> WhatsApp Us
          </a>
          <Link to="/menu" className="btn-ppb-outline">
            Explore Menu
          </Link>
        </div>

        {/* Nav links */}
        <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {[
            { to: '/about', label: 'Our Story' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/experience', label: 'Experience' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link key={to} to={to} className="text-label-ui" style={{ color: 'var(--color-primary)', textDecoration: 'none', padding: '8px 16px', borderRadius: '8px', background: 'var(--color-surface-container)', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => { e.target.style.background = 'var(--color-surface-container-high)'; }}
              onMouseLeave={(e) => { e.target.style.background = 'var(--color-surface-container)'; }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
