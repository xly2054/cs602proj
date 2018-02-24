var DB = require('../../DB/dbConnection.js');
var Cart = DB.getCartModel();

module.exports = 

    //display all items from data collection
	function displayCustomerCart(req , res , next){
        var custid = req.params.id;
        Cart.find({cid : custid}, function(err , orders){
            if (!orders){
                var cart = new Cart;
                cart.cid = custid;
                //cart.Date = current;
                cart.save();
            } else {
            if(err)
                console.log("Error : %s ",err);
                //{ItemName: String, ItemPrice: Number, ItemQty: Number, SubTotal: Number}
                var results = orders.map(function (order){
                    return {
                      order_ItemName: Order.ItemName,
                      order_ItemPrice: Order.ItemPrice,
                      order_ItemQty: Order.ItemQty,
                      order_subTotal: Order.SubTotal
                    }
                });
            }

        res.render('Client/displayCustomerCartView',
      	    {title:"Shopping Cart", custid, data:results});
    });
};