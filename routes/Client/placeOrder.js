var DB = require('../../DB/dbConnection.js');
var Customer = DB.getCustomerModel();

module.exports = 

    //display all items from data collection
	function displayCustomerCart(req , res , next){
        var custid = req.params.id;
        Customer.findById(custid, function(err , customer){
            if(err)
                console.log("Error : %s ",err);
                //{ItemName: String, ItemPrice: Number, ItemQty: Number, SubTotal: Number}
                var results = customer.Order.map(function (order){
                    return {
                      order_ItemName: order.ItemName,
                      order_ItemPrice: order.ItemPrice,
                      order_ItemQty: order.ItemQty,
                      order_subTotal: order.SubTotal
                    }
                });
                
            res.render('Client/displayCustomerCartView',
                {title:"Shopping Cart", custid, data:results});
            });
    }