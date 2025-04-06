// This file will be deployed as a serverless function
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const formData = req.body;
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'role', 'stage', 'revenue', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: `Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    // Call GitHub API to trigger the workflow
    const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`, {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: 'form_submission',
        client_payload: formData
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit form');
    }

    // Return success response
    return res.status(200).json({ 
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      error: 'Error processing your application' 
    });
  }
} 