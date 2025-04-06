const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Parse the form data
    const formData = JSON.parse(event.body);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'role', 'stage', 'revenue', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        })
      };
    }

    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Application from FoundersCircle.one',
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Role:</strong> ${formData.role}</p>
        <p><strong>Stage:</strong> ${formData.stage}</p>
        <p><strong>Revenue:</strong> ${formData.revenue}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        message: 'Application submitted successfully' 
      })
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        error: 'Error processing your application' 
      })
    };
  }
}; 