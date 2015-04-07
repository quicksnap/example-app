import React         from 'react';
import Fluxible      from 'fluxible';

require('babel/polyfill'); // Yum! Object.assign(), Promise(), etc.

// Set up some useful globals
var globalWindow     = global || window;
globalWindow.React   = React; // For chrome dev tool support
globalWindow.Promise = require('bluebird'); // Bluebird > ES6 Promise (for now)
globalWindow.request = require('superagent-bluebird-promise');
globalWindow.debug   = require('debug')('Sample');

Promise.longStackTraces();

var app = new Fluxible({
    component: React.createFactory(require('./components/SampleApp'))
});

module.exports = app;
