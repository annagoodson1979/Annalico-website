import type { CSSProperties } from 'react';
import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface SalonHomeProps {
  onNavigate: (page: Page) => void;
}

function SalonHome({ onNavigate }: SalonHomeProps) {
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
      title="Salon"
      subtitle="Professional hair styling and beauty services by Anna"
    >
      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        <div style={{ ...cardStyle, flex: 1.2 }}>
          <p style={{ margin: 0, color: '#d0d0d0', lineHeight: 1.9 }}>
            Personalized salon care with a focus on healthy hair, polished results, and client
            comfort. Choose your next step below.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={buttonStyle} onClick={() => onNavigate('salon-packages')}>
              View Packages
            </button>
            <button style={buttonStyle} onClick={() => onNavigate('salon-portal')}>
              Client Portal
            </button>
            <button style={buttonStyle} onClick={() => onNavigate('contact')}>
              Contact
            </button>
          </div>
        </div>

        <div style={cardStyle}>
          <h2 style={{ margin: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>
            Quick Note
          </h2>
          <p style={{ margin: 0, color: '#c8c8c8', lineHeight: 1.85 }}>
            Package options and portal access are available in one click so you can stay inside the
            salon section without extra scrolling.
          </p>
        </div>
      </div>
    </PageFrame>
  );
}

export default SalonHome;
