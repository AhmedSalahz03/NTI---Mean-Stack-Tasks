const addContact = require('./modules/addContact');
const removeContact = require('./modules/removeContact');
const searchContact = require('./modules/searchContact');
const listContacts = require('./modules/listContacts');

// Example usage:
// Add contacts
addContact('Ahmed', 'ahmed@example.com');
addContact('Mohamed', 'mohamed@example.com');
addContact('Youssef', 'youssef@example.com');

// List all contacts
listContacts();

// Search contacts
searchContact('ahmed');
searchContact('mohamed');

// Remove a contact
removeContact(2); 

// List again
listContacts();
