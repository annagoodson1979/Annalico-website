import type { CSSProperties } from 'react';
import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

function About({ onNavigate }: AboutProps) {
  const gold = '#d4af37';

  const cardStyle: CSSProperties = {
    flex: 1,
    minWidth: 0,
    background: '#101010',
    border: '1px solid #242424',
    borderRadius: '18px',
    padding: '22px',
  };

  return (
    <PageFrame
      onNavigate={onNavigate}
      title="About Me"
      subtitle="Experience since 2001"
      backTo="home"
      backLabel="Back to Notary Home"
    >
      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        <div style={{ ...cardStyle, flex: 1.2 }}>
          <h2 style={{ marginTop: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>
            My Approach
          </h2>
          <p style={{ margin: 0, color: '#d0d0d0', lineHeight: 1.85 }}>
            I bring luxury-level care, clarity, and protection to every signing. My work is built
            around calm preparation, polished presentation, and respectful handling of the documents
            that matter most to my clients.
          </p>
        </div>
        <div style={cardStyle}>
          <h2 style={{ marginTop: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>
            Why Clients Choose Me
          </h2>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#c8c8c8', lineHeight: 1.9 }}>
            <li>Clear and stress-free appointments</li>
            <li>Careful review of document details</li>
            <li>Elevated presentation and finishing touches</li>
            <li>Warm, grounded, confidential service</li>
          </ul>
        </div>
      </div>

      <div style={{ ...cardStyle, background: '#0c0c0c' }}>
        <h2 style={{ marginTop: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>
          Credentials
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '12px' }}>
          {[
            'Commissioned Notary Public',
            'NNA Certified NSA',
            'NNA Certified RON',
            'Background Screened & E&O Insured',
          ].map((item) => (
            <div
              key={item}
              style={{
                border: '1px solid #222',
                borderRadius: '14px',
                padding: '14px',
                textAlign: 'center',
                color: '#d5d5d5',
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}

export default About;
