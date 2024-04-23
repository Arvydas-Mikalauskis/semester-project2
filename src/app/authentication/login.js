// Import any required libraries or modules

const login_url = 'https://v2.api.noroff.dev/auth/login'

const loginForm = document.getElementById('loginForm')
const loginEmail = document.getElementById('loginEmail')
const loginPassword = document.getElementById('loginPassword')

function toggleLoginModal() {
  const loginBtn = document.getElementById('loginBtn')
  const closeModalBtn = document.getElementById('closeModal')
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const loginModal = document.getElementById('loginModal')
    loginModal.classList.remove('hidden')
  })

  closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const loginModal = document.getElementById('loginModal')
    loginModal.classList.add('hidden')
  })
}

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
    /* window.location.href = 'auction.html' */
  } else {
    console.log(loginJson)
    alert('Incorrect email or password')
  }
}
