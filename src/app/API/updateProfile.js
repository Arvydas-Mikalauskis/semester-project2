import { profileUrl, API_KEY } from '../constants/urlEndpoints.js'

export async function updateProfile() {
  const username = localStorage.getItem('name')
  if (!username) {
    console.error('Profile not found.')
    return
  }

  const updateBio = document.getElementById('changeBio').value
  const updateAvatar = document.getElementById('changeAvatar').value
  const updateBtn = document.getElementById('updateProfileBtn')
  const updateProfileModal = document.getElementById('editProfileModal')

  const response = await fetch(`${profileUrl}/${username}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-Noroff-API-Key': API_KEY,
    },
    body: JSON.stringify({
      bio: updateBio,
      avatar: {
        url: updateAvatar,
      },
    }),
  })
  if (!response.ok) {
    const errorData = await response.json()
    console.error('Failed to update profile:', errorData)
    return
  } else if (response.ok) {
    updateBtn.innerText = 'Profile Updated'
    updateBtn.classList.remove('bg-softBlue')
    updateBtn.classList.add('bg-green-500')
    setTimeout(() => {
      updateProfileModal.classList.remove('flex')
      updateProfileModal.classList.add('hidden')
      window.location.reload()
    }, 2000)
  }
}

function sendProfileUpdate() {
  const updateProfileForm = document
    .getElementById('editProfileModal')
    .addEventListener('submit', function (event) {
      event.preventDefault()
      updateProfile()
    })
}

sendProfileUpdate()

export function toogleUpdateProfileModal() {
  const updateProfileForm = document.getElementById('editProfileModal')
  const close_btn = document.getElementById('closeEditProfileModal')
  const open_btn = document.getElementById('editProfileBtn')

  open_btn.addEventListener('click', function () {
    updateProfileForm.classList.remove('hidden')
    updateProfileForm.classList.add('flex')
  })

  close_btn.addEventListener('click', function () {
    updateProfileForm.classList.remove('flex')
    updateProfileForm.classList.add('hidden')
  })
}

toogleUpdateProfileModal()
