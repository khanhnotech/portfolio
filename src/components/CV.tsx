// Component CV - Trang CV có thể in và tải về
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDownload, 
  faPrint,
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faGlobe,
  faCalendar,
  faUser,
  faBriefcase,
  faCode,
  faProjectDiagram,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { useLanguage } from '../contexts/LanguageContext'
import socialLinks from '../config/socialLinks'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function CV() {
  const { t } = useLanguage()
  const cvRef = useRef<HTMLDivElement>(null)

  // Hàm tải CV dưới dạng PDF (sử dụng html2canvas + jsPDF)
  const handleDownloadCV = async () => {
    if (!cvRef.current) return

    try {
      // Tạo canvas từ HTML element
      const canvas = await html2canvas(cvRef.current, {
        scale: 2, // Tăng chất lượng
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      // Tạo PDF
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      // Tính toán kích thước
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 295 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      // Thêm trang đầu tiên
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Thêm các trang tiếp theo nếu cần
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Tải file
      pdf.save('LamPhuongKhanh_CV.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Fallback to print
      window.print()
    }
  }

  // Hàm in CV
  const handlePrintCV = () => {
    window.print()
  }

  // Dữ liệu CV
  const personalInfo = {
    name: 'Lâm Phương Khánh',
    title: t('home.title'),
    email: 'lamkhanh270070@gmail.com',
    phone: '+84 923138302',
    location: 'Vietnam 🇻🇳',
    website: 'https://portfolio-lam-phuong-khanh.vercel.app',
    birthYear: '2004'
  }

  const skills = [
    { name: 'HTML/CSS/JavaScript', level: 85 },
    { name: 'React & TypeScript', level: 80 },
    { name: 'Node.js & Express', level: 75 },
    { name: 'Next.js', level: 40 },
    { name: 'C# Unity 2D', level: 70 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'Responsive Design', level: 85 },
    { name: 'REST API', level: 75 }
  ]

  const aiSkills = [
    { name: 'ChatGPT', level: 88, description: 'Problem solving & code review' },
    { name: 'Kiro AI', level: 85, description: 'IDE integration & development' },
    { name: 'Prompt Engineering', level: 85, description: 'Optimizing AI interactions' },
    { name: 'Claude AI', level: 82, description: 'Code analysis & documentation' },
    { name: 'Google Gemini', level: 80, description: 'Multi-modal AI assistance' },
    { name: 'AI-Assisted UI/UX', level: 80, description: 'Design with AI tools' },
    { name: 'V0.dev', level: 78, description: 'AI component generation' },
    { name: 'Cursor AI', level: 75, description: 'AI-powered code editor' },
    { name: 'GitHub Copilot', level: 60, description: 'Code completion & generation' }
  ]

  const projects = [
    {
      name: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      status: t('projects.inProgress'),
      link: 'https://lamphuongkhanh.vercel.app'
    },
    {
      name: t('projects.rental.title'),
      description: t('projects.rental.description'),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      status: t('projects.completed'),
      link: 'https://cho-thue-nha.vercel.app'
    },
    {
      name: t('projects.game.title'),
      description: t('projects.game.description'),
      technologies: ['JavaScript', 'Google Maps API', 'Railway', 'HTML/CSS'],
      status: t('projects.completed'),
      link: 'https://gamewebgooglemap-production.up.railway.app/'
    },
    {
      name: t('projects.taxi.title'),
      description: t('projects.taxi.description'),
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      status: t('projects.completed'),
      link: 'https://taxigocong.xyz/'
    },
    {
      name: t('projects.tools.title'),
      description: t('projects.tools.description'),
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      status: t('projects.completed'),
      link: 'https://www.cong-cu-tien-ich.io.vn/'
    },
    {
      name: 'AI-Enhanced Development Workflow',
      description: 'Integrated AI tools into development process for code generation, debugging, and UI design',
      technologies: ['GitHub Copilot', 'ChatGPT', 'Kiro AI', 'Cursor AI'],
      status: t('projects.completed'),
      link: null
    }
  ]

  const services = [
    t('tech.service.advertising.title'),
    t('tech.service.news.title'),
    t('tech.service.ecommerce.title'),
    t('tech.service.mobile.title'),
    t('tech.service.game2d.title'),
    t('tech.service.webgame.title')
  ]

  const timeline = [
    {
      year: '2023',
      title: t('about.timeline.2023.title'),
      description: t('about.timeline.2023.description')
    },
    {
      year: '2024',
      title: t('about.timeline.2024.title'),
      description: t('about.timeline.2024.description')
    },
    {
      year: '2025',
      title: t('about.timeline.2025.title'),
      description: t('about.timeline.2025.description')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      {/* Header với nút tải */}
      <div className="max-w-4xl mx-auto mb-8 no-print">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            Curriculum Vitae
          </h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDownloadCV}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              {t('home.downloadCV')}
            </button>
            <button
              onClick={handlePrintCV}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPrint} />
              Print CV
            </button>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div ref={cvRef} className="max-w-4xl mx-auto bg-white text-gray-800 shadow-2xl print:shadow-none print:max-w-none print:mx-0">
        {/* Header CV */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 print:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Avatar */}
            <div className="text-center md:text-left">
              <div className="w-32 h-32 mx-auto md:mx-0 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img 
                  src="/images/lamphuongkhanh-nobg.png" 
                  alt="Lam Phuong Khanh" 
                  className="w-full h-full object-cover bg-white"
                />
              </div>
            </div>

            {/* Thông tin cá nhân */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-green-200 mb-4">{personalInfo.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>{personalInfo.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nội dung CV */}
        <div className="p-8 print:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cột trái */}
            <div className="md:col-span-1 space-y-6">
              {/* Thông tin cá nhân */}
              <section>
                <h3 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} />
                  {t('about.title')}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
                    <span>{t('cv.born')}: {personalInfo.birthYear}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.intro1')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.intro2')}
                  </p>
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 text-sm font-medium mb-1">🤖 {t('cv.aiExpertise')}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {t('cv.aiDescription')}
                    </p>
                  </div>
                </div>
              </section>

              {/* Kỹ năng */}
              <section>
                <h3 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCode} />
                  {t('cv.skills')}
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI Skills */}
              <section>
                <h3 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                  <FontAwesomeIcon icon={faStar} />
                  {t('cv.aiSkills')}
                </h3>
                <div className="space-y-3">
                  {aiSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Social Media */}
              <section>
                <h3 className="text-lg font-bold text-green-600 mb-3">Social Media</h3>
                <div className="space-y-2 text-sm">
                  <a href={socialLinks.github} className="flex items-center gap-2 hover:text-green-600">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                  </a>
                  <a href={socialLinks.youtube} className="flex items-center gap-2 hover:text-green-600">
                    <FontAwesomeIcon icon={faYoutube} />
                    <span>YouTube</span>
                  </a>
                  <a href={socialLinks.facebook} className="flex items-center gap-2 hover:text-green-600">
                    <FontAwesomeIcon icon={faFacebook} />
                    <span>Facebook</span>
                  </a>
                  <a href={socialLinks.tiktok} className="flex items-center gap-2 hover:text-green-600">
                    <FontAwesomeIcon icon={faTiktok} />
                    <span>TikTok</span>
                  </a>
                </div>
              </section>
            </div>

            {/* Cột phải */}
            <div className="md:col-span-2 space-y-6">
              {/* Kinh nghiệm */}
              <section>
                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faBriefcase} />
                  {t('about.journey')}
                </h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="border-l-2 border-green-200 pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
                          {item.year}
                        </div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Dự án */}
              <section>
                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faProjectDiagram} />
                  {t('projects.title')}
                </h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-800">{project.name}</h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a href={project.link} className="text-green-600 text-xs hover:underline">
                          {project.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Dịch vụ */}
              <section>
                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faStar} />
                  {t('tech.services')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <FontAwesomeIcon icon={faCode} className="text-green-600" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer CV */}
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600 print:bg-white">
          <p>© 2026 {personalInfo.name} - {t('footer.madeWith')}</p>
        </div>
      </div>
    </div>
  )
}

export default CV