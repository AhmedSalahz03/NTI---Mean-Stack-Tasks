const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function searchContact(name) {
    const contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    const matched = contacts.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
    if (matched.length === 0) {
        console.log('No contacts found.');
    } else {
        console.log('Matched Contacts:');
        matched.forEach(c => console.log(`- ${c.id}: ${c.name} (${c.email})`));
    }
}

module.exports = searchContact;
