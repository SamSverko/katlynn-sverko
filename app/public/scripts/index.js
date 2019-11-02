console.info('index.js loaded.');


// MEET KATLYNN ========================================================
window.addEventListener('resize', positionScrollDownElement);

function positionScrollDownElement() {
	document.querySelector('.meet-katlynn__scroll-down').style.top = window.getComputedStyle(document.querySelector('.meet-katlynn')).height;
}

positionScrollDownElement();


// WORK ================================================================
function darkenPortfolioCoverImage(elementId, imageFile) {
	document.getElementById(elementId).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/static/images/index/${imageFile}')`;
}

function lightenPortfolioCoverImage(elementId, imageFile) {
	document.getElementById(elementId).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/static/images/index/${imageFile}')`;
}
