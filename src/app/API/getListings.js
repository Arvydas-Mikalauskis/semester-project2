import { listingsUrl } from '../constants/urlEndpoints.js'
import { displayListings } from './displayListings.js'
import { searchAuctionListings } from './searchListings.js'
import { toogleCreateListingModal } from '../ui/createListingModal.js'
import { createListing } from './createListing.js'
import { getSingleListing } from './getSingleListing.js'

let currentPage = 1
const limit = 12
const queryParams = `?limit=${limit}&page=${currentPage}&_seller=true&_bids=true&sort=created&sortOrder=desc`

export async function getAuctionListings() {
  const response = await fetch(listingsUrl + queryParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  const data = await response.json()
  console.log(data)
  displayListings(data.data)
}

getAuctionListings()
