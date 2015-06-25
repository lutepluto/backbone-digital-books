'use strict'

// Module dependencies
var application_root = __dirname,
    express = require('express'),  // web framework
    bodyParser = require('body-parser'),  // parser for reading request body
    path = require('path'),  // utilities for dealing with file paths
    mongoose = require('mongoose')  // mongodb integration

// Create server
var app = express()

// Where to serve static content
app.use(express.static(path.join(application_root, 'app')))
app.use(bodyParser())

// Start server
var port = 4711

app.listen(port, function() {
  console.log('Express server listening on port %d in %s mode', port, app.settings.env)
})