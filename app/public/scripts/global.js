console.info('global.js loaded.');

// SITEWIDE ============================================================
function sendEmail() {
	// window.location = 'mailto:ksverko@ryerson.ca';
	window.location = '/contact';
}

function scrollToElement(elementId) {
	document.getElementById(elementId).scrollIntoView({
		behavior: 'smooth'
	});
}


// PARTIAL | NAV BAR ===================================================
function toggleNavBarLinks() {
	const navBarElement = document.querySelector('.nav-bar-links');
	const hamburgerElement = document.querySelector('.nav-bar__hamburger');
	if (window.getComputedStyle(navBarElement).display == 'none') {
		navBarElement.classList.remove('animation-fade-out');
		navBarElement.classList.add('animation-fade-in');
		navBarElement.style.display = 'flex';
		hamburgerElement.classList.add('is-active');
	} else {
		navBarElement.classList.remove('animation-fade-in');
		navBarElement.classList.add('animation-fade-out');
		hamburgerElement.classList.remove('is-active');
		setTimeout(() => {
			navBarElement.style.display = 'none';
		}, 500);
	}
}


// PARTIAL | FOOTER ====================================================
function displayCurrentDate() {
	document.getElementById('footer__year').innerHTML = new Date().getFullYear();
}

displayCurrentDate();
