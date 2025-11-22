// Component App - Component chính của ứng dụng Portfolio
// Import hook useState từ React để quản lý state
import { useState } from 'react'

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

// Component App - Quản lý toàn bộ ứng dụng
function App() {
  // State để lưu tab hiện tại đang được chọn
  // Mặc định là 'home' - trang chủ
  const [activeTab, setActiveTab] = useState('home')
  // Lấy function translate từ context
  const { t } = useLanguage()

  // Hàm render nội dung dựa vào tab được chọn
  // Switch case để quyết định component nào sẽ hiển thị
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'technologies':
        return <Technologies />
      case 'projects':
        return <Projects />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    // Container chính - background thay đổi theo theme
    // dark:bg-gray-900 = dark mode màu xám đen
    // bg-gray-50 = light mode màu xám sáng
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header component - thanh điều hướng */}
      {/* Truyền props: activeTab (tab hiện tại) và onTabChange (hàm đổi tab) */}
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab}  // Khi user click tab, gọi setActiveTab để cập nhật state
      />
      
      {/* Main content - nội dung chính */}
      {/* renderContent() sẽ trả về component tương ứng với tab được chọn */}
      <main>
        {renderContent()}
      </main>

      {/* Date Time Widget - Fixed position */}
      <DateTimeWidget />

      {/* Footer - chân trang responsive với theme */}
      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8 text-center transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-4">
            {/* Social links với Font Awesome và links thật */}
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors text-2xl" title="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors text-2xl" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors text-2xl" title="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl" title="GitHub">
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

// Export component App để sử dụng trong main.tsx
export default App
