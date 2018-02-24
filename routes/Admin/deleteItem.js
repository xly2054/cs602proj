var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();

module.exports = 
  
  //delete Item by document id
	function deleteItem(req , res , next){
    var id = req.params.id;
    
    //delete item if found, return 404 otherwise
    Item.findById(id, function (err, item){
      if(err)
        console.log("Error Selecting : %s ", err); 
      if (!item)
        return res.render('404');
      
      item.remove(function (err) {
        if (err)
          console.log("Error deleting : %s ",err );
        res.redirect('/items');
      });        
    });
  };

  