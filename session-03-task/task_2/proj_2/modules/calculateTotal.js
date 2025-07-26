const fs = require('fs');
const path = require('path');

const cartPath = path.join(__dirname, '../data/cart.json');

function calculateTotal() {
    const cartItems = JSON.parse(fs.readFileSync(cartPath));
    const totalAmount = cartItems.reduce((sum, product) => sum + product.price, 0);
    console.log(`Total amount for your cart: ${totalAmount} EGP`);
    return totalAmount;
}

module.exports = calculateTotal;
