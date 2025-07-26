const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function listContacts() {
    const contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    if (contacts.length === 0) {
        console.log('No contacts available.');
    } else {
        console.log('All Contacts:');
        contacts.forEach(c => console.log(`- ${c.id}: ${c.name} (${c.email})`));
    }
}

module.exports = listContacts;
