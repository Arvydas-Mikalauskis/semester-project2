import { listingsUrl } from '../constants/urlEndpoints.js'
import { displayListings } from './displayListings.js'

const queryParams = `?&_seller=true&_bids=true`

export async function getSingleListing(id) {
  const response = await fetch(`${listingsUrl}/${id}/${queryParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  const data = await response.json()

  document.getElementById('listing-title').textContent = data.data.title
  document.getElementById('listing-descr').textContent = data.data.description
  document.getElementById('productImg').src =
    data.data.media.length > 0
      ? data.data.media[0].url
      : 'https://via.placeholder.com/150'

  document.getElementById('currentBid').textContent =
    data.data.bids.length > 0
      ? `Current highest bid: $${
          data.data.bids[data.data.bids.length - 1].amount
        }`
      : 'No bids yet'

  document.getElementById(
    'bid-endsAt'
  ).textContent = `Auction ends at: ${new Date(
    data.data.endsAt
  ).toLocaleTimeString()} `

  document.getElementById('placeBid-modal').classList.remove('hidden')
  document.getElementById('placeBid-modal').classList.add('flex')

  document.getElementById('close-bidModal').addEventListener('click', () => {
    document.getElementById('placeBid-modal').classList.add('hidden')
  })

  console.log(data)
}
