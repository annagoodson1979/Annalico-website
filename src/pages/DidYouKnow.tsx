import type { Page } from '../types';
import NotaryFrame from '../components/NotaryFrame';

interface DidYouKnowProps {
  onNavigate: (page: Page) => void;
}

const definitions = [
  {
    term: 'Acknowledgment',
    meaning: 'You confirm you signed willingly and the signature is yours.',
  },
  {
    term: 'Jurat',
    meaning: 'You sign in front of the notary and swear the contents are true.',
  },
  {
    term: 'Copy Certification by Document Custodian',
    meaning: 'You swear a copy is true and correct; the notary notarizes your statement.',
  },
];

const processSteps = [
  'Bring valid government-issued ID.',
  'Wait to sign until instructed during the appointment.',
  'Confirm document type and notarial act needed.',
  'Complete signature, oath/affirmation (if required), and notarization.',
  'Receive your finalized documents and next-step guidance.',
];

const credentials = [
  'NNA Certified in both NSA (Notary Signing Agent) and RON (Remote Online Notary)',
  'Background vetted',
  'E & O Insurance (Errors and Omissions)',
  'Notary Bonded',
];

const unexpectedNotarizations = [
  {
    label: 'Love Letters',
    detail: 'Because some words deserve to last longer than a moment.',
  },
  {
    label: 'Wedding Vows',
    detail: 'Some frame them - others make them unforgettable.',
  },
  {
    label: 'Friendship Pacts',
    detail: 'Promises that outlast time deserve to be witnessed.',
  },
  {
    label: 'Family Agreements',
    detail: 'From house rules to heartfelt promises - yes, even the fun ones.',
  },
  {
    label: 'Letters from Grandparents',
    detail: 'Memories, preserved in their own words.',
  },
  {
    label: 'Notes for Children',
    detail: 'Something they can hold onto for years to come.',
  },
  {
    label: 'Letters to Your Future Self',
    detail: 'Because some moments are worth revisiting exactly as they were.',
  },
];

