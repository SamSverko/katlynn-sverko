// dependencies
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	console.log(`GET request for /.`);

	res.render('index', {
		layout: 'main',
		style: 'index',
		script: 'index',
		title: 'Home'
	});
});

router.get('/work', (req, res) => {
	console.log('GET request for /work.');

	res.render('work', {
		layout: 'main',
		title: 'Work'
	});
});

router.get('/about', (req, res) => {
	console.log('GET request for /about.');

	res.render('about', {
		layout: 'main',
		style: 'about',
		script: 'about',
		title: 'About'
	});
});

router.get('/secret', (req, res) => {
	console.log('GET request for /secret.');

	res.status(418)
	.render('secret', {
		layout: 'main',
		title: 'Secret'
	});
});

// server error handler test page
router.get('/err', (req, res) => {
	throw new Error('User visited the err test page.');
});

// 404 handler
router.get('*', (req, res) => {
	console.log('GET request for 404.');

	res.status(404).render('error-404', {
		layout: 'main',
		title: '404'
	});
});

module.exports = router;
