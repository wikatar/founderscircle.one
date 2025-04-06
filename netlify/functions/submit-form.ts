import { Handler } from '@netlify/functions'

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  }

  try {
    const formData = JSON.parse(event.body || '{}')
    
    const response = await fetch('https://api.github.com/repos/wikatar/FoundersCircle.one/dispatches', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${process.env.FORM_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: 'form_submission',
        client_payload: formData
      })
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' })
    }
  }
}

export { handler } 