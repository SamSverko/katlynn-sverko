const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const hbs = require('express-handlebars');

// static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// view engine
app.set('view engine', '.hbs');

app.engine( 'hbs', hbs( {
	defaultLayout: 'index',
	extname: '.hbs',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/'
}));

// routes
app.get('/', (req, res) => {
	res.render('index', {
		layout: 'main',
		script: 'index',
		title: 'Home',
	});
});

app.get('/work', (req, res) => {
	res.render('work', {
		layout: 'main',
		title: 'Work'
	});
});

app.get('/secret', (req, res) => {
	res.status(418).send('You found the secret.');
});

app.get('*', (req, res) => {
	res.status(404).send('Are you lost?');
});

// turn app listening on
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}.`);
});
