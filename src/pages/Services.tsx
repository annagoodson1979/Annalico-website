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

type FeatureGroup = {
  label: string;
  examples: string[];
};

type PackageFeature = string | FeatureGroup;

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
    title: 'Hire a Signing Agent',
    body: [
      'Signing agent support is available for lender, title, escrow, and real-estate document packages that require a guided signing experience.',
      'This service focuses on accurate document presentation, complete signatures and initials, notarizations where required, and smooth return handling.',
    ],
    highlights: [
      'Best for refinance, purchase, seller, HELOC, and lender-directed signing packages',
      'Includes signer guidance through the package, scanback coordination when requested, and return readiness',
      'Pricing varies by package size, print requirements, scanbacks, timing, and travel',
      'Lender and title clients can use the Work With Me page to request intake and pricing',
    ],
    note: 'For signing-agent assignments, final pricing is confirmed once file details, delivery requirements, and travel needs are reviewed.',
  },
  {
    title: 'Deposit & No-Show Policy',
    body: [
      'To protect my time and ensure commitment, deposits are required for certain bookings.',
      'Mobile appointments require a 50% reservation deposit to secure your time and travel.',
    ],
    highlights: [
      'Deposits are non-refundable if you cancel within 12 hours or no-show',
      'No-shows forfeit the deposit and may require full prepay for future bookings',
      'Reschedules are allowed once with 12+ hours notice and the deposit transfers',
      'Documented emergencies are considered case-by-case',
    ],
  },
  {
    title: 'Booking & Scheduling Tips',
    body: ['A few simple guidelines help the appointment stay smooth and efficient.'],
    highlights: [
      'Best times to book: 10 AM - 2 PM for standard rates',
      'After-hours and weekends: Higher fees apply and availability is limited',
      'Have documents ready and IDs valid before the appointment',
      'Witnesses for in-person notarizations must be provided by the signer when applicable',
      'Location limits: Travel stays within 5 miles; beyond that, RON is usually preferred when allowed',
    ],
  },
];

const pricingColumns = [
  {
    title: 'Notary Services',
    items: ['RON (Online): $35', 'Mobile (In-person): $25', 'After-hours: +$30', 'Emergency: +$50'],
  },
  {
    title: 'Document Services',
    items: ['Document Prep: $5/page', 'Page Re-ordering: $5-$10', 'Secure Sleeve: $3', 'E-signature assistance: $25/document'],
  },
];

const presentationPackages: Array<{
  name: string;
  price: string;
  accent: string;
  badge?: string;
  featured?: boolean;
  features: PackageFeature[];
  note: string;
}> = [
  {
    name: 'Signing Certificate',
    price: '$9',
    accent: '#d4af37',
    features: ['Official Signing Certificate', 'Professional presentation'],
    note: 'Best for: clear documentation without extras.',
  },
  {
    name: 'Presentation Upgrade',
    price: '$15',
    accent: '#d4af37',
    features: [
      'Signing Certificate',
      {
        label: 'Signature Accent',
        examples: ['Ribbon Accent Wrap', 'Embossed Seal (gold or blind)'],
      },
    ],
    note: 'Best for: adding a refined, professional touch.',
  },
  {
    name: 'Enhanced Presentation',
    price: '$19',
    accent: '#d4af37',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Signing Certificate',
      'Linen presentation folder',
      { label: 'Signature Accent', examples: ['Ribbon Accent Wrap', 'Embossed Seal'] },
      { label: 'Personalized Detail', examples: ['Foil-Stamped Initials', 'Wax Seal'] },
    ],
    note: 'Best for: a presentation that feels important and personal.',
  },
  {
    name: 'The Seal & Stamp Experience',
    price: '$24',
    accent: '#e5c76b',
    features: [
      'Signing Certificate',
      'Linen presentation folder',
      'Personalized leather keepsake folder',
      { label: 'Signature Accent', examples: ['Ribbon Accent Wrap', 'Embossed Seal'] },
      { label: 'Personalized Detail', examples: ['Foil-Stamped Initials', 'Wax Seal'] },
    ],
    note: 'Best for: preserving an important life milestone with lasting elegance.',
  },
];

const packageComparison = [
  { feature: 'Signing Certificate', values: ['Included', 'Included', 'Included', 'Included'] },
  { feature: 'Signature Accent', values: ['-', 'Choose 1', 'Choose 1', 'All'] },
  { feature: 'Linen Presentation Folder', values: ['-', '-', 'Included', 'Included'] },
  { feature: 'Personalized Detail', values: ['-', '-', 'Choose 1', 'All'] },
  { feature: 'Leather Keepsake Folder', values: ['-', '-', '-', 'Included'] },
];

