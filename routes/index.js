var express = require('express');
var router = express.Router();

// other modules
var displayChoice = require("./displayChoice");
var displayItems 	= require("./displayItems");
var addItem 			= require("./addItem");
var saveItem 			= require("./saveItem");
var editItem 			= require("./editItem");
var saveAfterEdit 	= require("./saveAfterEdit");
var deleteItem 		= require("./deleteItem");
//var addtocart = require("./addtocart");
var displayCustomers = require("./displayCustomers");
//var displayCustomerCart = require("./displayCustomerCart");
//var PlaceOrder = require("./PlaceOrder");
var displayCustomerOrders = require("./displayCustomerOrders");
//var displayCustomerOrderById = require("./displayCustomerOrderById");
var admindisplayCustomers = require("./admindisplayCustomers")
var admindisplayCustomerOrders = require("./admindisplayCustomerOrders")
//var adminupdateCustomerOrders = require("./adminupdateCustomerOrders")
//var adminsaveafterEditCustomerOrders = require("./adminsaveafterEditCustomerOrders")
var admindeleteCustomerOrders = require("./admindeleteCustomerOrders")

// router specs
router.get('/', function(req, res, next) {
  res.redirect('/welcome');
});
router.get('/welcome',          displayChoice);

router.get('/items', 						displayItems);

router.get('/items/add', 				addItem);
router.post('/items/add', 			saveItem);

router.get('/items/edit/:id', 	editItem);
router.post('/items/edit/:id', 	saveAfterEdit);

router.get('/items/delete/:id', deleteItem);

router.get('/customers',         displayCustomers);

//router.get('customers/:id/cart', displayCustomerCart);
//router.post('customers/:id/cart', PlaceOrder);

router.get('/customers/:id/orderlist', displayCustomerOrders);

//router.get('customers/:id/:orderid', displayCustomerOrderById);

router.get('/admin/customerlist', admindisplayCustomers);

router.get('/admin/customers/:id/orderlist', admindisplayCustomerOrders);

//router.get('/admin/:cid/edit/:coid', 	adminupdateCustomerOrders);
//router.post('/admin/:cid/edit/:coid', 	adminsaveafterEditCustomerOrders);

router.get('admin/:cid/delete/:coid', admindeleteCustomerOrders);


module.exports = router;
