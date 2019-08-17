const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const hbs = require('express-handlebars');

// static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// view engine
// https://stackoverflow.com/questions/24730861/what-is-the-difference-between-partial-view-and-layout
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
	extname: 'hbs',
	defaultView: 'default',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/'
}));

// routes
app.get('/', (req, res) => {
	res.render('home', {layout: 'second', template: 'home-template'}); // no idea 'template: 'home-template'' does
});

app.post('/', (req, res) => {
	res.send('Got a POST request for \'/\'.');
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}.`);
});
