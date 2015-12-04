var MySQL        = require('mysql');
var mysqlConf    = require('../SETTINGS').mysql;
var mysql        = MySQL.createConnection(mysqlConf);

module.exports = function(app) {

  app.get('/test', function(req, res) {
  	var query = mysql.query('SELECT * FROM bugtracker.user', function(err, rows){
	    if(err){ throw new Error(err); }
	    console.log("messages : ", rows[0] );
	    return rows[0];
	});
    res.send(query);
  });

  app.get('/:id', function(req, res) {
    var id = req.body.id;
  });

};