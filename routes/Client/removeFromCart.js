var DB = require('../../DB/dbConnection.js');
var Customer = DB.getCustomerModel();


module.exports = 
  //update document in database 
  function removeItemFromCart(req , res , next){
    var id = req.params.id;
    var itemId = req.params.itemid;
      Customer.findById(id, function (err, customer){
          customer.Order.splice(itemId,1);
          customer.save(function (err) {
            if (err)
              console.log("Error updating : %s ",err );
              res.redirect('/customers/' + id + '/cart');
          });    
    });
  };
