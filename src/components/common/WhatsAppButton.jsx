import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WA_URL = 'https://wa.me/919203530069';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: '#25D366',
        color: '#fff',
        padding: hovered ? '12px 20px' : '14px',
        borderRadius: '9999px',
        textDecoration: 'none',
        boxShadow: '0 8px 28px rgba(37,211,102,0.45)',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation: 'whatsappPulse 2.5s infinite',
        fontWeight: 600,
        fontSize: '14px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: hovered ? '220px' : '52px',
      }}
    >
      <FaWhatsapp size={24} style={{ flexShrink: 0 }} />
      <span
        style={{
          opacity: hovered ? 1 : 0,
          maxWidth: hovered ? '160px' : '0',
          overflow: 'hidden',
          transition: 'opacity 0.3s ease, max-width 0.35s ease',
          display: 'block',
        }}
      >
        Chat with Master
      </span>
    </a>
  );
}
