# 📚 HƯỚNG DẪN DỰ ÁN - Portfolio với React + Vite + Tailwind

## 🗂️ Cấu trúc dự án

```
portfolio/
├── src/                      # Thư mục chứa source code
│   ├── App.tsx              # Component chính của ứng dụng
│   ├── main.tsx             # Entry point - nơi khởi động React app
│   ├── index.css            # CSS toàn cục (chứa Tailwind directives)
│   ├── App.css              # CSS riêng cho component App
│   └── assets/              # Thư mục chứa hình ảnh, fonts, etc.
│
├── public/                   # Thư mục public - file tĩnh không qua build
│   └── vite.svg             # Logo Vite
│
├── index.html               # File HTML chính
├── package.json             # Quản lý dependencies và scripts
├── vite.config.ts           # Cấu hình Vite
├── tailwind.config.js       # Cấu hình Tailwind CSS
├── postcss.config.js        # Cấu hình PostCSS
├── tsconfig.json            # Cấu hình TypeScript
└── .gitignore               # File/folder không đưa lên Git
```

## 📦 Package.json - Scripts

```json
"scripts": {
  "dev": "vite",                      // Chạy dev server (localhost:5173)
  "build": "tsc -b && vite build",    // Build production (kiểm tra TypeScript + build)
  "lint": "eslint .",                 // Kiểm tra lỗi code với ESLint
  "preview": "vite preview"           // Xem trước bản build production
}
```

### Cách chạy:
- `npm run dev` - Khởi động development server
- `npm run build` - Build ra thư mục `dist/` để deploy
- `npm run lint` - Kiểm tra lỗi code
- `npm run preview` - Xem bản build trước khi deploy

## 🎨 Tailwind CSS Classes - Giải thích

### Layout & Spacing
- `flex` - Display flex (sắp xếp theo hàng/cột)
- `items-center` - Căn giữa theo chiều dọc
- `justify-center` - Căn giữa theo chiều ngang
- `gap-8` - Khoảng cách giữa các phần tử = 2rem (32px)
- `p-8` - Padding tất cả các phía = 2rem
- `px-6` - Padding left-right = 1.5rem
- `py-3` - Padding top-bottom = 0.75rem
- `m-4` - Margin tất cả các phía = 1rem
- `mt-8` - Margin top = 2rem
- `mb-8` - Margin bottom = 2rem
- `mx-auto` - Margin left-right = auto (căn giữa)

### Sizing
- `w-24` - Width = 6rem (96px)
- `h-24` - Height = 6rem (96px)
- `min-h-screen` - Min height = 100vh (toàn màn hình)
- `max-w-md` - Max width = 28rem (448px)

### Colors
- `bg-blue-500` - Background màu xanh
- `text-white` - Chữ màu trắng
- `text-gray-600` - Chữ màu xám
- `bg-gradient-to-br` - Gradient từ trên-trái xuống dưới-phải
- `from-blue-500` - Màu bắt đầu gradient
- `to-purple-600` - Màu kết thúc gradient

### Typography
- `text-5xl` - Font size = 3rem (48px)
- `text-sm` - Font size nhỏ
- `font-bold` - Chữ đậm
- `font-semibold` - Chữ hơi đậm
- `text-center` - Căn giữa text

### Effects
- `rounded-lg` - Bo góc lớn
- `shadow-xl` - Đổ bóng rất lớn
- `hover:scale-110` - Khi hover, phóng to 110%
- `hover:bg-blue-600` - Khi hover, đổi màu background
- `transition-transform` - Hiệu ứng chuyển động mượt
- `transition-colors` - Hiệu ứng chuyển màu mượt

## ⚛️ React Hooks

### useState
```tsx
const [count, setCount] = useState(0)
```
- `count` - Giá trị hiện tại
- `setCount` - Hàm để cập nhật giá trị
- `useState(0)` - Giá trị khởi tạo là 0

Khi gọi `setCount(newValue)`, React sẽ:
1. Cập nhật giá trị count
2. Re-render component để hiển thị giá trị mới

## 🔧 Công nghệ sử dụng

### Vite
- Build tool cực nhanh
- Hot Module Replacement (HMR) - cập nhật code không cần reload trang
- Hỗ trợ TypeScript, JSX out of the box

### React 19
- Library để xây dựng UI
- Component-based architecture
- Virtual DOM để tối ưu performance

