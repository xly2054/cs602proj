var DB = require('../../DB/dbConnection.js');
var Order = DB.getOrderModel();

module.exports = 

  //edit selected item by document id
	function editOrder(req , res , next){
    var id = req.params.coid;

    //edit item if found, return 404 otherwise
    Order.findOne({Id : id}, function (err, order){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!order)
        return res.render('404');
      res.render('Admin/editOrderView',
          {title:"Edit Item", 
           data: {oid: order.Id,
                  orderTotal: order.OrderTotal
                }
          });                
    });
};

