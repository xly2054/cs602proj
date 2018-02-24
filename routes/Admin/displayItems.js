var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();

module.exports = 

    //display all items from data collection
	function displayItems(req , res , next){
    Item.find({}, function(err , items){
      if(err)
          console.log("Error : %s ",err);

      res.render('Admin/displayItemsView',
      	{title:"List of Items"});
    });
};