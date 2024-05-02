export function displayProfileInfo(user) {
  const userName = document.getElementById('userName')
  const userCredits = document.getElementById('userCredits')
  const profileAvatar = document.getElementById('profileAvatar')

  userName.innerText = `Profile: ${user.data.name}`
  userCredits.innerText = `Your Credits: ${user.data.credits}`
  profileAvatar.src = user.data.avatar.url
}
