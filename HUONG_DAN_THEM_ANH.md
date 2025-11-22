# 📸 HƯỚNG DẪN THÊM ẢNH VÀO PORTFOLIO

## 🎯 Tổng quan

Bạn đã có folder `public/images/` để chứa ảnh. Dưới đây là hướng dẫn chi tiết cách thêm ảnh vào từng phần của portfolio.

---

## 1️⃣ THÊM ẢNH ĐẠI DIỆN (HOME PAGE)

### Bước 1: Chuẩn bị ảnh
- Kích thước đề xuất: **500x600px** (hoặc tỷ lệ 5:6)
- Format: JPG hoặc PNG
- Đặt tên: `profile.jpg`
- Copy vào: `public/images/profile.jpg`

### Bước 2: Cập nhật code

Mở file `src/components/Home.tsx` và tìm đoạn code này (khoảng dòng 80-90):

```tsx
{/* Placeholder - thay bằng ảnh thật của bạn */}
<div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center border-4 border-gray-700 shadow-2xl">
  <div className="text-center">
    <FontAwesomeIcon icon={faCode} className="text-orange-500 text-9xl mb-4" />
    <p className="text-gray-500 text-sm">Thay bằng ảnh của bạn</p>
    <p className="text-gray-600 text-xs mt-2">
      Thêm ảnh vào thư mục public/<br/>
      và dùng: src="/your-image.jpg"
    </p>
  </div>
</div>
```

**THAY BẰNG:**

```tsx
{/* Ảnh đại diện của bạn */}
<img 
  src="/images/profile.jpg" 
  alt="Your Name - Web Developer" 
  className="w-full h-full object-cover rounded-3xl border-4 border-gray-700 shadow-2xl"
/>
```

### Giải thích:
- `src="/images/profile.jpg"` - Đường dẫn đến ảnh (bắt đầu từ thư mục public)
- `object-cover` - Ảnh sẽ fill đầy khung và crop nếu cần
- `rounded-3xl` - Bo góc lớn
- `border-4 border-gray-700` - Viền xám

---

## 2️⃣ THÊM ẢNH CHO ABOUT PAGE

### Bước 1: Dùng lại ảnh profile
Ảnh này có thể dùng chung với Home page

### Bước 2: Cập nhật code

Mở file `src/components/About.tsx` và tìm (khoảng dòng 60):

```tsx
<div className="w-40 h-40 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl border-4 border-gray-700">
  <FontAwesomeIcon icon={faUser} className="text-white text-7xl" />
</div>
```

**THAY BẰNG:**

```tsx
<img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-gray-700"
/>
```

---

## 3️⃣ THÊM ẢNH CHO PROJECTS

### Bước 1: Tạo thư mục projects
```bash
mkdir public/images/projects
```

### Bước 2: Thêm ảnh cho từng dự án
- `project1.jpg` - Portfolio Website
- `project2.jpg` - Todo App
- `project3.jpg` - Weather App
- `project4.jpg` - E-commerce Platform

Kích thước đề xuất: **800x600px** (tỷ lệ 4:3)

### Bước 3: Cập nhật interface

Mở `src/components/Projects.tsx` và tìm interface (dòng 17):

```tsx
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  icon: string
  status: 'completed' | 'in-progress' | 'planned'
  link?: string
}
```

**THÊM field `image`:**

```tsx
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  icon: string
  image?: string  // ← THÊM DÒNG NÀY
  status: 'completed' | 'in-progress' | 'planned'
  link?: string
}
```

### Bước 4: Thêm đường dẫn ảnh vào data

