var DB = require('./dbConnection.js');
var CustomerOrder = DB.getCustomerModel();

module.exports = 

    //display all customers from data collection
	function displayCustomerOrders(req , res , next){
    CustomerOrder.find({}, function(err , customerorders){
      if(err)
          console.log("Error : %s ",err);

      var results = customerorders.map(function (customerorder){
      	return {
            id: customerorder._id,
            coid: customerorder.Id,
      	}
      });
      res.render('displayCustomerOrdersView',
      	{title:"List of Customer Orders", data:results});
    });
};