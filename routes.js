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
	})
});

// secret page
router.get('/secret', (req, res) => {
	res.status(418).send('Congratulations! You found the secret.');
});

// 404 handler
router.get('*', (req, res) => {
	res.status(404).send('Sometimes it\'s good to get lost. #deep');
})

module.exports = router;
