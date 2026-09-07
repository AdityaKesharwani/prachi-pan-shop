import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  MdVerified,
  MdEco,
  MdWorkspacePremium,
  MdShield,
  MdLocalFlorist,
  MdSpa,
  MdHealthAndSafety,
  MdCheckCircle,
  MdCancel,
  MdCall
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const HERO_BG = '/assets/images/real/paan-platter-real.jpg';
const INGREDIENTS_IMG = '/assets/images/ingredients.png';

const purityPillars = [
  {
    icon: MdShield,
    title: '100% Tobacco & Nicotine Free',
    badge: 'Non-Carcinogenic',
    desc: 'Strictly zero tobacco, zero zarda, zero nicotine, and zero chemical intoxicants. Our creations celebrate the betel leaf as a pure, ancient digestive tonic suitable for every member of the family.',
  },
  {
    icon: MdWorkspacePremium,
    title: '999 Fine Certified Edible Silver Leaf',
    badge: 'Pure Chandi Vark',
    desc: 'We exclusively use certified 999 fine vegetarian edible silver (chandi) and 24K gold vark, crafted without animal membranes, toxic lead, or heavy metals. Completely safe, tested, and pure.',
  },
  {
    icon: MdLocalFlorist,
    title: 'Sun-Cured Damask Rose Gulkand',
    badge: 'Traditional Alchemy',
    desc: 'Prepared from organic wild Indian Damask rose petals slow-cured for 40 days under pure natural sunlight in porcelain jars with raw rock sugar (mishri). Free from artificial rose essences.',
  },
  {
    icon: MdSpa,
    title: 'Multi-Stage Spring Water Washing',
    badge: 'Single-Origin Leaves',
    desc: 'Fresh Calcutta Mitha and Magahi betel leaves are hand-inspected at dawn, washed through multiple purified filtration stages, trimmed of bitter veins, and cured inside moist mulmul cotton fabric.',
  },
  {
    icon: MdEco,
    title: 'Pure Kashmiri Saffron & Botanicals',
    badge: 'Royal Sourcing',
    desc: 'Infused with authentic GI-tagged Kashmiri Mongra saffron, green cardamom from the Western Ghats, real mace, clove distillates, and Ruh Khus extracts—honouring classical Ayurvedic digestion.',
  },
  {
    icon: MdHealthAndSafety,
    title: 'Climate-Controlled Clean Vitrine',
    badge: 'Sanitary Atelier',
    desc: 'Crafted inside an air-conditioned, dust-free showcase using polished brass pestles and marble slabs. Never exposed to open-street pollution, ensuring five-star dining hygiene.',
  },
];

const comparisonData = [
  {
    attribute: 'Tobacco & Chemical Zarda',
    street: 'Often present or pre-mixed on open boards',
    prachi: '100% Forbidden — Completely Tobacco & Chemical Free',
  },
  {
    attribute: 'Edible Silver Leaf (Vark)',
    street: 'Impure commercial foils, often heavy metal trace',
    prachi: 'Certified 999 Pure Vegetarian Edible Silver / Gold',
  },
  {
    attribute: 'Rose Gulkand Quality',
    street: 'Industrial sugar syrup with artificial scent',
    prachi: '40-Day Sun-Cured Damask Rose Petals with Dhaga Mishri',
  },
  {
    attribute: 'Leaf Cleansing & Hydration',
    street: 'Rinsed briefly in static water buckets',
    prachi: 'Multi-Stage Filtered Mountain Wash & Mulmul Curing',
  },
  {
    attribute: 'Environment & Hygiene',
    street: 'Open roadside dust, exhaust fumes & heat',
    prachi: 'Pristine Air-Conditioned Boutique with Marble Counters',
  },
  {
    attribute: 'Family & Elder Suitability',
    street: 'Questionable purity & hygiene concerns',
    prachi: 'Treasured by children, women, and elders alike',
  },
];

