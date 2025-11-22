# 🌓 HƯỚNG DẪN THEME & LANGUAGE

## ✨ Tính năng đã thêm

### 1. Dark/Light Mode Toggle
- Nút **☀️/🌙** ở góc phải Header
- Tự động lưu preference vào localStorage
- Smooth transition khi chuyển đổi
- Responsive trên cả desktop và mobile

### 2. Language Toggle (EN/VI)
- Nút **🌐 EN/VI** ở góc phải Header
- Chuyển đổi giữa tiếng Anh và tiếng Việt
- Tự động lưu preference vào localStorage
- Tất cả text trong app đều được dịch

---

## 🎨 Cách hoạt động

### Theme Context (`src/contexts/ThemeContext.tsx`)
- Quản lý state `theme`: 'dark' hoặc 'light'
- Lưu vào localStorage
- Thêm/xóa class `dark` vào `<html>` element
- Tailwind CSS sẽ tự động apply dark: variants

### Language Context (`src/contexts/LanguageContext.tsx`)
- Quản lý state `language`: 'en' hoặc 'vi'
- Chứa object `translations` với tất cả text
- Function `t(key)` để lấy text theo ngôn ngữ hiện tại
- Lưu vào localStorage

---

## 📝 Cách thêm text mới cần dịch

### Bước 1: Thêm vào translations object

Mở `src/contexts/LanguageContext.tsx` và thêm key mới:

```typescript
const translations = {
  en: {
    // ... existing keys
    'myNewKey': 'My English Text',
  },
  vi: {
    // ... existing keys
    'myNewKey': 'Text tiếng Việt của tôi',
  }
}
```

### Bước 2: Sử dụng trong component

```tsx
import { useLanguage } from '../contexts/LanguageContext'

function MyComponent() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t('myNewKey')}</h1>
    </div>
  )
}
```

---

## 🎨 Cách thêm dark mode cho component mới

### Sử dụng Tailwind dark: variants

```tsx
// Background: sáng ở light mode, tối ở dark mode
<div className="bg-white dark:bg-gray-800">

// Text: đen ở light mode, trắng ở dark mode  
<p className="text-gray-900 dark:text-white">

// Border: xám nhạt ở light, xám đậm ở dark
<div className="border border-gray-200 dark:border-gray-700">
```

### Pattern thường dùng:

```tsx
// Card
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">

// Button
<button className="bg-orange-500 hover:bg-orange-600 text-white">

// Text primary
<h1 className="text-gray-900 dark:text-white">

// Text secondary
<p className="text-gray-600 dark:text-gray-400">

// Input
<input className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600">
```

---

## 🔧 Customization

### Thay đổi theme mặc định

Mở `src/contexts/ThemeContext.tsx`:

```typescript
const [theme, setTheme] = useState<Theme>(() => {
  const saved = localStorage.getItem('theme')
  return (saved as Theme) || 'light'  // ← Đổi 'dark' thành 'light'
})
```

### Thay đổi ngôn ngữ mặc định

Mở `src/contexts/LanguageContext.tsx`:

```typescript
const [language, setLanguage] = useState<Language>(() => {
  const saved = localStorage.getItem('language')
  return (saved as Language) || 'en'  // ← Đổi 'vi' thành 'en'
})
```

### Thêm ngôn ngữ thứ 3 (ví dụ: Tiếng Nhật)

1. Thêm type:
```typescript
type Language = 'en' | 'vi' | 'ja'
```

2. Thêm translations:
```typescript
const translations = {
  en: { /* ... */ },
  vi: { /* ... */ },
  ja: {
    'nav.home': 'ホーム',
    // ... thêm tất cả keys
  }
}
```

3. Cập nhật toggle function để cycle qua 3 ngôn ngữ

---

## 🎯 Components đã được update

✅ **Header** - Có nút toggle theme và language
✅ **App** - Background responsive với theme
✅ **Footer** - Colors responsive với theme

### Components cần update thêm (nếu muốn):

Các components sau vẫn đang dùng text hardcoded, bạn có thể update để support đa ngôn ngữ:

- `Home.tsx` - Thay text bằng `t('home.greeting')`, etc.
- `Technologies.tsx` - Thay text bằng `t('tech.title')`, etc.
- `Projects.tsx` - Thay text bằng `t('projects.title')`, etc.
- `About.tsx` - Thay text bằng `t('about.title')`, etc.
- `Contact.tsx` - Thay text bằng `t('contact.title')`, etc.

---

## 📱 Mobile Support

Cả 2 nút toggle đều có trong mobile menu:
- Mở hamburger menu
- Scroll xuống dưới cùng
- Thấy 2 nút: Light/Dark và EN/VI

---

## 💡 Tips

### 1. Test dark mode
- Click nút ☀️/🌙 ở header
- Reload trang → theme vẫn được giữ (localStorage)
- Mở DevTools → Application → Local Storage → xem key 'theme'

### 2. Test language
- Click nút 🌐 EN/VI ở header
- Tất cả text trong header sẽ đổi ngay
- Reload trang → language vẫn được giữ

### 3. Smooth transitions
- Tất cả color changes đều có `transition-colors duration-300`
- Được define trong `index.css`

---

## 🐛 Troubleshooting

### Dark mode không hoạt động?
1. Check `tailwind.config.js` có `darkMode: 'class'`
2. Check `<html>` có class `dark` khi toggle (F12 → Elements)
3. Restart dev server

### Language không đổi?
1. Check console có lỗi không
2. Check key trong translations object có đúng không
3. Check component có import và dùng `useLanguage()` không

### Màu sắc không đổi khi toggle theme?
- Đảm bảo dùng `dark:` prefix cho dark mode colors
- Ví dụ: `bg-white dark:bg-gray-800`

---

## 🚀 Next Steps

Nếu muốn hoàn thiện hơn:

1. **Update tất cả components** để support đa ngôn ngữ
2. **Thêm animations** khi toggle theme/language
3. **Auto-detect** system theme preference
4. **Auto-detect** browser language
5. **Thêm ngôn ngữ khác** (Nhật, Hàn, Trung, etc.)

---

Chúc bạn code vui! 🎉
