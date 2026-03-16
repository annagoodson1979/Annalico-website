interface ContactProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

function Contact({ onNavigate }: ContactProps) {
  const gold = '#d4af37';

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },
    heading: {
      fontSize: '3em',
      fontWeight: 100,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      color: gold,
    },
    text: {
      color: '#888',
      fontSize: '1.2em',
    },
    button: {
      marginTop: '30px',
      padding: '15px 30px',
      background: 'transparent',
      border: `1px solid ${gold}`,
      color: gold,
      cursor: 'pointer',
      fontSize: '14px',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact</h1>
      <p style={styles.text}>Email: anna@annalico.com</p>
      <p style={styles.text}>Phone: (972) 900-7147</p>
      <button style={styles.button} onClick={() => onNavigate('landing')}>
        Back to Home
      </button>
    </div>
  );
}

export default Contact;
