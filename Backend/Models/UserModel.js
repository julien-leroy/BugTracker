var _            = require('lodash-node');
var MySQL        = require('mysql');
var amqp         = require('../helpers/amqp');

function UserModel(id, accountId, title) {
  this.id        = id || -1;
  this.accountId = accontId || -1;
  this.title     = title || null;
}

UserModel.test = function(){

	messages = mysql.query('SELECT * FROM mailing', function(err, rows){
		if(err){ throw new err; }
	});
  return messages;
}

UserModel.sendToWorker = function(json){

  amqp({queues:['sendQueue'], exchanges:['sendExchange']}, function(err, amqp) {
    if(err) { throw new err; }
    amqp.exchanges.sendExchange.publish('ok', json);
  });

}

module.exports = UserModel;