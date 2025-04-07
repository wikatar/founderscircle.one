// API endpoint for form submission that sends an email notification
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Log the request method and body for debugging
    console.log('Request method:', req.method);
    console.log('Request body:', req.body);
    
    // Validate that we have a body
    if (!req.body) {
      return res.status(400).json({ error: 'Request body is required' });
    }

    // Get email credentials from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'your-email@example.com';
    
    if (!emailUser || !emailPass) {
      console.error('Email credentials are not set');
      // Still return success even if email fails
      return res.status(200).json({ 
        message: 'Application submitted successfully (email notification failed)',
        data: req.body
      });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Format the email content
    const emailContent = `
      <h2>New Application Received</h2>
      <p><strong>Name:</strong> ${req.body.name}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Company:</strong> ${req.body.company}</p>
      <p><strong>Role:</strong> ${req.body.role}</p>
      <p><strong>Stage:</strong> ${req.body.stage}</p>
      <p><strong>Revenue:</strong> ${req.body.revenue}</p>
      <p><strong>Message:</strong> ${req.body.message}</p>
    `;

    // Send the email
    await transporter.sendMail({
      from: emailUser,
      to: recipientEmail,
      subject: `New Application: ${req.body.name} from ${req.body.company}`,
      html: emailContent
    });
    
    // Return success response
    return res.status(200).json({ 
      message: 'Application submitted successfully',
      data: req.body
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    // Still return success even if email fails
    return res.status(200).json({ 
      message: 'Application submitted successfully (email notification failed)',
      data: req.body
    });
  }
} 