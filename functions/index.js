// firebase
const functions = require('firebase-functions');
// node
const path = require('path');
// express
const express = require('express');
const PORT = 8080;
const app = express();
// helmet - express security dependency
const helmet = require('helmet');
// handlebars - express view engine
const hbs = require('express-handlebars');
// router
const router = require('./routes');

// helmet
app.use(helmet());

// static files
app.use('/static', express.static(path.join(__dirname, './../public')));

// view engine
app.set('view engine', '.hbs');

app.engine( 'hbs', hbs( {
	defaultLayout: 'index',
	extname: '.hbs',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/'
}));

// routes
app.use('/', router);

// server error handler
app.use((err, req, res, next) => {
	console.log(err.stack);

	res.status(500)
	.render('error-server', {
		layout: 'main',
		title: 'Server Error'
	});
});


exports.app = functions.https.onRequest(app);