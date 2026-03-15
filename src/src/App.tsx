import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Hire from './pages/Hire';
import SalonHome from './pages/SalonHome';
import SalonClientPortal from './pages/SalonClientPortal';
import SalonPackages from './pages/SalonPackages';
import Documents from './pages/Documents';

type Page = 'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [displayPage, setDisplayPage] = useState<Page>('landing');

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    setFadeState('out');
    setTimeout(() => {
      setCurrentPage(page);
      setDisplayPage(page);
      setFadeState('in');
    }, 200);
  };

  useEffect(() => {
    setDisplayPage(currentPage);
  }, [currentPage]);

  const renderPage = () => {
    switch (displayPage) {
      case 'landing':
        return <Landing onNavigate={handleNavigate} />;
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'documents':
        return <Documents onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'hire':
        return <Hire onNavigate={handleNavigate} />;
      case 'salon':
        return <SalonHome onNavigate={handleNavigate} />;
      case 'salon-portal':
        return <SalonClientPortal onNavigate={handleNavigate} />;
      case 'salon-packages':
        return <SalonPackages onNavigate={handleNavigate} />;
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  return (
    <div 
      className="app" 
      style={{
        opacity: fadeState === 'in' ? 1 : 0,
        transition: 'opacity 0.2s ease-out',
      }}
    >
      {renderPage()}
    </div>
  );
}

export default App;
