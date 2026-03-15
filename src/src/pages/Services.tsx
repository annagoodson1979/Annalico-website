import { useState, useEffect } from 'react';
const logoImage = '/images/20260118_134105000_iOS.jpg';

interface ServicesProps {
  onNavigate: (page: 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents') => void;
}

function Services({ onNavigate }: ServicesProps) {
  const gold = '#d4af37';
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      gap: '15px',
    },
    navButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.6em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase' as const,
      color: '#888',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: '8px 12px',
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
      padding: '60px 20px 30px',
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
      color: '#888',
    },
    line: {
      width: '100px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      margin: '30px auto',
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
    },
    sideButton: {
      position: 'absolute' as const,
      left: '10px',
      zIndex: 90,
      background: '#000',
      border: 'none',
      color: '#8a7020',
      padding: '3px 6px',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '8px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase' as const,
      cursor: 'pointer',
      textAlign: 'center' as const,
      width: '60px',
      lineHeight: 1.2,
    },
    content: {
      padding: '20px 20px',
      maxWidth: '700px',
      margin: '0 auto',
      background: '#000',
      textAlign: 'center',
    },
    serviceCard: {
      background: '#111',
      padding: '20px',
      margin: '12px 0',
      border: '1px solid #222',
      borderRadius: '4px',
      transition: 'border-color 0.3s',
      textAlign: 'left' as const,
    },
    serviceTitle: {
      color: gold,
      fontWeight: 300,
      letterSpacing: '2px',
      marginBottom: '10px',
      textTransform: 'uppercase' as const,
      fontSize: '1em',
      textAlign: 'center' as const,
    },
    serviceDescBox: {
      background: '#111',
      padding: '20px',
      margin: '12px auto',
      border: '1px solid #222',
      borderRadius: '4px',
      maxWidth: '600px',
    },
    serviceList: {
      color: '#aaa',
      lineHeight: 1.5,
      paddingLeft: 0,
      marginBottom: '10px',
      textAlign: 'center' as const,
      listStyle: 'none',
      fontSize: '0.9em',
    },
    price: {
      color: gold,
      fontSize: '0.9em',
      letterSpacing: '1px',
      marginTop: '10px',
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
  `;

  return (
    <div style={styles.container}>
      <style>{logoPulseKeyframes}{pulseKeyframes}</style>
      
      {/* Top Navbar */}
      <nav style={styles.navbar}>
        <img src={logoImage} alt="Home" title="Back to Home" style={{width: '80px', height: '80px', objectFit: 'contain', cursor: 'pointer', position: 'absolute', left: '40px', top: '100%', transform: 'translateY(-50%)', borderRadius: '50%', animation: 'logoPulse 2s ease-in-out infinite', transition: 'all 0.3s ease'}} onClick={() => onNavigate('landing')} onMouseEnter={(e) => {e.currentTarget.style.width = '100px'; e.currentTarget.style.height = '100px'; e.currentTarget.style.left = '30px';}} onMouseLeave={(e) => {e.currentTarget.style.width = '80px'; e.currentTarget.style.height = '80px'; e.currentTarget.style.left = '40px';}} />
        <button style={styles.navButton} onClick={() => onNavigate('home')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>← Back</button>
        <button style={{...styles.navButton, color: gold}} onClick={() => onNavigate('services')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Services and Prices</button>
        <button style={styles.navButton} onClick={() => onNavigate('documents')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Documents I Notarize</button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Contact</button>
        <button style={styles.navButton} onClick={() => onNavigate('hire')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Hire a Signing Agent</button>
        <button style={styles.navButton} onClick={() => window.open('https://annalico.glossgenius.com', '_blank')} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>Booking Request</button>
      </nav>

      {/* Jump to Pricing Button */}
      <button 
        style={{...styles.sideButton, top: '280px'}}
        onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#888'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#8a7020'; }}
      >
        Jump to Pricing
      </button>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.heroH1}>Services and Prices</h1>
          <div style={{...styles.line, margin: '40px auto 30px'}}></div>
          <p style={{...styles.heroP, marginBottom: '30px', fontSize: '1.15em'}}>Where tradition meets modern elegance</p>
        </section>

        <section style={styles.content}>
          <div style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>Remote Online Notary (RON)</h2>
            <p style={{color: '#d4af37', fontSize: '8px', fontWeight: 300, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center', marginBottom: '15px'}}>Anywhere in the U.S. (Preferred)</p>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              Remote Online Notarization offers a secure and convenient<br />
              alternative to in-person appointments. While the fee is<br />
              comparable to mobile service, many clients save significantly<br />
              by avoiding travel time, fuel costs, parking, and time away<br />
              from work — all from the comfort of home or office.
            </p>
            <div style={{display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '15px'}}>
              <span style={{color: '#aaa'}}><strong style={{color: '#ccc'}}>Flat fee:</strong> $35</span>
              <span style={{color: '#aaa'}}><strong style={{color: '#ccc'}}>Where:</strong> Anywhere in U.S.</span>
            </div>
            <p style={{color: '#aaa', fontSize: '0.9em', textAlign: 'center'}}><strong style={{color: '#ccc'}}>Includes:</strong> Identity verification, notarization, secure digital delivery</p>
          </div>

          <div style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>Mobile Notary</h2>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              In-person notarization are typically conducted at public<br />
              or professional locations to ensure a smooth and<br />
              secure signing experience.
            </p>
            <ul style={styles.serviceList}>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Service area:</strong> Mobile service is available within a 5-mile radius</li>
              <li><strong style={{color: '#ccc'}}>Base fee:</strong> $25 (within 5 miles)</li>
            </ul>
            <p style={{...styles.serviceDesc, marginTop: '15px', fontWeight: 300, color: gold, textAlign: 'center'}}>Benefits</p>
            <ul style={styles.serviceList}>
              <li>In-person assistance</li>
              <li>Ideal for signers without internet access</li>
              <li>Suitable for witnesses or multiple parties</li>
            </ul>
          </div>

          <div style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>Document Prep & Organization</h2>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              Professional document preparation services<br />
              to ensure everything is in order.
            </p>
            <ul style={styles.serviceList}>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Document Prep</strong> (non-legal) — $5 per page</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Page Re-Ordering & Organizing</strong> — $5–$10 per set</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Secure Document Sleeve</strong> — $3</li>
            </ul>
          </div>

          <div style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>Electronic Signature Assistance (Non-Notarized)</h2>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              Assistance uploading and completing electronic signatures<br />
              for documents that do not require notarization.
            </p>
            <ul style={styles.serviceList}>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>$25 per document</strong></li>
              <li>&nbsp;&nbsp;&nbsp;Uploading the document to an e-signature platform</li>
              <li>&nbsp;&nbsp;&nbsp;Guiding the signer through the signing process</li>
              <li>&nbsp;&nbsp;&nbsp;Ensuring all required signature fields are completed</li>
            </ul>
            <p style={{...styles.serviceDesc, fontSize: '0.8em', color: '#888', marginTop: '15px', textAlign: 'center'}}>
              <em>Please note: This service does not include notarization.<br />&nbsp;&nbsp;&nbsp;&nbsp;Documents requiring notarization must be completed in person<br />&nbsp;&nbsp;or via an approved Remote Online Notary (RON) platform.</em>
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>Agreement / Contract Signing</h2>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              Standard notarizations for agreements and contracts.<br />
              Multi-party or complex documents welcome.
            </p>
            <ul style={styles.serviceList}>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>RON:</strong> $35 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{color: '#ccc'}}>In-person:</strong> $25</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>After-hours:</strong> +$30 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{color: '#ccc'}}>Emergency:</strong> +$50</li>
            </ul>
          </div>

          <div style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>Deposit & No-Show Policy</h2>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              To protect my time and ensure commitment,<br />
              I require deposits for certain bookings.
            </p>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              Mobile appointments require a 50% reservation<br />
              deposit to secure your time and travel.
            </p>
            <ul style={styles.serviceList}>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Deposits:</strong> <em style={{color: '#ccc'}}>non-refundable</em> if you cancel within 12 hours or no-show</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>No-shows:</strong> Forfeit deposit; may require full prepay for future bookings</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Reschedules:</strong> Allowed once with 12+ hours notice; deposit transfers</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Emergency exceptions:</strong> Documented emergencies considered case-by-case</li>
            </ul>
          </div>

          <div style={styles.serviceCard}>
            <h2 style={styles.serviceTitle}>Booking & Scheduling Tips</h2>
            <p style={{...styles.serviceDesc, maxWidth: '550px', margin: '0 auto 15px', textAlign: 'center'}}>
              Maximize efficiency and minimize stress<br />with these simple guidelines.
            </p>
            <ul style={styles.serviceList}>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Best times to book:</strong> 10 AM – 2 PM for standard rates</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>After-hours & weekends:</strong> Higher fees apply; limited availability</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Document prep:</strong> Have documents ready and IDs valid</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Witnesses (if applicable):</strong> You must provide your own for in-person notarizations</li>
              <li>&nbsp;&nbsp;&nbsp;<strong style={{color: '#ccc'}}>Location limits:</strong> I only travel within 5 miles; beyond that, RON recommended</li>
            </ul>
          </div>

          {/* Notary Pricing */}
          <div id="pricing" style={styles.serviceCard}>
            <h2 style={{...styles.serviceTitle, textAlign: 'center' as const}}>Notary Services Pricing</h2>
            <div style={{display: 'flex', flexWrap: 'wrap' as const, gap: '60px', justifyContent: 'center'}}>
              <div style={{textAlign: 'center' as const}}>
                <h3 style={{color: gold, fontSize: '0.9em', marginBottom: '15px', fontWeight: 300, textAlign: 'center' as const}}>Notarization</h3>
                <ul style={styles.serviceList}>
                  <li><strong style={{color: '#ccc'}}>RON (Online):</strong> $35</li>
                  <li><strong style={{color: '#ccc'}}>Mobile (In-person):</strong> $25</li>
                  <li><strong style={{color: '#ccc'}}>After-hours:</strong> +$30</li>
                  <li><strong style={{color: '#ccc'}}>Emergency:</strong> +$50</li>
                </ul>
              </div>
              <div style={{textAlign: 'center' as const}}>
                <h3 style={{color: gold, fontSize: '0.9em', marginBottom: '15px', fontWeight: 300, textAlign: 'center' as const}}>Document Services</h3>
                <ul style={styles.serviceList}>
                  <li><strong style={{color: '#ccc'}}>Document Prep</strong> — $5/page</li>
                  <li><strong style={{color: '#ccc'}}>Page Re-ordering</strong> — $5–$10</li>
                  <li><strong style={{color: '#ccc'}}>Secure Sleeve</strong> — $3</li>
                  <li><strong style={{color: '#ccc'}}>E-signature assistance:</strong> $25/doc</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Document Presentation Options */}
          <div id="presentation-options" style={{width: '100%', margin: '40px 0', padding: '40px 60px', textAlign: 'center' as const}}>
            <h2 style={{...styles.serviceTitle, marginBottom: '10px'}}>Presentation Packages</h2>
            <p style={{color: '#888', fontSize: '0.9em', marginBottom: '30px', fontStyle: 'italic'}}>Enhance your signing with a presentation style that fits the moment.</p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
              {/* Package 1 - Signing Certificate */}
              <div style={{border: '1px solid #333', borderRadius: '10px', padding: '20px', background: '#111', boxShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
                <h3 style={{color: gold, fontSize: '1em', fontWeight: 300, marginTop: 0, marginBottom: '10px'}}>⭐ Signing Certificate</h3>
                <p style={{fontSize: '28px', fontWeight: 'bold', color: '#d4af37', margin: '15px 0'}}>$9</p>
                <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', color: '#aaa', fontSize: '0.8em', lineHeight: 1.6}}>
                  <li><span style={{color: gold}}>•</span> Official Signing Certificate</li>
                  <li><span style={{color: gold}}>•</span> Professional presentation</li>
                </ul>
                <p style={{fontSize: '14px', color: '#666', marginTop: '15px', fontStyle: 'italic'}}>Best for: clear documentation without extras.</p>
              </div>

              {/* Package 2 - Presentation Upgrade */}
              <div style={{border: '1px solid #333', borderRadius: '10px', padding: '20px', background: '#111', boxShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
                <h3 style={{color: gold, fontSize: '1em', fontWeight: 300, marginTop: 0, marginBottom: '10px'}}>⭐⭐ Presentation Upgrade</h3>
                <p style={{fontSize: '28px', fontWeight: 'bold', color: '#d4af37', margin: '15px 0'}}>$15</p>
                <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', color: '#aaa', fontSize: '0.8em', lineHeight: 1.6}}>
                  <li><span style={{color: gold}}>•</span> Signing Certificate</li>
                  <li><span style={{color: gold}}>•</span> Choose ONE Signature Accent:</li>
                  <li style={{paddingLeft: '15px'}}><span style={{color: gold}}>•</span> Ribbon Accent Wrap</li>
                  <li style={{paddingLeft: '15px'}}><span style={{color: gold}}>•</span> Embossed Seal (gold or blind)</li>
                </ul>
                <p style={{fontSize: '14px', color: '#666', marginTop: '15px', fontStyle: 'italic'}}>Best for: adding a refined, professional touch.</p>
              </div>

              {/* Package 3 - Enhanced Presentation (Most Popular) */}
              <div style={{border: `2px solid ${gold}`, borderRadius: '10px', padding: '20px', background: '#111', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', position: 'relative' as const}}>
                <span style={{display: 'inline-block', background: gold, color: '#000', padding: '4px 10px', fontSize: '12px', borderRadius: '5px', marginBottom: '10px'}}>Most Popular</span>
                <h3 style={{color: gold, fontSize: '1em', fontWeight: 300, marginTop: 0, marginBottom: '10px'}}>⭐⭐⭐ Enhanced Presentation</h3>
                <p style={{fontSize: '28px', fontWeight: 'bold', color: '#d4af37', margin: '15px 0'}}>$19</p>
                <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', color: '#aaa', fontSize: '0.8em', lineHeight: 1.6}}>
                  <li><span style={{color: gold}}>•</span> Signing Certificate</li>
                  <li><span style={{color: gold}}>•</span> Linen presentation folder</li>
                  <li><span style={{color: gold}}>•</span> Choose ONE Signature Accent</li>
                  <li><span style={{color: gold}}>•</span> Choose ONE Personalized Detail:</li>
                  <li style={{paddingLeft: '15px'}}><span style={{color: gold}}>•</span> Foil-Stamped Initials</li>
                  <li style={{paddingLeft: '15px'}}><span style={{color: gold}}>•</span> Wax Seal</li>
                </ul>
                <p style={{fontSize: '14px', color: '#666', marginTop: '15px', fontStyle: 'italic'}}>Best for: a presentation that feels important and personal.</p>
              </div>

              {/* Package 4 - Seal & Stamp Experience */}
              <div style={{border: `1px solid #8a7020`, borderRadius: '10px', padding: '20px', background: '#0a0a0a', boxShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
                <h3 style={{color: '#e5c76b', fontSize: '1em', fontWeight: 300, marginTop: 0, marginBottom: '10px'}}>⭐⭐⭐⭐ The Seal & Stamp Experience</h3>
                <p style={{fontSize: '28px', fontWeight: 'bold', color: '#d4af37', margin: '15px 0'}}>$24</p>
                <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', color: '#aaa', fontSize: '0.8em', lineHeight: 1.8}}>
                  <li><span style={{color: gold}}>•</span> Signing Certificate</li>
                  <li><span style={{color: gold}}>•</span> Linen presentation folder</li>
                  <li><span style={{color: gold}}>•</span> Personalized leather keepsake folder</li>
                  <li><span style={{color: gold}}>•</span> Ribbon Accent Wrap</li>
                  <li><span style={{color: gold}}>•</span> Embossed Seal</li>
                  <li><span style={{color: gold}}>•</span> Foil-Stamped Initials</li>
                  <li><span style={{color: gold}}>•</span> Wax Seal</li>
                </ul>
                <p style={{fontSize: '14px', color: '#666', marginTop: '15px', fontStyle: 'italic'}}>Best for: preserving an important life milestone with lasting elegance.</p>
              </div>
            </div>

          </div>

          {/* Presentation Package Comparison Table */}
          <div style={{margin: '30px auto', maxWidth: '1000px', padding: '0 20px'}}>
            <h2 style={{...styles.serviceTitle, textAlign: 'center' as const, marginBottom: '10px'}}>Package Feature Comparison</h2>
            <p style={{color: '#888', fontSize: '0.9em', marginBottom: '30px', fontStyle: 'italic', textAlign: 'center' as const}}>See what's included in each presentation package.</p>

            <div style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '1px', background: '#333', border: '1px solid #333', borderRadius: '4px', overflow: 'hidden'}}>
              {/* Header Row */}
              <div style={{background: '#111', padding: '15px 10px', color: '#888', fontSize: '0.75em'}}>Feature</div>
              <div style={{background: '#111', padding: '15px 10px', textAlign: 'center' as const}}>
                <div style={{color: gold, fontSize: '0.75em', fontWeight: 300}}>Signing Certificate</div>
                <div style={{color: '#ccc', fontSize: '0.8em', marginTop: '5px'}}>$9</div>
              </div>
              <div style={{background: '#111', padding: '15px 10px', textAlign: 'center' as const}}>
                <div style={{color: gold, fontSize: '0.75em', fontWeight: 300}}>Presentation Upgrade</div>
                <div style={{color: '#ccc', fontSize: '0.8em', marginTop: '5px'}}>$15</div>
              </div>
              <div style={{background: '#111', padding: '15px 10px', textAlign: 'center' as const}}>
                <div style={{color: gold, fontSize: '0.75em', fontWeight: 300}}>Enhanced Presentation</div>
                <div style={{color: '#ccc', fontSize: '0.8em', marginTop: '5px'}}>$19</div>
              </div>
              <div style={{background: '#111', padding: '15px 10px', textAlign: 'center' as const}}>
                <div style={{color: '#e5c76b', fontSize: '0.75em', fontWeight: 300}}>Seal & Stamp Experience</div>
                <div style={{color: '#ccc', fontSize: '0.8em', marginTop: '5px'}}>$24</div>
              </div>

              {/* Signing Certificate */}
              <div style={{background: '#0a0a0a', padding: '12px 10px', color: '#888', fontSize: '0.8em'}}>Signing Certificate</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>

              {/* Signature Accent */}
              <div style={{background: '#111', padding: '12px 10px', color: '#888', fontSize: '0.8em'}}>Signature Accent (Choose 1)</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔ All</div>

              {/* Linen Folder */}
              <div style={{background: '#0a0a0a', padding: '12px 10px', color: '#888', fontSize: '0.8em'}}>Linen Presentation Folder</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>

              {/* Personalized Detail */}
              <div style={{background: '#111', padding: '12px 10px', color: '#888', fontSize: '0.8em'}}>Personalized Detail (Choose 1)</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
              <div style={{background: '#111', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔ All</div>

              {/* Leather Keepsake */}
              <div style={{background: '#0a0a0a', padding: '12px 10px', color: '#888', fontSize: '0.8em'}}>Leather Keepsake Folder</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#555', fontSize: '0.8em'}}>—</div>
              <div style={{background: '#0a0a0a', padding: '12px 10px', textAlign: 'center' as const, color: '#ccc', fontSize: '0.8em'}}>✔</div>
            </div>

            <p style={{color: '#666', fontSize: '0.75em', fontStyle: 'italic', textAlign: 'center', marginTop: '20px'}}>
              Signature Accents: Ribbon Wrap OR Embossed Seal | Personalized Details: Foil-Stamped Initials OR Wax Seal
            </p>
          </div>
        </section>

      </main>

      {/* Back to Top Button - Fixed at bottom */}
      {showBackToTop && (
        <button 
          style={{position: 'fixed' as const, left: '10px', bottom: '20px', zIndex: 100, background: '#000', border: 'none', color: '#8a7020', padding: '3px 6px', fontFamily: "'Montserrat', sans-serif", fontSize: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' as const, cursor: 'pointer', textAlign: 'center' as const, width: '60px', lineHeight: 1.2}}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#888'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#8a7020'; }}
        >
          Back to Top
        </button>
      )}

      <footer style={styles.footer}>
        <span style={styles.yearWhite}><span style={{fontSize: '0.7em', verticalAlign: 'super'}}>@</span>2001</span> | AN-NA<span style={styles.nymsFooter}>nyms</span>-LI Co., LLC | All Rights Reserved | <span style={{color: gold}}>anna@annalico.com</span> | <span style={styles.yearWhite}>(972) 900-7147</span>
      </footer>
    </div>
  );
}

export default Services;
