import { listingsUrl, API_KEY } from '../constants/urlEndpoints.js'

// This function is used to create a new listing
// get input values from the form
// create a new listing object
// send a POST request to the API with the new listing object
// display a new listing on the page, by calling displayListings function
// if the request is successful, show message of success and refresh the page
// if the request fails, show an error message

export async function createListing() {
  const createListingForm = document.getElementById('createNewListing')
  createListingForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const title = document.getElementById('listingTitle').value
    const description = document.getElementById('listingDescription').value
    const image = document.getElementById('listingImage').value
    const endsAt = document.getElementById('endsAt').value

    const newListing = {
      title,
      description,
      media: { url: image },
      endsAt,
    }

    console.log('New Listing:', newListing)

    try {
      const response = await fetch(listingsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'X-Noroff-API-Key': API_KEY,
        },
        body: JSON.stringify(newListing),
      })
      const data = await response.json()
      console.log('Response:', data)
      if (data.error) {
        alert(data.message)
      } else {
        alert('Listing created successfully')
        window.location.reload()
      }
    } catch (error) {
      console.log('Error:', error)
      alert('Failed to create listing')
    }
  })
}

createListing()
