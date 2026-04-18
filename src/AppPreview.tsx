import { useState } from 'react';
import type { Page } from './types';
import LandingPreview from './pages/LandingPreview';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HowIHelp from './pages/HowIHelp';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import Hire from './pages/Hire';
import DidYouKnow from './pages/DidYouKnow';
import Documents from './pages/Documents';
import PartnershipDirectory from './pages/PartnershipDirectory';
import SalonHome from './pages/SalonHome';
import SalonClientPortal from './pages/SalonClientPortal';
import SalonPackages from './pages/SalonPackages';

function AppPreview() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'how-help':
        return <HowIHelp onNavigate={setCurrentPage} />;
      case 'prices':
        return <Prices onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'hire':
        return <Hire onNavigate={setCurrentPage} />;
      case 'did-you-know':
        return <DidYouKnow onNavigate={setCurrentPage} />;
      case 'partnership-directory':
        return <PartnershipDirectory onNavigate={setCurrentPage} />;
      case 'documents':
        return <Documents onNavigate={setCurrentPage} />;
      case 'salon':
        return <SalonHome onNavigate={setCurrentPage} />;
      case 'salon-portal':
        return <SalonClientPortal onNavigate={setCurrentPage} />;
      case 'salon-packages':
        return <SalonPackages onNavigate={setCurrentPage} />;
      case 'landing':
      default:
        return <LandingPreview onNavigate={setCurrentPage} />;
    }
  };

  return <div className="app">{renderPage()}</div>;
}

export default AppPreview;
