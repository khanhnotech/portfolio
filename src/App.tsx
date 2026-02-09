// Component App - Component chính của ứng dụng Portfolio với React Router
// Import React Router
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
// Import hook useState từ React để quản lý state
import { useState, useEffect } from 'react'

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
// Import useLanguage hook
import { useLanguage } from './contexts/LanguageContext'
// Import social links
import socialLinks from './config/socialLinks'

// Import các components con
import Header from './components/Header'
import Home from './components/Home'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import DateTimeWidget from './components/DateTimeWidget'

// Component để handle navigation
function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useLanguage()
  
  // Xác định activeTab từ URL
  const getActiveTabFromPath = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'home'
      case '/technologies':
        return 'technologies'
      case '/projects':
        return 'projects'
      case '/about':
        return 'about'
      case '/contact':
        return 'contact'
      default:
        return 'home'
    }
  }

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath(location.pathname))

  // Update activeTab khi URL thay đổi
  useEffect(() => {
    setActiveTab(getActiveTabFromPath(location.pathname))
  }, [location.pathname])

  // Hàm handle tab change với navigation
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    // Navigate đến URL tương ứng
    switch (tab) {
      case 'home':
        navigate('/')
        break
      case 'technologies':
        navigate('/technologies')
        break
      case 'projects':
        navigate('/projects')
        break
      case 'about':
        navigate('/about')
        break
      case 'contact':
        navigate('/contact')
        break
      default:
        navigate('/')
    }
  }

  return (
    // Container chính - background xanh dương đậm cố định
    <div className="min-h-screen bg-blue-950 transition-colors duration-300">
      {/* Header component - thanh điều hướng */}
      <Header 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
      />
      
      {/* Main content - Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Date Time Widget - Fixed position */}
      <DateTimeWidget />

      {/* Footer - chân trang xanh dương đậm */}
      <footer className="bg-gradient-to-b from-gray-900 via-gray-900 border-t border-gray py-8 text-center transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-4">
            {/* Social links với Font Awesome và links thật */}
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors text-2xl" title="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors text-2xl" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl" title="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl" title="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            {t('footer.madeWith')}
          </p>
          <p className="text-gray-600 text-xs">
            {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  )
}

// Component App - Quản lý toàn bộ ứng dụng với Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

// Export component App để sử dụng trong main.tsx
export default App