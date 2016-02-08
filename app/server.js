var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var compress = require('compression');

// Babel-ify!
require("babel/register");

// Express App
var app = express();

app.engine('.hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(compress());
app.use(express.static(__dirname + '/../'));

// Routes
require('./server/home')(app);
require('./server/hello')(app);
require('./server/gallery')(app);
require('./server/campaign')(app);
require('./server/auth')(app);

// Start 'er up!
app.listen(3000);
