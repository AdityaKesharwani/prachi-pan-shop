import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdLocationOn,
  MdStorefront,
  MdSchedule,
  MdPerson,
  MdCall,
  MdDirections,
  MdContentCopy,
  MdCheckCircle,
  MdVerified,
  MdStars,
  MdHub,
  MdNavigation,
  MdOpenInNew,
  MdPhoneInTalk,
  MdEco,
  MdSanitizer,
  MdStore,
  MdTraffic,
  MdPark,
  MdHistory,
  MdWorkspacePremium,
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const SHOP_FRONT_IMG = '/assets/images/real/shop-front.jpg';
const SHOP_INSIDE_IMG = '/assets/images/real/shop-inside.jpg';
const PAAN_PLATTER_IMG = '/assets/images/neha-pan-bhandar.jpg';
const PAAN_BOX_IMG = '/assets/images/real/neha-pan2.webp';

const branchesData = [
  {
    id: 1,
    brand: 'prachi',
    title: 'Prachi Pan Bhandar — Deendayal Chowk',
    subtitle: 'Atelier No. 01 • Flagship Epicentre',
    eyebrow: 'FLAGSHIP ATELIER • AIR-CONDITIONED',
    landmarkTag: 'DEENDAYAL CHOWK',
    curator: 'Mr. Ramu Kesharwani',
    curatorRole: 'Master Craft',
    address: 'Near Deendayal Chowk, Behind Indian Coffee House, Jabalpur, Madhya Pradesh 482002',
    landmark: 'Landmark: Beside Indian Coffee House • Ample Dedicated Customer Parking',
    timings: '09:00 AM – 10:45 PM (All 365 Days)',
    features: [
      'Live Awadhi Folding Table',
      'Cold-Room Silver Vark Premium Paan House',
      'Luxury Gifting Lounge',
      'Wedding Gift Paandans',
    ],
    phone: '+91 92035 30069',
    tel: '9203530069',
    mapUrl: 'https://maps.google.com/?q=Deendayal+Chowk+Jabalpur',
    waText: 'Hello Prachi Pan Bhandar, I would like to place an order at Deendayal Chowk Atelier',
    image: SHOP_FRONT_IMG,
    icon: MdStore,
    badgeColor: '#004429',
  },
  {
    id: 2,
    brand: 'prachi',
    title: 'Prachi Pan Bhandar — Teen Patti Chowk',
    subtitle: 'Atelier No. 02 • Historic Heart of Jabalpur',
    eyebrow: 'CITY LANDMARK • ARCHITECTURAL BRASS FACADE',
    landmarkTag: 'TEEN PATTI CHOWK',
    curator: 'Mr. Shayam Kesharwani',
    curatorRole: 'Branch Manager',
    address: 'Near Teen Patti Chowk, Front of Pawar Hotel, Jabalpur, Madhya Pradesh 482002',
    landmark: 'Landmark: Directly opposite Pawar Hotel • Bustling High-Street Location',
    timings: '10:00 AM – 11:00 PM Daily',
    features: [
      'Signature Banarasi Meetha',
      'Clove Fire Paan Showcase',
      'Prime High-Street Counter',
      'Express Rapid Takeaway Kiosk',
    ],
    phone: '+91 92035 30069',
    tel: '9203530069',
    mapUrl: 'https://maps.google.com/?q=Teen+Patti+Chowk+Jabalpur',
    waText: 'Hello Prachi Pan Bhandar, I would like to inquire at Teen Patti Chowk branch',
    image: SHOP_INSIDE_IMG,
    icon: MdTraffic,
    badgeColor: '#004429',
  },
  {
    id: 3,
    brand: 'neha',
    title: 'Neha Pan Bhandar — Civic Centre',
    subtitle: 'Atelier No. 03 • Urban Family Promenade',
    eyebrow: 'MODERN BOUTIQUE • URBAN PLAZA',
    landmarkTag: 'CIVIC CENTRE',
    curator: 'Mr. Rakesh Kesharwani',
    curatorRole: 'Boutique Curator',
    address: 'Shop No. 55 & 56, Civic Centre, Awadhpuri, Marhatal, Jabalpur, Madhya Pradesh 482002',
    landmark: 'Landmark: Civic Centre Central Square • Family Seating & Open Air Boulevard',
    timings: '10:30 AM – 11:30 PM Daily',
    features: [
      'Hand-Dipped Belgian Chocolate Paan',
      'Glass Vitrine Display',
      'Kesar Pistachio Infusions',
      'Family Dessert Stroll Destination',
    ],
    phone: '+91 77459 99155',
    tel: '7745999155',
    mapUrl: 'https://maps.google.com/?q=Civic+Centre+Jabalpur',
    waText: 'Hello Mr. Rakesh, I am interested in visiting Neha Pan Bhandar Civic Centre',
    image: PAAN_PLATTER_IMG,
    icon: MdPark,
    badgeColor: '#006c48',
  },
  {
    id: 4,
    brand: 'neha',
    title: 'Neha Pan Bhandar — Galgala',
    subtitle: 'Atelier No. 04 • The Founding Heritage Stand',
    eyebrow: 'HERITAGE COUNTER • TRADITIONAL PAANDAN CRAFT',
    landmarkTag: 'GALGALA',
    curator: 'Mr. Rajesh Kesharwani',
    curatorRole: 'Ancestral Custodians',
    address: 'Galgala, Near Belbagh Tiraha, Jabalpur, Madhya Pradesh 482002',
    landmark: 'Landmark: Near Historic Belbagh Tiraha • Traditional Awadhi Preparation Setup',
    timings: '11:00 AM – 11:00 PM Daily',
    features: [
      'Pure Damask Rose Gulkand',
      'Vintage Brass Paandan Caskets',
      'Traditional Awadhi Kattha Boiling',
      'Bespoke Shahi Gilouri',
    ],
    phone: '+91 92035 30069',
    tel: '9203530069',
    mapUrl: 'https://maps.google.com/?q=Galgala+Jabalpur',
    waText: 'Hello Neha Pan Bhandar, I would like to inquire about Galgala counter',
    image: PAAN_BOX_IMG,
    icon: MdHistory,
    badgeColor: '#006c48',
  },
];

