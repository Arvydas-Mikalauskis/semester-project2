import { listingsUrl } from '../constants/urlEndpoints.js'
import { displayListings } from './displayListings.js'

let currentPage = 1
const limit = 12
const queryParams = `?limit=${limit}&page=${currentPage}&_seller=true&_bids=true`

export async function getAuctionListings() {
  const response = await fetch(listingsUrl + queryParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  console.log(data)
  displayListings(data.data)
}

getAuctionListings()
