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

var itemDb = require('./dbConnection.js');

//Create connection
var Item = itemDb.getItemModel(connection);

connection.on("open", function(){
	
	// create and save document objects
	var item;

	item = new Item({
		Id: 1,
		ItemName: 'Apple',
		ItemDescription: 'Fuji',
		ItemPrice: 1,
		ItemQuantity: 3000
	}); 
	item.save();

	item = new Item({
		Id: 2,
		ItemName: 'Pear',
		ItemDescription: 'Bosc Pear',
		ItemPrice: 3,
		ItemQuantity: 2000
	}); 
	item.save();

	item = new Item({
		Id: 3,
		ItemName: 'Berry',
		ItemDescription: 'Blueberry',
		ItemPrice: 2,
		ItemQuantity: 1000
	}); 
	item.save();

	item = new Item({
		Id: 4,
		ItemName: 'Melon',
		ItemDescription: 'Watermelon',
		ItemPrice: 5,
		ItemQuantity: 500
	}); 
	item.save();

	item.save(function(err) {
		connection.close();
		if (err) throw err;
		console.log("Success!");
	});
});