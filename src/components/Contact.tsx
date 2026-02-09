// Component Contact - Trang liên hệ với dark theme
import { useState } from 'react'
// Import Font Awesome icons
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faPaperPlane,
  faCheckCircle,
  faSpinner,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub, 
  faFacebook, 
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import useLanguage hook
import { useLanguage } from '../contexts/LanguageContext'
// Import social links
import socialLinks from '../config/socialLinks'
// Import API function
import { sendContactEmail } from '../api/sendEmail'

function Contact() {
  // Lấy function translate từ context
  const { t } = useLanguage()
  // State để quản lý form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // State để hiển thị thông báo sau khi submit
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Hàm xử lý khi input thay đổi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Hàm xử lý khi submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setMessage('Vui lòng điền đầy đủ thông tin!')
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }

    setIsLoading(true)
    setShowSuccess(false)
    setShowError(false)

    try {
      // Gửi email
      const result = await sendContactEmail(formData)
      
      if (result.success) {
        setMessage(result.message)
        setShowSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        setMessage(result.message)
        setShowError(true)
        setTimeout(() => setShowError(false), 5000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setMessage('Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.')
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  // Thông tin liên hệ
  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'lamkhanh270070@gmail.com',
      link: 'mailto:lamkhanh270070@gmail.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      value: '+84 923138302',
      link: 'tel:+84923138302',
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      value: 'Vietnam 🇻🇳',
      link: null
    },
  ]

  // Social media links - 4 mạng xã hội chính
  const socialMediaLinks = [
    { icon: faYoutube, name: 'YouTube', color: 'hover:bg-red-600', url: socialLinks.youtube },
    { icon: faFacebook, name: 'Facebook', color: 'hover:bg-blue-600', url: socialLinks.facebook },
    { icon: faTiktok, name: 'TikTok', color: 'hover:bg-black', url: socialLinks.tiktok },
    { icon: faGithub, name: 'GitHub', color: 'hover:bg-gray-700', url: socialLinks.github },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-display font-bold text-white mb-4 tracking-tight">
          {t('contact.title')}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Grid 2 cột: Form bên trái, Info bên phải */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Form liên hệ */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-orange-500" />
              {t('contact.sendMessage')}
            </h3>

            {/* Success message */}
            {showSuccess && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} />
                {message}
              </div>
            )}

            {/* Error message */}
            {showError && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {message}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input: Tên */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  {t('contact.yourName')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Input: Email */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              {/* Textarea: Tin nhắn */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-6">
            {/* Contact info cards */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.contactInfo')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-700 border border-gray-600 rounded-lg hover:border-orange-500 transition-colors"
                  >
                    <FontAwesomeIcon 
                      icon={info.icon} 
                      className="text-orange-500 text-2xl" 
                    />
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm font-semibold">
                        {info.title}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-bold hover:text-orange-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-bold">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.socialMedia')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-700 border border-gray-600 ${social.color} text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 hover:scale-110 flex flex-col items-center gap-2`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-3xl" />
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            {t('contact.location')}
          </h3>
          <p className="text-gray-400 mb-4">
            {t('contact.locationText')} 🇻🇳
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
