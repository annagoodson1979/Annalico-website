import type { CSSProperties } from 'react';
import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function Home({ onNavigate }: HomeProps) {
  const gold = '#d4af37';

  const cardStyle: CSSProperties = {
    flex: 1,
    minWidth: 0,
    background: '#101010',
    border: '1px solid #242424',
    borderRadius: '18px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '14px',
  };

  const buttonStyle: CSSProperties = {
    border: `1px solid ${gold}`,
    background: 'transparent',
    color: gold,
    padding: '11px 14px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontSize: '11px',
    cursor: 'pointer',
  };

  return (
    <PageFrame
      onNavigate={onNavigate}
      title="Seal and Stamp Notary"
      subtitle="Mobile • Remote • IPEN • NNA certified in RON and NSA"
    >
      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        <div style={{ ...cardStyle, flex: 1.25 }}>
          <p style={{ margin: 0, color: '#d0d0d0', lineHeight: 1.9, fontSize: '0.98rem' }}>
            Trusted notary service for loan signings, acknowledgments, affidavits, powers of
            attorney, legal documents, and business paperwork with careful preparation and calm,
            polished presentation.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={buttonStyle} onClick={() => onNavigate('services')}>
              Services
            </button>
            <button style={buttonStyle} onClick={() => onNavigate('documents')}>
              Documents
            </button>
            <button style={buttonStyle} onClick={() => onNavigate('contact')}>
              Contact
            </button>
          </div>
        </div>

        <div style={cardStyle}>
          <h2 style={{ margin: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>
            Quick Links
          </h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            <button style={buttonStyle} onClick={() => onNavigate('about')}>
              About Me
            </button>
            <button style={buttonStyle} onClick={() => onNavigate('hire')}>
              Did You Know
            </button>
            <button style={buttonStyle} onClick={() => window.open('https://annalico.glossgenius.com', '_blank')}>
              Pay Online
            </button>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

export default Home;
