function changeText(element) {
    element.innerHTML = "Envie Uma Mensagem via WhatsApp!";
}

function changeTextEmail(element) {
    element.innerHTML = "Envie Uma Mensagem via Email!";
}

function restoreText(element) {
    element.innerHTML = "+5511952658821";
}

function restoreTextEmail(element) {
    element.innerHTML = "gustavodecassio00@gmail.com";
}

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job

    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    console.log(profileData)
})()

