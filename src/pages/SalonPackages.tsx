import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface SalonPackagesProps {
  onNavigate: (page: Page) => void;
}

const PACKAGES = [
  { name: 'Cut & Style', sessions: 4, price: 240, savings: 60 },
  { name: 'Color', sessions: 3, price: 375, savings: 75 },
  { name: 'Highlight', sessions: 3, price: 450, savings: 90 },
  { name: 'Balayage', sessions: 2, price: 360, savings: 40 },
  { name: 'Ultimate Care', sessions: 6, price: 600, savings: 150 },
];

function SalonPackages({ onNavigate }: SalonPackagesProps) {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const gold = '#d4af37';

  const cardStyle: CSSProperties = {
    flex: 1,
    minWidth: 0,
    background: '#101010',
    border: '1px solid #242424',
    borderRadius: '18px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <PageFrame
      onNavigate={onNavigate}
      title="Client Packages"
      subtitle="Prepaid session packages in a single view"
      backTo="salon"
      backLabel="Back to Salon Home"
      maxWidth="1260px"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: '16px',
        }}
      >
        {PACKAGES.map((pkg, index) => (
          <button
            key={pkg.name}
            type="button"
            onClick={() => setSelectedPackage(index)}
            style={{
              ...cardStyle,
              textAlign: 'left',
              ...(selectedPackage === index
                ? {
                    borderColor: gold,
                    boxShadow: '0 0 22px rgba(212, 175, 55, 0.18)',
                  }
                : {}),
            }}
          >
            <span style={{ color: gold, fontSize: '0.95rem', fontWeight: 400, letterSpacing: '1px' }}>
              {pkg.name}
            </span>
            <span style={{ color: '#fff', fontSize: '2rem', fontWeight: 200 }}>{pkg.sessions}</span>
            <span style={{ color: '#888', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.74rem' }}>
              Sessions
            </span>
            <span style={{ color: '#f0ddb0', fontSize: '1.35rem' }}>${pkg.price}</span>
            <span style={{ color: '#6acb76', fontSize: '0.85rem' }}>Save ${pkg.savings}</span>
          </button>
        ))}
      </div>

      <div
        style={{
          border: '1px solid #242424',
          borderRadius: '18px',
          padding: '18px 24px',
          color: '#c9c9c9',
          lineHeight: 1.8,
          textAlign: 'center',
          background: '#0d0d0d',
        }}
      >
        These prepaid packages are reserved for current salon clients. Select a package to highlight
        it, then contact Anna directly to purchase or ask questions.
      </div>
    </PageFrame>
  );
}

export default SalonPackages;
