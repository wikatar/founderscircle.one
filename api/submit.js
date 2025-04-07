// GitHub API endpoint for form submission
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
    
    // GitHub API configuration
    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = 'wilmercruz';
    const repoName = 'FoundersCircle.one';
    const issueTitle = `New Application: ${req.body.name} from ${req.body.company}`;
    
    // Format the issue body
    const issueBody = `
## Application Details
- **Name:** ${req.body.name}
- **Email:** ${req.body.email}
- **Company:** ${req.body.company}
- **Role:** ${req.body.role}
- **Stage:** ${req.body.stage}
- **Revenue:** ${req.body.revenue}
- **Message:** ${req.body.message}

Submitted on: ${new Date().toISOString()}
    `;
    
    // Create a GitHub issue with the form data
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${githubToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'FoundersCircle-Form'
      },
      body: JSON.stringify({
        title: issueTitle,
        body: issueBody,
        labels: ['application']
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('GitHub API error:', errorData);
      throw new Error(`GitHub API error: ${errorData.message || response.statusText}`);
    }
    
    const data = await response.json();
    console.log('GitHub issue created:', data);
    
    // Return success response
    return res.status(200).json({ 
      message: 'Application submitted successfully',
      issueUrl: data.html_url
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message
    });
  }
} 