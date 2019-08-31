// node
const path = require('path');
// dependencies
const dotenv = require('dotenv').config();
const express = require('express');
const HOST = process.env.APP_HOST;
const PORT = process.env.APP_PORT;
const app = express();
const helmet = require('helmet');
const hbs = require('express-handlebars');
// local files
const router = require(path.join(__dirname, 'app/routes'));

// helmet
app.use(helmet());

// static files
app.use('/static', express.static(path.join(__dirname, 'app/public')));

// view engine
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views'));
app.engine('hbs', hbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'app/views/layouts'),
	partialsDir: path.join(__dirname, 'app/views/partials')
}));

// routes
app.use('/', router);

// server error handler
app.use((err, req, res, next) => {
	console.error(err);

	res.status(500).render('error-server', {
		layout: 'main',
		title: 'Server Error'
	});
});

// turn app listening on
app.listen(PORT, () => {
	console.log(`Server successfully started and listening at ${HOST}:${PORT}.`);
});
