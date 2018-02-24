var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();
var Customer = DB.getCustomerModel();
var Order = DB.getOrderModel();
var Cart = DB.getCartModel();
var dataTable = require('mongoose-datatable');


module.exports = {
    //display all items from data collection
	getItems : function getItems(req , res){
        Item.dataTable(req.query, function (err, items) {
            res.send(items);
        });
    },
    getCart : function getItems(req , res){
        Cart.dataTable(req.query, function (err, items) {
            res.send(items);
        });
    },
};