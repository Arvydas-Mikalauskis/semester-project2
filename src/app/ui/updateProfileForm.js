import { updateProfile } from '../logic/updateProfile.js'

const updateProfileForm = document
  .getElementById('editProfileModal')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    updateProfile()
  })
