const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const cartPath = path.join(__dirname, '../data/cart.json');

function addToCart(productId) {
    const productsList = JSON.parse(fs.readFileSync(productsPath));
    const cartItems = JSON.parse(fs.readFileSync(cartPath));
    const selectedProduct = productsList.find(item => item.id === productId);
    if (!selectedProduct) {
        console.log('No product found with the given ID.');
        return;
    }
    cartItems.push(selectedProduct);
    fs.writeFileSync(cartPath, JSON.stringify(cartItems, null, 2));
    console.log(`Product '${selectedProduct.name}' has been added to your cart.`);
}

module.exports = addToCart;
