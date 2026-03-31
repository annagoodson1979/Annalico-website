import NotaryFrame from '../components/NotaryFrame';

const portraitImage = '/images/aboutme.jpg';

interface AboutProps {
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

function About({ onNavigate }: AboutProps) {
  const gold = '#d4af37';

  return (
    <NotaryFrame
      onNavigate={onNavigate}
      title="About Me"
      subtitle="Professional, polished notarization with a calm client experience"
      backTo="home"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.82fr 1.18fr',
          gap: '22px',
          alignItems: 'stretch',
        }}
      >
        <section
          style={{
            padding: '8px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={portraitImage}
            alt="Anna-Li"
            style={{
              width: '100%',
              maxWidth: '320px',
              borderRadius: '14px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </section>

        <section
          style={{
            display: 'grid',
            gap: '18px',
          }}
        >
          <div
            style={{
              padding: '10px 0 18px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p style={{ margin: '0 0 12px', color: gold, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Approach
            </p>
            <p style={{ margin: 0, color: '#ddd', lineHeight: 1.9 }}>
              My work is built around clarity, presentation, and trust. Clients often need more
              than a stamp, they need a signing experience that feels organized, patient, and
              professional from start to finish.
            </p>
          </div>

          <div
            style={{
              padding: '10px 0 18px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p style={{ margin: '0 0 12px', color: gold, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Credentials
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#cfc8bd', lineHeight: 1.9 }}>
              <li>Mobile, remote, and IPEN-ready service</li>
              <li>Professional presentation for business and personal signings</li>
              <li>Careful handling of estate, legal, and real-estate documents</li>
              <li>Flexible support for high-trust document appointments</li>
            </ul>
          </div>
        </section>
      </div>
    </NotaryFrame>
  );
}

export default About;
