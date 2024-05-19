import { displayListings } from './displayListings.js'
import { getAuctionListings } from './getListings.js'

const searchUrl = 'https://v2.api.noroff.dev/auction/listings/search'

export async function searchAuctionListings(query) {
  const queryParams = `?q=${encodeURIComponent(query)}`
  const response = await fetch(searchUrl + queryParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  displayListings(data.data)
}

document.getElementById('searchInput').addEventListener('input', (event) => {
  const query = event.target.value.trim()
  if (query.length > 2) {
    searchAuctionListings(query)
  } else if (query.length === 0) {
    getAuctionListings()
  }
})
