const fs = require('fs');
const path = require('path');

const cartPath = path.join(__dirname, '../data/cart.json');

function removeFromCart(productId) {
    const cart = JSON.parse(fs.readFileSync(cartPath));
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) {
        console.log('Product not found in cart.');
        return;
    }
    const removed = cart.splice(index, 1)[0];
    fs.writeFileSync(cartPath, JSON.stringify(cart, null, 2));
    console.log(`Removed ${removed.name} from cart.`);
}

module.exports = removeFromCart;
