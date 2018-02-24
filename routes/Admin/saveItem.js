var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();

module.exports = 

  //add new item doucment to database
  function saveItem(req , res , next){

    var item = new Item({
      Id:                req.body.iid,
      ItemName:          req.body.itemName,
      ItemDescription:   req.body.itemDescription,
      ItemPrice:         req.body.itemPrice,
      ItemQuantity:      req.body.itemQty
    }); 
 
    item.save(function (err){
      if(err)
        console.log("Error : %s ",err);
      res.redirect('/items');
    });
  };
