import type { CSSProperties } from 'react';
import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

function Contact({ onNavigate }: ContactProps) {
  const gold = '#d4af37';

  const infoCard: CSSProperties = {
    flex: 1,
    minWidth: 0,
    background: '#101010',
    border: '1px solid #242424',
    borderRadius: '18px',
    padding: '26px',
    textAlign: 'center',
  };

  return (
    <PageFrame
      onNavigate={onNavigate}
      title="Contact"
      subtitle="Reach out for scheduling, questions, or service details"
      backTo="home"
      backLabel="Back to Notary Home"
      maxWidth="900px"
    >
      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        <div style={infoCard}>
          <h2 style={{ marginTop: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>Email</h2>
          <p style={{ margin: 0, color: '#d8d8d8', fontSize: '1.05rem' }}>anna@annalico.com</p>
        </div>
        <div style={infoCard}>
          <h2 style={{ marginTop: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>Phone</h2>
          <p style={{ margin: 0, color: '#d8d8d8', fontSize: '1.05rem' }}>(972) 900-7147</p>
        </div>
      </div>
      <div
        style={{
          border: '1px solid #242424',
          borderRadius: '18px',
          padding: '20px 24px',
          color: '#bdbdbd',
          lineHeight: 1.9,
          textAlign: 'center',
        }}
      >
        Available for mobile appointments, remote notarization, and salon booking questions.
      </div>
    </PageFrame>
  );
}

export default Contact;
