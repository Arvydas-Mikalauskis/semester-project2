const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const hamburgerBtn = document.getElementById('hamburgerMenu-btn')
const mobileMenu = document.getElementById('mobileMenu')

// Tabs menu switch

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  panels.forEach((panel) => panel.classList.add('hidden'))

  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  console.log(classString)
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

// Mobile navigation

hamburgerBtn.addEventListener('click', navToggle)

function navToggle() {
  hamburgerBtn.classList.toggle('open')
  mobileMenu.classList.toggle('flex')
  mobileMenu.classList.toggle('hidden')
}