export default function PurityPage() {
  return (
    <>
      <Helmet>
        <title>Royal Purity Guarantee & Botanical Integrity — Prachi Pan Bhandar</title>
        <meta
          name="description"
          content="Discover our 100% tobacco-free royal purity guarantee. Certified edible silver vark, sun-macerated Damask gulkand, and pristine botanical integrity by Master Ramu Kesharwani."
        />
        <meta property="og:title" content="Purity Guarantee — Prachi Pan Bhandar Jabalpur" />
        <link rel="canonical" href="https://prachipanbhandar.com/purity" />
      </Helmet>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'var(--color-surface, #effdf3)' }}>

        {/* ── 1. HERO SECTION ── */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            minHeight: '520px',
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
              alt="Artisanal Paan Botanical Ingredients"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.35) contrast(1.2)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(2, 24, 14, 0.95) 0%, rgba(4, 36, 22, 0.82) 50%, rgba(2, 24, 14, 0.98) 100%)',
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
                <MdEco color="#34d399" size={17} />
                <span
                  className="text-label-caps"
                  style={{ color: '#ffdea5', letterSpacing: '0.18em', fontWeight: 700, fontSize: '11px' }}
                >
                  100% TOBACCO FREE • SACRED BOTANICAL INTEGRITY
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
                maxWidth: '900px',
              }}
            >
              The Sacred Purity Oath of <br />
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#ffdea5',
                  textShadow: '0 0 25px rgba(255,222,165,0.4)',
                }}
              >
                Prachi Pan Bhandar
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
              We believe the betel leaf is a sacred symbol of Indian hospitality and an Ayurvedic digestive treasure. Under Master Ramu Kesharwani, every leaf folded in our Jabalpur atelier is an uncompromising celebration of natural purity.
            </motion.p>

            {/* Badges Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginTop: 'var(--space-lg)',
              }}
            >
              <div style={heroPillStyle}>
                <MdVerified color="#ffdea5" size={16} />
                <span>100% Non-Carcinogenic</span>
              </div>
              <div style={heroPillStyle}>
                <MdWorkspacePremium color="#ffdea5" size={16} />
                <span>999 Fine Vegetarian Silver</span>
              </div>
              <div style={heroPillStyle}>
                <MdLocalFlorist color="#ffdea5" size={16} />
                <span>Sun-Macerated Gulkand</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. THE SIX PILLARS OF PURITY ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                UNCOMPROMISING STANDARDS
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                The Six Pillars of Confectionery Purity
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', marginTop: '6px' }}>
                How we protect the authentic sensory essence and digestive wellbeing of every guest we serve in Jabalpur.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
              {purityPillars.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
                    borderRadius: '24px',
                    padding: 'var(--space-xl)',
                    boxShadow: '0 12px 32px -8px rgba(11,93,59,0.08)',
                    border: '1px solid rgba(11,93,59,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
                      <div
                        style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '16px',
                          backgroundColor: 'var(--color-surface-container, #e3f1e7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-primary, #004429)',
                        }}
                      >
                        <p.icon size={28} />
                      </div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--color-tertiary-container, #684c0d)',
                          backgroundColor: 'var(--color-surface-container-low, #e9f7ed)',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-subheading-lg" style={{ color: 'var(--color-primary, #004429)', fontWeight: 700, marginBottom: '8px' }}>
                      {p.title}
                    </h3>
                    <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.65 }}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. VISUAL BOTANICAL SHOWCASE ── */}
        <section style={{ backgroundColor: 'var(--color-surface-container-low, #e9f7ed)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="purity-showcase-grid">
              {/* Left Editorial */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                  ANCIENT ALCHEMY & SCIENTIFIC PURITY
                </span>
                <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)' }}>
                  A Symphony of Pure Botanicals, Free of Artificial Essences.
                </h2>
                <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant, #404942)', lineHeight: 1.7 }}>
                  In many commercial stalls, synthetic fragrances and industrial glucose substitutes mimic natural ingredients. At Prachi Pan Bhandar, our formulas remain untainted:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'var(--space-xs)' }}>
                  <div style={ingredientBulletStyle}>
                    <MdCheckCircle size={22} color="var(--color-primary, #004429)" style={{ flexShrink: 0 }} />
                    <span className="text-body-md" style={{ color: 'var(--color-on-surface, #121e18)' }}>
                      <strong>Wild Rose Petals & Rock Sugar (Mishri):</strong> Natural alkaline cooling that pacifies digestive fire (Pitta).
                    </span>
                  </div>
                  <div style={ingredientBulletStyle}>
                    <MdCheckCircle size={22} color="var(--color-primary, #004429)" style={{ flexShrink: 0 }} />
                    <span className="text-body-md" style={{ color: 'var(--color-on-surface, #121e18)' }}>
                      <strong>Kashmiri Mongra Kesar:</strong> Royal saffron threads that infuse a golden hue and therapeutic warmth.
                    </span>
                  </div>
                  <div style={ingredientBulletStyle}>
                    <MdCheckCircle size={22} color="var(--color-primary, #004429)" style={{ flexShrink: 0 }} />
                    <span className="text-body-md" style={{ color: 'var(--color-on-surface, #121e18)' }}>
                      <strong>Mysore Cardamom & Indonesian Cloves:</strong> Breath-cleansing essential oils that aid post-prandial metabolism.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 40px -10px rgba(11,93,59,0.2)',
                    position: 'relative',
                    maxHeight: '480px',
                  }}
                >
                  <img
                    src={INGREDIENTS_IMG}
                    alt="Authentic botanical spices, saffron, and sun-macerated gulkand"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 60%, rgba(2, 24, 14, 0.75) 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      right: '20px',
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(10px)',
                      padding: '12px 18px',
                      borderRadius: '14px',
                    }}
                  >
                    <span className="text-label-caps" style={{ color: 'var(--color-primary, #004429)', letterSpacing: '0.12em' }}>
                      Atelier Botanical Collection
                    </span>
                    <p className="text-body-sm" style={{ color: 'var(--color-on-surface-variant, #404942)', margin: '2px 0 0' }}>
                      100% natural spices, pure fennel seeds, and organic floral distillates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. COMPARISON MATRIX (STANDARD VS PRACHI PAN BHANDAR) ── */}
        <section style={{ backgroundColor: 'var(--color-surface, #effdf3)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
          <div className="container-ppb" style={{ maxWidth: '960px' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              <span className="text-label-caps" style={{ color: 'var(--color-tertiary-container, #684c0d)', letterSpacing: '0.15em' }}>
                TRANSPARENT COMPARISON
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-primary, #004429)', fontFamily: 'var(--font-display)', marginTop: '4px' }}>
                Standard Paan vs. Prachi Atelier Standard
              </h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant, #404942)', marginTop: '6px' }}>
                Discover why discerning families and doctors across Jabalpur trust Prachi Pan Bhandar for clean confectionery.
              </p>
            </div>

            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 36px -8px rgba(11,93,59,0.08)',
                border: '1px solid rgba(11,93,59,0.1)',
                backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
              }}
            >
              <div className="table-responsive">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-primary, #004429)', color: '#ffffff' }}>
                      <th style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontSize: '1rem', width: '28%' }}>
                        Quality Dimension
                      </th>
                      <th style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontSize: '1rem', width: '36%', color: 'rgba(255,255,255,0.75)' }}>
                        Standard Street Stalls
                      </th>
                      <th style={{ padding: '16px 20px', fontFamily: 'var(--font-display)', fontSize: '1.05rem', width: '36%', color: '#ffdea5', backgroundColor: '#073320' }}>
                        Prachi Pan Bhandar Atelier ★
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr
                        key={row.attribute}
                        style={{
                          borderBottom: '1px solid rgba(11,93,59,0.08)',
                          backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(239, 253, 243, 0.4)',
                        }}
                      >
                        <td style={{ padding: '16px 20px', fontWeight: 600, color: 'var(--color-on-surface, #121e18)', fontSize: '14px' }}>
                          {row.attribute}
                        </td>
                        <td style={{ padding: '16px 20px', color: '#dc2626', fontSize: '13px', lineHeight: 1.5 }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <MdCancel size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{row.street}</span>
                          </div>
                        </td>
                        <td style={{ padding: '16px 20px', color: 'var(--color-primary, #004429)', fontWeight: 600, fontSize: '13px', lineHeight: 1.5, backgroundColor: 'rgba(233, 247, 237, 0.6)' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <MdCheckCircle size={16} color="var(--color-primary, #004429)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{row.prachi}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Master Ramu Kesharwani Guarantee Card */}
            <div
              style={{
                marginTop: 'var(--space-3xl)',
                padding: 'var(--space-2xl)',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #004429 0%, #0b5d3b 100%)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
                boxShadow: '0 16px 40px -10px rgba(0,68,41,0.3)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MdWorkspacePremium size={28} color="#ffdea5" />
                </div>
                <div>
                  <span className="text-label-caps" style={{ color: '#ffdea5', letterSpacing: '0.15em' }}>
                    PERSONAL PURITY WARRANTY
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', margin: 0 }}>
                    Signed by Master Ramu Kesharwani
                  </h3>
                </div>
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-display, Playfair Display)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  lineHeight: 1.6,
                  color: '#ffffff',
                  margin: '6px 0',
                }}
              >
                “If any of our signature paans fails to meet the highest standards of botanical purity, edible silver certification, or pristine freshness, we will replace your entire order with our deepest apologies and personal reverence.”
              </blockquote>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: 'var(--space-xs)' }}>
                <a
                  href="https://wa.me/919203530069?text=Namaste%20Ramu%20ji,%20I%20would%20like%20to%20know%20more%20about%20your%20Purity%20Guarantee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ppb-gold"
                  style={{ textDecoration: 'none' }}
                >
                  <FaWhatsapp size={18} /> Inquire with Ramu ji on WhatsApp
                </a>
                <a
                  href="tel:9203530069"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: 'var(--fs-subheading-sm)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <MdCall size={18} /> Direct Line: 92035 30069
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .purity-showcase-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </>
  );
}

const heroPillStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  borderRadius: '9999px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  fontSize: '13px',
  fontWeight: 600,
  color: '#ffffff',
};

const ingredientBulletStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  padding: '12px 16px',
  borderRadius: '14px',
  backgroundColor: 'var(--color-surface-container-lowest, #ffffff)',
  boxShadow: '0 2px 8px rgba(11,93,59,0.04)',
};
