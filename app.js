// express
const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
// helmet
const helmet = require('helmet');
// handlebars
const hbs = require('express-handlebars');
// router
const router = require('./routes');

// helmet
app.use(helmet());

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
app.use('/', router);

// turn app listening on
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}.`);
});
