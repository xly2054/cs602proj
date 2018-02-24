var DB = require('../../DB/dbConnection.js');
var Cart = DB.getCartModel();

module.exports = 
  //update document in database 
  function addItemtoCart(req , res , next){
    var id = req.params.id;

    //update item if found, return 404 otherwise
    Cart.findById(id, function (err, cart){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!cart){
        var cart = new Cart;
        cart.cid = id;
        //cart.Date = current;
        cart.save();
        }
        var order = {
          ItemName : req.body.itemName,
          ItemPrice: req.body.itemPrice,
          ItemQty : req.body.itemQty,
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
