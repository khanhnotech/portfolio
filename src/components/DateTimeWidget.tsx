// Component hiển thị ngày giờ thời gian thực và lượt xem - có thể kéo được
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faEye, faGripVertical } from '@fortawesome/free-solid-svg-icons'

function DateTimeWidget() {
  // State lưu thời gian hiện tại
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // State lưu số lượt xem
  const [viewCount, setViewCount] = useState(0)

  // State cho dragging
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(() => {
    // Lấy vị trí từ localStorage hoặc dùng mặc định top-right (không che header)
    const saved = localStorage.getItem('widgetPosition')
    if (saved) {
      return JSON.parse(saved)
    }
    // Default position: top-right, dưới header
    if (typeof window !== 'undefined') {
      return { x: window.innerWidth - 220, y: 100 }
    }
    return { x: 16, y: 100 } // fallback
  })
  
  const widgetRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 })

  // Effect: Cập nhật vị trí mặc định khi component mount
  useEffect(() => {
    const saved = localStorage.getItem('widgetPosition')
    if (!saved && typeof window !== 'undefined') {
      // Nếu chưa có vị trí lưu, đặt ở top-right
      const defaultPosition = { x: window.innerWidth - 220, y: 100 }
      setPosition(defaultPosition)
    }
  }, [])

  // Effect: Load và tăng view count khi component mount
  useEffect(() => {
    // Lấy view count từ localStorage
    const savedViews = localStorage.getItem('profileViews')
    const currentViews = savedViews ? parseInt(savedViews) : 0
    
    // Tăng lên 1
    const newViews = currentViews + 1
    setViewCount(newViews)
    
    // Lưu lại vào localStorage
    localStorage.setItem('profileViews', newViews.toString())
  }, [])

  // Effect: Cập nhật thời gian mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Cập nhật mỗi 1 giây

    // Cleanup: Xóa interval khi component unmount
    return () => clearInterval(timer)
  }, [])

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    const touch = e.touches[0]
    dragRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      startPosX: position.x,
      startPosY: position.y
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      const deltaX = e.clientX - dragRef.current.startX
      const deltaY = e.clientY - dragRef.current.startY
      
      const newX = Math.max(0, Math.min(window.innerWidth - 200, dragRef.current.startPosX + deltaX))
      const newY = Math.max(80, Math.min(window.innerHeight - 200, dragRef.current.startPosY + deltaY)) // min 80px để không che header
      
      setPosition({ x: newX, y: newY })
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      
      const touch = e.touches[0]
      const deltaX = touch.clientX - dragRef.current.startX
      const deltaY = touch.clientY - dragRef.current.startY
      
      const newX = Math.max(0, Math.min(window.innerWidth - 200, dragRef.current.startPosX + deltaX))
      const newY = Math.max(80, Math.min(window.innerHeight - 200, dragRef.current.startPosY + deltaY)) // min 80px để không che header
      
      setPosition({ x: newX, y: newY })
    }

    const handleEnd = () => {
      if (isDragging) {
        setIsDragging(false)
        // Lưu vị trí vào localStorage
        localStorage.setItem('widgetPosition', JSON.stringify(position))
      }
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, position])

  // Format ngày tháng
  const formatDate = (date: Date) => {
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
    const dayName = days[date.getDay()]
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    
    return {
      dayName,
      fullDate: `${day}/${month}/${year}`
    }
  }

  // Format giờ phút giây
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    
    return `${hours}:${minutes}:${seconds}`
  }

  const { dayName, fullDate } = formatDate(currentTime)
  const time = formatTime(currentTime)

  return (
    <div 
      ref={widgetRef}
      className="fixed z-50 animate-fadeIn select-none"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        transition: isDragging ? 'none' : 'transform 0.2s ease'
      }}
    >
      {/* Widget container - responsive size với theme tối */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 backdrop-blur-lg bg-opacity-95 transition-colors duration-300 p-3 md:p-4">
        
        {/* Drag handle */}
        <div 
          className="absolute top-1 left-1/2 transform -translate-x-1/2 cursor-move touch-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <FontAwesomeIcon 
            icon={faGripVertical} 
            className="text-gray-400 hover:text-gray-300 text-xs transition-colors" 
          />
        </div>

        {/* Ngày tháng - responsive */}
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pb-2 border-b border-gray-200 dark:border-gray-700 mt-2">
          <div className="bg-orange-500 p-2 md:p-3 rounded-lg">
            <FontAwesomeIcon icon={faCalendar} className="text-white text-sm md:text-base" />
          </div>
          <div>
            <div className="text-xs md:text-sm text-white dark:text-gray-400">
              {dayName}
            </div>
            <div className="text-sm md:text-base font-bold text-white dark:text-white font-display">
              {fullDate}
            </div>
          </div>
        </div>

        {/* Thời gian - responsive */}
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
          <div className="bg-blue-500 p-2 md:p-3 rounded-lg">
            <FontAwesomeIcon icon={faClock} className="text-white text-sm md:text-base" />
          </div>
          <div>
            <div className="text-xs md:text-sm text-white dark:text-gray-400">
              VN Time
            </div>
            <div className="text-lg md:text-xl font-bold text-white dark:text-white font-mono tabular-nums">
              {time}
            </div>
          </div>
        </div>

        {/* Lượt xem profile - responsive */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-purple-500 p-2 md:p-3 rounded-lg">
            <FontAwesomeIcon icon={faEye} className="text-white text-sm md:text-base" />
          </div>
          <div>
            <div className="text-xs md:text-sm text-white dark:text-white">
              Views
            </div>
            <div className="text-sm md:text-base font-bold text-white dark:text-white font-display">
              {viewCount.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Decorative dot - Live indicator */}
        <div className="absolute top-2 right-2 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" title="Live"></div>
      </div>
    </div>
  )
}

export default DateTimeWidget
