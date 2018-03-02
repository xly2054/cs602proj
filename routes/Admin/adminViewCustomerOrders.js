var DB = require('../../DB/dbConnection.js');
var Order = DB.getOrderModel();

module.exports = 

  //edit selected item by document id
	function editItem(req , res , next){
    var id = req.params.coid;

    //edit item if found, return 404 otherwise
    Order.findOne({Id : id}, function (err, order){
      if(err)
        console.log("Error Selecting : %s ", err); 
      var results = order.Order.map(function (order){
          return {
            order_ItemName: order.ItemName,
            order_ItemPrice: order.ItemPrice,
            order_ItemQty: order.ItemQty,
            order_subTotal: order.SubTotal
          }
      });
      orderTotal = order.OrderTotal;
    res.render('Admin/orderDetail',
      {title:"Shopping Cart", data:results, orderTotal}); 
    });
};

