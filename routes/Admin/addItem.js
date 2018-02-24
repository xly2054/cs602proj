module.exports = 

	//render add item view
	function addItem(req , res , next){
  	res.render('Admin/addItemView', 
  		{title:"Add an item"});
};
