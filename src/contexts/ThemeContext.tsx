// Context để quản lý Dark/Light mode
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

// Type cho theme
type Theme = 'dark' | 'light'

// Interface cho Context
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Tạo Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // State lưu theme, mặc định là dark
  // Lấy từ localStorage nếu có, không thì dùng 'dark'
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    return (saved as Theme) || 'dark'
  })

  // Effect: Cập nhật class vào <html> khi theme thay đổi
  useEffect(() => {
    const root = document.documentElement
    // Xóa class cũ
    root.classList.remove('light', 'dark')
    // Thêm class mới
    root.classList.add(theme)
    // Lưu vào localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  // Hàm toggle giữa dark và light
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook để sử dụng ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
