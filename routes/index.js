var express = require('express');
var router = express.Router();

// other modules
var displayChoice = require("./displayChoice");
var displayItems 	= require("./Admin/displayItems");
var addItem 			= require("./Admin/addItem");
var saveItem 			= require("./Admin/saveItem");
var editItem 			= require("./Admin/editItem");
var saveAfterEdit 	= require("./Admin/saveAfterEdit");
var deleteItem 		= require("./Admin/deleteItem");
var AddToCart = require("./Client/addItemToCart");
var displayCustomers = require("./displayCustomers");
var displayCustomerCart = require("./Client/displayCustomerCart");
//var PlaceOrder = require("./PlaceOrder");
var displayCustomerOrders = require("./displayCustomerOrders");
//var displayCustomerOrderById = require("./displayCustomerOrderById");
var admindisplayCustomers = require("./admindisplayCustomers")
var admindisplayCustomerOrders = require("./admindisplayCustomerOrders")
//var adminupdateCustomerOrders = require("./adminupdateCustomerOrders")
//var adminsaveafterEditCustomerOrders = require("./adminsaveafterEditCustomerOrders")
var admindeleteCustomerOrders = require("./admindeleteCustomerOrders")

//Data Modules
var DAO = require("./DAO/dataAccess");

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

router.get('/customers/:id/cart', displayCustomerCart);
router.post('/customer/:id/cart/add', AddToCart);
//router.post('customers/:id/cart', PlaceOrder);

router.get('/customers/:id/orderlist', displayCustomerOrders);

//router.get('customers/:id/:orderid', displayCustomerOrderById);

router.get('/admin/customerlist', admindisplayCustomers);

router.get('/admin/customers/:id/orderlist', admindisplayCustomerOrders);

//router.get('/admin/edit/:coid', 	adminupdateCustomerOrders);
//router.post('/admin/edit/:coid', 	adminsaveafterEditCustomerOrders);

router.get('/admin/delete/:coid', admindeleteCustomerOrders);


//Data Routes
router.get('/data/get/items', DAO.getItems);

module.exports = router;
