
import { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents'>('landing')

  let pageComponent;
  switch (currentPage) {
    case 'landing':
      pageComponent = <Landing onNavigate={setCurrentPage} />;
      break;
    case 'home':
      pageComponent = <Home onNavigate={setCurrentPage} />;
      break;
    case 'about':
      pageComponent = <About onNavigate={setCurrentPage} />;
      break;
    case 'services':
      pageComponent = <Services onNavigate={setCurrentPage} />;
      break;
    case 'contact':
      pageComponent = <Contact onNavigate={setCurrentPage} />;
      break;
    case 'hire':
      pageComponent = <Hire onNavigate={setCurrentPage} />;
      break;
    case 'salon':
      pageComponent = <SalonHome onNavigate={setCurrentPage} />;
      break;
    case 'salon-portal':
      pageComponent = <SalonClientPortal onNavigate={setCurrentPage} />;
      break;
    case 'salon-packages':
      pageComponent = <SalonPackages onNavigate={setCurrentPage} />;
      break;
    case 'documents':
      pageComponent = <Documents onNavigate={setCurrentPage} />;
      break;
    default:
      pageComponent = <Landing onNavigate={setCurrentPage} />;
  }

  return (
    <div className="app">
      {pageComponent}
    </div>
  );
}

export default App
