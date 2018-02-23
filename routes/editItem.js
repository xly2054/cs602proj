var DB = require('./dbConnection.js');
var Item = DB.getModel();

module.exports = 

  //edit selected item by document id
	function editItem(req , res , next){
    var id = req.params.id;

    //edit item if found, return 404 otherwise
    Item.findById(id, function (err, item){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!item)
        return res.render('404');
      res.render('editItemView',
          {title:"Edit Item", 
           data: {id: item._id,
                  iid: item.Id,
                  itemName: item.ItemName,
                  itemDescription: item.ItemDescription,
                  itemPrice: item.ItemPrice,
                  itemQuantity: item.ItemQuantity
                }
          });                
    });
};

