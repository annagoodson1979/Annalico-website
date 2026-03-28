import type { CSSProperties } from 'react';
import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    title: 'General Notary',
    details: 'Affidavits, powers of attorney, wills, trusts, deeds, contracts',
    price: '$15 per signature',
  },
  {
    title: 'Remote Online Notarization',
    details: 'Secure online identity verification, video session, electronic signing',
    price: '$25 per notarization',
  },
  {
    title: 'In-Person Electronic Notarization',
    details: 'Digital document workflow with in-person verification and delivery',
    price: '$20 per signature',
  },
];

function Services({ onNavigate }: ServicesProps) {
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

  return (
    <PageFrame
      onNavigate={onNavigate}
      title="Services"
      subtitle="Professional notary solutions in one clear view"
      backTo="home"
      backLabel="Back to Notary Home"
    >
      <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
        {services.map((service) => (
          <section key={service.title} style={cardStyle}>
            <h2 style={{ margin: 0, color: gold, fontWeight: 300, letterSpacing: '2px' }}>
              {service.title}
            </h2>
            <p style={{ margin: 0, color: '#cfcfcf', lineHeight: 1.8 }}>{service.details}</p>
            <p style={{ margin: 'auto 0 0', color: '#f0ddb0', fontWeight: 600 }}>{service.price}</p>
          </section>
        ))}
      </div>
    </PageFrame>
  );
}

export default Services;
