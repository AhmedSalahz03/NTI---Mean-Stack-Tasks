const fs = require('fs');
const path = require('path');

const cartPath = path.join(__dirname, '../data/cart.json');

function removeFromCart(productId) {
    const cartItems = JSON.parse(fs.readFileSync(cartPath));
    const itemIndex = cartItems.findIndex(product => product.id === productId);
    if (itemIndex === -1) {
        console.log('No such product in your cart.');
        return;
    }
    const removedProduct = cartItems.splice(itemIndex, 1)[0];
    fs.writeFileSync(cartPath, JSON.stringify(cartItems, null, 2));
    console.log(`Product '${removedProduct.name}' has been removed from your cart.`);
}

module.exports = removeFromCart;
