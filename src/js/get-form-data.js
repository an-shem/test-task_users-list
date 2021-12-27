// import contactsApi from '../services/api';
import { creatContact } from './create-contact';
import { addNewContact } from './add-new-contact';

export const getFormData = e => {
  e.preventDefault();
  const name = e.target.name.value;
  const number = e.target.number.value;
  e.target.reset();
  const newContact = creatContact({ name, number });

  // Добавляем контакт в базу данных
  // const newContact = contactsApi.addContact({ name, number });

  addNewContact(newContact);
};
