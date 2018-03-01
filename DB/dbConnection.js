var mongoose = require('mongoose');
var credentials = require("./credentials.js");
var DataTable = require('mongoose-datatable');

DataTable.configure({ verbose: false, debug : false });
mongoose.plugin(DataTable.init);
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

//Schema for customer document
var customerSchema = new Schema({
	Id: Number,
	CustomerName: String,
	Order: [
		{ItemName: String, ItemPrice: Number, ItemQty: Number, SubTotal: Number, ItemRefID: String}
	]
});

//Schema for order document
var orderSchema = new Schema({
	Id: Number,
	cid: Number,
	OrderTotal: Number,
	Order: [
		{ItemName: String, ItemPrice: Number, ItemQty: Number, SubTotal: Number, ItemRefID: String}
	]
});


//Export model method, create connection if not connected to database
module.exports = {	
	getItemModel: function getItemModel() {
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
	},
	getOrderModel: function getOrderModel() {
		if (connection == null) {
			console.log("Creating connection and model...");
			connection = mongoose.createConnection(dbUrl, {
                auth: {
                 user: credentials.username,
                 password: credentials.password,
                }});
			
		};
		model = connection.model("ordermodels", orderSchema);
		return model;
	}
};


