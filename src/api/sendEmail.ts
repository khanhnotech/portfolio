// API để gửi email từ form liên hệ
// Interface cho dữ liệu email
interface EmailData {
  name: string
  email: string
  message: string
}

// Hàm gửi email thông qua API endpoint
export async function sendContactEmail(data: EmailData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    
    return result
    
  } catch (error) {
    console.error('Lỗi gửi email:', error)
    return {
      success: false,
      message: 'Không thể kết nối đến server. Vui lòng thử lại sau.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}