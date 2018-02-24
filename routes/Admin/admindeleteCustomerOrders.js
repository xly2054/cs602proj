var DB = require('../../DB/dbConnection.js');
var Order = DB.getOrderModel();

module.exports = 
  
  //delete Order by document id
	function deleteOrder(req , res , next){
    var id = req.params.coid;
    
    //delete order if found, return 404 otherwise
    Order.remove({Id:id}, function (err, orders){
           
      if (err) {
          console.log(err);
      }
    
      res.redirect('/admin/customerlist');   
    });
  };

  