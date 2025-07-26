const fs = require('fs');
const path = require('path');

const cartPath = path.join(__dirname, '../data/cart.json');

function calculateTotal() {
    const cart = JSON.parse(fs.readFileSync(cartPath));
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total price: ${total} EGP`);
    return total;
}

module.exports = calculateTotal;
