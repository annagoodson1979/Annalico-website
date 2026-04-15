import NotaryFrame from '../components/NotaryFrame';
import type { Page } from '../types';

interface PricesProps {
  onNavigate: (page: Page) => void;
}

const packageData = [
  {
    title: '1. Essential Notary',
    includes: ['Notarial act (acknowledgment, jurat, oath)', 'Official ink stamp', 'Signature'],
  },
  {
    title: '2. Mobile Convenience',
    includes: ['Everything in Essential', 'Travel to client location', 'Flexible scheduling'],
  },
  {
    title: '3. Verified Copy Service',
    includes: ['Copy Certification by Document Custodian', 'Notarized affidavit', 'Ink stamp & signature'],
  },
  {
    title: '4. Signature Seal Experience',
    includes: [
      'Notarial act',
      'Copy Certification Affidavit (when applicable)',
      'Ink stamp & signature',
      'Embossed "Signature Seal" finish',
      'Clean, professional presentation',
    ],
    note: 'Designed for documents that deserve a refined, official finish.',
  },
];

function Prices({ onNavigate }: PricesProps) {
  const gold = '#d4af37';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Prices"
      subtitle="Don't miss The Yen Experience."
      backTo="home"
    >
      <div style={{ display: 'grid', gap: '18px', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
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
              How I Can Help
            </button>
            <button
              onClick={() => window.scrollTo({ top: 320, behavior: 'smooth' })}
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
              View Prices
            </button>
          </div>
        </section>

        {packageData.map((pkg) => (
          <section
            key={pkg.title}
            className="info-hover-card"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '18px',
              padding: '22px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                margin: '0 0 10px',
                color: gold,
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '1.04rem',
                fontFamily: "'Cinzel', serif",
              }}
            >
              {pkg.title}
            </h2>
            <p
              style={{
                margin: '0 0 8px',
                color: '#d5d0c8',
                lineHeight: 1.7,
                maxWidth: '58ch',
                marginInline: 'auto',
              }}
            >
              Includes:
            </p>
            <ul
              style={{
                margin: '4px auto 0',
                paddingLeft: '20px',
                color: '#beb7aa',
                lineHeight: 1.72,
                maxWidth: '60ch',
                textAlign: 'left',
              }}
            >
              {pkg.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {pkg.note ? (
              <p
                style={{
                  margin: '12px auto 0',
                  color: '#b9b2a5',
                  lineHeight: 1.7,
                  maxWidth: '58ch',
                }}
              >
                {pkg.note}
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </NotaryFrame>
  );
}

export default Prices;
