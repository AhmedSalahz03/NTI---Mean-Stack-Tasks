const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const cartPath = path.join(__dirname, '../data/cart.json');

function addToCart(productId) {
    const products = JSON.parse(fs.readFileSync(productsPath));
    const cart = JSON.parse(fs.readFileSync(cartPath));
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log('Product not found.');
        return;
    }
    cart.push(product);
    fs.writeFileSync(cartPath, JSON.stringify(cart, null, 2));
    console.log(`Added ${product.name} to cart.`);
}

module.exports = addToCart;
