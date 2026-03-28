import React, { useState } from 'react';
import type { Page } from '../types';
const heroImage = '/images/hero.jpg';
interface LandingProps {
  onNavigate: (page: Page) => void;
}

function Landing({ onNavigate }: LandingProps) {
  const [hoveredBusiness, setHoveredBusiness] = useState<
    'notary' | 'salon' | 'partnership' | null
  >(null);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const gold = '#d4af37';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your partnership inquiry! We will get back to you soon.');
    setShowPartnershipForm(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      fontFamily: "'Montserrat', sans-serif",
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
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
    },
    startHere: {
      fontSize: '0.7em',
      fontWeight: 300,
      letterSpacing: '3px',
      color: gold,
      textTransform: 'uppercase' as const,
    },
    navDivider: {
      width: '2px',
      height: '20px',
      background: '#333',
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
      transformOrigin: 'top center',
      background: '#0a0a0a',
      border: '1px solid #222',
      borderTop: `2px solid ${gold}`,
      padding: '10px 0',
      zIndex: 200,
      boxShadow: '0 10px 30px rgba(0,0,0,0.9)',
      minWidth: '140px',
      overflow: 'hidden' as const,
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
    partnershipButton: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '0.65em',
      fontWeight: 300,
      letterSpacing: '1.5px',
      textTransform: 'uppercase' as const,
      color: '#aaa',
      background: 'transparent',
      border: '1px solid #333',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: '8px 16px',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'calc(100vh - 60px)',
      paddingTop: '60px',
      overflow: 'hidden',
      minHeight: 0,
    },
    intro: {
      marginBottom: '30px',
      animation: 'fadeInUp 1.2s ease-out forwards',
    },
    introText: {
      fontSize: '4em',
      fontWeight: 100,
      letterSpacing: '8px',
      textTransform: 'uppercase' as const,
      color: gold,
      marginBottom: '20px',
      animation: 'pulse 10s ease-in-out infinite, glow 10s ease-in-out infinite',
    },
    introLine: {
      width: '80px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      margin: '30px auto',
      boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
    },
    businessSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
      width: '100%',
      maxWidth: '800px',
      animation: 'fadeInUp 1.2s ease-out 0.4s forwards',
      opacity: 0,
    },
    businessName: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.1em',
      fontWeight: 100,
      letterSpacing: '4px',
      textTransform: 'uppercase' as const,
      color: '#aaa',
      lineHeight: 1.4,
    },
    businessNameSub: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '1.1em',
      fontWeight: 100,
      letterSpacing: '4px',
      textTransform: 'uppercase' as const,
      color: '#aaa',
      lineHeight: 1.4,
    },
    hero: {},
    footer: {
      background: '#000',
      color: gold,
      textAlign: 'center',
      padding: '20px 15px',
      fontSize: '13px',
      letterSpacing: '1px',
      borderTop: '1px solid #111',
      position: 'fixed' as const,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 80,
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
    nymsTitle: {
      fontFamily: "'Modernline', cursive",
      fontSize: '1.1em',
      fontWeight: 400,
      color: gold,
      textTransform: 'lowercase',
      display: 'inline-block',
      marginRight: '3px',
      marginLeft: '2px',
      verticalAlign: 'baseline',
      position: 'relative' as const,
      top: '8px',
      left: '12px',
    },
    yearWhite: {
      color: '#ffffff',
      fontWeight: 300,
    },
  };

  const businessPulseKeyframes = `
    @keyframes businessPulse {
      0%, 100% { text-shadow: 0 0 15px rgba(212, 175, 55, 0.3); transform: scale(1); }
      50% { text-shadow: 0 0 35px rgba(212, 175, 55, 0.8); transform: scale(1.03); }
    }
  `;

  const pulseKeyframes = `
    @keyframes pulse {
      0%, 100% { color: #d4af37; }
      25% { color: #e8d5a3; }
      50% { color: #f5f0e0; }
      75% { color: #e8d5a3; }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{`@font-face { font-family: 'Modernline'; src: url('/fonts/modernline.otf') format('opentype'); font-weight: normal; font-style: normal; }`}{businessPulseKeyframes}{pulseKeyframes}
      {`
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
        @keyframes beamSweep {
          0%, 100% { opacity: 0.06; transform: rotate(-5deg); }
          50% { opacity: 0.12; transform: rotate(5deg); }
        }
        @keyframes wiperLeft {
          0% { transform: rotate(-25deg); opacity: 0.15; }
          100% { transform: rotate(25deg); opacity: 0.25; }
        }
        @keyframes wiperRight {
          0% { transform: rotate(25deg); opacity: 0.15; }
          100% { transform: rotate(-25deg); opacity: 0.25; }
        }
        @keyframes lineExpand {
          0% { width: 0; opacity: 0; }
          100% { width: 200px; opacity: 1; }
        }
        @keyframes lampSway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0% { transform: translateX(-20px) translateY(0); }
          25% { transform: translateX(0) translateY(-10px); }
          50% { transform: translateX(20px) translateY(0); }
          75% { transform: translateX(0) translateY(10px); }
          100% { transform: translateX(-20px) translateY(0); }
        }
      `}
      </style>

      <nav style={{ ...styles.navbar, justifyContent: 'center' }}>
        <div
          style={{
            width: '100px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginRight: '10px',
            paddingTop: '10px',
          }}
        >
          <span
            style={{
              fontSize: '0.7em',
              fontWeight: 300,
              letterSpacing: '2px',
              color: gold,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Start
            <br />
            here
          </span>
        </div>
        <div style={styles.navDivider}></div>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('notary')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('home')}>
            Notary
          </button>
          {hoveredBusiness === 'notary' && (
            <div style={{ ...styles.dropdown, minWidth: '150px' }}>
              <button style={styles.dropdownItem} onClick={() => onNavigate('home')}>
                Website
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('services')}>
                Services & Prices
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('documents')}>
                Documents I Sign
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Contact
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Booking Request
              </button>
            </div>
          )}
        </div>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('salon')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('salon')}>
            Salon
          </button>
          {hoveredBusiness === 'salon' && (
            <div style={{ ...styles.dropdown, minWidth: '150px' }}>
              <button style={styles.dropdownItem} onClick={() => onNavigate('salon')}>
                Website
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('salon-portal')}>
                Client Portal
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('salon-packages')}>
                Packages
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Contact
              </button>
            </div>
          )}
        </div>
        <button style={{ ...styles.navButton, color: gold }} onClick={() => onNavigate('hire')}>
          DID YOU KNOW?
        </button>
        <div
          style={styles.navItem}
          onMouseEnter={() => setHoveredBusiness('partnership')}
          onMouseLeave={() => setHoveredBusiness(null)}
        >
          <button style={styles.navButton} onClick={() => onNavigate('contact')}>
            Partnership
          </button>
          {hoveredBusiness === 'partnership' && (
            <div style={{ ...styles.dropdown, minWidth: '180px' }}>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Preferred Partner Portal
              </button>
              <button style={styles.dropdownItem} onClick={() => onNavigate('contact')}>
                Local Network Portal
              </button>
            </div>
          )}
        </div>
        <button style={styles.navButton} onClick={() => onNavigate('about')}>
          About Me
        </button>
        <button style={styles.navButton} onClick={() => onNavigate('contact')}>
          Contact
        </button>
      </nav>

      <div
        style={{
          position: 'fixed',
          left: '42%',
          top: '58%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          zIndex: 1,
          textAlign: 'center',
          background: '#000',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          padding: '16px 0 24px 0',
          overflow: 'hidden',
        }}
      >
        <img
          src={heroImage}
          alt="Hero"
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '12px',
            background: '#000',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div
            style={{
              position: 'absolute' as const,
              top: '74%',
              left: '38%',
              transform: 'translate(-50%, calc(-50% + 24px))',
              textAlign: 'center' as const,
              zIndex: 10,
              animation:
                'fadeInUp 1s ease-out forwards, pulse 10s ease-in-out infinite 1s, glow 10s ease-in-out infinite 1s',
            }}
          >
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '2.5em',
                fontWeight: 100,
                letterSpacing: '6px',
                textTransform: 'uppercase',
                marginBottom: '10px',
                color: gold,
                margin: 0,
                whiteSpace: 'nowrap' as const,
              }}
            >
              ANNA-LI CO.
            </h1>
            <div
              style={{
                width: '0',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                margin: '15px auto 0',
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                animation: 'lineExpand 1s ease-out 1.2s forwards',
              }}
            ></div>
          </div>
          <div style={styles.businessSection}></div>
        </section>

        <div
          style={{
            position: 'fixed' as const,
            right: '120px',
            bottom: '100px',
            zIndex: 50,
            width: '180px',
            textAlign: 'center' as const,
          }}
        >
          <div style={{ position: 'relative', width: '180px', height: '160px' }}>
            <div
              style={{
                position: 'absolute' as const,
                left: '30px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                animation: 'lampSway 3s ease-in-out infinite',
                transformOrigin: 'bottom center',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '10px',
                  background: `radial-gradient(ellipse at center, ${gold} 0%, #8a7020 100%)`,
                  borderRadius: '50%',
                  boxShadow: 'none',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 'calc(50% - 50px)',
                    bottom: '100%',
                    transform: 'translateX(-50%)',
                    width: '128px',
                    height: '240px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.42) 0%, rgba(212, 175, 55, 0.22) 38%, rgba(212, 175, 55, 0.09) 70%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 100% 0%, 0% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperLeft 2s ease-in-out infinite alternate',
                    filter: 'blur(3px)',
                    boxShadow: '0 0 35px rgba(212, 175, 55, 0.18)',
                    zIndex: 1,
                  }}
                ></div>
              </div>
              <div style={{ width: '6px', height: '6px', background: '#333', zIndex: 4 }}></div>
            </div>

            <div
              style={{
                position: 'absolute' as const,
                right: '30px',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                animation: 'lampSway 5s ease-in-out infinite 2.5s',
                transformOrigin: 'bottom center',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '10px',
                  background: `radial-gradient(ellipse at center, ${gold} 0%, #8a7020 100%)`,
                  borderRadius: '50%',
                  boxShadow: 'none',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 'calc(50% - 50px)',
                    bottom: '100%',
                    transform: 'translateX(-50%)',
                    width: '128px',
                    height: '240px',
                    background:
                      'linear-gradient(0deg, rgba(212, 175, 55, 0.42) 0%, rgba(212, 175, 55, 0.22) 38%, rgba(212, 175, 55, 0.09) 70%, transparent 100%)',
                    clipPath: 'polygon(49% 100%, 51% 100%, 100% 0%, 0% 0%)',
                    transformOrigin: 'bottom center',
                    pointerEvents: 'none' as const,
                    animation: 'wiperRight 2s ease-in-out infinite alternate',
                    filter: 'blur(3px)',
                    boxShadow: '0 0 35px rgba(212, 175, 55, 0.18)',
                    zIndex: 1,
                  }}
                ></div>
              </div>
              <div style={{ width: '6px', height: '6px', background: '#333', zIndex: 4 }}></div>
            </div>

            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '15px',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${gold} 0%, #8a7020 100%)`,
                  margin: '0 auto 2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.35em',
                  color: '#000',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  boxShadow: `0 0 10px ${gold}`,
                  animation: 'none',
                }}
              >
                SS
              </div>
              <p
                style={{
                  fontSize: '0.22em',
                  color: gold,
                  margin: '0 0 8px',
                  fontFamily: "'Allura', cursive",
                  textTransform: 'lowercase',
                  letterSpacing: '1px',
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                }}
              >
                notary
              </p>
            </div>

            <div
              style={{
                position: 'absolute' as const,
                left: '50%',
                top: '62px',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                zIndex: 10,
              }}
            >
              <p
                style={{
                  fontSize: '0.26em',
                  color: '#aaa',
                  margin: '0 0 1px',
                  letterSpacing: '2px',
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                  whiteSpace: 'nowrap',
                }}
              >
                Seal and Stamp
              </p>
              <p
                style={{
                  fontSize: '0.24em',
                  color: '#aaa',
                  margin: '0 0 3px',
                  letterSpacing: '3px',
                  textShadow: '0 0 8px rgba(0,0,0,0.9)',
                }}
              >
                Notary
              </p>
            </div>

            <button
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '8px',
                transform: 'translateX(-50%)',
                padding: '2px 8px',
                background: 'transparent',
                border: 'none',
                color: gold,
                fontSize: '0.38em',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                textShadow: '0 0 10px rgba(0,0,0,0.8)',
                zIndex: 10,
              }}
              onClick={() =>
                alert(
                  'Seal and Stamp Notary\nMobile Notary Services\nLicensed, Bonded & Insured\nServing: Dallas-Fort Worth',
                )
              }
            >
              View
            </button>
          </div>

          <p
            style={{
              fontSize: '0.22em',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: '#555',
              margin: '8px 0 0',
              whiteSpace: 'nowrap',
            }}
          >
            This Week's Spotlight
          </p>
        </div>

        <footer style={styles.footer}>
          <p>
            <span style={styles.yearWhite}>
              <span style={{ fontSize: '0.7em', verticalAlign: 'super' }}>@</span>2001
            </span>{' '}
            | Anna-Li Co. | All Rights Reserved | <span style={{ color: gold }}>anna@annalico.com</span>{' '}
            | <span style={styles.yearWhite}>(972) 900-7147</span>
          </p>
        </footer>
      </main>

      {showPartnershipForm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowPartnershipForm(false)}
        >
          <div
            style={{
              background: '#0a0a0a',
              border: `1px solid ${gold}`,
              padding: '40px',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '90vh',
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                color: gold,
                fontSize: '1.5em',
                fontWeight: 300,
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Partnership Inquiry
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    border: '1px solid #333',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    border: '1px solid #333',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    border: '1px solid #333',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#888',
                    fontSize: '0.8em',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#111',
                    border: '1px solid #333',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    minHeight: '120px',
                    marginBottom: '20px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: gold,
                    color: '#000',
                    border: 'none',
                    fontFamily: 'inherit',
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={() => setShowPartnershipForm(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    background: 'transparent',
                    color: '#888',
                    border: '1px solid #333',
                    fontFamily: 'inherit',
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