function renderFeature(feature: PackageFeature) {
  if (typeof feature === 'string') {
    return <div key={feature}>{feature}</div>;
  }

  return (
    <div key={feature.label} style={{ marginTop: '2px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '98px 1fr',
          gap: '10px',
          alignItems: 'start',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            color: '#d4af37',
            fontSize: '0.76rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: 1.15,
          }}
        >
          {feature.label}
        </span>
        <div style={{ display: 'grid', gap: '4px', color: '#f1ece2', letterSpacing: '0.45px' }}>
          {feature.examples.map((example) => (
            <div key={example} style={{ position: 'relative', paddingLeft: '14px' }}>
              <span style={{ position: 'absolute', left: 0, color: '#d4af37' }}>*</span>
              {example}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      <div style={{ display: 'grid', gap: '18px', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
        {serviceSections.map((section) => (
          <section
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

            <div
              style={{
                display: 'grid',
                gap: '4px',
                color: '#beb7aa',
                lineHeight: 1.7,
                maxWidth: '60ch',
                margin: '0 auto',
              }}
            >
              {section.highlights.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

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

        <section
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
              margin: '0 0 18px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.08rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            Pricing Overview
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px',
            }}
          >
            {pricingColumns.map((column) => (
              <div
                key={column.title}
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.18)',
                  borderRadius: '14px',
                  padding: '20px 16px',
                  background: 'rgba(8,8,8,0.5)',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 12px',
                    color: goldSoft,
                    fontWeight: 500,
                    letterSpacing: '1.4px',
                    textTransform: 'uppercase',
                    fontSize: '0.84rem',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {column.title}
                </h3>
                <div style={{ display: 'grid', gap: '5px', color: '#d5d0c8', lineHeight: 1.7 }}>
                  {column.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
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
              margin: '0 0 8px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.08rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            Presentation Packages
          </h2>
          <p
            style={{
              margin: '0 0 22px',
              color: '#a9a294',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            Enhance your signing with a presentation style that fits the moment.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '20px',
              alignItems: 'stretch',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            {presentationPackages.map((pkg) => (
              <div
                key={pkg.name}
                style={{
                  border: pkg.featured ? `2px solid ${gold}` : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '20px 18px',
                  background: pkg.featured ? 'rgba(17,17,17,0.92)' : 'rgba(10,10,10,0.65)',
                  boxShadow: pkg.featured ? '0 0 24px rgba(212, 175, 55, 0.12)' : 'none',
                  textAlign: 'left',
                }}
              >
                {pkg.badge ? (
                  <span
                    style={{
                      display: 'inline-block',
                      background: gold,
                      color: '#000',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.68rem',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {pkg.badge}
                  </span>
                ) : null}

                <h3
                  style={{
                    margin: '0 0 8px',
                    color: pkg.accent,
                    fontWeight: 500,
                    letterSpacing: '1.4px',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    fontFamily: "'Cinzel', serif",
                    textAlign: 'center',
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  style={{
                    margin: '0 0 14px',
                    textAlign: 'center',
                    color: gold,
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {pkg.price}
                </p>

                <div style={{ display: 'grid', gap: '7px', color: '#c8c1b5', lineHeight: 1.6 }}>
                  {pkg.features.map(renderFeature)}
                </div>

                <p
                  style={{
                    margin: '14px 0 0',
                    color: '#8e8778',
                    fontStyle: 'italic',
                    lineHeight: 1.55,
                    fontSize: '0.92rem',
                  }}
                >
                  {pkg.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
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
              margin: '0 0 8px',
              color: gold,
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.08rem',
              fontFamily: "'Cinzel', serif",
            }}
          >
            Package Feature Comparison
          </h2>
          <p
            style={{
              margin: '0 0 20px',
              color: '#a9a294',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            See what is included in each presentation package.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <div
              style={{
                minWidth: '720px',
                display: 'grid',
                gridTemplateColumns: '1.5fr repeat(4, 1fr)',
                gap: '1px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <div style={{ background: '#111', padding: '14px 10px', color: '#888', fontSize: '0.78rem' }}>
                Feature
              </div>
              {presentationPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  style={{
                    background: '#111',
                    padding: '14px 10px',
                    textAlign: 'center',
                    color: pkg.accent,
                    fontSize: '0.76rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  {pkg.name}
                </div>
              ))}

              {packageComparison.map((row) => (
                <React.Fragment key={row.feature}>
                  <div
                    style={{
                      background: '#0a0a0a',
                      padding: '12px 10px',
                      color: '#a8a293',
                      fontSize: '0.82rem',
                      textAlign: 'left',
                    }}
                  >
                    {row.feature}
                  </div>
                  {row.values.map((value, index) => (
                    <div
                      key={`${row.feature}-${index}`}
                      style={{
                        background: '#0a0a0a',
                        padding: '12px 10px',
                        color: value === '-' ? '#5c584f' : '#d7d1c4',
                        fontSize: '0.82rem',
                        textAlign: 'center',
                      }}
                    >
                      {value}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            style={{
              margin: '14px 0 0',
              color: '#8e8778',
              fontSize: '0.9rem',
              lineHeight: 1.6,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                alignItems: 'start',
                maxWidth: '620px',
                margin: '0 auto',
                textAlign: 'left',
                paddingLeft: '28px',
              }}
            >
              <div>
                <div
                  style={{
                    color: '#d4af37',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    lineHeight: 1.15,
                    marginBottom: '4px',
                  }}
                >
                  Signature Accent
                </div>
                <div style={{ color: '#f1ece2', letterSpacing: '0.45px', display: 'grid', gap: '2px' }}>
                  <div>* Ribbon Wrap</div>
                  <div>* Embossed Seal</div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    color: '#d4af37',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    lineHeight: 1.15,
                    marginBottom: '4px',
                  }}
                >
                  Personalized Detail
                </div>
                <div style={{ color: '#f1ece2', letterSpacing: '0.45px', display: 'grid', gap: '2px' }}>
                  <div>* Foil-Stamped Initials</div>
                  <div>* Wax Seal</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default Services;
