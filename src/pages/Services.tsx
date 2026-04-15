import NotaryFrame from '../components/NotaryFrame';
import type { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const serviceSections = [
  {
    title: 'Remote Online Notary (RON)',
    eyebrow: 'Anywhere in the U.S. (Preferred)',
    body: [
      'Remote Online Notarization offers a secure and convenient alternative to in-person appointments. While the fee is comparable to mobile service, many clients save significantly by avoiding travel time, fuel costs, parking, and time away from work.',
    ],
    highlights: [
      'Flat fee: $35',
      'Where: Anywhere in the U.S.',
      'Includes identity verification, notarization, and secure digital delivery',
    ],
  },
  {
    title: 'Mobile Notary',
    body: [
      'In-person notarization appointments are typically conducted at public or professional locations to ensure a smooth and secure signing experience.',
    ],
    highlights: [
      'Service area: Mobile service is available within a 5-mile radius',
      'Base fee: $25 within 5 miles',
      'Ideal for signers without internet access, witnesses, or multiple parties',
    ],
  },
  {
    title: 'Document Prep & Organization',
    body: ['Professional document preparation services to help ensure everything is in order before signing.'],
    highlights: [
      'Document Prep (non-legal): $5 per page',
      'Page Re-Ordering & Organizing: $5-$10 per set',
      'Secure Document Sleeve: $3',
    ],
  },
  {
    title: 'Electronic Signature Assistance (Non-Notarized)',
    body: [
      'Assistance uploading and completing electronic signatures for documents that do not require notarization.',
    ],
    highlights: [
      '$25 per document',
      'Uploading the document to an e-signature platform',
      'Guiding the signer through the signing process',
      'Ensuring all required signature fields are completed',
    ],
    note: 'This service does not include notarization. Documents requiring notarization must be completed in person or through an approved RON platform.',
  },
  {
    title: 'Agreement / Contract Signing',
    body: ['Standard notarizations for agreements and contracts. Multi-party or complex documents are welcome.'],
    highlights: ['RON: $35', 'In-person: $25', 'After-hours: +$30', 'Emergency: +$50'],
  },
  {
    title: 'Deposit & No-Show Policy',
    body: ['To respect everyone\'s time and support reliable scheduling, deposits are required for certain bookings.'],
    bulletPoints: [
      'Mobile appointments require a 50% reservation deposit to secure your time and travel.',
      'Deposits are non-refundable if you cancel within 12 hours or no-show.',
      'No-shows forfeit the deposit and may require full prepay for future bookings.',
      'Reschedules are allowed once with 12+ hours notice and the deposit transfers.',
    ],
    closing: 'Documented emergencies are considered case-by-case.',
  },
  {
    title: 'Booking & Scheduling Tips',
    body: ['A few simple guidelines help the appointment stay smooth and efficient.'],
    bulletPoints: [
      'Best times to book: 10 AM - 2 PM for standard rates.',
      'After-hours and weekends: Higher fees apply and availability is limited.',
      'Have documents ready and IDs valid before the appointment.',
      'Witnesses for in-person notarizations must be provided by the signer when applicable.',
      'Location limits: Travel stays within 5 miles; beyond that, RON is usually preferred when allowed.',
    ],
    closing: 'If you are unsure which option fits your situation, reach out and I will guide you.',
  },
];

function Services({ onNavigate }: ServicesProps) {
  const gold = '#d4af37';
  const goldSoft = '#e8d5a3';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Services"
      subtitle="How I can help with your notary needs"
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
              onClick={() => onNavigate('prices')}
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
            <button
              onClick={() => onNavigate('hire')}
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
              Hire an Agent
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
              How I Can Help
            </button>
          </div>
        </section>

        {serviceSections.map((section) => (
          <section
            className="info-hover-card"
            key={section.title}
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
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '1.08rem',
                fontFamily: "'Cinzel', serif",
              }}
            >
              {section.title}
            </h2>

            {section.eyebrow ? (
              <p
                style={{
                  margin: '0 0 12px',
                  color: goldSoft,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.56rem',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                }}
              >
                {section.eyebrow}
              </p>
            ) : null}

            {section.body.map((paragraph) => (
              <p
                key={paragraph}
                style={{
                  margin: '0 0 12px',
                  color: '#d5d0c8',
                  lineHeight: 1.75,
                  maxWidth: '58ch',
                  marginInline: 'auto',
                }}
              >
                {paragraph}
              </p>
            ))}

            {section.bulletPoints?.length ? (
              <ul
                style={{
                  margin: '6px auto 0',
                  paddingLeft: '20px',
                  color: '#beb7aa',
                  lineHeight: 1.7,
                  maxWidth: '60ch',
                  textAlign: 'left',
                }}
              >
                {section.bulletPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            {section.highlights?.length ? (
              <ul
                style={{
                  margin: '6px auto 0',
                  paddingLeft: '20px',
                  color: '#beb7aa',
                  lineHeight: 1.7,
                  maxWidth: '60ch',
                  textAlign: 'left',
                }}
              >
                {section.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            {section.closing ? (
              <p
                style={{
                  margin: '12px auto 0',
                  color: '#b9b2a5',
                  lineHeight: 1.7,
                  maxWidth: '58ch',
                }}
              >
                {section.closing}
              </p>
            ) : null}

            {section.note ? (
              <p
                style={{
                  margin: '14px auto 0',
                  color: '#a49d90',
                  lineHeight: 1.65,
                  maxWidth: '58ch',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                }}
              >
                {section.note}
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </NotaryFrame>
  );
}

export default Services;
