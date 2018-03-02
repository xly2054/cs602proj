var DB = require('../../DB/dbConnection.js');
var Order = DB.getOrderModel();

module.exports = 
  //update document in database 
  function saveOrder(req , res , next){
    var id = req.params.coid;

    //update item if found, return 404 otherwise
    Order.findOne({Id : id}, function (err, order){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!order)
        return res.render('404');
      
        order.Id = req.body.oid;
        order.OrderTotal = req.body.orderTotal;
        
        order.save(function (err) {
          if (err)
            console.log("Error updating : %s ",err );
          res.redirect('/admin/customerlist');
        });
    });
  };
