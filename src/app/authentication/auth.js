const loginButton = document.getElementById('loginBtn')
const logoutButton = document.getElementById('logoutBtn')
const mobileLoginButton = document.getElementById('mobileNAV_loginBtn')
const mobileLogoutButton = document.getElementById('mobileNAV_logOutBtn')
const welcomeMessage = document.getElementById('welcomeUser_section')
const sendBidButton = document.getElementById('sendBid-btn')

let isLoggedIn = false

if (localStorage.getItem('token')) {
  isLoggedIn = true
  loginButton.style.display = 'none'
  logoutButton.style.display = 'block'
  mobileLoginButton.style.display = 'none'
  mobileLogoutButton.style.display = 'block'
} else if (!localStorage.getItem('token')) {
  isLoggedIn = false
  welcomeMessage.style.display = 'none'
  sendBidButton.addEventListener('click', () => {
    alert('Please log in to bid on listings')
  })
}

logoutButton.addEventListener('click', logout)
mobileLogoutButton.addEventListener('click', logout)

function logout() {
  localStorage.removeItem('token')
  location.reload()
}
