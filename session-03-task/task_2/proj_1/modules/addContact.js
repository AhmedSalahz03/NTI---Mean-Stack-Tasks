const fs = require('fs');
const path = require('path');
const contactsPath = path.join(__dirname, '../data/contacts.json');

function addContact(name, email) {
    const contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    const id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
    const newContact = { id, name, email };
    contacts.push(newContact);
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    console.log(`Contact added: ${name} (${email})`);
}

module.exports = addContact;
