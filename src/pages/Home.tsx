const logoImage = '/images/logo.jpg';

interface HomeProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

function Home({ onNavigate }: HomeProps) {
  const gold = '#d4af37';

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column' as const,
      overflow: 'hidden',
    },
    navbar: {
      width: '100%',
      height: '60px',
      background: '#000',
      borderBottom: '1px solid #111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      position: 'fixed' as const,
      top: 0,
      left: 0,
      zIndex: 100,
      gap: '20px',
    },
    navItem: {
      position: 'relative' as const,
      height: '60px',
      display: 'flex',
      alignItems: 'center',
    },
    navButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.7em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#888',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: '0 12px',
      padding: '8px 16px',
      transform: 'scale(1) translateY(0)',
    },
    dropdown: {
      position: 'absolute' as const,
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0a0a0a',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 200,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '140px',
    },
    dropdownItem: {
      display: 'block',
      width: '100%',
      padding: '8px 20px',
      background: 'transparent',
      border: 'none',
      color: '#888',
      fontSize: '8px',
      letterSpacing: '1px',
      textTransform: 'uppercase' as const,
      cursor: 'pointer',
      textAlign: 'center' as const,
      transition: 'all 0.2s ease',
      transform: 'translateY(0)',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'calc(100vh - 60px)',
      paddingTop: '60px',
      overflow: 'hidden',
    },
    hero: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 40px 40px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: '4em',
      fontWeight: 100,
      letterSpacing: '8px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      lineHeight: 1.2,
      color: gold,
      animation: 'fadeInUp 1s ease-out forwards, pulse 10s ease-in-out infinite 1s, glow 10s ease-in-out infinite 1s',
    },
    heroSub: {
      fontSize: '1em',
      fontWeight: 100,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: '#888',
      marginBottom: '30px',
    },
    line: {
      width: '100px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      margin: '50px auto 30px',
      boxShadow: '0 0 8px rgba(212, 175, 55, 0.3)',
    },
    heroP: {
      fontSize: '1em',
      fontWeight: 300,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#fff',
      maxWidth: '600px',
    },
    btn: {
      display: 'inline-block',
      background: 'transparent',
      color: gold,
      padding: '15px 50px',
      textDecoration: 'none',
      marginTop: '40px',
      border: `1px solid ${gold}`,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      fontSize: '12px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease',
    },
    content: {
      padding: '60px 20px',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      borderTop: '1px solid #111',
      background: '#000',
    },
    sectionTitle: {
      color: gold,
      fontWeight: 300,
      letterSpacing: '4px',
      marginBottom: '20px',
      textTransform: 'uppercase' as const,
      textAlign: 'center',
      fontSize: '1.5em',
    },
    sectionText: {
      color: '#ccc',
      lineHeight: 2,
      textAlign: 'center',
      fontSize: '0.95em',
    },
    footer: {
      background: '#000',
      color: gold,
      textAlign: 'center',
      padding: '20px 15px',
      fontSize: '13px',
      letterSpacing: '1px',
      borderTop: '1px solid #111',
      marginTop: 'auto',
      whiteSpace: 'nowrap' as const,
    },
    nymsFooter: {
      fontFamily: "'Allura', cursive",
      fontSize: '1.25em',
      fontWeight: 400,
      color: gold,
      textTransform: 'lowercase',
      display: 'inline-block',
      marginRight: '3px',
      marginLeft: '2px',
    },
    yearWhite: {
      color: '#ffffff',
      fontWeight: 300,
    },
  };

  const logoPulseKeyframes = `
    @keyframes logoPulse {
      0%, 100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.3); transform: translateY(-50%) scale(1); }
      50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.6); transform: translateY(-50%) scale(1.05); }
    }
  `;

  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { color: #d4af37; }
      25% { color: #e8d5a3; }
      50% { color: #f5f0e0; }
      75% { color: #e8d5a3; }
    }
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes glow {
      0%, 100% { text-shadow: 0 0 5px rgba(212, 175, 55, 0.3), 0 0 10px rgba(212, 175, 55, 0.2); }
      25% { text-shadow: 0 0 10px rgba(232, 213, 163, 0.5), 0 0 18px rgba(232, 213, 163, 0.3); }
      50% { text-shadow: 0 0 20px rgba(245, 240, 224, 0.7), 0 0 35px rgba(245, 240, 224, 0.5); }
      75% { text-shadow: 0 0 10px rgba(232, 213, 163, 0.5), 0 0 18px rgba(232, 213, 163, 0.3); }
    }
    @keyframes rollDown {
      0% { opacity: 0; transform: translateX(-50%) translateY(-10px); max-height: 0; }
      100% { opacity: 1; transform: translateX(-50%) translateY(0); max-height: 500px; }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{logoPulseKeyframes}{pulseKeyframes}</style>
      
      {/* Top Navbar */}
      <nav style={{...styles.navbar, justifyContent: 'center'}}>
        {/* Logo */}
        <div style={{width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', marginTop: '150px'}}>
          <img src={logoImage} alt="Home" title="Back to Home" style={{width: '80px', height: '80px', objectFit: 'contain', cursor: 'pointer', borderRadius: '50%', animation: 'logoPulse 2s ease-in-out infinite'}} onClick={() => onNavigate('landing')} onMouseEnter={(e) => {e.currentTarget.style.width = '90px'; e.currentTarget.style.height = '90px';}} onMouseLeave={(e) => {e.currentTarget.style.width = '80px'; e.currentTarget.style.height = '80px';}} />
        </div>
        <div style={{width: '2px', height: '20px', background: '#333', marginRight: '10px'}}></div>
        {/* Main Nav Items - What was in Notary dropdown */}
        <button style={styles.navButton} onClick={() => onNavigate('services')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.transform = 'scale(1.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'scale(1)'; }}>Services and Prices</button>
        <button style={styles.navButton} onClick={() => onNavigate('documents')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.transform = 'scale(1.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'scale(1)'; }}>Documents I Sign</button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.transform = 'scale(1.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'scale(1)'; }}>Contact</button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.transform = 'scale(1.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.transform = 'scale(1)'; }}>Booking Request</button>
        <button style={{...styles.navButton, color: gold}} onClick={() => window.open('https://annalico.glossgenius.com', '_blank')} onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.transform = 'scale(1)'; }}>Book Your Signing</button>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.heroH1}>SEAL AND STAMP Notary</h1>
          <div style={{...styles.line, margin: '40px auto 20px'}}></div>
          <p style={{...styles.heroSub, marginBottom: '40px', letterSpacing: '2px', fontSize: '0.75em'}}>Mobile • Remote • IPEN • NNA Certified in both RON • NSA</p>
          <div style={{
            background: '#111',
            padding: '40px',
            margin: '40px auto',
            border: '1px solid #222',
            borderRadius: '4px',
            maxWidth: '800px',
          }}>
            <p style={{...styles.heroP, fontSize: '0.9em', letterSpacing: '1px', textTransform: 'none' as const, color: '#ccc', margin: 0}}>
              Trusted Mobile Notary Serving Plano, TX. Loan Signings, Affidavits, Acknowledgments, Power Of Attorney, Legal Documents, Business Notarization and More. Fast Scheduling, Secure Handling, and Service With Care.
            </p>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>
          <span style={styles.yearWhite}><span style={{fontSize: '0.7em', verticalAlign: 'super'}}>@</span>2001</span> | AN-NA<span style={styles.nymsFooter}>nyms</span>-LI Co., LLC | All Rights Reserved | <span style={{color: gold}}>anna@annalico.com</span> | <span style={styles.yearWhite}>(972) 900-7147</span>
        </p>
      </footer>
    </div>
  );
}

export default Home;
