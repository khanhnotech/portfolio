# 🎬 HƯỚNG DẪN ANIMATIONS

## ✨ Animations đã thêm

### 1. **Home Page**
- ✅ Animated gradient background
- ✅ Floating background elements
- ✅ Slide in from left (text content)
- ✅ Slide in from right (image)
- ✅ Fade in với staggered delays
- ✅ Scale in animations
- ✅ Bounce animations cho icons
- ✅ Pulse glow cho buttons
- ✅ Hover effects với scale và rotate
- ✅ Gradient text animation
- ✅ Stats hover effects

### 2. **Technologies Page**
- ✅ Fade in header
- ✅ Scale in stats cards với delays
- ✅ Bounce icons on hover
- ✅ Staggered card animations
- ✅ Shadow glow on hover

### 3. **Layout Fixes**
- ✅ Container responsive
- ✅ Height không vượt quá màn hình
- ✅ Proper spacing và padding
- ✅ Mobile responsive

## 🎨 Animation Classes Available

### Fade Animations
```tsx
className="animate-fadeIn"                    // Fade in từ dưới lên
className="animate-fadeIn animation-delay-200" // Fade in với delay 0.2s
```

### Slide Animations
```tsx
className="animate-slideInLeft"   // Slide từ trái
className="animate-slideInRight"  // Slide từ phải
```

### Scale Animations
```tsx
className="animate-scaleIn"       // Scale từ nhỏ lên
```

### Loop Animations
```tsx
className="animate-bounce-slow"   // Bounce chậm (3s)
className="animate-float"         // Float lên xuống (6s)
className="animate-pulseGlow"     // Pulse glow effect (2s)
className="animate-gradient"      // Gradient shift (8s)
```

### Delay Classes
```tsx
className="animation-delay-200"   // Delay 0.2s
className="animation-delay-400"   // Delay 0.4s
className="animation-delay-600"   // Delay 0.6s
className="animation-delay-800"   // Delay 0.8s
```

## 🎯 Cách sử dụng

### Ví dụ 1: Card với fade in và delay
```tsx
<div className="animate-fadeIn animation-delay-400">
  <h3>My Card</h3>
</div>
```

### Ví dụ 2: Button với hover effects
```tsx
<button className="hover:scale-110 hover:rotate-3 transition-all duration-300">
  Click Me
</button>
```

### Ví dụ 3: Icon với bounce animation
```tsx
<FontAwesomeIcon 
  icon={faCode} 
  className="animate-bounce-slow" 
/>
```

### Ví dụ 4: Gradient text
```tsx
<h1 className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
  Animated Text
</h1>
```

### Ví dụ 5: Staggered list animations
```tsx
{items.map((item, index) => (
  <div 
    key={index}
    className="animate-fadeIn"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {item}
  </div>
))}
```

## 🔧 Customization

### Thay đổi animation duration

Trong `index.css`, tìm animation và đổi duration:

```css
@keyframes fadeIn {
  /* ... */
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out; /* Đổi 0.6s thành 1s */
}
```

### Thêm animation mới

1. Thêm keyframes trong `index.css`:
```css
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

2. Thêm class:
```css
.animate-myAnimation {
  animation: myAnimation 0.8s ease-out;
}
```

3. Sử dụng:
```tsx
<div className="animate-myAnimation">
  Content
</div>
```

## 💡 Best Practices

### 1. Không overuse animations
- Chỉ animate những elements quan trọng
- Quá nhiều animations = rối mắt

### 2. Sử dụng delays hợp lý
- Stagger animations cho lists
- Delay 0.1-0.2s giữa các items

### 3. Performance
- Ưu tiên `transform` và `opacity` (GPU accelerated)
- Tránh animate `width`, `height`, `top`, `left`

### 4. Accessibility
- Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 🎬 Animation Combinations

### Hero Section
```tsx
<div className="animate-slideInLeft">
  <h1 className="animate-fadeIn animation-delay-200">Title</h1>
  <p className="animate-fadeIn animation-delay-400">Description</p>
  <button className="animate-scaleIn animation-delay-600 hover:scale-110">
    CTA
  </button>
</div>
```

### Card Grid
```tsx
{cards.map((card, i) => (
  <div 
    className="animate-scaleIn hover:scale-105 transition-all"
    style={{ animationDelay: `${i * 0.1}s` }}
  >
    {card}
  </div>
))}
```

### Floating Elements
```tsx
<div className="absolute top-10 left-10 animate-float">
  <div className="w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
</div>
```

## 🐛 Troubleshooting

### Animation không chạy?
1. Check class name đúng chưa
2. Check có conflict với CSS khác không
3. Restart dev server

### Animation bị giật?
1. Dùng `transform` thay vì `margin/padding`
2. Thêm `will-change: transform`
3. Reduce animation complexity

### Animation chạy mỗi lần re-render?
- Animations chỉ chạy 1 lần khi component mount
- Nếu muốn repeat, dùng `infinite` trong animation

---

Enjoy your animated portfolio! 🎉
