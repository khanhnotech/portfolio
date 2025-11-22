# 🇻🇳 Portfolio Website - Phong cách Việt Nam

Portfolio cá nhân được xây dựng với React, TypeScript, Tailwind CSS và Vite. Giao diện mang phong cách đồng quê Việt Nam ấm áp và thân thiện.

## ✨ Tính năng

- 🏠 **Trang chủ**: Giới thiệu tổng quan
- 💻 **Công nghệ**: Hiển thị các công nghệ đã học với progress bars
- 🚀 **Dự án**: Danh sách các dự án đã làm
- 👤 **Về tôi**: Timeline hành trình học tập và sở thích
- 📧 **Liên hệ**: Form liên hệ và thông tin social media

## 🛠️ Công nghệ sử dụng

- **React 19** - UI Library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **PostCSS** - CSS processing

## 🚀 Cài đặt và chạy

### 1. Clone repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Chạy development server
```bash
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:5173`

### 4. Build production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 📁 Cấu trúc dự án

```
portfolio/
├── src/
│   ├── components/          # Các components
│   │   ├── Header.tsx      # Navigation bar
│   │   ├── Home.tsx        # Trang chủ
│   │   ├── Technologies.tsx # Tab công nghệ
│   │   ├── Projects.tsx    # Tab dự án
│   │   ├── About.tsx       # Tab về tôi
│   │   └── Contact.tsx     # Tab liên hệ
│   ├── App.tsx             # Component chính
│   ├── main.tsx            # Entry point
│   └── index.css           # Global CSS (Tailwind)
├── public/                  # Static files
├── HUONG_DAN.md            # Hướng dẫn chi tiết (Tiếng Việt)
└── README.md               # File này
```

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Technologies.tsx**: Cập nhật danh sách công nghệ và skills
2. **Projects.tsx**: Thêm/sửa các dự án của bạn
3. **About.tsx**: Cập nhật timeline và sở thích
4. **Contact.tsx**: Thay đổi thông tin liên hệ

### Thay đổi màu sắc

Mở `tailwind.config.js` và thêm custom colors:

```js
theme: {
  extend: {
    colors: {
      'custom': '#your-color',
    },
  },
}
```

## 📚 Tài liệu học tập

Xem file `HUONG_DAN.md` để hiểu chi tiết:
- Giải thích từng dòng code
- Cách hoạt động của components
- Tailwind CSS classes
- React hooks và concepts

## 🌐 Deploy

### Vercel (Khuyên dùng)
1. Push code lên GitHub
2. Import project vào Vercel
3. Deploy tự động

### Netlify
1. Build project: `npm run build`
2. Upload thư mục `dist/` lên Netlify

## 📝 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Kiểm tra lỗi code

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## 📄 License

MIT License - Tự do sử dụng cho dự án cá nhân và thương mại.

## 💬 Liên hệ

- Email: lamkhanh270070@gmail.com
- GitHub: @khanhnotech

---

Made with ❤️ in Vietnam 🇻🇳
