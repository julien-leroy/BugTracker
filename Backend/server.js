var express    = require('express');
var PORT       = require('../SETTINGS').httpServer.port;
var app        = express();
var bodyParser = require('body-parser');

app.configure = function() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(express.static(__dirname + '../frontEnd'));
};

app.configure();

require('./routes')(app);

var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});