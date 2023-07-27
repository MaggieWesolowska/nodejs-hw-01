const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

console.log(__dirname);

const contactsPath = path.join(
  __dirname,
  'db/contacts.json'
);

console.log(contactsPath);
