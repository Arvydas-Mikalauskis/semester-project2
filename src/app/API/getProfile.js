import { displayProfileInfo } from '../ui/displayProfile.js'
const profileUrl = 'https://v2.api.noroff.dev/auction/profiles'
import { API_KEY } from '../constants/urlEndpoints.js'

export async function getProfile() {
  const response = await fetch(profileUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
  })
  const data = await response.json()
  console.log(data)
}

getProfile()

async function fetchUserProfile() {
  const username = localStorage.getItem('name')
  if (!username) {
    console.error('No profile name found in local storage.')
    return
  }

  const response = await fetch(`${profileUrl}/${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch user profile')
  }

  const profileData = await response.json()
  displayProfileInfo(profileData)
  console.log(profileData)
}

fetchUserProfile()
