import { onTabClick } from '../ui/tabMenu.js'

const hamburgerBtn = document.getElementById('hamburgerMenu-btn')
const mobileMenu = document.getElementById('mobileMenu')

// Mobile navigation

hamburgerBtn.addEventListener('click', navToggle)

function navToggle() {
  hamburgerBtn.classList.toggle('open')
  mobileMenu.classList.toggle('flex')
  mobileMenu.classList.toggle('hidden')
}

const mobileNavItems = document.querySelectorAll('#mobileMenu a')

mobileNavItems.forEach((item) => {
  item.addEventListener('click', navToggle)
})

const loginButton = document.getElementById('mobileNAV_loginBtn')
const loginModal = document.getElementById('loginModal')

loginButton.addEventListener('click', (e) => {
  e.preventDefault()
  loginModal.classList.remove('hidden')
})
