export function displayProfileInfo(user) {
  const userName = document.getElementById('userName')
  const userCredits = document.getElementById('userCredits')
  const profileAvatar = document.getElementById('profileAvatar')

  userName.innerHTML = `${user.data.name}`
  userCredits.innerHTML = `Credits: ${user.data.credits}`
  profileAvatar.src = user.data.avatar.url
}
