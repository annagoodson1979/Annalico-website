
import { useState, useEffect } from 'react';

const logoImage = '/images/20260118_134105000_iOS.jpg';
const portraitImage = '/images/aboutme.jpg';

interface AboutProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

function About({ onNavigate }: AboutProps) {
  const gold = '#d4af37';
  const [scrollY, setScrollY] = useState(0);
  const [hoveredBusiness, setHoveredBusiness] = useState<'notary' | 'salon' | 'partnership' | 'didyouknow' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 100, 4);
  const contentOpacity = Math.min(Math.max((scrollY - 300) / 200, 0), 1);
  

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
      margin: '0 12px',
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
      color: '#fff',
      padding: '100px 20px 60px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroH1: {
      fontSize: '3em',
      fontWeight: 100,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      color: gold,
      animation: 'fadeInUp 1s ease-out forwards, pulse 10s ease-in-out infinite 1s, glow 10s ease-in-out infinite 1s',
    },
    heroP: {
      fontSize: '1em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#ccc',
    },
    line: {
      width: '80px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      margin: '10px auto 20px',
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
    },
    content: {
      padding: '60px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    sectionTitle: {
      color: gold,
      fontWeight: 300,
      letterSpacing: '3px',
      marginBottom: '25px',
      textTransform: 'uppercase',
      fontSize: '1.5em',
      textAlign: 'center',
    },
    paragraph: {
      color: '#ccc',
      lineHeight: 2,
      marginBottom: '20px',
      textAlign: 'center',
    },
    credentials: {
      background: '#111',
      padding: '40px',
      margin: '40px auto',
      border: `1px solid ${gold}`,
      borderRadius: '4px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      maxWidth: '600px',
      fontFamily: "'Montserrat', sans-serif",
    },
    credentialsTitle: {
      color: gold,
      fontWeight: 300,
      letterSpacing: '2px',
      marginBottom: '20px',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    list: {
      color: '#ccc',
      lineHeight: 2,
      listStyle: 'none',
      padding: 0,
      textAlign: 'center',
    },
    listItem: {
      marginBottom: '10px',
    },
    valueTitle: {
      color: gold,
      fontWeight: 400,
    },
    sparkle: {
      color: gold,
      fontSize: '1.1em',
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
    yearWhite: {
      color: '#ffffff',
      fontWeight: 300,
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
      <nav style={{...styles.navbar, justifyContent: 'center'}}>
        {/* Logo positioned in flow to match Landing page spacing */}
        <div style={{width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px', marginTop: '150px'}}>
          <img src={logoImage} alt="Home" title="Back to Home" style={{width: '80px', height: '80px', objectFit: 'contain', cursor: 'pointer', borderRadius: '50%', animation: 'logoPulse 2s ease-in-out infinite'}} onClick={() => onNavigate('landing')} onMouseEnter={(e) => {e.currentTarget.style.width = '90px'; e.currentTarget.style.height = '90px';}} onMouseLeave={(e) => {e.currentTarget.style.width = '80px'; e.currentTarget.style.height = '80px';}} />
        </div>
        <div style={{width: '2px', height: '20px', background: '#333', marginRight: '10px'}}></div>
        
        {/* Notary Dropdown */}
        <div style={{position: 'relative' as const, height: '60px', display: 'flex', alignItems: 'center'}}
          onMouseEnter={() => setHoveredBusiness('notary')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('home')} onMouseEnter={(e) => e.currentTarget.style.color = gold} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>Notary</button>
          {hoveredBusiness === 'notary' && (
            <div style={{position: 'absolute' as const, top: '60px', left: '50%', transform: 'translateX(-50%)', background: '#0a0a0a', border: '1px solid #222', borderTop: `2px solid ${gold}`, padding: '10px 0', zIndex: 200, boxShadow: '0 10px 30px rgba(0,0,0,0.9)', minWidth: '140px'}}>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => onNavigate('home')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Website</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => onNavigate('contact')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Booking Request</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => onNavigate('services')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Services and Prices</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => onNavigate('contact')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Contact</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => alert('Pay Online - coming soon')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Pay Online</button>
            </div>
          )}
        </div>

        {/* Salon Dropdown */}
        <div style={{position: 'relative' as const, height: '60px', display: 'flex', alignItems: 'center'}}
          onMouseEnter={() => setHoveredBusiness('salon')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('salon')} onMouseEnter={(e) => e.currentTarget.style.color = gold} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>Salon</button>
          {hoveredBusiness === 'salon' && (
            <div style={{position: 'absolute' as const, top: '60px', left: '50%', transform: 'translateX(-50%)', background: '#0a0a0a', border: '1px solid #222', borderTop: `2px solid ${gold}`, padding: '10px 0', zIndex: 200, boxShadow: '0 10px 30px rgba(0,0,0,0.9)', minWidth: '140px'}}>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => onNavigate('salon')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Website</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => alert('Cancel Booking - coming soon')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Cancel Booking</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => alert('Packages - coming soon')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Packages</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => onNavigate('contact')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Contact</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => alert('Pay Online - coming soon')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Pay Online</button>
            </div>
          )}
        </div>

        {/* DID YOU KNOW? Dropdown */}
        <div style={{position: 'relative' as const, height: '60px', display: 'flex', alignItems: 'center'}}
          onMouseEnter={() => setHoveredBusiness('didyouknow')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onMouseEnter={(e) => e.currentTarget.style.color = gold} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>DID YOU KNOW?</button>
          {hoveredBusiness === 'didyouknow' && (
            <div style={{position: 'absolute' as const, top: '60px', left: '50%', transform: 'translateX(-50%)', background: '#0a0a0a', border: '1px solid #222', borderTop: `2px solid ${gold}`, padding: '10px 0', zIndex: 200, boxShadow: '0 10px 30px rgba(0,0,0,0.9)', minWidth: '280px'}}>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => onNavigate('hire')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Ways to Save Money at Signing and more Answers</button>
            </div>
          )}
        </div>
        
        {/* Partnership Dropdown */}
        <div style={{position: 'relative' as const, height: '60px', display: 'flex', alignItems: 'center'}}
          onMouseEnter={() => setHoveredBusiness('partnership')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onMouseEnter={(e) => e.currentTarget.style.color = gold} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>Partnership</button>
          {hoveredBusiness === 'partnership' && (
            <div style={{position: 'absolute' as const, top: '60px', left: '50%', transform: 'translateX(-50%)', background: '#0a0a0a', border: '1px solid #222', borderTop: `2px solid ${gold}`, padding: '10px 0', zIndex: 200, boxShadow: '0 10px 30px rgba(0,0,0,0.9)', minWidth: '180px'}}>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => alert('Preferred Partner Portal - coming soon')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Preferred Partner Portal</button>
              <button style={{display: 'block', width: '100%', padding: '10px 20px', background: 'transparent', border: 'none', color: '#888', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const}} onClick={() => alert('Local Network Portal - coming soon')} onMouseEnter={(e) => { e.currentTarget.style.color = gold; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}>Local Network Portal</button>
            </div>
          )}
        </div>
        
        <button style={{...styles.navButton, color: gold}} onClick={() => onNavigate('about')}>About Me</button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')} onMouseEnter={(e) => e.currentTarget.style.color = gold} onMouseLeave={(e) => e.currentTarget.style.color = '#888'}>Contact</button>
      </nav>

      {/* Full Screen Background Portrait */}
      <div style={{
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
      }}>
        <img 
          src={portraitImage} 
          alt="" 
          style={{
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain', 
            opacity: 0.3,
            filter: `blur(${blurAmount}px)`,
            transition: 'filter 0.1s ease-out',
          }}
        />
      </div>

      {/* Main Content */}
      <main style={{...styles.main, position: 'relative' as const, zIndex: 1}}>
        {/* First Page - Picture with About Me at bottom */}
        <section style={{...styles.hero, minHeight: '100vh', justifyContent: 'flex-end', paddingBottom: '100px'}}>
          <h1 style={styles.heroH1}>About Me</h1>
          <div style={styles.line}></div>
        </section>

        {/* Second Page - My Story with text */}
        <section style={{...styles.content, minHeight: '100vh', paddingTop: '100px', opacity: contentOpacity, transition: 'opacity 0.5s ease'}}>
          <h2 style={{...styles.sectionTitle, fontSize: '2.5em', letterSpacing: '4px', marginBottom: '10px'}}>My Story</h2>
          <div style={styles.line}></div>
          <p style={{...styles.heroP, marginTop: '10px', marginBottom: '40px', fontSize: '0.9em', opacity: 0.8}}>Experience since 2001</p>
          <p style={styles.paragraph}>
            Where professionalism meets poetry, and every document is treated like it matters — because it does. 
            With experience since 2001, I've built Seal & Stamp Notary on a simple promise:
          </p>
          <p style={styles.paragraph}>
            To bring luxury-level care, clarity, and protection to every signature I witness.
          </p>
          <p style={styles.paragraph}>
            I'm not just here to stamp and leave.
          </p>
          <p style={styles.paragraph}>
            I'm here to guide you, prepare you, protect your paperwork, and present your documents with the respect they deserve.
          </p>
          <p style={styles.paragraph}>
            Whether you're signing a life-changing agreement, a delicate legal form, or something deeply personal, I make sure it's handled with precision — and a touch of elegance.
          </p>

          <h2 style={styles.sectionTitle}>My Approach</h2>
          <p style={styles.paragraph}>
            I believe notarization should feel:
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Clear</span> — no confusion, no stress
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Professional</span> — every detail checked and verified
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Personal</span> — you're treated like a human, not a form
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Protected</span> — your information is guarded at every step
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Beautiful</span> — because presentation matters
          </p>
          <p style={styles.paragraph}>
            Your documents leave my hands looking polished, organized, and elevated — with optional fine touches like velvet folders, gold foil, wax seals, and personalized finishes.
          </p>
          <p style={styles.paragraph}>
            <em>This isn't ordinary notary work. This is document presentation with purpose.</em>
          </p>

          <div style={styles.credentials} onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.6)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none';}}>
            <h2 style={styles.credentialsTitle}>Why Clients Choose Me</h2>
            <p style={styles.paragraph}>Because I bring:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>A calm, steady presence during important moments</li>
              <li style={styles.listItem}>A keen eye for detail</li>
              <li style={styles.listItem}>Advanced preparation so your appointment runs smoothly</li>
              <li style={styles.listItem}>Luxury add-ons that make your paperwork feel special</li>
              <li style={styles.listItem}>The highest standard of confidentiality and ethics</li>
              <li style={styles.listItem}>A warm, grounded energy that keeps you at ease</li>
            </ul>
            <p style={styles.paragraph}>
              I'm here to make notarization feel effortless — and beautiful.
            </p>
          </div>

          <h2 style={styles.sectionTitle}>My Promise to You</h2>
          <p style={styles.paragraph}>
            Whether I meet you at your home, office, or online, you'll receive the same care:
          </p>
          <p style={{...styles.paragraph, textAlign: 'center', fontSize: '1.2em', letterSpacing: '2px'}}>
            <span style={styles.valueTitle}>Prepared. Protected. Professional.</span>
          </p>

          <div style={styles.credentials} onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(212, 175, 55, 0.6)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none';}}>
            <h2 style={styles.credentialsTitle}>Credentials & Certifications</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}><span style={{color: '#4CAF50', marginRight: '8px'}}>✓</span> Commissioned Notary Public NNA Certified in both NSA (Notary Signing Agent)</li>
              <li style={styles.listItem}><span style={{color: '#4CAF50', marginRight: '8px'}}>✓</span> and RON (Remote Online Notarization)</li>
              <li style={styles.listItem}><span style={{color: '#4CAF50', marginRight: '8px'}}>✓</span> Background Screened</li>
              <li style={styles.listItem}><span style={{color: '#4CAF50', marginRight: '8px'}}>✓</span> E&O Insurance</li>
            </ul>
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

export default About;
