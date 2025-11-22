# 📸 Images Folder

Thư mục này chứa tất cả hình ảnh cho portfolio của bạn.

## 📁 Cấu trúc đề xuất

```
public/images/
├── profile.jpg          # Ảnh đại diện chính (cho Home page)
├── profile-about.jpg    # Ảnh cho About page (có thể giống profile.jpg)
├── projects/            # Ảnh cho các dự án
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
└── README.md           # File này
```

## 🖼️ Hướng dẫn sử dụng

### 1. Thêm ảnh đại diện (Profile Picture)

**Bước 1:** Thêm ảnh của bạn vào thư mục này, đặt tên là `profile.jpg` (hoặc .png)

**Bước 2:** Mở file `src/components/Home.tsx` và tìm dòng:

```tsx
{/* Placeholder - thay bằng ảnh thật của bạn */}
<div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center border-4 border-gray-700 shadow-2xl">
```

**Bước 3:** Thay thế bằng:

```tsx
{/* Ảnh đại diện của bạn */}
<img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="w-full h-full object-cover rounded-3xl border-4 border-gray-700 shadow-2xl"
/>
```

### 2. Thêm ảnh cho About page

Mở file `src/components/About.tsx` và tìm:

```tsx
<div className="w-40 h-40 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl border-4 border-gray-700">
  <FontAwesomeIcon icon={faUser} className="text-white text-7xl" />
</div>
```

Thay bằng:

```tsx
<img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-gray-700"
/>
```

### 3. Thêm ảnh cho Projects

**Bước 1:** Tạo thư mục `projects` trong `public/images/`

**Bước 2:** Thêm ảnh cho từng dự án: `project1.jpg`, `project2.jpg`, etc.

**Bước 3:** Trong `src/components/Projects.tsx`, thêm field `image` vào interface:

```tsx
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  icon: string
  image?: string  // Thêm dòng này
  status: 'completed' | 'in-progress' | 'planned'
  link?: string
}
```

**Bước 4:** Thêm đường dẫn ảnh vào data:

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    image: '/images/projects/project1.jpg',  // Thêm dòng này
    // ... các field khác
  },
]
```

**Bước 5:** Hiển thị ảnh trong card:

```tsx
{/* Thêm vào phần header của card, trước icon */}
{project.image && (
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-48 object-cover"
  />
)}
```

## 📏 Kích thước ảnh đề xuất

- **Profile picture (Home)**: 500x600px hoặc tỷ lệ 5:6
- **Profile picture (About)**: 400x400px (vuông)
- **Project images**: 800x600px hoặc tỷ lệ 4:3

## 💡 Tips

1. **Tối ưu ảnh**: Nén ảnh trước khi upload để website load nhanh hơn
   - Dùng tools: TinyPNG, Squoosh, hoặc ImageOptim
   - Kích thước file nên < 500KB

2. **Format**: 
   - JPG cho ảnh thật
   - PNG cho ảnh có background trong suốt
   - WebP cho tối ưu tốt nhất (modern browsers)

3. **Naming**: Đặt tên file không dấu, không khoảng trắng
   - ✅ Good: `profile.jpg`, `project-1.jpg`
   - ❌ Bad: `Ảnh đại diện.jpg`, `project 1.jpg`

## 🎨 Placeholder Images

Nếu chưa có ảnh, bạn có thể dùng placeholder từ:
- https://picsum.photos/ (ảnh random đẹp)
- https://ui-avatars.com/ (avatar từ tên)
- https://placeholder.com/ (placeholder đơn giản)

Ví dụ:
```tsx
<img src="https://picsum.photos/500/600" alt="Placeholder" />
```

---

**Lưu ý:** Sau khi thêm ảnh, bạn có thể cần restart dev server (`npm run dev`) để thấy thay đổi.
