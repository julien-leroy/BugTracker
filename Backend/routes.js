module.exports = function(app) {

  app.get('/test', function(req, res) {
    res.send('ok maggle');
  });

  app.get('/:id', function(req, res) {
    var id = req.body.id;

    
  });

};