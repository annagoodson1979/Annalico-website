import NotaryFrame from '../components/NotaryFrame';

interface HireProps {
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

function Hire({ onNavigate }: HireProps) {
  const gold = '#d4af37';
  const paper = '#f2efe8';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Work With Me"
      subtitle="Choose the path that fits your appointment, signing order, or intake request"
      backTo="home"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '24px',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <section
          style={{
            padding: '26px 24px 24px',
            border: '1px solid rgba(212, 175, 55, 0.16)',
            borderRadius: '22px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: '0 0 12px',
              color: gold,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            For Clients
          </p>
          <h3
            style={{
              margin: '0 0 14px',
              color: paper,
              fontFamily: "'Cinzel', serif",
              fontSize: '1.45rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Book Notary Service
          </h3>
          <p style={{ margin: '0 0 20px', color: '#ddd', lineHeight: 1.85 }}>
            Mobile, remote, and electronic notarization for personal, legal, business, and
            everyday documents. Reach out to schedule an appointment or ask a question before we
            begin.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: gold,
              background: 'transparent',
              border: `1px solid ${gold}`,
              borderRadius: '999px',
              padding: '12px 20px',
              cursor: 'pointer',
            }}
          >
            Contact for Appointment
          </button>
        </section>

        <section
          style={{
            padding: '26px 24px 24px',
            border: '1px solid rgba(212, 175, 55, 0.16)',
            borderRadius: '22px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: '0 0 12px',
              color: gold,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            For Lenders
          </p>
          <h3
            style={{
              margin: '0 0 14px',
              color: paper,
              fontFamily: "'Cinzel', serif",
              fontSize: '1.45rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Intake & Signing Requests
          </h3>
          <p style={{ margin: '0 0 20px', color: '#ddd', lineHeight: 1.85 }}>
            For lender, title, escrow, and signing-service assignments. Open the intake form to
            document signing instructions, correction policy, package handling, and return
            expectations.
          </p>
          <a
            href="/notary-intake-form.html"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: gold,
              background: 'transparent',
              border: `1px solid ${gold}`,
              borderRadius: '999px',
              padding: '12px 20px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Open Lender Intake Form
          </a>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default Hire;
