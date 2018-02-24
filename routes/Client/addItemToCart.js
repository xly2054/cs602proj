var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();
var Cart = DB.getCartModel();

module.exports = 
  //update document in database 
  function addItemtoCart(req , res , next){
    var id = req.params.id;
    var itemId = req.body.refId;
    console.log(itemId);
    var doc = Item.findById(itemId);
    console.log(doc);

    //update item if found, return 404 otherwise
    Cart.find({cid:id}, function (err, cart){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!cart){
        var cart = new Cart;
        cart.cid = id;
        //cart.Date = current;
        cart.save();
        }
        var order = {
          ItemName : doc.ItemName,
          ItemPrice: doc.ItemPrice,
          ItemQty :req.body.itemQty,
          SubTotal : req.body.itemQty * req.body.itemPrice
        };
        cart.Order = order;
        cart.save(function (err) {
          if (err)
            console.log("Error updating : %s ",err );
          res.redirect('/customers/' + id + '/cart');
        });
    });
  };
