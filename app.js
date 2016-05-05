'use strict';

var express = require('express'),
  router = require('./routes/router'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  http = require('http');
var app = express();

// environment
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());

// routers
app.use('/router', router);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
