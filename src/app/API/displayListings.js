import { getSingleListing } from './getSingleListing.js'
import { placeBid } from './placeBid.js'

export function displayListings(listings) {
  const listingsContainer = document.getElementById('listingsContainer')

  listingsContainer.innerHTML = ''

  listings.forEach((listing) => {
    const cardContainer = document.createElement('div')
    cardContainer.className =
      'flex flex-col items-center mx-12 justify-between h-full p-4  bg-white rounded-2xl shadow-2xl space-y-4  duration-200 hover:scale-105 sm:mx-0 border-2 border-gray-200'

    const listingImage_container = document.createElement('div')
    if (listing.media && listing.media.length > 0) {
      const listingImage = document.createElement('img')
      listingImage.className = 'w-full h-60 object-cover rounded-md'
      listingImage.src = listing.media[0].url
      listingImage.alt = listing.media[0].alt
      listingImage_container.appendChild(listingImage)
    } else {
      listingImage_container.innerHTML = `<img src="https://via.placeholder.com/250" alt="placeholder"/>`
    }
    cardContainer.appendChild(listingImage_container)

    const listingTitle = document.createElement('div')
    listingTitle.className = 'max-w-sm text-xl font-medium uppercase'
    listingTitle.innerHTML = `<h2>${listing.title}</h2>`
    cardContainer.appendChild(listingTitle)

    const listingDescription = document.createElement('div')
    listingDescription.className =
      'text-md font-light text-gray-400 md:h-16 sm:h-8 overflow-hidden'
    listingDescription.innerHTML = listing.description
      ? `<p>${listing.description}</p>`
      : `<p>Description not provided</p>`
    cardContainer.appendChild(listingDescription)

    const biddingStatus = document.createElement('div')
    biddingStatus.className =
      'flex flex-col justify-evenly border-x-2 items-center w-full'
    cardContainer.appendChild(biddingStatus)

    if (listing.bids && listing.bids.length > 0) {
      const currentBid = document.createElement('div')
      currentBid.className =
        ' flex  justify-center items-center  text-sm font-medium text-green-500 uppercase'
      currentBid.innerHTML = `<p>Current bid:</p> <p> $${
        listing.bids[listing.bids.length - 1].amount
      }</p>`

      biddingStatus.appendChild(currentBid)
    } else {
      const noBids_yet = document.createElement('div')
      noBids_yet.className = 'text-md font-light text-gray-400'
      noBids_yet.innerHTML = `<p>No bids yet</p>`
      biddingStatus.appendChild(noBids_yet)
    }

    const deadline = document.createElement('div')
    deadline.className = 'flex text-sm text-softRed italic'
    deadline.innerHTML = `<p>Ends at:</p> <p> ${new Date(
      listing.endsAt
    ).toLocaleTimeString()}</p>`
    biddingStatus.appendChild(deadline)

    const bidButton = document.createElement('button')
    bidButton.className =
      'bg-softBlue text-white font-semibold w-full h-10 rounded-lg shadow-md hover:bg-blue-500 transition duration-200'
    bidButton.innerText = 'View Listing'
    bidButton.dataset.itemId = listing.id
    cardContainer.appendChild(bidButton)
    bidButton.addEventListener('click', getListingID)
    bidButton.addEventListener('click', bidOnListing)

    listingsContainer.appendChild(cardContainer)
  })

  if (listings.length === 0) {
    const noResults = document.createElement('div')
    noResults.className = 'col-span-4 flex justify-center items-center'
    noResults.innerHTML =
      '<p class="text-xl font-semibold text-gray-600">No listings found. Please try again.</p>'
    listingsContainer.appendChild(noResults)
  }
}

function getListingID(event) {
  const clickedButton = event.target
  const itemId = clickedButton.dataset.itemId

  console.log(itemId)

  getSingleListing(itemId)
}

function bidOnListing(event) {
  const clickedButton = event.target
  const itemId = clickedButton.dataset.itemId

  const sendBidButton = document.getElementById('sendBid-btn')

  sendBidButton.addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('placeBidInput').value)
    if (amount === '' || isNaN(amount)) {
      alert('Please enter a valid amount')
      return
    } else {
      placeBid(itemId, amount)
      setTimeout(() => {
        alert('Bid placed successfully')
        window.location.reload()
      }, 1500)
    }
  })
}
