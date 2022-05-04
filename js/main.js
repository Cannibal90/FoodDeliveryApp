const allNavLinks = document.querySelectorAll('.nav__link')
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const logo = document.querySelector('.brand')
const accorditions = document.querySelectorAll('.faq__accordition-box')
const allSections = document.querySelectorAll('.wrapper')
const hamburgerBars = document.querySelector('.hamburger-inner')
const footerYear = document.querySelector('.footer__year')

//NAVIGATION
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
	allNavLinks.forEach((link) => {
		link.classList.remove('nav__link--active')
	})
	window.scrollTo(0, 0)
})

navBtn.addEventListener('click', onHamburgerClickHandler)

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
				section.offsetTop <= currentSection + 60) ||
			(section.classList.contains('reviews') &&
				section.offsetTop <= currentSection + 60)
		) {
			hamburgerBars.classList.add('hamburger-white-bars')
		} else if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			hamburgerBars.classList.remove('hamburger-white-bars')
		}
	})
}
window.addEventListener('scroll', handleBarsObserver)
