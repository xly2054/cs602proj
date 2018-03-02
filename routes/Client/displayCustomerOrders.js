var DB = require('../../DB/dbConnection.js');
var CustomerOrder = DB.getOrderModel();

module.exports = 

    //display all orders belong to an customer from data collection
	function displayCustomerOrders(req , res , next){
        CustomerOrder.find({cid:req.params.id}, function(err , customers){
            if(err)
                console.log("Error : %s ",err);

        var results = customers.map(function (customer){
      	    return {
                id: customer._id,
                coid: customer.Id,
      	    }
        });
        res.render('Client/displayCustomerOrdersView',
      	    {title:"List of Customer Orders", data:results});
    });
};