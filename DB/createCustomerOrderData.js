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
var CustomerOrder = customerDb.getOrderModel(connection);

connection.on("open", function(){
	
	// create and save document objects
	var customerorder;

	customerorder = new CustomerOrder({
		Id: 1,
		cid: 1
	}); 
	customerorder.save();

	customerorder = new CustomerOrder({
		Id: 2,
		cid: 1
	}); 
	customerorder.save();

	customerorder = new CustomerOrder({
		Id: 3,
		cid: 2
	}); 
	customerorder.save();

	customerorder = new CustomerOrder({
		Id: 4,
		cid: 1
	}); 
    customerorder.save();
    
    customerorder = new CustomerOrder({
		Id: 5,
		cid: 1
	}); 
    customerorder.save();
    
    customerorder = new CustomerOrder({
		Id: 6,
		cid: 3
	}); 
    customerorder.save();
    
    customerorder = new CustomerOrder({
		Id: 7,
		cid: 4
	}); 
    customerorder.save();
    
    customerorder = new CustomerOrder({
		Id: 8,
		cid: 2
	}); 
    customerorder.save();
    
    customerorder = new CustomerOrder({
		Id: 9,
		cid: 1
	}); 
    customerorder.save();
    
    customerorder = new CustomerOrder({
		Id: 10,
		cid: 3
	}); 
	customerorder.save();

	customerorder.save(function(err) {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});
});