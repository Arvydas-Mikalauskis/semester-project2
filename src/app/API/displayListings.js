export function displayListings(listings) {
  const listingsContainer = document.getElementById('listingsContainer')

  listingsContainer.innerHTML = ''

  listings.forEach((listing) => {
    const cardContainer = document.createElement('div')
    cardContainer.className =
      'flex flex-col items-center justify-between h-full p-6 m-3 bg-white rounded-2xl shadow-2xl space-y-4  duration-200 hover:scale-105'

    const listingImage_container = document.createElement('div')
    if (listing.media && listing.media.length > 0) {
      const listingImage = document.createElement('img')
      listingImage.className = 'w-full h-60 object-cover rounded-md'
      listingImage.src = listing.media[0].url
      listingImage.alt = listing.media[0].alt
      listingImage_container.appendChild(listingImage)
    } else {
      listingImage_container.innerHTML = `<img src="https://via.placeholder.com/150" alt="placeholder"/>`
    }
    cardContainer.appendChild(listingImage_container)

    const listingTitle = document.createElement('div')
    listingTitle.className = 'max-w-sm text-xl font-medium uppercase'
    listingTitle.innerHTML = `<h2>${listing.title}</h2>`
    cardContainer.appendChild(listingTitle)

    const listingDescription = document.createElement('div')
    listingDescription.className =
      'text-md font-light text-gray-400 h-16 overflow-hidden'
    listingDescription.innerHTML = listing.description
      ? `<p>${listing.description}</p>`
      : `<p>Description not provided</p>`
    cardContainer.appendChild(listingDescription)

    if (listing.bids && listing.bids.length > 0) {
      const bidsInfo = document.createElement('div')
      bidsInfo.className = ' text-sm font-medium text-green-500 uppercase'
      bidsInfo.innerHTML = `<p>Current bid: $${
        listing.bids[listing.bids.length - 1].amount
      }</p>`

      cardContainer.appendChild(bidsInfo)
    } else {
      const noBids_yet = document.createElement('div')
      noBids_yet.className = 'text-md font-light text-gray-400'
      noBids_yet.innerHTML = `<p>No bids yet</p>`
      cardContainer.appendChild(noBids_yet)
    }

    const deadline = document.createElement('div')
    deadline.className = 'text-md font-light text-softRed italic'
    deadline.innerHTML = `<p>Ends at: ${new Date(
      listing.endsAt
    ).toLocaleTimeString()}</p>`
    cardContainer.appendChild(deadline)

    const bidButton = document.createElement('button')
    bidButton.className =
      'bg-softBlue text-white font-semibold w-full h-10 rounded-lg shadow-md hover:bg-blue-500 transition duration-200'
    bidButton.innerHTML = 'Bid'
    cardContainer.appendChild(bidButton)

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
