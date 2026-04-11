import { useState } from 'react';
import type { Page } from './types';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Hire from './pages/Hire';
import Documents from './pages/Documents';
import PartnershipDirectory from './pages/PartnershipDirectory';
import SalonHome from './pages/SalonHome';
import SalonClientPortal from './pages/SalonClientPortal';
import SalonPackages from './pages/SalonPackages';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'hire':
        return <Hire onNavigate={setCurrentPage} />;
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
        return <Landing onNavigate={setCurrentPage} />;
    }
  };

  return <div className="app">{renderPage()}</div>;
}

export default App;
