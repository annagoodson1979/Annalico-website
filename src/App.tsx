import { useState } from 'react'
import Landing from './pages/Landing'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'home' | 'about' | 'services' | 'contact' | 'hire' | 'salon' | 'salon-portal' | 'salon-packages' | 'documents'>('landing')

  return (
    <div className="app">
      <Landing onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
