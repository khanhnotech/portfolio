// Import hàm defineConfig từ Vite để có type checking và autocomplete
import { defineConfig } from 'vite'
// Import plugin React cho Vite - hỗ trợ JSX, Fast Refresh, etc.
import react from '@vitejs/plugin-react'

// Cấu hình Vite
// https://vite.dev/config/
export default defineConfig({
  // Danh sách các plugin sử dụng
  plugins: [
    react(), // Plugin React: biên dịch JSX/TSX, hỗ trợ Hot Module Replacement (HMR)
  ],
  // Chỉ expose các env vars cần thiết cho client
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
})
