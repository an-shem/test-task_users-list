import { refs } from '..';
// import contactsApi from '../services/api';
import { unblockForm } from './unblock-form';
import { createEditedMarkup } from './markup/create-edited-markup';

export const updateContact = (e, id, elem) => {
  const name = e.target.name.value;
  const number = e.target.number.value;

  // Обновляем контакт в базе данных
  // const updatedContact = contactsApi.updateContact(id, { name, number });
  // elem.innerHTML = createEditedMarkup(updatedContact);
  // refs.buttonsContact = document.querySelectorAll('.button');
  // unblockForm();

  setTimeout(() => {
    elem.innerHTML = createEditedMarkup({ name, number, id });
    refs.buttonsContact = document.querySelectorAll('.button');
    unblockForm();
  }, 2000);
};
