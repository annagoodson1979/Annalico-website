import NotaryFrame from '../components/NotaryFrame';

interface ContactProps {
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

function Contact({ onNavigate }: ContactProps) {
  const gold = '#d4af37';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="Contact"
      subtitle="Appointments, mobile requests, and general notary questions"
      backTo="home"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '18px',
          alignItems: 'stretch',
          maxWidth: '760px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <section
          style={{
            padding: '10px 0 18px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p style={{ margin: '0 0 10px', color: gold, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Reach Out
          </p>
          <p style={{ margin: '0 0 12px', color: '#ddd', lineHeight: 1.8 }}>
            Email:{' '}
            <a
              href="mailto:notary@annalico.com"
              style={{ color: '#ddd', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              notary@annalico.com
            </a>
          </p>
          <p style={{ margin: '0 0 12px', color: '#ddd', lineHeight: 1.8 }}>
            Phone: (972) 900-7147
          </p>
          <p style={{ margin: 0, color: '#9e9a93', lineHeight: 1.8 }}>
            Mobile appointments available for general notarizations, estate documents, business
            paperwork, and signings that need a calm, polished presence.
          </p>
        </section>

        <section
          style={{
            padding: '10px 0 18px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p style={{ margin: '0 0 10px', color: gold, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Appointment Checklist
          </p>
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#cfc8bd', lineHeight: 1.9 }}>
            <li>Have valid government-issued ID ready</li>
            <li>
              Do not sign before the appointment. If any personal information is incorrect, wait
              for guidance before making changes unless you have already been instructed to
              correct it. I want to help avoid delays and keep your signing as smooth as possible,
              whether that means getting you into your new home or on to your next destination.
            </li>
            <li>Bring all pages that need notarization or witness coordination</li>
            <li>Send location details in advance for mobile requests</li>
          </ul>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default Contact;
