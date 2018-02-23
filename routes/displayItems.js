var DB = require('./dbConnection.js');
var Item = DB.getModel();

module.exports = 

    //display all items from data collection
	function displayItems(req , res , next){
    Item.find({}, function(err , items){
      if(err)
          console.log("Error : %s ",err);

      var results = items.map(function (item){
      	return {
            id: item._id,
            iid: item.Id,
            itemName: item.ItemName,
            itemDescription: item.ItemDescription,
            itemPrice: item.ItemPrice,
            itemQuantity: item.ItemQuantity
      	}
      });
      res.render('displayItemsView',
      	{title:"List of Items", data:results});
    });
};