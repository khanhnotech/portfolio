// Component hiển thị ngày giờ thời gian thực và lượt xem
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faEye } from '@fortawesome/free-solid-svg-icons'

function DateTimeWidget() {
  // State lưu thời gian hiện tại
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // State lưu số lượt xem
  const [viewCount, setViewCount] = useState(0)

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
    <div className="fixed bottom-4 right-4 z-50 animate-fadeIn">
      {/* Widget container - nhỏ gọn hơn */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95 transition-colors duration-300">
        {/* Ngày tháng - compact */}
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
          <div className="bg-orange-500 p-2 rounded-lg">
            <FontAwesomeIcon icon={faCalendar} className="text-white text-sm" />
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {dayName}
            </div>
            <div className="text-sm font-bold text-gray-900 dark:text-white font-display">
              {fullDate}
            </div>
          </div>
        </div>

        {/* Thời gian - compact */}
        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
          <div className="bg-blue-500 p-2 rounded-lg">
            <FontAwesomeIcon icon={faClock} className="text-white text-sm" />
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              VN Time
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white font-mono tabular-nums">
              {time}
            </div>
          </div>
        </div>

        {/* Lượt xem profile - compact */}
        <div className="flex items-center gap-2">
          <div className="bg-purple-500 p-2 rounded-lg">
            <FontAwesomeIcon icon={faEye} className="text-white text-sm" />
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Views
            </div>
            <div className="text-sm font-bold text-gray-900 dark:text-white font-display">
              {viewCount.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Decorative dot - Live indicator */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Live"></div>
      </div>
    </div>
  )
}

export default DateTimeWidget
