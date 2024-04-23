const register_url = 'https://v2.api.noroff.dev/auth/register'

const registerForm = document.getElementById('registerForm')
const registerBtn = document.getElementById('registerButton')

registerForm.addEventListener('submit', registerUser)

function getFormData() {
  const email = document.getElementById('registerEmail').value
  const name = document.getElementById('registerName').value
  const password = document.getElementById('registerPassword').value

  return {
    email,
    name,
    password,
  }
}

function validateFormData(formData) {
  const emailRegex = /^[^\s@]+@stud\.noroff\.no$/i
  const passwordRegex = /^[a-zA-Z\d!@#$%^&*()]{8,}$/

  if (!emailRegex.test(formData.email)) {
    alert('Invalid email. Email must include "stud.noroff.no".')
  }

  if (!passwordRegex.test(formData.password)) {
    alert('Invalid password. Password needs to be at least 8 digits.')
  }
}

async function registerUser(event) {
  event.preventDefault()

  try {
    const formData = getFormData()
    validateFormData(formData)

    const response = await fetch(register_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      const errorMessage = await response.json()
      registerBtn.innerText = 'Registration failed. Try again.'
      registerBtn.classList.remove('bg-cyan-700')
      registerBtn.classList.add('bg-red-500')
      registerForm.reset()
      setTimeout(() => {
        registerBtn.innerText = 'Register'
        registerBtn.classList.remove('bg-red-500')
        registerBtn.classList.add('bg-cyan-700')
      }, 3000)
      console.error('Failed to register user', errorMessage)
      throw new Error(
        `Failed to register. Status: ${response.status}. Error: ${
          errorMessage.message || JSON.stringify(errorMessage)
        }`
      )
    }
    const data = await response.json()
    registerBtn.innerText = 'Registration successful'
    registerBtn.classList.remove('bg-cyan-700')
    registerBtn.classList.add('bg-green-500')

    setTimeout(() => {
      window.location.href = 'auction.html'
    }, 2000)
    console.log('User registered', data)
  } catch (error) {
    console.error('Error registering user', error)
  }
}
