module.exports = 

	//render add item view
	function addItem(req , res , next){
  	res.render('addItemView', 
  		{title:"Add an item"});
};
