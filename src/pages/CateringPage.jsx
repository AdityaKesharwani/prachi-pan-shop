import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  MdCelebration,
  MdWorkspacePremium,
  MdFireplace,
  MdCheckCircle,
  MdDateRange,
  MdCall,
  MdCardGiftcard,
  MdHelpOutline
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const HERO_BG = '/assets/images/luxury-experience.png';

const cateringPackages = [
  {
    title: 'The Shahi Darbar',
    subtitle: 'Grand Wedding & Royal Reception',
    tag: 'Most Popular for Weddings',
    desc: 'The pinnacle of Awadhi and Banarasi celebration. A magnificent live artisanal cart with traditional brass vessels, floral marigold décor, and turban-clad master artisans.',
    features: [
      '15+ Artisanal Varieties (Royal Meetha, Kesar Kasturi, Chandi Vark, etc.)',
      'Live Dramatic Fire Paan & Ice Paan presentation',
      '2 Turban-clad Master Artisans in traditional royal attire',
      'Unlimited handcrafted folding for 500+ guests',
      'Bespoke velvet departure gift boxes for bride & groom VIP family',
    ],
    highlight: true,
  },
  {
    title: "The Nizam's Soiree",
    subtitle: 'Sangeet, Cocktails & Anniversaries',
    tag: 'Contemporary & Youthful',
    desc: 'Infused with modern atelier flair—curated especially for high-energy cocktail nights, sangeets, and young family milestone celebrations.',
    features: [
      '8 Contemporary & Fusion Varieties (Belgian Dark Chocolate, Strawberry, Ice Paan)',
      'Aromatic digestive mukhwas buffet & botanical seed bar',
      '1 Master Confectioner & dedicated assistant',
      'Compact luxury brass and marble table display',
      'Ideal for gatherings of 150 to 350 guests',
    ],
    highlight: false,
  },
  {
    title: 'Corporate & Diplomatic Atelier',
    subtitle: 'Conclaves, VIP Galas & Luncheons',
    tag: 'Sleek & Sanitized',
    desc: 'Refined, discreet, and hygienically sealed single-serve presentations tailored for corporate banquets and high-profile institutional hosts.',
    features: [
      'Single-serve sanitized golden foil packaging',
      'Select 6 traditional palate-cleansing recipes',
      'Custom company branding or crest on gift sleeves',
      'Zero tobacco, 100% clean botanical assurance for executives',
      'Flexible setups for 50 to 1,000+ delegates',
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: 'Do you cater destination weddings outside Jabalpur?',
    a: 'Yes. Our master artisans and live station setups frequently travel across Madhya Pradesh (Bhopal, Indore, Mandla, Katni, Narsinghpur) and outstation destinations with advance booking.',
  },
  {
    q: 'Are all catering varieties 100% tobacco-free and family-safe?',
    a: 'Without exception. Every single creation is 100% tobacco-free, nicotine-free, and chemical-free—making the station a beloved attraction for children, women, and elders alike.',
  },
  {
    q: 'How far in advance should we reserve our wedding date?',
    a: 'During prime wedding muhurat seasons (November–February and April–June), we recommend booking at least 3 to 6 weeks in advance to secure our master team and custom brass cart.',
  },
  {
    q: 'Can we customize personalized wedding monogram gift boxes?',
    a: 'Yes. We offer velvet-lined and gold-embossed keepsake boxes customized with the couple’s initials or family crest for wedding return favors.',
  },
];

export default function CateringPage() {
  const [formData, setFormData] = useState({
    hostName: '',
    phone: '',
    eventType: 'Wedding Reception',
    eventDate: '',
    venue: '',
    guestCount: '250 - 500 Guests',
    selectedPackage: 'The Shahi Darbar (Grand Wedding)',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `*👑 ROYAL PAAN CATERING ENQUIRY — PRACHI PAN BHANDAR*
----------------------------------------
*Host Name:* ${formData.hostName || 'Guest'}
*Contact:* ${formData.phone || 'Not provided'}
*Event Type:* ${formData.eventType}
*Event Date:* ${formData.eventDate || 'To be decided'}
*City / Venue:* ${formData.venue || 'Jabalpur'}
*Estimated Guests:* ${formData.guestCount}
*Preferred Package:* ${formData.selectedPackage}
${formData.notes ? `*Special Requests:* ${formData.notes}` : ''}
----------------------------------------
Namaste Ramu ji, please share availability and custom quote for our celebration.`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://wa.me/919203530069?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Royal Paan Catering & Live Stations — Prachi Pan Bhandar, Jabalpur</title>
        <meta
          name="description"
          content="Book royal live paan stations for weddings, sangeet, and corporate galas in Jabalpur & Central India. 100% tobacco-free, live fire & ice paan, and bespoke gifting."
        />
        <meta property="og:title" content="Royal Paan Catering & Live Stations — Prachi Pan Bhandar" />
        <link rel="canonical" href="https://prachipanbhandar.com/catering" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'var(--color-surface, #effdf3)' }}>

        {/* ── 1. HERO SECTION ── */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            minHeight: '540px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#041a10',
            paddingTop: 'var(--space-3xl)',
            paddingBottom: 'var(--space-3xl)',
          }}
        >
          {/* Background image & gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
              src={HERO_BG}
              alt="Royal Wedding Paan Catering Display"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.38) contrast(1.15)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(2, 24, 14, 0.94) 0%, rgba(4, 36, 22, 0.82) 50%, rgba(2, 24, 14, 0.98) 100%)',
              }}
            />
          </div>

          <div
            className="container-ppb"
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Pill */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 18px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.55)',
                  border: '1px solid rgba(233, 193, 120, 0.45)',
                  backdropFilter: 'blur(12px)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <MdCelebration color="#e9c178" size={17} />
                <span
                  className="text-label-caps"
                  style={{ color: '#ffdea5', letterSpacing: '0.18em', fontWeight: 700, fontSize: '11px' }}
                >
                  ROYAL WEDDINGS • SANGEET • CORPORATE GALAS
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display, Playfair Display)',
                fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.15,
                maxWidth: '920px',
              }}
            >
              Royal Paan Catering & <br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#ffdea5',
                  textShadow: '0 0 25px rgba(255,222,165,0.4)',
                }}
              >
                Live Artisanal Stations
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg"
              style={{
                color: 'rgba(209, 250, 229, 0.92)',
                maxWidth: '720px',
                marginTop: 'var(--space-md)',
                lineHeight: 1.7,
              }}
            >
              Bring the sacred majesty of royal Banarasi craftsmanship to your celebrations. Turbaned master artisans, gleaming brass kiosks, dramatic live fire & ice shows, and 100% botanical purity for your cherished guests.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                marginTop: 'var(--space-xl)',
              }}
            >
              <a href="#booking-form" className="btn-ppb-gold" style={{ textDecoration: 'none' }}>
                <MdDateRange size={18} /> Reserve Your Event Date
              </a>
              <a
                href="https://wa.me/919203530069?text=Namaste%20Ramu%20ji,%20I%20am%20interested%20in%20Live%20Paan%20Catering"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: 'var(--fs-subheading-sm)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <FaWhatsapp size={18} color="#25D366" /> Chat with Ramu ji
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── 2. THREE CORE ATELIER EXPERIENCES ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-3xl)' }}>
          <div className="container-ppb">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                THE CELEBRATION SPECTACLE
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                Why Our Live Counters Steal The Spotlight
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', marginTop: '6px' }}>
                More than dessert—it is an unforgettable theatrical memory of Indian hospitality.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
              {/* Pillar 1 */}
              <div style={experienceCardStyle}>
                <div style={experienceIconStyle}>
                  <MdWorkspacePremium size={28} color="var(--color-primary, #004429)" />
                </div>
                <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700 }}>
                  Royal Brass & Marigold Kiosk
                </h3>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                  Custom-crafted brass counter with engraved platters, scented water fountains, and fresh rose petals that complement luxury wedding stage aesthetics.
                </p>
              </div>

              {/* Pillar 2 */}
              <div style={experienceCardStyle}>
                <div style={experienceIconStyle}>
                  <MdFireplace size={28} color="#ea580c" />
                </div>
                <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700 }}>
                  Live Fire & Smoke Showmanship
                </h3>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                  Masterfully executed, food-grade culinary flames and nitrogen ice mist. 100% safe, exciting, and the single most photographed station at receptions.
                </p>
              </div>

              {/* Pillar 3 */}
              <div style={experienceCardStyle}>
                <div style={experienceIconStyle}>
                  <MdCardGiftcard size={28} color="var(--color-primary, #004429)" />
                </div>
                <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700 }}>
                  Velvet Keepsake Return Favors
                </h3>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                  Bespoke velvet and gold-embossed gift boxes filled with silver vark paans and digestive mukhwas jars for VIP departure hampers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. PACKAGES GRID ── */}
        <section style={{ backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                CURATED COLLECTIONS
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                Signature Catering Packages
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', marginTop: '6px' }}>
                Customized according to your celebration scale, guest count, and culinary preferences.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
              {cateringPackages.map((pkg) => (
                <div
                  key={pkg.title}
                  style={{
                    backgroundColor: pkg.highlight ? '#042D1C' : 'var(--color-surface-container-lowest, #ffffff)',
                    color: pkg.highlight ? '#ffffff' : 'var(--color-on-surface, #121e18)',
                    borderRadius: '24px',
                    padding: 'var(--space-2xl)',
                    boxShadow: pkg.highlight
                      ? '0 20px 48px -12px rgba(0,68,41,0.45)'
                      : '0 8px 24px rgba(11,93,59,0.06)',
                    border: pkg.highlight
                      ? '2px solid rgba(233,193,120,0.6)'
                      : '1px solid rgba(11,93,59,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {pkg.highlight && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#e9c178',
                        color: '#493605',
                        padding: '4px 16px',
                        borderRadius: '9999px',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      Most Requested
                    </div>
                  )}

                  <div>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: pkg.highlight ? '#ffdea5' : 'var(--color-tertiary-container, #684c0d)',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      {pkg.tag}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.65rem',
                        color: pkg.highlight ? '#ffffff' : 'var(--color-primary, #004429)',
                        fontWeight: 700,
                        margin: '0 0 4px',
                      }}
                    >
                      {pkg.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: pkg.highlight ? '#8dd6ab' : 'var(--color-secondary, #006c48)',
                        marginBottom: '14px',
                      }}
                    >
                      {pkg.subtitle}
                    </p>

                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.65,
                        color: pkg.highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-on-surface-variant, #404942)',
                        marginBottom: '20px',
                      }}
                    >
                      {pkg.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '10px', borderTop: pkg.highlight ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(11,93,59,0.1)' }}>
                      {pkg.features.map((feat) => (
                        <div key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <MdCheckCircle
                            size={18}
                            color={pkg.highlight ? '#ffdea5' : 'var(--color-primary, #004429)'}
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <span
                            style={{
                              fontSize: '13px',
                              lineHeight: 1.5,
                              color: pkg.highlight ? 'rgba(255,255,255,0.92)' : 'var(--color-on-surface, #121e18)',
                            }}
                          >
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <a
                      href="#booking-form"
                      onClick={() => setFormData((prev) => ({ ...prev, selectedPackage: `${pkg.title} (${pkg.subtitle})` }))}
                      className={pkg.highlight ? 'btn-ppb-gold' : 'btn-ppb-primary'}
                      style={{ width: '100%', textDecoration: 'none', textAlign: 'center' }}
                    >
                      Select This Package
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. INTERACTIVE BOOKING / ENQUIRY FORM ── */}
        <section id="booking-form" style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb" style={{ maxWidth: '880px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                DIRECT CONCIERGE DESK
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                Reserve Your Live Paan Atelier
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', marginTop: '6px' }}>
                Fill out the event details below to connect directly with Master Ramu Kesharwani on WhatsApp for instant confirmation & bespoke proposals.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                borderRadius: '28px',
                padding: 'clamp(20px, 4vw, 40px)',
                boxShadow: '0 16px 40px -10px rgba(11,93,59,0.12)',
                border: '1px solid rgba(11,93,59,0.1)',
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Row 1: Host Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Your Name / Host Name *</label>
                    <input
                      type="text"
                      name="hostName"
                      required
                      placeholder="e.g. Vikramaditya Sharma"
                      value={formData.hostName}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>WhatsApp / Contact Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98260 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2: Event Type & Date */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Occasion / Event Type *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="Wedding Reception">Grand Wedding Reception</option>
                      <option value="Sangeet & Cocktail Night">Sangeet & Cocktail Night</option>
                      <option value="Haldi / Mehendi Celebration">Haldi / Mehendi Celebration</option>
                      <option value="Corporate Gala / Conclave">Corporate Gala / Conclave</option>
                      <option value="Private Soiree / Anniversary">Private Soiree / Milestone Birthday</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Event Date *</label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 3: City/Venue & Guests */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>City & Venue Details *</label>
                    <input
                      type="text"
                      name="venue"
                      required
                      placeholder="e.g. Hotel Kalchuri / Vijan Mahal, Jabalpur"
                      value={formData.venue}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Estimated Guest Count *</label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="100 - 250 Guests">100 – 250 Guests</option>
                      <option value="250 - 500 Guests">250 – 500 Guests</option>
                      <option value="500 - 1000 Guests">500 – 1,000 Guests</option>
                      <option value="1000+ Royal Gathering">1,000+ Royal Gathering</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Package */}
                <div>
                  <label style={labelStyle}>Preferred Catering Package</label>
                  <select
                    name="selectedPackage"
                    value={formData.selectedPackage}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="The Shahi Darbar (Grand Wedding)">The Shahi Darbar (Grand Wedding Grandeur)</option>
                    <option value="The Nizam's Soiree (Sangeet & Cocktails)">The Nizam's Soiree (Sangeet & Cocktails)</option>
                    <option value="Corporate & Diplomatic Atelier">Corporate & Diplomatic Atelier</option>
                    <option value="Custom Bespoke Curation">Custom Bespoke Flavour Curation</option>
                  </select>
                </div>

                {/* Row 5: Notes */}
                <div>
                  <label style={labelStyle}>Special Requests / Dietary Preferences</label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="e.g. Want special emphasis on chocolate paan for kids, or custom silver monogram gift boxes for VIP guests..."
                    value={formData.notes}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '16px 28px',
                    borderRadius: '9999px',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
                    transition: 'all 0.25s ease',
                    marginTop: '8px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1eb954')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
                >
                  <FaWhatsapp size={22} />
                  Send Enquiry Directly to Mr. Ramu Kesharwani (WhatsApp)
                </button>

                <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-on-surface-variant, #404942)', margin: '4px 0 0' }}>
                  🔒 Your event details are protected by our strict Privacy Protocol and will not be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── 5. FAQS ── */}
        <section style={{ backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb" style={{ maxWidth: '840px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                HAVE QUESTIONS?
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                Catering Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((f) => (
                <div
                  key={f.q}
                  style={{
                    backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    boxShadow: '0 4px 16px rgba(11,93,59,0.04)',
                    border: '1px solid rgba(11,93,59,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <MdHelpOutline size={20} color="var(--color-primary, #004429)" />
                    <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, margin: 0 }}>
                      {f.q}
                    </h3>
                  </div>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65, margin: '6px 0 0', paddingLeft: '28px' }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Call Box */}
            <div
              style={{
                marginTop: 'var(--space-2xl)',
                textAlign: 'center',
                padding: 'var(--space-xl)',
                borderRadius: '20px',
                backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                border: '1px dashed rgba(11,93,59,0.2)',
              }}
            >
              <p className="text-body-md" style={{ color: 'var(--color-on-surface, #121e18)', fontWeight: 600, margin: '0 0 10px' }}>
                Prefer discussing details over a direct phone call?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <a href="tel:9203530069" className="btn-ppb-primary" style={{ textDecoration: 'none' }}>
                  <MdCall size={18} /> Call: +91 92035 30069
                </a>
                <a href="tel:7746034037" className="btn-ppb-outline" style={{ textDecoration: 'none' }}>
                  <MdCall size={18} /> Call: +91 77460 34037
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

const experienceCardStyle = {
  backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
  borderRadius: '20px',
  padding: 'var(--space-xl)',
  boxShadow: '0 10px 30px -8px rgba(11,93,59,0.08)',
  border: '1px solid rgba(11,93,59,0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const experienceIconStyle = {
  width: '54px',
  height: '54px',
  borderRadius: '16px',
  backgroundColor: 'var(--color-surface-container, #e3f1e7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '4px',
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 700,
  color: 'var(--color-primary, #004429)',
  marginBottom: '6px',
  letterSpacing: '0.02em',
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  border: '1px solid rgba(11,93,59,0.2)',
  backgroundColor: 'var(--color-surface, #effdf3)',
  color: 'var(--color-on-surface, #121e18)',
  fontSize: '14px',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};
