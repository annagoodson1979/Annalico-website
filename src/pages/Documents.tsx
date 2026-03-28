import type { CSSProperties } from 'react';
import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface DocumentsProps {
  onNavigate: (page: Page) => void;
}

function Documents({ onNavigate }: DocumentsProps) {
  const gold = '#d4af37';
  const documents = [
    'Loan Documents',
    'Real Estate Deeds',
    'Power of Attorney',
    'Wills and Trusts',
    'Affidavits',
    'Contracts and Agreements',
    'Medical Documents',
    'Business Documents',
  ];

  const listCard: CSSProperties = {
    background: '#101010',
    border: '1px solid #242424',
    borderRadius: '18px',
    padding: '24px',
  };

  return (
    <PageFrame
      onNavigate={onNavigate}
      title="Documents I Notarize"
      subtitle="Common documents handled with care and precision"
      backTo="home"
      backLabel="Back to Notary Home"
    >
      <div style={listCard}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px 26px' }}>
          {documents.map((doc) => (
            <div key={doc} style={{ color: '#d0d0d0', lineHeight: 1.7 }}>
              <span style={{ color: gold, marginRight: '10px' }}>•</span>
              {doc}
            </div>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}

export default Documents;
