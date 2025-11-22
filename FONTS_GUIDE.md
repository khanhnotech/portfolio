# 🔤 HƯỚNG DẪN FONTS

## ✨ Fonts đã thêm

### 1. **Inter** (Default - Sans Serif)
- **Sử dụng cho**: Body text, paragraphs, descriptions
- **Class**: `font-sans` (default)
- **Đặc điểm**: Clean, modern, dễ đọc
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### 2. **Poppins** (Display - Headings)
- **Sử dụng cho**: Headings, titles, buttons
- **Class**: `font-display`
- **Đặc điểm**: Bold, eye-catching, professional
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### 3. **Space Grotesk** (Monospace - Tech)
- **Sử dụng cho**: Code, technical text, names
- **Class**: `font-mono`
- **Đặc điểm**: Tech-style, geometric, unique
- **Weights**: 300, 400, 500, 600, 700

## 🎨 Cách sử dụng

### Body Text (Default)
```tsx
<p className="font-sans">
  This is body text with Inter font
</p>
```

### Headings (Display)
```tsx
<h1 className="font-display font-bold">
  This is a heading with Poppins
</h1>
```

### Technical Text (Mono)
```tsx
<span className="font-mono">
  LAM PHUONG KHANH
</span>
```

## 📍 Đã áp dụng ở đâu?

### Home Page
- ✅ Name: `font-mono` (Space Grotesk)
- ✅ Title: `font-display font-black` (Poppins)
- ✅ Description: `font-sans` (Inter - default)
- ✅ Buttons: `font-display font-bold`

### Header
- ✅ Logo text: `font-display font-bold`
- ✅ Navigation: `font-display font-medium`
- ✅ Hire Me button: `font-display font-semibold`

### All Pages
- ✅ Page titles: `font-display font-bold`
- ✅ Body text: `font-sans` (default)
- ✅ Buttons: `font-display`

## 🎯 Font Weights

### Inter (Sans)
```tsx
font-light      // 300
font-normal     // 400
font-medium     // 500
font-semibold   // 600
font-bold       // 700
font-extrabold  // 800
font-black      // 900
```

### Poppins (Display)
```tsx
font-display font-light      // 300
font-display font-normal     // 400
font-display font-medium     // 500
font-display font-semibold   // 600
font-display font-bold       // 700
font-display font-extrabold  // 800
font-display font-black      // 900
```

### Space Grotesk (Mono)
```tsx
font-mono font-light      // 300
font-mono font-normal     // 400
font-mono font-medium     // 500
font-mono font-semibold   // 600
font-mono font-bold       // 700
```

## 💡 Best Practices

### 1. Hierarchy
```tsx
// Large headings
<h1 className="font-display font-black text-6xl">

// Medium headings
<h2 className="font-display font-bold text-4xl">

// Small headings
<h3 className="font-display font-semibold text-2xl">

// Body text
<p className="font-sans font-normal text-base">

// Small text
<span className="font-sans font-light text-sm">
```

### 2. Tracking (Letter Spacing)
```tsx
// Tight for large headings
<h1 className="font-display tracking-tight">

// Normal for body
<p className="font-sans tracking-normal">

// Wide for small caps
<span className="font-mono tracking-wider">
```

### 3. Line Height
```tsx
// Tight for headings
<h1 className="leading-tight">

// Relaxed for body
<p className="leading-relaxed">

// Loose for readability
<p className="leading-loose">
```

## 🎨 Combinations

### Hero Section
```tsx
<div>
  <span className="font-mono tracking-wider">YOUR NAME</span>
  <h1 className="font-display font-black tracking-tight">
    FULLSTACK Developer
  </h1>
  <p className="font-sans leading-relaxed">
    Description text here...
  </p>
</div>
```

### Card
```tsx
<div>
  <h3 className="font-display font-bold">Card Title</h3>
  <p className="font-sans text-gray-400">Card description</p>
</div>
```

### Button
```tsx
<button className="font-display font-semibold">
  Click Me
</button>
```

## 🔧 Customization

### Thêm font mới

1. **Thêm vào index.html**:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

2. **Cập nhật tailwind.config.js**:
```js
theme: {
  extend: {
    fontFamily: {
      'custom': ['YourFont', 'sans-serif'],
    },
  },
}
```

3. **Sử dụng**:
```tsx
<h1 className="font-custom">Text</h1>
```

### Thay đổi default font

Trong `tailwind.config.js`:
```js
fontFamily: {
  'sans': ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 📊 Performance

### Preconnect (Đã thêm)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Font Display
- `display=swap` - Hiển thị fallback font trước, swap khi font load xong
- Tránh FOIT (Flash of Invisible Text)

### Optimize
- Chỉ load weights cần thiết
- Sử dụng `&display=swap`
- Preconnect to Google Fonts

## 🎯 Examples

### Professional Look
```tsx
<div className="font-display">
  <h1 className="font-black text-6xl tracking-tight">
    Professional Title
  </h1>
  <p className="font-sans text-lg leading-relaxed">
    Clean and readable body text
  </p>
</div>
```

### Tech/Modern Look
```tsx
<div>
  <span className="font-mono tracking-wider uppercase">
    Tech Label
  </span>
  <h2 className="font-display font-bold">
    Modern Heading
  </h2>
</div>
```

### Elegant Look
```tsx
<div>
  <h1 className="font-display font-light text-5xl tracking-wide">
    Elegant Title
  </h1>
  <p className="font-sans font-light leading-loose">
    Sophisticated description
  </p>
</div>
```

---

## 📝 Summary

- **Inter**: Body text, descriptions (default)
- **Poppins**: Headings, titles, buttons
- **Space Grotesk**: Names, technical text

Fonts đã được optimize và load nhanh với preconnect! 🚀
