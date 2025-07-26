const addToCart = require('./modules/addToCart');
const removeFromCart = require('./modules/removeFromCart');
const listCart = require('./modules/listCart');
const calculateTotal = require('./modules/calculateTotal');

// Example usage:
addToCart(1); // Add Laptop
addToCart(2); // Add Phone

listCart(); // Show cart contents

removeFromCart(2); // Remove Phone

listCart(); // Show updated cart

calculateTotal(); // Show total price
