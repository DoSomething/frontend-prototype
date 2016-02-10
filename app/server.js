require('dotenv').config();

var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('client-sessions');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

// Express App
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  cookieName: 'auth',
  secret: process.env.SESSION_KEY,
  duration: 7 * 24 * 60 * 60 * 1000, // 1 week
  activeDuration: 7 * 24 * 60 * 60 * 1000,
}));

app.use(function(req, res, next) {
  if (req.auth && req.auth.id && req.auth.drupal_id) {
    res.locals.loggedIn = true;
    res.locals.id = req.auth.id;
    res.locals.drupal_id = req.auth.drupal_id;
    res.locals.first_name = req.auth.first_name;
    next();
  } else {
    next();
  }
});

app.engine('.hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Serve static assets from project root.
app.use(express.static(__dirname + '/../'));

// Configure Webpack to compile assets on demand.
app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
}));

// Register routes.
require('./server/home')['default'](app);
require('./server/hello')['default'](app);
require('./server/gallery')['default'](app);
require('./server/campaign')['default'](app);

// Start 'er up!
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Listening on port '+ PORT + '.');
});
