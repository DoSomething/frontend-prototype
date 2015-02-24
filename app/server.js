var express = require('express');
var handlebars = require('express-handlebars');
var compress = require('compression');

// Babel-ify!
require("babel/register");

// Express App
var app = express();

app.engine('.hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(compress());
app.use(express.static(__dirname + '/../'));

// Routes
require('./server/home')(app);
require('./server/hello')(app);
require('./server/gallery')(app);
require('./server/campaign')(app);

// Start 'er up!
app.listen(3000);