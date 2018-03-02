var DB = require('../../DB/dbConnection.js');
var Customer = DB.getCustomerModel();

module.exports = 

    //display all customers from data collection
	function displayCustomers(req , res , next){
    Customer.find({}, function(err , customers){
      if(err)
          console.log("Error : %s ",err);

      var results = customers.map(function (customer){
      	return {
            id: customer._id,
            cid: customer.Id,
            customerName: customer.CustomerName
      	}
      });
      res.render('Admin/admindisplayCustomersView',
      	{title:"List of Customers", data:results});
    });
};