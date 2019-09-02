console.log('Global script ready.');

document.querySelector('.nav-bar__hamburger').addEventListener('click', (event) => {
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
});
