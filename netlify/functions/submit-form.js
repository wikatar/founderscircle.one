const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Parse the form data
    const formData = JSON.parse(event.body);
    
    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
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
        <p><strong>LinkedIn:</strong> ${formData.linkedin}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Application submitted successfully' })
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing your application' })
    };
  }
}; 