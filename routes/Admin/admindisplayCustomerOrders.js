var DB = require('../../DB/dbConnection.js');
var adminCustomerOrder = DB.getOrderModel();

module.exports = 

    //display all customers from data collection
	function admindisplayCustomerOrders(req , res , next){
    adminCustomerOrder.find({cid:req.params.id}, function(err , admincustomerorders){
      if(err)
          console.log("Error : %s ",err);

      var results = admincustomerorders.map(function (admincustomerorder){
      	return {
            id: admincustomerorder._id,
            coid: admincustomerorder.Id,
      	}
      });
      res.render('Admin/admindisplayCustomerOrdersView',
      	{title:"List of Selected Customer Orders", data:results});
    });
};