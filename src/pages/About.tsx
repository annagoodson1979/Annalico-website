import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Page } from '../types';
import SiteFooter from '../components/SiteFooter';

const landingLogo = '/images/logo5.jpg';
const portraitImage = '/images/aboutme.jpg';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

function About({ onNavigate }: AboutProps) {
  const gold = '#d4af37';
  const paper = '#f2efe8';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 100, 4);
  const contentOpacity = Math.min(Math.max((scrollY - 300) / 200, 0), 1);

  const styles: Record<string, CSSProperties> = {
    container: {
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      color: '#fff',
    },
    navbar: {
      width: '100%',
      height: '74px',
      background: 'rgba(7, 7, 7, 0.92)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      padding: '0 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 20,
      backdropFilter: 'blur(10px)',
    },
    navLeft: {
      position: 'absolute',
      left: '20px',
      top: '52%',
      transform: 'translateY(-50%)',
      width: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navLogo: {
      width: '74px',
      height: '74px',
      objectFit: 'cover',
      objectPosition: 'center',
      scale: '1.02',
      borderRadius: '50%',
      border: '1px solid #f3efec',
      background: '#080808',
      cursor: 'pointer',
      boxShadow: '0 0 26px rgba(236, 156, 188, 0.52)',
    },
    navDivider: {
      width: '2px',
      height: '20px',
      background: '#333',
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      fontFamily: "'Montserrat', sans-serif",
      justifyContent: 'center',
    },
    navButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.7em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#888',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      margin: 0,
      padding: '8px 16px',
      width: '184px',
      textAlign: 'center',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      paddingTop: '74px',
      overflow: 'hidden',
    },
    portraitBg: {
      position: 'fixed',
      top: 74,
      left: 0,
      right: 0,
      bottom: 52,
      zIndex: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
    },
    portrait: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      opacity: 0.3,
      filter: `blur(${blurAmount}px)`,
      transition: 'filter 0.1s ease-out',
    },
    hero: {
      color: '#fff',
      padding: '100px 20px 70px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 74px)',
      position: 'relative',
      zIndex: 1,
      gap: '14px',
    },
    heroTitle: {
      fontSize: '3em',
      fontWeight: 100,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      color: gold,
      fontFamily: "'Cinzel', serif",
      animation: 'fadeInUp 1s ease-out forwards, glow 10s ease-in-out infinite 1s',
    },
    heroSub: {
      fontSize: '0.9em',
      fontWeight: 300,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#ccc',
      fontFamily: "'Montserrat', sans-serif",
      marginTop: '10px',
      marginBottom: '40px',
      opacity: 0.8,
    },
    heroStory: {
      maxWidth: '720px',
      margin: '0 auto',
      color: '#ddd',
      lineHeight: 1.8,
      textAlign: 'center',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.04rem',
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
      minHeight: '100vh',
      paddingTop: '100px',
      opacity: contentOpacity,
      transition: 'opacity 0.5s ease',
      position: 'relative',
      zIndex: 1,
    },
    sectionTitle: {
      color: gold,
      fontWeight: 300,
      letterSpacing: '3px',
      marginBottom: '25px',
      textTransform: 'uppercase',
      fontSize: '1.5em',
      textAlign: 'center',
      fontFamily: "'Cinzel', serif",
    },
    paragraph: {
      color: '#ccc',
      lineHeight: 2,
      marginBottom: '20px',
      textAlign: 'center',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.08rem',
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
      fontFamily: "'Cinzel', serif",
    },
    list: {
      color: '#ccc',
      lineHeight: 2,
      listStyle: 'none',
      padding: 0,
      textAlign: 'center',
      margin: 0,
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.02rem',
    },
    listItem: {
      marginBottom: '10px',
    },
    valueTitle: {
      color: gold,
      fontWeight: 400,
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
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
        @keyframes landingLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 24px rgba(236, 156, 188, 0.42); }
          50% { transform: scale(1.015); box-shadow: 0 0 32px rgba(236, 156, 188, 0.58); }
        }
        .nav-hover-button:hover {
          color: #f3efec !important;
          transform: scale(1.08) translateY(-1px);
          text-shadow: 0 0 12px rgba(243, 239, 236, 0.35);
        }
      `}</style>

      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <img
            src={landingLogo}
            alt="Anna-Li Co."
            style={{ ...styles.navLogo, animation: 'landingLogoPulse 2.6s ease-in-out infinite' }}
            onClick={() => onNavigate('landing')}
          />
        </div>
        <div style={styles.navDivider}></div>

        <div style={styles.navRight}>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('home')}>
            Back
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('services')}>
            Services & Prices
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('documents')}>
            Documents
          </button>
          <button
            className="nav-hover-button"
            style={{ ...styles.navButton, color: '#f3efec', fontWeight: 500, textShadow: '0 0 10px rgba(243, 239, 236, 0.3)' }}
            onClick={() => onNavigate('did-you-know')}
          >
            Did You Know?
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('contact')}>
            Contact
          </button>
          <button className="nav-hover-button" style={styles.navButton} onClick={() => onNavigate('hire')}>
            Work With Me
          </button>
        </div>
      </nav>

      <div style={styles.portraitBg}>
        <img src={portraitImage} alt="" style={styles.portrait} />
      </div>

      <main style={styles.main}>
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>About Me</h1>
          <div style={styles.line}></div>
          <h2 style={{ ...styles.sectionTitle, marginBottom: '8px', fontSize: '1.5rem' }}>My Story</h2>
          <p style={styles.heroStory}>
            Where professionalism meets poetry, and every document is treated like it matters,
            because it does. I&apos;ve built Seal & Stamp Notary on a simple promise: to bring
            clarity, care, and protection to every signature I witness.
          </p>
        </section>

        <section style={styles.content}>
          <h2 style={{ ...styles.sectionTitle, fontSize: '2.5em', letterSpacing: '4px', marginBottom: '10px' }}>
            My Story
          </h2>
          <div style={styles.line}></div>
          <p style={styles.paragraph}>
            To bring luxury-level care, clarity, and protection to every signature I witness.
          </p>
          <p style={styles.paragraph}>I&apos;m not just here to stamp and leave.</p>
          <p style={styles.paragraph}>
            I&apos;m here to guide you, prepare you, protect your paperwork, and present your
            documents with the respect they deserve.
          </p>
          <p style={styles.paragraph}>
            Whether you&apos;re signing a life-changing agreement, a delicate legal form, or
            something deeply personal, I make sure it&apos;s handled with precision and a touch of
            elegance.
          </p>

          <h2 style={styles.sectionTitle}>My Approach</h2>
          <p style={styles.paragraph}>I believe notarization should feel:</p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Clear</span> — no confusion, no stress
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Professional</span> — every detail checked and verified
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Personal</span> — you&apos;re treated like a human, not a
            form
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Protected</span> — your information is guarded at every
            step
          </p>
          <p style={styles.paragraph}>
            <span style={styles.valueTitle}>Beautiful</span> — because presentation matters
          </p>
          <p style={styles.paragraph}>
            Your documents leave my hands looking polished, organized, and elevated with optional
            fine touches like velvet folders, gold foil, wax seals, and personalized finishes.
          </p>
          <p style={styles.paragraph}>
            <em>This isn&apos;t ordinary notary work. This is document presentation with purpose.</em>
          </p>

          <div
            className="info-hover-card"
            style={styles.credentials}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.06)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.36)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
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
              I&apos;m here to make notarization feel effortless and beautiful.
            </p>
          </div>

          <h2 style={styles.sectionTitle}>My Promise to You</h2>
          <p style={styles.paragraph}>
            Whether I meet you at your home, office, or online, you&apos;ll receive the same care:
          </p>
          <p style={{ ...styles.paragraph, textAlign: 'center', fontSize: '1.2em', letterSpacing: '2px' }}>
            <span style={styles.valueTitle}>Prepared. Protected. Professional.</span>
          </p>

          <div
            className="info-hover-card"
            style={styles.credentials}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.06)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.36)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h2 style={styles.credentialsTitle}>Credentials & Certifications</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={{ color: '#4CAF50', marginRight: '8px' }}>✓</span>
                Commissioned Notary Public
                <div style={{ color: '#bfb8ae', fontSize: '0.92rem', marginTop: '4px' }}>
                  Authorized to perform notarial acts for personal, legal, and business documents.
                </div>
              </li>
              <li style={styles.listItem}>
                <span style={{ color: '#4CAF50', marginRight: '8px' }}>✓</span>
                NNA Certified Notary Signing Agent
                <div style={{ color: '#bfb8ae', fontSize: '0.92rem', marginTop: '4px' }}>
                  Trained for loan packages, lender documents, and guided real-estate signing appointments.
                </div>
              </li>
              <li style={styles.listItem}>
                <span style={{ color: '#4CAF50', marginRight: '8px' }}>✓</span>
                NNA Certified RON
                <div style={{ color: '#bfb8ae', fontSize: '0.92rem', marginTop: '4px' }}>
                  Prepared for secure remote online notarization when the document and requirements allow it.
                </div>
              </li>
              <li style={styles.listItem}>
                <span style={{ color: '#4CAF50', marginRight: '8px' }}>✓</span>
                Bonded
                <div style={{ color: '#bfb8ae', fontSize: '0.92rem', marginTop: '4px' }}>
                  Covered by the required surety bond connected to commissioned notarial service.
                </div>
              </li>
              <li style={styles.listItem}>
                <span style={{ color: '#4CAF50', marginRight: '8px' }}>✓</span>
                Background Screened
                <div style={{ color: '#bfb8ae', fontSize: '0.92rem', marginTop: '4px' }}>
                  Screened to support lender, title, and client confidence for sensitive appointments.
                </div>
              </li>
              <li style={styles.listItem}>
                <span style={{ color: '#4CAF50', marginRight: '8px' }}>✓</span>
                E&amp;O Insurance
                <div style={{ color: '#bfb8ae', fontSize: '0.92rem', marginTop: '4px' }}>
                  Additional professional protection for notarial work and document handling.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {scrollY > 80 ? (
        <>
          <button
            onClick={() =>
              window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
            }
            style={{
              position: 'fixed',
              left: '10px',
              top: '146px',
              border: 'none',
              background: 'transparent',
              color: 'rgba(183, 176, 167, 0.5)',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.18rem',
              fontWeight: 300,
              letterSpacing: '0.35px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              zIndex: 15,
              lineHeight: 1,
              textAlign: 'left',
            }}
          >
            Back to
            <br />
            Bottom
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              left: '10px',
              bottom: '72px',
              border: 'none',
              background: 'transparent',
              color: 'rgba(183, 176, 167, 0.5)',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.18rem',
              fontWeight: 300,
              letterSpacing: '0.35px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              zIndex: 15,
              lineHeight: 1,
              textAlign: 'left',
            }}
          >
            Back to
            <br />
            Top
          </button>
        </>
      ) : null}

      <SiteFooter compact mode="notary" />
    </div>
  );
}

export default About;
