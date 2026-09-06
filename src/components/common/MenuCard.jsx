import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdAddShoppingCart, MdCardGiftcard } from 'react-icons/md';

export default function MenuCard({ item }) {
  const isUnstock = item.inStock === false;
  const isGiftBox = item.id === 'h4' || item.name?.toLowerCase().includes('box');
  const Icon = isGiftBox ? MdCardGiftcard : MdAddShoppingCart;
  const btnStyle = isUnstock
    ? {
        background: '#FEE2E2',
        color: '#DC2626',
        border: '1px solid #FCA5A5',
      }
    : isGiftBox
    ? {
        background: 'var(--color-tertiary)',
        color: 'var(--color-on-tertiary)',
      }
    : {
        background: 'var(--color-surface-container)',
        color: 'var(--color-primary)',
      };

  return (
    <div
      className="menu-card-ppb"
      style={{
        opacity: isUnstock ? 0.65 : 1,
        filter: isUnstock ? 'grayscale(0.35)' : 'none',
        border: isUnstock ? '1.5px solid rgba(220, 38, 38, 0.35)' : 'none',
        position: 'relative',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', overflow: 'hidden', background: 'var(--color-surface-container-high)' }}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          className="menu-card-img"
        />

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
              padding: '6px 18px',
              borderRadius: '10px',
              fontWeight: 900,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              boxShadow: '0 6px 18px rgba(220,38,38,0.5)',
              zIndex: 10,
              border: '2px solid #ffffff',
            }}
          >
            OUT OF STOCK
          </div>
        )}

        {/* Price tag */}
        <a
          href={`https://wa.me/919203530069?text=${encodeURIComponent(item.whatsappMsg || 'Hello, I want to inquire about price for ' + item.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: isUnstock ? '#DC2626' : 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
            color: isUnstock ? '#ffffff' : '#042D1C',
            padding: '5px 14px',
            borderRadius: '9999px',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            boxShadow: isUnstock ? '0 4px 14px rgba(220,38,38,0.4)' : '0 4px 14px rgba(212,175,55,0.4)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 2,
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isUnstock ? '#FFF' : '#042D1C' }} />
          {isUnstock ? 'Out of Stock' : 'Ask for Price'}
        </a>
        {/* Badge */}
        {item.badge && (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              background: isUnstock ? '#FEE2E2' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isUnstock ? '#DC2626' : isGiftBox ? 'var(--color-tertiary)' : 'var(--color-primary)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            {isUnstock ? 'Out of Stock' : item.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', flex: 1, gap: 'var(--space-md)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          <h3
            className="text-headline-sm menu-card-title"
            style={{ color: 'var(--color-on-surface)', transition: 'color 0.25s ease', fontFamily: 'var(--font-display)' }}
          >
            {item.name}
          </h3>
          <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}>
            {item.description}
          </p>
          {item.tags && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '2px 10px',
                    borderRadius: '9999px',
                    background: 'var(--color-surface-container)',
                    color: 'var(--color-on-surface-variant)',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <a
          href={`https://wa.me/919203530069?text=${encodeURIComponent(item.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 16px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: 'var(--fs-label-ui)',
            fontWeight: 'var(--fw-label-ui)',
            transition: 'all 0.25s ease',
            ...btnStyle,
          }}
          className="menu-order-btn"
        >
          <FaWhatsapp size={16} />
          {isUnstock ? 'Inquire Stock on WhatsApp' : isGiftBox ? 'Enquire VIP Box' : 'Order on WhatsApp'}
        </a>
      </div>

      <style>{`
        .menu-card-ppb {
          display: flex;
          flex-direction: column;
          background: var(--color-surface-container-lowest);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: var(--transition-cubic);
        }
        .menu-card-ppb:hover {
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-4px);
        }
        .menu-card-ppb:hover .menu-card-img {
          transform: scale(1.06);
        }
        .menu-card-ppb:hover .menu-card-title {
          color: var(--color-primary);
        }
        .menu-order-btn:hover {
          background: var(--color-primary) !important;
          color: var(--color-on-primary) !important;
        }
      `}</style>
    </div>
  );
}
