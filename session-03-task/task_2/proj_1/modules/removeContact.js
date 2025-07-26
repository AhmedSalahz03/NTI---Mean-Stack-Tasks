const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function removeContact(id) {
    const contactList = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    const updatedList = contactList.filter(c => c.id !== id);
    fs.writeFileSync(contactsPath, JSON.stringify(updatedList, null, 2));
    console.log(`Contact entry with ID ${id} has been deleted.`);
}

module.exports = removeContact;
