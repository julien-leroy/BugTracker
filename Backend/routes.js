var MySQL        = require('mysql');
var mysqlConf    = require('../SETTINGS').mysql;
var mysql        = MySQL.createConnection(mysqlConf);
var crypto = require('crypto');

var sess;

module.exports = function(app) {


	app.get('/login', function(req, res) {
		var email = req.query.email;
		var password = crypto.createHash('sha256').update(req.query.password).digest('base64');
  	
  	mysql.query("SELECT email, password FROM bugtracker.user WHERE email like '" + email + "' AND password like '" +  password + "'" , function(err, rows){
	    if(err){ throw new Error(err); }
		sess=req.session;
	  	sess.email=req.body.email;
	  	var user=req.session.email;
	});


  	
  });

	app.get('/isAdmin', function(req, res) {
	sess=req.session;
  	sess.email=req.body.email;
  	var user=req.session.email;

  	userRole = mysql.query("SELECT role_id FROM bugtracker.user WHERE email like '" + user + "'", function(err, rows){
	    if(err){ throw new Error(err); }
	    if (rows[0].role_id == 1) {
	    	res.redirect('/admin');
	    };
	});
  	
  });

  app.get('/getUsers', function(req, res) {
  	var user=req.query.user;
  	var userRole;
  	userRole = mysql.query("SELECT role_id FROM bugtracker.user WHERE email like '" + user + "'", function(err, rows){
	    if(err){ throw new Error(err); }
	    return rows[0].role_id;
	});
  	console.log("userRole : ", userRole );
  	console.log("user : ", user );

  	if ( userRole == 1) {
	  		mysql.query('SELECT * FROM bugtracker.user', function(err, rows){
		    if(err){ throw new Error(err); }
		    console.log("messages : ", rows[0] );
	    	res.send(JSON.stringify(rows[0]));
		})
	} else {
		res.send("You are not an administrator");
	}
  	
  });

    app.get('/getBugList', function(req, res) {
  	var user=req.query.user;
  	var userRole;
  	userRole = mysql.query("SELECT role_id FROM bugtracker.user WHERE email like '" + user + "'", function(err, rows){
	    if(err){ throw new Error(err); }
	    return rows[0].role_id;
	});
  	console.log("userRole : ", userRole );
  	console.log("user : ", user );

  	if ( userRole == 1) {
	  		mysql.query('SELECT * FROM bugtracker.user', function(err, rows){
		    if(err){ throw new Error(err); }
		    console.log("messages : ", rows[0] );
	    	res.send(JSON.stringify(rows[0]));
		})
	} else {
		res.send("You are not an administrator");
	}
  	
  });

  app.get('/:id', function(req, res) {
    var id = req.body.id;
  });

};