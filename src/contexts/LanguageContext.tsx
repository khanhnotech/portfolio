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
    'nav.cv': 'CV',
    'nav.hireMe': 'Hire Me',
    
    // Home
    'home.greeting': 'Hi I am',
    'home.title': 'Creative Web Developer',
    'home.description': 'Passionate about programming and learning new technologies every day. Specializing in React, Node.js and modern web technologies.',
    'home.hireMe': 'Hire Me',
    'home.downloadCV': 'Download CV',
    'home.experiences': 'Experiences',
    'home.projectDone': 'Project done',
    'home.happyClients': 'Happy Clients',
    
    // Technologies
    'tech.title': 'Programming Languages',
    'tech.subtitle': 'Programming languages and technologies I have learned and mastered',
    'tech.technologies': 'Languages',
    'tech.skillsLearned': 'Skills Learned',
    'tech.averageLevel': 'Average Level',
    'tech.skillsMastered': 'skills mastered',
    'tech.quote': 'Never stop learning, grow every day',
    'tech.services': 'My Services',
    'tech.servicesSubtitle': 'Types of projects and applications I can develop',
    'tech.service.advertising.title': 'Advertising Website & Tools',
    'tech.service.advertising.description': 'Develop advertising websites, landing pages and online tools',
    'tech.service.news.title': 'News Website',
    'tech.service.news.description': 'Build news websites with CMS, content management and SEO',
    'tech.service.ecommerce.title': 'E-commerce Website',
    'tech.service.ecommerce.description': 'Develop e-commerce websites with shopping cart and payment',
    'tech.service.mobile.title': 'Mobile App (React Native)',
    'tech.service.mobile.description': 'Develop cross-platform mobile applications for iOS and Android',
    'tech.service.game2d.title': '2D Game',
    'tech.service.game2d.description': 'Create 2D games with Unity, engaging gameplay and beautiful graphics',
    'tech.service.webgame.title': 'Web Game',
    'tech.service.webgame.description': 'Develop web games with JavaScript, HTML5 Canvas',
    
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
    'projects.portfolio.title': 'Portfolio Website',
    'projects.portfolio.description': 'Personal portfolio website with React, TypeScript and Tailwind CSS. Beautiful interface, responsive and user-friendly.',
    'projects.rental.title': 'House Rental',
    'projects.rental.description': 'House rental website with search features, filter by price and area. User-friendly and easy to use interface.',
    'projects.game.title': 'Game Web Google Map',
    'projects.game.description': 'Interactive web game using Google Maps API. Unique gaming experience combined with real maps.',
    'projects.taxi.title': 'Taxi Go Cong',
    'projects.taxi.description': 'Taxi booking application for Go Cong area with real-time tracking, fare calculation and driver management system.',
    'projects.tools.title': 'Utility Tools Website',
    'projects.tools.description': 'Collection of useful online tools and utilities for developers and users. Features various tools for productivity and convenience.',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'My story and journey',
    'about.greeting': 'Hello! I am a Developer',
    'about.intro1': 'I am a web developer passionate about technology and learning. Currently focusing on React, TypeScript and modern web technologies.',
    'about.intro2': 'My goal is to build useful web applications with beautiful interfaces and good user experience.',
    'about.journey': 'My Journey',
    'about.interests': 'Interests & Hobbies',
    'about.quote': 'Every line of code is a step forward, every bug is a lesson',
    'about.timeline.2023.title': 'Started Learning Programming',
    'about.timeline.2023.description': 'Discovered the world of web programming with HTML, CSS, JavaScript',
    'about.timeline.2024.title': 'Learning React & Node.js',
    'about.timeline.2024.description': 'Deep dive into React, TypeScript and backend with Node.js',
    'about.timeline.2025.title': 'Building Real Projects',
    'about.timeline.2025.description': 'Developing complete web applications and portfolio',
    
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
    'footer.rights': '© 2026 Portfolio. All rights reserved.',
    
    // CV
    'cv.title': 'Curriculum Vitae',
    'cv.download': 'Download PDF',
    'cv.print': 'Print CV',
    'cv.personalInfo': 'Personal Information',
    'cv.skills': 'Technical Skills',
    'cv.aiSkills': 'AI & Modern Tools',
    'cv.aiExpertise': 'AI Integration Expertise',
    'cv.aiDescription': 'Leveraging AI tools like GitHub Copilot, ChatGPT, and Kiro AI to enhance development workflow. Experienced in prompt engineering, AI-assisted coding, UI/UX design, and integrating AI solutions into web applications for improved productivity and code quality.',
    'cv.experience': 'Experience',
    'cv.projects': 'Projects',
    'cv.services': 'Services Offered',
    'cv.socialMedia': 'Social Media',
    'cv.born': 'Born',
  },
  vi: {
    // Header
    'nav.home': 'Trang chủ',
    'nav.services': 'Dịch vụ',
    'nav.about': 'Về tôi',
    'nav.portfolio': 'Dự án',
    'nav.contact': 'Liên hệ',
    'nav.cv': 'CV',
    'nav.hireMe': 'Thuê tôi',
    
    // Home
    'home.greeting': 'Xin chào',
    'home.title': 'Nhà Phát Triển Web Sáng Tạo',
    'home.description': 'Đam mê lập trình và học hỏi công nghệ mới mỗi ngày. Chuyên về React, Node.js và các công nghệ web hiện đại.',
    'home.hireMe': 'Thuê tôi',
    'home.downloadCV': 'Tải CV',
    'home.experiences': 'Kinh nghiệm',
    'home.projectDone': 'Dự án hoàn thành',
    'home.happyClients': 'Khách hàng hài lòng',
    
    // Technologies
    'tech.title': 'Ngôn Ngữ Lập Trình',
    'tech.subtitle': 'Các ngôn ngữ lập trình và công nghệ tôi đã học và thành thạo',
    'tech.technologies': 'Ngôn ngữ',
    'tech.skillsLearned': 'Kỹ năng đã học',
    'tech.averageLevel': 'Trung bình',
    'tech.skillsMastered': 'kỹ năng thành thạo',
    'tech.quote': 'Học tập không ngừng, phát triển mỗi ngày',
    'tech.services': 'Dịch Vụ Của Tôi',
    'tech.servicesSubtitle': 'Các loại dự án và ứng dụng tôi có thể phát triển',
    'tech.service.advertising.title': 'Website Quảng Cáo & Tools',
    'tech.service.advertising.description': 'Phát triển website quảng cáo, landing page và các công cụ trực tuyến',
    'tech.service.news.title': 'Website Tin Tức',
    'tech.service.news.description': 'Xây dựng website tin tức với CMS, quản lý nội dung và SEO',
    'tech.service.ecommerce.title': 'Website Bán Hàng',
    'tech.service.ecommerce.description': 'Phát triển website thương mại điện tử với giỏ hàng và thanh toán',
    'tech.service.mobile.title': 'App Mobile (React Native)',
    'tech.service.mobile.description': 'Phát triển ứng dụng di động đa nền tảng iOS và Android',
    'tech.service.game2d.title': 'Game 2D',
    'tech.service.game2d.description': 'Tạo game 2D với Unity, gameplay thú vị và đồ họa đẹp mắt',
    'tech.service.webgame.title': 'Web Game',
    'tech.service.webgame.description': 'Phát triển game trên web với JavaScript, HTML5 Canvas',
    
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
    'projects.portfolio.title': 'Portfolio Website',
    'projects.portfolio.description': 'Website portfolio cá nhân với React, TypeScript và Tailwind CSS. Giao diện đẹp mắt, responsive và dễ sử dụng.',
    'projects.rental.title': 'Cho Thuê Nhà',
    'projects.rental.description': 'Website cho thuê nhà với tính năng tìm kiếm, lọc theo giá và khu vực. Giao diện thân thiện và dễ sử dụng.',
    'projects.game.title': 'Game Web Google Map',
    'projects.game.description': 'Game web tương tác sử dụng Google Maps API. Trải nghiệm chơi game độc đáo kết hợp với bản đồ thực tế.',
    'projects.taxi.title': 'Taxi Gò Công',
    'projects.taxi.description': 'Ứng dụng đặt taxi khu vực Gò Công với tính năng theo dõi thời gian thực, tính cước và quản lý tài xế.',
    'projects.tools.title': 'Website Công Cụ Tiện Ích',
    'projects.tools.description': 'Tổng hợp các công cụ trực tuyến hữu ích cho developers và người dùng. Cung cấp nhiều công cụ để tăng năng suất và tiện lợi.',
    
    // About
    'about.title': 'Về Tôi',
    'about.subtitle': 'Câu chuyện và hành trình của tôi',
    'about.greeting': 'Xin chào! Tôi là Developer',
    'about.intro1': 'Tôi là một web developer đam mê công nghệ và học hỏi. Hiện tại đang tập trung vào React, TypeScript và các công nghệ web hiện đại.',
    'about.intro2': 'Mục tiêu của tôi là xây dựng những ứng dụng web hữu ích, có giao diện đẹp và trải nghiệm người dùng tốt.',
    'about.journey': 'Hành Trình Của Tôi',
    'about.interests': 'Sở Thích & Đam Mê',
    'about.quote': 'Mỗi dòng code là một bước tiến, mỗi bug là một bài học',
    'about.timeline.2023.title': 'Bắt đầu học lập trình',
    'about.timeline.2023.description': 'Khám phá thế giới lập trình web với HTML, CSS, JavaScript',
    'about.timeline.2024.title': 'Học React & Node.js',
    'about.timeline.2024.description': 'Chuyên sâu vào React, TypeScript và backend với Node.js',
    'about.timeline.2025.title': 'Xây dựng dự án thực tế',
    'about.timeline.2025.description': 'Phát triển các ứng dụng web hoàn chỉnh và portfolio',
    
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
    'footer.rights': '© 2026 Portfolio. Bảo lưu mọi quyền.',
    
    // CV
    'cv.title': 'Sơ Yếu Lý Lịch',
    'cv.download': 'Tải PDF',
    'cv.print': 'In CV',
    'cv.personalInfo': 'Thông Tin Cá Nhân',
    'cv.skills': 'Kỹ Năng Kỹ Thuật',
    'cv.aiSkills': 'AI & Công Cụ Hiện Đại',
    'cv.aiExpertise': 'Chuyên Môn Tích Hợp AI',
    'cv.aiDescription': 'Sử dụng các công cụ AI như GitHub Copilot, ChatGPT và Kiro AI để nâng cao quy trình phát triển. Có kinh nghiệm trong prompt engineering, lập trình hỗ trợ AI, thiết kế UI/UX và tích hợp các giải pháp AI vào ứng dụng web để cải thiện năng suất và chất lượng code.',
    'cv.experience': 'Kinh Nghiệm',
    'cv.projects': 'Dự Án',
    'cv.services': 'Dịch Vụ Cung Cấp',
    'cv.socialMedia': 'Mạng Xã Hội',
    'cv.born': 'Sinh năm',
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
