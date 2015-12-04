var UserModel = require('./Models/UserModel');

module.exports = function(app) {

  app.get('/test', function(req, res) {
    res.send(UserModel.test());
  });

  app.get('/:id', function(req, res) {
    var id = req.body.id;    
  });

};