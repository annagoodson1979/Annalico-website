import type { CSSProperties } from 'react';
import type { Page } from '../types';
import NotaryFrame from '../components/NotaryFrame';

interface DocumentsProps {
  onNavigate: (page: Page) => void;
}

const documentGroups = [
  {
    title: 'Public Services',
    note: '(General Notarization)',
    items: [
      'Acknowledgement',
      'Jurats',
      'Oaths & Affirmations',
      'Sworn Statements',
      'Affidavits (general & specific)',
      'Identity Verification Forms',
      'Proof of Residency',
      'Parental Consent Forms',
      'Travel Consent for Minors',
      'School Enrollment Documents',
      'Medical Authorization for Minors',
      'DMV Forms & Vehicle Title Transfer',
      'VIN Verifications',
      'Employment Verification',
      'I-9 Employee Forms (as authorized rep)',
      'Certifications of Copy (where allowed)',
      'Single Page Notarizations',
      'Business/Workplace Forms',
      'Name Change/Correction Forms',
      'Statement of Experience or Knowledge',
      'Lease Agreements & Housing Documents',
      'Apartment Move-In/Out Forms',
      'Insurance Claims',
      'Contractor Agreements',
      'Small Business Documents',
      'Letters of Explanation',
    ],
  },
  {
    title: 'Legal & Estate Planning',
    note: '(Not legal advice - notarization only)',
    items: [
      'Power of Attorney (POA)',
      'Durable / Financial POA',
      'Medical Power of Attorney',
      'Living Wills / Advance Directives',
      'Last Will & Testament with witness coordination',
      'Trust Documents',
      'Probate Forms',
      'Guardianship / Conservatorship Forms',
      'Estate Transfer Affidavits',
      'Declarations & Sworn Testimonies',
      'Attorney Prepared Documents',
    ],
    extraTitle: 'Healthcare Related',
    extraNote: '(Medical & Care Authorization)',
    extraItems: [
      'Medical POA',
      'HIPAA Authorization',
      'Physician Directives',
      'Caregiver Authorization',
      'Nursing Home/Facility Forms',
      'Hospital bedside notarization (mobile)',
    ],
    footerNote: '(Clients must provide witness if required - available upon request)',
  },
  {
    title: 'Loan Signing Services',
    note: '(Real Estate Closing & Documents)',
    items: [
      'Buyer/Seller Closing Packages',
      'Refinance',
      'Loan Modification Agreements',
      'Reverse Mortgage Signings',
      'VA/FHA Loan Documents',
      'Loan Application Packages',
      'Deed of Trust',
      'Grant / Warranty / Quitclaim Deeds',
      'Subordination Agreements',
      'Escrow & Settlement Forms',
      'Occupancy Affidavits',
      '1003 Loan Application Form',
      'Closing Disclosures',
      'HELOC - may require attorney present depending on lender/state',
      'Hybrid Signings (electronic + wet)',
      'In-office, mobile, or remote',
    ],
  },
  {
    title: 'Business & Corporate',
    note: '(Commercial & Workplace Documents)',
    items: [
      'Contracts & Agreements',
      'Vendor / Client Papers',
      'Compliance Documentation',
      'Employment / HR Docs',
      'Board Resolutions',
      'Articles of Incorporation',
      'Partnership & Operating Agreements',
      'Business Licensing Forms',
      'Corporate Statements',
      'Financial Authorization Forms',
    ],
    extraTitle: 'IPEN',
    extraNote: 'In-Person Electronic Notarization',
    footerNote: '(Electronic signing while physically present with the signer)',
    extraItems: [
      'Same documents as general notary',
      'Clients sign electronically instead of ink',
      'Paperless experience for modern signers',
      'Faster signing with no scanning or printing',
      'Great for businesses, hospitals, and offices',
      'ADA-friendly and streamlined',
    ],
  },
];

function Documents({ onNavigate }: DocumentsProps) {
  const gold = '#d4af37';

  const cardStyle: CSSProperties = {
    padding: '20px',
    background: 'transparent',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    textAlign: 'center',
    breakInside: 'avoid',
    marginBottom: '18px',
  };

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Documents I Sign"
      subtitle="Four core categories with specialty document support"
      maxWidth="960px"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr)',
          gap: '0',
          alignItems: 'start',
        }}
      >
        <div
          style={{
            columnCount: 2,
            columnGap: '32px',
          }}
        >
          {documentGroups.map((group) => (
            <section key={group.title} style={cardStyle}>
              <h2
                style={{
                  margin: '0 0 8px',
                  color: gold,
                  fontWeight: 300,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                }}
              >
                {group.title}
              </h2>

              {group.note ? (
                <p
                  style={{
                    margin: '0 0 12px',
                    color: '#b7b0a7',
                    fontSize: '0.78rem',
                    fontStyle: 'italic',
                    textTransform: 'none',
                  }}
                >
                  {group.note}
                </p>
              ) : null}

              <ul
                style={{
                  margin: 0,
                  paddingLeft: 0,
                  color: '#f0ece4',
                  lineHeight: 1.62,
                  fontSize: '0.92rem',
                  display: 'grid',
                  gap: '4px',
                  listStyle: 'none',
                }}
              >
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {group.footerNote ? (
                <p
                  style={{
                    margin: '12px 0 0',
                    color: '#b3aca3',
                    fontSize: '0.75rem',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {group.footerNote}
                </p>
              ) : null}

              {group.extraTitle ? (
                <>
                  <h3
                    style={{
                      margin: '18px 0 8px',
                      color: gold,
                      fontWeight: 300,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontSize: '0.9rem',
                    }}
                  >
                    {group.extraTitle}
                  </h3>

                  {group.extraNote ? (
                    <p
                      style={{
                        margin: '0 0 10px',
                        color: '#b7b0a7',
                        fontSize: '0.78rem',
                        fontStyle: 'italic',
                      }}
                    >
                      {group.extraNote}
                    </p>
                  ) : null}

                  {group.extraItems ? (
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 0,
                        color: '#f0ece4',
                        lineHeight: 1.62,
                        fontSize: '0.9rem',
                        display: 'grid',
                        gap: '4px',
                        listStyle: 'none',
                      }}
                    >
                      {group.extraItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : null}
            </section>
          ))}

          <section
            style={{
              ...cardStyle,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '22px',
            }}
          >
            <h2
              style={{
                margin: '0 0 10px',
                color: gold,
                fontWeight: 300,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.95rem',
              }}
            >
              Not Seeing Your Document?
            </h2>
            <p
              style={{
                margin: 0,
                color: '#f0ece4',
                lineHeight: 1.7,
                fontSize: '0.92rem',
              }}
            >
              If your document is not listed here, reach out. Many additional legal, business,
              estate, and personal documents can still be notarized with the right preparation.
            </p>
          </section>
        </div>
      </div>
    </NotaryFrame>
  );
}

export default Documents;
