var express    = require('express');
var PORT       = require('../SETTINGS').httpServer.port;
var app        = express();
var bodyParser = require('connect').bodyParser();

app.configure = function() {
  app.use(bodyParser);
  app.use(express.static(__dirname + '../frontEnd'));
};

app.configure();

require('./routes')(app);

var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});