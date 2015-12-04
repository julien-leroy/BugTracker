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

  messages = mysql.query('SELECT * FROM user', function(err, rows){
    if(err){ throw new err; }
  });
  console.log("messages : ", messages );
  return JSON.parse(messages.toString());
};

UserModel.prototype.createUser = function(name, role){

  messages = mysql.query('INSERT INTO bug-tracker.user (name, role) VALUES (' + name + ', ' + role + ');', function(err, rows){
    if(err){ throw new err; }
  });
  console.log("messages : ", messages );
  return JSON.parse(messages.toString());
}

module.exports = UserModel;