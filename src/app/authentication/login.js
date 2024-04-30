import { login_url } from '../constants/urlEndpoints.js'
import { toggleLoginModal } from '../utils/loginModal.js'

const loginForm = document.getElementById('loginForm')
const loginEmail = document.getElementById('loginEmail')
const loginPassword = document.getElementById('loginPassword')

toggleLoginModal()

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const loginData = {
    email: loginEmail.value,
    password: loginPassword.value,
  }

  await loginUser(login_url, loginData)
})

async function loginUser(url, data) {
  const loginResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const loginJson = await loginResponse.json()

  if (loginResponse.status === 200) {
    console.log(loginJson)
    const accessToken = loginJson.data.accessToken
    localStorage.setItem('token', accessToken)
    window.location.href = 'auction.html'
  } else {
    console.log(loginJson)
    alert('Incorrect email or password')
  }
}
