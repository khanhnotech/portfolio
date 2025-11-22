// Context để quản lý ngôn ngữ EN/VI
import { createContext, useContext, useState, type ReactNode } from 'react'

// Type cho language
type Language = 'en' | 'vi'

// Interface cho Context
interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string  // Function để translate
}

// Translations - Từ điển dịch
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About me',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact me',
    'nav.hireMe': 'Hire Me',
    
    // Home
    'home.greeting': 'Hi I am',
    'home.title': 'FULLSTACK Developer',
    'home.description': 'Passionate about programming and learning new technologies every day. Specializing in React, Node.js and modern web technologies.',
    'home.hireMe': 'Hire Me',
    'home.downloadCV': 'Download CV',
    'home.experiences': 'Experiences',
    'home.projectDone': 'Project done',
    'home.happyClients': 'Happy Clients',
    
    // Technologies
    'tech.title': 'My Services',
    'tech.subtitle': 'Technologies and skills I have learned and mastered',
    'tech.technologies': 'Technologies',
    'tech.skillsLearned': 'Skills Learned',
    'tech.averageLevel': 'Average Level',
    'tech.skillsMastered': 'skills mastered',
    'tech.quote': 'Never stop learning, grow every day',
    
    // Projects
    'projects.title': 'My Portfolio',
    'projects.subtitle': 'Projects I have built and am building',
    'projects.completed': 'Completed',
    'projects.inProgress': 'In Progress',
    'projects.planned': 'Planned',
    'projects.technologies': 'Technologies',
    'projects.viewDetails': 'View Details',
    'projects.demo': 'Demo',
    'projects.haveIdea': 'Have a project idea?',
    'projects.workTogether': "Let's work together to bring your vision to life",
    'projects.contactMe': 'Contact Me',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'My story and journey',
    'about.greeting': 'Hello! I am a Developer',
    'about.intro1': 'I am a web developer passionate about technology and learning. Currently focusing on React, TypeScript and modern web technologies.',
    'about.intro2': 'My goal is to build useful web applications with beautiful interfaces and good user experience.',
    'about.journey': 'My Journey',
    'about.interests': 'Interests & Hobbies',
    'about.quote': 'Every line of code is a step forward, every bug is a lesson',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': "Let's connect and create something amazing together!",
    'contact.sendMessage': 'Send Message',
    'contact.success': "Message sent successfully! I'll reply soon.",
    'contact.yourName': 'Your Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.contactInfo': 'Contact Info',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.socialMedia': 'Social Media',
    'contact.locationText': 'Vietnam - Beautiful S-shaped country',
    
    // Footer
    'footer.madeWith': 'Made with Lam Phuong Khanh ❤️ in Vietnam',
    'footer.rights': '© 2024 Portfolio. All rights reserved.',
  },
  vi: {
    // Header
    'nav.home': 'Trang chủ',
    'nav.services': 'Dịch vụ',
    'nav.about': 'Về tôi',
    'nav.portfolio': 'Dự án',
    'nav.contact': 'Liên hệ',
    'nav.hireMe': 'Thuê tôi',
    
    // Home
    'home.greeting': 'Xin chào',
    'home.title': 'Lập Trình Viên FULLSTACK',
    'home.description': 'Đam mê lập trình và học hỏi công nghệ mới mỗi ngày. Chuyên về React, Node.js và các công nghệ web hiện đại.',
    'home.hireMe': 'Thuê tôi',
    'home.downloadCV': 'Tải CV',
    'home.experiences': 'Kinh nghiệm',
    'home.projectDone': 'Dự án hoàn thành',
    'home.happyClients': 'Khách hàng hài lòng',
    
    // Technologies
    'tech.title': 'Dịch Vụ Của Tôi',
    'tech.subtitle': 'Các công nghệ và kỹ năng tôi đã học và thành thạo',
    'tech.technologies': 'Công nghệ',
    'tech.skillsLearned': 'Kỹ năng đã học',
    'tech.averageLevel': 'Trung bình',
    'tech.skillsMastered': 'kỹ năng thành thạo',
    'tech.quote': 'Học tập không ngừng, phát triển mỗi ngày',
    
    // Projects
    'projects.title': 'Dự Án Của Tôi',
    'projects.subtitle': 'Những dự án tôi đã và đang xây dựng',
    'projects.completed': 'Hoàn thành',
    'projects.inProgress': 'Đang làm',
    'projects.planned': 'Dự định',
    'projects.technologies': 'Công nghệ',
    'projects.viewDetails': 'Xem chi tiết',
    'projects.demo': 'Demo',
    'projects.haveIdea': 'Có ý tưởng dự án?',
    'projects.workTogether': 'Hãy cùng nhau biến ý tưởng thành hiện thực',
    'projects.contactMe': 'Liên hệ với tôi',
    
    // About
    'about.title': 'Về Tôi',
    'about.subtitle': 'Câu chuyện và hành trình của tôi',
    'about.greeting': 'Xin chào! Tôi là Developer',
    'about.intro1': 'Tôi là một web developer đam mê công nghệ và học hỏi. Hiện tại đang tập trung vào React, TypeScript và các công nghệ web hiện đại.',
    'about.intro2': 'Mục tiêu của tôi là xây dựng những ứng dụng web hữu ích, có giao diện đẹp và trải nghiệm người dùng tốt.',
    'about.journey': 'Hành Trình Của Tôi',
    'about.interests': 'Sở Thích & Đam Mê',
    'about.quote': 'Mỗi dòng code là một bước tiến, mỗi bug là một bài học',
    
    // Contact
    'contact.title': 'Liên Hệ Với Tôi',
    'contact.subtitle': 'Hãy kết nối và cùng nhau tạo ra điều tuyệt vời!',
    'contact.sendMessage': 'Gửi Tin Nhắn',
    'contact.success': 'Gửi tin nhắn thành công! Tôi sẽ phản hồi sớm.',
    'contact.yourName': 'Tên của bạn',
    'contact.email': 'Email',
    'contact.message': 'Tin nhắn',
    'contact.send': 'Gửi tin nhắn',
    'contact.contactInfo': 'Thông Tin Liên Hệ',
    'contact.phone': 'Điện thoại',
    'contact.location': 'Địa chỉ',
    'contact.socialMedia': 'Mạng Xã Hội',
    'contact.locationText': 'Việt Nam - Đất nước hình chữ S xinh đẹp',
    
    // Footer
    'footer.madeWith': 'Được tạo bởi Lâm Phương Khánh ❤️ tại Việt Nam',
    'footer.rights': '© 2024 Portfolio. Bảo lưu mọi quyền.',
  }
}

// Tạo Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // State lưu language, mặc định là 'vi'
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'vi'
  })

  // Hàm toggle giữa en và vi
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'vi' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  // Hàm translate - lấy text theo key
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook để sử dụng LanguageContext
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
