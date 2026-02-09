// Vercel API function để gửi email
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Chỉ cho phép POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    })
  }

  console.log('📧 Received email request:', req.body)
  
  try {
    const { name, email, message } = req.body

    // Validate input
    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing fields')
      return res.status(400).json({
        success: false,
        message: 'Vui lòng điền đầy đủ thông tin!'
      })
    }

    console.log('✅ Validation passed, creating transporter...')
    console.log('📧 Email config:', {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? '***hidden***' : 'NOT_SET',
      to: process.env.EMAIL_TO
    })

    // Tạo transporter với Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    console.log('🔧 Testing transporter connection...')
    
    // Test connection trước khi gửi
    await transporter.verify()
    console.log('✅ SMTP connection verified')

    // Cấu hình email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `📧 Tin nhắn mới từ Portfolio - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #f97316; text-align: center; margin-bottom: 30px;">
            📧 Tin nhắn mới từ Portfolio
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Thông tin người gửi:</h3>
            <p><strong>Tên:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Nội dung tin nhắn:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px;">
              Tin nhắn này được gửi từ form liên hệ trên website Portfolio
            </p>
          </div>
        </div>
      `
    }

    console.log('📤 Sending email...')
    
    // Gửi email
    const result = await transporter.sendMail(mailOptions)
    
    console.log('✅ Email sent successfully:', result.messageId)
    
    res.status(200).json({
      success: true,
      message: 'Email đã được gửi thành công! Cảm ơn bạn đã liên hệ.',
      messageId: result.messageId
    })
    
  } catch (error) {
    console.error('❌ Error sending email:', error)
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    })
    
    res.status(500).json({
      success: false,
      message: 'Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.',
      error: error.message
    })
  }
}