var MySQL        = require('mysql');
var mysqlConf    = require('../../SETTINGS').mysql;
var mysql        = MySQL.createConnection(mysqlConf);

function UserModel(id, accountId, title) {
  this.id        = id || -1;
  this.accountId = accontId || -1;
  this.title     = title || null;
}

/**
 * [fromJSON description]
 * @param  {json}   json Json contenant les informations relatives au message et à l'utilisateur
 * @return {object}      Retourn le MaillingModel
 */
UserModel.prototype.fromJSON = function(json) {

  id        = parseInt(json.id, 10);
  accountId = parseInt(json.accountId, 10);
  title     = json.title;

  this.id        = id;
  this.accountId = accountId;
  this.title     = title;

  return this;
};

UserModel.test = function(){

  messages = mysql.query('SELECT * FROM bugtracker.user', function(err, rows){
    if(err){ throw new err; }
    console.log("messages : ", rows[0] );
  });
  return JSON.parse(messages.toString());
};

UserModel.createUser = function(name, email, role){

  messages = mysql.query('INSERT INTO bugtracker.user (name, role) VALUES (' + name + ', ' + role + ');', function(err, rows){
    if(err){ throw new err; }
  });
  return JSON.parse(messages.toString());
}

UserModel.changeEmail = function(nom, prenom, email, password, role_id){

  messages = mysql.query('INSERT INTO bugtracker.user (lastname, firstname, email, password, role_id) VALUES (' + name + ', ' + role + ');', function(err, rows){
    if(err){ throw new err; }
  });
  return JSON.parse(messages.toString());
}

UserModel.showUsers = function(nom, prenom, email, password, role_id){

  messages = mysql.query('INSERT INTO bugtracker.user (lastname, firstname, email, password, role_id) VALUES (' + name + ', ' + role + ');', function(err, rows){
    if(err){ throw new err; }
  });
  return JSON.parse(messages.toString());
}


module.exports = UserModel;