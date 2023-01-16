const btn = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

btn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    btn.classList.toggle('active')
})