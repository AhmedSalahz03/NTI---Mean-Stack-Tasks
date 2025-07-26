const addContact = require('./modules/addContact');
const removeContact = require('./modules/removeContact');
const searchContact = require('./modules/searchContact');
const listContacts = require('./modules/listContacts');

// Example usage:
// Add contacts
addContact('Zeyad', 'zeyad@example.com');
addContact('Mohamed', 'moh@example.com');
addContact('Laila', 'laila@example.com');

// List all contacts
listContacts();

// Search contacts
searchContact('laila');
searchContact('mohamed');

// Remove a contact
removeContact(1); 

// List again
listContacts();
