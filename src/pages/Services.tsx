import React from 'react';
import NotaryFrame from '../components/NotaryFrame';

interface ServicesProps {
  onNavigate: (
    page:
      | 'landing'
      | 'home'
      | 'about'
      | 'services'
      | 'contact'
      | 'hire'
      | 'salon'
      | 'salon-portal'
      | 'salon-packages'
      | 'documents'
  ) => void;
}

const services = [
  {
    title: 'General Notary Services',
    description:
      'Traditional notary services for all your document needs. Available mobile or at our location.',
    items: [
      'Affidavits',
      'Power of Attorney',
      'Wills and Trusts',
      'Deeds and Property Transfers',
      'Contracts and Agreements',
    ],
    price: '$15 per signature | Mobile: $15 + travel fee',
  },
  {
    title: 'Remote Online Notarization (RON)',
    description:
      'Get your documents notarized from anywhere using secure audio-video technology. Available 24/7.',
    items: [
      'Upload document securely',
      'Verify identity online',
      'Video call with notary',
      'Sign electronically',
      'Download notarized document',
    ],
    price: '$25 per notarization | After hours: $40',
  },
  {
    title: 'In-Person Electronic Notarization (IPEN)',
    description:
      'Electronic notarization conducted in person with digital documents and signatures.',
    items: [
      'No paper handling',
      'Immediate digital delivery',
      'Enhanced security',
      'Electronic journal',
    ],
    price: '$20 per signature | Document prep: $10',
  },
];

function Services({ onNavigate }: ServicesProps) {
  const gold = '#d4af37';
  const goldSoft = '#e8d5a3';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Services & Prices"
      subtitle="Mobile, remote, and electronic notary service with clear pricing"
      backTo="home"
    >
      <div style={{ display: 'grid', gap: '18px', maxWidth: '760px', margin: '0 auto', width: '100%' }}>
        {services.map((service) => (
          <section
            key={service.title}
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
                margin: '0 0 10px',
                color: gold,
                fontWeight: 300,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '1.1rem',
              }}
            >
              {service.title}
            </h2>
            <p style={{ margin: '0 0 12px', color: '#d5d0c8', lineHeight: 1.85, maxWidth: '42ch', marginInline: 'auto' }}>
              {service.description}
            </p>
            <ul
              style={{
                margin: '0 0 14px',
                padding: 0,
                listStyle: 'none',
                color: '#beb7aa',
                lineHeight: 1.8,
                display: 'grid',
                gap: '3px',
              }}
            >
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ margin: 0, color: goldSoft, letterSpacing: '0.5px', fontWeight: 600 }}>
              {service.price}
            </p>
          </section>
        ))}
      </div>
    </NotaryFrame>
  );
}

export default Services;
