// Component Header - Thanh điều hướng hiện đại với dark theme
import { useState } from 'react'
// Import Font Awesome icons cho language toggle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
// Import custom hook
import { useLanguage } from '../contexts/LanguageContext'

// Interface định nghĩa kiểu dữ liệu cho props
interface HeaderProps {
  activeTab: string           // Tab đang được chọn
  onTabChange: (tab: string) => void  // Hàm callback khi đổi tab
}

// Component Header nhận props từ component cha
function Header({ activeTab, onTabChange }: HeaderProps) {
  // State để quản lý menu mobile (đóng/mở)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Lấy language từ context
  const { language, toggleLanguage, t } = useLanguage()

  // Danh sách các tab trong menu - sử dụng translation keys
  const tabs = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'technologies', labelKey: 'nav.services' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'projects', labelKey: 'nav.portfolio' },
    { id: 'contact', labelKey: 'nav.contact' },
  ]

  return (
    // Header với background xanh dương đậm
    // backdrop-blur-lg: làm mờ background phía sau
    // bg-opacity-95: độ trong suốt 95%
    <header className="sticky top-0 z-50 bg-gradient-to-b from-gray-900 via-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - vietnam.png */}
          <div className="flex items-center gap-3">
            {/* Logo image từ vietnam.png */}
            <img 
              src="/images/vietnam.png" 
              alt="Vietnam Logo" 
              className="h-10 w-auto"
            />
            {/* Text logo với font display */}
            <div className="text-xl font-display font-bold text-orange-500 tracking-tight">
              Portfolio
            </div>
          </div>

          {/* Menu desktop - ẩn trên mobile */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Map qua danh sách tabs để render các button */}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                // Conditional className: tab active có màu orange
                className={`
                  px-6 py-2 rounded-lg font-display font-medium transition-all duration-300
                  ${activeTab === tab.id
                    ? 'text-orange-500'  // Active: màu orange
                    : 'text-gray-300 hover:text-white'  // Inactive: xám nhạt, hover trắng
                  }
                `}
              >
                {t(tab.labelKey)}
              </button>
            ))}
            
            {/* Button "Hire Me" nổi bật với font display */}
            <button 
              onClick={() => onTabChange('contact')}
              className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-display font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t('nav.hireMe')}
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-700 mx-2"></div>

            {/* Language Toggle Button - EN/VI */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-300 hover:text-orange-500 transition-colors rounded-lg hover:bg-blue-900 flex items-center gap-1"
              title={language === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
            >
              <FontAwesomeIcon icon={faLanguage} className="text-xl" />
              <span className="text-sm font-semibold">{language.toUpperCase()}</span>
            </button>
          </nav>

          {/* Nút hamburger menu cho mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white text-2xl p-2"
          >
            {/* Icon hamburger hoặc X */}
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile - slide down animation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-fadeIn">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`
                  w-full px-4 py-3 rounded-lg font-medium text-left transition-all
                  ${activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:bg-blue-900 hover:text-white'
                  }
                `}
              >
                {t(tab.labelKey)}
              </button>
            ))}

            {/* Language toggle cho mobile */}
            <div className="pt-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="w-full px-4 py-3 rounded-lg bg-blue-900 text-gray-300 hover:text-orange-500 transition-all flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faLanguage} />
                <span className="text-sm font-semibold">{language.toUpperCase()}</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
