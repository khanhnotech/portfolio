// PostCSS: Công cụ xử lý CSS với JavaScript
// Vite sử dụng PostCSS để biến đổi CSS trước khi đưa vào browser

export default {
  plugins: {
    // tailwindcss: Plugin xử lý các @tailwind directives và tạo ra CSS
    // Đọc tailwind.config.js và quét các file trong content để tạo CSS
    tailwindcss: {},
    
    // autoprefixer: Tự động thêm vendor prefixes (-webkit-, -moz-, etc.)
    // Ví dụ: transform -> -webkit-transform, -ms-transform, transform
    // Giúp CSS tương thích với nhiều trình duyệt hơn
    autoprefixer: {},
  },
}
