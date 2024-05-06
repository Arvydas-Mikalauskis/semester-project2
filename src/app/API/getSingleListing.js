import { listingsUrl } from '../constants/urlEndpoints.js'
import { displayListings } from './displayListings.js'

export async function getSingleListing(id) {
  const response = await fetch(listingsUrl + `/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  const data = await response.json()
  console.log(data)
}
