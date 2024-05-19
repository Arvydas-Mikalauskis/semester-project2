export function displayProfileInfo(user) {
  const userName = document.getElementById('userName')
  const userCredits = document.getElementById('userCredits')
  const profileAvatar = document.getElementById('profileAvatar')
  const profileBio = document.getElementById('profileBio')

  userName.innerText = `${user.data.name}`
  profileBio.innerText = `Bio: ${user.data.bio}`

  userCredits.innerText = `Your Credits: ${user.data.credits}`
  profileAvatar.src = user.data.avatar.url
}