### TypeScript
- JavaScript với type checking
- Giúp phát hiện lỗi sớm khi code
- Autocomplete tốt hơn

### Tailwind CSS
- Utility-first CSS framework
- Không cần viết CSS riêng
- Responsive design dễ dàng
- Tree-shaking: chỉ build CSS được sử dụng

### PostCSS
- Công cụ xử lý CSS
- Autoprefixer: tự động thêm vendor prefixes
- Biến đổi Tailwind directives thành CSS

## 🚀 Workflow phát triển

1. **Chạy dev server**: `npm run dev`
2. **Sửa code** trong `src/App.tsx`
3. **Lưu file** - Vite tự động reload (HMR)
4. **Xem kết quả** trên browser
5. **Build production**: `npm run build`
6. **Deploy** thư mục `dist/`

## 📝 Tips học React + Tailwind

1. **Component**: Mỗi component là một khối UI độc lập, có thể tái sử dụng
2. **Props**: Truyền dữ liệu từ component cha xuống con
3. **State**: Dữ liệu thay đổi trong component, khi state thay đổi → re-render
4. **Tailwind**: Học dần các class, dùng docs: https://tailwindcss.com/docs
5. **DevTools**: Cài React DevTools extension để debug

## 📂 Components đã tạo

### Header.tsx
- Thanh điều hướng (navigation bar)
- Responsive menu (desktop + mobile)
- Quản lý active tab
- Props: `activeTab`, `onTabChange`

### Home.tsx
- Trang chủ với giới thiệu
- Hero section với avatar
- Cards thông tin nổi bật
- Quote section

### Technologies.tsx
- Hiển thị các công nghệ đã học
- Progress bars cho từng skill
- Thống kê tổng quan (số công nghệ, skills, điểm TB)
- Expand/collapse để xem chi tiết

### Projects.tsx
- Danh sách các dự án
- Status badges (hoàn thành, đang làm, dự định)
- Hiển thị công nghệ sử dụng
- Buttons xem chi tiết và demo

### About.tsx
- Giới thiệu bản thân
- Timeline hành trình học tập
- Sở thích và đam mê
- Quote cá nhân

### Contact.tsx
- Form liên hệ với validation
- Thông tin liên hệ (email, phone, địa chỉ)
- Social media links
- Success message sau khi submit

## 🎨 Thiết kế

### Màu sắc chủ đạo
- Amber/Orange: Màu ấm, phong cách đồng quê Việt Nam
- Nâu gỗ (amber-800/900): Header và footer
- Kem (amber-50): Background
- Gradient: Tạo chiều sâu và sinh động

### Icons & Decorations
- 🇻🇳 Cờ Việt Nam
- 🌾 Lúa - biểu tượng đồng quê
- 🏡 Nhà - cảm giác ấm cúng
- Emoji icons cho mọi thứ

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Hamburger menu trên mobile
- Grid layout tự động điều chỉnh

## 🔄 Cách hoạt động

1. **App.tsx**: Component cha quản lý state `activeTab`
2. **Header**: Nhận props và gọi `onTabChange` khi user click
3. **renderContent()**: Switch case để render component tương ứng
4. **Components con**: Nhận data và hiển thị UI

## 🎯 Bước tiếp theo

### Cải thiện hiện tại:
- Thêm dữ liệu thật của bạn vào các components
- Thay đổi màu sắc, icons theo ý thích
- Thêm ảnh thật thay vì emoji
- Kết nối form với backend/email service

### Tính năng mới:
- Dark mode toggle
- Animations nâng cao (Framer Motion)
- Blog section
- Certificates/Awards section
- Language switcher (EN/VI)

### Kỹ thuật nâng cao:
- React Router cho URL routing
- Context API để quản lý state global
- Custom hooks
- API integration
- SEO optimization
- Deploy lên Vercel/Netlify

## 💡 Tips học từ dự án này

1. **Component Structure**: Mỗi component làm 1 việc cụ thể
2. **Props**: Truyền data từ cha xuống con
3. **State Management**: useState để quản lý data thay đổi
4. **Conditional Rendering**: Hiển thị UI dựa vào điều kiện
5. **Event Handling**: onClick, onChange, onSubmit
6. **Array Methods**: map(), filter(), reduce()
7. **Tailwind CSS**: Utility classes, responsive design
8. **TypeScript**: Interface, type safety

Chúc bạn học tốt! 🎉 🇻🇳