export default function BranchesPage() {
  const [filter, setFilter] = useState('all');
  const [activeHighlightId, setActiveHighlightId] = useState(null);

  const handleNodeClick = (branchId, brand) => {
    if (filter !== 'all' && filter !== brand) {
      setFilter('all');
    }

    setTimeout(() => {
      const cardElem = document.getElementById(`branch-card-${branchId}`);
      if (cardElem) {
        cardElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setActiveHighlightId(branchId);
        setTimeout(() => setActiveHighlightId(null), 3000);
      }
    }, 100);
  };

  const scrollToMap = () => {
    const mapSection = document.getElementById('interactive-map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredBranches = branchesData.filter(
    (b) => filter === 'all' || b.brand === filter
  );

  return (
    <>
      <Helmet>
        <title>Our Jabalpur Premium Paan Houses & Branches — Prachi & Neha Pan Bhandar</title>
        <meta name="description" content="Explore our 4 luxury Premium Paan Houses in Jabalpur: Deendayal Chowk, Teen Patti Chowk, Civic Centre, and Galgala. 100% tobacco-free royal paan craft." />
        <meta property="og:title" content="Our Jabalpur Premium Paan Houses & Branches — Prachi & Neha Pan Bhandar" />
        <link rel="canonical" href="https://prachipanbhandar.com/branches" />
      </Helmet>

      <div style={{ width: '100%', backgroundColor: 'var(--color-surface, #effdf3)', minHeight: '100vh' }}>

        {/* ── 1. HERO SECTION ── */}
        <section style={{ position: 'relative', paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb">
            {/* Status Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-md)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-surface-container-high, #ddece2)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-container, #0b5d3b)',
                    animation: 'pulseDot 2s infinite',
                  }}
                />
                <span className="text-label-caps" style={{ color: 'var(--color-primary, #004429)', letterSpacing: '0.12em' }}>
                  Jabalpur Citywide Ateliers • 4 Luxury Locations
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-tertiary-fixed, #ffdea5)',
                  color: 'var(--color-tertiary, #4d3600)',
                }}
              >
                <MdStars size={16} color="var(--color-tertiary-container, #684c0d)" />
                <span className="text-label-caps" style={{ letterSpacing: '0.1em' }}>
                  100% Tobacco-Free Family Enterprise
                </span>
              </div>
            </div>

            {/* Editorial Split */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)', alignItems: 'end', marginBottom: 'var(--space-3xl)' }} className="branches-hero-grid">
              <div>
                <h1
                  className="text-headline-lg"
                  style={{
                    fontFamily: 'var(--font-display, Playfair Display)',
                    fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                    color: 'var(--color-primary, #004429)',
                    lineHeight: 1.15,
                    marginBottom: '8px',
                  }}
                >
                  Our Heritage Premium Paan Houses Across Jabalpur
                </h1>
                <p
                  style={{
                    fontFamily: 'var(--font-display, Playfair Display)',
                    fontStyle: 'italic',
                    fontSize: '1.4rem',
                    color: 'var(--color-tertiary-container, #684c0d)',
                    margin: '0 0 12px',
                  }}
                >
                  Four Iconic Premium Paan Houses. One Sacred Craft.
                </p>
                <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant, #404942)', maxWidth: '680px', lineHeight: 1.7 }}>
                  From our flagship Deendayal Chowk atelier to the bustling Teen Patti Chowk, Civic Centre, and Galgala heritage counters — experience genuine Awadhi and Banarasi pure confectionery art, cold-pressed botanicals, and real silver vark across the city.
                </p>
              </div>

              {/* Floating Patron Card */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                  padding: 'var(--space-lg)',
                  borderRadius: '20px',
                  boxShadow: '0 12px 32px rgba(11,93,59,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  border: '1px solid var(--color-surface-container-high, #ddece2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="text-label-caps" style={{ color: 'var(--color-on-surface-variant)', letterSpacing: '0.15em' }}>
                    PATRONAGE CURATORSHIP
                  </span>
                  <MdVerified color="var(--color-primary-container, #0b5d3b)" size={22} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-fixed, #a8f3c6)',
                      color: 'var(--color-primary, #004429)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '16px',
                    }}
                  >
                    RK
                  </div>
                  <div>
                    <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', margin: 0, fontWeight: 700 }}>
                      Mr. Ramu Kesharwani
                    </h3>
                    <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', margin: 0 }}>
                      Master Proprietor & Confectioner
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--color-surface-container, #e3f1e7)' }}>
                  <span className="text-body-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-on-surface-variant)' }}>
                    <MdSchedule color="var(--color-primary)" size={16} /> 09:00 AM – 10:45 PM
                  </span>
                  <span className="text-label-ui" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700 }}>
                    Open 365 Days
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Bento Stats Strip */}
            <div
              className="branches-bento-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-md)',
                padding: 'var(--space-md)',
                backgroundColor: 'var(--color-surface-container, #e3f1e7)',
                borderRadius: '20px',
              }}
            >
              <div style={bentoStatCardStyle}>
                <span style={{ fontFamily: 'var(--font-display, Playfair Display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary, #004429)', lineHeight: 1 }}>
                  4
                </span>
                <span className="text-label-ui" style={{ color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}>
                  Premium Paan Houses in Jabalpur
                </span>
              </div>

              <div style={bentoStatCardStyle}>
                <span style={{ fontFamily: 'var(--font-display, Playfair Display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-secondary, #006c48)', lineHeight: 1 }}>
                  100%
                </span>
                <span className="text-label-ui" style={{ color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}>
                  Tobacco-Free Pure Craft
                </span>
              </div>

              <div style={bentoStatCardStyle}>
                <span style={{ fontFamily: 'var(--font-display, Playfair Display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-tertiary-container, #684c0d)', lineHeight: 1 }}>
                  25+
                </span>
                <span className="text-label-ui" style={{ color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}>
                  Years Royal Legacy
                </span>
              </div>

              <div style={bentoStatCardStyle}>
                <span style={{ fontFamily: 'var(--font-display, Playfair Display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary, #004429)', lineHeight: 1 }}>
                  13.5h
                </span>
                <span className="text-label-ui" style={{ color: 'var(--color-on-surface-variant)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em' }}>
                  Daily Fresh Service
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STICKY FILTER TABS BAR ── */}
        <section
          style={{
            position: 'sticky',
            top: '77px',
            zIndex: 30,
            backgroundColor: 'rgba(239, 253, 243, 0.92)',
            backdropFilter: 'blur(16px)',
            paddingTop: '12px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(0, 68, 41, 0.08)',
          }}
        >
          <div className="container-ppb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', padding: '4px', backgroundColor: 'var(--color-surface-container-high, #ddece2)', borderRadius: '9999px' }} className="branches-filter-tabs">
              <button
                onClick={() => setFilter('all')}
                style={filterBtnStyle(filter === 'all')}
              >
                <MdStorefront size={16} /> All Branches (4)
              </button>
              <button
                onClick={() => setFilter('prachi')}
                style={filterBtnStyle(filter === 'prachi')}
              >
                <MdStore size={16} /> Prachi Pan Bhandar (2)
              </button>
              <button
                onClick={() => setFilter('neha')}
                style={filterBtnStyle(filter === 'neha')}
              >
                <MdPark size={16} /> Neha Pan Bhandar (2)
              </button>
              <button
                onClick={scrollToMap}
                style={{
                  ...filterBtnStyle(false),
                  color: 'var(--color-tertiary-container, #684c0d)',
                  fontWeight: 700,
                }}
              >
                <MdLocationOn size={16} /> Interactive Map
              </button>
            </div>

            {/* Direct Hotline */}
            <div className="branches-filter-hotline" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
              <MdPhoneInTalk size={18} color="var(--color-primary, #004429)" />
              <span>Dispatch Hotline:</span>
              <a href="tel:9203530069" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, textDecoration: 'none' }}>
                +91 92035 30069
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. BRANCHES GRID ── */}
        <section style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)' }} className="branches-list-grid">
              {filteredBranches.map((branch) => {
                const isHighlighted = activeHighlightId === branch.id;
                return (
                  <article
                    key={branch.id}
                    id={`branch-card-${branch.id}`}
                    style={{
                      ...branchCardContainerStyle,
                      outline: isHighlighted ? '3px solid #F4D03F' : 'none',
                      boxShadow: isHighlighted ? '0 0 32px rgba(244, 208, 63, 0.5)' : branchCardContainerStyle.boxShadow,
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {/* Image Vitrine */}
                    <div style={{ position: 'relative', height: '280px', overflow: 'hidden', backgroundColor: 'var(--color-surface-dim)' }}>
                      <img
                        src={branch.image}
                        alt={branch.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(0,68,41,0.85) 100%)' }} />

                      {/* Top Badges */}
                      <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        <span style={topBadgePillWhite}>
                          <MdWorkspacePremium size={14} color="#684c0d" />
                          {branch.eyebrow}
                        </span>
                        <span style={topBadgePillBrand(branch.badgeColor)}>
                          {branch.brand === 'prachi' ? 'Prachi Pan Bhandar' : 'Neha Pan Bhandar'}
                        </span>
                      </div>

                      {/* Bottom Quick Info */}
                      <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <MdPerson size={18} color="#91f3c1" />
                          <span style={{ fontSize: '13px', fontWeight: 600 }}>
                            {branch.curatorRole}: {branch.curator}
                          </span>
                        </div>
                        <span style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, color: '#ffdea5', letterSpacing: '0.1em' }}>
                          {branch.landmarkTag}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div style={{ padding: 'var(--space-xl)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                          <div>
                            <h2 className="text-headline-md" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', margin: 0 }}>
                              {branch.title}
                            </h2>
                            <p className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', marginTop: '4px', letterSpacing: '0.15em' }}>
                              {branch.subtitle}
                            </p>
                          </div>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-secondary-container, #91f3c1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary, #004429)', flexShrink: 0 }}>
                            <branch.icon size={22} />
                          </div>
                        </div>

                        {/* Address Box */}
                        <div style={{ padding: '14px', borderRadius: '12px', backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '14px' }}>
                          <MdLocationOn size={20} color="var(--color-primary, #004429)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <div>
                            <p className="text-body-sm" style={{ color: 'var(--color-on-surface, #121e18)', lineHeight: 1.6, margin: 0 }}>
                              {branch.address}
                            </p>
                            <p className="text-label-ui" style={{ color: 'var(--color-on-surface-variant, #404942)', fontSize: '11px', marginTop: '4px', margin: 0 }}>
                              {branch.landmark}
                            </p>
                          </div>
                        </div>

                        {/* Timings & Curator */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginTop: '14px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
                            <MdSchedule color="var(--color-primary, #004429)" size={18} />
                            <span>{branch.timings}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>
                            <MdPerson color="var(--color-primary, #004429)" size={18} />
                            <span>Contact: <strong>{branch.phone}</strong></span>
                          </div>
                        </div>

                        {/* Features Pills */}
                        <div style={{ marginTop: '16px' }}>
                          <span className="text-label-caps" style={{ color: 'var(--color-on-surface-variant)', fontSize: '10px', letterSpacing: '0.12em', display: 'block', marginBottom: '6px' }}>
                            ATELIER FEATURES
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {branch.features.map((feat) => (
                              <span key={feat} style={featurePillStyle}>
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="branch-card-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-surface-container, #e3f1e7)' }}>
                        <a href={`tel:${branch.tel}`} className="btn-ppb-primary" style={{ flex: 1, textDecoration: 'none', padding: '10px 16px', fontSize: '14px' }}>
                          <MdCall size={18} /> Call Branch ({branch.phone})
                        </a>
                        <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-ppb-outline" style={{ textDecoration: 'none', padding: '10px 16px', fontSize: '14px' }}>
                          <MdDirections size={18} /> Get Directions
                        </a>
                        <a
                          href={`https://wa.me/91${branch.tel}?text=${encodeURIComponent(branch.waText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: '10px 16px',
                            borderRadius: '12px',
                            backgroundColor: 'var(--color-surface-container, #e3f1e7)',
                            color: 'var(--color-primary, #004429)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                          }}
                          title="WhatsApp Order"
                        >
                          <FaWhatsapp size={20} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. INTERACTIVE JABALPUR ROUTE MATRIX & MAP ── */}
        <section id="interactive-map-section" style={{ backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px', marginBottom: 'var(--space-2xl)' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-tertiary-container, #684c0d)' }}>
                  <MdHub size={18} />
                  <span className="text-label-caps" style={{ letterSpacing: '0.15em' }}>
                    Jabalpur Citywide Route Matrix
                  </span>
                </div>
                <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', margin: '4px 0' }}>
                  Inter-Connected Royal Premium Paan Houses
                </h2>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '580px', margin: 0 }}>
                  A continuous ring of royal Awadhi hospitality spanning North to South Jabalpur. Every Premium Paan House receives farm-fresh betel leaves directly flown each dawn.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-primary-container, #0b5d3b)' }} />
                  <span className="text-body-sm" style={{ fontWeight: 600 }}>Prachi Ateliers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-secondary, #006c48)' }} />
                  <span className="text-body-sm" style={{ fontWeight: 600 }}>Neha Premium Paan Houses</span>
                </div>
              </div>
            </div>

            {/* Layout Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="map-layout-grid">
              {/* Graphical Map Canvas Card (Reference Image 2) */}
              <div style={mapCardStyle}>
                {/* 1. Grid Background SVG */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}>
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid-pattern-branches" width="36" height="36" patternUnits="userSpaceOnUse">
                        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(0, 68, 41, 0.22)" strokeWidth="0.8" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern-branches)" />
                  </svg>
                </div>

                {/* 2. Responsive Network Curve Lines SVG */}
                <svg
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                  viewBox="0 0 800 420"
                  preserveAspectRatio="none"
                >
                  {/* Node 1 (144, 88) to Node 2 (400, 176) */}
                  <path d="M 144 88 Q 280 140 400 176" fill="none" stroke="#78d9a9" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.85" />
                  {/* Node 2 (400, 176) to Node 3 (640, 136) */}
                  <path d="M 400 176 Q 520 200 640 136" fill="none" stroke="#78d9a9" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.85" />
                  {/* Node 3 (640, 136) to Node 4 (368, 304) */}
                  <path d="M 640 136 Q 520 280 368 304" fill="none" stroke="#78d9a9" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.85" />
                  {/* Node 4 (368, 304) to Node 1 (144, 88) */}
                  <path d="M 368 304 Q 220 220 144 88" fill="none" stroke="#78d9a9" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.5" />
                </svg>

                {/* 3. Node 01 Blinking Pill Capsule Halo (Image 2 Reference) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '22%',
                    left: '18%',
                    transform: 'translate(-50%, -50%)',
                    width: '170px',
                    height: '66px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(11, 93, 59, 0.22)',
                    border: '1.5px solid rgba(11, 93, 59, 0.35)',
                    animation: 'pulsePillCapsule 2s infinite ease-in-out',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />

                {/* Interactive Node 1: Deendayal Chowk */}
                <div
                  onClick={() => handleNodeClick(1, 'prachi')}
                  style={{ position: 'absolute', top: '22%', left: '18%', transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'pointer', zIndex: 10 }}
                  title="Click to view Deendayal Chowk Branch"
                >
                  <div style={nodeCircleStyle('#0b5d3b')}>01</div>
                  <div style={nodeLabelStyle}>
                    <strong style={{ display: 'block', color: 'var(--color-primary)' }}>Deendayal Chowk</strong>
                    <span style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>Flagship Atelier</span>
                  </div>
                </div>

                {/* Interactive Node 2: Teen Patti Chowk */}
                <div
                  onClick={() => handleNodeClick(2, 'prachi')}
                  style={{ position: 'absolute', top: '44%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'pointer', zIndex: 10 }}
                  title="Click to view Teen Patti Chowk Branch"
                >
                  <div style={nodeCircleStyle('#0b5d3b')}>02</div>
                  <div style={nodeLabelStyle}>
                    <strong style={{ display: 'block', color: 'var(--color-primary)' }}>Teen Patti Chowk</strong>
                    <span style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>Near Pawar Hotel</span>
                  </div>
                </div>

                {/* Interactive Node 3: Civic Centre */}
                <div
                  onClick={() => handleNodeClick(3, 'neha')}
                  style={{ position: 'absolute', top: '34%', left: '80%', transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'pointer', zIndex: 10 }}
                  title="Click to view Civic Centre Branch"
                >
                  <div style={nodeCircleStyle('#006c48')}>03</div>
                  <div style={nodeLabelStyle}>
                    <strong style={{ display: 'block', color: 'var(--color-secondary)' }}>Civic Centre</strong>
                    <span style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>Shops 55 & 56</span>
                  </div>
                </div>

                {/* Interactive Node 4: Galgala */}
                <div
                  onClick={() => handleNodeClick(4, 'neha')}
                  style={{ position: 'absolute', top: '76%', left: '46%', transform: 'translate(-50%, -50%)', textAlign: 'center', cursor: 'pointer', zIndex: 10 }}
                  title="Click to view Galgala Branch"
                >
                  <div style={nodeCircleStyle('#006c48')}>04</div>
                  <div style={nodeLabelStyle}>
                    <strong style={{ display: 'block', color: 'var(--color-secondary)' }}>Galgala Heritage</strong>
                    <span style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}>Belbagh Tiraha</span>
                  </div>
                </div>

                {/* Map Footer Info Bar */}
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', zIndex: 10 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-on-surface-variant)', backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: '9999px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <MdNavigation color="var(--color-primary)" size={16} />
                    <span>Coordinates: 23.1815° N, 79.9864° E (Jabalpur, MP)</span>
                  </div>
                  <a href="https://maps.google.com/?q=Jabalpur+Paan+Bhandar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                    <span>Open in Google Maps App</span>
                    <MdOpenInNew size={16} />
                  </a>
                </div>
              </div>

              {/* Catering Hotline Sidebar */}
              <div style={cateringCardStyle}>
                <div>
                  <span className="text-label-caps" style={{ backgroundColor: 'rgba(145,243,193,0.2)', color: '#91f3c1', padding: '4px 12px', borderRadius: '9999px', display: 'inline-block', marginBottom: '12px' }}>
                    ROYAL CATERING • JABALPUR
                  </span>
                  <h3 className="text-headline-md" style={{ color: '#ffffff', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
                    Live Royal Paan Stall for Banquets & Weddings
                  </h3>
                  <p className="text-body-sm" style={{ color: 'rgba(209,250,229,0.85)', lineHeight: 1.6, marginBottom: '16px' }}>
                    Elevate your wedding receptions, corporate galas, and VIP celebrations across Jabalpur with our authentic Awadhi live brass counter, manned by master artisans.
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'rgba(209,250,229,0.9)' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MdCheckCircle color="#91f3c1" size={18} /> Silver Vark & 24K Gold Fire Paan Counter
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MdCheckCircle color="#91f3c1" size={18} /> Custom monogrammed velvet paandans
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MdCheckCircle color="#91f3c1" size={18} /> 100% tobacco-free guarantee for all guests
                    </li>
                  </ul>
                </div>

                <div style={{ paddingTop: '20px' }}>
                  <span className="text-label-caps" style={{ color: '#91f3c1', display: 'block', marginBottom: '4px' }}>
                    DIRECT BANQUET CONCIERGE
                  </span>
                  <a
                    href="tel:9203530069"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: '#ffffff',
                      color: 'var(--color-primary, #004429)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                    }}
                  >
                    <MdPhoneInTalk size={20} color="var(--color-primary, #004429)" />
                    <span>Reserve Stall: +91 92035 30069</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PURITY & QUALITY PROTOCOLS ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                PURITY & QUALITY PROTOCOLS
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                The Kesharwani Standard Across Every Atelier
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
              <div style={protocolCardStyle}>
                <div style={protocolIconStyle}>
                  <MdVerified size={22} color="var(--color-primary, #004429)" />
                </div>
                <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, marginBottom: '6px' }}>
                  100% Edible Pure Silver
                </h3>
                <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}>
                  Every silver leaf (chandi vark) applied in our Deendayal Chowk, Teen Patti, Civic Centre, and Galgala ateliers is lab-certified 99.9% pure vegetarian food-grade silver.
                </p>
              </div>

              <div style={protocolCardStyle}>
                <div style={protocolIconStyle}>
                  <MdEco size={22} color="var(--color-primary, #004429)" />
                </div>
                <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, marginBottom: '6px' }}>
                  Artisanal Damask Rose
                </h3>
                <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}>
                  Our legendary Gulkand is slow-cured under natural sunlight for 45 days in clay vessels using wild spring-blooming Indian Damask roses and unprocessed misri.
                </p>
              </div>

              <div style={protocolCardStyle}>
                <div style={protocolIconStyle}>
                  <MdSanitizer size={22} color="var(--color-primary, #004429)" />
                </div>
                <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, marginBottom: '6px' }}>
                  Pristine Hygiene Protocol
                </h3>
                <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}>
                  Triple-filtered RO washed betel leaves, brass sterilized storage canisters, and temperature-controlled preservation ensure supreme freshness year-round.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        @keyframes pulsePillCapsule {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.85; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.4; }
        }

        @media (min-width: 900px) {
          .branches-hero-grid { grid-template-columns: 1fr 340px !important; }
          .branches-list-grid { grid-template-columns: 1fr 1fr !important; }
          .map-layout-grid { grid-template-columns: 1fr 360px !important; }
        }

        /* Sticky filter tabs — scroll on mobile */
        @media (max-width: 640px) {
          .branches-filter-tabs {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            padding-bottom: 2px;
            max-width: 100%;
          }
          .branches-filter-tabs::-webkit-scrollbar { display: none; }
          .branches-filter-hotline {
            display: none !important;
          }
        }

        /* Bento stat grid — compact on tiny screens */
        @media (max-width: 480px) {
          .branches-bento-stats {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 360px) {
          .branches-bento-stats {
            grid-template-columns: 1fr !important;
          }
        }

        /* Branch card action buttons — stack on mobile */
        @media (max-width: 480px) {
          .branch-card-actions {
            flex-direction: column !important;
          }
          .branch-card-actions a, .branch-card-actions button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
}

// ── Inline Styles ──

const bentoStatCardStyle = {
  backgroundColor: 'rgba(255,255,255,0.85)',
  padding: '16px',
  borderRadius: '14px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const filterBtnStyle = (active) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 16px',
  borderRadius: '9999px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: active ? 700 : 500,
  backgroundColor: active ? 'var(--color-primary-container, #0b5d3b)' : 'transparent',
  color: active ? '#ffffff' : 'var(--color-on-surface-variant, #404942)',
  boxShadow: active ? '0 4px 12px rgba(11,93,59,0.2)' : 'none',
  transition: 'all 0.25s ease',
  whiteSpace: 'nowrap',
});

const branchCardContainerStyle = {
  backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(11,93,59,0.08)',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid var(--color-surface-container, #e3f1e7)',
};

const topBadgePillWhite = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 12px',
  borderRadius: '9999px',
  backgroundColor: 'rgba(255,255,255,0.92)',
  backdropFilter: 'blur(8px)',
  fontSize: '10px',
  fontWeight: 700,
  color: 'var(--color-primary, #004429)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
};

const topBadgePillBrand = (bg) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 12px',
  borderRadius: '9999px',
  backgroundColor: bg,
  fontSize: '10px',
  fontWeight: 700,
  color: '#ffffff',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

const featurePillStyle = {
  padding: '4px 10px',
  borderRadius: '9999px',
  backgroundColor: 'var(--color-surface-container, #e3f1e7)',
  fontSize: '12px',
  color: 'var(--color-on-surface-variant, #404942)',
  fontWeight: 500,
};

const mapCardStyle = {
  backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
  borderRadius: '24px',
  padding: 'var(--space-lg)',
  boxShadow: '0 8px 24px rgba(11,93,59,0.08)',
  position: 'relative',
  minHeight: '440px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
  border: '1px solid var(--color-surface-container, #e3f1e7)',
};

const nodeCircleStyle = (bg) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: bg,
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '14px',
  margin: '0 auto',
  boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
});

const nodeLabelStyle = {
  marginTop: '6px',
  backgroundColor: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(8px)',
  padding: '6px 12px',
  borderRadius: '10px',
  boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  border: '1px solid rgba(0,68,41,0.08)',
};

const cateringCardStyle = {
  backgroundColor: 'var(--color-primary, #004429)',
  color: '#ffffff',
  padding: 'var(--space-xl)',
  borderRadius: '24px',
  boxShadow: '0 20px 48px rgba(11,93,59,0.25)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const protocolCardStyle = {
  padding: 'var(--space-lg)',
  borderRadius: '20px',
  backgroundColor: 'var(--color-surface-container-low, #e9f7ed)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
};

const protocolIconStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'var(--color-secondary-container, #91f3c1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '12px',
};