Tìm phần `const projects` (dòng 27) và thêm field `image`:

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: '...',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    icon: 'globe',
    image: '/images/projects/project1.jpg',  // ← THÊM DÒNG NÀY
    status: 'in-progress',
  },
  {
    id: 2,
    title: 'Todo App',
    description: '...',
    technologies: ['React', 'LocalStorage', 'CSS'],
    icon: 'list',
    image: '/images/projects/project2.jpg',  // ← THÊM DÒNG NÀY
    status: 'completed',
  },
  // ... làm tương tự cho các project khác
]
```

### Bước 5: Hiển thị ảnh trong card

Tìm phần render card (khoảng dòng 110) và **THAY ĐỔI** phần header:

**TÌM:**
```tsx
{/* Header của card với icon */}
<div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-center border-b border-gray-700">
  <FontAwesomeIcon 
    icon={getProjectIcon(project.icon)} 
    className="text-orange-500 text-6xl mb-4" 
  />
  <h3 className="text-2xl font-bold text-white">
    {project.title}
  </h3>
</div>
```

**THAY BẰNG:**
```tsx
{/* Header của card với ảnh hoặc icon */}
<div className="relative">
  {project.image ? (
    // Nếu có ảnh thì hiển thị ảnh
    <div className="relative h-48 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      {/* Title trên ảnh */}
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>
      </div>
    </div>
  ) : (
    // Nếu không có ảnh thì hiển thị icon như cũ
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-center border-b border-gray-700">
      <FontAwesomeIcon 
        icon={getProjectIcon(project.icon)} 
        className="text-orange-500 text-6xl mb-4" 
      />
      <h3 className="text-2xl font-bold text-white">
        {project.title}
      </h3>
    </div>
  )}
</div>
```

---

## 4️⃣ SỬ DỤNG PLACEHOLDER (Nếu chưa có ảnh)

Nếu bạn chưa có ảnh thật, có thể dùng placeholder tạm:

### Picsum Photos (Ảnh đẹp random)
```tsx
<img src="https://picsum.photos/500/600" alt="Placeholder" />
```

### UI Avatars (Avatar từ tên)
```tsx
<img src="https://ui-avatars.com/api/?name=Your+Name&size=500&background=f97316&color=fff" alt="Avatar" />
```

### Unsplash (Ảnh chất lượng cao)
```tsx
<img src="https://source.unsplash.com/500x600/?portrait,developer" alt="Developer" />
```

---

## 5️⃣ TỐI ƯU ẢNH

### Online Tools (Miễn phí)
1. **TinyPNG** - https://tinypng.com/
   - Nén JPG/PNG mà không mất chất lượng
   
2. **Squoosh** - https://squoosh.app/
   - Nén và convert sang WebP
   
3. **ImageOptim** (Mac) - https://imageoptim.com/

### Mục tiêu:
- Kích thước file < 500KB
- Vẫn giữ chất lượng tốt
- Format WebP nếu có thể

---

## 6️⃣ CHECKLIST

- [ ] Tạo folder `public/images/`
- [ ] Thêm ảnh đại diện `profile.jpg`
- [ ] Cập nhật Home.tsx với ảnh profile
- [ ] Cập nhật About.tsx với ảnh profile
- [ ] Tạo folder `public/images/projects/`
- [ ] Thêm ảnh cho các dự án
- [ ] Cập nhật Projects.tsx với ảnh projects
- [ ] Nén và tối ưu tất cả ảnh
- [ ] Test trên dev server (`npm run dev`)

---

## 🐛 Troubleshooting

### Ảnh không hiển thị?
1. Kiểm tra đường dẫn: Phải bắt đầu bằng `/images/...`
2. Kiểm tra tên file: Không dấu, không khoảng trắng
3. Restart dev server: `Ctrl+C` rồi `npm run dev` lại

### Ảnh bị méo?
- Dùng `object-cover` thay vì `object-contain`
- Hoặc crop ảnh về đúng tỷ lệ trước khi upload

### Ảnh load chậm?
- Nén ảnh xuống < 500KB
- Convert sang WebP
- Dùng lazy loading (sẽ hướng dẫn sau)

---

## 📞 Cần giúp đỡ?

Nếu gặp vấn đề, hãy:
1. Kiểm tra console trong browser (F12)
2. Xem có lỗi 404 (file not found) không
3. Đảm bảo đường dẫn file đúng

Good luck! 🚀
