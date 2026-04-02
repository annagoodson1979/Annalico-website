import type { CSSProperties } from 'react';

interface SiteFooterProps {
  compact?: boolean;
}

function SiteFooter({ compact = false }: SiteFooterProps) {
  const styles: Record<string, CSSProperties> = {
    footer: {
      width: '100%',
      padding: compact ? '16px 15px' : '20px 15px',
      boxSizing: 'border-box',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.42)',
      background: '#000',
      color: '#ffffff',
      fontFamily: "'Montserrat', sans-serif",
      fontSize: compact ? '12px' : '13px',
      letterSpacing: '1px',
      lineHeight: 1.6,
      marginTop: 'auto',
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    year: {
      color: '#ffffff',
      fontWeight: 500,
    },
    email: {
      color: '#f0dfe5',
    },
  };

  return (
    <footer style={styles.footer}>
      <span style={styles.year}>
        <span style={{ fontSize: '0.7em', verticalAlign: 'super' }}>@</span>2001
      </span>{' '}
      | Yen An LLC | All Rights Reserved |{' '}
      <span style={styles.email}>info@theyenan.com</span> | <span style={styles.year}>(972) 900-7147</span>
    </footer>
  );
}

export default SiteFooter;
