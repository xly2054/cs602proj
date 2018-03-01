var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();


module.exports = 
  //update document in database 
  function addItemtoCart(req , res , next){
    var id = req.params.id;
    var itemId = req.params.itemid;
    var qty = parseInt(req.params.itemqty);
    Item.findById(itemId, function (err, item){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!item){
        return res.render('404');
      }
      var doc = new Item({
          Id: item.Id,
          ItemName: item.ItemName,
          ItemDescription: item.ItemDescription,
          ItemPrice: item.ItemPrice,
          ItemQuantity: item.ItemQuantity,
          ItemRefID : item._id
        });  
        if(err)
          console.log("Error Selecting : %s ", err);
          var Customer = DB.getCustomerModel();
          //var totalprice = parseInt(qty) * parseFloat(doc.ItemPrice);
          //update item if found, return 404 otherwise
          Customer.findById(id, function (err, customer){
              var order = {
                ItemName : doc.ItemName,
                ItemPrice: doc.ItemPrice,
                ItemQty :qty,
                SubTotal : parseFloat(qty * doc.ItemPrice).toFixed(2),
                ItemRefID : doc.ItemRefID
              };
              customer.Order.push(order);
              customer.save(function (err) {
                if (err)
                  console.log("Error updating : %s ",err );
                res.redirect('/customers/' + id + '/cart');
              });
          });    
    });
  };
