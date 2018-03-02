var express = require('express');
var router = express.Router();

//Admin modules
var displayChoice = require("./displayChoice");
var displayItems 	= require("./Admin/displayItems");
var addItem 			= require("./Admin/addItem");
var saveItem 			= require("./Admin/saveItem");
var editItem 			= require("./Admin/editItem");
var saveAfterEdit 	= require("./Admin/saveAfterEdit");
var deleteItem 		= require("./Admin/deleteItem");
var admindisplayCustomers = require("./Admin/admindisplayCustomers")
var admindisplayCustomerOrders = require("./Admin/admindisplayCustomerOrders")
var adminViewCustomerOrders = require("./Admin/adminviewCustomerOrders")
var admindeleteCustomerOrders = require("./Admin/admindeleteCustomerOrders")
var adminEditOrder = require("./Admin/adminEditOrder")
var adminSaveOrder = require("./Admin/adminSaveOrder")

//Client modules
var AddToCart = require("./Client/addItemToCart");
var RemoveFromCart = require("./Client/removeFromCart");
var displayCustomers = require("./Client/displayCustomers");
var displayCustomerCart = require("./Client/displayCustomerCart");
var placeOrder = require("./Client/placeOrder");
var displayCustomerOrders = require("./Client/displayCustomerOrders");
var viewCustomerOderDetail = require("./Client/viewCustomerOrderDetail");
//var displayCustomerOrderById = require("./displayCustomerOrderById");
//var adminsaveafterEditCustomerOrders = require("./adminsaveafterEditCustomerOrders")


//Data Modules
var DAO = require("./DAO/dataAccess");

//API Module
var API = require("./API/api");

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
router.get('/customer/:id/cart/add/:itemid/:itemqty', AddToCart);
router.post('/customer/:id/cart/remove/:itemid', RemoveFromCart);
router.post('/customer/:id/cart/placeOrder', placeOrder);
router.get('/customer/view/:coid', 	viewCustomerOderDetail);

router.get('/customers/:id/orderlist', displayCustomerOrders);

//router.get('customers/:id/:orderid', displayCustomerOrderById);

router.get('/admin/customerlist', admindisplayCustomers);

router.get('/admin/customers/:id/orderlist', admindisplayCustomerOrders);

router.get('/admin/view/:coid', 	adminViewCustomerOrders);
router.get('/admin/edit/:coid', 	adminEditOrder);
router.post('/admin/edit/:coid', 	adminSaveOrder);

router.get('/admin/delete/:coid', admindeleteCustomerOrders);


//Data Routes
router.get('/data/get/items', DAO.getItems);

//API endpoints
router.get('/api/getitemsjson', API.getItemsJson);
router.get('/api/getitemsxml', API.getItemsXml);
router.get('/api/getitembynamejson/:name', API.getItemByNameJson);
router.get('/api/getitembynamexml/:name', API.getItemByNameXml);
router.post('/api/getiteminrangejson', API.getItemInRangeJson);
router.post('/api/getiteminrangexml', API.getItemInRangeXml);

module.exports = router;