function DidYouKnow({ onNavigate }: DidYouKnowProps) {
  const gold = '#d4af37';
  const bodySize = '1.14rem';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Did You Know"
      subtitle="Quick answers, simple definitions, and what to expect"
      maxWidth="980px"
    >
      <style>{`
        @keyframes credentialCheckReveal {
          0% { opacity: 0; transform: scale(0.72); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div style={{ display: 'grid', gap: '16px', maxWidth: '900px', margin: '0 auto', width: '100%', fontSize: bodySize }}>
        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '22px',
          }}
        >
          <h2
            style={{
              margin: '0 0 12px',
              color: gold,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.16rem',
              textAlign: 'center',
            }}
          >
            Loan Signing Services in Texas
          </h2>
          <div style={{ display: 'grid', gap: '10px', lineHeight: 1.7, color: '#e2ddd4' }}>
            <p style={{ margin: 0, color: '#f0ebe2' }}>
              <strong>
                Did you know you can hire a Notary Signing Agent to perform loan signing services
                during real estate closings in Texas?
              </strong>
            </p>
            <p style={{ margin: 0, color: '#bbb3a7' }}>
              Ask your lender or mortgage company beforehand to allow for approval and coordinate
              the documents. Your lender will want to know:
            </p>
            <div
              style={{
                display: 'grid',
                gap: '8px',
                borderTop: '1px solid rgba(212, 175, 55, 0.18)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.18)',
                padding: '12px 0',
              }}
            >
              {credentials.map((item, idx) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    color: '#ded6c8',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      color: '#4CAF50',
                      fontWeight: 700,
                      opacity: 0,
                      animation: 'credentialCheckReveal 0.65s ease forwards',
                      animationDelay: `${idx * 1.25}s`,
                    }}
                  >
                    {'\u2713'}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <p style={{ margin: 0, color: '#f0ebe2' }}>
                <strong>Loan limitation imposed:</strong> Article XVI, Section 50(a)(6)(N) of the
                Texas Constitution protects Home Equity Line of Credit (HELOC) loans from a forced
                sale for the payment of all debts provided they are closed in the office of a
                lender, an attorney or a title company.
              </p>
              <p style={{ margin: '8px 0 0', color: '#bbb3a7' }}>
                The Texas Administrative Code clarifies that the closing must occur at the
                permanent physical address of a lender, an attorney or a title company. This
                includes an indoor office or a parking lot.
              </p>
              <p style={{ margin: '8px 0 0', color: '#bbb3a7' }}>
                Effective January 1, 2022, Texas law provides that a lien securing a wrap mortgage
                loan is void unless the wrap loan and the conveyance of residential real estate
                securing the loan is closed by an attorney or a title company.
              </p>
            </div>
          </div>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '22px',
          }}
        >
          <h2
            style={{
              margin: '0 0 12px',
              color: gold,
              letterSpacing: '2px',
              textTransform: 'none',
              fontSize: '1.16rem',
              textAlign: 'center',
            }}
          >
            Things You Didn&apos;t Know You Could Notarize
          </h2>
          <div style={{ display: 'grid', gap: '10px', lineHeight: 1.7, color: '#e2ddd4' }}>
            <p style={{ margin: 0, color: '#bbb3a7', fontStyle: 'italic' }}>
              Not everything meaningful has to be serious.
            </p>
            <p style={{ margin: 0, color: '#bbb3a7' }}>
              Sometimes, the most powerful things are the ones people never think to preserve.
            </p>
            <div
              style={{
                display: 'grid',
                gap: '8px',
                borderTop: '1px solid rgba(212, 175, 55, 0.18)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.18)',
                padding: '12px 0',
              }}
            >
              {unexpectedNotarizations.map((item) => (
                <div key={item.label}>
                  <p style={{ margin: 0, color: '#f0ebe2' }}>
                    <strong>{item.label}</strong>
                  </p>
                  <p style={{ margin: '2px 0 0', color: '#bbb3a7' }}>{item.detail}</p>
                </div>
              ))}
            </div>

            <p style={{ margin: '2px 0 0', color: '#f0ebe2' }}>
              <strong>But does this actually hold weight?</strong>
            </p>
            <p style={{ margin: 0, color: '#bbb3a7' }}>
              A notarization doesn&apos;t make something legally binding on its own - it confirms identity,
              willingness, and that the moment truly happened.
            </p>
            <p style={{ margin: 0, color: '#bbb3a7' }}>
              If your document is written as a formal agreement, it can carry legal weight. If it&apos;s something
              personal, it becomes something just as powerful in a different way - it can&apos;t be denied, questioned,
              or rewritten later.
            </p>
            <p style={{ margin: '2px 0 0', color: '#f0ebe2' }}>
              <strong>A little something to think about...</strong>
            </p>
            <p style={{ margin: 0, color: '#d8d1c6', fontStyle: 'italic' }}>
              Notarizing something doesn&apos;t make it serious... it shows you took it seriously.
            </p>
          </div>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '22px',
          }}
        >
          <h2
            style={{
              margin: '0 0 12px',
              color: gold,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.16rem',
              textAlign: 'center',
            }}
          >
            Definitions
          </h2>
          <div style={{ display: 'grid', gap: '10px', lineHeight: 1.7, color: '#e2ddd4' }}>
            {definitions.map((item) => (
              <div key={item.term}>
                <p style={{ margin: 0, color: '#f0ebe2' }}>
                  <strong>{item.term}</strong>
                </p>
                <p style={{ margin: '2px 0 0', color: '#bbb3a7' }}>{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="info-hover-card"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '22px',
          }}
        >
          <h2
            style={{
              margin: '0 0 12px',
              color: gold,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '1.16rem',
              textAlign: 'center',
            }}
          >
            Process
          </h2>
          <ol style={{ margin: 0, paddingLeft: '22px', lineHeight: 1.8, color: '#ddd7cc', fontSize: bodySize }}>
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default DidYouKnow;
