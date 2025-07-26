const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function listContacts() {
    const contactList = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    if (contactList.length === 0) {
        console.log('Your phonebook is empty.');
    } else {
        console.log('Contacts in your phonebook:');
        contactList.forEach(c => console.log(`• ${c.id}: ${c.name} <${c.email}>`));
    }
}

module.exports = listContacts;
