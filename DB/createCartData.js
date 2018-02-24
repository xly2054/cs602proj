var mongoose = require('mongoose');
var credentials = require("./credentials.js");

//Database connection string
var dbUrl = 'mongodb://' +  credentials.host + ':' + credentials.port + '/' + credentials.database + '?ssl=true';

//Connection with authentication. Special handling for password
var connection = mongoose.createConnection(dbUrl, {
    auth: {
     user: credentials.username,
     password: credentials.password,
    }});

var cartDb = require('./dbConnection.js');

//Create connection
var Cart = cartDb.getCartModel(connection);

connection.on("open", function(){
	var cart = new Cart({
        cid : 'aaaa'
      });
      cart.save();

      var cart = new Cart({
        cid : 'bbbb'
      });
      cart.save();
      var cart = new Cart({
        cid : 'cccc'
      });
      cart.save();

      cart.save(function(err) {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});
});