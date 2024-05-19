export function toogleCreateListingModal() {
  const postBid_modal = document.getElementById('postBidModal')
  const openModal_button = document.getElementById('openCreateListingModal')
  const closeModal_button = document.getElementById('closeNewlistingModal')

  openModal_button.addEventListener('click', () => {
    postBid_modal.classList.remove('hidden')
    postBid_modal.classList.add('flex')
  })

  closeModal_button.addEventListener('click', () => {
    postBid_modal.classList.remove('flex')
    postBid_modal.classList.add('hidden')
  })
}

toogleCreateListingModal()
