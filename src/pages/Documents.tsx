interface DocumentsProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

function Documents({ onNavigate }: DocumentsProps) {
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
      maxWidth: '600px',
      textAlign: 'center' as const,
    },
    list: {
      color: '#aaa',
      fontSize: '1em',
      lineHeight: 2,
      textAlign: 'left' as const,
      marginTop: '20px',
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

  const documents = [
    'Loan Documents',
    'Real Estate Deeds',
    'Power of Attorney',
    'Wills and Trusts',
    'Affidavits',
    'Contracts and Agreements',
    'Medical Documents',
    'Business Documents',
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Documents I Notarize</h1>
      <p style={styles.text}>I can notarize a wide variety of documents including:</p>
      <ul style={styles.list}>
        {documents.map((doc, index) => (
          <li key={index}>• {doc}</li>
        ))}
      </ul>
      <button style={styles.button} onClick={() => onNavigate('landing')}>
        Back to Home
      </button>
    </div>
  );
}

export default Documents;
