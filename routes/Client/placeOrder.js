var DB = require('../../DB/dbConnection.js');
var Customer = DB.getCustomerModel();
var Order = DB.getOrderModel();
var Item = DB.getItemModel();

module.exports = 

    //display all items from data collection
	function displayCustomerCart(req , res , next){
        var custid = req.params.id;
        Customer.findById(custid, function(err , customer){
            if(err)
                console.log("Error : %s ",err);
                
                var order = new Order({
                    id: "123",
                    cid: customer._id,
                    Order: customer.Order,
                    OrderTotal: 0
                });
                for (i = 0; i < customer.Order.length; i++) {
                    var refID = customer.Order[i].SubTotal;
                    Item.findById(refID, function(err , item){
                        item.ItemQuantity = item.ItemQuantity - customer.Order[i].ItemQty;
                        item.save();
                    });
                    orderTotal += customer.Order[i].SubTotal;
                }
                order.OrderTotal = orderTotal;
                order.save();

            res.render('Client/displayCustomerCartView',
                {title:"Shopping Cart", custid, data:results});
            });
    }