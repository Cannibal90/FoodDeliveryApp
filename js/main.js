const allNavLinks = document.querySelectorAll('.nav__link')
const allNavLinksArray = Array.from(allNavLinks)
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allLogos = Array.from(document.querySelectorAll('.brand'))
const mainLogo = allLogos[0]
const mobileNavLogo = allLogos[1]
const footerLogo = allLogos[2]
const accorditions = document.querySelectorAll('.faq__accordition-box')
const allSections = document.querySelectorAll('.wrapper')
const hamburgerBars = document.querySelector('.hamburger-inner')
const footerYear = document.querySelector('.footer__year')

//NAVIGATION
const removeActiveClass = () => {
	allNavLinks.forEach((link) => {
		link.classList.remove('nav__link--active')
	})
}

const onLogoClick = () => {
	removeActiveClass()
	window.scrollTo(0, 0)
}

const onHamburgerClickHandler = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

mainLogo.addEventListener('click', onLogoClick)
footerLogo.addEventListener('click', onLogoClick)
mobileNavLogo.addEventListener('click', () => {
	onHamburgerClickHandler()
	onLogoClick()
})

navBtn.addEventListener('click', onHamburgerClickHandler)

const handleSectionObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach((section) => {
		if (currentSection === 0) {
			removeActiveClass()
		} else if (section.offsetTop <= currentSection + 200) {
			const sectionHash = `#${section.id}`
			allNavLinks.find
			const currentNavLinks = allNavLinksArray.filter(
				(link) => link.hash === sectionHash
			)
			if (
				currentNavLinks[0] &&
				!currentNavLinks[0].classList.contains('nav__link--active')
			) {
				removeActiveClass()
				currentNavLinks.forEach((currentNavLink) => {
					currentNavLink.classList.add('nav__link--active')
				})
			}
		}
	})
}

window.addEventListener('scroll', handleSectionObserver)
//ACCORDITIONS
const onChevronClickHandler = (accorditionText, chevronIcon, accordition) => {
	accordition.classList.toggle('faq__accordition-box--active')
	accorditionText.classList.toggle(
		'faq__accordition-box-question-answer--active'
	)
	chevronIcon.classList.toggle('fa-chevron-up')
}

accorditions.forEach((accordition) => {
	const chevronButton = accordition.querySelector(
		'.faq__accordition-box-toogle-button'
	)
	const accorditionText = accordition.querySelector(
		'.faq__accordition-box-question-answer'
	)
	const chevronIcon = chevronButton.querySelector('.fa-solid')

	chevronButton.addEventListener('click', () =>
		onChevronClickHandler(accorditionText, chevronIcon, accordition)
	)
})

//CURRENT YEAR
const handleYear = () => {
	const currentDate = new Date()
	footerYear.innerText = currentDate.getFullYear().toString()
}
handleYear()

//SCROLL BARS
const handleBarsObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach((section) => {
		if (
			(!section.classList.contains('white-section') &&
				currentSection &&
				section.offsetTop <= currentSection + 60) ||
			(section.classList.contains('reviews') &&
				section.offsetTop <= currentSection + 60)
		) {
			hamburgerBars.classList.add('hamburger-white-bars')
		} else if (
			(section.classList.contains('white-section') &&
				section.offsetTop <= currentSection + 60) ||
			!currentSection
		) {
			hamburgerBars.classList.remove('hamburger-white-bars')
		}
	})
}
window.addEventListener('scroll', handleBarsObserver)
