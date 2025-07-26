const fs = require('fs');
const path = require('path');

const cartPath = path.join(__dirname, '../data/cart.json');

function listCart() {
    const cart = JSON.parse(fs.readFileSync(cartPath));
    if (cart.length === 0) {
        console.log('Cart is empty.');
        return;
    }
    console.log('Cart items:');
    cart.forEach(item => {
        console.log(`- ${item.name} (ID: ${item.id}) - ${item.price} EGP`);
    });
}

module.exports = listCart;
