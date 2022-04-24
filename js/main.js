const allNavLinks = document.querySelectorAll('.nav__link')
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const logo = document.querySelector('.brand')

const onLinkChangeHandler = (navLink) => {
	allNavLinks.forEach((link) => {
		link.classList.remove('nav__link--active')
	})
	navLink.classList.add('nav__link--active')

	navBtn.classList.remove('is-active')
	navMobile.classList.remove('nav-mobile--active')
}

const onHamburgerClickHandler = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

allNavLinks.forEach((link) => {
	link.addEventListener('click', () => onLinkChangeHandler(link))
})

logo.addEventListener('click', () => {
	window.scrollTo(0, 0)
})

navBtn.addEventListener('click', onHamburgerClickHandler)
