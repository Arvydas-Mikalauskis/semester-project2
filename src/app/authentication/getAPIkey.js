import { apiKey_url } from '../constants/urlEndpoints.js'

export async function getAPIkey() {
  const response = await fetch(apiKey_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      name: 'Auction API Key',
    }),
  })

  if (response.ok) {
    return await response.json()
  }

  console.error('Failed to get API key')
}
