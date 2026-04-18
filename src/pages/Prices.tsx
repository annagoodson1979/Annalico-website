import React from 'react';
import NotaryFrame from '../components/NotaryFrame';
import type { Page } from '../types';

interface PricesProps {
  onNavigate: (page: Page) => void;
}

type FeatureGroup = {
  label: string;
  examples: string[];
};

type PackageFeature = string | FeatureGroup;

const pricingColumns = [
  {
    title: 'Notary Services',
    items: ['RON (Online): $35', 'Mobile (In-person): $25', 'After-hours: +$30', 'Emergency: +$50'],
  },
  {
    title: 'Document Services',
    items: ['Document Prep: $5/page', 'Page Re-ordering: $5-$10', 'Secure Sleeve: $3', 'E-signature assistance: $25/document'],
  },
];

const presentationPackages: Array<{
  name: string;
  price: string;
  accent: string;
  badge?: string;
  featured?: boolean;
  features: PackageFeature[];
  note: string;
}> = [
  {
    name: 'Signing Certificate',
    price: '$9',
    accent: '#d4af37',
    features: ['Official Signing Certificate', 'Professional presentation'],
    note: 'Best for: clear documentation without extras.',
  },
  {
    name: 'Presentation Upgrade',
    price: '$15',
    accent: '#d4af37',
    features: [
      'Signing Certificate',
      {
        label: 'Signature Accent',
        examples: ['Ribbon Accent Wrap', 'Embossed Seal (gold or blind)'],
      },
    ],
    note: 'Best for: adding a refined, professional touch.',
  },
  {
    name: 'Enhanced Presentation',
    price: '$19',
    accent: '#d4af37',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Signing Certificate',
      'Linen presentation folder',
      { label: 'Signature Accent', examples: ['Ribbon Accent Wrap', 'Embossed Seal'] },
      { label: 'Personalized Detail', examples: ['Foil-Stamped Initials', 'Wax Seal'] },
    ],
    note: 'Best for: a presentation that feels important and personal.',
  },
  {
    name: 'The Seal & Stamp Experience',
    price: '$24',
    accent: '#e5c76b',
    features: [
      'Signing Certificate',
      'Linen presentation folder',
      'Personalized leather keepsake folder',
      { label: 'Signature Accent', examples: ['Ribbon Accent Wrap', 'Embossed Seal'] },
      { label: 'Personalized Detail', examples: ['Foil-Stamped Initials', 'Wax Seal'] },
    ],
    note: 'Best for: preserving an important life milestone with lasting elegance.',
  },
];

const packageComparison = [
  { feature: 'Signing Certificate', values: ['Included', 'Included', 'Included', 'Included'] },
  { feature: 'Signature Accent', values: ['-', 'Choose 1', 'Choose 1', 'All'] },
  { feature: 'Linen Presentation Folder', values: ['-', '-', 'Included', 'Included'] },
  { feature: 'Personalized Detail', values: ['-', '-', 'Choose 1', 'All'] },
  { feature: 'Leather Keepsake Folder', values: ['-', '-', '-', 'Included'] },
];

