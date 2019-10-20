console.info('global.js loaded.');

// SITEWIDE ============================================================
function sendEmail() {
	window.location = 'mailto:ksverko@ryerson.ca';
}

function scrollToElement(elementId) {
	document.getElementById(elementId).scrollIntoView({
		behavior: 'smooth'
	});
}

// PARTIAL | NAV BAR ===================================================
function toggleNavBarLinks() {
	const navBarElement = document.querySelector('.nav-bar-links');
	if (window.getComputedStyle(navBarElement).display == 'none') {
		navBarElement.classList.remove('animation-fade-out');
		navBarElement.classList.add('animation-fade-in');
		navBarElement.style.display = 'flex';
	} else {
		navBarElement.classList.remove('animation-fade-in');
		navBarElement.classList.add('animation-fade-out');
		setTimeout(() => {
			navBarElement.style.display = 'none';
		}, 500);
	}
}
