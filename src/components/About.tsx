// Component About - Trang giới thiệu về bản thân với dark theme
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faSeedling, 
  faRocket, 
  faStar,
  faCode,
  faBook,
  faGamepad,
  faMusic,
  faCoffee,
  faRunning
} from '@fortawesome/free-solid-svg-icons'
// Import useLanguage hook
import { useLanguage } from '../contexts/LanguageContext'

function About() {
  // Lấy function translate từ context
  const { t } = useLanguage()
  // Dữ liệu timeline - các mốc thời gian quan trọng
  const timeline = [
    {
      year: '2023',
      title: 'Bắt đầu học lập trình',
      description: 'Khám phá thế giới lập trình web với HTML, CSS, JavaScript',
      icon: faSeedling
    },
    {
      year: '2024',
      title: 'Học React & Node.js',
      description: 'Chuyên sâu vào React, TypeScript và backend với Node.js',
      icon: faRocket
    },
    {
      year: '2025',
      title: 'Xây dựng dự án thực tế',
      description: 'Phát triển các ứng dụng web hoàn chỉnh và portfolio',
      icon: faStar
    },
  ]

  // Sở thích và kỹ năng mềm
  const interests = [
    { icon: faCode, text: 'Coding' },
    { icon: faBook, text: 'Reading' },
    { icon: faGamepad, text: 'Gaming' },
    { icon: faMusic, text: 'Music' },
    { icon: faCoffee, text: 'Coffee' },
    { icon: faRunning, text: 'Sports' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-display font-bold text-white mb-4 tracking-tight">
          {t('about.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Phần giới thiệu chính */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full shadow-xl border-4 border-orange-500 overflow-hidden">
                <img 
                  src="/images/avatar-lamphuongkhanh.png" 
                  alt="Lam Phuong Khanh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thông tin */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('about.greeting')} 🇻🇳
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {t('about.intro1')}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t('about.intro2')}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline - Hành trình học tập */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t('about.journey')}
          </h3>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon và năm */}
                  <div className="flex-shrink-0 text-center">
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className="text-orange-500 text-5xl mb-2" 
                    />
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                      {item.year}
                    </div>
                  </div>

                  {/* Nội dung */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sở thích */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t('about.interests')}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gray-700 border border-gray-600 rounded-lg p-4 text-center hover:border-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <FontAwesomeIcon 
                  icon={interest.icon} 
                  className="text-orange-500 text-4xl mb-2" 
                />
                <div className="text-gray-300 font-semibold">
                  {interest.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote cuối */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
            <p className="text-xl text-gray-300 italic font-semibold">
              "{t('about.quote')}"
            </p>
            <p className="text-gray-500 mt-2">🇻🇳 Vietnam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
