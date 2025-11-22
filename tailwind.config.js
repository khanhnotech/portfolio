/** @type {import('tailwindcss').Config} */
// Comment này giúp VSCode hiểu kiểu dữ liệu và cung cấp autocomplete

export default {
  // darkMode: Enable dark mode với class strategy
  // Khi <html> có class="dark" thì các dark: variants sẽ active
  darkMode: 'class',
  
  // content: Tailwind sẽ quét các file này để tìm class names được sử dụng
  // Chỉ những class được dùng mới được đưa vào file CSS cuối cùng (tree-shaking)
  content: [
    "./index.html",                    // Quét file HTML chính
    "./src/**/*.{js,ts,jsx,tsx}",      // Quét tất cả file JS/TS/JSX/TSX trong thư mục src
  ],
  
  // theme: Cấu hình màu sắc, spacing, fonts, breakpoints, etc.
  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'rounded': ['Nunito', 'system-ui', 'sans-serif'], // Font tròn, mềm mại
        'mono': ['Space Grotesk', 'monospace'],
      },
    },
  },
  
  // plugins: Thêm các plugin của Tailwind (forms, typography, etc.)
  plugins: [],
}
