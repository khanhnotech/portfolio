// Component Home - Trang chủ với hero section hiện đại
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
// Import useLanguage hook
import { useLanguage } from '../contexts/LanguageContext'
// Import social links config
import socialLinks from '../config/socialLinks'
// Import useNavigate for routing
import { useNavigate } from 'react-router-dom'

function Home() {
  // Lấy function translate từ context
  const { t } = useLanguage()
  const navigate = useNavigate()

  // Hàm điều hướng đến trang CV
  const handleDownloadCV = () => {
    navigate('/cv')
  }
  return (
    // Container chính với background responsive theo theme
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      {/* Travel icon ở giữa màn hình - absolute position */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 animate-float pointer-events-none">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 md:p-10 lg:p-12 rounded-full shadow-2xl animate-pulseGlow">
          <img 
            src="/images/travel.png" 
            alt="Travel Icon" 
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>
      </div>

      {/* Hero Section - Layout 2 cột với container - padding thấp hơn */}
      <div className="container bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 mx-auto px-4  lg:py-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Cột trái - Text content với animations */}
          <div className="text-left space-y-6 animate-slideInLeft">
            {/* Badge hoặc greeting với animation */}
            <div className="inline-flex items-center gap-2 bg-orange-500 bg-opacity-20 border border-orange-500 rounded-full px-4 py-2 animate-scaleIn hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faCode} className="text-orange-400 text-xl animate-bounce-slow" />
              <span className="text-orange-400 font-semibold">{t('home.greeting')}</span>
            </div>

            {/* Tên với fade in - Font mono cho style tech */}
            <h1 className="text-gray-600 dark:text-gray-300 text-2xl md:text-3xl font-mono font-light tracking-wider animate-fadeIn animation-delay-200">
              LAM PHUONG KHANH
            </h1>

            {/* Title chính - Professional design với multiple effects */}
            <div className="relative animate-fadeIn animation-delay-400">
              {/* Main title với gradient và effects */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight relative">
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  {t('home.title')}
                </span>
              </h2>
              
              {/* Underline decoration */}
              <div className="mt-4 h-1.5 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-scaleIn animation-delay-600"></div>
            </div>

            {/* Mô tả ngắn với animation */}
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed animate-fadeIn animation-delay-600">
              {t('home.description')}
            </p>

            {/* Social icons với Font Awesome và staggered animation - với links thật */}
            <div className="flex flex-wrap gap-3 pt-4 animate-fadeIn animation-delay-800">
              {/* YouTube */}
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 animate-scaleIn animation-delay-200 group"
                title="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-gray-700 dark:text-white group-hover:text-white text-xl" />
              </a>
              
              {/* Facebook */}
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 animate-scaleIn animation-delay-300 group"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-gray-700 dark:text-white group-hover:text-white text-xl" />
              </a>
              
              {/* TikTok */}
              <a 
                href={socialLinks.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 animate-scaleIn animation-delay-400 group"
                title="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} className="text-gray-700 dark:text-white group-hover:text-white text-xl" />
              </a>
              
              {/* GitHub */}
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 dark:bg-gray-800 hover:bg-gray-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 animate-scaleIn animation-delay-500 group"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-gray-700 dark:text-white group-hover:text-white text-xl" />
              </a>
            </div>

            {/* CTA Buttons với icons và animations - Font display */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button 
                onClick={handleDownloadCV}
                className="bg-transparent border-2 border-gray-600 hover:border-orange-500 hover:bg-orange-500/10 text-white font-display font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
              >
                <FontAwesomeIcon icon={faDownload} className="group-hover:animate-bounce-slow" />
                {t('home.downloadCV')}
              </button>
            </div>

            {/* Stats - Thống kê với animations */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-12 border-t border-gray-300 dark:border-gray-700">
              <div className="text-center p-4 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300 animate-fadeIn animation-delay-200 group">
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300 inline-block">5+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">{t('home.experiences')}</p>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300 animate-fadeIn animation-delay-400 group">
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300 inline-block">20+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">{t('home.projectDone')}</p>
              </div>
              <div className="text-center p-4 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300 animate-fadeIn animation-delay-600 group">
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300 inline-block">80+</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">{t('home.happyClients')}</p>
              </div>
            </div>
          </div>

          {/* Cột phải - Avatar với ảnh đại diện */}
          <div className="relative flex justify-center animate-slideInRight">
            {/* Background decoration với animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
            
            {/* Container cho avatar */}
            <div className="relative">

              {/* Ảnh đại diện chính - layer trên cùng, di chuyển xuống dưới trên desktop */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[550px] lg:h-[650px] xl:w-[600px] xl:h-[700px] z-20 group -mt-8 md:-mt-12 lg:mt-12">
                {/* Avatar với hover effect - object-contain để giữ nguyên tỷ lệ và background trong suốt */}
                <img 
                  src="/images/lamphuongkhanh-nobg.png" 
                  alt="Lam Phuong Khanh - Developer Portfolio" 
                  className="w-full h-full object-contain object-top drop-shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                />
                
                {/* Decorative elements - Hiệu ứng trang trí với animation */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 blur-xl animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-xl animate-float animation-delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
