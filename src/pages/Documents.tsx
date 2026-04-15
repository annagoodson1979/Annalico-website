import { useState } from 'react';
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

const cannotBeCertifiedExamples = [
  'Birth certificates',
  'Death certificates',
  'Marriage certificates',
  'Court records or filed documents',
  'Judgments or legal filings',
  'Recorded property documents (deeds, titles)',
  'Official government-issued documents (such as passports or immigration records)',
];

const canBeCertifiedExamples = [
  'Contracts and agreements',
  'Business records and internal documents',
  'Invoices and receipts',
  'Letters and written statements',
  'Printed emails or correspondence',
  'Personal records and documents',
  'Training materials or course certificates (non-official)',
  'Photographs',
  'Copies of identification (for reference purposes only)',
];

const documentHints: Record<string, string> = {
  Acknowledgement: 'You confirm the signature is yours and that you signed willingly.',
  Jurats: 'You sign in front of the notary and swear the statement is true.',
  'Certifications of Copy (where allowed)':
    'The notary notarizes your sworn statement that the copy is true and correct.',
  'HELOC - may require attorney present depending on lender/state':
    'Some lenders or state rules require attorney involvement before signing.',
  'I-9 Employee Forms (as authorized rep)':
    'This is not a notarial act; it is completed only when allowed as an authorized representative.',
};

