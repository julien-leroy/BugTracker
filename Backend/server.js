var express    = require('express');
var PORT       = require('../SETTINGS').httpServer.port;
var app        = express();
var bodyParser = require('body-parser');

app.configure = function() {
  app.use(express.static('../frontEnd'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
};

app.configure();

require('./routes')(app);

var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});