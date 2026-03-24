import { useState } from 'react'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Hire from './pages/Hire'
import SalonHome from './pages/SalonHome'
import SalonClientPortal from './pages/SalonClientPortal'
import SalonPackages from './pages/SalonPackages'
import Documents from './pages/Documents'
import type { Page } from './types'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')

  const navigate = (page: Page) => setCurrentPage(page)

  return (
    <div className="app">
      {currentPage === 'landing' && <Landing onNavigate={navigate} />}
      {currentPage === 'home' && <Home onNavigate={navigate} />}
      {currentPage === 'about' && <About onNavigate={navigate} />}
      {currentPage === 'services' && <Services onNavigate={navigate} />}
      {currentPage === 'contact' && <Contact onNavigate={navigate} />}
      {currentPage === 'hire' && <Hire onNavigate={navigate} />}
      {currentPage === 'salon' && <SalonHome onNavigate={navigate} />}
      {currentPage === 'salon-portal' && <SalonClientPortal onNavigate={navigate} />}
      {currentPage === 'salon-packages' && <SalonPackages onNavigate={navigate} />}
      {currentPage === 'documents' && <Documents onNavigate={navigate} />}
    </div>
  )
}

export default App
