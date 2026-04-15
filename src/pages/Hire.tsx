import { useState } from 'react';
import NotaryFrame from '../components/NotaryFrame';
import type { Page } from '../types';

interface HireProps {
  onNavigate: (page: Page) => void;
}

function Hire({ onNavigate }: HireProps) {
  const gold = '#d4af37';
  const [openSection, setOpenSection] = useState<'yen' | 'moments' | null>('yen');

  const toggle = (section: 'yen' | 'moments') => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Hire an Agent"
      subtitle="Choose a path below and expand for full details"
      backTo="services"
    >
      <div style={{ display: 'grid', gap: '18px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
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
          <p style={{ margin: 0, color: '#d8d1c6', lineHeight: 1.7 }}>
            Expand each section to read the full details for lender/title support and care-focused support.
          </p>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => toggle('yen')}
            style={{
              width: '100%',
              border: 'none',
              background: 'transparent',
              color: '#f3efec',
              cursor: 'pointer',
              textAlign: 'left',
              padding: '18px 22px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', color: gold }}>The Yen Experience</span>
            <span style={{ color: '#b8b0a3', fontSize: '0.85rem' }}>{openSection === 'yen' ? 'Hide' : 'Expand'}</span>
          </button>
          {openSection === 'yen' ? (
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '18px 22px 22px' }}>
              <p style={{ margin: '0 0 12px', color: '#d8d1c6', lineHeight: 1.75 }}>
                Signing agent support is available for lender, title, escrow, and real-estate document packages
                that require a guided signing experience.
              </p>
              <p style={{ margin: '0 0 12px', color: '#d8d1c6', lineHeight: 1.75 }}>
                This service focuses on accurate document presentation, complete signatures and initials,
                notarizations where required, and smooth return handling.
              </p>
              <ul style={{ margin: '0 0 12px', paddingLeft: '20px', color: '#beb7aa', lineHeight: 1.7 }}>
                <li>Best for refinance, purchase, seller, HELOC, and lender-directed signing packages.</li>
                <li>Includes signer guidance through the package, scanback coordination, and return readiness.</li>
                <li>Pricing varies by package size, print requirements, scanbacks, timing, and travel.</li>
                <li>Lender and title clients can submit a quick inquiry before file assignment.</li>
              </ul>
              <p style={{ margin: 0, color: '#a9a092', lineHeight: 1.65, fontStyle: 'italic' }}>
                Final pricing is confirmed once file details, delivery requirements, and travel needs are reviewed.
              </p>
            </div>
          ) : null}
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => toggle('moments')}
            style={{
              width: '100%',
              border: 'none',
              background: 'transparent',
              color: '#f3efec',
              cursor: 'pointer',
              textAlign: 'left',
              padding: '18px 22px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', color: gold }}>The Just Because Moments</span>
            <span style={{ color: '#b8b0a3', fontSize: '0.85rem' }}>
              {openSection === 'moments' ? 'Hide' : 'Expand'}
            </span>
          </button>
          {openSection === 'moments' ? (
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '18px 22px 22px' }}>
              <ul style={{ margin: '0 0 14px', paddingLeft: '20px', color: '#d8d1c6', lineHeight: 1.75 }}>
                <li>Handling important documents with care and clarity when timing matters.</li>
                <li>Providing support during moments that come sooner than expected.</li>
                <li>Helping ensure everything is completed properly, without added stress.</li>
                <li>
                  Allowing space for loved ones to focus on being together, while the details are handled with
                  intention.
                </li>
                <li>Offering a calm, steady presence when guidance is needed most.</li>
              </ul>
              <h3
                style={{
                  margin: '0 0 10px',
                  color: gold,
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Just Because Moments
              </h3>
              <p style={{ margin: '0 0 10px', color: '#d8d1c6', lineHeight: 1.75 }}>
                Some moments in life arrive quietly, yet carry more weight than words can hold. This is a space
                created with understanding for those times when care, patience, and respect matter most.
              </p>
              <p style={{ margin: '0 0 10px', color: '#d8d1c6', lineHeight: 1.75 }}>
                Every detail is handled with intention, so you can focus on what truly matters. Thinking you had more
                time, but time is unpredictable.
              </p>
              <p style={{ margin: '0 0 10px', color: '#d8d1c6', lineHeight: 1.75 }}>
                For the moments that come sooner than expected, so you do not have to carry it alone, this service is
                here to offer calm, care, and support when it matters most. This allows you and your loved ones the
                time to simply be with one another, while everything else is handled with intention.
              </p>
              <p style={{ margin: '0 0 10px', color: '#d8d1c6', lineHeight: 1.75 }}>
                Avoiding it can feel like holding onto time. But often, it only takes away from the time that could
                have been spent together.
              </p>
              <p style={{ margin: 0, color: '#d8d1c6', lineHeight: 1.75 }}>
                The moments shared, the words heard, those are what remain. A quiet gift of care, when it matters
                most.
              </p>
            </div>
          ) : null}
        </section>
      </div>
    </NotaryFrame>
  );
}

export default Hire;
