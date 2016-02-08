var express = require('express');
var handlebars = require('express-handlebars');
var compress = require('compression');
var bodyParser = require('body-parser');

// Babel-ify!
require("babel/register");

// Express App
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
