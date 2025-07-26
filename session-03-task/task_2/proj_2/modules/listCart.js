const fs = require('fs');
const path = require('path');

const cartPath = path.join(__dirname, '../data/cart.json');

function listCart() {
    const cartItems = JSON.parse(fs.readFileSync(cartPath));
    if (cartItems.length === 0) {
        console.log('Your shopping cart is currently empty.');
        return;
    }
    console.log('Items in your cart:');
    cartItems.forEach(product => {
        console.log(`• ${product.name} [ID: ${product.id}] - Price: ${product.price} EGP`);
    });
}

module.exports = listCart;
