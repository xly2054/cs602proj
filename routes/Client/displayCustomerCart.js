var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();

module.exports = 

    //display all items from data collection
	function displayCustomerCart(req , res , next){
        var custid = req.params.id;
        Item.find({}, function(err , items){
            if(err)
                console.log("Error : %s ",err);

        res.render('Client/displayCustomerCartView',
      	    {title:"Shopping Cart", custid});
    });
};