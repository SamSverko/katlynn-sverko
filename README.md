# katlynn-sverko

Website portfolio for Katlynn Sverko. Coming soon.

---

## Setup

* Clone repository, run `git clone https://github.com/SamSverko/katlynn-sverko.git`.
* Install global dependencies, run `npm i -g pm2 sass`.
* Install local dependencies, run `npm i`.
* Edit and save `sample.env` as `.env` with appropriate values.

---

### Development

* Follow setup section above.
* Start the local server, run `npm run start-dev` (starts a new pm2 process named 'katlynn-sverko-dev').
* View locally at [http://localhost](http://localhost) (or whatever host:port matches your `.env` file).
* Stop the local server, run `npm run stop` (stops all pm2 processes).

---

### Deployment

* Follow setup section above.
* Start the local server, run `npm run start` (starts a new pm2 process named 'katlynn-sverko').

---

## Resources

This contains a list of dependencies, languages, and other resources used in the development of this website.

### Assets

* [Real Favicon Generator](https://realfavicongenerator.net/) - Generated favicons for the many browsers and devices out there.

### Back End

#### Stack

* [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.

#### Dependencies

##### Global

* [pm2](https://www.npmjs.com/package/pm2) - An advanced production process manager for Node.js.
* [sass](https://www.npmjs.com/package/sass) - A pure JavaScript implementation of Sass.

##### Local

* [dotenv](https://www.npmjs.com/package/dotenv) - A module that loads environment variables from a `.env` file.
* [express](https://www.npmjs.com/package/express) - A fast, unopinionated, minimalist web framework for Node.js.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - A view engine responsible for rendering view files into html form to the browser.
* [helmet](https://www.npmjs.com/package/helmet) - A collection of smaller middleware functions that set security-related HTTP response headers.

---

## Questions?

If you have any questions, concerns, and/or funny limericks you would like to share, feel free to reach out to [Sam Sverko](https://github.com/SamSverko/ama/issues/new) (the creator of this repo). He doesn't bite 😊