function Documents({ onNavigate }: DocumentsProps) {
  const gold = '#d4af37';
  const docTextSize = '1.12rem';
  const [activeView, setActiveView] = useState<'sign' | 'dont-sign'>('sign');

  const cardStyle: CSSProperties = {
    padding: '20px',
    background: 'transparent',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    textAlign: 'center',
    breakInside: 'avoid',
    marginBottom: '18px',
  };

  const renderDocumentItem = (item: string) => {
    const hint = documentHints[item];
    if (!hint) return item;

    return (
      <>
        {item}{' '}
        <span
          title={hint}
          aria-label={hint}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            border: '1px solid rgba(212, 175, 55, 0.65)',
            color: gold,
            fontSize: '0.74rem',
            lineHeight: 1,
            cursor: 'help',
            transform: 'translateY(-1px)',
          }}
        >
          ?
        </span>
      </>
    );
  };

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Documents"
      subtitle="What I can notarize and what I cannot notarize"
      maxWidth="960px"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '18px',
        }}
      >
        <button
          onClick={() => setActiveView('sign')}
          style={{
            border: 'none',
            background: 'transparent',
            color: activeView === 'sign' ? gold : '#b7b0a7',
            fontSize: docTextSize,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            textDecoration: activeView === 'sign' ? 'underline' : 'none',
          }}
        >
          Documents I Sign
        </button>
        <span style={{ color: '#716a61' }}>|</span>
        <button
          onClick={() => setActiveView('dont-sign')}
          style={{
            border: 'none',
            background: 'transparent',
            color: activeView === 'dont-sign' ? gold : '#b7b0a7',
            fontSize: docTextSize,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            textDecoration: activeView === 'dont-sign' ? 'underline' : 'none',
          }}
        >
          Documents I Don&apos;t Sign
        </button>
      </div>

      {activeView === 'sign' ? (
        <>
          <p
            style={{
              margin: '0 0 20px',
              color: '#f0ece4',
              lineHeight: 1.65,
              fontSize: docTextSize,
              textAlign: 'center',
            }}
          >
            We provide notarization for acknowledgments, jurats, and sworn statements, as well as
            Copy Certification by Document Custodian for personal and business documents.
          </p>

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
                <section key={group.title} className="info-hover-card" style={cardStyle}>
                  <h2
                    style={{
                      margin: '0 0 8px',
                      color: gold,
                      fontWeight: 300,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontSize: docTextSize,
                    }}
                  >
                    {group.title}
                  </h2>

                  {group.note ? (
                    <p
                      style={{
                        margin: '0 0 12px',
                        color: '#b7b0a7',
                        fontSize: docTextSize,
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
                      fontSize: docTextSize,
                      display: 'grid',
                      gap: '4px',
                      listStyle: 'none',
                    }}
                    >
                      {group.items.map((item) => (
                      <li key={item}>{renderDocumentItem(item)}</li>
                    ))}
                  </ul>

                  {group.footerNote ? (
                    <p
                      style={{
                        margin: '12px 0 0',
                        color: '#b3aca3',
                        fontSize: docTextSize,
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
                          fontSize: docTextSize,
                        }}
                      >
                        {group.extraTitle}
                      </h3>

                      {group.extraNote ? (
                        <p
                          style={{
                            margin: '0 0 10px',
                            color: '#b7b0a7',
                            fontSize: docTextSize,
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
                            fontSize: docTextSize,
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
                className="info-hover-card"
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
                    fontSize: docTextSize,
                  }}
                >
                  Not Seeing Your Document?
                </h2>
                <p
                  style={{
                    margin: 0,
                    color: '#f0ece4',
                    lineHeight: 1.7,
                    fontSize: docTextSize,
                  }}
                >
                  If your document is not listed here, reach out. Many additional legal, business,
                  estate, and personal documents can still be notarized with the right preparation.
                </p>
                <button
                  onClick={() => setActiveView('dont-sign')}
                  style={{
                    marginTop: '14px',
                    border: 'none',
                    background: 'transparent',
                    color: gold,
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontSize: docTextSize,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  View Documents I Don&apos;t Sign
                </button>
              </section>
            </div>
          </div>
        </>
      ) : (
        <section
          className="info-hover-card"
          style={{
            ...cardStyle,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '22px',
          }}
        >
          <h2
            style={{
              margin: '0 0 8px',
              color: gold,
              fontWeight: 300,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: docTextSize,
            }}
          >
            Documents I Don&apos;t Sign
          </h2>
          <p
            style={{
              margin: '0 0 10px',
              color: '#b7b0a7',
              fontSize: docTextSize,
              fontStyle: 'italic',
            }}
          >
            For safety, compliance, and legal boundaries.
          </p>
          <p
            style={{
              margin: '0 0 10px',
              color: '#f0ece4',
              lineHeight: 1.65,
              fontSize: docTextSize,
            }}
          >
            Please note: a notary does not certify the document itself, but notarizes your
            statement that the copy is true and correct.
          </p>
          <p
            style={{
              margin: '0 0 10px',
              color: '#f0ece4',
              lineHeight: 1.65,
              fontSize: docTextSize,
            }}
          >
            We cannot notarize or certify vital records (such as birth, death, or marriage
            certificates), court documents, or government-issued records. These must be obtained
            directly from the issuing agency.
          </p>
          <p
            style={{
              margin: '0 0 12px',
              color: '#f0ece4',
              lineHeight: 1.65,
              fontSize: docTextSize,
            }}
          >
            Not sure if your document qualifies? Contact us and we&apos;ll guide you to the correct
            and legal option.
          </p>

          <h3
            style={{
              margin: '14px 0 8px',
              color: gold,
              fontWeight: 300,
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              fontSize: docTextSize,
            }}
          >
            Examples of Documents That Cannot Be Certified by a Notary
          </h3>
          <ul
            style={{
              margin: '0 0 10px',
              paddingLeft: 0,
              color: '#f0ece4',
              lineHeight: 1.62,
              fontSize: docTextSize,
              display: 'grid',
              gap: '4px',
              listStyle: 'none',
            }}
          >
            {cannotBeCertifiedExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p
            style={{
              margin: '0 0 10px',
              color: '#b7b0a7',
              fontSize: docTextSize,
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            These documents must be certified by the issuing agency, court, or appropriate
            government office.
          </p>

          <h3
            style={{
              margin: '16px 0 8px',
              color: gold,
              fontWeight: 300,
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              fontSize: docTextSize,
            }}
          >
            Examples of Documents That Can Be Certified (via Copy Certification Affidavit)
          </h3>
          <ul
            style={{
              margin: 0,
              paddingLeft: 0,
              color: '#f0ece4',
              lineHeight: 1.62,
              fontSize: docTextSize,
              display: 'grid',
              gap: '4px',
              listStyle: 'none',
            }}
          >
            {canBeCertifiedExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p
            style={{
              margin: '10px 0 0',
              color: '#b7b0a7',
              fontSize: docTextSize,
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            These are certified through your sworn statement that the copy is true and correct, not
            by the notary verifying the original document.
          </p>
          <button
            onClick={() => setActiveView('sign')}
            style={{
              marginTop: '14px',
              border: 'none',
              background: 'transparent',
              color: gold,
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: docTextSize,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            View Documents I Sign
          </button>
        </section>
      )}
    </NotaryFrame>
  );
}

export default Documents;
