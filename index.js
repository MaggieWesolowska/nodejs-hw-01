const contacts = require('./contacts');
const { program } = require('commander');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({
  action,
  id,
  name,
  email,
  phone,
}) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.log('Table with all contacts:');
      console.table(allContacts);
      break;
    case 'get':
      const oneContact = await contacts.getContactById(id);
      console.log('Contact selected:');
      console.log(oneContact);
      break;
    case 'add':
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      console.log('New contact created:');
      console.log(newContact);
      break;
    case 'remove':
      const removeContact = await contacts.removeContact(
        id
      );
      console.log('Contact has been removed:');
      console.log(removeContact);
      break;

    default:
      console.warn('Unknown action type!');
  }
};

invokeAction(argv);
