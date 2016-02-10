'use strict';

var pkg = require('./package.json');
var fender = require('fender');

/**
 * Use Fender for nice and easy builds.
 * @see http://npmjs.com/fender
 */
var config = fender(pkg, {
    bundles: {
        client: ['./app/client.js']
    },
});

// Some overrides...
config.output.path = __dirname + '/dist/';
config.output.publicPath = '/dist/';

module.exports = config;
