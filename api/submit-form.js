// API endpoint for form submission that sends an email notification
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

    // Get the GitHub token from environment variables
    const githubToken = process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
      console.error('GitHub token is not set');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Create an issue in the repository to send an email notification
    const issueData = {
      title: `New Application: ${req.body.firstName} ${req.body.lastName}`,
      body: `
## New Application Received

**Name:** ${req.body.firstName} ${req.body.lastName}
**Email:** ${req.body.email}
**Phone:** ${req.body.phone}
**Company:** ${req.body.company}
**Role:** ${req.body.role}
**Company Size:** ${req.body.companySize}
**Industry:** ${req.body.industry}
**Funding Stage:** ${req.body.fundingStage}
**Monthly Revenue:** ${req.body.monthlyRevenue}
**Monthly Expenses:** ${req.body.monthlyExpenses}
**Monthly Burn Rate:** ${req.body.monthlyBurnRate}
**Runway:** ${req.body.runway}
**Monthly Growth Rate:** ${req.body.monthlyGrowthRate}
**Monthly Active Users:** ${req.body.monthlyActiveUsers}
**Monthly Recurring Revenue:** ${req.body.monthlyRecurringRevenue}
**Annual Recurring Revenue:** ${req.body.annualRecurringRevenue}
**Customer Acquisition Cost:** ${req.body.customerAcquisitionCost}
**Lifetime Value:** ${req.body.lifetimeValue}
**Churn Rate:** ${req.body.churnRate}
**Net Revenue Retention:** ${req.body.netRevenueRetention}
**Gross Margin:** ${req.body.grossMargin}
**Operating Margin:** ${req.body.operatingMargin}
**Cash Flow:** ${req.body.cashFlow}
**Profitability:** ${req.body.profitability}
**Funding Needs:** ${req.body.fundingNeeds}
**Use of Funds:** ${req.body.useOfFunds}
      `
    };

    // Send the issue to GitHub
    const response = await fetch('https://api.github.com/repos/wikatar/founderscircle.one/issues', {
      method: 'POST',
      headers: {
        'Authorization': `token ${githubToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify(issueData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error creating GitHub issue:', errorData);
      return res.status(500).json({ error: 'Failed to send email notification' });
    }
    
    // Return success response
    return res.status(200).json({ 
      message: 'Application submitted successfully',
      data: req.body
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      error: 'Error processing your application: ' + error.message
    });
  }
} 