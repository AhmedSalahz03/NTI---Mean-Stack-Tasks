const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function searchContact(name) {
    const contactList = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    const foundContacts = contactList.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
    if (foundContacts.length === 0) {
        console.log('No matching contacts found.');
    } else {
        console.log('Search results:');
        foundContacts.forEach(c => console.log(`• ${c.id}: ${c.name} <${c.email}>`));
    }
}

module.exports = searchContact;
