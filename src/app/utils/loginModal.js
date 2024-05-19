export function toggleLoginModal() {
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
