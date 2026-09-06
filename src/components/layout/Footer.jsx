import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn, MdSchedule, MdCall, MdPhoneIphone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const logoUrl = '/assets/images/logo-dark.png';

const footerLinks = [
  { to: '/', label: 'The Atelier' },
  { to: '/about', label: 'Royal Heritage' },
  { to: '/menu', label: 'Artisanal Menu' },
  { to: '/gallery', label: 'Curation Vault' },
  { to: '/experience', label: 'Private Tastings' },
  { to: '/branches', label: 'Jabalpur Branches' },
  { to: '/contact', label: 'Concierge Desk' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-surface-container-low)',
        color: 'var(--color-on-surface)',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-2xl)',
        boxShadow: '0 -8px 24px -6px rgba(11,93,59,0.04)',
      }}
    >
      <div className="container-ppb">
        <div className="footer-grid">
          {/* ── Brand Column ── */}
          <div className="footer-col-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src={logoUrl} alt="Prachi Pan Bhandar Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }} />
              <span className="text-headline-sm" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
                PRACHI PAN BHANDAR
              </span>
            </div>
            <p
              className="text-body-md"
              style={{ color: 'var(--color-on-surface-variant)', maxWidth: '300px', lineHeight: 1.7 }}
            >
              Reinventing royal Indian paan craftsmanship. Infused with pure saffron, fragrant gulkand, natural botanical extracts, and artisanal silver chandi vark.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary)', display: 'block', marginBottom: '4px' }}>
                Master Proprietor
              </span>
              <span className="text-headline-sm" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-display)' }}>
                Mr. Ramu Kesharwani
              </span>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer-col">
            <span
              className="text-subheading-sm"
              style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '1rem' }}
            >
              Boutique Links
            </span>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-body-sm"
                  style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--color-on-surface-variant)')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Address ── */}
          <div className="footer-col">
            <span
              className="text-subheading-sm"
              style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '1rem' }}
            >
              The Heritage Spot
            </span>
            <a
              href="https://www.google.com/maps/place/Prachi+Pan+Bhandar/@23.1923896,79.91418,21z/data=!4m9!1m2!2m1!1sDeendayal+Chowk+Jabalpur!3m5!1s0x3981b1d7812b8699:0x3834b74af9e4f278!8m2!3d23.1923894!4d79.9144777!16s%2Fg%2F11fk3_2sh2?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-on-surface-variant)', textDecoration: 'none', marginBottom: '1rem' }}
            >
              <MdLocationOn size={20} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div className="text-body-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ display: 'block' }}>Near Deendayal Chowk,</span>
                <span style={{ display: 'block' }}>Behind Indian Coffee House,</span>
                <span style={{ color: 'var(--color-tertiary)', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                  Jabalpur, Madhya Pradesh ↗
                </span>
              </div>
            </a>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--color-on-surface-variant)' }}>
              <MdSchedule size={20} color="var(--color-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div className="text-body-sm" style={{ lineHeight: 1.7 }}>
                <span style={{ color: 'var(--color-on-surface)', fontWeight: 600, display: 'block' }}>Working Hours</span>
                <span style={{ display: 'block' }}>Monday – Sunday</span>
                <span style={{ display: 'block' }}>09:00 AM – 10:45 PM IST</span>
              </div>
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="footer-col">
            <span
              className="text-subheading-sm"
              style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '1rem' }}
            >
              Direct Line & Concierge
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <a
                href="tel:9203530069"
                className="text-body-sm footer-contact-link"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              >
                <MdCall size={18} color="var(--color-tertiary)" />
                +91 92035 30069
              </a>
              <a
                href="tel:6261810017"
                className="text-body-sm footer-contact-link"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              >
                <MdPhoneIphone size={18} color="var(--color-tertiary)" />
                +91 62618 10017
              </a>
            </div>
            <a
              href="https://wa.me/919203530069"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                background: 'var(--color-primary)',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 'var(--fs-label-ui)',
                boxShadow: '0 8px 24px -6px rgba(11,93,59,0.18)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-primary-container)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-primary)')}
            >
              <FaWhatsapp size={20} />
              WhatsApp Concierge
            </a>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom-bar">
          <span className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
            © 2025 Prachi Pan Bhandar. Crafted with royal reverence. All rights reserved.
          </span>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Protocol', 'Purity Guarantee', 'Catering Enquiries'].map((txt) => (
              <a
                key={txt}
                href="#"
                className="text-label-caps"
                style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--color-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--color-on-surface-variant)')}
              >
                {txt}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-2xl);
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          }
        }
        .footer-contact-link:hover { color: var(--color-primary) !important; }
        .footer-bottom-bar {
          border-top: 1px solid var(--color-outline-variant);
          margin-top: var(--space-2xl);
          padding-top: var(--space-xl);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        @media (max-width: 540px) {
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .footer-bottom-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
        }
        .footer-brand-text {
          word-break: break-word;
          overflow-wrap: break-word;
        }
      `}</style>
    </footer>
  );
}
