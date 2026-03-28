import React from 'react';

const logoImage = '/images/logo.jpg';

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
      | 'documents',
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
  const panel = '#111';
  const panelAlt = '#0a0a0a';
  const border = '#222';

  const styles: Record<string, React.CSSProperties> = {
    container: {
      minHeight: '100vh',
      background: '#000000',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Montserrat', sans-serif",
    },
    navbar: {
      background: '#000',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      padding: '15px 24px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      flexWrap: 'wrap',
      borderBottom: '1px solid #111',
    },
    brandWrap: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginRight: '12px',
    },
    logo: {
      width: '48px',
      height: '48px',
      objectFit: 'cover',
      borderRadius: '50%',
      cursor: 'pointer',
      border: `1px solid ${border}`,
    },
    brandButton: {
      color: '#ffffff',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '1px',
      padding: 0,
    },
    navButton: {
      color: '#aaa',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.8rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      padding: 0,
    },
    header: {
      background:
        'radial-gradient(circle at top, rgba(212, 175, 55, 0.12), transparent 45%), #000',
      color: '#ffffff',
      padding: '72px 20px 52px',
      textAlign: 'center',
      borderBottom: '1px solid #111',
    },
    headerTitle: {
      fontSize: '2.5rem',
      margin: '0 0 10px',
      lineHeight: 1.1,
      fontWeight: 200,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      color: gold,
      textShadow: '0 0 18px rgba(212, 175, 55, 0.25)',
    },
    headerText: {
      margin: 0,
      fontSize: '1.05rem',
      color: '#9a9a9a',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    content: {
      width: '100%',
      maxWidth: '860px',
      margin: '0 auto',
      padding: '40px 20px 60px',
      boxSizing: 'border-box',
    },
    service: {
      background: `linear-gradient(180deg, ${panel} 0%, ${panelAlt} 100%)`,
      padding: '24px',
      margin: '0 0 22px',
      borderRadius: '6px',
      boxShadow: '0 10px 24px rgba(0, 0, 0, 0.2)',
      border: `1px solid ${border}`,
    },
    serviceTitle: {
      marginTop: 0,
      marginBottom: '10px',
      color: gold,
      fontSize: '1.45rem',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    serviceText: {
      marginTop: 0,
      color: '#c8c8c8',
      lineHeight: 1.8,
    },
    list: {
      margin: '14px 0',
      paddingLeft: '20px',
      color: '#a8a8a8',
      lineHeight: 1.9,
    },
    price: {
      color: goldSoft,
      fontWeight: 700,
      fontSize: '1.1rem',
      marginBottom: 0,
      letterSpacing: '0.5px',
    },
    detailSection: {
      marginTop: '30px',
      paddingTop: '10px',
    },
    detailTitle: {
      color: gold,
      fontSize: '2rem',
      marginBottom: '20px',
      textAlign: 'center',
      fontWeight: 300,
      letterSpacing: '4px',
      textTransform: 'uppercase',
    },
    detailCard: {
      border: `1px solid ${border}`,
      borderRadius: '6px',
      padding: '24px',
      marginBottom: '18px',
      background: '#050505',
    },
    detailHeading: {
      color: gold,
      marginTop: 0,
      marginBottom: '10px',
      fontWeight: 300,
      letterSpacing: '1px',
    },
    footer: {
      background: '#000',
      color: gold,
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto',
      borderTop: '1px solid #111',
    },
    footerText: {
      margin: 0,
      color: '#d2d2d2',
      letterSpacing: '1px',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.brandWrap}>
          <img
            src={logoImage}
            alt="Seal and Stamp Notary"
            style={styles.logo}
            onClick={() => onNavigate('landing')}
          />
          <button style={styles.brandButton} onClick={() => onNavigate('home')}>
            Seal and Stamp Notary
          </button>
        </div>
        <button style={styles.navButton} onClick={() => onNavigate('home')}>
          Home
        </button>
        <button style={styles.navButton} onClick={() => onNavigate('services')}>
          Services
        </button>
        <button style={styles.navButton} onClick={() => onNavigate('about')}>
          About
        </button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')}>
          Contact
        </button>
      </nav>

      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Our Services</h1>
        <p style={styles.headerText}>Professional notary solutions tailored to your needs</p>
      </header>

      <main style={styles.content}>
        {services.map((service) => (
          <section key={service.title} style={styles.service}>
            <h2 style={styles.serviceTitle}>{service.title}</h2>
            <p style={styles.serviceText}>{service.description}</p>
            <ul style={styles.list}>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={styles.price}>{service.price}</p>
          </section>
        ))}

        <section style={styles.detailSection}>
          <h2 style={styles.detailTitle}>Service Details</h2>

          <div style={styles.detailCard}>
            <h3 style={styles.detailHeading}>General Notary Services</h3>
            <p>Traditional notary services for all your document needs.</p>
            <ul style={styles.list}>
              <li>Affidavits</li>
              <li>Power of Attorney</li>
              <li>Wills and Trusts</li>
              <li>Deeds and Property Transfers</li>
            </ul>
            <p>
              <strong>Pricing:</strong> $15 per signature
            </p>
          </div>

          <div style={styles.detailCard}>
            <h3 style={styles.detailHeading}>Remote Online Notarization (RON)</h3>
            <p>Secure online notarization from anywhere.</p>
            <p>
              <strong>Pricing:</strong> $25 per notarization
            </p>
          </div>

          <div style={styles.detailCard}>
            <h3 style={styles.detailHeading}>In-Person Electronic Notarization (IPEN)</h3>
            <p>Electronic notarization with digital tools.</p>
            <p>
              <strong>Pricing:</strong> $20 per signature
            </p>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; 2024 Seal and Stamp Notary | (972) 900-7147 | anna@annalico.com
        </p>
      </footer>
    </div>
  );
}

export default Services;
