const express = require('express');
const router = express.Router();

// home page
router.get('/', (req, res) => {
	res.render('index', {
		layout: 'main',
		script: 'index',
		title: 'Home'
	});
});

// work page
router.get('/work', (req, res) => {
	res.render('work', {
		layout: 'main',
		title: 'Work'
	});
});

// secret page
router.get('/secret', (req, res) => {
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
	res.status(404)
	.render('error-404', {
		layout: 'main',
		title: '404'
	});
})

module.exports = router;
