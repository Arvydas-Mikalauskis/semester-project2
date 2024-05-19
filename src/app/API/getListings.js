import { listingsUrl } from '../constants/urlEndpoints.js'
import { displayListings } from './displayListings.js'
import { searchAuctionListings } from './searchListings.js'
import { toogleCreateListingModal } from '../ui/createListingModal.js'
import { createListing } from './createListing.js'
import { getSingleListing } from './getSingleListing.js'

let currentPage = 1
const limit = 16

export async function handlePageChange() {
  const nextPage = document.getElementById('nextPage')
  const prevPage = document.getElementById('prevPage')
  const listingsSection = document.getElementById('listingsContainer')

  nextPage.addEventListener('click', () => {
    currentPage++
    getAuctionListings()
    setTimeout(() => {
      listingsSection.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  })

  prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--
      getAuctionListings()
      setTimeout(() => {
        listingsSection.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  })
}

export async function getAuctionListings() {
  const queryParams = `?limit=${limit}&page=${currentPage}&_seller=true&_bids=true&sort=created&sortOrder=desc`
  const response = await fetch(listingsUrl + queryParams, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  const data = await response.json()
  console.log(data)
  displayListings(data.data, currentPage === 1)

  handlePageChange()
}

getAuctionListings()
