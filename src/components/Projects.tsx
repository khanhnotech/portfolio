// Component Projects - Hiển thị các dự án đã làm với dark theme
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGlobe, 
  faCheckCircle, 
  faClock, 
  faCalendar, 
  faEye, 
  faLink, 
  faRocket,
  faShoppingCart,
  faCloudSun,
  faListCheck
} from '@fortawesome/free-solid-svg-icons'
// Import useLanguage hook
import { useLanguage } from '../contexts/LanguageContext'

// Interface định nghĩa cấu trúc của một project
interface Project {
  id: number
  title: string           // Tên dự án
  description: string     // Mô tả ngắn
  technologies: string[]  // Các công nghệ sử dụng
  icon: string           // Icon name
  status: 'completed' | 'in-progress' | 'planned'  // Trạng thái dự án
  link?: string          // Link demo (optional)
}

function Projects() {
  // Lấy function translate từ context
  const { t } = useLanguage()
  // Dữ liệu các dự án
  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: 'globe',
      status: 'in-progress',
    },
    {
      id: 2,
      title: t('projects.rental.title'),
      description: t('projects.rental.description'),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      icon: 'shop',
      status: 'completed',
      link: 'https://cho-thue-nha.vercel.app'
    },
    {
      id: 3,
      title: t('projects.game.title'),
      description: t('projects.game.description'),
      technologies: ['JavaScript', 'Google Maps API', 'Railway', 'HTML/CSS'],
      icon: 'globe',
      status: 'completed',
      link: 'https://gamewebgooglemap-production.up.railway.app/'
    },
    {
      id: 4,
      title: t('projects.taxi.title'),
      description: t('projects.taxi.description'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      icon: 'shop',
      status: 'completed',
      link: 'https://taxigocong.xyz/'
    },
    {
      id: 5,
      title: t('projects.tools.title'),
      description: t('projects.tools.description'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      icon: 'list',
      status: 'completed',
      link: 'https://www.cong-cu-tien-ich.io.vn/'
    },
  ]

  // Helper function để lấy icon
  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return faGlobe
      case 'list':
        return faListCheck
      case 'weather':
        return faCloudSun
      case 'shop':
        return faShoppingCart
      default:
        return faRocket
    }
  }

  // Hàm trả về màu, icon và text theo status
  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return { 
          color: 'bg-green-500/20 text-green-400 border-green-500', 
          icon: faCheckCircle,
          text: t('projects.completed')
        }
      case 'in-progress':
        return { 
          color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500', 
          icon: faClock,
          text: t('projects.inProgress')
        }
      case 'planned':
        return { 
          color: 'bg-blue-500/20 text-blue-400 border-blue-500', 
          icon: faCalendar,
          text: t('projects.planned')
        }
    }
  }

  return (
    // Container chính với dark theme
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-display font-bold text-white mb-4 tracking-tight">
          {t('projects.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Grid các dự án */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map qua từng project để render card */}
        {projects.map((project) => {
          const statusBadge = getStatusBadge(project.status)
          
          return (
            <div
              key={project.id}
              // Card với dark theme và hiệu ứng hover
              className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:scale-105"
            >
              {/* Header của card với icon */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-center border-b border-gray-700">
                <FontAwesomeIcon 
                  icon={getProjectIcon(project.icon)} 
                  className="text-orange-500 text-6xl mb-4" 
                />
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Body của card */}
              <div className="p-6">
                {/* Status badge với icon */}
                <div className="mb-4">
                  <span className={`${statusBadge.color} border px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2`}>
                    <FontAwesomeIcon icon={statusBadge.icon} />
                    {statusBadge.text}
                  </span>
                </div>

                {/* Mô tả dự án */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Danh sách công nghệ sử dụng */}
                <div className="mb-4">
                  <h4 className="text-gray-300 font-semibold mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faRocket} className="text-orange-500" />
                    {t('projects.technologies')}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faEye} />
                    {t('projects.viewDetails')}
                  </button>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faLink} />
                      {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
          <FontAwesomeIcon icon={faRocket} className="text-orange-500 text-5xl mb-4" />
          <p className="text-xl text-white mb-4">
            {t('projects.haveIdea')}
          </p>
          <p className="text-gray-400 mb-6">
            {t('projects.workTogether')}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-110">
            {t('projects.contactMe')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
