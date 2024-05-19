import { listingsUrl, API_KEY } from '../constants/urlEndpoints.js'

export async function placeBid(id, amount) {
  const response = await fetch(`${listingsUrl}/${id}/bids`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
    body: JSON.stringify({
      amount: amount,
    }),
  })
  const data = await response.json()
}
