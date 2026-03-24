import { useState } from 'react';
const logoImage = '/images/logo.jpg';

interface SalonPackagesProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

const PACKAGES = [
  {
    name: 'Cut & Style Package',
    sessions: 4,
    price: 240,
    savings: 60,
    description: '4 sessions of cuts & blowouts',
  },
  {
    name: 'Color Package',
    sessions: 3,
    price: 375,
    savings: 75,
    description: '3 color sessions with gloss',
  },
  {
    name: 'Highlight Package',
    sessions: 3,
    price: 450,
    savings: 90,
    description: '3 full highlight sessions',
  },
  {
    name: 'Balayage Package',
    sessions: 2,
    price: 360,
    savings: 40,
    description: '2 balayage sessions with toners',
  },
  {
    name: 'Ultimate Care',
    sessions: 6,
    price: 600,
    savings: 150,
    description: 'Mix of cuts, color & treatments',
  },
];

function SalonPackages({ onNavigate }: SalonPackagesProps) {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const gold = '#d4af37';

  const handlePurchase = (pkg: any) => {
    alert(`${pkg.name} - Payment processing would happen here.\n\nFor now, please contact Anna directly to purchase packages.`);
  };

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
      gap: '40px',
      padding: '0 40px',
      position: 'fixed' as const,
      top: 0,
      left: 0,
      zIndex: 100,
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
      padding: '8px 16px',
      transform: 'scale(1)',
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
      background: '#000',
      color: '#fff',
      padding: '150px 20px 100px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: '5em',
      fontWeight: 100,
      letterSpacing: '8px',
      textTransform: 'uppercase',
      marginBottom: '30px',
      lineHeight: 1.2,
      color: gold,
      animation: 'fadeInUp 1s ease-out forwards, pulse 10s ease-in-out infinite 1s, glow 10s ease-in-out infinite 1s',
    },
    heroP: {
      fontSize: '1.2em',
      fontWeight: 300,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#ccc',
    },
    byAnna: {
      fontSize: '0.9em',
      marginTop: '-20px',
      marginBottom: '10px',
      fontFamily: "'Qwigley', cursive",
      textTransform: 'none',
      letterSpacing: '1px',
      color: '#888',
    },
    line: {
      width: '100px',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, gold, transparent)',
      margin: '40px auto',
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
    },
    content: {
      padding: '80px 20px',
      textAlign: 'center',
      maxWidth: '1000px',
      margin: '0 auto',
      borderTop: '1px solid #111',
      background: '#000',
    },
    sectionTitle: {
      color: gold,
      fontWeight: 300,
      letterSpacing: '4px',
      marginBottom: '30px',
      textTransform: 'uppercase',
    },
    notice: {
      background: '#111',
      border: '1px solid #333',
      padding: '20px 30px',
      marginBottom: '40px',
    },
    noticeText: {
      color: '#888',
      fontSize: '0.9em',
      letterSpacing: '1px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginBottom: '40px',
    },
    card: {
      background: '#111',
      border: '1px solid #222',
      padding: '35px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    cardSelected: {
      border: `1px solid ${gold}`,
      boxShadow: '0 0 30px rgba(212, 175, 55, 0.1)',
    },
    packageName: {
      color: gold,
      fontSize: '1.2em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      marginBottom: '10px',
    },
    sessions: {
      color: '#fff',
      fontSize: '3em',
      fontWeight: 100,
      marginBottom: '5px',
    },
    sessionsLabel: {
      color: '#888',
      fontSize: '0.85em',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      marginBottom: '20px',
    },
    description: {
      color: '#aaa',
      fontSize: '0.9em',
      marginBottom: '20px',
      lineHeight: 1.6,
    },
    price: {
      color: gold,
      fontSize: '2em',
      fontWeight: 300,
      marginBottom: '5px',
    },
    savings: {
      color: '#4CAF50',
      fontSize: '0.85em',
      letterSpacing: '1px',
      marginBottom: '20px',
    },
    btn: {
      display: 'inline-block',
      width: '100%',
      background: 'transparent',
      color: gold,
      border: '1px solid gold',
      padding: '12px',
      fontFamily: 'inherit',
      fontSize: '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      cursor: 'pointer',
    },
    backBtn: {
      display: 'inline-block',
      background: 'transparent',
      border: 'none',
      color: '#666',
      padding: '15px 50px',
      textDecoration: 'none',
      marginTop: '40px',
      borderBottom: '1px solid transparent',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontSize: '12px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'all 0.3s',
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

  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { color: #d4af37; }
      50% { color: #e5c76b; }
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
  `;

  const logoPulseKeyframes = `
    @keyframes logoPulse {
      0%, 100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.3); transform: translateY(-50%) scale(1); }
      50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.6); transform: translateY(-50%) scale(1.05); }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{pulseKeyframes}{logoPulseKeyframes}</style>
      
      {/* Top Navbar */}
      <nav style={styles.navbar}>
        <img src={logoImage} alt="Home" title="Back to Home" style={{width: '80px', height: '80px', objectFit: 'contain', cursor: 'pointer', position: 'absolute', left: '40px', top: '100%', transform: 'translateY(-50%)', borderRadius: '50%', animation: 'logoPulse 2s ease-in-out infinite', transition: 'all 0.3s ease'}} onClick={() => onNavigate('landing')} onMouseEnter={(e) => {e.currentTarget.style.width = '100px'; e.currentTarget.style.height = '100px'; e.currentTarget.style.left = '30px';}} onMouseLeave={(e) => {e.currentTarget.style.width = '80px'; e.currentTarget.style.height = '80px'; e.currentTarget.style.left = '40px';}} />
        <button style={styles.navButton} onClick={() => onNavigate('salon')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Home</button>
        <button style={{...styles.navButton, color: gold}} onClick={() => onNavigate('salon-packages')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Packages</button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Contact</button>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.heroH1}>Client Packages</h1>
          <div style={{...styles.line, margin: '40px auto 30px'}}></div>
          <p style={styles.byAnna}>by Anna</p>
          <p style={styles.heroP}>Save with prepaid sessions</p>
        </section>

        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Prepaid Session Packages</h2>
          
          <div style={styles.notice}>
            <p style={styles.noticeText}>
              These packages are available exclusively for current clients. 
              Sessions never expire and can be used for any service within the package category.
            </p>
          </div>

          <div style={styles.grid}>
            {PACKAGES.map((pkg, index) => (
              <div
                key={index}
                style={{
                  ...styles.card,
                  ...(selectedPackage === index ? styles.cardSelected : {}),
                }}
                onClick={() => setSelectedPackage(index)}
                onMouseEnter={(e) => {
                  if (selectedPackage !== index) {
                    e.currentTarget.style.borderColor = '#444';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPackage !== index) {
                    e.currentTarget.style.borderColor = '#222';
                  }
                }}
              >
                <h2 style={styles.packageName}>{pkg.name}</h2>
                <div style={styles.sessions}>{pkg.sessions}</div>
                <div style={styles.sessionsLabel}>Sessions</div>
                <p style={styles.description}>{pkg.description}</p>
                <div style={styles.price}>${pkg.price}</div>
                <div style={styles.savings}>Save ${pkg.savings}</div>
                <button
                  style={styles.btn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(pkg);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = gold;
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = gold;
                  }}
                >
                  Purchase
                </button>
              </div>
            ))}
          </div>

          <button
            style={styles.backBtn}
            onClick={() => onNavigate('salon')}
            onMouseEnter={(e) => {e.currentTarget.style.color = gold; e.currentTarget.style.borderBottomColor = gold;}}
            onMouseLeave={(e) => {e.currentTarget.style.color = '#666'; e.currentTarget.style.borderBottomColor = 'transparent';}}
          >
            ← Back to Salon Home
          </button>
        </section>

        <footer style={styles.footer}>
          <span style={styles.yearWhite}><span style={{fontSize: '0.7em', verticalAlign: 'super'}}>@</span>2001</span> | AN-NA<span style={styles.nymsFooter}>nyms</span>-LI Co., LLC | All Rights Reserved | <span style={{color: gold}}>anna@annalico.com</span> | <span style={styles.yearWhite}>(972) 900-7147</span>
        </footer>
      </main>
    </div>
  );
}

export default SalonPackages;
