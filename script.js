const linksSocialMedia = {
  github: 'radymillacristiano',
  facebook: 'entreideiass',
  instagram: 'radymilla_camilo'
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

changeLinksSocialMedia()

getGithubProfileInfos()

// ARROW FUNCTION
// retira o function e o nome da função, deixa só o argumento que ficaria dentro dos ()
// EX: function nomeFuncao(){} é o mesmo que () => {}
