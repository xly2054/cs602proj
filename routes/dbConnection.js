var mongoose = require('mongoose');
var credentials = require("./credentials.js");

//Connection string
var dbUrl = 'mongodb://' +  credentials.host + ':' + credentials.port + '/' + credentials.database + '?ssl=true';

//Initializing connection variables
var connection = null;
var model = null;
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//Schema for Inventory document
var itemSchema = new Schema({
	Id: Number,
	ItemName: String,
	ItemDescription: String,
	ItemPrice: Number,
	ItemQuantity: Number
});

//Schema for Inventory document
var customerSchema = new Schema({
	Id: Number,
	CustomerName: String
});

//Export model method, create connection if not connected to database
module.exports = {	
	getModel: function getModel() {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl, {
                auth: {
                 user: credentials.username,
                 password: credentials.password,
                }});
			
		};
		model = connection.model("itemmodels", itemSchema);
		return model;
	},
	getCustomerModel: function getCustomerModel() {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl, {
                auth: {
                 user: credentials.username,
                 password: credentials.password,
                }});
			
		};
		model = connection.model("customermodels", customerSchema);
		return model;
	}
};


