const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function removeContact(id) {
    const contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    const filtered = contacts.filter(c => c.id !== id);
    fs.writeFileSync(contactsPath, JSON.stringify(filtered, null, 2));
    console.log(`Contact with ID ${id} removed.`);
}

module.exports = removeContact;
