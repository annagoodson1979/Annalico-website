import type { Page } from '../types';
import PageFrame from '../components/PageFrame';

interface SalonClientPortalProps {
  onNavigate: (page: Page) => void;
}

function SalonClientPortal({ onNavigate }: SalonClientPortalProps) {
  return (
    <PageFrame
      onNavigate={onNavigate}
      title="Client Portal"
      subtitle="Packages, appointment history, and account support"
      backTo="salon"
      backLabel="Back to Salon Home"
      maxWidth="920px"
    >
      <div
        style={{
          background: '#101010',
          border: '1px solid #242424',
          borderRadius: '18px',
          padding: '28px',
          color: '#d0d0d0',
          lineHeight: 1.9,
          textAlign: 'center',
        }}
      >
        Portal access and account tools can be connected here next. For now, contact Anna directly
        for package tracking or appointment questions.
      </div>
    </PageFrame>
  );
}

export default SalonClientPortal;
