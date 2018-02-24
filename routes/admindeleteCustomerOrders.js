var DB = require('../DB/dbConnection.js');
var CustomerOrder = DB.getCustomerModel();

module.exports = 
  
  //delete Order by document id
	function deleteOrder(req , res , next){
    var id = req.params.id;
    
    //delete order if found, return 404 otherwise
    Order.findById(id, function (err, order){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!order)
        return res.render('404');
      
      order.remove(function (err) {
        if (err)
          console.log("Error deleting : %s ",err );
        res.redirect('/admin/customers/:id/orderlist');
      });        
    });
  };

  