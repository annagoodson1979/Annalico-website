import type { CSSProperties } from 'react';

interface SiteFooterProps {
  compact?: boolean;
  mode?: 'default' | 'notary';
}

function SiteFooter({ compact = false, mode = 'default' }: SiteFooterProps) {
  const styles: Record<string, CSSProperties> = {
    footer: {
      width: '100%',
      padding: compact ? '9px 12px' : '14px 15px',
      boxSizing: 'border-box',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      background: '#000',
      color: 'rgba(244, 239, 232, 0.76)',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: compact ? '10px' : '11px',
      letterSpacing: '0.8px',
      lineHeight: 1.25,
      marginTop: 'auto',
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    year: {
      color: 'rgba(244, 239, 232, 0.76)',
      fontWeight: 500,
    },
    separator: {
      color: '#d4af37',
      margin: '0 10px',
    },
    email: {
      color: 'rgba(244, 239, 232, 0.76)',
    },
    text: {
      color: 'rgba(244, 239, 232, 0.76)',
    },
  };

  if (mode === 'notary') {
    return (
      <footer style={styles.footer}>
        <span style={styles.text}>YNX Notary</span>
        <span style={styles.separator}>|</span>
        <span style={styles.year}>(972) 900-7147</span>
        <span style={styles.separator}>|</span>
        <span style={styles.email}>info@ynxnotary.com</span>
        <span style={styles.separator}>|</span>
        <span style={styles.text}>A Brand of Duyên Ân LLC</span>
      </footer>
    );
  }

  return (
    <footer style={styles.footer}>
      <span style={styles.year}>
        <span style={{ fontSize: '0.7em', verticalAlign: 'super' }}>@</span>2001
      </span>
      <br />
      <span style={styles.text}>Yen An LLC</span>
      <br />
      <span style={styles.text}>All Rights Reserved</span>
      <br />
      <span style={styles.email}>info@theyenan.com</span>
      <br />
      <span style={styles.year}>(972) 900-7147</span>
    </footer>
  );
}

export default SiteFooter;
