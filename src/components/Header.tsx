// Component Header - Thanh điều hướng hiện đại với dark theme
import { useState } from 'react'
// Import Font Awesome icons cho theme và language toggle
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons'
// Import custom hooks
import { useTheme } from '../contexts/ThemeContext'
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
  
  // Lấy theme và language từ contexts
  const { theme, toggleTheme } = useTheme()
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
    // Header với background responsive theo theme
    // backdrop-blur-lg: làm mờ background phía sau
    // bg-opacity-95: độ trong suốt 95%
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
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
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'  // Inactive: xám, hover
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

            {/* Theme Toggle Button - Dark/Light */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <FontAwesomeIcon 
                icon={theme === 'dark' ? faSun : faMoon} 
                className="text-xl"
              />
            </button>

            {/* Language Toggle Button - EN/VI */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-1"
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
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }
                `}
              >
                {t(tab.labelKey)}
              </button>
            ))}

            {/* Theme và Language toggle cho mobile */}
            <div className="flex gap-2 pt-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all flex items-center justify-center gap-2"
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
