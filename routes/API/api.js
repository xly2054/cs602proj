var DB = require('../../DB/dbConnection.js');
var Item = DB.getItemModel();
var xmlify = require('xmlify');

//Reteive data from Mongo
module.exports = {
    //display all items from data collection
	  getItemsJson : function getItems(req , res){
        	Item.find({}, function(err, items) {	
                if (err)
                res.send(err);
              res.json(items);
            });
          },
    getItemsXml : function getItems(req , res){
        	Item.find({}, function(err, items) {	
                if (err)
                    res.send(err);
            res.set('Content-Type', 'text/xml');
            res.send(xmlify(items, 'Items'));  
            });
          },
    getItemByNameJson : function getItems(req , res){
          Item.find({ ItemName : req.params.name }, function(err, items) {	
                if (err)
                    res.send(err);
              res.json(items);
            });
          },
    getItemByNameXml : function getItems(req , res){
          Item.find({ ItemName : req.params.name }, function(err, items) {	
                if (err)
                    res.send(err);
                res.set('Content-Type', 'text/xml');
                res.send(xmlify(items, 'Items'));  
            });
          },
    getItemInRangeJson : function getCustomers(req , res){
        Item.find({ItemPrice: { $gt: req.body.Min, $lt: req.body.Max }}, function(err, items) {	
          if (err)
              res.send(err);
      res.json(items);
      });
    },
    getItemInRangeXml : function getCustomers(req , res){
      Item.find({ItemPrice: { $gt: req.body.Min, $lt: req.body.Max }}, function(err, items) {	
        if (err)
            res.send(err);
    res.set('Content-Type', 'text/xml');
    res.send(xmlify(items, 'Items'));  
    });
  },
};
