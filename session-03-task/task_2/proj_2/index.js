const addToCart = require('./modules/addToCart');
const removeFromCart = require('./modules/removeFromCart');
const listCart = require('./modules/listCart');
const calculateTotal = require('./modules/calculateTotal');

// Example usage:
addToCart(1); // Laptop
addToCart(2); // Phone
addToCart(3); // Headphones

listCart();

removeFromCart(2); // Remove Phone

listCart();

calculateTotal();
