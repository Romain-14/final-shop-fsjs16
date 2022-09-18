export const calculateTotalAmount = (cart) => {    
    let totalPrice = 0;
    cart.forEach(product => {
        let total = parseFloat(product.price) * parseInt(product.quantity);
        totalPrice += total
    });
    return totalPrice;
}

export const addToCart = (cart, productToAdd, quantity) => {
    let index = cart.findIndex((c) => c.id === productToAdd.id);
    
    let cartCopy = JSON.parse(JSON.stringify(cart));
    if(index === -1){
        cartCopy = [...cartCopy, {...productToAdd, quantity}];
    } else {
        cartCopy[index].quantity += parseInt(quantity);
    }
    
    localStorage.setItem("cart", JSON.stringify(cartCopy));

    return cartCopy;
}

export const updateCart = (cart, productToUpdate, type, quantity) => {
    
    let index = cart.findIndex((c) => c.product_ID === productToUpdate.product_ID);
   
    let cartCopy = JSON.parse(JSON.stringify(cart));
    if(index === -1){
        throw Error('Erreur qui ne devrait pas :| !')
    } else {
        if(type === "plus") cartCopy[index].quantity += parseInt(quantity);
        if(type === "moins") cartCopy[index].quantity -= parseInt(quantity);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart))

    return cartCopy;
}