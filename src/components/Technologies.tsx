// Component Technologies - Tab hiển thị các công nghệ đã học (Dark theme)
import { useState } from 'react'
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faJs } from '@fortawesome/free-brands-svg-icons'
import { faCode, faChartLine, faStar, faBook, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
// Import useLanguage hook
import { useLanguage } from '../contexts/LanguageContext'

// Interface cho một skill item
interface Skill {
  name: string      // Tên skill (VD: "Hooks", "JSX")
  level: number     // Mức độ thành thạo (0-100)
}

// Interface cho một công nghệ
interface Technology {
  id: string
  name: string
  icon: string      // Emoji icon
  color: string     // Màu gradient
  bgColor: string   // Màu background card
  skills: Skill[]   // Danh sách skills đã học
}

function Technologies() {
  // State lưu công nghệ đang được chọn để xem chi tiết
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  // Lấy function translate từ context
  const { t } = useLanguage()

  // Dữ liệu các công nghệ đã học với Font Awesome icons
  const technologies: Technology[] = [
    {
      id: 'react',
      name: 'React',
      icon: 'react', // Font Awesome icon name
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
      skills: [
        { name: 'JSX', level: 85 },
        { name: 'Components', level: 90 },
        { name: 'Props', level: 88 },
        { name: 'State', level: 85 },
        { name: 'Hooks (useState, useEffect)', level: 80 },
        { name: 'DOM Manipulation', level: 75 },
        { name: 'Event Handling', level: 85 },
        { name: 'Conditional Rendering', level: 90 },
      ]
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: 'node',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-emerald-500/10',
      skills: [
        { name: 'Express.js', level: 75 },
        { name: 'REST API', level: 80 },
        { name: 'Middleware', level: 70 },
        { name: 'File System', level: 65 },
        { name: 'NPM Packages', level: 85 },
        { name: 'Async/Await', level: 75 },
      ]
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'js',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-600/10 to-indigo-600/10',
      skills: [
        { name: 'Types & Interfaces', level: 70 },
        { name: 'Generics', level: 60 },
        { name: 'Type Inference', level: 75 },
        { name: 'Union Types', level: 70 },
      ]
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      icon: 'code',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      skills: [
        { name: 'Utility Classes', level: 85 },
        { name: 'Responsive Design', level: 80 },
        { name: 'Flexbox & Grid', level: 85 },
        { name: 'Custom Configuration', level: 65 },
      ]
    },
  ]

  // Helper function để lấy icon tương ứng
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'react':
        return faReact
      case 'node':
        return faNode
      case 'js':
        return faJs
      case 'code':
        return faCode
      default:
        return faCode
    }
  }

  // Tính tổng số skills đã học
  const totalSkills = technologies.reduce((sum, tech) => sum + tech.skills.length, 0)
  
  // Tính điểm trung bình của tất cả skills
  const averageLevel = Math.round(
    technologies.reduce((sum, tech) => 
      sum + tech.skills.reduce((s, skill) => s + skill.level, 0), 0
    ) / totalSkills
  )

  return (
    // Container chính với dark background
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      {/* Header section với animation */}
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-5xl font-display font-bold text-white mb-4 animate-slideInLeft tracking-tight">
          {t('tech.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fadeIn animation-delay-200">
          {t('tech.subtitle')}
        </p>
      </div>

      {/* Thống kê tổng quan với Font Awesome icons và animations */}
      <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card: Tổng số công nghệ */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 hover:scale-105 transition-all duration-300 animate-scaleIn animation-delay-200 group">
          <FontAwesomeIcon icon={faBook} className="text-orange-500 text-5xl mb-3 group-hover:animate-bounce-slow" />
          <div className="text-4xl font-bold text-white mb-1">{technologies.length}</div>
          <div className="text-gray-400">{t('tech.technologies')}</div>
        </div>

        {/* Card: Tổng số skills */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 hover:scale-105 transition-all duration-300 animate-scaleIn animation-delay-400 group">
          <FontAwesomeIcon icon={faStar} className="text-orange-500 text-5xl mb-3 group-hover:animate-bounce-slow" />
          <div className="text-4xl font-bold text-white mb-1">{totalSkills}</div>
          <div className="text-gray-400">{t('tech.skillsLearned')}</div>
        </div>

        {/* Card: Điểm trung bình */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 hover:scale-105 transition-all duration-300 animate-scaleIn animation-delay-600 group">
          <FontAwesomeIcon icon={faChartLine} className="text-orange-500 text-5xl mb-3 group-hover:animate-bounce-slow" />
          <div className="text-4xl font-bold text-white mb-1">{averageLevel}%</div>
          <div className="text-gray-400">{t('tech.averageLevel')}</div>
        </div>
      </div>

      {/* Grid các công nghệ với dark theme */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map qua từng công nghệ để render card */}
        {technologies.map((tech) => {
          // Kiểm tra xem tech này có đang được chọn không
          const isSelected = selectedTech === tech.id
          
          return (
            <div
              key={tech.id}
              // Card với dark theme và hiệu ứng hover + animation
              className={`${tech.bgColor} bg-gray-800 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 animate-fadeIn`}
              style={{ animationDelay: `${technologies.indexOf(tech) * 0.1}s` }}
            >
              {/* Header của card với Font Awesome icons */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={getIcon(tech.icon)} className="text-orange-500 text-5xl" />
                    <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                  </div>
                  {/* Button để toggle xem chi tiết với Font Awesome */}
                  <button
                    onClick={() => setSelectedTech(isSelected ? null : tech.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-xl"
                  >
                    <FontAwesomeIcon icon={isSelected ? faChevronUp : faChevronDown} />
                  </button>
                </div>
                
                {/* Hiển thị số lượng skills */}
                <div className="text-sm text-gray-400">
                  {tech.skills.length} {t('tech.skillsMastered')}
                </div>
              </div>

              {/* Body của card - chỉ hiện khi được chọn */}
              {isSelected && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="pt-6 space-y-4">
                    {tech.skills.map((skill, index) => (
                      <div key={index}>
                        {/* Tên skill và phần trăm */}
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-orange-500 font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress bar với dark theme */}
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          {/* Thanh progress với gradient */}
                          <div
                            className={`bg-gradient-to-r ${tech.color} h-full rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Quote cuối */}
      <div className="text-center mt-16">
        <p className="text-gray-400 text-lg italic max-w-2xl mx-auto">
          "{t('tech.quote')}" 🇻🇳
        </p>
      </div>
    </div>
  )
}

export default Technologies
