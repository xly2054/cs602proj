var DB = require('./dbConnection.js');
var Item = DB.getModel();

module.exports = 
  //update document in database 
  function saveItem(req , res , next){
    var id = req.params.id;

    //update item if found, return 404 otherwise
    Item.findById(id, function (err, item){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!item)
        return res.render('404');
      
        item.Id = req.body.iid;
        item.ItemName = req.body.itemName;
        item.ItemDescription = req.body.itemDescription;
        item.ItemPrice = req.body.itemPrice;
        item.ItemQuantity = req.body.itemQty;
        
        item.save(function (err) {
          if (err)
            console.log("Error updating : %s ",err );
          res.redirect('/items');
        });
    });
  };
