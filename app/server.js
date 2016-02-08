var express = require('express');
var handlebars = require('express-handlebars');
var compress = require('compression');
var bodyParser = require('body-parser');
var session = require('client-sessions');

// Babel-ify!
require("babel/register");

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
  if (req.auth && req.auth.id) {
    res.locals.loggedIn = true;
    next();
  } else {
    next();
  }
});

app.engine('.hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(compress());
app.use(express.static(__dirname + '/../'));

// Routes
require('./server/home')(app);
require('./server/hello')(app);
require('./server/gallery')(app);
require('./server/campaign')(app);
require('./server/auth')(app);

// Start 'er up!
app.listen(process.env.PORT, function() {
  console.log("Listening on " + process.env.PORT);
});
