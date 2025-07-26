const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function addContact(name, email) {
    const contactList = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    const newId = contactList.length ? contactList[contactList.length - 1].id + 1 : 1;
    const contact = { id: newId, name, email };
    contactList.push(contact);
    fs.writeFileSync(contactsPath, JSON.stringify(contactList, null, 2));
    console.log(`New contact saved: ${name} <${email}>`);
}

module.exports = addContact;
