var connection = require('./connection.js');
var orm = {
	selectAll: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result) {
			if (err) {throw err;}
			cb(result);
		});
	},
  
	insertOne: function(val, cb){
		var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
		connection.query(queryString, [val], function(err, result){
			if(err){throw err;}
			cb(result);
		});
	},
  
	updateOne: function(val, cb){
		var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
		connection.query(queryString, [val], function(err, result){
			if(err){throw err;}
			cb(result);
		});
	}
}
module.exports = orm;
