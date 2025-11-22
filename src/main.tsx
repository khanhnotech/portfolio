// Import StrictMode từ React - giúp phát hiện lỗi tiềm ẩn trong ứng dụng
import { StrictMode } from 'react'
// Import createRoot - API mới của React 18 để render ứng dụng
import { createRoot } from 'react-dom/client'
// Import CSS toàn cục (chứa Tailwind directives)
import './index.css'
// Import component App chính
import App from './App.tsx'
// Import Contexts để quản lý theme và language
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

// Tìm element có id="root" trong HTML và render React app vào đó
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ThemeProvider: Quản lý dark/light mode cho toàn app */}
    <ThemeProvider>
      {/* LanguageProvider: Quản lý ngôn ngữ EN/VI cho toàn app */}
      <LanguageProvider>
        {/* Render component App */}
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
