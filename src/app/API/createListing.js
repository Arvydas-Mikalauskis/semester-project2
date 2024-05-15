import { listingsUrl, API_KEY } from '../constants/urlEndpoints.js'

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
      media: [
        {
          url: image,
          alt: 'Description of image',
        },
      ],
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
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      }
    } catch (error) {
      console.log('Error:', error)
      alert('Failed to create listing')
    }
  })
}

createListing()
