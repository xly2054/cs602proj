//event handler for OnClick
function addItem(){
    window.location.href = '/items/add';
}

function cancelAdd(){
    window.location.href = '/items';
}

function gotocustomer(){
    window.location.href = '/customers';
}

function gotoadmin(){
    window.location.href = '/items';
}

function placeOrder(){
    window.location.href = '/customers/:id/cart';
}

function ManageCustomerOders(){
    window.location.href = '/admin/customerlist'
}