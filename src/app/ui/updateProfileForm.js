import { updateProfile } from '../API/updateProfile.js'

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

export function sendProfileUpdate() {
  const updateProfileForm = document
    .getElementById('editProfileModal')
    .addEventListener('submit', function (event) {
      event.preventDefault()
      updateProfile()
    })
}

toogleUpdateProfileModal()
