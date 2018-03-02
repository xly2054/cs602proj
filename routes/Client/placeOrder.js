var DB = require('../../DB/dbConnection.js');
var Customer = DB.getCustomerModel();
var Order = DB.getOrderModel();
var Item = DB.getItemModel();
var itemQty = 0;

function updateInventory(refID, Qty){
    Item.findById(refID, function(err , item){
        if (item.ItemQuantity - Qty >= 0){
            item.ItemQuantity = item.ItemQuantity - Qty;
            item.save();
        } 
        itemQty = item.ItemQuantity - Qty;
    });
    return itemQty - Qty >= 0;
}

module.exports = 

    //display all items from data collection
	function displayCustomerCart(req , res , next){
        var custid = req.params.id;
        Customer.findById(custid, function(err , customer){
            if(err)
                console.log("Error : %s ",err);
                
                var date = new Date();
                
                var OrderID = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() + 1 ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
                var order = new Order({
                    Id: OrderID,
                    cid: customer.Id,
                    Order: customer.Order,
                    OrderTotal: 0
                });
                var orderTotal = 0;
                for (i = 0; i < customer.Order.length; i++) {
                    var refID = customer.Order[i].ItemRefID;
                    var isValid = updateInventory(refID, customer.Order[i].ItemQty);
                    if (isValid){
                        orderTotal += customer.Order[i].SubTotal;
                    } else {
                        order.Order.splice(refID, 1);
                    }
                }
                order.OrderTotal = orderTotal;
                order.save();

                customer.Order = [];
                customer.save();

                var results = order.Order.map(function (order){
                    return {
                      order_ItemName: order.ItemName,
                      order_ItemPrice: order.ItemPrice,
                      order_ItemQty: order.ItemQty,
                      order_subTotal: order.SubTotal
                    }
                });
            res.render('Client/orderSummary',
                {title:"Shopping Cart", data:results, orderTotal});
            });
    }