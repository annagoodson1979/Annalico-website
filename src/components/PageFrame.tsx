import type { CSSProperties, ReactNode } from 'react';
import type { Page } from '../types';

const logoImage = '/images/20260118_134105000_iOS.jpg';

interface PageFrameProps {
  children: ReactNode;
  onNavigate: (page: Page) => void;
  title: string;
  subtitle?: string;
  backTo?: Page;
  backLabel?: string;
  maxWidth?: string;
}

function PageFrame({
  children,
  onNavigate,
  title,
  subtitle,
  backTo,
  backLabel = 'Back',
  maxWidth = '1100px',
}: PageFrameProps) {
  const gold = '#d4af37';

  const styles: Record<string, CSSProperties> = {
    shell: {
      minHeight: '100vh',
      background:
        'radial-gradient(circle at top, rgba(212, 175, 55, 0.12), transparent 30%), linear-gradient(180deg, #030303 0%, #000 70%)',
      color: '#fff',
      fontFamily: "'Montserrat', sans-serif",
      overflow: 'hidden',
      position: 'relative',
    },
    logoButton: {
      position: 'fixed',
      top: '22px',
      left: '22px',
      width: '74px',
      height: '74px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '1px solid rgba(212, 175, 55, 0.45)',
      background: '#080808',
      cursor: 'pointer',
      zIndex: 20,
      boxShadow: '0 0 16px rgba(212, 175, 55, 0.25)',
      padding: 0,
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    backButton: {
      position: 'fixed',
      top: '34px',
      right: '28px',
      border: `1px solid ${gold}`,
      background: 'rgba(0, 0, 0, 0.6)',
      color: gold,
      padding: '10px 18px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontSize: '11px',
      cursor: 'pointer',
      zIndex: 20,
    },
    main: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '110px 28px 36px',
      boxSizing: 'border-box',
    },
    panel: {
      width: '100%',
      maxWidth,
      minHeight: 'calc(100vh - 160px)',
      maxHeight: 'calc(100vh - 160px)',
      background: 'linear-gradient(180deg, rgba(17, 17, 17, 0.92) 0%, rgba(5, 5, 5, 0.98) 100%)',
      border: '1px solid rgba(212, 175, 55, 0.18)',
      borderRadius: '26px',
      padding: '38px 42px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '26px',
      flexShrink: 0,
    },
    title: {
      margin: 0,
      fontSize: 'clamp(2rem, 4vw, 3.6rem)',
      fontWeight: 200,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      color: gold,
      textShadow: '0 0 18px rgba(212, 175, 55, 0.18)',
    },
    line: {
      width: '96px',
      height: '2px',
      margin: '16px auto 14px',
      background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
      boxShadow: '0 0 8px rgba(212, 175, 55, 0.35)',
    },
    subtitle: {
      margin: 0,
      color: '#a5a5a5',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontSize: '0.82rem',
      lineHeight: 1.6,
    },
    body: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '18px',
    },
  };

  return (
    <div style={styles.shell}>
      <style>{`
        @keyframes pageLogoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 16px rgba(212, 175, 55, 0.25); }
          50% { transform: scale(1.04); box-shadow: 0 0 24px rgba(212, 175, 55, 0.35); }
        }
      `}</style>

      <button
        style={{ ...styles.logoButton, animation: 'pageLogoPulse 2.6s ease-in-out infinite' }}
        onClick={() => onNavigate('landing')}
        aria-label="Back to landing"
      >
        <img src={logoImage} alt="Anna-Li Co." style={styles.logoImage} />
      </button>

      {backTo && (
        <button style={styles.backButton} onClick={() => onNavigate(backTo)}>
          {backLabel}
        </button>
      )}

      <main style={styles.main}>
        <section style={styles.panel}>
          <header style={styles.header}>
            <h1 style={styles.title}>{title}</h1>
            <div style={styles.line}></div>
            {subtitle ? <p style={styles.subtitle}>{subtitle}</p> : null}
          </header>
          <div style={styles.body}>{children}</div>
        </section>
      </main>
    </div>
  );
}

export default PageFrame;