function renderFeature(feature: PackageFeature) {
  if (typeof feature === 'string') {
    return <div key={feature}>{feature}</div>;
  }

  return (
    <div key={feature.label} style={{ marginTop: '2px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '98px 1fr',
          gap: '10px',
          alignItems: 'start',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            color: '#d4af37',
            fontSize: '0.76rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: 1.15,
          }}
        >
          {feature.label}
        </span>
        <div style={{ display: 'grid', gap: '4px', color: '#f1ece2', letterSpacing: '0.45px' }}>
          {feature.examples.map((example) => (
            <div key={example} style={{ position: 'relative', paddingLeft: '14px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#d4af37' }}>*</span>
              {example}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Prices({ onNavigate }: PricesProps) {
  const gold = '#d4af37';
  const goldSoft = '#e8d5a3';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Services and Prices"
      subtitle="Package options, add-ons, and a quick comparison"
      backTo="home"
    >
      <div style={{ display: 'grid', gap: '18px', maxWidth: '920px', margin: '0 auto', width: '100%' }}>
        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <p style={{ margin: 0, color: '#cfc8bc', lineHeight: 1.7 }}>
            Use these quick links to go where you need in one click.
          </p>
          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('prices')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Packages
            </button>
            <button
              onClick={() => onNavigate('how-help')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              How I Can Help
            </button>
            <button
              onClick={() => onNavigate('hire')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Hire an Agent
            </button>
            <button
              onClick={() => onNavigate('services')}
              style={{
                border: `1px solid ${gold}`,
                background: 'rgba(212, 175, 55, 0.1)',
                color: '#f3efec',
                borderRadius: '999px',
                padding: '11px 18px',
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '1.3px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Prices
            </button>
          </div>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              margin: '0 0 18px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.08rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            Pricing Overview
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px',
            }}
          >
            {pricingColumns.map((column) => (
              <div
                key={column.title}
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.18)',
                  borderRadius: '14px',
                  padding: '20px 16px',
                  background: 'rgba(8,8,8,0.5)',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 12px',
                    color: goldSoft,
                    fontWeight: 500,
                    letterSpacing: '1.4px',
                    textTransform: 'uppercase',
                    fontSize: '0.84rem',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {column.title}
                </h3>
                <div style={{ display: 'grid', gap: '5px', color: '#d5d0c8', lineHeight: 1.7 }}>
                  {column.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              margin: '0 0 8px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.08rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            Presentation Packages
          </h2>
          <p
            style={{
              margin: '0 0 22px',
              color: '#a9a294',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            Enhance your signing with a presentation style that fits the moment.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '20px',
              alignItems: 'stretch',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            {presentationPackages.map((pkg) => (
              <div
                key={pkg.name}
                style={{
                  border: pkg.featured ? `2px solid ${gold}` : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '20px 18px',
                  background: pkg.featured ? 'rgba(17,17,17,0.92)' : 'rgba(10,10,10,0.65)',
                  boxShadow: pkg.featured ? '0 0 24px rgba(212, 175, 55, 0.12)' : 'none',
                  textAlign: 'left',
                }}
              >
                {pkg.badge ? (
                  <span
                    style={{
                      display: 'inline-block',
                      background: gold,
                      color: '#000',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.68rem',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {pkg.badge}
                  </span>
                ) : null}

                <h3
                  style={{
                    margin: '0 0 8px',
                    color: pkg.accent,
                    fontWeight: 500,
                    letterSpacing: '1.4px',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    fontFamily: "'Cinzel', serif",
                    textAlign: 'center',
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  style={{
                    margin: '0 0 14px',
                    textAlign: 'center',
                    color: gold,
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {pkg.price}
                </p>

                <div style={{ display: 'grid', gap: '7px', color: '#c8c1b5', lineHeight: 1.6 }}>
                  {pkg.features.map(renderFeature)}
                </div>

                <p
                  style={{
                    margin: '14px 0 0',
                    color: '#8e8778',
                    fontStyle: 'italic',
                    lineHeight: 1.55,
                    fontSize: '0.92rem',
                  }}
                >
                  {pkg.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              margin: '0 0 8px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.08rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            Package Feature Comparison
          </h2>
          <p
            style={{
              margin: '0 0 20px',
              color: '#a9a294',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            See what is included in each presentation package.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <div
              style={{
                minWidth: '720px',
                display: 'grid',
                gridTemplateColumns: '1.5fr repeat(4, 1fr)',
                gap: '1px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <div style={{ background: '#111', padding: '14px 10px', color: '#888', fontSize: '0.78rem' }}>
                Feature
              </div>
              {presentationPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  style={{
                    background: '#111',
                    padding: '14px 10px',
                    textAlign: 'center',
                    color: pkg.accent,
                    fontSize: '0.76rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  {pkg.name}
                </div>
              ))}

              {packageComparison.map((row) => (
                <React.Fragment key={row.feature}>
                  <div
                    style={{
                      background: '#0a0a0a',
                      padding: '12px 10px',
                      color: '#a8a293',
                      fontSize: '0.82rem',
                      textAlign: 'left',
                    }}
                  >
                    {row.feature}
                  </div>
                  {row.values.map((value, index) => (
                    <div
                      key={`${row.feature}-${index}`}
                      style={{
                        background: '#0a0a0a',
                        padding: '12px 10px',
                        color: value === '-' ? '#5c584f' : '#d7d1c4',
                        fontSize: '0.82rem',
                        textAlign: 'center',
                      }}
                    >
                      {value}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            style={{
              margin: '14px 0 0',
              color: '#8e8778',
              fontSize: '0.9rem',
              lineHeight: 1.6,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                alignItems: 'start',
                maxWidth: '620px',
                margin: '0 auto',
                textAlign: 'left',
                paddingLeft: '28px',
              }}
            >
              <div>
                <div
                  style={{
                    color: '#d4af37',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    lineHeight: 1.15,
                    marginBottom: '4px',
                  }}
                >
                  Signature Accent
                </div>
                <div style={{ color: '#f1ece2', letterSpacing: '0.45px', display: 'grid', gap: '2px' }}>
                  <div>* Ribbon Wrap</div>
                  <div>* Embossed Seal</div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: '#d4af37',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    lineHeight: 1.15,
                    marginBottom: '4px',
                  }}
                >
                  Personalized Detail
                </div>
                <div style={{ color: '#f1ece2', letterSpacing: '0.45px', display: 'grid', gap: '2px' }}>
                  <div>* Foil-Stamped Initials</div>
                  <div>* Wax Seal</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default Prices;
