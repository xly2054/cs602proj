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

var customerDb = require('./dbConnection.js');

//Create connection
var Customer = customerDb.getCustomerModel(connection);

connection.on("open", function(){
	
	// create and save document objects
	var customer;

	customer = new Customer({
		Id: 1,
		CustomerName: 'John Doe'
	}); 
	customer.save();

	customer = new Customer({
		Id: 2,
		CustomerName: 'Jane Doe'
	}); 
	customer.save();

	customer = new Customer({
		Id: 3,
		CustomerName: 'Berry Smith'
	}); 
	customer.save();

	customer = new Customer({
		Id: 4,
		CustomerName: 'Melon Doe'
	}); 
	customer.save();

	customer.save(function(err) {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});
});